"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
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
        <div className="flex h-16 w-16 items-center justify-center bg-brand-50">
          <Mail size={32} className="text-brand-600" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-brand-950">
          Message Sent
        </h3>
        <p className="font-body max-w-sm text-sm text-brand-900/60">
          Thank you for reaching out. We&apos;ll be in touch within one
          business day.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
          }}
          className="font-body mt-2 cursor-pointer text-sm font-semibold tracking-widest uppercase text-brand-600 transition-colors hover:text-brand-800"
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
            className="font-body text-xs font-semibold tracking-widest uppercase text-brand-900"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="font-body border border-brand-200 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 transition-colors focus:border-brand-600 focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-body text-xs font-semibold tracking-widest uppercase text-brand-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="font-body border border-brand-200 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 transition-colors focus:border-brand-600 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="font-body text-xs font-semibold tracking-widest uppercase text-brand-900"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="font-body border border-brand-200 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 transition-colors focus:border-brand-600 focus:outline-none"
            placeholder="+65 XXXX XXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="projectType"
            className="font-body text-xs font-semibold tracking-widest uppercase text-brand-900"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
            className="font-body border border-brand-200 bg-white px-4 py-3 text-sm text-brand-900 transition-colors focus:border-brand-600 focus:outline-none"
          >
            <option value="">Select a type</option>
            <option value="new-construction">New Construction</option>
            <option value="renovation">Renovation</option>
            <option value="aa-works">A&amp;A Works</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-body text-xs font-semibold tracking-widest uppercase text-brand-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="font-body resize-none border border-brand-200 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-300 transition-colors focus:border-brand-600 focus:outline-none"
          placeholder="Tell us about your project — location, size, scope, timeline..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-body cursor-pointer self-start bg-brand-600 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
