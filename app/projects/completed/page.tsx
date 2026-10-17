import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHeader, CtaCard } from "../../components/Section";
import ProjectsTabs from "../ProjectsTabs";

export const metadata: Metadata = {
  title: "Completed Projects | One Step Group Construction",
  description:
    "Browse our portfolio of completed construction and renovation projects for private landed properties in Singapore.",
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
      "Landed home construction with landscaped gardens and modern architectural design.",
    image: "/projects/greenleaf.jpg",
  },
  {
    name: "Wan Toh Avenue",
    type: "Construction",
    location: "Wan Toh Avenue, Singapore",
    description:
      "Private landed property with meticulous construction and quality finishing.",
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
      "Landed property development with detailed architectural planning and execution.",
    image: "/projects/cheng-soon.png",
  },
  {
    name: "Kheam Hock Road",
    type: "Construction",
    location: "Kheam Hock Road, Singapore",
    description:
      "Landed property construction in the prestigious Kheam Hock Road enclave.",
    image: "/projects/kheam-hock.jpg",
  },
  {
    name: "Mount Sinai Road",
    type: "Renovation",
    location: "Mount Sinai Road, Singapore",
    description:
      "Residential renovation project delivering a refreshed and modern living environment.",
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
      "Construction project delivered with precision craftsmanship and high-quality workmanship.",
    image: "/projects/ming-tech.jpg",
  },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Completed Projects">
        A selection of construction and renovation projects delivered for
        homeowners across Singapore&apos;s private landed property estates.
      </PageHeader>

      <ProjectsTabs active="completed" />

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
        text="Contact us for a consultation and project estimate."
      />
    </>
  );
}
