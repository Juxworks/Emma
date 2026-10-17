import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaCard, PageHeader, SectionHeading } from "../components/Section";
import { PlanningScene } from "../components/Illustrations";
import { StageNav, StagesGrid } from "./StageParts";

export const metadata: Metadata = {
  title: "Services | One Step Group Construction",
  description:
    "One partner, five stages: feasibility, concept design, detailed design and approvals, budget and cost planning, and contract and construction oversight for Singapore landed homes.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="One Partner, Five Stages" illustration={<PlanningScene className="w-full" />}>
        The same end-to-end journey as design and build — with one difference:
        we work for you, not for the builder. Engage us for the whole journey
        or for a single stage.
      </PageHeader>

      <StageNav />

      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <SectionHeading eyebrow="How We Help" title="Choose a Stage" />
          <div className="mt-10">
            <StagesGrid />
          </div>
          <Link href="/about#contact" className="btn btn-primary mt-10">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaCard
        title="Not sure where to start?"
        text="Most clients begin with a feasibility consultation — we'll tell you what your plot can do and what it will cost."
        label="Book a Consultation"
      />
    </>
  );
}
