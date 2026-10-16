import type { Metadata } from "next";
import { CtaCard } from "../components/Section";
import { jooChiatSales, katongSales, SALES_SOURCE } from "./sales";
import JooChiatInsights from "./JooChiatInsights";
import KatongInsights from "./KatongInsights";
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
      "Large bungalow and semi-detached plots near East Coast Park, where older homes are increasingly rebuilt to make full use of the land.",
    sales: [],
  },
  {
    id: "telok-kurau",
    name: "Telok Kurau",
    district: "District 15",
    potential:
      "Generous older plots along the Lorong Telok Kurau streets, well suited to reconstruction into modern terraces and semi-detached homes.",
    sales: [],
  },
  {
    id: "siglap-frankel",
    name: "Siglap & Frankel",
    district: "District 15 / 16",
    potential:
      "Sought-after detached and semi-detached land on gently sloping streets — strong candidates for high-value rebuilds.",
    sales: [],
  },
  {
    id: "opera-estate",
    name: "Opera Estate",
    district: "District 15 / 16",
    potential:
      "A self-contained enclave of 1950s–60s terraces and semi-detached homes, many now reaching the age where reconstruction makes sense.",
    sales: [],
  },
  {
    id: "kembangan",
    name: "Kembangan",
    district: "District 14",
    potential:
      "Compact landed streets near Kembangan MRT, with a mix of terraces and semi-detached homes suited to rebuilds and A&A works.",
    sales: [],
  },
  {
    id: "tanah-merah-upper-changi",
    name: "Tanah Merah & Upper Changi",
    district: "District 16",
    potential:
      "Larger plots in a greener setting toward the east, giving room for generous detached and semi-detached designs.",
    sales: [],
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
