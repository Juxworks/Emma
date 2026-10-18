import type { Metadata } from "next";
import { PlanningScene } from "../../components/Illustrations";
import { StageLayout } from "../StageParts";

export const metadata: Metadata = {
  title: "Concept Design | One Step Group Construction",
  description:
    "Stage 2 — a clear architect brief and side-by-side concept options for your landed home, checked against planning limits and budget.",
};

export default function ConceptDesignPage() {
  return <StageLayout slug="concept-design" illustration={<PlanningScene className="w-full" />} />;
}
