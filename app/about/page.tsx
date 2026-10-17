import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, MapPin, Shield } from "lucide-react";
import { PageHeader, SectionHeading } from "../components/Section";
import ContactForm from "../components/ContactForm";
import { STAGES } from "../services/stages";
import { TeamScene } from "../components/Illustrations";

export const metadata: Metadata = {
  title: "About & Contact | One Step Group Construction",
  description:
    "Learn about One Step Group Construction — AI-native, independent consultants helping owners and investors buy, rebuild and renovate private landed homes in Singapore.",
};

const values = [
  {
    icon: Shield,
    title: "Independent Advice",
    description:
      "We don't build or sell, so our recommendations are made only in your interest — on price, plot, team and budget.",
  },
  {
    icon: Award,
    title: "Reliability",
    description:
      "We do what we say — clear advice, realistic timelines and honest numbers. Your trust is our most valued asset.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We listen to understand your goals — to live in, rent out or sell — and tailor our advice to them at every stage.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Based on Koon Seng Road in Joo Chiat, we have deep knowledge of Singapore's planning regulations, conservation guidelines, and East Coast landed estates.",
  },
];

// The same five stages as the home page and Services.
const steps = STAGES;

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Who We Are" illustration={<TeamScene className="w-full" />}>
        One Step Group Construction is an AI-native consultancy for private
        landed property in Singapore — detached houses, semi-Ds and terraces.
        We use big data and AI to help owners and investors buy well, plan
        rebuilds and renovations, and manage the process through to
        completion.
      </PageHeader>

      {/* Mission */}
      <section className="px-4 py-8">
        <div className="glass mx-auto grid max-w-7xl gap-10 p-3 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/projects/trevose.jpg"
              alt="Landed home in Singapore"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="px-4 pb-6 lg:px-0 lg:pb-0 lg:pr-10">
            <SectionHeading eyebrow="Our Mission" title="Guiding Every Step" />
            <p className="mt-5 leading-relaxed text-body">
              Our mission is simple: to help families and investors make
              confident decisions about landed property. We work closely with
              homeowners, architects, builders and interior designers —
              combining big data, AI and technical know-how with genuine care
              for the people who will live in these homes.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              Located at 9 3/4 Koon Seng Road in Joo Chiat, we are embedded in the
              heart of the East Coast&apos;s landed estates — giving us
              unmatched local knowledge of the estates, authorities, and
              conditions that matter.
            </p>
            <Link href="#contact" className="btn btn-primary mt-8">
              Work With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl lg:px-4">
          <SectionHeading eyebrow="Our Values" title="What Guides Us" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass p-7">
                <span className="avatar h-11 w-11">
                  <Icon size={20} />
                </span>
                <h3 className="font-heading mt-5 text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-8">
        <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
          <SectionHeading eyebrow="Our Process" title="How We Work" />

          <ol className="relative mt-10 space-y-4 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-black/10 md:before:left-[6.875rem]">
            {steps.map(({ step: year, title, description, href }) => (
              <li key={year} className="relative flex gap-5 md:gap-6">
                <span className="hidden w-20 shrink-0 pt-5 text-right font-heading text-lg font-bold text-ink md:block">
                  {year}
                </span>
                <span className="relative z-10 mt-6 flex h-3 w-3 shrink-0 translate-x-4 items-center justify-center rounded-full bg-white ring-4 ring-frost md:translate-x-0">
                  <span className="dot" />
                </span>
                <div className="flex-1 rounded-2xl bg-white/85 p-5 md:ml-2">
                  <p className="eyebrow md:hidden">{year}</p>
                  <h3 className="font-heading text-base font-semibold text-ink">
                    <Link href={href} className="transition-colors hover:text-teal">
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl lg:px-4">
            <SectionHeading eyebrow="Get In Touch" title="Contact Us" />
            <p className="mt-4 leading-relaxed text-body">
              Tell us about your plans — buying, rebuilding or renovating.
              We&apos;ll get back to you within one business day.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <aside className="panel flex flex-col p-6 lg:p-8">
              <h3 className="font-heading text-lg font-semibold text-ink">
                Our Office
              </h3>
              <div className="mt-6 flex gap-4">
                <span className="avatar h-10 w-10">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="eyebrow">Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    9 3/4 Koon Seng Road
                    <br />
                    Singapore
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=9+3%2F4+Koon+Seng+Road+Singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mt-8 self-start"
              >
                <MapPin size={16} /> Open in Google Maps
              </a>
            </aside>

            <div className="glass p-6 lg:col-span-2 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
