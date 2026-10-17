import { Calculator, ClipboardCheck, FileCheck2, PencilRuler, ScanSearch, type LucideIcon } from "lucide-react";

// The five stages of a landed-home project. This is the single source for the
// home page, the Services pages, the navbar, the footer and the About page.
export type Stage = {
  slug: string;
  href: string;
  step: string;
  title: string;
  icon: LucideIcon;
  /** One-paragraph summary used on cards. */
  description: string;
  /** The data or AI behind the stage. */
  data: string;
  /** Opening line on the stage page. */
  lead: string;
  whatWeDo: { title: string; text: string }[];
  deliverables: string[];
};

export const STAGES: Stage[] = [
  {
    slug: "feasibility",
    href: "/services/feasibility",
    step: "01",
    title: "Consultation & Feasibility",
    icon: ScanSearch,
    description:
      "We start with your goals and budget, then test the plot: recent sales on the street, zoning, storey controls, conservation status and rebuild cost against resale value.",
    data: "Screened against URA caveat data and the URA Master Plan",
    lead: "Before you buy or rebuild, we test whether the numbers and the rules work for your plot — street by street, not by district averages.",
    whatWeDo: [
      { title: "Goals & budget brief", text: "What you want from the home or the investment, your total budget and your timeline." },
      { title: "Price check", text: "Asking price against every recent caveat on the street and in the estate, with anomalies flagged." },
      { title: "Planning check", text: "Zoning, storey controls, conservation status and landed housing guidelines for the plot." },
      { title: "Rebuild vs resale", text: "Land, construction, fees and holding costs modelled against realistic resale values." },
    ],
    deliverables: ["Feasibility summary", "Budget envelope", "Indicative programme", "Go / no-go recommendation"],
  },
  {
    slug: "concept-design",
    href: "/services/concept-design",
    step: "02",
    title: "Concept Design",
    icon: PencilRuler,
    description:
      "We brief your architect with a clear target — layouts, built-up area and budget — and compare concept options so you choose with the numbers in front of you.",
    data: "AI-assisted massing and layout options within planning limits",
    lead: "A clear brief and side-by-side options, so the design you choose fits your life, the planning rules and your budget.",
    whatWeDo: [
      { title: "Architect brief", text: "Rooms, layouts, built-up area, finishes level and budget written down before design starts." },
      { title: "Choose the architect", text: "Shortlist, fee comparison and scope check for landed-home architects." },
      { title: "Compare options", text: "Concept options compared on layout, floor area, cost and resale appeal." },
      { title: "Planning envelope", text: "Each option checked against storey controls, setbacks, attic and basement rules." },
    ],
    deliverables: ["Written design brief", "Architect appointment", "Options comparison", "Preferred concept with budget check"],
  },
  {
    slug: "design-approvals",
    href: "/services/design-approvals",
    step: "03",
    title: "Detailed Design & Approvals",
    icon: FileCheck2,
    description:
      "We coordinate the architect and engineers through detailed drawings, and keep URA and BCA submissions on track so work can start on schedule.",
    data: "Automated checks of drawings and submissions against the rules",
    lead: "Architect, engineers and authorities kept moving together — so approvals don't become the reason your project starts late.",
    whatWeDo: [
      { title: "Consultant coordination", text: "Architect, structural and M&E engineers working from one set of decisions and one programme." },
      { title: "Authority submissions", text: "URA planning and BCA building and structural plan submissions tracked through to permit to commence." },
      { title: "Drawing checks", text: "Drawings reviewed for clashes, gaps and costly details before they go to tender." },
      { title: "Tender documents", text: "Specifications and a schedule of works prepared in one generic format, ready for builders to price." },
    ],
    deliverables: ["Approvals tracker", "Coordinated drawing set", "Tender-ready documents", "Updated budget"],
  },
  {
    slug: "cost-planning",
    href: "/services/cost-planning",
    step: "04",
    title: "Budget & Cost Planning",
    icon: Calculator,
    description:
      "A full budget across build, fees, financing and holding costs — and every builder's tender benchmarked against our data, so you get a fair quote and the right main contractor.",
    data: "Cost benchmarks from past tenders and completed landed projects",
    lead: "A budget you can rely on, and every tender examined line by line against our data — so you know the quote is fair before you sign.",
    whatWeDo: [
      { title: "Full cost plan", text: "Construction, consultant fees, authority charges, financing and holding costs in one budget." },
      { title: "Run the tender", text: "Three to five builders pricing the same scope, in the same format." },
      { title: "Benchmark every bid", text: "Sections, trades and unit rates compared with our tender data; outliers and gaps flagged." },
      { title: "Certify & recommend", text: "A tender report that certifies a fair price and recommends the main contractor." },
    ],
    deliverables: ["Cost plan", "Tender report & fair-price certification", "Contractor ranking", "Main contractor recommendation"],
  },
  {
    slug: "construction",
    href: "/services/construction",
    step: "05",
    title: "Contract & Construction Oversight",
    icon: ClipboardCheck,
    description:
      "We finalise the contract with your chosen builder, then monitor progress, quality and payment claims on your behalf through to TOP and handover.",
    data: "Programme tracking against typical build timelines",
    lead: "From letter of award to handover, we watch the programme, the quality and the money — on your side of the table.",
    whatWeDo: [
      { title: "Contract & award", text: "Contract terms, performance bond, insurance and liquidated damages reviewed before you sign." },
      { title: "Programme tracking", text: "Progress measured against the agreed programme, with delays raised early." },
      { title: "Quality inspections", text: "Regular site inspections at key stages — structure, waterproofing, services and finishes." },
      { title: "Payments & variations", text: "Progress claims and variations checked before you pay, through to TOP, handover and defects." },
    ],
    deliverables: ["Contract review", "Monthly progress reports", "Payment recommendations", "Handover & defects checklist"],
  },
];

export const stageBySlug = (slug: string) => STAGES.find((s) => s.slug === slug)!;
