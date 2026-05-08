import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, MapPin, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Emma Group Construction",
  description:
    "Learn about Emma Group Construction Pte Ltd — Singapore's specialist contractor for private landed property construction and renovation.",
};

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every project is executed to the highest standards, from foundation to finishing. We do not compromise on quality.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "We deliver on our promises — on time, within budget, and to specification. Your trust is our most valued asset.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We listen carefully to understand your vision and work collaboratively with you throughout the entire project.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Based at Bukit Timah Road, we have deep knowledge of Singapore's planning regulations, soil conditions, and premium residential estates.",
  },
];

const timeline = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Emma Group Construction Pte Ltd was established in Singapore, focusing exclusively on private landed properties.",
  },
  {
    year: "2012",
    title: "BCA Registration",
    description:
      "Achieved BCA registration as a licensed general building contractor, enabling us to take on larger residential projects.",
  },
  {
    year: "2016",
    title: "100th Project",
    description:
      "Completed our 100th landed property project — a milestone reflecting consistent growth through client referrals.",
  },
  {
    year: "2020",
    title: "A&A Specialisation",
    description:
      "Expanded our dedicated Additions & Alterations team to meet growing demand for heritage bungalow renovations.",
  },
  {
    year: "2024",
    title: "200+ Projects",
    description:
      "Surpassed 200 completed projects, cementing our position as a trusted name in Singapore's landed property market.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-950 pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-400">
                About Us
              </p>
              <h1 className="font-heading mt-3 text-5xl font-bold tracking-tight text-white lg:text-7xl">
                Who We Are
              </h1>
              <div className="mt-4 h-1 w-12 bg-brand-500" />
            </div>
            <p className="font-body text-lg font-light leading-relaxed text-brand-200/70">
              Emma Group Construction Pte Ltd is a Singapore-based contractor
              dedicated to the construction and renovation of private landed
              properties. We specialise exclusively in the landed residential
              segment — detached houses, semi-Ds, and bungalows — bringing
              focused expertise to every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/projects/trevose.jpg"
                alt="Emma Group Construction — completed project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">
                Our Mission
              </p>
              <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-950 lg:text-5xl">
                Turning Designs Into Reality
              </h2>
              <div className="mt-4 h-1 w-12 bg-brand-500" />
              <p className="font-body mt-6 leading-relaxed text-brand-900/60">
                Our mission is simple: to build homes that families cherish for
                generations. We work closely with architects, interior designers,
                and homeowners to bring their vision to life — combining
                technical precision with genuine care for the people who will
                live in the homes we build.
              </p>
              <p className="font-body mt-4 leading-relaxed text-brand-900/60">
                Located at 805 Bukit Timah Road, we are embedded in the heart
                of Singapore&apos;s premium residential district — giving us
                unmatched local knowledge of the estates, authorities, and
                conditions that matter.
              </p>
              <Link
                href="/contact"
                className="font-body mt-8 inline-flex items-center gap-2 bg-brand-600 px-7 py-3.5 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-brand-700"
              >
                Work With Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">
              Our Values
            </p>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-950 lg:text-5xl">
              What Guides Us
            </h2>
            <div className="mt-4 h-1 w-12 bg-brand-500" />
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center bg-brand-50">
                  <Icon size={24} className="text-brand-600" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold tracking-wide text-brand-950">
                  {title}
                </h3>
                <p className="font-body mt-3 text-sm leading-relaxed text-brand-900/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-400">
              Our Story
            </p>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white lg:text-5xl">
              15 Years of Building
            </h2>
            <div className="mt-4 h-1 w-12 bg-brand-500" />
          </div>

          <div className="mt-16 relative">
            <div className="absolute left-24 top-0 bottom-0 w-px bg-brand-800 hidden md:block" />
            <div className="flex flex-col gap-12">
              {timeline.map(({ year, title, description }) => (
                <div key={year} className="flex flex-col gap-2 md:flex-row md:gap-12">
                  <div className="flex md:w-48 md:shrink-0 md:justify-end md:pt-1 items-center gap-4 md:gap-0">
                    <span className="font-heading text-2xl font-bold text-brand-500 md:text-right">
                      {year}
                    </span>
                    <div className="hidden md:flex ml-8 h-3 w-3 shrink-0 rounded-full bg-brand-500 relative z-10" />
                  </div>
                  <div className="md:pt-0">
                    <h3 className="font-heading text-lg font-semibold tracking-wide text-white">
                      {title}
                    </h3>
                    <p className="font-body mt-1.5 text-sm leading-relaxed text-brand-300/60">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white lg:text-3xl">
            Let&apos;s Build Together
          </h2>
          <p className="font-body mt-3 text-sm font-light text-white/80">
            Contact us today to discuss your landed property project.
          </p>
          <Link
            href="/contact"
            className="font-body mt-6 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold tracking-widest uppercase text-brand-700 transition-colors hover:bg-brand-50"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
