import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
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
    default: "ARFA — Independent thinking for private capital",
    template: "%s — ARFA",
  },
  description:
    "ARFA is a founder-led boutique platform focused on private capital strategy, portfolio architecture and independent analytical support for entrepreneurs, private investors, internationally mobile professionals and families.",
  keywords: [
    "private capital",
    "portfolio architecture",
    "strategic asset allocation",
    "independent advisory",
    "boutique wealth strategy",
    "second opinion",
  ],
  openGraph: {
    title: "ARFA — Independent thinking for private capital",
    description:
      "A selective, founder-led boutique for clients who want a calmer, sharper and more structured approach to capital.",
    url: siteUrl,
    siteName: "ARFA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARFA — Independent thinking for private capital",
    description:
      "A selective, founder-led boutique for clients who want a calmer, sharper and more structured approach to capital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
