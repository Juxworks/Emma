import type { Sale } from "./sales";

// Sales recorded at an implausible $psf; flagged rather than hidden.
export const ANOMALY_PSF = 1000;

// A street is "low entry" / "premium" when its median $psf is this far from the area median.
export const SIGNAL_BAND = 0.08;

export type Signal = "low" | "median" | "premium";

export const SIGNALS: Record<Signal, { label: string; color: string; description: string }> = {
  low: { label: "Low entry", color: "#12a17d", description: `${SIGNAL_BAND * 100}%+ below area median $psf` },
  median: { label: "At median", color: "#8b929c", description: `Within ±${SIGNAL_BAND * 100}% of area median` },
  premium: { label: "Premium", color: "#e4572e", description: `${SIGNAL_BAND * 100}%+ above area median $psf` },
};

export function median(values: number[]) {
  if (!values.length) return 0;
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

export const isAnomaly = (s: Sale) => s.psf < ANOMALY_PSF;

export function signalFor(diff: number): Signal {
  if (diff <= -SIGNAL_BAND) return "low";
  if (diff >= SIGNAL_BAND) return "premium";
  return "median";
}

export type StreetStat = {
  street: string;
  sales: Sale[];
  psf: number;
  price: number;
  diff: number;
  signal: Signal;
  flagged: boolean; // every sale on the street is flagged
};

export function streetStats(sales: Sale[], areaPsf: number): StreetStat[] {
  const groups = new Map<string, Sale[]>();
  for (const s of sales) groups.set(s.street, [...(groups.get(s.street) ?? []), s]);
  return [...groups.entries()]
    .map(([street, list]) => {
      // Flagged sales stay listed but don't skew the street's medians.
      const clean = list.filter((s) => !isAnomaly(s));
      const basis = clean.length ? clean : list;
      const psf = median(basis.map((s) => s.psf));
      const diff = areaPsf ? (psf - areaPsf) / areaPsf : 0;
      return {
        street,
        sales: [...list].sort((a, b) => b.date.localeCompare(a.date)),
        psf,
        price: median(basis.map((s) => s.price)),
        diff,
        signal: signalFor(diff),
        flagged: !clean.length,
      };
    })
    .sort((a, b) => b.sales.length - a.sales.length || a.psf - b.psf);
}
