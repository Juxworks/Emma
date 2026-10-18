import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaCard, PageHeader } from "../components/Section";
import { DataScene } from "../components/Illustrations";
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
} from "../developments/sales";
import JooChiatInsights from "../developments/JooChiatInsights";
import KatongInsights from "../developments/KatongInsights";
import MarineParadeInsights from "../developments/MarineParadeInsights";
import TelokKurauInsights from "../developments/TelokKurauInsights";
import SiglapFrankelInsights from "../developments/SiglapFrankelInsights";
import OperaEstateInsights from "../developments/OperaEstateInsights";
import KembanganInsights from "../developments/KembanganInsights";
import BedokTanahMerahInsights from "../developments/BedokTanahMerahInsights";
import Dashboard, { type Area } from "../developments/Dashboard";

export const metadata: Metadata = {
  title: "Plot Check — East Coast Landed Sales | One Step Group Construction",
  description:
    "Every recent landed sale on Singapore's East Coast, street by street — Joo Chiat, Katong, Marine Parade, Telok Kurau, Siglap, Opera Estate, Kembangan and Tanah Merah — with rebuild signals for each estate.",
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

export default function PlotCheckPage() {
  return (
    <>
      <PageHeader eyebrow="Plot Check" title="Check Your Street" illustration={<DataScene className="w-full" />}>
        Every landed sale from URA&apos;s caveat records, mapped street by
        street, with what each estate allows you to rebuild. See whether an
        asking price is fair before you make an offer.
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact?service=buying" className="btn btn-primary">
            Get a free check on your plot <ArrowRight size={16} />
          </Link>
        </div>
      </PageHeader>

      <Dashboard areas={areas} source={SALES_SOURCE} />

      <CtaCard
        title="Found a plot you like?"
        text="Send us the address. We'll check the price, the planning rules and the rebuild cost before you commit."
        href="/contact?service=buying"
        label="Get a free plot check"
      />
    </>
  );
}
