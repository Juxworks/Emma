import {
  AlertTriangle,
  BadgeCheck,
  Check,
  ClipboardList,
  FileSearch,
  FileSignature,
  FileText,
  Gavel,
  Layers,
  ListChecks,
  MessagesSquare,
  Receipt,
  Scale,
  Sparkles,
  Wallet,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "../../components/Section";
import { HandoverScene } from "../../components/Illustrations";
import CostSlider from "./CostSlider";
import {
  ALLOWANCES,
  SECTIONS,
  TENDER_TOTAL,
  TRADES,
  share,
  status,
  type Line,
  type Status,
} from "./tenderData";

const k = (n: number) =>
  n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${Math.round(n / 1000).toLocaleString("en-SG")}k`;
const pct = (n: number) => `${n.toFixed(1)}%`;

const anatomy = [
  {
    icon: FileSignature,
    title: "Form of Tender",
    text: "The contractor's signed offer: lump-sum price, contract period, validity, GST status, performance bond and acceptance of the conditions of contract.",
    check: "Price, period and validity match the cover letter; bond and liquidated damages accepted.",
  },
  {
    icon: Receipt,
    title: "Summary of Tender",
    text: "One page that adds up the four parts below into the tender sum.",
    check: "Arithmetic and carried-forward totals reconcile on every page.",
  },
  {
    icon: ClipboardList,
    title: "Preliminaries",
    text: "Running the site: hoarding, scaffolding, temporary services, insurance, safety, site staff, surveys, testing and clean-up.",
    check: "Every clause priced or explained — not left as “Noted”.",
  },
  {
    icon: Layers,
    title: "Schedule of Works",
    text: "The building itself, trade by trade: demolition, piling, structure, brickwork, stairs, roof, waterproofing, finishes, doors, windows, external works.",
    check: "Quantities and unit rates against the drawings and our rate data.",
  },
  {
    icon: Wrench,
    title: "M&E Works",
    text: "Plumbing and sanitary, electrical, air-conditioning and ventilation — often priced from a separate consultant's schedule.",
    check: "Authority submissions, testing and maintenance periods included.",
  },
  {
    icon: Wallet,
    title: "PC & Provisional Sums",
    text: "Allowances for items not yet designed or chosen — fittings, carpentry, landscaping — plus contingency and the contractor's profit and attendance on them.",
    check: "Allowances realistic for your choices, so the final account doesn't balloon.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Prepare the tender package",
    text: "We assemble drawings, specifications and a schedule of works in this generic format, so every contractor prices exactly the same scope.",
  },
  {
    icon: Gavel,
    title: "Invite & manage the tender",
    text: "Shortlist three to five BCA-registered builders, run the site visit, answer queries and issue addenda to all tenderers equally.",
  },
  {
    icon: ListChecks,
    title: "Normalise every bid",
    text: "Each tender is re-keyed line by line into the same structure. “Noted”, “Included”, “NA” and exclusions are flagged and priced back in, so bids compare like for like.",
  },
  {
    icon: Sparkles,
    title: "Benchmark against our data",
    text: "Section shares, trade costs, unit rates and cost per square metre are compared with past landed tenders and completed projects. Anything outside the typical range is flagged.",
  },
  {
    icon: MessagesSquare,
    title: "Examine, clarify & negotiate",
    text: "We query every flag with the contractor, interview the shortlist and negotiate scope gaps and outliers before you commit.",
  },
  {
    icon: BadgeCheck,
    title: "Certify & recommend",
    text: "You receive a tender report that certifies whether the price is fair, ranks the contractors and recommends one — then we support the letter of award and contract.",
  },
];

const findings = [
  {
    title: "A fifth of the price isn't firm",
    text: "PC sums, provisional sums and contingency make up 20% of the tender — above the usual 8–15%. Carpentry alone carries a $100k allowance. We'd test each allowance against your actual choices before award.",
  },
  {
    title: "Piling is re-measurable",
    text: "Piling is 14% of the tender, priced on 59 piles at an estimated 45 m depth. The final cost follows actual penetration, so we'd check pile count and depth against the engineer's design and soil report.",
  },
  {
    title: "Wall finishes run slightly high",
    text: "6.3% against a typical 3.5–6%, driven by brick cladding and marble. Fine if that's the design intent — otherwise a value-engineering opportunity.",
  },
  {
    title: "Unpriced lines need confirming",
    text: "Many preliminaries and works lines read “Noted”, “Included”, “NA” or “Refer to PC sum”. Each one must be confirmed as priced elsewhere — not quietly excluded and claimed later as a variation.",
  },
  {
    title: "Commercial terms to check",
    text: "Lump sum, not subject to fluctuation; prices excluding GST; 90-day validity; 12-month period; 10% performance bond; liquidated damages per day of delay; SIA lump-sum conditions.",
  },
];

const criteria = [
  { name: "Price fairness vs benchmark", weight: 35 },
  { name: "Completeness — no gaps or exclusions", weight: 20 },
  { name: "Programme & resourcing", weight: 15 },
  { name: "Landed track record & BCA grade", weight: 15 },
  { name: "Financial capacity & bonding", weight: 10 },
  { name: "Safety record (bizSAFE)", weight: 5 },
];

const STATUS: Record<Status, { label: string; className: string; dot: string }> = {
  within: { label: "Within range", className: "bg-frost-light text-teal", dot: "bg-teal" },
  high: { label: "Above range", className: "bg-amber-soft text-amber-ink", dot: "bg-amber-ink" },
  low: { label: "Below range", className: "bg-amber-soft text-amber-ink", dot: "bg-amber-ink" },
};

function BenchmarkRows({ lines, max }: { lines: Line[]; max: number }) {
  return (
    <ul className="divide-y divide-black/5">
      {lines.map((line) => {
        const s = share(line.amount);
        const st = status(line);
        const { label, className, dot } = STATUS[st];
        const [lo, hi] = line.band;
        return (
          <li key={line.name} className="grid gap-x-6 gap-y-2 py-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)_8rem] md:items-center">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{line.name}</p>
              <p className="text-xs text-muted tabular-nums">
                {k(line.amount)} · {pct(s)} of tender
              </p>
              {line.note && <p className="mt-1 text-xs leading-snug text-body">{line.note}</p>}
            </div>
            <div
              className="relative h-6"
              title={`${line.name}: ${pct(s)} of tender; typical ${lo}–${hi}%`}
              aria-label={`${pct(s)} of tender against a typical range of ${lo} to ${hi} percent`}
              role="img"
            >
              <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-black/5" />
              <div
                className="absolute top-1/2 h-3 -translate-y-1/2 rounded-full bg-teal/20"
                style={{ left: `${(lo / max) * 100}%`, width: `${((hi - lo) / max) * 100}%` }}
              />
              <span
                className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white ${dot}`}
                style={{ left: `${Math.min(s / max, 1) * 100}%` }}
              />
            </div>
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}>
              {st === "within" ? <Check size={12} strokeWidth={3} /> : <AlertTriangle size={12} />}
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
      <span className="flex items-center gap-2">
        <span className="h-3 w-6 rounded-full bg-teal/20" /> Typical range (share of tender)
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-teal ring-2 ring-white" /> This tender — within range
      </span>
      <span className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-amber-ink ring-2 ring-white" /> Outside range — query
      </span>
    </div>
  );
}

