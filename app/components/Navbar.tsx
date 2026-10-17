"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { STAGES } from "../services/stages";

type NavLink = { href: string; label: string; children?: { href: string; label: string; step: string }[] };

// Navigation follows the five service stages; completed projects are reference only.
const links: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: STAGES.map(({ href, title, step }) => ({ href, label: title, step })),
  },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

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
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo-mark.png"
              alt=""
              width={243}
              height={351}
              className="h-10 w-auto"
              priority
            />
            <span className="font-heading text-xl font-semibold tracking-tight text-ink">
              One Step
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label, children }) => {
              const active = isActive(pathname, href);
              const cls = `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
              }`;
              if (!children)
                return (
                  <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={cls}>
                    {label}
                  </Link>
                );
              return (
                <div key={href} className="group relative">
                  <Link href={href} aria-haspopup="true" className={cls}>
                    {label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  {/* Dropdown: opens on hover or keyboard focus */}
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="glass w-80 rounded-2xl! bg-white! p-2">
                      {children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={pathname === c.href ? "page" : undefined}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                              pathname === c.href ? "bg-frost font-semibold text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                            }`}
                          >
                            <span className="font-heading text-xs font-bold tabular-nums text-faint">{c.step}</span>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-1 border-t border-black/5 pt-1">
                        <Link
                          href={href}
                          className="flex items-center rounded-xl px-3 py-2.5 text-sm font-semibold text-teal transition-colors hover:bg-frost-light hover:text-ink"
                        >
                          All five stages
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <Link href="/about#contact" className="btn btn-primary hidden py-2.5! md:inline-flex">
            Book a Consultation
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
            {links.flatMap(({ href, label, children }) =>
              children
                ? [
                    <Link
                      key={`${label}-heading`}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === href ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                      }`}
                    >
                      {label}
                    </Link>,
                    ...children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className={`rounded-xl py-3 pr-4 pl-7 text-sm font-medium transition-colors ${
                          pathname === c.href ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                        }`}
                      >
                        <span className="mr-2 font-heading text-xs font-bold text-faint">{c.step}</span>
                        {c.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        pathname === href ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                      }`}
                    >
                      {label}
                    </Link>,
                  ],
            )}
            <Link
              href="/about#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary mt-2"
            >
              Book a Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
