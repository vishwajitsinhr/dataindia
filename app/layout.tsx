import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://connectsangam.in"),

  title: {
    default: "DataIndia — India's public data, explained simply",
    template: "%s | DataIndia",
  },

  description:
    "Numbers from the RBI, government open data platforms, and the World Bank, explained in plain language. Part of ConnectSangam.",

  keywords: [
    "India data",
    "RBI",
    "economy",
    "population",
    "health",
    "states",
    "agriculture",
    "public data",
    "ConnectSangam",
    "DataIndia",
  ],

  authors: [{ name: "ConnectSangam", url: "https://connectsangam.in" }],
  creator: "ConnectSangam",
  publisher: "ConnectSangam",
  applicationName: "DataIndia",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://connectsangam.in",
    siteName: "DataIndia",
    title: "DataIndia — India's public data, explained simply",
    description:
      "Numbers from the RBI, government open data platforms, and the World Bank, explained in plain language. Part of ConnectSangam.",
  },

  twitter: {
    card: "summary_large_image",
    title: "DataIndia — India's public data, explained simply",
    description: "Part of ConnectSangam — where India's data converges",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A4A42",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}