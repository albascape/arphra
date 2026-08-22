import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollTop } from "@/components/ScrollTop";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://arfacapital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARFA — Independent research on markets and portfolio structure",
    template: "%s — ARFA",
  },
  description:
    "ARFA is an independent research publication on markets, portfolio construction and the structure of long-term capital. General commentary only — not investment advice, and no advisory or client services.",
  keywords: [
    "market research",
    "portfolio construction",
    "asset allocation research",
    "macro commentary",
    "investment methodology",
    "financial writing",
  ],
  openGraph: {
    title: "ARFA — Independent research on markets and portfolio structure",
    description:
      "General research notes on markets, portfolio construction and the structure of long-term capital. Educational commentary only.",
    url: siteUrl,
    siteName: "ARFA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARFA — Independent research on markets and portfolio structure",
    description:
      "General research notes on markets, portfolio construction and the structure of long-term capital. Educational commentary only.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
