import type { Metadata } from "next";
import { CtaCard, PageHeader, SectionHeading } from "../components/Section";
import { PlanningScene } from "../components/Illustrations";
import { ServiceCards } from "./ServiceCards";
import { StagesGrid } from "../how-it-works/StageParts";
import { BOOK_LABEL } from "../site";

export const metadata: Metadata = {
  title: "Services | One Step Group Construction",
  description:
    "Independent help to rebuild, renovate or buy a landed home in Singapore — or a tender review on its own — and the five stages every project follows.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="What Are You Planning?" illustration={<PlanningScene className="w-full" />}>
        Pick the one that fits. Every service is independent of builders and
        suppliers — we work for you, not for the contractor.
      </PageHeader>

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-7xl lg:px-4">
          <ServiceCards />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-28 px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <SectionHeading eyebrow="How It Works" title="One Partner, Five Stages" />
          <p className="mt-5 max-w-2xl leading-relaxed text-body">
            Every service follows the same journey as design and build — with
            one difference: we work for you, not for the builder. Engage us for
            the whole journey or a single stage.
          </p>
          <div className="mt-10">
            <StagesGrid />
          </div>
        </div>
      </section>

      <CtaCard
        title="Not sure which fits?"
        text="Most clients start with a free feasibility call — we'll tell you what your plot can do and what it will cost."
        label={BOOK_LABEL}
      />
    </>
  );
}
