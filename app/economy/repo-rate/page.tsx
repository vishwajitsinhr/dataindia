import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What the repo rate means for your EMI | DataIndia",
  description:
    "The repo rate is 5.25%. See how it affects your home loan EMI, with an example calculation and current RBI policy context.",
  openGraph: {
    title: "What the repo rate means for your EMI",
    description: "The repo rate is 5.25%. See how it affects your EMI.",
    url: "https://connectsangam.in/economy/repo-rate",
    type: "article",
  },
};

export default function RepoRateArticle() {
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
          What the repo rate means for your EMI
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Reserve Bank of India · Last updated April 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Current repo rate" value="5.25%" />
          <StatCard label="Change since Dec 2024" value="-1.25%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            The repo rate is the interest rate at which the Reserve Bank of
            India lends money to commercial banks. As of April 2026, the repo
            rate stands at <strong className="text-[#1A1A2E]">5.25%</strong>.
            The RBI has cut the rate by a cumulative 125 basis points (1.25%)
            since December 2024, bringing it down from 6.50%.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why it matters to you
          </h2>
          <p>
            If you have a home loan or any loan with a floating interest rate,
            a change in the repo rate can directly change your EMI. A lower
            repo rate generally means lower EMIs over time, while a higher rate
            means the opposite.
          </p>
        </div>

        <div className="mt-8 bg-white border border-[#F0EDE8] rounded-2xl p-6">
          <h3 className="font-display text-xl font-semibold text-[#1A1A2E] mb-4">
            EMI Impact Example
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
              <span className="text-[#8A8A9E]">Loan amount</span>
              <span className="font-medium text-[#1A1A2E]">₹50,00,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
              <span className="text-[#8A8A9E]">Tenure</span>
              <span className="font-medium text-[#1A1A2E]">20 years</span>
            </div>
            <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
              <span className="text-[#8A8A9E]">EMI at 5.25%</span>
              <span className="font-medium text-[#1A4A42]">₹33,694</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-[#8A8A9E]">EMI at 6.50%</span>
              <span className="font-medium text-[#C8794A]">₹37,281</span>
            </div>
          </div>
          <p className="text-xs text-[#8A8A9E] mt-4">
            A 1.25% rate cut has saved you ~₹3,587 per month on this loan
          </p>
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            The bigger picture
          </h2>
          <p>
            The RBI adjusts the repo rate mainly to control inflation. The
            RBI&rsquo;s inflation target is{" "}
            <strong className="text-[#1A1A2E]">4%</strong> with a tolerance
            band of ±2%. When inflation rises above the target, the RBI may
            raise rates to cool down the economy. Currently, inflation has been
            below the target, with CPI at{" "}
            <strong className="text-[#1A1A2E]">3.48%</strong> in April 2026.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What to watch for
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">MPC meetings:</span>{" "}
              The Monetary Policy Committee meets every 2 months. The next
              meeting is scheduled for June 3-5, 2026.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Inflation data:</span>{" "}
              The RBI&rsquo;s target is 4% inflation. Higher inflation usually
              means higher rates.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Global trends:</span>{" "}
              US Fed rate changes often influence RBI decisions.
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Reserve Bank of India, Monetary Policy Committee statements (April
            2026). Figures reflect the most recent policy announcement.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/economy/inflation", title: "Is India's inflation actually falling", topic: "economy" },
            { href: "/economy/gdp-growth", title: "How GDP growth is actually measured", topic: "economy" },
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