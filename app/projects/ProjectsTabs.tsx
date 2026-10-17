import Link from "next/link";

export const PROJECT_PAGES = [
  { href: "/projects", label: "Project Build", key: "build" },
  { href: "/projects/completed", label: "Completed Projects", key: "completed" },
] as const;

export default function ProjectsTabs({ active }: { active: (typeof PROJECT_PAGES)[number]["key"] }) {
  return (
    <div className="px-4 pb-6">
      <nav aria-label="Projects" className="mx-auto max-w-7xl lg:px-4">
        <div className="panel inline-flex gap-1 rounded-full! p-1">
          {PROJECT_PAGES.map(({ href, label, key }, i) => (
            <Link
              key={key}
              href={href}
              aria-current={active === key ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === key ? "bg-white text-ink shadow-sm" : "text-body hover:text-ink"
              }`}
            >
              <span className="mr-1.5 text-xs text-muted tabular-nums">{i + 1}.</span>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
