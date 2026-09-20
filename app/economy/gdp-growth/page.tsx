import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How GDP growth is actually measured | DataIndia",
  description:
    "India's GDP grew 7.7% in FY26, the fastest among major economies. Here's how GDP is calculated and what drives India's growth.",
  openGraph: {
    title: "How GDP growth is actually measured",
    description: "GDP grew 7.7% in FY26. How it's measured and what drives it.",
    url: "https://connectsangam.in/economy/gdp-growth",
    type: "article",
  },
};

export default function GDPGrowthArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Economy
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          How GDP growth is actually measured
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Statistics (MoSPI) · Last updated June 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="GDP Growth (FY26)" value="7.7%" />
          <StatCard label="Previous year" value="7.1%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s Real GDP growth for FY 2025-26 is estimated at{" "}
            <strong className="text-[#1A1A2E]">7.7%</strong>, up from 7.1% in
            the previous fiscal year, according to the National Statistical
            Office (NSO). This makes India the fastest-growing major economy for
            the fourth consecutive year.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            How is GDP calculated?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Production method:</span>{" "}
              Adding up the value of everything produced (GVA)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Expenditure method:</span>{" "}
              Adding up everything spent
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What drives India&rsquo;s GDP growth
          </h2>
          <p className="text-sm">
            According to the Economic Survey 2025-26, the sectoral composition
            of India&rsquo;s economy is:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Services:</span>{" "}
              51.1% of GDP
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Industry:</span>{" "}
              24.3% of GDP
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Agriculture:</span>{" "}
              15.2% of GDP
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📊 <span className="font-medium">Key insight:</span> The secondary
              and tertiary sectors were the main drivers of growth in FY26,
              registering growth of 8.8% and 9.3% respectively. Manufacturing
              and financial services both achieved double-digit growth.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What GDP growth means for you
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Jobs:</span> Higher
              growth usually means more jobs
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Wages:</span>{" "}
              Companies earn more and can pay more
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Investments:</span>{" "}
              Your investments grow with the economy
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Statistics and Programme Implementation (MoSPI),
            National Accounts Statistics. Figures reflect provisional estimates
            for FY 2025-26, as released in May 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/economy/repo-rate", title: "What the repo rate means for your EMI", topic: "economy" },
            { href: "/economy/inflation", title: "Is India's inflation actually falling", topic: "economy" },
            { href: "/economy/fiscal-deficit", title: "What the fiscal deficit means for you", topic: "economy" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/economy"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Economy
          </Link>
        </div>
      </div>
    </article>
  );
}