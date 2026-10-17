import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  children,
  illustration,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  illustration?: React.ReactNode;
}) {
  return (
    <section className="px-4 pt-32 pb-10 lg:pt-40 lg:pb-14">
      <div
        className={`mx-auto max-w-7xl lg:px-4 ${
          illustration ? "grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,26rem)]" : ""
        }`}
      >
        <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-heading mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-xl text-base leading-relaxed text-body lg:text-lg">
            {children}
          </div>
        )}
        </div>
        {illustration && <div className="mx-auto w-full max-w-sm lg:max-w-none">{illustration}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-ink lg:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function CtaCard({
  title,
  text,
  href = "/about#contact",
  label = "Get in Touch",
  illustration,
}: {
  title: string;
  text: string;
  href?: string;
  label?: string;
  illustration?: React.ReactNode;
}) {
  return (
    <section className="px-4 py-12 lg:py-16">
      <div className="glass mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12 lg:py-12">
        <div className="flex items-center gap-6">
          {illustration && <div className="hidden w-36 shrink-0 sm:block lg:w-44">{illustration}</div>}
          <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-ink lg:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-body lg:text-base">{text}</p>
          </div>
        </div>
        <Link href={href} className="btn btn-primary shrink-0">
          {label} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
