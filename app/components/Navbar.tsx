"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/developments", label: "Developments" },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/projects", label: "Project Build" },
      { href: "/projects/completed", label: "Completed Projects" },
    ],
  },
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
                    <ul className="glass w-56 rounded-2xl! p-2">
                      {children.map((c, i) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={pathname === c.href ? "page" : undefined}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                              pathname === c.href ? "bg-frost font-semibold text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                            }`}
                          >
                            <span className="text-xs tabular-nums text-muted">{i + 1}.</span>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <Link href="/about#contact" className="btn btn-primary hidden py-2.5! md:inline-flex">
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
            {links.flatMap(({ href, label, children }) =>
              children
                ? [
                    <p key={`${label}-heading`} className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      {label}
                    </p>,
                    ...children.map((c, i) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        className={`rounded-xl py-3 pr-4 pl-7 text-sm font-medium transition-colors ${
                          pathname === c.href ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                        }`}
                      >
                        <span className="mr-1.5 text-xs text-muted">{i + 1}.</span>
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
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
