import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which states grew fastest this year | DataIndia",
  description:
    "Maharashtra leads with 14% of India's GDP, followed by Tamil Nadu and Uttar Pradesh. See the top 5 state economies compared.",
  openGraph: {
    title: "Which states grew fastest this year",
    description: "Top 5 state economies compared. Maharashtra leads at 14%.",
    url: "https://connectsangam.in/states/growth",
    type: "article",
  },
};

export default function StatesGrowthArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            States
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          Which states grew fastest this year
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Statistics · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Top State GSDP" value="₹46.22 lakh cr" />
          <StatCard label="Largest Share" value="14.0% of India" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s states are at different stages of economic
            development.{" "}
            <strong className="text-[#1A1A2E]">Maharashtra</strong> continues to
            lead with a <strong className="text-[#1A1A2E]">14%</strong> share of
            India&rsquo;s GDP.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Top 5 State Economies
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">1. Maharashtra</span>
                <span className="font-medium text-[#1A1A2E]">14.0%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">2. Tamil Nadu</span>
                <span className="font-medium text-[#1A1A2E]">9.4%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">3. Uttar Pradesh</span>
                <span className="font-medium text-[#1A1A2E]">9.0%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">4. Karnataka</span>
                <span className="font-medium text-[#1A1A2E]">~8.7%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">5. Gujarat</span>
                <span className="font-medium text-[#1A1A2E]">~8.2%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Statistics and Programme Implementation, State Economic
            Surveys. Figures reflect the most recent state-level data as of July
            2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/states/per-capita", title: "Per capita income by state, compared", topic: "states" },
            { href: "/states/literacy", title: "Where literacy rates are rising fastest", topic: "states" },
            { href: "/states/poverty", title: "State-wise poverty rates explained", topic: "states" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/states"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to States
          </Link>
        </div>
      </div>
    </article>
  );
}