import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Wrench, CheckCircle, Phone, Mail } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Landed Properties" },
  { value: "5★", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description:
      "Full design-to-build construction for detached houses, semi-detached homes, and bungalows on private landed plots across Singapore.",
  },
  {
    icon: Wrench,
    title: "Renovation & A&A",
    description:
      "Additions & Alterations, interior renovation, and structural improvements that breathe new life into your existing landed home.",
  },
];

const features = [
  "Specialist in private landed properties",
  "BCA-registered contractor",
  "End-to-end project management",
  "Transparent pricing and timeline",
  "Quality materials and craftsmanship",
  "Post-completion support",
];

const projects = [
  {
    name: "Trevose Crescent",
    type: "New Construction",
    image: "/projects/trevose.jpg",
  },
  {
    name: "King's Close",
    type: "New Construction",
    image: "/projects/kings-close.jpg",
  },
  {
    name: "Buckley Road",
    type: "Construction",
    image: "/projects/buckley-road.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-950">
        <Image
          src="/projects/hero.jpg"
          alt="Emma Group Construction — Singapore landed property"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="Emma Group Construction"
              width={80}
              height={80}
              className="object-contain opacity-90"
              style={{ imageRendering: "auto" }}
              priority
            />
          </div>
          <p className="font-body text-xs font-light tracking-[0.4em] uppercase text-brand-300">
            Singapore Landed Property Specialists
          </p>

          <h1
            className="font-heading mt-6 leading-none tracking-tight text-white"
            style={{ fontSize: "clamp(4rem, 14vw, 11rem)", fontWeight: 700 }}
          >
            EMMA
          </h1>

          <div className="mx-auto mt-2 h-px w-24 bg-brand-500" />

          <p className="font-body mx-auto mt-8 max-w-xl text-base font-light leading-relaxed tracking-wide text-brand-200/80 md:text-lg">
            Building your dream home is one of life&apos;s greatest milestones.
            We bring the craftsmanship, expertise, and dedication to make your
            vision a reality you&apos;ll treasure for generations.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/projects"
              className="font-body inline-flex items-center gap-2 bg-brand-600 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-brand-700"
            >
              View Our Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="font-body inline-flex items-center gap-2 border border-white/40 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Get A Quote
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-brand-400">
            Scroll
          </span>
          <div className="h-8 w-px bg-brand-600" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-brand-600">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-brand-700 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center px-6 py-10 text-center"
            >
              <span className="font-heading text-3xl font-bold text-white md:text-4xl">
                {value}
              </span>
              <span className="font-body mt-1 text-xs font-light tracking-wider uppercase text-brand-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">
              What We Do
            </p>
            <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-950 lg:text-5xl">
              Our Services
            </h2>
            <div className="mt-4 h-1 w-12 bg-brand-500" />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group border border-brand-100 p-10 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-brand-50">
                  <Icon size={28} className="text-brand-600" />
                </div>
                <h3 className="font-heading mt-6 text-xl font-semibold tracking-wide text-brand-950">
                  {title}
                </h3>
                <p className="font-body mt-3 leading-relaxed text-brand-900/60">
                  {description}
                </p>
                <Link
                  href="/contact"
                  className="font-body mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-600 transition-colors hover:text-brand-800"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Emma ── */}
      <section className="bg-brand-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">
                Why Choose Us
              </p>
              <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-brand-950 lg:text-5xl">
                Built on Trust &amp; Expertise
              </h2>
              <div className="mt-4 h-1 w-12 bg-brand-500" />
              <p className="font-body mt-6 leading-relaxed text-brand-900/60">
                With over 15 years of experience exclusively in Singapore&apos;s
                private landed property sector, Emma Group Construction brings
                specialist knowledge, reliable workmanship, and a commitment to
                delivering your vision on time and within budget.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  <span className="font-body text-sm leading-snug text-brand-900/80">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="bg-brand-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-brand-400">
                Portfolio
              </p>
              <h2 className="font-heading mt-3 text-4xl font-bold tracking-tight text-white lg:text-5xl">
                Featured Projects
              </h2>
              <div className="mt-4 h-1 w-12 bg-brand-500" />
            </div>
            <Link
              href="/projects"
              className="font-body inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-brand-300 transition-colors hover:text-white"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map(({ name, type, image }) => (
              <Link key={name} href="/projects" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-900">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-950/20 transition-colors duration-300 group-hover:bg-brand-950/40" />
                </div>
                <div className="mt-4">
                  <h3 className="font-heading text-base font-semibold tracking-wide text-white">
                    {name}
                  </h3>
                  <p className="font-body mt-1 text-xs tracking-wider uppercase text-brand-400">
                    {type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-brand-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Ready to Build Your Dream Home?
          </h2>
          <p className="font-body mt-4 text-base font-light text-white/80">
            Talk to our team about your project. We&apos;ll walk you through
            the process from design to completion.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+6564637738"
              className="font-body inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-white/10"
            >
              <Phone size={16} />
              6463 7738
            </a>
            <a
              href="mailto:Project@emmagroups.com"
              className="font-body inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold tracking-widest uppercase text-brand-700 transition-colors hover:bg-brand-50"
            >
              <Mail size={16} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
