import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "../site";

/** Phone, WhatsApp and email as tappable rows — used on the Contact page and in the footer. */
export function ContactLinks({ compact = false }: { compact?: boolean }) {
  const rows = [
    { icon: MessageCircle, label: "WhatsApp", value: "Message us", href: CONTACT.whatsappHref, external: true },
    { icon: Phone, label: "Call", value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT.email && `mailto:${CONTACT.email}` },
  ].filter((r) => r.href);
  if (!rows.length) return null;

  return (
    <ul className={compact ? "space-y-1" : "space-y-3"}>
      {rows.map(({ icon: Icon, label, value, href, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`group flex items-center gap-3 rounded-xl transition-colors ${
              compact ? "py-2 text-sm text-body hover:text-ink" : "bg-white/85 p-3 hover:bg-white"
            }`}
          >
            {compact ? (
              <Icon size={16} className="shrink-0 text-teal" />
            ) : (
              <span className="avatar h-10 w-10 shrink-0">
                <Icon size={17} />
              </span>
            )}
            {compact ? (
              value
            ) : (
              <span>
                <span className="eyebrow block">{label}</span>
                <span className="text-sm font-semibold text-ink">{value}</span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
