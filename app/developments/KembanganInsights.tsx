import {
  AlertTriangle,
  Ban,
  Crosshair,
  Hammer,
  LayoutGrid,
  Lightbulb,
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Block, Point } from "./InsightParts";

export default function KembanganInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Kembangan — 60 sales across 23 streets — for investors looking to acquire, rebuild and sell. Kembangan here means URA&apos;s Kembangan subzone (District 14), around Jalan Kembangan, Lorong Marican and Jalan Selamat.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="The value end of the East">
          <p>Cheaper per square foot than any District 15 area, on mid-sized plots close to Kembangan MRT.</p>
          <Point icon={Scale}><strong className="text-ink">Median land price:</strong> $2,101 psf vs $2,360 in Siglap &amp; Frankel and $2,795 in Joo Chiat.</Point>
          <Point icon={Scale}><strong className="text-ink">Median sale:</strong> $5.65M on a median plot of 2,756 sq ft.</Point>
          <Point icon={Scale}><strong className="text-ink">By type:</strong> terraces $2,148 psf ($4.96M), semi-detached $1,846 psf ($6.24M).</Point>
        </Block>

        <Block icon={Hammer} title="The rebuild spread">
          <p>Plots under 2,000 sq ft sold for a median $2,414 psf, against $1,776 psf for plots of 3,000–5,000 sq ft (25 sales).</p>
          <Point icon={LayoutGrid}><strong className="text-ink">New sales:</strong> 18M Jalan Paras, a new semi-detached home, sold for $7.60M ($1,983 psf); 685 Changi Road, a new detached house, for $10.60M ($2,441 psf).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">Large plots:</strong> 23 Lorong Salleh (6,358 sq ft detached, $9.80M, $1,541 psf) and 54A Lorong Melayu (5,526 sq ft, $8.10M, $1,466 psf).</Point>
          <Point icon={Lightbulb} tone="amber">Entry prices are low, but so are exit prices: new homes here sell for less per square foot than in Siglap or Joo Chiat, so keep build budgets tight.</Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the area median of $2,101 psf:</p>
          <Point icon={Crosshair}><strong className="text-ink">Target:</strong> Lengkong Empat ($1,694, two sales), Jalan Ismail ($1,680, two sales), Lorong Melayu ($1,761) and Waringin Park ($1,846, five sales).</Point>
          <Point icon={Ban} tone="amber"><strong className="text-ink">Avoid:</strong> Jalan Senyum ($2,737, +30%), Jalan Waringin ($2,570, +22%) and Jalan Ishak ($2,483, +18%).</Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Thin data:</strong> 10 of the 23 streets have a single sale, and two very recent sales have no published house number yet. Seven sales in the neighbouring Kaki Bukit subzone are not included.</Point>
          <Point icon={Lightbulb} tone="amber">Confirm the lot&apos;s storey control, minimum plot size and frontage for any subdivision, and conservation status in the URA Master Plan before making an offer.</Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
