import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Emma Group Construction",
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
    image: "/projects/chee-hoon.jpeg",
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

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-950 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-400">
            Portfolio
          </p>
          <h1 className="font-heading mt-3 text-5xl font-bold tracking-tight text-white lg:text-7xl">
            Our Projects
          </h1>
          <div className="mt-4 h-1 w-12 bg-brand-500" />
          <p className="font-body mt-6 max-w-lg text-base font-light leading-relaxed text-brand-200/70">
            A selection of construction and renovation projects delivered for
            homeowners across Singapore&apos;s private landed property estates.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-brand-950 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ name, type, location, description, image }) => (
              <article key={name} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-950/10 transition-colors duration-300 group-hover:bg-brand-950/30" />
                  <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="bg-brand-950/80 p-3 backdrop-blur-sm w-full">
                      <p className="font-body text-xs leading-relaxed text-white/90">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col border border-t-0 border-brand-800 p-5">
                  <p className="font-body text-xs font-semibold tracking-widest uppercase text-brand-400">
                    {type}
                  </p>
                  <h2 className="font-heading mt-2 text-lg font-semibold tracking-wide text-white">
                    {name}
                  </h2>
                  <p className="font-body mt-1 text-xs text-brand-500">
                    {location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white lg:text-3xl">
            Have a project in mind?
          </h2>
          <p className="font-body mt-3 text-sm font-light text-white/80">
            Contact us for a consultation and project estimate.
          </p>
          <Link
            href="/contact"
            className="font-body mt-6 inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold tracking-widest uppercase text-brand-700 transition-colors hover:bg-brand-50"
          >
            Get In Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
