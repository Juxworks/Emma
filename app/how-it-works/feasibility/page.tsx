import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import { SectionHeading } from "../../components/Section";
import { DataScene } from "../../components/Illustrations";
import { StageLayout } from "../StageParts";

export const metadata: Metadata = {
  title: "Consultation & Feasibility | One Step Group Construction",
  description:
    "Stage 1 — consultation and feasibility for Singapore landed homes: price, planning and rebuild checks before you buy or rebuild.",
};

export default function FeasibilityPage() {
  return (
    <StageLayout
      slug="feasibility"
      illustration={<DataScene className="w-full" />}
      cta={{
        title: "Thinking about buying or rebuilding?",
        text: "Contact us for a site assessment and feasibility review before you commit.",
      }}
    >
      <section className="px-4 pt-16">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="Feasibility Tool" title="Plot Check" />
          <Link
            href="/plot-check"
            className="glass group mt-6 flex flex-col gap-4 rounded-2xl! p-6 sm:flex-row sm:items-center lg:p-8"
          >
            <span className="avatar h-12 w-12 shrink-0">
              <MapPinned size={22} />
            </span>
            <span className="flex-1 leading-relaxed text-body">
              Every landed sale from URA&apos;s caveat records, mapped street by
              street across eight East Coast estates — the data we use to test a
              plot&apos;s price and potential before you commit.
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-teal group-hover:text-ink">
              Check your street <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>
    </StageLayout>
  );
}
