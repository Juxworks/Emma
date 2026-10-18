// Questions grouped by topic — the single source for the FAQ page and the home page.
// `link` adds a "read more" link after the answer.
export type Faq = { q: string; a: string; link?: { href: string; label: string }; home?: boolean };

export const FAQ_GROUPS: { id: string; title: string; items: Faq[] }[] = [
  {
    id: "working-with-us",
    title: "Working with us",
    items: [
      {
        q: "How is One Step different from a design-and-build contractor?",
        a: "A design-and-build contractor designs and builds the house itself, so it prices and checks its own work. We don't build — we act for you: we assemble and manage the architect, engineers and builder, benchmark their prices and check their work. You get one point of contact without giving up independent oversight.",
        home: true,
      },
      {
        // TODO: confirm the fee wording with the business before launch.
        q: "How do your fees work?",
        a: "The first feasibility call is free. After it, we confirm our fee in writing before any work starts — for the whole journey or for a single stage, such as a tender review on its own. Our fees are paid by you, never by builders or suppliers, so our advice stays independent.",
        home: true,
      },
      {
        q: "Can I engage you for just one stage?",
        a: "Yes. Many clients start with a plot check before buying, or a tender review once they already have builders' quotes, and carry on from there if it's useful.",
        link: { href: "/services", label: "See the services" },
      },
      {
        q: "What types of projects do you advise on?",
        a: "Private landed homes in Singapore — detached houses, semi-detached homes and terraces, including conservation homes — whether you're buying, rebuilding, or doing Additions & Alterations or a renovation.",
      },
      {
        q: "What does “AI-native” mean in practice?",
        a: "Data and AI tools are built into every stage — screening plots against transaction and planning data, comparing design and budget options, checking documents and tracking programmes. Every recommendation is reviewed by our consultants before it reaches you.",
      },
    ],
  },
  {
    id: "cost-and-time",
    title: "Cost & timelines",
    items: [
      {
        q: "How much does it cost to rebuild a landed home?",
        a: "It depends on the plot size, storeys, basement, finishes and site conditions, so we give you a figure for your own plot in the first call. As one reference point, the anonymised tender on our site — conservation A&A works to a three-storey intermediate terrace, with a new rear extension and attic — came to $1.83M before GST. A full rebuild of a larger home will usually cost more. Remember to budget for consultant fees, authority charges, financing and somewhere to live during the build too.",
        link: { href: "/how-it-works/cost-planning#example-review", label: "See the tender, line by line" },
        home: true,
      },
      {
        q: "How long does a landed rebuild take?",
        a: "A typical rebuild runs about 14 months from site possession to handover, plus design and approvals beforehand. Basements, conservation work and difficult sites add time. Our Build Book walks through every stage.",
        link: { href: "/how-it-works/construction#build-book", label: "Open the Build Book" },
        home: true,
      },
      {
        q: "How do I know if a builder's quote is fair?",
        a: "Ask at least three builders to price the same scope in the same format, then compare section by section and trade by trade. Watch for missing items, low provisional sums and one-sided contract terms. That comparison is exactly what our tender review does.",
        link: { href: "/services/tender-review", label: "Tender review" },
      },
    ],
  },
  {
    id: "planning",
    title: "Planning & approvals",
    items: [
      {
        q: "Is my plot in a conservation area?",
        a: "Many terraces and shophouses in Joo Chiat, Koon Seng and other older estates are conserved, which means the front façade and roof must be kept. You can check a property on URA's conservation map, or send us the address and we'll check it with the storey controls and other rules for the plot.",
        link: { href: "/plot-check", label: "Check your street" },
      },
      {
        q: "Which approvals does a rebuild need?",
        a: "Planning permission from URA, building and structural plan approval from BCA, and a permit to commence before work starts on site — with other agencies involved for drainage, roads and trees where needed. At the end, the house needs a Temporary Occupation Permit (TOP) before you move in. Your architect and engineers make the submissions; we keep them on track.",
        link: { href: "/how-it-works/design-approvals", label: "Stage 03 · Approvals" },
      },
      {
        q: "How many storeys can I build?",
        a: "It depends on the storey control for your street under URA's landed housing guidelines — often two or three storeys plus an attic and basement, but it varies from street to street. We check it before you buy or design.",
      },
    ],
  },
  {
    id: "after-handover",
    title: "After handover",
    items: [
      {
        q: "What happens after the builder hands over?",
        a: "Handover starts the defects liability period, usually 12 months under standard contracts. The builder must fix defects that appear during it, and part of the contract sum is held back as retention until they do. We help you list defects at handover and check they're fixed before the retention is released.",
      },
      {
        q: "Do you help with moving in?",
        a: "We make sure warranties, manuals, as-built drawings and the TOP are handed over, and that utilities and services are working, so you can move in with nothing outstanding.",
      },
    ],
  },
];
