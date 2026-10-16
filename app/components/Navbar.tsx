"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/developments", label: "Developments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`glass mx-auto max-w-7xl rounded-2xl! transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-one-step.png"
              alt=""
              width={1024}
              height={572}
              className="h-10 w-auto rounded-md"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold tracking-[0.15em] text-ink">
                ONE STEP
              </span>
              <span className="mt-1 text-[10px] font-medium tracking-[0.08em] uppercase text-muted">
                Group Construction
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-frost text-ink"
                      : "text-body hover:bg-frost-light hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact" className="btn btn-primary hidden py-2.5! md:inline-flex">
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-frost md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="flex flex-col gap-1 border-t border-black/5 px-3 pb-4 pt-3 md:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-frost text-ink"
                    : "text-body hover:bg-frost-light hover:text-ink"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary mt-2"
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
