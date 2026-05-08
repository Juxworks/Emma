"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 shadow-sm backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={`font-heading text-xl font-semibold tracking-[0.2em] transition-colors duration-300 ${
              transparent ? "text-white" : "text-brand-900"
            }`}
          >
            EMMA
          </span>
          <span
            className={`font-body text-[10px] font-light tracking-[0.25em] uppercase transition-colors duration-300 ${
              transparent ? "text-brand-200" : "text-brand-600"
            }`}
          >
            Group Construction
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-body text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                transparent
                  ? "text-white/80 hover:text-white"
                  : "text-brand-900/70 hover:text-brand-900"
              } ${pathname === href ? (transparent ? "text-white" : "text-brand-600") : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`font-body text-sm font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
              transparent
                ? "border border-white/60 text-white hover:bg-white hover:text-brand-900"
                : "bg-brand-600 text-white hover:bg-brand-700"
            }`}
          >
            Get A Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className={`flex md:hidden cursor-pointer p-1 transition-colors ${
            transparent ? "text-white" : "text-brand-900"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-100 bg-white px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-sm font-medium tracking-widest uppercase py-2 transition-colors ${
                  pathname === href
                    ? "text-brand-600"
                    : "text-brand-900/70 hover:text-brand-900"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-brand-600 px-5 py-3 text-center font-body text-sm font-semibold tracking-widest uppercase text-white hover:bg-brand-700 transition-colors"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
