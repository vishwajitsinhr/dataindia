import { ArticleCard, StatCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's economy, in numbers that make sense | DataIndia",
  description:
    "Repo rate, inflation, GDP growth, fiscal deficit, unemployment, and UPI — India's key economic indicators explained simply.",
  openGraph: {
    title: "India's economy, in numbers that make sense",
    description: "Repo rate, inflation, GDP, fiscal deficit, unemployment — explained simply.",
    url: "https://connectsangam.in/economy",
    type: "website",
  },
};

export default function EconomyHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Economy
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        India&rsquo;s economy, in numbers that make sense
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Repo rate, inflation, GDP, fiscal deficit, unemployment — what they
        mean and why they change.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <StatCard label="Repo rate" value="5.25%" />
        <StatCard label="Inflation (CPI)" value="4.82%" />
        <StatCard label="GDP growth (Q1 FY27)" value="7.8%" />
        <StatCard label="Fiscal deficit" value="26.8% of target" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/economy/repo-rate" title="What the repo rate means for your EMI" topic="economy" />
        <ArticleCard href="/economy/inflation" title="Is India's inflation actually falling" topic="economy" />
        <ArticleCard href="/economy/fiscal-deficit" title="What the fiscal deficit means for you" topic="economy" />
        <ArticleCard href="/economy/gdp-growth" title="How GDP growth is actually measured" topic="economy" />
        <ArticleCard href="/economy/unemployment" title="Understanding unemployment in India" topic="economy" />
        <ArticleCard href="/economy/upi-payments" title="UPI is still free for you — but merchants now pay a small fee" topic="economy" />
      </div>
    </div>
  );
}