// Example tender, anonymised: a 3-storey intermediate terrace — conservation
// A&A with a new rear extension and attic, 12-month lump-sum contract.
// Project, parties and address are deliberately removed. Amounts in SGD, excl. GST.
//
// Benchmark bands are each line's typical share of the total tender sum for
// comparable landed A&A / rebuild tenders. They are indicative and should be
// refreshed from One Step's tender dataset.

export type Line = {
  name: string;
  amount: number;
  /** Typical share of total tender sum, in percent: [low, high]. */
  band: [number, number];
  note?: string;
};

export const TENDER_TOTAL = 1_828_454;

export const SECTIONS: Line[] = [
  {
    name: "Preliminaries",
    amount: 202_164,
    band: [8, 12],
    note: "Site set-up, scaffolding and hoarding, insurance, performance bond, site management, safety and clean-up.",
  },
  {
    name: "Main building works",
    amount: 1_074_904,
    band: [55, 65],
    note: "Fourteen trades from demolition and piling to finishes and external works.",
  },
  {
    name: "Mechanical & electrical works",
    amount: 186_186,
    band: [9, 14],
    note: "Plumbing and sanitary, electrical, air-conditioning and ventilation.",
  },
  {
    name: "PC sums, provisional sums & contingency",
    amount: 365_200,
    band: [8, 15],
    note: "Allowances that are not firm prices — the final cost follows actual spend.",
  },
];

export const TRADES: Line[] = [
  { name: "Demolition, excavation & temporary works", amount: 83_728, band: [3, 6] },
  {
    name: "Piling",
    amount: 256_340,
    band: [5, 10],
    note: "59 piles at an estimated 45 m depth, $70/m — re-measured on actual penetration.",
  },
  { name: "Structure", amount: 220_827, band: [12, 20] },
  { name: "Brickwork", amount: 35_868, band: [1.5, 3.5] },
  { name: "Staircases & railings", amount: 57_512, band: [1.5, 3.5] },
  { name: "Roofing", amount: 9_442, band: [0.5, 2.5] },
  { name: "Waterproofing", amount: 31_765, band: [1, 2.5] },
  { name: "Floor & skirting finishes", amount: 59_816, band: [2.5, 5] },
  {
    name: "Wall finishes",
    amount: 115_046,
    band: [3.5, 6],
    note: "Includes brick cladding (~$24.8k) and marble at $300/m² supply rate.",
  },
  { name: "Ceilings", amount: 35_613, band: [1, 2.5] },
  { name: "Timber doors & ironmongery", amount: 25_284, band: [1, 2.5] },
  { name: "Aluminium, metal & glazing", amount: 77_244, band: [3, 6] },
  { name: "Miscellaneous works", amount: 39_889, band: [1.5, 3] },
  { name: "External works", amount: 26_530, band: [1, 3] },
  { name: "Plumbing & sanitary", amount: 54_784, band: [2.5, 4] },
  { name: "Electrical", amount: 74_450, band: [3, 5] },
  { name: "Air-conditioning & ventilation", amount: 56_952, band: [2.5, 4.5] },
];

/** Allowances inside the PC / provisional section, so owners see what is not a firm price. */
export const ALLOWANCES = [
  { name: "Contingency", amount: 100_000, kind: "Contingency" },
  { name: "Wardrobes & ID carpentry", amount: 100_000, kind: "PC sum" },
  { name: "Sewer & unforeseen underground services", amount: 30_000, kind: "Provisional" },
  { name: "Sanitary wares & fittings", amount: 25_000, kind: "PC sum" },
  { name: "Authority service connections", amount: 20_000, kind: "Provisional" },
  { name: "Asbestos survey, testing & removal", amount: 20_000, kind: "Provisional" },
  { name: "Light fittings", amount: 20_000, kind: "PC sum" },
  { name: "Electrical upgrade (if required)", amount: 15_000, kind: "Provisional" },
  { name: "Landscaping", amount: 10_000, kind: "PC sum" },
  { name: "Home automation", amount: 10_000, kind: "PC sum" },
  { name: "Ironmongery", amount: 5_000, kind: "PC sum" },
  { name: "Contractor's profit & attendance on PC sums (3% + 3%)", amount: 10_200, kind: "Mark-up" },
] as const;

export type Status = "within" | "high" | "low";

export const share = (amount: number) => (amount / TENDER_TOTAL) * 100;

export function status({ amount, band }: Line): Status {
  const s = share(amount);
  return s > band[1] ? "high" : s < band[0] ? "low" : "within";
}
