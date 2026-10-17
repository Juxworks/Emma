import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { CtaCard, PageHeader, SectionHeading } from "../components/Section";
import { STAGES, stageBySlug } from "./stages";

/** The five stages as a step bar; the current stage is highlighted. */
export function StageNav({ active }: { active?: string }) {
  return (
    <div className="px-4 pb-6">
      <nav aria-label="Service stages" className="mx-auto max-w-7xl lg:px-4">
        <ol className="panel flex gap-1 overflow-x-auto rounded-2xl! p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STAGES.map(({ href, step, title, slug }) => {
            const on = slug === active;
            return (
              <li key={slug} className="min-w-0 flex-1 basis-0">
                <Link
                  href={href}
                  aria-current={on ? "page" : undefined}
                  className={`flex h-full min-w-[9.5rem] items-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    on ? "bg-white text-ink shadow-sm" : "text-body hover:bg-white/60 hover:text-ink"
                  }`}
                >
                  <span className={`font-heading text-xs font-bold tabular-nums ${on ? "text-teal" : "text-faint"}`}>{step}</span>
                  <span className={`leading-snug ${on ? "font-semibold" : "font-medium"}`}>{title}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

/** The five stages as cards — used on the home page and the Services overview. */
export function StagesGrid() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {STAGES.map(({ icon: Icon, step, title, description, data, href }) => (
        <li key={step}>
          <Link href={href} className="group flex h-full flex-col rounded-2xl bg-white/85 p-6 transition-transform duration-300 hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <span className="avatar h-11 w-11">
                <Icon size={20} />
              </span>
              <span className="font-heading text-sm font-bold text-faint">{step}</span>
            </div>
            <h3 className="font-heading mt-5 text-base font-semibold text-ink">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{description}</p>
            <p className="mt-4 flex items-start gap-1.5 rounded-xl bg-frost-light p-3 text-xs leading-snug text-teal">
              <Sparkles size={13} className="mt-0.5 shrink-0" />
              {data}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors group-hover:text-ink">
              Learn more <ArrowRight size={14} />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Shared layout for a stage page: header, step bar, what we do, deliverables, then the stage's own content. */
export function StageLayout({
  slug,
  illustration,
  children,
  cta,
}: {
  slug: string;
  illustration: React.ReactNode;
  children?: React.ReactNode;
  cta?: { title: string; text: string; label?: string };
}) {
  const stage = stageBySlug(slug);
  const i = STAGES.indexOf(stage);
  const prev = STAGES[i - 1];
  const next = STAGES[i + 1];

  return (
    <>
      <PageHeader eyebrow={`Services · Stage ${stage.step} of 05`} title={stage.title} illustration={illustration}>
        {stage.lead}
      </PageHeader>

      <StageNav active={slug} />

      <section className="px-4 py-8">
        <div className="panel mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.6fr_1fr] lg:px-12 lg:py-14">
          <div>
            <SectionHeading eyebrow="What We Do" title="Our Role at This Stage" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {stage.whatWeDo.map(({ title, text }) => (
                <li key={title} className="rounded-2xl bg-white/85 p-5">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 lg:pt-16">
            <div className="rounded-2xl bg-white/85 p-6">
              <h3 className="font-heading text-base font-semibold text-ink">What you receive</h3>
              <ul className="mt-4 space-y-3">
                {stage.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="avatar mt-0.5 h-5 w-5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <p className="flex items-start gap-2 rounded-2xl bg-frost-light p-4 text-sm leading-snug text-teal">
              <Sparkles size={15} className="mt-0.5 shrink-0" />
              <span>
                <strong className="font-semibold">AI-native: </strong>
                {stage.data}.
              </span>
            </p>
          </div>
        </div>
      </section>

      {children}

      <nav aria-label="Previous and next stage" className="px-4 pt-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:px-4">
          {prev ? (
            <Link href={prev.href} className="glass group flex items-center gap-4 rounded-2xl! p-5">
              <ArrowLeft size={18} className="shrink-0 text-teal transition-transform group-hover:-translate-x-0.5" />
              <span>
                <span className="block text-xs text-muted">Previous · Stage {prev.step}</span>
                <span className="font-semibold text-ink">{prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {next && (
            <Link href={next.href} className="glass group flex items-center justify-end gap-4 rounded-2xl! p-5 text-right">
              <span>
                <span className="block text-xs text-muted">Next · Stage {next.step}</span>
                <span className="font-semibold text-ink">{next.title}</span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-teal transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </nav>

      <CtaCard
        title={cta?.title ?? `Need help with ${stage.title.toLowerCase()}?`}
        text={cta?.text ?? "Book a consultation and we'll tell you where your project stands and what to do next."}
        label={cta?.label ?? "Book a Consultation"}
      />
    </>
  );
}
