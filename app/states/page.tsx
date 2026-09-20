import { ArticleCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India, state by state | DataIndia",
  description:
    "Income, growth, poverty, and development compared across Indian states — side by side.",
  openGraph: {
    title: "India, state by state",
    description:
      "Income, growth, poverty, and development compared across states.",
    url: "https://connectsangam.in/states",
    type: "website",
  },
};

export default function StatesHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          States
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        India, state by state
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Income, growth, poverty, and development compared across states, side
        by side.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/states/growth" title="Which states grew fastest this year" topic="states" />
        <ArticleCard href="/states/per-capita" title="Per capita income by state, compared" topic="states" />
        <ArticleCard href="/states/literacy" title="Where literacy rates are rising fastest" topic="states" />
        <ArticleCard href="/states/poverty" title="State-wise poverty rates explained" topic="states" />
      </div>
    </div>
  );
}