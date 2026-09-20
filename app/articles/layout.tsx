import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles — India's public data explained simply",
  description:
    "Browse every article on DataIndia — India's economy, population, states, health, and agriculture, explained in plain English.",
  openGraph: {
    title: "All Articles | DataIndia",
    description:
      "Browse every article — India's public data explained simply.",
    url: "https://connectsangam.in/articles",
    type: "website",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}