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
  title: "One Step Group Construction | Singapore Landed Property Specialists",
  description:
    "We are contractors specialising in private landed properties in Singapore. Construction and renovation of detached houses, semi-Ds, and bungalows.",
  keywords:
    "landed property construction Singapore, bungalow renovation, semi-detached construction, One Step Group Construction",
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
