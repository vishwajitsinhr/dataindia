import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understanding unemployment in India | DataIndia",
  description:
    "India's unemployment rate was 5.1% in July 2026, down from 5.5% in June. See the rural-urban split and what it means.",
  openGraph: {
    title: "Understanding unemployment in India",
    description: "Unemployment at 5.1%. Rural-urban split and what it means.",
    url: "https://connectsangam.in/economy/unemployment",
    type: "article",
  },
};

export default function UnemploymentArticle() {
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
          Understanding unemployment in India
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Statistics (MoSPI) · Last updated August 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Unemployment rate (July 2026)" value="5.1%" />
          <StatCard label="Previous month" value="5.5%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s unemployment rate (UR) for persons aged 15 years and
            above declined to <strong className="text-[#1A1A2E]">5.1%</strong>{" "}
            in July 2026, down from 5.5% in June. This is the lowest reading in
            four months, driven largely by a sharp improvement in rural
            employment.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What is unemployment?
          </h2>
          <p>
            Unemployment is defined as people who are able and willing to work
            but don&rsquo;t have a job. The unemployment rate is calculated as
            the percentage of the labor force that is unemployed.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Rural vs urban
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Rural:</span>{" "}
              Declined to <strong className="text-[#1A1A2E]">4.5%</strong> in
              July from 5.0% in June
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Urban:</span>{" "}
              Remained broadly stable at{" "}
              <strong className="text-[#1A1A2E]">6.7%</strong>
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📊 <span className="font-medium">Key insight:</span> The
              improvement was more pronounced among women, whose unemployment
              rate fell to 5.4% in July from 5.9% in June. For men, the rate
              declined to 5.0% from 5.3%.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why unemployment matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Economic growth:</span>{" "}
              Lower unemployment = more people working = more economic activity
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Social stability:</span>{" "}
              Job creation is essential for social stability
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Government revenue:</span>{" "}
              More workers = more tax revenue
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Statistics and Programme Implementation (MoSPI),
            Periodic Labour Force Survey (PLFS) Monthly Bulletin, July 2026.
            Figures reflect the most recent monthly data available as of August
            2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/economy/repo-rate", title: "What the repo rate means for your EMI", topic: "economy" },
            { href: "/economy/inflation", title: "Is India's inflation actually falling", topic: "economy" },
            { href: "/economy/gdp-growth", title: "How GDP growth is actually measured", topic: "economy" },
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