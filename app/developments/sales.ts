// Landed (non-strata) transactions from URA's Private Residential Property
// Transactions e-Service (caveats lodged with SLA / developer OTPs).
// Search: Postal District 15, Landed Properties (Non-Strata), Oct 2025 – Oct 2026.
// Retrieved 16 Oct 2026. Area and $psf are on land area. URA does not publish
// house numbers, so each sale was matched to its address on PropKaki / haio.sg
// (SLA caveat data) by street, month, land area and price; postal codes and
// coordinates from OneMap (SLA).

export type Sale = {
  date: string; // YYYY-MM
  street: string;
  address: string;
  postal: string;
  lat: number;
  lng: number;
  type: "Terrace" | "Semi-Detached" | "Detached";
  saleType: "Resale" | "New Sale" | "Sub Sale";
  price: number;
  landSqft: number;
  psf: number;
};

export const SALES_SOURCE = {
  name: "URA Private Residential Property Transactions",
  url: "https://eservice.ura.gov.sg/property-market-information/pmiResidentialTransactionSearch",
  period: "Oct 2025 – Oct 2026",
  retrieved: "16 Oct 2026",
};

export const jooChiatSales: Sale[] = [
  { date: "2026-10", street: "Joo Chiat Terrace", address: "71 Joo Chiat Terrace", postal: "427233", lat: 1.314684, lng: 103.901054, type: "Terrace", saleType: "Resale", price: 3800000, landSqft: 1147.44, psf: 3312 },
  { date: "2026-09", street: "Joo Chiat Terrace", address: "119 Joo Chiat Terrace", postal: "427269", lat: 1.314942, lng: 103.902696, type: "Terrace", saleType: "Resale", price: 4808000, landSqft: 1531.72, psf: 3139 },
  { date: "2026-09", street: "Duku Lane", address: "38 Duku Lane", postal: "429335", lat: 1.309931, lng: 103.907381, type: "Terrace", saleType: "Resale", price: 7250000, landSqft: 3152.78, psf: 2300 },
  { date: "2026-08", street: "Tembeling Road", address: "140 & 140A Tembeling Road", postal: "423649", lat: 1.31034, lng: 103.902753, type: "Terrace", saleType: "Resale", price: 5500000, landSqft: 1720.09, psf: 3198 },
  { date: "2026-08", street: "Everitt Road", address: "136D Everitt Road", postal: "428664", lat: 1.310054, lng: 103.903627, type: "Terrace", saleType: "Resale", price: 5400000, landSqft: 1756.68, psf: 3074 },
  { date: "2026-07", street: "Langsat Road", address: "12 Langsat Road", postal: "426698", lat: 1.314814, lng: 103.900521, type: "Terrace", saleType: "Resale", price: 4820000, landSqft: 1701.79, psf: 2832 },
  { date: "2026-07", street: "Joo Chiat Avenue", address: "49 Joo Chiat Avenue", postal: "428159", lat: 1.315994, lng: 103.911261, type: "Semi-Detached", saleType: "Resale", price: 6000000, landSqft: 2074.22, psf: 2893 },
  { date: "2026-07", street: "Carpmael Road", address: "39 Carpmael Road", postal: "429782", lat: 1.313336, lng: 103.898246, type: "Terrace", saleType: "Resale", price: 4750000, landSqft: 2048.39, psf: 2319 },
  { date: "2026-07", street: "Koon Seng Road", address: "78 Koon Seng Road", postal: "427021", lat: 1.311562, lng: 103.904528, type: "Terrace", saleType: "Resale", price: 5100000, landSqft: 2408.98, psf: 2117 },
  { date: "2026-06", street: "Langsat Road", address: "2A Langsat Road", postal: "426688", lat: 1.314742, lng: 103.900198, type: "Terrace", saleType: "Resale", price: 4688000, landSqft: 1747, psf: 2683 },
  { date: "2026-06", street: "Langsat Road", address: "22 Langsat Road", postal: "426705", lat: 1.314837, lng: 103.900715, type: "Terrace", saleType: "Resale", price: 2450000, landSqft: 1083.93, psf: 2260 },
  { date: "2026-06", street: "Duku Lane", address: "20 Duku Lane", postal: "429326", lat: 1.309654, lng: 103.906897, type: "Terrace", saleType: "Resale", price: 8900000, landSqft: 2667.32, psf: 3337 },
  { date: "2026-06", street: "Tembeling Road", address: "168 Tembeling Road", postal: "423677", lat: 1.309632, lng: 103.903056, type: "Semi-Detached", saleType: "Resale", price: 7450000, landSqft: 4601.61, psf: 1619 },
  { date: "2026-06", street: "Onan Road", address: "314 Onan Road", postal: "424705", lat: 1.308, lng: 103.902405, type: "Terrace", saleType: "Resale", price: 4870000, landSqft: 1616.75, psf: 3012 },
  { date: "2026-06", street: "Marshall Road", address: "33 Marshall Road", postal: "424865", lat: 1.305234, lng: 103.902098, type: "Terrace", saleType: "Resale", price: 3580000, landSqft: 16731.56, psf: 214 },
  { date: "2026-06", street: "Ceylon Road", address: "82 Ceylon Road", postal: "429660", lat: 1.308093, lng: 103.901204, type: "Terrace", saleType: "Resale", price: 5458000, landSqft: 1795.44, psf: 3040 },
  { date: "2026-06", street: "Koon Seng Road", address: "76 Koon Seng Road", postal: "427019", lat: 1.311523, lng: 103.904482, type: "Terrace", saleType: "Resale", price: 4380000, landSqft: 1778.21, psf: 2463 },
  { date: "2026-05", street: "Lorong Bandang", address: "9 Lorong Bandang", postal: "426336", lat: 1.314138, lng: 103.909586, type: "Terrace", saleType: "Resale", price: 4400000, landSqft: 1663.04, psf: 2646 },
  { date: "2026-05", street: "Lorong Stangee", address: "30 Lorong Stangee", postal: "424994", lat: 1.308477, lng: 103.907311, type: "Terrace", saleType: "Resale", price: 6600000, landSqft: 2667.32, psf: 2474 },
  { date: "2026-05", street: "Tembeling Road", address: "21 Tembeling Road", postal: "423743", lat: 1.313758, lng: 103.900671, type: "Terrace", saleType: "Resale", price: 5668888, landSqft: 2846, psf: 1992 },
  { date: "2026-05", street: "Everitt Road", address: "18 Everitt Road", postal: "428571", lat: 1.314002, lng: 103.90161, type: "Terrace", saleType: "Resale", price: 4850000, landSqft: 1188.35, psf: 4081 },
  { date: "2026-05", street: "Mangis Road", address: "23 Mangis Road", postal: "424961", lat: 1.313497, lng: 103.904018, type: "Terrace", saleType: "Resale", price: 4680000, landSqft: 2046.24, psf: 2287 },
  { date: "2026-05", street: "Duku Road", address: "17 Duku Road", postal: "429167", lat: 1.308861, lng: 103.9039, type: "Terrace", saleType: "Resale", price: 5500000, landSqft: 1925.68, psf: 2856 },
  { date: "2026-04", street: "Tembeling Road", address: "20F Tembeling Road", postal: "423562", lat: 1.313991, lng: 103.899816, type: "Terrace", saleType: "Resale", price: 5000000, landSqft: 1413.31, psf: 3538 },
  { date: "2026-04", street: "Carpmael Road", address: "205 Carpmael Road", postal: "429939", lat: 1.307459, lng: 103.902512, type: "Terrace", saleType: "Resale", price: 5250000, landSqft: 2175.4, psf: 2413 },
  { date: "2026-04", street: "Koon Seng Road", address: "77 Koon Seng Road", postal: "427020", lat: 1.311779, lng: 103.904339, type: "Terrace", saleType: "Resale", price: 4100000, landSqft: 1585.54, psf: 2586 },
  { date: "2026-04", street: "Duku Road", address: "60 Duku Road", postal: "429223", lat: 1.309727, lng: 103.905651, type: "Terrace", saleType: "Resale", price: 5230000, landSqft: 1797.59, psf: 2909 },
  { date: "2026-04", street: "Tembeling Road", address: "261 Tembeling Road", postal: "423736", lat: 1.307074, lng: 103.905485, type: "Terrace", saleType: "Resale", price: 4050000, landSqft: 1236.78, psf: 3275 },
  { date: "2026-03", street: "Langsat Road", address: "74 Langsat Road", postal: "426848", lat: 1.315223, lng: 103.902914, type: "Semi-Detached", saleType: "New Sale", price: 8000000, landSqft: 2882.6, psf: 2775 },
  { date: "2026-03", street: "Marshall Road", address: "108A Marshall Road", postal: "424932", lat: 1.307576, lng: 103.900812, type: "Semi-Detached", saleType: "Resale", price: 8380000, landSqft: 2924.58, psf: 2865 },
  { date: "2026-03", street: "Duku Lane", address: "2 Duku Lane", postal: "429303", lat: 1.310125, lng: 103.906496, type: "Terrace", saleType: "Resale", price: 4150000, landSqft: 1514.49, psf: 2740 },
  { date: "2026-03", street: "Joo Chiat Place", address: "420 Joo Chiat Place", postal: "428051", lat: 1.315287, lng: 103.911894, type: "Terrace", saleType: "Resale", price: 4600000, landSqft: 1748.07, psf: 2631 },
  { date: "2026-03", street: "Joo Chiat Terrace", address: "169C Joo Chiat Terrace", postal: "427316", lat: 1.315273, lng: 103.904649, type: "Terrace", saleType: "Resale", price: 6100000, landSqft: 1621.06, psf: 3763 },
  { date: "2026-03", street: "Joo Chiat Avenue", address: "46 Joo Chiat Avenue", postal: "428157", lat: 1.315666, lng: 103.911174, type: "Terrace", saleType: "Resale", price: 5288888, landSqft: 2353.01, psf: 2248 },
  { date: "2026-03", street: "Tembeling Road", address: "231 Tembeling Road", postal: "423717", lat: 1.308176, lng: 103.904762, type: "Detached", saleType: "Resale", price: 10000000, landSqft: 4521.96, psf: 2211 },
  { date: "2026-02", street: "Lorong Stangee", address: "83 Lorong Stangee", postal: "425063", lat: 1.309195, lng: 103.906378, type: "Terrace", saleType: "Resale", price: 4480000, landSqft: 2012.87, psf: 2226 },
  { date: "2026-02", street: "Lorong Stangee", address: "35G Lorong Stangee", postal: "425009", lat: 1.308343, lng: 103.906667, type: "Terrace", saleType: "Resale", price: 5750000, landSqft: 1485.43, psf: 3871 },
  { date: "2026-02", street: "Everitt Road North", address: "12 Everitt Road North", postal: "428525", lat: 1.31585, lng: 103.901341, type: "Terrace", saleType: "Resale", price: 4100000, landSqft: 2037.63, psf: 2012 },
  { date: "2026-02", street: "Langsat Road", address: "40 Langsat Road", postal: "426721", lat: 1.31491, lng: 103.901196, type: "Terrace", saleType: "Resale", price: 3950000, landSqft: 1413.31, psf: 2795 },
  { date: "2026-02", street: "Lorong Stangee", address: "39C Lorong Stangee", postal: "425025", lat: 1.308933, lng: 103.906553, type: "Terrace", saleType: "Resale", price: 5280000, landSqft: 1743.77, psf: 3028 },
  { date: "2026-02", street: "Carpmael Road", address: "206 Carpmael Road", postal: "429940", lat: 1.307687, lng: 103.901892, type: "Terrace", saleType: "Resale", price: 8350000, landSqft: 2313.18, psf: 3610 },
  { date: "2026-01", street: "Joo Chiat Walk", address: "103 Joo Chiat Walk", postal: "427161", lat: 1.315089, lng: 103.913694, type: "Terrace", saleType: "Resale", price: 5000000, landSqft: 1988.11, psf: 2515 },
  { date: "2026-01", street: "Joo Chiat Place", address: "129 & 129A Joo Chiat Place", postal: "427859", lat: 1.313919, lng: 103.903023, type: "Terrace", saleType: "Resale", price: 4900000, landSqft: 1552.17, psf: 3157 },
  { date: "2025-12", street: "Carpmael Road", address: "155 Carpmael Road", postal: "429896", lat: 1.308948, lng: 103.901367, type: "Terrace", saleType: "Resale", price: 6680000, landSqft: 1738.39, psf: 3843 },
  { date: "2025-12", street: "Langsat Road", address: "6 Langsat Road", postal: "426692", lat: 1.314782, lng: 103.900348, type: "Terrace", saleType: "Resale", price: 5300000, landSqft: 1180.81, psf: 4488 },
  { date: "2025-12", street: "Everitt Road", address: "6 Everitt Road", postal: "428564", lat: 1.314215, lng: 103.901441, type: "Terrace", saleType: "Resale", price: 4880000, landSqft: 1284.15, psf: 3800 },
  { date: "2025-11", street: "Duku Lane", address: "9 Duku Lane", postal: "429310", lat: 1.310094, lng: 103.906929, type: "Terrace", saleType: "Resale", price: 4300000, landSqft: 1893.39, psf: 2271 },
  { date: "2025-11", street: "Mangis Road", address: "24 Mangis Road", postal: "424962", lat: 1.313273, lng: 103.903801, type: "Terrace", saleType: "Resale", price: 4700000, landSqft: 1280.92, psf: 3669 },
  { date: "2025-11", street: "Joo Chiat Place", address: "76 Joo Chiat Place", postal: "427794", lat: 1.313585, lng: 103.902403, type: "Terrace", saleType: "Resale", price: 4680000, landSqft: 1101.16, psf: 4250 },
  { date: "2025-11", street: "Joo Chiat Walk", address: "75 Joo Chiat Walk", postal: "427134", lat: 1.314888, lng: 103.9127, type: "Terrace", saleType: "Resale", price: 4611999, landSqft: 1766.37, psf: 2611 },
  { date: "2025-11", street: "Onan Road", address: "357 Onan Road", postal: "424754", lat: 1.306773, lng: 103.903738, type: "Terrace", saleType: "Resale", price: 5450000, landSqft: 1612.45, psf: 3380 },
  { date: "2025-10", street: "Onan Road", address: "94 Onan Road", postal: "424512", lat: 1.314108, lng: 103.898034, type: "Terrace", saleType: "Resale", price: 4830000, landSqft: 1915.99, psf: 2521 },
  { date: "2025-10", street: "Everitt Road", address: "35F Everitt Road", postal: "428695", lat: 1.313423, lng: 103.902995, type: "Terrace", saleType: "Resale", price: 5600000, landSqft: 2050.54, psf: 2731 },
  { date: "2025-10", street: "Ceylon Road", address: "149 Ceylon Road", postal: "429711", lat: 1.310435, lng: 103.89899, type: "Detached", saleType: "Resale", price: 13600000, landSqft: 8405.61, psf: 1618 },
  { date: "2025-10", street: "Joo Chiat Terrace", address: "78 Joo Chiat Terrace", postal: "427241", lat: 1.314427, lng: 103.901203, type: "Terrace", saleType: "Resale", price: 3088000, landSqft: 900.95, psf: 3428 },
  { date: "2025-10", street: "Carpmael Road", address: "2 Carpmael Road", postal: "429751", lat: 1.314592, lng: 103.897445, type: "Semi-Detached", saleType: "Resale", price: 6800000, landSqft: 4436.92, psf: 1533 },
];
