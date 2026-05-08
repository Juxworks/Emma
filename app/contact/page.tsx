import type { Metadata } from "next";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { FacebookIcon, InstagramIcon } from "../components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact | Emma Group Construction",
  description:
    "Get in touch with Emma Group Construction for a consultation on your landed property project in Singapore.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-400">
            Get In Touch
          </p>
          <h1 className="font-heading mt-3 text-5xl font-bold tracking-tight text-white lg:text-7xl">
            Contact Us
          </h1>
          <div className="mt-4 h-1 w-12 bg-brand-500" />
          <p className="font-body mt-6 max-w-lg text-base font-light leading-relaxed text-brand-200/70">
            Tell us about your project. Our team will get back to you within one
            business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <h2 className="font-heading text-xl font-semibold tracking-wide text-brand-950">
                Our Office
              </h2>
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-50">
                    <MapPin size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Address
                    </p>
                    <p className="font-body mt-1 text-sm leading-relaxed text-brand-900/70">
                      805 Bukit Timah Road, #01-01
                      <br />
                      Sixth Avenue Centre
                      <br />
                      Singapore 279883
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-50">
                    <Phone size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Phone
                    </p>
                    <a
                      href="tel:+6564637738"
                      className="font-body mt-1 block text-sm text-brand-900/70 transition-colors hover:text-brand-600"
                    >
                      6463 7738
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-50">
                    <Printer size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Fax
                    </p>
                    <p className="font-body mt-1 text-sm text-brand-900/70">
                      6463 7730
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-50">
                    <Mail size={18} className="text-brand-600" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Email
                    </p>
                    <a
                      href="mailto:Project@emmagroups.com"
                      className="font-body mt-1 block text-sm text-brand-900/70 transition-colors hover:text-brand-600"
                    >
                      Project@emmagroups.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-brand-100 pt-8">
                <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-600">
                  Follow Us
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/EmmaGroups/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center border border-brand-200 text-brand-600 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                  >
                    <FacebookIcon size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/emmagroups/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center border border-brand-200 text-brand-600 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                  >
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="flex h-72 items-center justify-center border-t border-brand-100 bg-brand-50">
        <div className="text-center">
          <MapPin size={32} className="mx-auto text-brand-400" />
          <p className="font-body mt-2 text-xs tracking-widest uppercase text-brand-500">
            805 Bukit Timah Road, Singapore 279883
          </p>
          <a
            href="https://maps.google.com/?q=805+Bukit+Timah+Road+Singapore+279883"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body mt-3 inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-800"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
