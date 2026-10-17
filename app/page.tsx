import Link from "next/link";
import Image from "next/image";
import { DataScene, HandoverScene, PlanningScene, ConstructionScene } from "./components/Illustrations";
import {
  ArrowRight,
  Building2,
  Wrench,
  Check,
  Handshake,
  BadgePercent,
  Landmark,
  CalendarRange,
  Database,
  ChartLine,
  Calculator,
  BrainCircuit,
  Sparkles,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./components/Section";
import { StagesGrid } from "./services/StageParts";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: { icon: LucideIcon; title: string; text: string }[];
}[] = [
  {
    icon: Handshake,
    title: "Investment Consultation",
    description:
      "Data-led advice before you commit — so you buy the right plot at the right price, with a plan that holds together.",
    points: [
      {
        icon: BadgePercent,
        title: "Evaluate good deals",
        text: "Compare asking prices with every recent caveat on the street, check zoning, storey controls and conservation status, and model rebuild cost against resale value.",
      },
      {
        icon: Landmark,
        title: "Financing",
        text: "Work out the total budget across purchase, stamp duties, construction and holding costs, and how to time loan drawdowns and progress payments.",
      },
      {
        icon: CalendarRange,
        title: "Planning",
        text: "Map out design, approvals, construction and sale or move-in, with realistic timelines and the decisions needed at each stage.",
      },
    ],
  },
  {
    icon: Building2,
    title: "Design & Build Management — Landed Houses",
    description:
      "One point of contact for a full rebuild. We assemble and manage the architect, engineers and builder for detached, semi-detached and terrace homes, from feasibility to handover.",
  },
  {
    icon: Wrench,
    title: "A&A and Renovation Advisory",
    description:
      "Scope, budget and contractor selection for Additions & Alterations and renovations, with independent checks on quality, cost and progress.",
  },
];

const dataSources: { icon: LucideIcon; title: string; text: string; href?: string; link?: string }[] = [
  {
    icon: Database,
    title: "Market data",
    text: "Landed caveats from URA's transaction records, matched to street addresses and mapped — so prices are judged street by street, not by district averages.",
    href: "/services/feasibility#market-data",
    link: "Explore the dashboard",
  },
  {
    icon: ChartLine,
    title: "Planning rules",
    text: "URA Master Plan zoning and subzone boundaries, storey controls and conservation areas, applied to the plot before you make an offer.",
  },
  {
    icon: CalendarRange,
    title: "Build programmes",
    text: "Stage-by-stage programmes from typical landed rebuilds, used to set realistic timelines and spot delays early.",
    href: "/services/construction",
    link: "See a typical build",
  },
  {
    icon: Calculator,
    title: "Tender benchmarks",
    text: "Main-contractor tenders broken down section by section and trade by trade, so every new quote is checked against what comparable homes really cost.",
    href: "/services/cost-planning",
    link: "See a tender review",
  },
  {
    icon: BrainCircuit,
    title: "AI assistance",
    text: "AI tools that summarise market data, compare design and cost options, and check documents — reviewed by our consultants before they reach you.",
  },
];

const features = [
  "AI-native: data and AI in every stage",
  "Independent of builders and suppliers",
  "One point of contact from purchase to handover",
  "Street-level price data, not district averages",
  "Budget, programme and quality oversight",
  "Specialists in private landed property",
];

const faqs = [
  {
    q: "How is One Step different from a design-and-build contractor?",
    a: "A design-and-build contractor designs and builds the house itself. We don't build — we act for you: we assemble and manage the architect, engineers and builder, benchmark their prices, and check their work. You get one point of contact without giving up independent oversight.",
  },
  {
    q: "What does “AI-native” mean in practice?",
    a: "Data and AI tools are built into how we work at every stage — screening plots against transaction and planning data, comparing design and budget options, checking documents and tracking programmes. Every recommendation is reviewed by our consultants before it reaches you.",
  },
  {
    q: "What types of projects do you advise on?",
    a: "Private landed homes in Singapore — detached houses, semi-detached homes and terraces — including purchases, full rebuilds, and Additions & Alterations or renovations.",
  },
  {
    q: "How long does a landed rebuild usually take?",
    a: "A typical rebuild runs about 14 months from site possession to handover, plus design and approvals beforehand. Our Build Book walks through every stage.",
  },
];

