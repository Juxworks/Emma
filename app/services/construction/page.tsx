import type { Metadata } from "next";
import { SectionHeading } from "../../components/Section";
import { ConstructionScene } from "../../components/Illustrations";
import { StageLayout } from "../StageParts";
import PlanBook from "./PlanBook";

export const metadata: Metadata = {
  title: "Contract & Construction Oversight | One Step Group Construction",
  description:
    "Stage 5 — contract review, programme tracking, quality inspections and payment checks through to TOP and handover, with a generic landed-home build programme for reference.",
};

export default function ConstructionPage() {
  return (
    <StageLayout
      slug="construction"
      illustration={<ConstructionScene className="w-full" />}
      cta={{
        title: "Planning a rebuild?",
        text: "We'll map out a programme and budget for your site, and help you manage your architect and builder.",
      }}
    >
      <section className="px-4 pt-16 pb-2">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="The Build Book" title="How a Rebuild Unfolds" />
          <p className="mt-4 max-w-2xl leading-relaxed text-body">
            The programme we track your builder against — a typical landed-home
            rebuild, stage by stage, from site possession to handover. Turn the
            pages, or pick a start date to see indicative dates.
          </p>
        </div>
      </section>
      <PlanBook />
    </StageLayout>
  );
}
