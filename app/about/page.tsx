import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, MapPin, Shield } from "lucide-react";
import { PageHeader, SectionHeading, CtaCard } from "../components/Section";

export const metadata: Metadata = {
  title: "About Us | One Step Group Construction",
  description:
    "Learn about One Step Group Construction Pte Ltd — Singapore's specialist contractor for private landed property construction and renovation.",
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
      "Based on Koon Seng Road in Joo Chiat, we have deep knowledge of Singapore's planning regulations, conservation guidelines, and East Coast landed estates.",
  },
];

const timeline = [
  {
    year: "2009",
    title: "Founded",
    description:
      "One Step Group Construction Pte Ltd was established in Singapore, focusing exclusively on private landed properties.",
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
      <PageHeader eyebrow="About Us" title="Who We Are">
        One Step Group Construction Pte Ltd is a Singapore-based contractor
        dedicated to the construction and renovation of private landed
        properties — detached houses, semi-Ds, and bungalows — bringing focused
        expertise to every project we undertake.
      </PageHeader>

      {/* Mission */}
      <section className="px-4 py-8">
        <div className="glass mx-auto grid max-w-7xl gap-10 p-3 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/projects/trevose.jpg"
              alt="One Step Group Construction — completed project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="px-4 pb-6 lg:px-0 lg:pb-0 lg:pr-10">
            <SectionHeading eyebrow="Our Mission" title="Turning Designs Into Reality" />
            <p className="mt-5 leading-relaxed text-body">
              Our mission is simple: to build homes that families cherish for
              generations. We work closely with architects, interior designers,
              and homeowners to bring their vision to life — combining
              technical precision with genuine care for the people who will
              live in the homes we build.
            </p>
            <p className="mt-4 leading-relaxed text-body">
              Located at 9 3/4 Koon Seng Road in Joo Chiat, we are embedded in the
              heart of the East Coast&apos;s landed estates — giving us
              unmatched local knowledge of the estates, authorities, and
              conditions that matter.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8">
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
          <SectionHeading eyebrow="Our Story" title="15 Years of Building" />

          <ol className="relative mt-10 space-y-4 before:absolute before:bottom-6 before:left-[1.375rem] before:top-6 before:w-px before:bg-black/10 md:before:left-[6.875rem]">
            {timeline.map(({ year, title, description }) => (
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
                    {title}
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

      <CtaCard
        title="Let's build together"
        text="Contact us today to discuss your landed property project."
        label="Contact Us"
      />
    </>
  );
}
