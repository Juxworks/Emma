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

export default function OperaEstateInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Opera Estate — 36 sales across its 11 opera-named streets — for investors looking to acquire, rebuild and sell.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="Compact terraces, steady demand">
          <p>Mostly 1950s–60s terraces on small plots, trading at a premium per square foot to the surrounding Siglap &amp; Frankel streets.</p>
          <Point icon={Scale}><strong className="text-ink">Median land price:</strong> $2,624 psf vs $2,360 in Siglap &amp; Frankel.</Point>
          <Point icon={Scale}><strong className="text-ink">Median sale:</strong> $4.51M on a median plot of 1,968 sq ft — the lowest entry ticket on the East Coast.</Point>
          <Point icon={Scale}><strong className="text-ink">Terraces:</strong> 25 of the 36 sales, at a median $2,645 psf and $4.19M on 1,630 sq ft.</Point>
        </Block>

        <Block icon={Hammer} title="The rebuild spread">
          <p>New semi-detached homes sell at about $2,830–3,160 psf of land, while the estate&apos;s large detached plots trade far lower.</p>
          <Point icon={LayoutGrid}><strong className="text-ink">New sales:</strong> 23 and 23A Aida Street ($9.48M and $8.64M on about 3,000 sq ft each) and 3 Lakme Street ($8.48M, $2,828 psf).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">Large plots:</strong> 21 Carmen Street (6,265 sq ft, $10.55M, $1,684 psf), 106 Fidelio Street (6,251 sq ft, $10.70M, $1,712 psf) and 11A Carmen Street (6,004 sq ft, $9.93M, $1,654 psf).</Point>
          <Point icon={Lightbulb} tone="amber">A 6,000 sq ft plot at about $1,700 psf rebuilt as two semi-detached homes is the clearest play — subject to URA&apos;s subdivision guidelines and build costs.</Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the area median of $2,624 psf:</p>
          <Point icon={Crosshair}><strong className="text-ink">Target:</strong> Carmen Street ($1,684 psf, including two large detached plots), Dido Street ($2,028) and Fidelio Street ($2,323, nine sales — the estate&apos;s most active street).</Point>
          <Point icon={Ban} tone="amber"><strong className="text-ink">Avoid:</strong> Ernani Street ($3,470 psf, +32%) and Rienzi Street ($2,935, +12%), where small terraces already trade at a premium.</Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Thin data:</strong> the estate is well traded, but two very recent sales have no published house number yet. Cross-check with current asking prices.</Point>
          <Point icon={Lightbulb} tone="amber">Confirm the lot&apos;s storey control, minimum plot size and frontage for any subdivision, and conservation status in the URA Master Plan before making an offer.</Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
