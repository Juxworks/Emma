"use client";

import { Fragment, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Database,
  Home,
  Maximize2,
  Sparkles,
} from "lucide-react";
import type { Sale } from "./sales";
import OpportunityMap from "./OpportunityMap";
import { ANOMALY_PSF, SIGNALS, median, streetStats, type Signal as SignalKey, type StreetStat } from "./signals";

export type Area = {
  id: string;
  name: string;
  district: string;
  potential: string;
  insights?: React.ReactNode;
  sales: Sale[];
};

type Source = { name: string; url: string; period: string; retrieved: string };

const TYPES = ["All", "Terrace", "Semi-Detached", "Detached"] as const;
type TypeFilter = (typeof TYPES)[number];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatMonth = (ym: string) => {
  const [y, m] = ym.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
};
const formatPrice = (n: number) => `$${(n / 1_000_000).toFixed(2)}M`;
const formatNumber = (n: number) => Math.round(n).toLocaleString("en-SG");
const formatPsf = (n: number) => `$${formatNumber(n)}`;

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function monthRange(sales: Sale[]) {
  const dates = sales.map((s) => s.date).sort();
  if (!dates.length) return [];
  let [y, m] = dates[0].split("-").map(Number);
  const [ey, em] = dates[dates.length - 1].split("-").map(Number);
  const out: string[] = [];
  while (y < ey || (y === ey && m <= em)) {
    out.push(`${y}-${String(m).padStart(2, "0")}`);
    m += 1;
    if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  return out;
}

/* ───────────────────────── Pieces ───────────────────────── */

function Kpi({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string;
  sub: string;
  tone?: "default" | "amber";
}) {
  const amber = tone === "amber";
  return (
    <div
      className={
        amber
          ? "rounded-2xl border border-amber-dot/30 bg-amber-soft p-5"
          : "glass rounded-2xl! p-5"
      }
    >
      <p className={`text-xs font-semibold ${amber ? "text-amber-ink" : "text-muted"}`}>
        {amber && <AlertTriangle size={12} className="mr-1 inline -translate-y-px" />}
        {label}
      </p>
      <p className="font-heading mt-1.5 text-2xl font-bold tracking-tight text-ink">{value}</p>
      <p className="mt-1 text-xs text-muted">{sub}</p>
    </div>
  );
}

function MonthlyChart({ sales }: { sales: Sale[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const months = useMemo(() => monthRange(sales), [sales]);
  const data = months.map((ym) => {
    const list = sales.filter((s) => s.date === ym);
    return {
      ym,
      count: list.length,
      psf: median(list.map((s) => s.psf)),
      price: median(list.map((s) => s.price)),
    };
  });
  const max = Math.max(...data.map((d) => d.psf), 1);
  const top = Math.ceil(max / 1000) * 1000;
  const ticks = Array.from({ length: top / 1000 + 1 }, (_, i) => i * 1000);
  const H = 180;

  return (
    <div className="glass rounded-2xl! p-5 lg:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-heading text-base font-semibold text-ink">
          Median $psf (land) by month
        </h3>
        <p className="text-xs text-muted">Hover a month for details</p>
      </div>

      {data.length === 0 ? (
        <p className="mt-6 text-sm text-muted">No sales match this filter.</p>
      ) : (
        <div className="relative mt-6 flex gap-3">
          {/* Y axis */}
          <div className="relative w-8 shrink-0 text-right text-[10px] text-muted" style={{ height: H }}>
            {ticks.map((t) => (
              <span
                key={t}
                className="absolute right-0 -translate-y-1/2 tabular-nums"
                style={{ top: H - (t / top) * H }}
              >
                {t === 0 ? "0" : `${t / 1000}K`}
              </span>
            ))}
          </div>

          <div className="relative flex-1">
            {/* Gridlines */}
            {ticks.map((t) => (
              <div
                key={t}
                className="absolute inset-x-0 h-px bg-black/[0.06]"
                style={{ top: H - (t / top) * H }}
              />
            ))}

            <div className="relative flex items-end" style={{ height: H }}>
              {data.map((d, i) => (
                <div
                  key={d.ym}
                  className="relative flex h-full flex-1 cursor-default items-end justify-center"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {d.count > 0 && (
                    <div
                      className={`w-full max-w-6 rounded-t-[4px] transition-colors ${
                        hover === i ? "bg-ink-soft" : "bg-teal"
                      }`}
                      style={{ height: Math.max(2, (d.psf / top) * H), marginInline: 1 }}
                    />
                  )}
                  {hover === i && (
                    <div
                      className={`pointer-events-none absolute bottom-full z-10 mb-2 w-40 rounded-xl border border-black/5 bg-white p-3 text-xs shadow-lg ${
                        i > data.length / 2 ? "right-0" : "left-0"
                      }`}
                    >
                      <p className="font-semibold text-ink">{formatMonth(d.ym)}</p>
                      {d.count > 0 ? (
                        <dl className="mt-1.5 space-y-0.5 text-body">
                          <div className="flex justify-between">
                            <dt>Sales</dt>
                            <dd className="font-semibold text-ink">{d.count}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Median $psf</dt>
                            <dd className="font-semibold text-ink">{formatPsf(d.psf)}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Median price</dt>
                            <dd className="font-semibold text-ink">{formatPrice(d.price)}</dd>
                          </div>
                        </dl>
                      ) : (
                        <p className="mt-1 text-muted">No sales</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* X axis */}
            <div className="mt-2 flex border-t border-black/10 pt-2">
              {data.map((d, i) => (
                <span
                  key={d.ym}
                  className={`flex-1 text-center text-[10px] text-muted ${
                    i % 2 ? "hidden sm:block" : ""
                  }`}
                >
                  {MONTHS[Number(d.ym.split("-")[1]) - 1]}
                  {d.ym.endsWith("-01") || i === 0 ? (
                    <span className="block">{d.ym.slice(2, 4)}&apos;</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PropertyMix({ sales }: { sales: Sale[] }) {
  const rows = (["Terrace", "Semi-Detached", "Detached"] as const)
    .map((type) => {
      const list = sales.filter((s) => s.type === type);
      return { type, count: list.length, psf: median(list.map((s) => s.psf)), price: median(list.map((s) => s.price)) };
    })
    .filter((r) => r.count > 0);
  const total = sales.length || 1;

  return (
    <div className="glass rounded-2xl! p-5 lg:p-6">
      <h3 className="font-heading text-base font-semibold text-ink">Property mix</h3>
      <div className="mt-5 space-y-5">
        {rows.map((r) => (
          <div key={r.type}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-semibold text-ink">{r.type}</span>
              <span className="text-muted tabular-nums">
                {r.count} · {Math.round((r.count / total) * 100)}%
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
              <div className="h-full rounded-full bg-teal" style={{ width: `${(r.count / total) * 100}%` }} />
            </div>
            <p className="mt-1.5 text-xs text-muted">
              Median {formatPrice(r.price)} · {formatPsf(r.psf)} psf
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Signal({ signal }: { signal: SignalKey }) {
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-control">
      <span className="h-2 w-2 rounded-full" style={{ background: SIGNALS[signal].color }} />
      {SIGNALS[signal].label}
    </span>
  );
}

function StreetLedger({ streets, areaPsf }: { streets: StreetStat[]; areaPsf: number }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="glass rounded-2xl! p-5 lg:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-heading text-base font-semibold text-ink">Street ledger</h3>
        <span className="pill-neutral">Area median {formatPsf(areaPsf)} psf</span>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="border-b border-black/5">
              {["Street", "Sales", "Median price", "Median $psf", "vs area", "Signal"].map((h, i) => (
                <th key={h} className={`eyebrow py-2 pr-3 font-semibold ${i > 0 && i < 5 ? "text-right" : ""}`}>
                  {h}
                </th>
              ))}
              <th className="w-6" />
            </tr>
          </thead>
          <tbody>
            {streets.map((st) => {
              const isOpen = open === st.street;
              return (
                <Fragment key={st.street}>
                  <tr
                    onClick={() => setOpen(isOpen ? null : st.street)}
                    className={`cursor-pointer border-b border-black/5 transition-colors hover:bg-frost-light ${
                      isOpen ? "bg-frost-light" : ""
                    }`}
                  >
                    <td className="py-3 pr-3 font-semibold text-ink">{st.street}</td>
                    <td className="py-3 pr-3 text-right tabular-nums text-body">{st.sales.length}</td>
                    <td className="py-3 pr-3 text-right tabular-nums text-body">{formatPrice(st.price)}</td>
                    <td className="py-3 pr-3 text-right font-semibold tabular-nums text-ink">{formatPsf(st.psf)}</td>
                    <td className="py-3 pr-3 text-right tabular-nums text-body">
                      {st.diff > 0 ? "+" : ""}
                      {Math.round(st.diff * 100)}%
                    </td>
                    <td className="py-3 pr-3">
                      <Signal signal={st.signal} />
                    </td>
                    <td className="py-3">
                      <ChevronDown
                        size={16}
                        className={`text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-black/5 bg-frost-light/60">
                      <td colSpan={7} className="px-3 pb-4 pt-1">
                        <table className="w-full text-xs">
                          <thead>
                            <tr>
                              {["Address", "Date", "Type", "Land (sq ft)", "Price", "$psf"].map((h, i) => (
                                <th key={h} className={`eyebrow py-2 pr-3 font-semibold ${i > 2 ? "text-right" : ""}`}>
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {st.sales.map((s, i) => (
                              <tr key={i} className="border-t border-black/5">
                                <td className="py-2 pr-3 text-ink-soft">
                                  <span className="font-semibold">{s.address}</span>
                                  <span className="block text-muted">Singapore {s.postal}</span>
                                </td>
                                <td className="py-2 pr-3 whitespace-nowrap text-body">{formatMonth(s.date)}</td>
                                <td className="py-2 pr-3 text-body">
                                  {s.type}
                                  {s.saleType === "New Sale" && (
                                    <span className="pill-amber ml-1.5 px-2! py-0.5!">
                                      <span className="dot" /> New
                                    </span>
                                  )}
                                </td>
                                <td className="py-2 pr-3 text-right tabular-nums text-body">{formatNumber(s.landSqft)}</td>
                                <td className="py-2 pr-3 text-right font-semibold tabular-nums text-ink">{formatPrice(s.price)}</td>
                                <td className="py-2 text-right tabular-nums text-body">
                                  {formatPsf(s.psf)}
                                  {s.psf < ANOMALY_PSF && (
                                    <AlertTriangle size={12} className="ml-1 inline text-amber-ink" aria-label="Flagged anomaly" />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted">
        Click a street to see each sale. Signal compares the street&apos;s median $psf with the area median (±8%); flagged sales are excluded from medians.
      </p>
    </div>
  );
}

function Feed({ sales }: { sales: Sale[] }) {
  const latest = [...sales].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  return (
    <div className="glass rounded-2xl! p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-semibold text-ink">Latest sales</h3>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal" /> URA
        </span>
      </div>
      <ul className="mt-4 space-y-4">
        {latest.map((s, i) => {
          const anomaly = s.psf < ANOMALY_PSF;
          const isNew = s.saleType === "New Sale";
          const Icon = anomaly ? AlertTriangle : isNew ? Sparkles : Home;
          return (
            <li key={i} className="flex gap-3">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  anomaly ? "bg-amber-soft text-amber-ink" : "bg-frost text-teal"
                }`}
              >
                <Icon size={15} />
              </span>
              <div className="min-w-0">
                <p className="eyebrow text-[10px]!">
                  {s.type} · {formatMonth(s.date)}
                </p>
                <p className="text-sm font-semibold text-ink">{s.address}</p>
                <p className="text-xs text-body">
                  {formatPrice(s.price)} · {formatPsf(s.psf)} psf · {formatNumber(s.landSqft)} sq ft
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LargestPlots({ sales }: { sales: Sale[] }) {
  const plots = [...sales].sort((a, b) => b.landSqft - a.landSqft).slice(0, 4);
  const max = plots[0]?.landSqft ?? 1;
  return (
    <div className="glass rounded-2xl! p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-semibold text-ink">Largest plots</h3>
        <Maximize2 size={15} className="text-muted" />
      </div>
      <ul className="mt-4 space-y-4">
        {plots.map((s, i) => (
          <li key={i}>
            <div className="flex items-baseline justify-between gap-2 text-sm">
              <span className="truncate font-semibold text-ink">{s.address}</span>
              <span className="shrink-0 tabular-nums text-body">{formatNumber(s.landSqft)} sq ft</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
              <div
                className={`h-full rounded-full ${s.psf < ANOMALY_PSF ? "bg-amber-dot" : "bg-teal"}`}
                style={{ width: `${(s.landSqft / max) * 100}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-muted">
              {s.type} · {formatPrice(s.price)} · {formatPsf(s.psf)} psf
              {s.psf < ANOMALY_PSF && " · verify"}
            </p>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="btn btn-primary mt-5 w-full">
        Book a site assessment
      </Link>
    </div>
  );
}

/* ───────────────────────── Dashboard ───────────────────────── */

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export default function Dashboard({ areas, source }: { areas: Area[]; source: Source }) {
  // The selected area lives in the URL hash so it can be shared and survives reloads.
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash.slice(1), () => "");
  const [type, setType] = useState<TypeFilter>("All");

  const area = areas.find((a) => a.id === hash) ?? areas[0];
  const sales = useMemo(
    () => (type === "All" ? area.sales : area.sales.filter((s) => s.type === type)),
    [area, type],
  );
  const anomalies = sales.filter((s) => s.psf < ANOMALY_PSF);
  const areaPsf = median(sales.map((s) => s.psf));
  const streets = useMemo(() => streetStats(sales, areaPsf), [sales, areaPsf]);

  const select = (id: string) => {
    setType("All");
    history.replaceState(null, "", `#${id}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  return (
    <section className="px-4 pt-28 pb-8 lg:pt-32">
      <div className="mx-auto grid max-w-[1440px] gap-4 lg:grid-cols-[15rem_1fr]">
        {/* ── Sidebar ── */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="East Coast areas" className="panel p-3">
            <div className="px-3 pb-3 pt-2">
              <p className="font-heading text-base font-bold text-ink">Development Potential</p>
              <p className="text-xs text-muted">East Coast, Singapore</p>
            </div>
            <ul className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {areas.map((a) => {
                const active = a.id === area.id;
                return (
                  <li key={a.id} className="shrink-0">
                    <button
                      onClick={() => select(a.id)}
                      aria-current={active ? "true" : undefined}
                      className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors ${
                        active
                          ? "border-teal/20 bg-white"
                          : "border-transparent hover:bg-white/70"
                      }`}
                    >
                      <span
                        className={`avatar h-8 w-8 text-[11px] ${active ? "" : "bg-teal-light/70!"}`}
                      >
                        {initials(a.name)}
                      </span>
                      <span className="min-w-0">
                        <span className="block whitespace-nowrap text-sm font-semibold text-ink lg:whitespace-normal">
                          {a.name}
                        </span>
                        <span className="hidden text-xs text-muted lg:block">
                          {a.sales.length ? `${a.sales.length} sales · ${a.district}` : "Data coming soon"}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="hidden border-t border-black/5 px-3 pt-3 mt-3 text-[11px] leading-relaxed text-muted lg:block">
              <Database size={11} className="mr-1 inline -translate-y-px" />
              {source.name}, {source.period}. Retrieved {source.retrieved}.
            </p>
          </nav>
        </aside>

        {/* ── Main ── */}
        <div className="min-w-0 space-y-4">
          {/* Context bar */}
          <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl! px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="avatar h-9 w-9 text-xs">{initials(area.name)}</span>
              <div>
                <h1 className="font-heading text-lg font-bold leading-tight text-ink">{area.name}</h1>
                <p className="text-xs text-muted">
                  {area.district} · {area.sales.length ? `${area.sales.length} landed sales · ${source.period}` : "Sales data coming soon"}
                </p>
              </div>
            </div>
            {area.sales.length > 0 && (
              <div role="group" aria-label="Property type" className="flex flex-wrap gap-1 rounded-full bg-frost p-1">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    aria-pressed={type === t}
                    className={`cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      type === t ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"
                    }`}
                  >
                    {t === "Semi-Detached" ? "Semi-D" : t}
                  </button>
                ))}
              </div>
            )}
          </div>

          {area.sales.length === 0 ? (
            <div className="glass p-6 lg:p-10">
              <span className="pill-amber">
                <span className="dot" /> Sales data coming soon
              </span>
              <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight text-ink">
                Rebuild potential in {area.name}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-body">{area.potential}</p>
              <Link href="/contact" className="btn btn-secondary mt-6">
                Ask about a plot here <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 xl:grid-cols-[1fr_20rem]">
              <div className="min-w-0 space-y-4">
                {/* KPIs */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  <Kpi label="Sales" value={String(sales.length)} sub={source.period} />
                  <Kpi
                    label="Median price"
                    value={sales.length ? formatPrice(median(sales.map((s) => s.price))) : "—"}
                    sub={
                      sales.length
                        ? `${formatPrice(Math.min(...sales.map((s) => s.price)))} – ${formatPrice(Math.max(...sales.map((s) => s.price)))}`
                        : "No sales"
                    }
                  />
                  <Kpi
                    label="Median $psf (land)"
                    value={sales.length ? formatPsf(areaPsf) : "—"}
                    sub={`Median plot ${formatNumber(median(sales.map((s) => s.landSqft)))} sq ft`}
                  />
                  {anomalies.length > 0 ? (
                    <Kpi
                      tone="amber"
                      label="Flagged for review"
                      value={`${anomalies.length} sale${anomalies.length > 1 ? "s" : ""}`}
                      sub={`${anomalies[0].address} at ${formatPsf(anomalies[0].psf)} psf`}
                    />
                  ) : (
                    <Kpi
                      label="Highest sale"
                      value={formatPrice(Math.max(...sales.map((s) => s.price)))}
                      sub={[...sales].sort((x, y) => y.price - x.price)[0].address}
                    />
                  )}
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_17rem]">
                  <MonthlyChart sales={sales} />
                  <PropertyMix sales={sales} />
                </div>

                {sales.length > 0 && <OpportunityMap streets={streets} />}

                {sales.length > 0 && <StreetLedger streets={streets} areaPsf={areaPsf} />}

                <div className="glass rounded-2xl! p-5 lg:p-6">
                  <h3 className="font-heading text-base font-semibold text-ink">Rebuild potential</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">{area.potential}</p>
                  {area.insights}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4 xl:sticky xl:top-28 xl:self-start">
                {sales.length > 0 && <Feed sales={sales} />}
                {sales.length > 0 && <LargestPlots sales={sales} />}
              </div>
            </div>
          )}

          <p className="px-1 text-xs leading-relaxed text-muted">
            Source:{" "}
            <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
              {source.name}
            </a>
            , landed (non-strata) caveats, {source.period}, retrieved {source.retrieved}. Addresses matched via
            PropKaki and haio.sg (SLA caveat data); postal codes from OneMap. Land area and $psf are on land
            area. Not all sales have caveats lodged. For reference only — not a valuation or investment advice.
          </p>
        </div>
      </div>
    </section>
  );
}
