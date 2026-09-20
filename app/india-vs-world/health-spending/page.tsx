import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where India ranks on public health spending | DataIndia",
  description:
    "India spends 3.8% of GDP on health, far below the global average. Compare with the US, Germany, China, and Brazil.",
  openGraph: {
    title: "Where India ranks on public health spending",
    description: "India at 3.8% of GDP vs US, Germany, China, Brazil.",
    url: "https://connectsangam.in/india-vs-world/health-spending",
    type: "article",
  },
};

export default function HealthSpendingComparisonArticle() {
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
          Where India ranks on public health spending
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: National Health Accounts / World Bank · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="India health spend" value="3.8% of GDP" />
          <StatCard label="Government share" value="1.9% of GDP" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s total health expenditure (THE) stood at{" "}
            <strong className="text-[#1A1A2E]">3.8%</strong> of GDP in 2021-22,
            according to the National Health Accounts (NHA) estimates released
            in May 2026. This includes spending by government, private sector,
            and households.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Government vs Total Spending
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Total health expenditure (THE)</span>
                <span className="font-medium text-[#1A4A42]">3.8% of GDP</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Government health expenditure (GHE)</span>
                <span className="font-medium text-[#1A4A42]">1.9% of GDP</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Out-of-pocket (OOPE)</span>
                <span className="font-medium text-[#1A4A42]">43.4% of THE</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">NHP 2017 target (public)</span>
                <span className="font-medium text-[#C8794A]">2.5% of GDP</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Health Spending Comparison (2025)
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇺🇸 USA</span>
                <span className="font-medium text-[#1A1A2E]">16.45%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇩🇪 Germany</span>
                <span className="font-medium text-[#1A1A2E]">11.92%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇧🇷 Brazil</span>
                <span className="font-medium text-[#1A1A2E]">9.60%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">🇨🇳 China</span>
                <span className="font-medium text-[#1A1A2E]">6.26%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">🇮🇳 India</span>
                <span className="font-medium text-[#C8794A]">3.61%</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#8A8A9E]">
            India&rsquo;s 3.61% figure is from World Bank data for 2025. The
            government&rsquo;s NHA estimate for total health spending is 3.8% of
            GDP (2021-22).
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What this means
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Low public spending:</span>{" "}
              Government health spending is about 1.9% of GDP, well below the
              National Health Policy target of 2.5%
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Out-of-pocket burden:</span>{" "}
              Households still bear 43.4% of total health costs, though this has
              declined from 64.2% in 2014-15
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Global gap:</span>{" "}
              India spends far less on health than major economies like the US,
              Germany, and China
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            National Health Accounts (NHA) Estimates for India 2022-23,
            Ministry of Health and Family Welfare; World Bank Health Expenditure
            Database. Figures reflect the most recent data available as of July
            2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/india-vs-world/growth", title: "How India's growth compares to its neighbours", topic: "world" },
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