import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where India's health spending actually goes | DataIndia",
  description:
    "India's government health spending is 1.84% of GDP, with 39.4% of health costs paid out-of-pocket. Here's where the money goes.",
  openGraph: {
    title: "Where India's health spending actually goes",
    description: "1.84% of GDP on health. Where the money goes.",
    url: "https://connectsangam.in/health/spending",
    type: "article",
  },
};

export default function HealthSpendingArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Health
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          Where India&rsquo;s health spending actually goes
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Health &amp; Family Welfare · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Govt health spend (% GDP)" value="1.84%" />
          <StatCard label="Out-of-pocket share" value="39.4%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s government health expenditure (GHE) stood at{" "}
            <strong className="text-[#1A1A2E]">1.84%</strong> of GDP in 2021-22,
            up from 1.13% in 2014-15, according to National Health Accounts
            estimates. Total health spending (including private) is around{" "}
            <strong className="text-[#1A1A2E]">3.8%</strong> of GDP. Out-of-pocket
            expenditure has declined but remains a major burden at{" "}
            <strong className="text-[#1A1A2E]">39.4%</strong> of total health
            spending.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Where does the money go?
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Primary healthcare</span>
                <span className="font-medium text-[#1A1A2E]">~45%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Secondary &amp; tertiary care</span>
                <span className="font-medium text-[#1A1A2E]">~45%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Governance &amp; administration</span>
                <span className="font-medium text-[#1A1A2E]">~10%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Capital formation</span>
                <span className="font-medium text-[#1A1A2E]">Included above</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Key health indicators
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Life expectancy:</span>{" "}
              72.7 years (2026)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Infant mortality rate:</span>{" "}
              27 per 1,000 live births (declining from 39 a decade ago)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Maternal mortality:</span>{" "}
              88 per 100,000 live births (down from 130 a decade ago)
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📊 <span className="font-medium">Key insight:</span> The Union
              Health Budget for 2026-27 is ₹1.06 lakh crore, which is about{" "}
              <strong>0.26% of GDP</strong> — well short of the National Health
              Policy target of 2.5% of GDP by 2025. Experts argue India needs to
              raise public health spending to at least 2.5-3% of GDP to reduce
              out-of-pocket costs.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            National Health Accounts (NHA) Estimates for India 2022-23,
            Ministry of Health and Family Welfare; Registrar General of India
            (SRS Bulletin); PIB. Figures reflect the most recent data available
            as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/health/air-quality", title: "How air quality varies by city", topic: "health" },
            { href: "/health/vaccination", title: "India's vaccination coverage explained", topic: "health" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/health"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Health
          </Link>
        </div>
      </div>
    </article>
  );
}