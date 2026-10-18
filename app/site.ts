import { Home, Hammer, MapPinned, FileSearch, type LucideIcon } from "lucide-react";

// Contact details — the single source for the navbar, mobile bar, footer and Contact page.
// TODO: fill in the real phone, WhatsApp number and email. Anything left empty is hidden on the site.
const PHONE: string = ""; // as displayed, e.g. "+65 6123 4567"
const WHATSAPP: string = ""; // digits with country code, e.g. "6591234567"

export const CONTACT = {
  phone: PHONE,
  phoneHref: PHONE ? `tel:${PHONE.replace(/[^\d+]/g, "")}` : "",
  whatsappHref: WHATSAPP ? `https://wa.me/${WHATSAPP}` : "",
  email: "" as string,
  address: "9 3/4 Koon Seng Road, Singapore",
  mapsHref: "https://maps.google.com/?q=9+3%2F4+Koon+Seng+Road+Singapore",
  hours: "Mon–Fri 9am–6pm · Sat by appointment",
  // Leave a URL empty to hide that icon.
  social: { facebook: "", instagram: "", pinterest: "" },
};

export const BOOK_HREF = "/contact";
export const BOOK_LABEL = "Book a Free Feasibility Call";

// What a visitor can engage us for, by goal. The single source for the navbar,
// home page, Services pages and the contact form's service list.
export type Service = {
  slug: string;
  href: string;
  title: string;
  icon: LucideIcon;
  /** One line used in menus and cards. */
  summary: string;
  /** Opening paragraph on the service page. */
  lead: string;
  forWho: string[];
  includes: { title: string; text: string }[];
  /** Stage slugs from how-it-works/stages.ts covered by this service. */
  stages: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "rebuild",
    href: "/services/rebuild",
    title: "Rebuild My Landed Home",
    icon: Home,
    summary: "A full rebuild managed on your side — from feasibility to handover.",
    lead: "Knock down and rebuild with one independent team on your side. We assemble and manage your architect, engineers and builder, check every price, and watch the build through to handover.",
    forWho: [
      "Owners rebuilding a terrace, semi-D or detached home to live in",
      "Families who want one point of contact without a design-and-build contractor",
      "Anyone who wants the builder's price and work checked independently",
    ],
    includes: [
      { title: "Feasibility & budget", text: "What the plot allows, what the rebuild will cost in total and how long it will take." },
      { title: "Architect & design", text: "A written brief, architect selection and concept options compared on layout and cost." },
      { title: "Approvals", text: "URA and BCA submissions tracked through to permit to commence." },
      { title: "Tender & contractor", text: "Three to five builders pricing the same scope, every bid benchmarked against our data." },
      { title: "Build oversight", text: "Programme, quality and payment claims checked through to TOP, handover and defects." },
    ],
    stages: ["feasibility", "concept-design", "design-approvals", "cost-planning", "construction"],
  },
  {
    slug: "renovation",
    href: "/services/renovation",
    title: "A&A and Renovation",
    icon: Hammer,
    summary: "Scope, budget and contractor checks for Additions & Alterations.",
    lead: "Extend, add a storey or renovate without the surprises. We help you scope the work, set a realistic budget, pick the right contractor and check quality and payments as it goes.",
    forWho: [
      "Owners adding an extension, attic or extra storey",
      "Conservation shophouse and terrace owners keeping the façade",
      "Major renovations where the budget needs to hold",
    ],
    includes: [
      { title: "What's allowed", text: "Planning, conservation and structural limits checked before you design." },
      { title: "Scope & budget", text: "A clear scope of works and a budget including fees and authority charges." },
      { title: "Contractor selection", text: "Quotes compared line by line on the same scope." },
      { title: "Site checks", text: "Quality inspections and progress claims checked before you pay." },
    ],
    stages: ["concept-design", "design-approvals", "cost-planning", "construction"],
  },
  {
    slug: "buying",
    href: "/services/buying",
    title: "Buying a Plot to Rebuild",
    icon: MapPinned,
    summary: "Price, planning and rebuild checks before you make an offer.",
    lead: "Before you buy, find out whether the price is fair, what the plot allows you to build and what the finished home will really cost — street by street, not by district averages.",
    forWho: [
      "Buyers looking for a landed home to rebuild",
      "Owners upgrading or right-sizing within landed estates",
      "Investors comparing plots for a rebuild",
    ],
    includes: [
      { title: "Price check", text: "The asking price against every recent caveat on the street and in the estate." },
      { title: "Planning check", text: "Zoning, storey controls, conservation status and tenure for the plot." },
      { title: "Rebuild budget", text: "Land, construction, fees, stamp duties and holding costs in one number." },
      { title: "Go / no-go", text: "A clear recommendation before you commit to an offer." },
    ],
    stages: ["feasibility"],
  },
  {
    slug: "tender-review",
    href: "/services/tender-review",
    title: "Tender Review Only",
    icon: FileSearch,
    summary: "Already have builders' quotes? We'll tell you if they're fair.",
    lead: "Already have quotes from builders? Send them to us. We benchmark every section and trade against our tender data, flag gaps and risky clauses, and tell you which contractor to appoint.",
    forWho: [
      "Owners who already have an architect and builders' quotes",
      "Anyone unsure whether a tender is fair or complete",
      "A smaller first engagement before a full rebuild",
    ],
    includes: [
      { title: "Line-by-line benchmark", text: "Sections, trades and unit rates compared with comparable landed homes." },
      { title: "Gaps & risks", text: "Missing items, provisional sums and contract terms flagged." },
      { title: "Fair-price certification", text: "A written tender report you can take to the negotiation." },
      { title: "Contractor recommendation", text: "A ranking of the bids and who we would appoint." },
    ],
    stages: ["cost-planning"],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
