import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Visualizations — India's Key Numbers in Charts",
  description:
    "Explore India's data through simple charts — GDP, inflation, population, health, agriculture, and state comparisons.",
  openGraph: {
    title: "Data Visualizations | DataIndia",
    description:
      "India's key numbers in charts — economy, population, health, and more.",
    url: "https://connectsangam.in/visualizations",
    type: "website",
  },
};

export default function VisualizationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}