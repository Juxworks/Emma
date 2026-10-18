"use client";

import { useState } from "react";
import { BookOpen, CalendarDays, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { PLAN, PLAN_WEEKS, type PlanPhase } from "./planData";

const TOTAL_TASKS = PLAN.reduce((n, p) => n + p.tasks.length, 0);
const MONTHS = Math.ceil(PLAN_WEEKS / 4.345);
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthOf = (week: number) => Math.floor((week - 1) / 4.345) + 1;
const weeksLabel = (a: number, b: number) => (a === b ? `Week ${a}` : `Weeks ${a}–${b}`);
const durationLabel = (a: number, b: number) => {
  const w = b - a + 1;
  return w < 9 ? `${w} week${w === 1 ? "" : "s"}` : `about ${Math.round(w / 4.345)} months`;
};

// Week 1 starts on the chosen site-possession date.
function dateOf(start: string, week: number, endOfWeek = false) {
  const [y, m, d] = start.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + (week - 1) * 7 + (endOfWeek ? 6 : 0)));
  return `${t.getUTCDate()} ${MONTH_NAMES[t.getUTCMonth()]} ${t.getUTCFullYear()}`;
}
const rangeLabel = (start: string, a: number, b: number) =>
  start ? `${dateOf(start, a)} – ${dateOf(start, b, true)}` : weeksLabel(a, b);

function Page({ side, number, children }: { side: "left" | "right"; number?: number; children: React.ReactNode }) {
  return (
    <div
      className={`book-paper relative flex min-h-[34rem] flex-col px-6 pt-8 pb-12 sm:px-10 ${
        side === "left" ? "lg:rounded-l-[0.9rem] book-left" : "lg:rounded-r-[0.9rem] book-right"
      }`}
    >
      <div className="flex-1">{children}</div>
      <div className="absolute inset-x-6 bottom-4 flex items-center justify-between font-book text-[11px] italic text-muted sm:inset-x-10">
        <span>{side === "left" ? "For reference only" : "Typical landed-home rebuild"}</span>
        {number !== undefined && <span className="not-italic tabular-nums">{number}</span>}
      </div>
    </div>
  );
}

