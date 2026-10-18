"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { STAGES } from "../how-it-works/stages";
import { BOOK_HREF, BOOK_LABEL, CONTACT, SERVICES } from "../site";

type NavChild = { href: string; label: string; step?: string };
type NavGroup = { title: string; children: NavChild[] };
type NavLink = { href: string; label: string; groups?: NavGroup[]; allLabel?: string; also?: string[] };

// Navigation follows what a visitor wants to do; the logo goes home.
// Services holds both views of the offer: by goal, and stage by stage.
const links: NavLink[] = [
  {
    href: "/services",
    label: "Services",
    also: ["/how-it-works"],
    groups: [
      { title: "What are you planning?", children: SERVICES.map(({ href, title }) => ({ href, label: title })) },
      { title: "How it works · 5 stages", children: STAGES.map(({ href, title, step }) => ({ href, label: title, step })) },
    ],
    allLabel: "All services & stages",
  },
  { href: "/plot-check", label: "Plot Check" },
  { href: "/faq", label: "Guides & FAQ" },
  { href: "/about", label: "About" },
];

const under = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);
const isActive = (pathname: string, { href, also = [] }: NavLink) => [href, ...also].some((h) => under(pathname, h));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    setMobileOpen(false);
    setExpanded(null);
  };

  const mobileItem = (on: boolean) =>
    `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
      on ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div
          className={`glass mx-auto max-w-7xl rounded-2xl! transition-shadow duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 lg:px-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="One Step — home">
              <Image src="/logo-mark.png" alt="" width={243} height={351} className="h-10 w-auto" priority />
              <span className="font-heading text-xl font-semibold tracking-tight text-ink">One Step</span>
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {links.map((link) => {
                const { href, label, groups, allLabel } = link;
                const active = isActive(pathname, link);
                const cls = `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-frost text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                }`;
                if (!groups)
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
                      <div className="glass w-[40rem] rounded-2xl! bg-white! p-2">
                        <div className="grid grid-cols-2 gap-2">
                          {groups.map((g) => (
                            <div key={g.title}>
                              <p className="eyebrow px-3 pb-1 pt-2">{g.title}</p>
                              <ul>
                                {g.children.map((c) => (
                                  <li key={c.href}>
                                    <Link
                                      href={c.href}
                                      aria-current={pathname === c.href ? "page" : undefined}
                                      className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                                        pathname === c.href ? "bg-frost font-semibold text-ink" : "text-body hover:bg-frost-light hover:text-ink"
                                      }`}
                                    >
                                      {c.step && <span className="font-heading text-xs font-bold tabular-nums text-faint">{c.step}</span>}
                                      {c.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={href}
                          className="mt-1 flex items-center border-t border-black/5 px-3 pb-2 pt-3 text-sm font-semibold text-teal transition-colors hover:text-ink"
                        >
                          {allLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              {CONTACT.whatsappHref && (
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-teal transition-colors hover:bg-frost hover:text-ink"
                >
                  <MessageCircle size={20} />
                </a>
              )}
              <Link href={BOOK_HREF} className="btn btn-primary py-2.5!">
                {BOOK_LABEL}
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => (mobileOpen ? close() : setMobileOpen(true))}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-frost lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu: sections start collapsed so every top-level item is visible */}
          {mobileOpen && (
            <nav className="flex max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto border-t border-black/5 px-3 pb-4 pt-3 lg:hidden">
              {links.map((link) => {
                const { href, label, groups, allLabel } = link;
                return groups ? (
                  <div key={href}>
                    <button
                      onClick={() => setExpanded((e) => (e === href ? null : href))}
                      aria-expanded={expanded === href}
                      className={`flex w-full cursor-pointer items-center justify-between ${mobileItem(isActive(pathname, link))}`}
                    >
                      {label}
                      <ChevronDown size={16} className={`transition-transform ${expanded === href ? "rotate-180" : ""}`} />
                    </button>
                    {expanded === href && (
                      <div className="flex flex-col gap-1 py-1">
                        {groups.map((g) => (
                          <div key={g.title} className="flex flex-col gap-1">
                            <p className="eyebrow px-7 pt-2">{g.title}</p>
                            {g.children.map((c) => (
                              <Link key={c.href} href={c.href} onClick={close} className={`${mobileItem(pathname === c.href)} pl-7!`}>
                                {c.step && <span className="mr-2 font-heading text-xs font-bold text-faint">{c.step}</span>}
                                {c.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link href={href} onClick={close} className={`${mobileItem(pathname === href)} pl-7! font-semibold! text-teal!`}>
                          {allLabel}
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={href} href={href} onClick={close} className={mobileItem(isActive(pathname, link))}>
                    {label}
                  </Link>
                );
              })}
              <Link href="/contact" onClick={close} className={mobileItem(pathname === "/contact")}>
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <div className={`glass mx-auto grid max-w-md gap-2 rounded-2xl! p-2 shadow-lg ${CONTACT.whatsappHref ? "grid-cols-2" : ""}`}>
          {CONTACT.whatsappHref && (
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary py-2.5! text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          )}
          <Link href={BOOK_HREF} onClick={close} className="btn btn-primary py-2.5! text-sm">
            {CONTACT.whatsappHref ? "Book a Free Call" : BOOK_LABEL}
          </Link>
        </div>
      </div>
    </>
  );
}
