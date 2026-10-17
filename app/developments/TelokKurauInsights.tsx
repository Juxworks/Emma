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

export default function TelokKurauInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales in Telok Kurau — 31 sales across 22 streets — for investors looking to acquire, rebuild and sell. Telok Kurau here means the Lorong G–N Telok Kurau grid and its neighbouring streets west of Frankel Avenue, plus Lorong 101–107 Changi.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="Terrace country, Joo Chiat pricing">
          <p>Mostly terraces on compact plots, priced close to Joo Chiat but on slightly larger land.</p>
          <Point icon={Scale}><strong className="text-ink">Median land price:</strong> $2,581 psf vs $2,795 in Joo Chiat and $2,360 in Siglap &amp; Frankel.</Point>
          <Point icon={Scale}><strong className="text-ink">Median sale:</strong> $5.58M on a median plot of 2,172 sq ft; 21 of the 31 sales were terraces.</Point>
          <Point icon={Lightbulb} tone="amber">Smaller plots carry the highest $psf (median $2,796 under 2,000 sq ft), so rebuilt terraces on compact lots set the exit price.</Point>
        </Block>

        <Block icon={Hammer} title="Larger plots are the discount">
          <p>Plots of 3,000 sq ft and up traded at a median $1,362 psf across eight sales — about half the area median.</p>
          <Point icon={LayoutGrid}><strong className="text-ink">58 &amp; 58A Lorong G Telok Kurau:</strong> a semi-detached pair of about 4,550 sq ft each, sold for $6.21M and $6.17M (about $1,360 psf).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">480 East Coast Road (May 2026):</strong> 7,084 sq ft detached for $9.30M ($1,313 psf).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">48A Lorong J Telok Kurau (Jun 2026):</strong> two terrace units on 5,964 sq ft for $7.04M ($1,180 psf).</Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Street medians against the area median of $2,581 psf:</p>
          <Point icon={Crosshair}><strong className="text-ink">Target:</strong> Lorong G ($1,362 psf), Lorong K ($1,286) and Lorong J Telok Kurau ($1,876) — all on larger-than-usual plots — plus Lorong 106 Changi ($2,050) and Kurau Place ($2,067).</Point>
          <Point icon={Ban} tone="amber"><strong className="text-ink">Avoid:</strong> Lorong L Telok Kurau ($3,560 psf, +38%), Martia Road ($3,241, +26%) and Lorong 101/105 Changi (+22–24%) — small plots that already price in a rebuild.</Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Thin data:</strong> 14 of the 22 streets have a single sale, so street signals are indicative. Two very recent sales have no published house number yet.</Point>
          <Point icon={Lightbulb} tone="amber">Confirm the lot&apos;s storey control, minimum plot size and frontage for any subdivision, and conservation status in the URA Master Plan before making an offer.</Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