function Timeline({ highlight, onPick }: { highlight?: number; onPick?: (i: number) => void }) {
  return (
    <div>
      <div className="relative ml-[38%] h-4 text-[10px] text-muted">
        {Array.from({ length: MONTHS }, (_, i) => (
          <span key={i} className="absolute -translate-x-1/2 tabular-nums" style={{ left: `${((i * 4.345) / PLAN_WEEKS) * 100}%` }}>
            {i % 2 === 0 ? `M${i + 1}` : ""}
          </span>
        ))}
      </div>
      <ul className="space-y-1">
        {PLAN.map((p, i) => {
          const on = highlight === undefined || highlight === i;
          return (
            <li key={p.name} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onPick?.(i)}
                className={`w-[38%] shrink-0 truncate text-left text-[11px] ${onPick ? "py-1.5 sm:py-0" : ""} ${
                  highlight === i ? "font-semibold text-ink" : "text-body"
                } ${onPick ? "hover:text-teal" : "cursor-default"}`}
              >
                {p.name}
              </button>
              <span className="relative h-2 flex-1 rounded-full bg-black/[0.04]">
                <span
                  className={`absolute inset-y-0 rounded-full ${on ? "bg-teal" : "bg-teal/20"}`}
                  style={{
                    left: `${((p.start - 1) / PLAN_WEEKS) * 100}%`,
                    width: `${Math.max(((p.end - p.start + 1) / PLAN_WEEKS) * 100, 1.2)}%`,
                  }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TaskList({ phase, start }: { phase: PlanPhase; start: string }) {
  const span = phase.end - phase.start + 1;
  return (
    <ol className="divide-y divide-black/[0.06]">
      {phase.tasks.map((t) => (
        <li key={t.name} className="py-2.5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm text-ink">{t.name}</span>
            <span className="shrink-0 text-right text-[11px] tabular-nums text-muted">{rangeLabel(start, t.start, t.end)}</span>
          </div>
          <div className="relative mt-1.5 h-1.5 rounded-full bg-black/[0.05]">
            <span
              className="absolute inset-y-0 rounded-full bg-teal"
              style={{
                left: `${((t.start - phase.start) / span) * 100}%`,
                width: `${Math.max(((t.end - t.start + 1) / span) * 100, 3)}%`,
              }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}

// Broad periods of the build, each spanning the stages it groups.
const PERIODS = [
  { label: "Prepare & demolish", stages: ["Site Preparation & Mobilisation", "Demolition"] },
  { label: "Foundations", stages: ["Piling", "Excavation", "Sub-structure"] },
  { label: "Structure & roof", stages: ["Super-structure", "Roof"] },
  {
    label: "Finishes & fit-out",
    stages: ["Walls & Partitions", "Doors & Windows", "Wall Finishes", "Ceilings", "Floor Finishes", "Staircase", "Cabinetry & Joinery", "External Works"],
  },
  { label: "Building services", stages: ["Plumbing & Sanitary", "Electrical", "Air-conditioning & Ventilation"] },
  { label: "Inspections & handover", stages: ["Inspections & Handover"] },
].map(({ label, stages }) => {
  const list = PLAN.filter((p) => stages.includes(p.name));
  return { label, start: Math.min(...list.map((p) => p.start)), end: Math.max(...list.map((p) => p.end)) };
});

// Weeks in which a stage actually has work on (stages can pause while others proceed).
const activeWeeks = (p: PlanPhase) => new Set(p.tasks.flatMap((t) => Array.from({ length: t.end - t.start + 1 }, (_, i) => t.start + i))).size;
const LONGEST_STAGES = [...PLAN].map((p) => ({ p, active: activeWeeks(p) })).sort((a, b) => b.active - a.active).slice(0, 6);
const LONGEST_TASKS = PLAN.flatMap((p) => p.tasks.map((t) => ({ ...t, stage: p.name })))
  .sort((a, b) => b.end - b.start - (a.end - a.start))
  .slice(0, 5);
const months = (weeks: number) => Math.round(weeks / 4.345);

function Overview({ start }: { start: string }) {
  const finish = PERIODS.find((x) => x.label === "Finishes & fit-out")!;
  const piling = PLAN.find((p) => p.name === "Piling")!;
  return (
    <>
      <Page side="left" number={2}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">At a glance</p>
        <h3 className="font-book mt-3 text-3xl leading-tight text-ink sm:text-4xl">About {months(PLAN_WEEKS)} months</h3>
        <p className="font-book mt-3 text-base italic leading-relaxed text-body">
          {PLAN_WEEKS} weeks from site possession to handover
          {start ? `, ${dateOf(start, 1)} to ${dateOf(start, PLAN_WEEKS, true)}` : ""}. Stages overlap, so the build moves
          through five broad periods with services running alongside.
        </p>
        <ul className="mt-6 space-y-3">
          {PERIODS.map((x) => (
            <li key={x.label}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="font-semibold text-ink">{x.label}</span>
                <span className="shrink-0 text-[11px] tabular-nums text-muted">
                  {rangeLabel(start, x.start, x.end)} · {durationLabel(x.start, x.end)}
                </span>
              </div>
              <div className="relative mt-1.5 h-2 rounded-full bg-black/[0.05]">
                <span
                  className={`absolute inset-y-0 rounded-full ${x.label === "Building services" ? "bg-teal/40" : "bg-teal"}`}
                  style={{ left: `${((x.start - 1) / PLAN_WEEKS) * 100}%`, width: `${((x.end - x.start + 1) / PLAN_WEEKS) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs leading-relaxed text-body">
          <strong className="text-ink">Finishes &amp; fit-out</strong> is the longest period — about{" "}
          {months(finish.end - finish.start + 1)} months, more than half the programme. In the early months,{" "}
          <strong className="text-ink">piling</strong> is the longest single stage at about{" "}
          {months(piling.end - piling.start + 1)} months.
        </p>
      </Page>
      <Page side="right" number={3}>
        <h4 className="font-book text-xl text-ink">What takes longest</h4>
        <p className="mt-1 text-[11px] text-muted">Stages ranked by the weeks they have work on site</p>
        <ol className="mt-3 space-y-2.5">
          {LONGEST_STAGES.map(({ p, active }, i) => (
            <li key={p.name}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink">
                  <span className="mr-1.5 text-xs tabular-nums text-muted">{i + 1}.</span>
                  {p.name}
                </span>
                <span className="shrink-0 text-[11px] tabular-nums text-muted">
                  {active} wks of work · spread over {p.end - p.start + 1}
                </span>
              </div>
              <div className="relative mt-1 h-1.5 rounded-full bg-black/[0.05]">
                <span className="absolute inset-y-0 left-0 rounded-full bg-teal" style={{ width: `${(active / PLAN_WEEKS) * 100}%` }} />
              </div>
            </li>
          ))}
        </ol>
        <h5 className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-muted">Longest single tasks</h5>
        <ul className="mt-2 divide-y divide-black/[0.06]">
          {LONGEST_TASKS.map((t) => (
            <li key={t.name} className="flex items-baseline justify-between gap-3 py-1.5 text-sm">
              <span className="text-ink">
                {t.name} <span className="text-[11px] text-muted">· {t.stage}</span>
              </span>
              <span className="shrink-0 text-[11px] tabular-nums text-muted">{t.end - t.start + 1} weeks</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 flex gap-2 rounded-xl bg-amber-soft p-3 text-xs leading-relaxed text-body">
          <Info size={14} className="mt-0.5 shrink-0 text-amber-ink" />
          Services and finishes set the pace in the second half. Confirming tiles, stone, joinery and light fittings early
          keeps those long stages from slipping.
        </p>
      </Page>
    </>
  );
}

export default function PlanBook() {
  const [spread, setSpread] = useState(0);
  const [start, setStart] = useState("");
  // Spread 0 is the cover, 1 is the overview, chapters start at 2.
  const last = PLAN.length + 1;
  const go = (i: number) => setSpread(Math.min(Math.max(i, 0), last));
  const phase = spread >= 2 ? PLAN[spread - 2] : null;

  return (
    <section id="build-programme" className="scroll-mt-28 px-4 pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl lg:px-4">
        <p className="pill-amber">
          <span className="dot" /> For reference only — a generic programme, not a schedule for any specific project
        </p>

        <div
          className="mt-8 outline-none [perspective:2000px]"
          tabIndex={0}
          aria-roledescription="book"
          aria-label="Typical build programme"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(spread + 1);
            if (e.key === "ArrowLeft") go(spread - 1);
          }}
        >
          <div className="book-shell rounded-[1.1rem] p-2 sm:p-3">
            <div key={spread} className="book-turn grid grid-cols-1 lg:grid-cols-2">
              {spread === 0 ? (
                <>
                  <div className="book-cover relative flex min-h-[34rem] flex-col justify-between rounded-t-[0.9rem] px-8 py-10 text-[#f6efe2] sm:px-12 lg:rounded-l-[0.9rem] lg:rounded-tr-none">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e6d6b8]">One Step Group Construction</p>
                      <div className="mt-10 h-px w-16 bg-[#e6d6b8]/60" />
                      <h3 className="font-book mt-6 text-4xl leading-tight sm:text-5xl">The Build Book</h3>
                      <p className="font-book mt-3 text-lg italic text-[#e6d6b8]">A typical landed-home rebuild programme</p>
                    </div>
                    <div>
                      <dl className="grid grid-cols-3 gap-4 border-t border-[#e6d6b8]/30 pt-5 text-center">
                        {[
                          [`${PLAN_WEEKS}`, "weeks"],
                          [`${PLAN.length}`, "stages"],
                          [`${TOTAL_TASKS}`, "tasks"],
                        ].map(([v, l]) => (
                          <div key={l}>
                            <dt className="font-book text-2xl">{v}</dt>
                            <dd className="text-[11px] uppercase tracking-widest text-[#e6d6b8]">{l}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-8 inline-block -rotate-3 rounded border-2 border-[#e6d6b8]/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#e6d6b8]">
                        For reference only
                      </p>
                    </div>
                  </div>
                  <Page side="right" number={1}>
                    <h3 className="font-book text-2xl text-ink">Contents</h3>
                    <p className="mt-1 text-xs text-muted">Stages overlap — services and finishes run alongside the structure.</p>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      className="mt-4 flex w-full items-center justify-between rounded-xl bg-black/[0.03] px-4 py-3 text-left text-sm hover:bg-black/[0.06]"
                    >
                      <span>
                        <span className="font-semibold text-ink">At a glance</span>
                        <span className="text-body"> — about {months(PLAN_WEEKS)} months, and what takes longest</span>
                      </span>
                      <ChevronRight size={16} className="shrink-0 text-teal" />
                    </button>
                    <div className="mt-5">
                      <Timeline onPick={(i) => go(i + 2)} />
                    </div>
                    <label className="mt-6 block rounded-xl bg-black/[0.03] p-4">
                      <span className="flex items-center gap-2 text-xs font-semibold text-ink">
                        <CalendarDays size={14} className="text-teal" /> Site possession date (optional)
                      </span>
                      <input
                        type="date"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        className="field mt-2 bg-white! py-2!"
                      />
                      <span className="mt-2 block text-[11px] text-muted">
                        {start
                          ? `Handover around ${dateOf(start, PLAN_WEEKS, true)} — indicative only.`
                          : "Without a date, the plan is shown in weeks from site possession."}
                      </span>
                    </label>
                  </Page>
                </>
              ) : !phase ? (
                <Overview start={start} />
              ) : (
                <>
                  <Page side="left" number={spread * 2}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal">Chapter {spread - 1}</p>
                    <h3 className="font-book mt-3 text-3xl leading-tight text-ink sm:text-4xl">{phase.name}</h3>
                    <p className="font-book mt-4 text-base italic leading-relaxed text-body">{phase.summary}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-black/[0.03] p-3">
                        <dt className="eyebrow text-[10px]!">{start ? "Indicative dates" : "When"}</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{rangeLabel(start, phase.start, phase.end)}</dd>
                        <dd className="text-[11px] text-muted">
                          Month {monthOf(phase.start)}
                          {monthOf(phase.end) !== monthOf(phase.start) ? `–${monthOf(phase.end)}` : ""}
                        </dd>
                      </div>
                      <div className="rounded-xl bg-black/[0.03] p-3">
                        <dt className="eyebrow text-[10px]!">Duration</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{durationLabel(phase.start, phase.end)}</dd>
                        <dd className="text-[11px] text-muted">
                          {phase.tasks.length} task{phase.tasks.length === 1 ? "" : "s"}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-6">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Where it sits in the build</p>
                      <Timeline highlight={spread - 2} onPick={(i) => go(i + 2)} />
                    </div>
                  </Page>
                  <Page side="right" number={spread * 2 + 1}>
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-book text-xl text-ink">Tasks</h4>
                      <span className="text-[11px] text-muted">{start ? "Indicative dates" : "Weeks from site possession"}</span>
                    </div>
                    <div className="mt-3">
                      <TaskList phase={phase} start={start} />
                    </div>
                    {spread === last && (
                      <p className="mt-5 flex gap-2 rounded-xl bg-amber-soft p-3 text-xs leading-relaxed text-body">
                        <Info size={14} className="mt-0.5 shrink-0 text-amber-ink" />
                        Every build is different. Actual durations depend on design, site conditions, weather, material
                        lead times and authority approvals.
                      </p>
                    )}
                  </Page>
                </>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <button type="button" onClick={() => go(spread - 1)} disabled={spread === 0} className="btn btn-secondary disabled:opacity-40">
              <ChevronLeft size={16} /> Previous
            </button>
            <button type="button" onClick={() => go(0)} className="flex items-center gap-2 text-xs text-muted hover:text-ink">
              <BookOpen size={14} />
              {spread === 0 ? "Cover & contents" : spread === 1 ? "At a glance" : `Chapter ${spread - 1} of ${PLAN.length}`}
            </button>
            <button type="button" onClick={() => go(spread + 1)} disabled={spread === last} className="btn btn-primary disabled:opacity-40">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
