import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/about#contact", permanent: true },
      { source: "/developments", destination: "/services/feasibility", permanent: true },
      { source: "/projects/completed", destination: "/projects", permanent: true },
      { source: "/projects/tender", destination: "/services/cost-planning", permanent: true },
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