const projects = [
  {
    name: "Trevose Crescent",
    type: "New Construction",
    image: "/projects/trevose.jpg",
  },
  {
    name: "King's Close",
    type: "New Construction",
    image: "/projects/kings-close.jpg",
  },
  {
    name: "Buckley Road",
    type: "Construction",
    image: "/projects/buckley-road.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-4 pt-28 pb-8 lg:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-4">
          <div className="py-6 lg:py-16">
            <span className="pill-neutral">
              <Sparkles size={13} /> AI-native landed property consultants
            </span>
            <h1 className="font-heading mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Guiding every step of your landed home.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body lg:text-lg">
              Buying, rebuilding or renovating a landed home is one of
              life&apos;s biggest decisions. We combine big data, AI and
              independent expertise — from the first viewing to the final
              handover — so you buy well, build right and avoid costly
              surprises.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about#contact" className="btn btn-primary">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/4]">
              <Image
                src="/projects/hero.jpg"
                alt="Landed home in Singapore"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="glass absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl! p-4 sm:right-auto sm:max-w-xs">
              <span className="avatar h-11 w-11 text-sm">OS</span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  One Step Group Construction
                </p>
                <p className="text-xs text-muted">
                  AI-native consultants · Koon Seng Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five stages ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="How We Help" title="One Partner, Five Stages" />
            <p className="mt-5 leading-relaxed text-body">
              The same end-to-end journey as design and build — with one
              difference: we work for you, not for the builder. We manage your
              architect, engineers and contractor from first consultation to
              handover, with data and AI behind every decision.
            </p>
          </div>
          <PlanningScene className="mx-auto w-full max-w-xs lg:max-w-none" />
          </div>

          <div className="mt-10">
            <StagesGrid />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/about#contact" className="btn btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore the Five Stages
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="What We Do" title="Our Services" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, description, points }) => (
              <div
                key={title}
                className={`glass flex flex-col p-8 transition-transform duration-300 hover:-translate-y-0.5 lg:p-10 ${
                  points ? "md:col-span-2" : ""
                }`}
              >
                <span className="avatar h-12 w-12">
                  <Icon size={22} />
                </span>
                <h3 className="font-heading mt-6 text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-body">{description}</p>
                {points && (
                  <ul className="mt-6 grid gap-4 md:grid-cols-3">
                    {points.map(({ icon: PointIcon, title: pointTitle, text }) => (
                      <li key={pointTitle} className="rounded-2xl bg-frost-light p-5">
                        <div className="flex items-center gap-2.5">
                          <PointIcon size={18} className="shrink-0 text-teal" />
                          <h4 className="text-sm font-semibold text-ink">{pointTitle}</h4>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-body">{text}</p>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/about#contact"
                  className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-ink"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Powered by data ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="AI-Native" title="Powered by Big Data" />
            <p className="mt-5 leading-relaxed text-body">
              Most landed decisions are made on gut feel and a few recent
              listings. Ours start from the full record — every transaction,
              every planning rule and every stage of a typical build — and AI
              helps us turn it into clear advice.
            </p>
          </div>
          <DataScene className="mx-auto w-full max-w-xs lg:max-w-none" />
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {dataSources.map(({ icon: Icon, title, text, href, link }) => (
              <li key={title} className="flex flex-col rounded-2xl bg-white/85 p-6">
                <span className="avatar h-11 w-11">
                  <Icon size={20} />
                </span>
                <h3 className="font-heading mt-5 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{text}</p>
                {href && (
                  <Link
                    href={href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-ink"
                  >
                    {link} <ArrowRight size={14} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why One Step ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:px-4">
          <div>
            <SectionHeading eyebrow="Why Choose Us" title="Independent, Data-Led Advice" />
            <p className="mt-5 leading-relaxed text-body">
              We focus exclusively on Singapore&apos;s private landed homes. We
              don&apos;t build, so our advice is independent — and because it
              is grounded in data rather than anecdote, it protects your budget,
              timeline and investment while getting the best from the
              architects, builders and designers you appoint.
            </p>
            <HandoverScene className="mt-8 w-full max-w-sm" />
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="glass flex items-start gap-3 rounded-2xl! p-4">
                <span className="avatar mt-0.5 h-5 w-5">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm leading-snug text-ink-soft">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="px-4 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl lg:px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="For Reference" title="Featured Projects" />
            <Link href="/projects" className="btn btn-secondary self-start sm:self-auto">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map(({ name, type, image }) => (
              <Link key={name} href="/projects" className="glass group block overflow-hidden p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-3 pb-3 pt-4">
                  <p className="eyebrow">{type}</p>
                  <h3 className="font-heading mt-1 text-lg font-semibold text-ink">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-8 space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="glass group rounded-2xl! p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                  {q}
                  <ChevronDown size={18} className="shrink-0 text-muted transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {a}
                  {q.startsWith("How long") && (
                    <>
                      {" "}
                      <Link href="/services/construction" className="font-semibold text-teal hover:text-ink">
                        Open the Build Book
                      </Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-4 pb-12">
        <div className="glass mx-auto max-w-7xl px-6 py-12 text-center lg:py-16">
          <ConstructionScene className="mx-auto mb-6 w-full max-w-[15rem]" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            Thinking about buying or rebuilding?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Talk to us about your plans. We&apos;ll walk you through the
            numbers, the approvals and the process before you commit.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/about#contact" className="btn btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
