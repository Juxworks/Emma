"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Ruler, Wallet } from "lucide-react";
import { GST, SECTIONS, TENDER_GFA_SQFT, TENDER_TOTAL } from "./tenderData";

// Cost per sq ft of gross floor area, from the benchmarked example tender (excl. GST).
const RATE = TENDER_TOTAL / TENDER_GFA_SQFT;
// Indicative spread either side of the benchmark rate.
const SPREAD = 0.1;

const SIZE = { min: 1_500, max: 12_000, step: 100 };
const BUDGET = { min: 0.5e6, max: 6e6, step: 50_000 };

// Rough guide marks along the size scale.
const MARKS = [
  { at: 3_000, label: "Terrace" },
  { at: 5_000, label: "Semi-D" },
  { at: 8_000, label: "Detached" },
];

const money = (n: number) =>
  n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${Math.round(n / 1000).toLocaleString("en-SG")}k`;
const sqft = (n: number) => `${Math.round(n).toLocaleString("en-SG")} sq ft`;
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

type Mode = "size" | "budget";

/** One slider, two ways in: set the build size to see the cost, or set a budget to see the size it buys. */
export default function CostSlider() {
  const [mode, setMode] = useState<Mode>("size");
  const [size, setSize] = useState(TENDER_GFA_SQFT);

  const tender = size * RATE;
  const total = tender * (1 + GST);
  const scale = mode === "size" ? SIZE : BUDGET;
  const value = mode === "size" ? size : total;
  const fill = ((value - scale.min) / (scale.max - scale.min)) * 100;

  const onSlide = (v: number) => setSize(mode === "size" ? v : clamp(v / (1 + GST) / RATE, 100, 50_000));

  return (
    <div className="glass p-5 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="avatar h-11 w-11 shrink-0">
            <Calculator size={20} />
          </span>
          <div>
            <h3 className="font-heading text-lg font-semibold text-ink">Build cost calculator</h3>
            <p className="text-sm text-muted">Slide to set {mode === "size" ? "the size of your home" : "your budget"}</p>
          </div>
        </div>

        <div role="tablist" aria-label="Calculate from" className="grid grid-cols-2 gap-1 rounded-full bg-frost p-1">
          {(
            [
              ["size", "Build size", Ruler],
              ["budget", "Budget", Wallet],
            ] as const
          ).map(([m, label, Icon]) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                mode === m ? "bg-white text-ink shadow-sm" : "text-muted hover:text-ink"
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Both readouts; the one being slid is emphasised */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {(
          [
            ["size", "Build size (GFA)", sqft(size)],
            ["budget", "Total build cost", money(total)],
          ] as const
        ).map(([m, label, v]) => (
          <div
            key={m}
            className={`rounded-2xl p-4 transition-colors sm:p-5 ${mode === m ? "bg-ink text-white" : "bg-white/85 text-ink"}`}
          >
            <p className={`text-xs font-semibold uppercase tracking-wider ${mode === m ? "text-white/70" : "text-muted"}`}>{label}</p>
            <p className="font-heading mt-1 text-2xl font-bold tabular-nums sm:text-4xl" aria-live="polite">
              {v}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <label htmlFor="cost-slider" className="sr-only">
          {mode === "size" ? "Build size in square feet" : "Total budget in dollars"}
        </label>
        <input
          id="cost-slider"
          type="range"
          min={scale.min}
          max={scale.max}
          step={scale.step}
          value={clamp(value, scale.min, scale.max)}
          onChange={(e) => onSlide(Number(e.target.value))}
          aria-valuetext={mode === "size" ? sqft(size) : money(total)}
          className="range w-full"
          style={{ "--fill": `${clamp(fill, 0, 100)}%` } as React.CSSProperties}
        />
        <div className="relative mt-2 h-5 text-xs text-muted">
          <span className="absolute left-0">{mode === "size" ? sqft(SIZE.min) : money(BUDGET.min)}</span>
          {mode === "size" &&
            MARKS.map(({ at, label }) => (
              <span
                key={label}
                className="absolute hidden -translate-x-1/2 sm:block"
                style={{ left: `${((at - SIZE.min) / (SIZE.max - SIZE.min)) * 100}%` }}
              >
                {label}
              </span>
            ))}
          <span className="absolute right-0">{mode === "size" ? sqft(SIZE.max) : money(BUDGET.max)}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_18rem]">
        <ul className="space-y-3">
          {SECTIONS.map(({ name, amount }) => {
            const part = (amount / TENDER_TOTAL) * tender;
            return (
              <li key={name}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-ink-soft">{name}</span>
                  <span className="shrink-0 font-semibold tabular-nums text-ink">{money(part)}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-black/5">
                  <div className="h-2 rounded-full bg-teal" style={{ width: `${(amount / TENDER_TOTAL) * 100}%` }} />
                </div>
              </li>
            );
          })}
        </ul>

        <dl className="space-y-2 rounded-2xl bg-white/85 p-5 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-body">Tender sum</dt>
            <dd className="font-semibold tabular-nums text-ink">{money(tender)}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-body">GST ({GST * 100}%)</dt>
            <dd className="font-semibold tabular-nums text-ink">{money(tender * GST)}</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-black/5 pt-2">
            <dt className="font-semibold text-ink">Total</dt>
            <dd className="font-bold tabular-nums text-ink">{money(total)}</dd>
          </div>
          <div className="flex justify-between gap-3 pt-2 text-xs text-muted">
            <dt>Likely range</dt>
            <dd className="tabular-nums">
              {money(total * (1 - SPREAD))} – {money(total * (1 + SPREAD))}
            </dd>
          </div>
          <div className="flex justify-between gap-3 text-xs text-muted">
            <dt>Rate</dt>
            <dd className="tabular-nums">${Math.round(RATE)} psf excl. GST</dd>
          </div>
        </dl>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        Indicative only — scaled from the benchmarked example tender below, at its cost per square foot. Basements,
        piling, conservation work and finishes can move the price a lot, and consultant fees and authority charges are
        extra.
      </p>
      <Link href="/contact?service=tender-review" className="btn btn-primary mt-5 w-full sm:w-auto">
        Get a real estimate for your plot <ArrowRight size={16} />
      </Link>
    </div>
  );
}
