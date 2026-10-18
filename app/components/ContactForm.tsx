"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { SERVICES } from "../site";

export default function ContactForm({ service = "" }: { service?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: SERVICES.some((s) => s.slug === service) ? service : "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your backend / form service endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <span className="avatar h-14 w-14">
          <Mail size={24} />
        </span>
        <h3 className="font-heading text-2xl font-semibold text-ink">
          Message Sent
        </h3>
        <p className="max-w-sm text-sm text-body">
          Thank you for reaching out. We&apos;ll be in touch within one
          business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
          }}
          className="btn btn-secondary mt-2"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="eyebrow text-control!"
          >
            Full Name <span className="text-amber-ink">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="field"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="eyebrow text-control!"
          >
            Email <span className="text-amber-ink">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="field"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="eyebrow text-control!"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="field"
            placeholder="+65 XXXX XXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="projectType"
            className="eyebrow text-control!"
          >
            I&apos;m Interested In
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
            className="field"
          >
            <option value="">Select a service</option>
            {SERVICES.map(({ slug, title }) => (
              <option key={slug} value={slug}>
                {title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="eyebrow text-control!"
        >
          Message <span className="text-amber-ink">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="field resize-none"
          placeholder="Tell us about your plans — location, property type, budget, timeline..."
        />
      </div>

      <p className="text-xs leading-relaxed text-muted">
        We use your details only to reply to your enquiry. See our{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          privacy notice
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary self-start disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
