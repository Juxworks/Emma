import type { Metadata } from "next";
import { TeamScene } from "../../components/Illustrations";
import { StageLayout } from "../StageParts";

export const metadata: Metadata = {
  title: "Detailed Design & Approvals | One Step Group Construction",
  description:
    "Stage 3 — architect and engineers coordinated through detailed design, with URA and BCA submissions tracked through to permit to commence.",
};

export default function DesignApprovalsPage() {
  return <StageLayout slug="design-approvals" illustration={<TeamScene className="w-full" />} />;
}
