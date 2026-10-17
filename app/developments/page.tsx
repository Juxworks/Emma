import type { Metadata } from "next";
import { CtaCard } from "../components/Section";
import {
  bedokTanahMerahSales,
  jooChiatSales,
  katongSales,
  kembanganSales,
  marineParadeSales,
  operaEstateSales,
  SALES_SOURCE,
  siglapFrankelSales,
  telokKurauSales,
} from "./sales";
import JooChiatInsights from "./JooChiatInsights";
import KatongInsights from "./KatongInsights";
import MarineParadeInsights from "./MarineParadeInsights";
import TelokKurauInsights from "./TelokKurauInsights";
import SiglapFrankelInsights from "./SiglapFrankelInsights";
import OperaEstateInsights from "./OperaEstateInsights";
import KembanganInsights from "./KembanganInsights";
import BedokTanahMerahInsights from "./BedokTanahMerahInsights";
import Dashboard, { type Area } from "./Dashboard";

export const metadata: Metadata = {
  title: "Development Potential | One Step Group Construction",
  description:
    "Investor dashboard of recent landed property sales and rebuild potential across Singapore's East Coast — Joo Chiat, Katong, Marine Parade, Telok Kurau, Siglap, Opera Estate, Kembangan and Tanah Merah.",
};

// Add each area's URA transactions to `sales` (see ./sales.ts).
const areas: Area[] = [
  {
    id: "joo-chiat",
    name: "Joo Chiat",
    district: "District 15",
    potential:
      "Freehold terraces on compact, regular plots make Joo Chiat one of the East's most active markets for rebuilds and A&A works. Parts of Joo Chiat and Koon Seng fall within conservation areas, where the front façade must be kept — check a plot's status before planning a full rebuild.",
    insights: <JooChiatInsights />,
    sales: jooChiatSales,
  },
  {
    id: "katong",
    name: "Katong",
    district: "District 15",
    potential:
      "Larger freehold plots than Joo Chiat at a lower price per square foot, between Tanjong Katong Road and Still Road and close to the Thomson-East Coast Line. Older terraces and semi-detached homes on generous land make Katong well suited to full rebuilds — check each lot's conservation status and storey control first.",
    insights: <KatongInsights />,
    sales: katongSales,
  },
  {
    id: "marine-parade-meyer",
    name: "Marine Parade & Meyer",
    district: "District 15",
    potential:
      "The East Coast's largest landed plots, around Meyer, Mountbatten and Bournemouth Roads near East Coast Park and the Thomson-East Coast Line. Big detached sites trade well below the $psf of smaller semi-detached homes, making rebuilds — and, where plot size allows, subdivision into semi-detached pairs — the main opportunity.",
    insights: <MarineParadeInsights />,
    sales: marineParadeSales,
  },
  {
    id: "telok-kurau",
    name: "Telok Kurau",
    district: "District 15",
    potential:
      "Terraces and semi-detached homes along the Lorong G–N Telok Kurau grid, priced close to Joo Chiat. Most plots are compact, but the occasional large plot trades at about half the area's $psf — the ones to watch for rebuilds.",
    insights: <TelokKurauInsights />,
    sales: telokKurauSales,
  },
  {
    id: "siglap-frankel",
    name: "Siglap & Frankel",
    district: "District 15 / 16",
    potential:
      "The East Coast's busiest landed market, from Frankel Avenue to Siglap and the East Coast Drive estate. Developers are actively rebuilding large plots into new semi-detached homes, which sell well above the land cost per square foot.",
    insights: <SiglapFrankelInsights />,
    sales: siglapFrankelSales,
  },
  {
    id: "opera-estate",
    name: "Opera Estate",
    district: "District 15 / 16",
    potential:
      "A self-contained enclave of 1950s–60s terraces and semi-detached homes on the opera-named streets. The lowest entry price on the East Coast, with a handful of large detached plots that suit rebuilding as semi-detached pairs.",
    insights: <OperaEstateInsights />,
    sales: operaEstateSales,
  },
  {
    id: "kembangan",
    name: "Kembangan",
    district: "District 14",
    potential:
      "Freehold terraces and semi-detached homes near Kembangan MRT at a lower price per square foot than any District 15 area — a value entry point, though resale prices for new homes are lower too.",
    insights: <KembanganInsights />,
    sales: kembanganSales,
  },
  {
    id: "tanah-merah-upper-changi",
    name: "Bedok, Tanah Merah & Upper Changi",
    district: "District 16",
    potential:
      "The East Coast's lowest land prices, across Bedok, Tanah Merah and the Upper Changi belt. Larger freehold semi-detached plots trade far below new terraces per square foot, but many estates are leasehold — check tenure first.",
    insights: <BedokTanahMerahInsights />,
    sales: bedokTanahMerahSales,
  },
];

export default function DevelopmentsPage() {
  return (
    <>
      <Dashboard areas={areas} source={SALES_SOURCE} />
      <CtaCard
        title="Thinking about rebuilding?"
        text="Contact us for a site assessment and project estimate."
      />
    </>
  );
}
