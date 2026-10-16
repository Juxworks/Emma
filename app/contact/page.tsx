import type { Metadata } from "next";
import { MapPin, type LucideIcon } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { PageHeader } from "../components/Section";

export const metadata: Metadata = {
  title: "Contact | One Step Group Construction",
  description:
    "Get in touch with One Step Group Construction for a consultation on your landed property project in Singapore.",
};

const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "9 3/4 Koon Seng Road\nSingapore",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Us">
        Tell us about your project. Our team will get back to you within one
        business day.
      </PageHeader>

      <section className="px-4 pb-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* Contact details */}
          <aside className="panel flex flex-col p-6 lg:p-8">
            <h2 className="font-heading text-lg font-semibold text-ink">
              Our Office
            </h2>
            <ul className="mt-6 flex flex-col gap-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="avatar h-10 w-10">
                    <Icon size={17} />
                  </span>
                  <div>
                    <p className="eyebrow">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block text-sm text-ink-soft transition-colors hover:text-teal"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://maps.google.com/?q=9+3%2F4+Koon+Seng+Road+Singapore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-8 self-start"
            >
              <MapPin size={16} /> Open in Google Maps
            </a>
          </aside>

          {/* Contact form */}
          <div className="glass p-6 lg:col-span-2 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
