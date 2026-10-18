import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { CtaCard, PageHeader, SectionHeading } from "../../components/Section";
import { DataScene, HandoverScene, PlanningScene, ConstructionScene } from "../../components/Illustrations";
import { STAGES } from "../../how-it-works/stages";
import { BOOK_HREF, BOOK_LABEL, SERVICES, serviceBySlug } from "../../site";

const illustrations: Record<string, React.ReactNode> = {
  rebuild: <ConstructionScene className="w-full" />,
  renovation: <HandoverScene className="w-full" />,
  buying: <DataScene className="w-full" />,
  "tender-review": <PlanningScene className="w-full" />,
};

// Links to the tools that back each service.
const tools: Record<string, { href: string; label: string; text: string }> = {
  rebuild: { href: "/how-it-works/construction#build-book", label: "Open the Build Book", text: "See how a typical rebuild unfolds, stage by stage." },
  buying: { href: "/plot-check", label: "Check your street", text: "Recent landed sales and rebuild signals for East Coast estates." },
  "tender-review": { href: "/how-it-works/cost-planning#example-review", label: "See an example review", text: "A real tender, benchmarked line by line." },
};

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  return service ? { title: `${service.title} | One Step Group Construction`, description: service.lead } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const stages = STAGES.filter((s) => service.stages.includes(s.slug));
  const tool = tools[slug];

  return (
    <>
      <PageHeader eyebrow="Services" title={service.title} illustration={illustrations[slug]}>
        {service.lead}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={`${BOOK_HREF}?service=${slug}`} className="btn btn-primary">
            {BOOK_LABEL} <ArrowRight size={16} />
          </Link>
        </div>
      </PageHeader>

      <section className="px-4 py-8">
        <div className="panel mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.6fr_1fr] lg:px-12 lg:py-14">
          <div>
            <SectionHeading eyebrow="What's Included" title="What We Do for You" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {service.includes.map(({ title, text }) => (
                <li key={title} className="rounded-2xl bg-white/85 p-5">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:pt-16">
            <div className="rounded-2xl bg-white/85 p-6">
              <h3 className="font-heading text-base font-semibold text-ink">Right for you if…</h3>
              <ul className="mt-4 space-y-3">
                {service.forWho.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="avatar mt-0.5 h-5 w-5 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            {tool && (
              <Link href={tool.href} className="group rounded-2xl bg-frost-light p-5 transition-colors hover:bg-frost">
                <p className="text-sm leading-snug text-teal">{tool.text}</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                  {tool.label} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading
            eyebrow="How It Works"
            title={stages.length > 1 ? `The ${stages.length} Stages Involved` : "The Stage Involved"}
          />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map(({ href, step, title, description, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className="glass group flex h-full flex-col rounded-2xl! p-6">
                  <div className="flex items-center justify-between">
                    <span className="avatar h-10 w-10">
                      <Icon size={18} />
                    </span>
                    <span className="font-heading text-sm font-bold text-faint">Stage {step}</span>
                  </div>
                  <h3 className="font-heading mt-4 text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal group-hover:text-ink">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 pt-8">
        <div className="mx-auto max-w-7xl lg:px-4">
          <p className="eyebrow">Other services</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {SERVICES.filter((s) => s.slug !== slug).map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="pill-neutral py-2.5! transition-colors hover:text-ink">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaCard
        title="Let's talk about your plans"
        text="A free first call — we'll tell you where your project stands and what to do next."
        href={`${BOOK_HREF}?service=${slug}`}
        label={BOOK_LABEL}
      />
    </>
  );
}
