import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaCard, PageHeader } from "../components/Section";
import { PlanningScene } from "../components/Illustrations";
import { ServiceCards } from "./ServiceCards";
import { BOOK_LABEL } from "../site";

export const metadata: Metadata = {
  title: "Services | One Step Group Construction",
  description:
    "Independent help to rebuild, renovate or buy a landed home in Singapore — or a tender review on its own.",
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
          <p className="mt-8 text-sm text-body">
            Want to see the whole journey first?{" "}
            <Link href="/how-it-works" className="inline-flex items-center gap-1 py-2 font-semibold text-teal hover:text-ink">
              How it works, in five stages <ArrowRight size={14} />
            </Link>
          </p>
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
