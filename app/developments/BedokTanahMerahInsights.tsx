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

export default function BedokTanahMerahInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A read of the last 12 months of landed sales across District 16 east of Siglap — 162 sales across 77 streets in Bedok, Tanah Merah and Upper Changi — for investors looking to acquire, rebuild and sell. It covers URA&apos;s Bedok South, Bedok North, Bayshore, Simei and Xilin subzones.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Scale} title="Lowest $psf, mixed tenure">
          <p>The East Coast&apos;s cheapest land, but over a quarter of the sales are leasehold — compare like with like.</p>
          <Point icon={Scale}><strong className="text-ink">Median land price:</strong> $1,806 psf on a median plot of 2,808 sq ft; median sale $4.87M.</Point>
          <Point icon={Scale}><strong className="text-ink">By tenure:</strong> freehold $1,937 psf (114 sales) vs 99-year leasehold $1,510 psf (Kew, Eastwood, Limau Terrace) and 999-year $1,672 psf.</Point>
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Flagged:</strong> eight sales on 70-year leases from 1964 (Jalan Chempaka Kuning, Jalan Chempaka Puteh, Bedok Road) changed hands for $0.4–0.7M — under a decade of lease is left. Avoid for rebuilds.</Point>
        </Block>

        <Block icon={Hammer} title="Where the spread is">
          <p>Small plots under 2,000 sq ft sold for a median $2,411 psf, against $1,503 psf for plots of 3,000–5,000 sq ft (60 sales).</p>
          <Point icon={LayoutGrid}><strong className="text-ink">New sales:</strong> 3 Bedok Rise, a new detached house, sold for $10.68M ($2,107 psf); 3F Lucky Heights for $7.18M and 111 Tanah Merah Kechil Road South for $5.98M (about $3,400–3,570 psf on terrace plots).</Point>
          <Point icon={LayoutGrid}><strong className="text-ink">Large freehold plots:</strong> 16 Jalan Nipah (6,172 sq ft detached, $8.50M, $1,377 psf) and 64 Jalan Limau Purut (6,524 sq ft semi-detached, $7.50M, $1,150 psf).</Point>
          <Point icon={Lightbulb} tone="amber">Freehold semi-detached plots of 3,500 sq ft and up at about $1,500 psf, rebuilt as new terraces or semi-detached homes, offer the widest spread in the East.</Point>
        </Block>

        <Block icon={Crosshair} title="Target high-spread streets">
          <p>Freehold streets well below the area median of $1,806 psf:</p>
          <Point icon={Crosshair}><strong className="text-ink">Target:</strong> Upper East Coast Road ($1,428, six sales), Jalan Angin Laut ($1,559, four sales), Jalan Greja ($1,560), Sunbird Road ($1,507) and Bedok Rise ($1,629).</Point>
          <Point icon={Ban} tone="amber"><strong className="text-ink">Avoid:</strong> Peakville Avenue ($3,386, +87%), Lucky Rise ($3,161, +75%), Tanah Merah Kechil Road South ($2,970, +64%) and Seagull Walk ($2,581, +43%, seven sales) — mostly small or new terraces.</Point>
        </Block>

        <Block icon={ShieldCheck} title="Check before you offer">
          <Point icon={AlertTriangle} tone="amber"><strong className="text-ink">Thin data:</strong> 34 of the 77 streets have a single sale, and four very recent sales have no published house number yet. Check tenure and remaining lease on every lot — it drives both price and financing.</Point>
          <Point icon={Lightbulb} tone="amber">Confirm the lot&apos;s storey control, minimum plot size and frontage for any subdivision, and conservation status in the URA Master Plan before making an offer.</Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
