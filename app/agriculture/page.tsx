import { ArticleCard, StatCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's agriculture, in numbers | DataIndia",
  description:
    "Crop production, farmer income, and agricultural exports — India's agriculture sector explained through the key numbers.",
  openGraph: {
    title: "India's agriculture, in numbers",
    description: "Crop production, farmer income, and agricultural exports explained.",
    url: "https://connectsangam.in/agriculture",
    type: "website",
  },
};

export default function AgricultureHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Agriculture
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        India&rsquo;s agriculture, in numbers
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Crop production, farmer income, and agricultural exports — explained
        simply.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <StatCard label="Food grain production" value="376.56 MT" />
        <StatCard label="Agriculture GDP" value="16%" />
        <StatCard label="Farmers" value="150M+" />
        <StatCard label="Irrigated land" value="52%" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/agriculture/production" title="India's food grain production explained" topic="agriculture" />
        <ArticleCard href="/agriculture/exports" title="How India's agricultural exports are growing" topic="agriculture" />
        <ArticleCard href="/agriculture/farmer-income" title="Farmer income and support in India" topic="agriculture" />
      </div>
    </div>
  );
}