import {
  AlertTriangle,
  Ban,
  Crosshair,
  LayoutGrid,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrainFront,
  TrendingUp,
} from "lucide-react";
import { Block, Point } from "./InsightParts";

export default function KatongInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Katong — 16 sales
        across 10 streets — compared with Joo Chiat next door, for investors
        looking to acquire, rebuild and sell. Katong here means URA&apos;s
        Katong planning subzone, excluding the streets shown under Joo Chiat.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="Bigger plots, lower $psf">
          <p>
            Katong land trades cheaper per square foot than Joo Chiat, but on
            much larger plots — so the ticket size is higher.
          </p>
          <Point icon={Scale}>
            <strong className="text-ink">Median plot:</strong> 2,909 sq ft
            in Katong vs 1,772 sq ft in Joo Chiat.
          </Point>
          <Point icon={Scale}>
            <strong className="text-ink">Median land price:</strong> $2,453
            psf vs $2,795 psf — about 12% less per sq ft.
          </Point>
          <Point icon={Lightbulb} tone="amber">
            <strong className="text-ink">Median sale:</strong> $7.10M vs
            $5.00M. More land per dollar means room for a larger rebuild, but
            plan for higher capital outlay and holding costs.
          </Point>
          <Point icon={TrainFront}>
            Thomson-East Coast Line stations at Tanjong Katong and Marine
            Parade sit within walking distance, supporting exit values.
          </Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the Katong area median of $2,453 psf:</p>
          <Point icon={Crosshair}>
            <strong className="text-ink">Target:</strong> Still Road (median
            $1,880 psf, two semi-detached sales), Rambai Road ($2,174) and
            Mugliston Road ($2,178) — all 11–23% below the area median.
            Pennefather Road ($2,054) is also low but has only one sale.
          </Point>
          <Point icon={Ban} tone="amber">
            <strong className="text-ink">Avoid:</strong> Sea Avenue (median
            $3,316 psf, +35%) and Haig Road ($3,778 psf on a single 1,876 sq ft
            plot, +54%). Both already price in a premium, leaving little margin
            after construction costs.
          </Point>
        </Block>

        <Block icon={LayoutGrid} title="Large plots worth studying">
          <p>
            Several large plots traded well below the area median on a psf
            basis — candidates for a large detached rebuild or, where URA&apos;s
            landed housing guidelines allow, subdivision.
          </p>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">5 Seraya Lane (Feb 2026):</strong>{" "}
            13,280 sq ft detached for $21.15M ($1,593 psf) — a rare large site.
          </Point>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">6 Mugliston Road (Jan 2026):</strong>{" "}
            4,809 sq ft terrace for $9.55M ($1,986 psf).
          </Point>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">21 Still Road (Jun 2026):</strong>{" "}
            3,479 sq ft semi-detached for $5.40M ($1,551 psf) — the lowest psf
            of any semi-detached sale in Katong.
          </Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber">
            <strong className="text-ink">Thin data:</strong> only 16 sales,
            and five streets have a single sale — treat those signals as
            indicative. Cross-check with current asking prices and earlier
            transactions on the street.
          </Point>
          <Point icon={Lightbulb} tone="amber">
            Pull the URA Master Plan for the lot&apos;s storey control and
            check whether it falls in a conservation area before making an
            offer — both decide how much you can build and what you can sell.
          </Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
