import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { CONTACT, SERVICES } from "../site";
import { ContactLinks } from "./ContactLinks";
import { FacebookIcon, InstagramIcon, PinterestIcon } from "./SocialIcons";

const exploreLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/plot-check", label: "Plot Check" },
  { href: "/faq", label: "Guides & FAQ" },
  { href: "/projects", label: "Example Projects" },
  { href: "/about", label: "About Us" },
];

const socials = [
  { href: CONTACT.social.facebook, label: "Facebook", icon: FacebookIcon },
  { href: CONTACT.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: CONTACT.social.pinterest, label: "Pinterest", icon: PinterestIcon },
].filter((s) => s.href);

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
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {socials.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="avatar h-10 w-10 transition-colors hover:text-ink"
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow">Services</h3>
            <ul className="mt-2 lg:mt-4 lg:space-y-3">
              {SERVICES.map(({ href, title }) => (
                <li key={href}>
                  <Link href={href} className="block py-2 text-sm text-body transition-colors hover:text-ink lg:inline lg:py-0">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-2 lg:mt-4 lg:space-y-3">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2 text-sm text-body transition-colors hover:text-ink lg:inline lg:py-0"
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
            <div className="mt-2 lg:mt-3">
              <ContactLinks compact />
            </div>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed text-body">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                {CONTACT.address}
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-teal" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} One Step Group Construction Pte Ltd. All
            rights reserved.
          </p>
          <Link href="/privacy" className="py-3 text-xs text-muted transition-colors hover:text-ink sm:py-0">
            Privacy notice (PDPA)
          </Link>
        </div>
      </div>
    </footer>
  );
}
