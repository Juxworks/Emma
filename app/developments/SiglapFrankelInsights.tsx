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

export default function SiglapFrankelInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Siglap &amp; Frankel — 87 sales across 46 streets — for investors looking to acquire, rebuild and sell. The area covers URA&apos;s Frankel subzone from Frankel Avenue eastwards (Siglap Road, the Palm streets, Jalan Ulu Siglap and the East Coast Drive estate), excluding Opera Estate.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="A deep, mixed market">
          <p>The busiest area on the East Coast, with a full mix of terraces, semi-detached and detached homes.</p>
          <Point icon={Scale}><strong className="text-ink">Median land price:</strong> $2,360 psf on a median plot of 2,785 sq ft; median sale $6.50M.</Point>
          <Point icon={Scale}><strong className="text-ink">By type:</strong> terraces $2,597 psf ($5.02M), semi-detached $2,318 psf ($7.71M), detached $2,037 psf ($12.13M).</Point>
          <Point icon={Lightbulb} tone="amber">Seven new-sale homes — mostly semi-detached at $8.7–9.4M — show developers are actively rebuilding here.</Point>
        </Block>

        <Block icon={Hammer} title="The rebuild spread">
          <p>Price per square foot falls steadily with plot size: from $3,032 under 2,000 sq ft to $1,854 on plots of 5,000 sq ft and up.</p>
          <Point icon={LayoutGrid}><strong className="text-ink">New semi-detached homes:</strong> 38 and 38A Third Street sold for $9.13M each ($2,659–2,809 psf); 6B and 6C Palm Avenue for $8.69–8.84M (about $2,870 psf).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">Large sites:</strong> 32 Frankel Avenue (9,225 sq ft, $14.0M, $1,518 psf), 25 Siglap Bank (7,697 sq ft, $14.47M, $1,879 psf) and a 9,152 sq ft Siglap Rise detached for $19.0M ($2,076 psf).</Point>
          <Point icon={Lightbulb} tone="amber">Buying a large plot and rebuilding as semi-detached pairs captures the gap — where plot size and frontage allow.</Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the area median of $2,360 psf:</p>
          <Point icon={Crosshair}><strong className="text-ink">Target:</strong> Taman Siglap ($1,388), Maria Avenue ($1,499), Cheviot Hill ($1,679), Jalan Tanah Puteh ($1,710), Siglap Road ($1,791, four sales) and Jalan Ulu Siglap ($1,895, four sales).</Point>
          <Point icon={Ban} tone="amber"><strong className="text-ink">Avoid:</strong> Metropole Drive ($3,714, +57%), East Coast Avenue and Wilton Gardens (about $3,610, +53%) and Bowmont Gardens ($3,220, +36%) — small terrace plots priced at rebuilt-home levels.</Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Thin data:</strong> 19 of the 46 streets have a single sale, and three very recent sales have no published house number yet. Cross-check with earlier transactions on the street.</Point>
          <Point icon={Lightbulb} tone="amber">Confirm the lot&apos;s storey control, minimum plot size and frontage for any subdivision, and conservation status in the URA Master Plan before making an offer.</Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
