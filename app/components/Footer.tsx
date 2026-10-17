import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { STAGES } from "../services/stages";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects (reference)" },
  { href: "/about", label: "About & Contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-4 pt-8">
      <div className="panel mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block" aria-label="One Step — home">
              <Image
                src="/logo-stacked.png"
                alt="One Step — Landed Property Consultants"
                width={642}
                height={667}
                className="h-auto w-52 rounded-2xl"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
              Singapore consultants specialising in private landed property.
              Independent advice for buying, rebuilding and renovating landed homes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow">Services</h3>
            <ul className="mt-4 space-y-3">
              {STAGES.map(({ href, step, title }) => (
                <li key={href}>
                  <Link href={href} className="flex gap-2 text-sm text-body transition-colors hover:text-ink">
                    <span className="font-heading text-xs font-bold leading-5 text-faint">{step}</span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
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
