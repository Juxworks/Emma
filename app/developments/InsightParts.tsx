import type { LucideIcon } from "lucide-react";

export function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-black/5 bg-white/70 p-5">
      <div className="flex items-center gap-3">
        <span className="avatar h-9 w-9">
          <Icon size={17} />
        </span>
        <h4 className="font-heading text-base font-semibold text-ink">{title}</h4>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-body">{children}</div>
    </section>
  );
}

export function Point({
  icon: Icon,
  tone = "teal",
  children,
}: {
  icon: LucideIcon;
  tone?: "teal" | "amber" | "muted";
  children: React.ReactNode;
}) {
  const color = { teal: "text-teal", amber: "text-amber-ink", muted: "text-muted" }[tone];
  return (
    <p className="flex gap-2.5">
      <Icon size={16} className={`mt-0.5 shrink-0 ${color}`} />
      <span>{children}</span>
    </p>
  );
}
