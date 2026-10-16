import {
  AlertTriangle,
  Ban,
  Compass,
  Crosshair,
  Landmark,
  LayoutGrid,
  Lightbulb,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-black/5 bg-white/70 p-5">
      <div className="flex items-center gap-3">
        <span className="avatar h-9 w-9">
          <Icon size={17} />
        </span>
        <h4 className="font-heading text-base font-semibold text-ink">{title}</h4>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-body">{children}</div>
    </section>
  );
}

function Point({
  icon: Icon,
  tone = "teal",
  children,
}: {
  icon: LucideIcon;
  tone?: "teal" | "amber" | "muted";
  children: React.ReactNode;
}) {
  const color = { teal: "text-teal", amber: "text-amber-ink", muted: "text-muted" }[tone];
  return (
    <p className="flex gap-2.5">
      <Icon size={16} className={`mt-0.5 shrink-0 ${color}`} />
      <span>{children}</span>
    </p>
  );
}

export default function JooChiatInsights() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={18} className="text-teal" />
        <h3 className="font-heading text-lg font-semibold text-ink">
          Investor insights
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-body">
        A strategic read of the last 12 months of sales for investors looking
        to acquire, rebuild and sell landed homes in Joo Chiat for a profit.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Block icon={Crosshair} title="Target high-spread streets">
          <p>
            Profit margin relies on a low entry price per square foot relative
            to the exit value.
          </p>
          <Point icon={Ban} tone="amber">
            <strong className="text-ink">Avoid:</strong> Everitt Road (median
            $3,437 psf) and Joo Chiat Terrace (median $3,370 psf). These streets
            already price in a premium, leaving little margin after
            construction costs.
          </Point>
          <Point icon={Crosshair}>
            <strong className="text-ink">Target:</strong> Carpmael Road (median
            $2,413 psf) and Tembeling Road (median $2,705 psf) — a significantly
            lower barrier to entry while remaining in the highly desirable D15
            enclave.
          </Point>
        </Block>

        <Block icon={LayoutGrid} title="Large, low-psf plots">
          <p>
            Several large plots traded at steep discounts on a psf basis —
            prime targets for detached luxury rebuilds or subdivision into
            multiple terraces (subject to URA zoning guidelines).
          </p>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">Tembeling Road (Jun 2026):</strong>{" "}
            4,602 sq ft semi-detached sold for $7.45M ($1,619 psf).
          </Point>
          <Point icon={LayoutGrid}>
            <strong className="text-ink">Carpmael Road (Oct 2025):</strong>{" "}
            4,437 sq ft semi-detached sold for $6.80M ($1,533 psf).
          </Point>
          <Point icon={AlertTriangle} tone="amber">
            <strong className="text-ink">33 Marshall Road (Jun 2026):</strong> a
            16,732 sq ft terrace at $214 psf ($3.58M) is a severe anomaly.
            Scrutinise it for encumbrances or data-entry errors before
            factoring it into market expectations.
          </Point>
        </Block>

        <Block icon={Landmark} title="Navigate conservation constraints">
          <p>
            Parts of Joo Chiat and Koon Seng fall within conservation areas,
            where the front façade must be preserved.
          </p>
          <Point icon={Landmark}>
            Unless you specialise in heritage restoration — which commands a
            premium but carries higher construction costs and longer approval
            times — prioritise plots outside the conservation zones for faster,
            standardised rebuilds.
          </Point>
          <Point icon={Lightbulb} tone="amber">
            Always pull the URA Master Plan to check the lot&apos;s storey
            control (e.g. 2-storey vs 3-storey) before making an offer. An
            extra floor is the easiest way to maximise built-up area and final
            sale price.
          </Point>
        </Block>

        <Block icon={Compass} title="Look ahead to larger plots">
          <p>
            Joo Chiat is largely compact terrace plots (1,100 – 2,000 sq ft).
            The market is active, but the absolute profit on small terraces is
            capped.
          </p>
          <Point icon={Compass}>
            <a href="#marine-parade-meyer" className="font-semibold text-ink underline-offset-2 hover:underline">
              Marine Parade &amp; Meyer
            </a>
            ,{" "}
            <a href="#siglap-frankel" className="font-semibold text-ink underline-offset-2 hover:underline">
              Siglap &amp; Frankel
            </a>{" "}
            and{" "}
            <a href="#tanah-merah-upper-changi" className="font-semibold text-ink underline-offset-2 hover:underline">
              Tanah Merah
            </a>{" "}
            feature larger, gently sloping detached and semi-detached plots
            sought after by high-net-worth buyers. Off-market dilapidated homes
            there often yield a higher gross profit on a successful rebuild.
          </Point>
        </Block>
      </div>

      <p className="mt-3 text-xs text-muted">
        For information only — not financial or investment advice.
      </p>
    </div>
  );
}
