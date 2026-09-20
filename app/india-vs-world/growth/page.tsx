import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How India's growth compares to its neighbours | DataIndia",
  description:
    "India grows at 7.7%, faster than China (4.4%), Bangladesh (3.9%), Pakistan (3.0%), and Sri Lanka (3.6%). See the full comparison.",
  openGraph: {
    title: "How India's growth compares to its neighbours",
    description: "India at 7.7% vs China, Bangladesh, Pakistan, Sri Lanka.",
    url: "https://connectsangam.in/india-vs-world/growth",
    type: "article",
  },
};

export default function GrowthComparisonArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            India vs World
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          How India&rsquo;s growth compares to its neighbours
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: World Bank / IMF · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="India GDP growth (FY26)" value="7.7%" />
          <StatCard label="China GDP growth (2026)" value="4.4%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s <strong className="text-[#1A1A2E]">7.7%</strong> GDP
            growth in FY 2025-26 remains the fastest among major economies.
            China is projected to grow at{" "}
            <strong className="text-[#1A1A2E]">4.4%</strong> in 2026, while
            Bangladesh is forecast at{" "}
            <strong className="text-[#1A1A2E]">3.9%</strong>, Pakistan at{" "}
            <strong className="text-[#1A1A2E]">3.0%</strong>, and Sri Lanka at{" "}
            <strong className="text-[#1A1A2E]">3.6%</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            GDP Growth Comparison (2026 estimates)
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇮🇳 India (FY26 actual)</span>
                <span className="font-medium text-[#1A4A42]">7.7%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇨🇳 China (2026 forecast)</span>
                <span className="font-medium text-[#1A1A2E]">4.4%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇧🇩 Bangladesh (FY26)</span>
                <span className="font-medium text-[#1A1A2E]">3.9%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇱🇰 Sri Lanka (2026)</span>
                <span className="font-medium text-[#1A1A2E]">3.6%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">🇵🇰 Pakistan (FY26)</span>
                <span className="font-medium text-[#1A1A2E]">3.0%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What&rsquo;s next for India
          </h2>
          <p>
            The World Bank projects India&rsquo;s growth to moderate to{" "}
            <strong className="text-[#1A1A2E]">6.6%</strong> in FY 2026-27
            before rebounding to{" "}
            <strong className="text-[#1A1A2E]">7.2%</strong> in FY 2027-28,
            driven by firming domestic demand and a pickup in exports.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why India is growing faster
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Demographic dividend:</span>{" "}
              Young population drives productivity
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Digital transformation:</span>{" "}
              Rapid digitization across sectors
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Infrastructure investment:</span>{" "}
              Massive government spending on roads and railways
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            World Bank Global Economic Prospects (June 2026); IMF World Economic
            Outlook Update (July 2026). Figures reflect the most recent data
            available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/india-vs-world/health-spending", title: "Where India ranks on public health spending", topic: "world" },
            { href: "/india-vs-world/population", title: "India vs China: population and growth", topic: "world" },
            { href: "/india-vs-world/vs-brazil", title: "India vs Brazil: emerging economies compared", topic: "world" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/india-vs-world"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to India vs World
          </Link>
        </div>
      </div>
    </article>
  );
}