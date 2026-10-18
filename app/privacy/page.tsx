import type { Metadata } from "next";
import { PageHeader } from "../components/Section";
import { CONTACT } from "../site";

export const metadata: Metadata = {
  title: "Privacy Notice | One Step Group Construction",
  description: "How One Step Group Construction collects, uses and protects your personal data under Singapore's PDPA.",
};

// TODO: have this notice reviewed and name the Data Protection Officer before launch.
const sections = [
  {
    title: "What we collect",
    text: "The details you give us when you contact us — your name, email, phone number and anything you tell us about your property or plans.",
  },
  {
    title: "How we use it",
    text: "Only to reply to your enquiry and, if you engage us, to deliver our services. We don't sell your data or use it for unrelated marketing.",
  },
  {
    title: "Who we share it with",
    text: "Architects, engineers or contractors working on your project, only with your agreement, and service providers who help us run this website and our email.",
  },
  {
    title: "How long we keep it",
    text: "For as long as we need it for your enquiry or project, and any period required by law. After that we delete it.",
  },
  {
    title: "Your rights",
    text: "You can ask to see or correct the personal data we hold about you, or withdraw your consent to us using it, at any time.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy Notice">
        We handle your personal data in line with Singapore&apos;s Personal Data
        Protection Act 2012 (PDPA).
      </PageHeader>

      <section className="px-4 pb-16">
        <div className="glass mx-auto max-w-3xl space-y-8 p-6 lg:p-10">
          {sections.map(({ title, text }) => (
            <div key={title}>
              <h2 className="font-heading text-lg font-semibold text-ink">{title}</h2>
              <p className="mt-2 leading-relaxed text-body">{text}</p>
            </div>
          ))}
          <div>
            <h2 className="font-heading text-lg font-semibold text-ink">Contact our Data Protection Officer</h2>
            <p className="mt-2 leading-relaxed text-body">
              {CONTACT.email && (
                <>
                  Email{" "}
                  <a href={`mailto:${CONTACT.email}`} className="font-semibold text-teal hover:text-ink">
                    {CONTACT.email}
                  </a>{" "}
                  or write
                </>
              )}
              {!CONTACT.email && "Use our contact form or write"} to us at {CONTACT.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
