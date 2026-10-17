import type { Metadata } from "next";
import { PageHeader, CtaCard } from "../components/Section";
import PlanBook from "./PlanBook";
import ProjectsTabs from "./ProjectsTabs";

export const metadata: Metadata = {
  title: "Project Build | One Step Group Construction",
  description:
    "How a typical landed-home rebuild in Singapore unfolds, stage by stage — a generic build programme for reference only.",
};

export default function ProjectBuildPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Project Build">
        How a landed-home rebuild usually unfolds, stage by stage, from site
        possession to handover. Turn the pages, or pick a start date to see
        indicative dates.
      </PageHeader>

      <ProjectsTabs active="build" />

      <PlanBook />

      <CtaCard
        title="Planning a rebuild?"
        text="Contact us for a programme and estimate tailored to your site."
      />
    </>
  );
}
