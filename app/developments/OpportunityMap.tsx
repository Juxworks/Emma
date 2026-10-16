"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap, LayerGroup, LatLngBounds } from "leaflet";
import { Locate, MousePointerClick } from "lucide-react";
import type { Sale } from "./sales";
import { SIGNALS, isAnomaly, type Signal, type StreetStat } from "./signals";

const formatPrice = (n: number) => `$${(n / 1_000_000).toFixed(2)}M`;
const formatNumber = (n: number) => Math.round(n).toLocaleString("en-SG");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatMonth = (ym: string) => `${MONTHS[Number(ym.slice(5, 7)) - 1]} ${ym.slice(0, 4)}`;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function tooltipHtml(s: Sale, st: StreetStat) {
  const sig = SIGNALS[st.signal];
  return `
    <div style="font-family:inherit;min-width:180px">
      <div style="font-weight:600;color:#111827">${escape(s.address)}</div>
      <div style="color:#6b7280;font-size:11px">Singapore ${s.postal} · ${formatMonth(s.date)} · ${escape(s.type)}</div>
      <div style="margin-top:6px;color:#111827"><b>${formatPrice(s.price)}</b> · $${formatNumber(s.psf)} psf · ${formatNumber(s.landSqft)} sq ft</div>
      <div style="margin-top:6px;display:flex;align-items:center;gap:6px;color:#374151;font-size:11px">
        <span style="width:8px;height:8px;border-radius:9999px;background:${sig.color};display:inline-block"></span>
        ${escape(st.street)}: ${sig.label} (${st.diff > 0 ? "+" : ""}${Math.round(st.diff * 100)}% vs area)
      </div>
      ${isAnomaly(s) ? '<div style="margin-top:4px;color:#d97706;font-size:11px;font-weight:600">⚠ Flagged — verify before relying on it</div>' : ""}
    </div>`;
}

export default function OpportunityMap({ streets }: { streets: StreetStat[] }) {
  const el = useRef<HTMLDivElement>(null);
  const map = useRef<LeafletMap | null>(null);
  const layer = useRef<LayerGroup | null>(null);
  const bounds = useRef<LatLngBounds | null>(null);
  const [ready, setReady] = useState(false);
  const [scrollZoom, setScrollZoom] = useState(false);

  // Create the map once.
  useEffect(() => {
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !el.current || map.current) return;
      const m = L.map(el.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        minZoom: 13,
        maxZoom: 19,
        attributionControl: true,
      });
      L.control.zoom({ position: "topright" }).addTo(m);
      // OneMap basemap (Singapore Land Authority) — free, attribution required.
      L.tileLayer("https://www.onemap.gov.sg/maps/tiles/Grey/{z}/{x}/{y}.png", {
        attribution:
          '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:16px;width:16px;display:inline;vertical-align:middle" alt="" /> <a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a> &copy; contributors | <a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>',
        minZoom: 11,
        maxZoom: 19,
        detectRetina: true,
      }).addTo(m);
      m.on("click", () => {
        m.scrollWheelZoom.enable();
        setScrollZoom(true);
      });
      m.on("mouseout", () => {
        m.scrollWheelZoom.disable();
        setScrollZoom(false);
      });
      layer.current = L.layerGroup().addTo(m);
      map.current = m;
      setReady(true);
    });
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Redraw the heat layer whenever the filtered data changes.
  useEffect(() => {
    if (!ready || !map.current || !layer.current) return;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !map.current || !layer.current) return;
      const group = layer.current;
      group.clearLayers();
      const all = streets.flatMap((st) => st.sales);
      if (!all.length) return;

      // Soft halos around each sale build up a heat surface coloured by the street's signal.
      for (const st of streets) {
        const color = SIGNALS[st.signal].color;
        for (const s of st.sales) {
          if (isAnomaly(s)) continue;
          L.circle([s.lat, s.lng], { radius: 110, stroke: false, fillColor: color, fillOpacity: 0.1, interactive: false }).addTo(group);
          L.circle([s.lat, s.lng], { radius: 55, stroke: false, fillColor: color, fillOpacity: 0.14, interactive: false }).addTo(group);
        }
      }

      // Individual sales on top, sized by price.
      const prices = all.map((s) => s.price);
      const lo = Math.min(...prices);
      const hi = Math.max(...prices);
      for (const st of streets) {
        const color = SIGNALS[st.signal].color;
        for (const s of st.sales) {
          const anomaly = isAnomaly(s);
          const r = 6 + (hi > lo ? ((s.price - lo) / (hi - lo)) * 6 : 0);
          L.circleMarker([s.lat, s.lng], {
            radius: r,
            color: anomaly ? "#d97706" : "#ffffff",
            weight: 2,
            dashArray: anomaly ? "3 3" : undefined,
            fillColor: anomaly ? "#ffffff" : color,
            fillOpacity: 1,
          })
            .bindTooltip(tooltipHtml(s, st), { direction: "auto", opacity: 1 })
            .addTo(group);
        }
      }

      const b = L.latLngBounds(all.map((s) => [s.lat, s.lng] as [number, number]));
      bounds.current = b;
      map.current.setMaxBounds(b.pad(1.5));
      map.current.fitBounds(b, { padding: [30, 30] });
    });
    return () => {
      cancelled = true;
    };
  }, [streets, ready]);

  const counts = (Object.keys(SIGNALS) as Signal[]).map((k) => ({
    key: k,
    streets: streets.filter((s) => s.signal === k).length,
  }));

  return (
    <div className="glass rounded-2xl! p-5 lg:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-heading text-base font-semibold text-ink">Opportunity heatmap</h3>
          <p className="mt-0.5 text-xs text-muted">
            Each dot is a sale (larger = higher price), coloured by its street&apos;s signal. Hover for details.
          </p>
        </div>
        <button
          onClick={() => bounds.current && map.current?.fitBounds(bounds.current, { padding: [30, 30] })}
          className="btn btn-secondary px-3! py-1.5! text-xs!"
        >
          <Locate size={13} /> Reset view
        </button>
      </div>

      <div className="relative isolate mt-4 overflow-hidden rounded-2xl border border-black/5">
        <div ref={el} className="h-[26rem] w-full bg-frost-light lg:h-[30rem]" aria-label="Map of Joo Chiat sales" />
        {!scrollZoom && (
          <div className="pointer-events-none absolute bottom-3 left-3 z-[500] flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-control shadow-sm backdrop-blur">
            <MousePointerClick size={12} /> Click the map to zoom with scroll · or use + / −
          </div>
        )}
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {counts.map(({ key, streets: n }) => (
          <li key={key} className="flex items-center gap-2 text-xs">
            <span className="h-3 w-3 rounded-full ring-2 ring-white" style={{ background: SIGNALS[key].color }} />
            <span className="font-semibold text-ink">{SIGNALS[key].label}</span>
            <span className="text-muted">
              {SIGNALS[key].description} · {n} street{n === 1 ? "" : "s"}
            </span>
          </li>
        ))}
        <li className="flex items-center gap-2 text-xs">
          <span className="h-3 w-3 rounded-full border-2 border-dashed border-amber-ink bg-white" />
          <span className="font-semibold text-ink">Flagged</span>
          <span className="text-muted">Anomalous record, excluded from medians</span>
        </li>
      </ul>
    </div>
  );
}
