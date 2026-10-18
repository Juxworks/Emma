import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaCard, PageHeader, SectionHeading } from "../components/Section";
import { PlanningScene } from "../components/Illustrations";
import { StagesGrid } from "./StageParts";
import { BOOK_HREF, BOOK_LABEL } from "../site";

export const metadata: Metadata = {
  title: "How It Works | One Step Group Construction",
  description:
    "One partner, five stages: feasibility, concept design, detailed design and approvals, budget and cost planning, and contract and construction oversight for Singapore landed homes.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="How It Works" title="One Partner, Five Stages" illustration={<PlanningScene className="w-full" />}>
        The same end-to-end journey as design and build — with one difference:
        we work for you, not for the builder. Engage us for the whole journey
        or for a single stage.
      </PageHeader>

      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <SectionHeading eyebrow="From Plot to Keys" title="The Five Stages" />
          <div className="mt-10">
            <StagesGrid />
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={BOOK_HREF} className="btn btn-primary">
              {BOOK_LABEL} <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Find the service that fits
            </Link>
          </div>
        </div>
      </section>

      <CtaCard
        title="Not sure where to start?"
        text="Most clients begin with a feasibility call — we'll tell you what your plot can do and what it will cost."
        label={BOOK_LABEL}
      />
    </>
  );
}
