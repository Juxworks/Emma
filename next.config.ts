import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/developments", destination: "/plot-check", permanent: true },
      { source: "/how-it-works", destination: "/services#how-it-works", permanent: true },
      { source: "/projects/completed", destination: "/projects", permanent: true },
      { source: "/projects/tender", destination: "/how-it-works/cost-planning", permanent: true },
      // Stage pages moved from /services to /how-it-works; /services now lists services by goal.
      {
        source: "/services/:stage(feasibility|concept-design|design-approvals|cost-planning|construction)",
        destination: "/how-it-works/:stage",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
