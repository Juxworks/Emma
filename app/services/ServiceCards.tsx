import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../site";

/** The four services as cards — used on the home page and the Services overview. */
export function ServiceCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {SERVICES.map(({ slug, href, icon: Icon, title, summary }, i) => (
        <li key={slug}>
          <Link
            href={href}
            className={`group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5 lg:p-8 ${
              i === 0 ? "bg-ink text-white" : "glass"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`avatar h-12 w-12 ${i === 0 ? "bg-white/15! text-white!" : ""}`}>
                <Icon size={22} />
              </span>
              {i === 0 && <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Most clients</span>}
            </div>
            <h3 className={`font-heading mt-5 text-xl font-semibold ${i === 0 ? "text-white" : "text-ink"}`}>{title}</h3>
            <p className={`mt-2 flex-1 leading-relaxed ${i === 0 ? "text-white/80" : "text-body"}`}>{summary}</p>
            <span
              className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                i === 0 ? "text-white" : "text-teal group-hover:text-ink"
              }`}
            >
              See what&apos;s included <ArrowRight size={14} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
