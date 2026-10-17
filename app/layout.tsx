import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Step Group Construction | AI-Native Landed Property Consultants, Singapore",
  description:
    "AI-native, independent consultants for private landed property in Singapore — data-led investment advice, design & build management, A&A advisory and construction oversight.",
  keywords:
    "landed property consultant Singapore, landed property investment advice, rebuild advisory, renovation consultant, One Step Group Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col antialiased">
        <div className="ambient" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
