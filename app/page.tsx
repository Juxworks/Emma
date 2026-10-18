import Link from "next/link";
import Image from "next/image";
import { DataScene, HandoverScene, PlanningScene, ConstructionScene } from "./components/Illustrations";
import {
  ArrowRight,
  Check,
  CalendarRange,
  Database,
  ChartLine,
  Calculator,
  BrainCircuit,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./components/Section";
import { StagesGrid } from "./how-it-works/StageParts";
import { ServiceCards } from "./services/ServiceCards";
import { FAQ_GROUPS } from "./faq/faqs";
import { FaqList } from "./faq/FaqList";
import { BOOK_HREF, BOOK_LABEL } from "./site";

const homeFaqs = FAQ_GROUPS.flatMap((g) => g.items).filter((f) => f.home);

const dataSources: { icon: LucideIcon; title: string; text: string; href?: string; link?: string }[] = [
  {
    icon: Database,
    title: "Market data",
    text: "Landed caveats from URA's transaction records, matched to street addresses and mapped — so prices are judged street by street, not by district averages.",
    href: "/plot-check",
    link: "Check your street",
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
    href: "/how-it-works/construction#build-book",
    link: "See a typical build",
  },
  {
    icon: Calculator,
    title: "Tender benchmarks",
    text: "Main-contractor tenders broken down section by section and trade by trade, so every new quote is checked against what comparable homes really cost.",
    href: "/how-it-works/cost-planning#example-review",
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
              <Sparkles size={13} /> Independent · AI-native · Landed homes only
            </span>
            <h1 className="font-heading mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Rebuild your landed home, with someone on your side.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body lg:text-lg">
              A rebuild is one of the biggest cheques your family will ever
              sign. We don&apos;t build — we manage your architect, engineers
              and builder for you, check every price against real data, and
              watch the work through to handover. Buying a plot to rebuild? We
              check that first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={BOOK_HREF} className="btn btn-primary">
                {BOOK_LABEL} <ArrowRight size={16} />
              </Link>
              <Link href="/services#how-it-works" className="btn btn-secondary">
                See How It Works
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
                  Independent rebuild consultants · Joo Chiat
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
            <Link href={BOOK_HREF} className="btn btn-primary">
              {BOOK_LABEL} <ArrowRight size={16} />
            </Link>
            <Link href="/services#how-it-works" className="btn btn-secondary">
              Explore the Five Stages
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="Services" title="What Are You Planning?" />

          <div className="mt-10">
            <ServiceCards />
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
                    className="mt-2 inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-teal transition-colors hover:text-ink"
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
            <SectionHeading eyebrow="Examples" title="The Homes We Help With" />
            <Link href="/projects" className="btn btn-secondary self-start sm:self-auto">
              See More Examples <ArrowRight size={14} />
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
          <div className="mt-8">
            <FaqList items={homeFaqs} />
          </div>
          <Link href="/faq" className="mt-4 inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-teal hover:text-ink">
            All guides &amp; FAQs <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-4 pb-12">
        <div className="glass mx-auto max-w-7xl px-6 py-12 text-center lg:py-16">
          <ConstructionScene className="mx-auto mb-6 w-full max-w-[15rem]" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            Thinking about rebuilding?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Talk to us about your plans. We&apos;ll walk you through the
            numbers, the approvals and the process before you commit.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={BOOK_HREF} className="btn btn-primary">
              {BOOK_LABEL} <ArrowRight size={16} />
            </Link>
            <Link href="/plot-check" className="btn btn-secondary">
              Check Your Street
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
