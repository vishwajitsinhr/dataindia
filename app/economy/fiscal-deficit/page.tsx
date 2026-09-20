import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What the fiscal deficit means for you | DataIndia",
  description:
    "India's fiscal deficit was 4.4% of GDP in FY26, beating the 4.5% target. Here's what it means for taxes, borrowing, and inflation.",
  openGraph: {
    title: "What the fiscal deficit means for you",
    description: "Fiscal deficit at 4.4% of GDP. What it means for you.",
    url: "https://connectsangam.in/economy/fiscal-deficit",
    type: "article",
  },
};

export default function FiscalDeficitArticle() {
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
          What the fiscal deficit means for you
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Finance · Last updated June 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Fiscal deficit (FY26)" value="4.4% of GDP" />
          <StatCard label="Target (FY27)" value="4.3% of GDP" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            The fiscal deficit is the difference between what the government
            earns and what it spends. When the government spends more than it
            earns, it borrows money — adding to the country&rsquo;s debt. For
            FY 2025-26, India&rsquo;s fiscal deficit stood at{" "}
            <strong className="text-[#1A1A2E]">4.4%</strong> of GDP, in line
            with the government&rsquo;s revised estimates. The government has
            set a target of <strong className="text-[#1A1A2E]">4.3%</strong>{" "}
            for FY 2026-27.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why does it matter?
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Higher borrowing:</span>{" "}
              The government borrows from banks, leaving less money for
              businesses
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Higher taxes:</span>{" "}
              The government may need to raise taxes to cover the deficit
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Inflation:</span>{" "}
              Too much borrowing can fuel inflation
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What the government is doing
          </h2>
          <p>
            India has met its fiscal deficit target of below 4.5% of GDP for
            2025-26, fulfilling a commitment made in 2021-22. From 2026-27
            onwards, the government has shifted its focus from a rigid fiscal
            deficit target to a{" "}
            <strong className="text-[#1A1A2E]">debt-to-GDP ratio</strong> as
            the new fiscal anchor, aiming to bring central government debt down
            to about 50% of GDP by 2031.
          </p>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📊 <span className="font-medium">Key insight:</span>{" "}
              India&rsquo;s fiscal deficit was ₹15.19 trillion in FY26, which
              is 97.5% of the revised estimates presented in February 2026. The
              government is now targeting a debt-to-GDP ratio of 55.6% for
              FY27.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Finance, Union Budget documents and FRBM statements.
            Figures reflect the final data for FY 2025-26 and budget estimates
            for FY 2026-27, as reported in June 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/economy/repo-rate", title: "What the repo rate means for your EMI", topic: "economy" },
            { href: "/economy/gdp-growth", title: "How GDP growth is actually measured", topic: "economy" },
            { href: "/economy/unemployment", title: "Understanding unemployment in India", topic: "economy" },
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