/** Tender review: generic format, an anonymised benchmarked example, findings, process and selection. */
export default function TenderReview() {
  const flagged = [...SECTIONS, ...TRADES].filter((l) => status(l) !== "within").length;
  const allowanceTotal = ALLOWANCES.reduce((n, a) => n + a.amount, 0);

  return (
    <>
      <section id="tender-review" className="scroll-mt-28 px-4 pt-16 pb-4">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="Tender Review" title="Is It a Fair Quote?" />
          <p className="mt-4 max-w-2xl leading-relaxed text-body">
            A main-contractor tender is the biggest cheque you&apos;ll sign. We
            put every tender into one generic format, compare it line by line
            with our data, and certify whether it&apos;s a fair quote — so you
            get an accurate price and the right main contractor.
          </p>
        </div>
      </section>

      <section className="px-4 pb-4">
        <div className="mx-auto max-w-7xl lg:px-4">
          <span className="pill-amber">For reference only — an anonymised example, not advice on any specific project</span>
        </div>
      </section>

      {/* ── Cost calculator ── */}
      <section id="cost-calculator" className="scroll-mt-28 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <CostSlider />
        </div>
      </section>

      {/* ── Generic format ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="The Generic Format" title="What's Inside a Tender" />
            <p className="mt-5 leading-relaxed text-body">
              A landed-home tender typically runs to 60–70 pages. Underneath, it
              always has the same six parts — and each one hides different
              risks.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {anatomy.map(({ icon: Icon, title, text, check }, i) => (
              <li key={title} className="flex flex-col rounded-2xl bg-white/85 p-6">
                <div className="flex items-center justify-between">
                  <span className="avatar h-11 w-11">
                    <Icon size={20} />
                  </span>
                  <span className="font-heading text-sm font-bold text-faint">0{i + 1}</span>
                </div>
                <h3 className="font-heading mt-5 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{text}</p>
                <p className="mt-4 flex items-start gap-1.5 rounded-xl bg-frost-light p-3 text-xs leading-snug text-teal">
                  <FileSearch size={13} className="mt-0.5 shrink-0" />
                  <span>
                    <strong className="font-semibold">We check: </strong>
                    {check}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Example benchmark ── */}
      <section id="example-review" className="scroll-mt-28 px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionHeading eyebrow="Example Review" title="One Tender, Benchmarked" />
              <p className="mt-5 leading-relaxed text-body">
                A real tender for a three-storey intermediate terrace —
                conservation A&amp;A with a new rear extension and attic, on a
                12-month lump-sum contract. Names and address removed; amounts
                excluding GST.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-3 sm:min-w-[26rem]">
              {[
                { label: "Tender sum", value: `$${(TENDER_TOTAL / 1e6).toFixed(2)}M` },
                { label: "Lines benchmarked", value: String(SECTIONS.length + TRADES.length) },
                { label: "Flagged to query", value: String(flagged) },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-2xl! p-4">
                  <dt className="text-xs text-muted">{label}</dt>
                  <dd className="font-heading mt-1 text-2xl font-bold text-ink tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass mt-10 p-6 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-heading text-lg font-semibold text-ink">By section</h3>
              <Legend />
            </div>
            <BenchmarkRows lines={SECTIONS} max={70} />
          </div>

          <div className="glass mt-6 p-6 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-heading text-lg font-semibold text-ink">By trade</h3>
              <Legend />
            </div>
            <BenchmarkRows lines={TRADES} max={22} />
          </div>

          <p className="mt-3 text-xs text-muted">
            Typical ranges are indicative shares of the total tender sum for
            comparable landed A&amp;A and rebuild tenders. Every project differs
            — a flag is a question to ask, not a verdict.
          </p>
        </div>
      </section>

      {/* ── Findings + allowances ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <SectionHeading eyebrow="What We Found" title="Questions Before You Sign" />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] [&>*]:min-w-0">
            <ul className="space-y-3">
              {findings.map(({ title, text }) => (
                <li key={title} className="flex gap-4 rounded-2xl bg-white/85 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-soft text-amber-ink">
                    <AlertTriangle size={15} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-white/85 p-6">
              <h3 className="font-heading text-base font-semibold text-ink">Allowances, not firm prices</h3>
              <p className="mt-1 text-xs text-muted">
                {k(allowanceTotal)} — {pct(share(allowanceTotal))} of the tender
              </p>
              <ul className="mt-4 divide-y divide-black/5 text-sm">
                {ALLOWANCES.map(({ name, amount, kind }) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 py-2.5">
                    <span className="min-w-0 text-ink-soft">
                      {name}
                      <span className="ml-2 text-xs text-muted">{kind}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-ink tabular-nums">{k(amount)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="How It Works" title="From Tender to Main Contractor" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="glass p-6">
                <div className="flex items-center gap-3">
                  <span className="avatar h-11 w-11">
                    <Icon size={20} />
                  </span>
                  <span className="font-heading text-sm font-bold text-faint">Step {i + 1}</span>
                </div>
                <h3 className="font-heading mt-5 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Selection ── */}
      <section className="px-4 py-8">
        <div className="glass mx-auto grid max-w-7xl gap-10 p-6 lg:grid-cols-2 lg:items-center lg:p-12">
          <div>
            <SectionHeading eyebrow="The Outcome" title="An Accurate Quote, the Right Builder" />
            <p className="mt-5 leading-relaxed text-body">
              The cheapest tender is rarely the best value once gaps and
              allowances are priced back in. We score every shortlisted
              contractor on the same weighted criteria, certify the price, and
              stay alongside you through award and construction.
            </p>
            <HandoverScene className="mt-8 w-full max-w-xs" />
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold text-ink">
              <Scale size={18} className="text-teal" /> How we score contractors
            </h3>
            <ul className="mt-5 space-y-4">
              {criteria.map(({ name, weight }) => (
                <li key={name}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-ink-soft">{name}</span>
                    <span className="font-semibold text-ink tabular-nums">{weight}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-black/5">
                    <div className="h-2 rounded-full bg-teal" style={{ width: `${(weight / 35) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}
