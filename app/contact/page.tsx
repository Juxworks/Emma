import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import { PageHeader } from "../components/Section";
import ContactForm from "../components/ContactForm";
import { ContactLinks } from "../components/ContactLinks";
import { TeamScene } from "../components/Illustrations";
import { CONTACT } from "../site";

export const metadata: Metadata = {
  title: "Contact | One Step Group Construction",
  description:
    "Book a free feasibility call about buying, rebuilding or renovating a landed home in Singapore. WhatsApp, call or email One Step.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;

  return (
    <>
      <PageHeader eyebrow="Contact" title="Book a Free Feasibility Call" illustration={<TeamScene className="w-full" />}>
        Tell us about your plot and your plans. We&apos;ll reply within one
        business day{CONTACT.whatsappHref ? " — or WhatsApp us for a quicker answer" : ""}.
      </PageHeader>

      <section className="px-4 pb-12 lg:pb-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <aside className="panel flex flex-col gap-6 p-6 lg:p-8">
            {(CONTACT.whatsappHref || CONTACT.phoneHref || CONTACT.email) && (
              <div>
                <h2 className="font-heading text-lg font-semibold text-ink">Talk to us directly</h2>
                <div className="mt-4">
                  <ContactLinks />
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <span className="avatar h-10 w-10 shrink-0">
                <Clock size={17} />
              </span>
              <div>
                <p className="eyebrow">Hours</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{CONTACT.hours}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="avatar h-10 w-10 shrink-0">
                <MapPin size={17} />
              </span>
              <div>
                <p className="eyebrow">Office</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{CONTACT.address}</p>
                <a
                  href={CONTACT.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block py-2.5 text-sm font-semibold text-teal hover:text-ink"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </aside>

          <div className="glass p-6 lg:col-span-2 lg:p-10">
            <ContactForm service={service} />
          </div>
        </div>
      </section>
    </>
  );
}
