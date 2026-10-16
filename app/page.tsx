import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Wrench,
  Check,
  SearchCheck,
  PencilRuler,
  HardHat,
  Sofa,
  Handshake,
  BadgePercent,
  Landmark,
  CalendarRange,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./components/Section";

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
      "Independent advice before you commit — so you buy the right plot at the right price, with a plan that holds together.",
    points: [
      {
        icon: BadgePercent,
        title: "Evaluate good deals",
        text: "Compare asking prices with recent sales on the street, check zoning, storey controls and conservation status, and estimate rebuild cost against resale value.",
      },
      {
        icon: Landmark,
        title: "Financing",
        text: "Work out total budget across purchase, stamp duties, construction and holding costs, and how to time loan drawdowns and progress payments.",
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
    title: "New Construction",
    description:
      "Full design-to-build construction for detached houses, semi-detached homes, and bungalows on private landed plots across Singapore.",
  },
  {
    icon: Wrench,
    title: "Renovation & A&A",
    description:
      "Additions & Alterations, interior renovation, and structural improvements that breathe new life into your existing landed home.",
  },
];

const journey = [
  {
    icon: SearchCheck,
    step: "01",
    title: "Buying",
    description:
      "We help you find and assess the right plot — recent sales, URA Master Plan zoning, storey controls, conservation status and rebuild feasibility — before you make an offer.",
    href: "/developments",
    link: "See development potential",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "Design & Approvals",
    description:
      "We work with your architect to maximise built-up area within the rules, and manage submissions to URA and BCA so your project starts on schedule.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    description:
      "Full rebuilds, A&A works and renovations delivered by our own team, with transparent pricing, clear timelines and regular site updates.",
  },
  {
    icon: Sofa,
    step: "04",
    title: "Interior Design",
    description:
      "The final touches — layouts, materials, joinery, lighting and styling — so the home is ready to live in, rent out or sell at its best.",
  },
];

const features = [
  "Specialist in private landed properties",
  "BCA-registered contractor",
  "End-to-end project management",
  "Transparent pricing and timeline",
  "Quality materials and craftsmanship",
  "Post-completion support",
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
            <span className="pill-neutral">Singapore Landed Property Specialists</span>
            <h1 className="font-heading mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Turning your designs into reality.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-body lg:text-lg">
              Building your dream home is one of life&apos;s greatest
              milestones. We bring the craftsmanship, expertise, and dedication
              to make your vision a reality you&apos;ll treasure for
              generations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="btn btn-primary">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link href="/about#contact" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/4]">
              <Image
                src="/projects/hero.jpg"
                alt="Landed home built by One Step Group Construction"
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
                  BCA-registered · Koon Seng Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consulting ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Consulting" title="From Buying to Final Touches" />
            <p className="mt-5 leading-relaxed text-body">
              One partner for the whole journey. Whether you are buying to live
              in or to rebuild and sell, we guide you from choosing the right
              plot through construction to the finished interior.
            </p>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map(({ icon: Icon, step, title, description, href, link }) => (
              <li key={step} className="flex flex-col rounded-2xl bg-white/85 p-6">
                <div className="flex items-center justify-between">
                  <span className="avatar h-11 w-11">
                    <Icon size={20} />
                  </span>
                  <span className="font-heading text-sm font-bold text-faint">
                    {step}
                  </span>
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {description}
                </p>
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
          </ol>

          <Link href="/about#contact" className="btn btn-primary mt-10">
            Book a Consultation <ArrowRight size={16} />
          </Link>
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
                <h3 className="font-heading mt-6 text-xl font-semibold text-ink">
                  {title}
                </h3>
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

      {/* ── Why One Step ── */}
      <section className="px-4 py-8">
        <div className="panel mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-16">
          <div>
            <SectionHeading eyebrow="Why Choose Us" title="Built on Trust & Expertise" />
            <p className="mt-5 leading-relaxed text-body">
              With over 15 years of experience exclusively in Singapore&apos;s
              private landed property sector, One Step Group Construction brings
              specialist knowledge, reliable workmanship, and a commitment to
              delivering your vision on time and within budget.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl bg-white/80 p-4"
              >
                <span className="avatar mt-0.5 h-5 w-5">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm leading-snug text-ink-soft">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
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
                  <h3 className="font-heading mt-1 text-lg font-semibold text-ink">
                    {name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-4 pb-12">
        <div className="glass mx-auto max-w-7xl px-6 py-12 text-center lg:py-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink lg:text-4xl">
            Ready to build your dream home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body">
            Talk to our team about your project. We&apos;ll walk you through
            the process from design to completion.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/about#contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link href="/developments" className="btn btn-secondary">
              Explore Development Potential
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
