import { ArticleCard, StatCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public health, plainly explained | DataIndia",
  description:
    "Health spending, outcomes, vaccination, and access — India's public health numbers explained simply.",
  openGraph: {
    title: "Public health, plainly explained",
    description:
      "Health spending, outcomes, vaccination, and access — the numbers explained.",
    url: "https://connectsangam.in/health",
    type: "website",
  },
};

export default function HealthHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Health
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        Public health, plainly explained
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Spending, outcomes, vaccination, and access — what the numbers actually
        say.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <StatCard label="Life expectancy" value="72.7 years" />
        <StatCard label="Govt health spend (% GDP)" value="1.84%" />
        <StatCard label="Out-of-pocket share" value="39.4%" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/health/spending" title="Where India's health spending actually goes" topic="health" />
        <ArticleCard href="/health/air-quality" title="How air quality varies by city" topic="health" />
        <ArticleCard href="/health/vaccination" title="India's vaccination coverage explained" topic="health" />
        <ArticleCard href="/health/ayushman-bharat" title="Ayushman Bharat: who it covers" topic="health" />
      </div>
    </div>
  );
}