import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How air quality varies by city | DataIndia",
  description:
    "Delhi, Mumbai, Kolkata, and other Indian cities have very different air quality. See the latest AQI figures and health impacts of air pollution.",
  openGraph: {
    title: "How air quality varies by city",
    description: "Compare AQI across Indian cities and see health impacts.",
    url: "https://connectsangam.in/health/air-quality",
    type: "article",
  },
};

export default function AirQualityArticle() {
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
          How air quality varies by city
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Central Pollution Control Board · Last updated September 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Delhi AQI (Sep 2026)" value="118" />
          <StatCard label="Cleanest major city" value="Aizawl" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            Air quality varies significantly across Indian cities and even day
            to day. While Delhi continues to struggle with poor air quality,
            cities in the Northeast and South often have cleaner air. The
            Central Pollution Control Board (CPCB) monitors air quality across
            250+ cities.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            AQI by City (September 2026 snapshot)
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Delhi</span>
                <span className="font-medium text-orange-500">118</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Kolkata</span>
                <span className="font-medium text-red-600">162</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Mumbai</span>
                <span className="font-medium text-yellow-600">76</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Bengaluru</span>
                <span className="font-medium text-green-600">65</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Aizawl (Cleanest)</span>
                <span className="font-medium text-green-600">Clean</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-[#8A8A9E]">
            AQI values are from mid-September 2026 and fluctuate daily. Check
            CPCB live data for current figures.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Health impacts of poor air quality
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Respiratory issues:</span>{" "}
              Increased asthma and bronchitis
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Heart disease:</span>{" "}
              Higher risk of cardiovascular problems
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Reduced life expectancy:</span>{" "}
              Average Indian loses ~5 years of life due to air pollution
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Central Pollution Control Board (CPCB), National Air Quality
            Monitoring Program; IQAir. Figures reflect data from September 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/health/spending", title: "Where India's health spending actually goes", topic: "health" },
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