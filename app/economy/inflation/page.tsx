import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is India's inflation actually falling? | DataIndia",
  description:
    "India's CPI inflation was 4.45% in July 2026, up from 3.93% in May. See the monthly trend and what it means for your savings and EMIs.",
  openGraph: {
    title: "Is India's inflation actually falling?",
    description: "CPI inflation at 4.45%. See the latest data and what it means.",
    url: "https://connectsangam.in/economy/inflation",
    type: "article",
  },
};

export default function InflationArticle() {
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
          Is India&rsquo;s inflation actually falling
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Statistics (MoSPI) · Last updated August 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="CPI Inflation (July 2026)" value="4.45%" />
          <StatCard label="RBI target" value="4%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s retail inflation (CPI) rose to{" "}
            <strong className="text-[#1A1A2E]">4.45%</strong> in July 2026, up
            from 4.38% in June and 3.93% in May. After a period of unusually low
            inflation in early 2026, prices are now climbing back toward the
            RBI&rsquo;s 4% target.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What is CPI inflation?
          </h2>
          <p>
            CPI (Consumer Price Index) measures the average change in prices paid
            by consumers for goods and services. When CPI rises, your money buys
            less than it used to. When it falls, your purchasing power increases.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Recent monthly trend
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">May 2026</span>
                <span className="font-medium text-[#1A4A42]">3.93%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">June 2026</span>
                <span className="font-medium text-[#1A4A42]">4.38%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">July 2026</span>
                <span className="font-medium text-[#C8794A]">4.45%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why inflation matters to you
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Your money&rsquo;s value:</span>{" "}
              Higher inflation means your savings buy less
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">EMI payments:</span>{" "}
              Banks may raise rates to combat inflation
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Wages:</span> Your
              salary may not keep up with rising prices
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📊 <span className="font-medium">Key insight:</span> Food inflation
              is a major driver, with the Consumer Food Price Index (CFPI) at
              5.52% in July 2026, well above general CPI. The RBI&rsquo;s target
              is 4% with a tolerance band of ±2%.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What&rsquo;s next
          </h2>
          <p>
            The RBI aims for 4% inflation. With inflation now at 4.45%, slightly
            above the target, the RBI may hold rates steady rather than cutting
            them. The Monetary Policy Committee meets every two months to review
            the situation.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Statistics and Programme Implementation (MoSPI), CPI
            data. Figures reflect the provisional data for July 2026, released
            on 12 August 2026.
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