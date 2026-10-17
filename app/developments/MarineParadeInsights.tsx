import {
  AlertTriangle,
  Ban,
  Crosshair,
  Hammer,
  LayoutGrid,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrainFront,
  TrendingUp,
} from "lucide-react";
import { Block, Point } from "./InsightParts";

export default function MarineParadeInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Marine Parade &amp;
        Meyer — 28 sales across 18 streets — for investors looking to acquire,
        rebuild and sell. The area here means URA&apos;s Marine Parade and
        Mountbatten planning subzones (Meyer, Mountbatten, Bournemouth,
        Wilkinson and the streets between them); Katong is shown separately.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="Big plots, detached-led">
          <p>
            The East Coast&apos;s largest plots: more than half of the sales
            were detached houses, and the typical plot is far bigger than in
            Katong or Joo Chiat.
          </p>
          <Point icon={Scale}>
            <strong className="text-ink">Median plot:</strong> 5,222 sq ft vs
            2,909 sq ft in Katong and 1,772 sq ft in Joo Chiat.
          </Point>
          <Point icon={Scale}>
            <strong className="text-ink">Median land price:</strong> $2,493
            psf — level with Katong ($2,453) and about 11% below Joo Chiat
            ($2,795).
          </Point>
          <Point icon={Lightbulb} tone="amber">
            <strong className="text-ink">Median sale:</strong> $12.28M, and
            the median detached sale was $16.2M. Budget for a large ticket and
            a longer holding period.
          </Point>
          <Point icon={TrainFront}>
            Katong Park, Tanjong Katong and Marine Parade stations on the
            Thomson-East Coast Line, plus East Coast Park, support exit values.
          </Point>
        </Block>

        <Block icon={Hammer} title="The rebuild spread">
          <p>
            Large plots trade at a clear discount per square foot to smaller
            semi-detached homes — the gap a rebuild can capture.
          </p>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">Plots of 7,000 sq ft and up:</strong>{" "}
            median $2,152 psf across six sales.
          </Point>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">Detached and semi-detached under
            3,500 sq ft:</strong> median $3,248 psf across seven sales,
            including a new semi-detached house at 3A Bournemouth Road sold by
            the developer for $10.02M ($3,579 psf).
          </Point>
          <Point icon={Lightbulb} tone="amber">
            Buying big and rebuilding as two semi-detached homes — where the
            plot&apos;s size and frontage meet URA&apos;s landed housing
            guidelines for subdivision — is the main play. The spread must
            still cover construction, fees and holding costs.
          </Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the area median of $2,493 psf:</p>
          <Point icon={Crosshair}>
            <strong className="text-ink">Target:</strong> Margate Road ($2,015
            psf, 9,803 sq ft), Goodman Road ($2,063 psf, two semi-detached
            sales), Broadrick Road ($2,220) and Poole Road ($2,246) — 10–19%
            below the area median.
          </Point>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">755 Mountbatten Road (Sep
            2026):</strong> 21,328 sq ft detached for $26.5M ($1,243 psf) — a
            rare site, half the area&apos;s median psf, though it fronts a busy
            main road.
          </Point>
          <Point icon={Ban} tone="amber">
            <strong className="text-ink">Avoid:</strong> Boscombe Road (median
            $3,434 psf, +38%), where small semi-detached plots already sell at
            rebuilt-home prices, and the small terraces on East Coast Road and
            Tanjong Katong Road (about $4,080 psf, +63–64%).
          </Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber">
            <strong className="text-ink">Thin data:</strong> 11 of the 18
            streets have a single sale, so treat those signals as indicative.
            Cross-check with earlier transactions and current asking prices.
          </Point>
          <Point icon={AlertTriangle} tone="amber">
            <strong className="text-ink">Source:</strong> compiled from
            haio.sg&apos;s copy of URA / SLA caveat records while URA&apos;s
            e-Service was down, then checked against URA&apos;s own search.
            One Crescent Road sale has no published house number yet.
          </Point>
          <Point icon={Lightbulb} tone="amber">
            Confirm the plot&apos;s storey control, minimum plot size and
            frontage for subdivision, and any conservation status in the URA
            Master Plan before making an offer.
          </Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
