import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* ── Font Loading ──────────────────────────────── */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* ── Global Metadata ───────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://winetastingnotes.app"
  ),
  title: {
    default: "Wine Tasting Notes — Capture Every Note",
    template: "%s | Wine Tasting Notes",
  },
  description:
    "The sophisticated app for wine enthusiasts. Track vintages, record flavor profiles, and curate your personal cellar. Available on iOS and Android.",
  keywords: [
    "wine tasting",
    "wine notes",
    "wine app",
    "sommelier",
    "wine journal",
    "wine cellar",
    "cata de vinos",
    "notas de cata",
  ],
  authors: [{ name: "Wine Tasting Notes" }],
  creator: "Wine Tasting Notes",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Wine Tasting Notes",
    title: "Wine Tasting Notes — Capture Every Note",
    description:
      "The sophisticated companion for your oenophilic journey. Track vintages, record flavor profiles, and curate your personal cellar with ease.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wine Tasting Notes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Tasting Notes — Capture Every Note",
    description:
      "The sophisticated companion for your oenophilic journey. Track vintages, record flavor profiles, and curate your personal cellar.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/Wine_Tasting_Notes_logo_.png" },
    ],
    apple: [{ url: "/Wine_Tasting_Notes_logo_.png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

/* ── Root Layout ────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
