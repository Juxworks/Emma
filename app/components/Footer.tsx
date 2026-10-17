import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/developments", label: "Developments" },
  { href: "/projects", label: "Project Build" },
  { href: "/projects/completed", label: "Completed Projects" },
  { href: "/about", label: "About & Contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-4 pt-8">
      <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none">
              <Image
                src="/logo-one-step.png"
                alt=""
                width={1024}
                height={572}
                className="mb-4 h-auto w-56 rounded-xl"
              />
              <span className="font-heading text-xl font-bold tracking-[0.15em] text-ink">
                ONE STEP
              </span>
              <span className="mt-1 text-[11px] font-medium tracking-[0.08em] uppercase text-muted">
                Group Construction
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
              Singapore contractors specialising in private landed properties.
              Turning your designs into reality with quality craftsmanship.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="eyebrow">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-body transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                <span className="text-sm leading-relaxed text-body">
                  9 3/4 Koon Seng Road, Singapore
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-black/5 pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} One Step Group Construction Pte Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
