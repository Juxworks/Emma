import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-2xl font-semibold tracking-[0.2em] text-white">
                EMMA
              </span>
              <span className="font-body text-xs font-light tracking-[0.25em] uppercase text-brand-300">
                Group Construction
              </span>
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-brand-300/80">
              Singapore contractors specialising in private landed properties.
              Turning your designs into reality with quality craftsmanship.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/EmmaGroups/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center border border-brand-800 text-brand-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.instagram.com/emmagroups/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center border border-brand-800 text-brand-400 transition-colors hover:border-brand-500 hover:text-white"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-brand-300/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <span className="font-body text-sm leading-relaxed text-brand-300/70">
                  805 Bukit Timah Road, #01-01 Sixth Avenue Centre, Singapore
                  279883
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href="tel:+6564637738"
                  className="font-body text-sm text-brand-300/70 transition-colors hover:text-white"
                >
                  6463 7738
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-500" />
                <a
                  href="mailto:Project@emmagroups.com"
                  className="font-body text-sm text-brand-300/70 transition-colors hover:text-white"
                >
                  Project@emmagroups.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-900 pt-8">
          <p className="font-body text-xs tracking-wider text-brand-300/50">
            © {new Date().getFullYear()} Emma Group Construction Pte Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
