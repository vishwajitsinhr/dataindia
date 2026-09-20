import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Glossary — India's key economic terms explained",
  description:
    "Key economic, demographic, and health terms explained in plain English — repo rate, CPI, fiscal deficit, MMR, MSP, and more.",
  openGraph: {
    title: "Data Glossary | DataIndia",
    description:
      "Key terms explained in plain English — no jargon, no confusion.",
    url: "https://connectsangam.in/glossary",
    type: "website",
  },
};

export default function GlossaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}