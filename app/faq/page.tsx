import type { Metadata } from "next";
import { CtaCard, PageHeader, SectionHeading } from "../components/Section";
import { HandoverScene } from "../components/Illustrations";
import { BOOK_LABEL } from "../site";
import { FAQ_GROUPS } from "./faqs";
import { FaqList } from "./FaqList";

export const metadata: Metadata = {
  title: "Guides & FAQ | One Step Group Construction",
  description:
    "Rebuild costs, timelines, URA and BCA approvals, conservation rules and how our fees work — answers for Singapore landed-home owners.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Guides & FAQ" title="Questions Owners Ask First" illustration={<HandoverScene className="w-full" />}>
        What a rebuild costs, how long it takes, which approvals you need and
        how we work — in plain English.
      </PageHeader>

      <nav aria-label="FAQ topics" className="px-4 pb-6">
        <ul className="mx-auto flex max-w-3xl flex-wrap gap-2">
          {FAQ_GROUPS.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`} className="pill-neutral py-2.5! transition-colors hover:text-ink">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4">
        <div className="mx-auto max-w-3xl space-y-12 py-6">
          {FAQ_GROUPS.map(({ id, title, items }) => (
            <section key={id} id={id} className="scroll-mt-28">
              <SectionHeading eyebrow="FAQ" title={title} />
              <div className="mt-6">
                <FaqList items={items} />
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaCard
        title="Have a question about your plot?"
        text="Ask us on a free first call — we'll give you straight answers for your own site."
        label={BOOK_LABEL}
      />
    </>
  );
}
