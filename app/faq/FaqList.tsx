import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Faq } from "./faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a, link }) => (
        <details key={q} className="glass group rounded-2xl! [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-ink">
            {q}
            <ChevronDown size={18} className="shrink-0 text-muted transition-transform group-open:rotate-180" />
          </summary>
          <p className="-mt-2 px-5 pb-5 text-sm leading-relaxed text-body">
            {a}
            {link && (
              <>
                {" "}
                <Link href={link.href} className="font-semibold text-teal hover:text-ink">
                  {link.label}
                </Link>
              </>
            )}
          </p>
        </details>
      ))}
    </div>
  );
}
