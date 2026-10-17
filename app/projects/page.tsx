import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHeader, CtaCard } from "../components/Section";
import { HandoverScene, TeamScene } from "../components/Illustrations";

export const metadata: Metadata = {
  title: "Completed Projects | One Step Group Construction",
  description:
    "For reference: completed landed-home rebuilds and renovations in Singapore that illustrate the kinds of projects our services cover.",
};

const projects = [
  {
    name: "Trevose Crescent",
    type: "New Construction",
    location: "Trevose Crescent, Singapore",
    description:
      "Modern landed home with high-end finishes, elegant architectural details, and professional landscaping.",
    image: "/projects/trevose.jpg",
  },
  {
    name: "King's Close",
    type: "New Construction",
    location: "King's Close, Singapore",
    description:
      "Spacious detached dwelling with panoramic outdoor areas and premium interior spaces.",
    image: "/projects/kings-close.jpg",
  },
  {
    name: "Buckley Road",
    type: "Construction",
    location: "Buckley Road, Singapore",
    description:
      "Private landed property development in the prestigious Buckley Road area.",
    image: "/projects/buckley-road.jpg",
  },
  {
    name: "Limau Garden",
    type: "Renovation",
    location: "Limau Garden, Singapore",
    description:
      "Complete renovation including rooftop terrace, master suite, and open-plan living areas.",
    image: "/projects/limau-garden.jpg",
  },
  {
    name: "Greenleaf Drive",
    type: "New Construction",
    location: "Greenleaf Drive, Singapore",
    description:
      "Landed home with landscaped gardens and modern architectural design.",
    image: "/projects/greenleaf.jpg",
  },
  {
    name: "Wan Toh Avenue",
    type: "Construction",
    location: "Wan Toh Avenue, Singapore",
    description:
      "Private landed home with a clean modern façade and quality finishes.",
    image: "/projects/wan-toh.jpg",
  },
  {
    name: "Kew Drive",
    type: "Renovation",
    location: "Kew Drive, Singapore",
    description:
      "Front terrace renovation, main entrance upgrade, and garden bridge construction.",
    image: "/projects/kew-drive.jpeg",
  },
  {
    name: "Cheng Soon Crescent",
    type: "Construction",
    location: "Cheng Soon Crescent, Singapore",
    description:
      "Landed home with detailed architectural planning and a light-filled interior.",
    image: "/projects/cheng-soon.png",
  },
  {
    name: "Kheam Hock Road",
    type: "Construction",
    location: "Kheam Hock Road, Singapore",
    description:
      "Landed home in the prestigious Kheam Hock Road enclave.",
    image: "/projects/kheam-hock.jpg",
  },
  {
    name: "Mount Sinai Road",
    type: "Renovation",
    location: "Mount Sinai Road, Singapore",
    description:
      "Residential renovation creating a refreshed and modern living environment.",
    image: "/projects/mount-sinai.jpeg",
  },
  {
    name: "Chee Hoon Avenue",
    type: "Renovation",
    location: "Chee Hoon Avenue, Singapore",
    description:
      "Comprehensive renovation of a private landed home with contemporary updates.",
    image: "/projects/chee-hoon.jpg",
  },
  {
    name: "Ming Tech Park",
    type: "Construction",
    location: "Singapore",
    description:
      "Contemporary landed home with a striking roofline on a corner plot.",
    image: "/projects/ming-tech.jpg",
  },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Completed Projects"
        illustration={<HandoverScene className="w-full" />}
      >
        A selection of completed landed-home rebuilds and renovations across
        Singapore&apos;s private estates — the kinds of projects our five-stage
        service guides clients through, from purchase to handover.
      </PageHeader>

      <section className="px-4 pb-6">
        <div className="mx-auto max-w-7xl lg:px-4">
          <span className="pill-amber">For reference only — example landed projects across Singapore</span>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-4 pb-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {projects.map(({ name, type, location, description, image }) => (
            <article key={name} className="glass group flex flex-col overflow-hidden p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="pill-neutral absolute left-3 top-3 bg-white/90 backdrop-blur">
                  {type}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {name}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={12} className="shrink-0" />
                  {location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaCard
        title="Have a project in mind?"
        illustration={<TeamScene className="w-full" />}
        text="See how our five stages take a landed home from feasibility to handover."
        href="/services"
        label="Explore Our Services"
      />
    </>
  );
}
