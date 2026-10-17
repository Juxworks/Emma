import type { Metadata } from "next";
import { DataScene } from "../../components/Illustrations";
import { StageLayout } from "../StageParts";
import TenderReview from "./TenderReview";

export const metadata: Metadata = {
  title: "Budget & Cost Planning | One Step Group Construction",
  description:
    "Stage 4 — a full budget for your landed home, and every main-contractor tender benchmarked against our data and certified as a fair quote.",
};

export default function CostPlanningPage() {
  return (
    <StageLayout
      slug="cost-planning"
      illustration={<DataScene className="w-full" />}
      cta={{
        title: "Received a tender?",
        text: "Send it to us. We'll benchmark it, flag the gaps and tell you whether it's a fair quote.",
        label: "Book a Tender Review",
      }}
    >
      <TenderReview />
    </StageLayout>
  );
}
