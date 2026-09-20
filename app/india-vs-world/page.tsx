import { ArticleCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How India compares globally | DataIndia",
  description:
    "Side-by-side comparisons of India with the world — growth, health spending, population, and emerging economies.",
  openGraph: {
    title: "How India compares globally",
    description:
      "Side-by-side comparisons using World Bank data — India vs the world.",
    url: "https://connectsangam.in/india-vs-world",
    type: "website",
  },
};

export default function WorldHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          India vs World
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        How India compares globally
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Side-by-side comparisons using World Bank data — no key required, fully
        open.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/india-vs-world/growth" title="How India's growth compares to its neighbours" topic="world" />
        <ArticleCard href="/india-vs-world/health-spending" title="Where India ranks on public health spending" topic="world" />
        <ArticleCard href="/india-vs-world/population" title="India vs China: population and growth" topic="world" />
        <ArticleCard href="/india-vs-world/vs-brazil" title="India vs Brazil: emerging economies compared" topic="world" />
      </div>
    </div>
  );
}