import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's food grain production explained | DataIndia",
  description:
    "India produced a record 376.56 million tonnes of food grains in 2025-26, up 5.3% from last year. See the crop-by-crop breakdown.",
  openGraph: {
    title: "India's food grain production explained",
    description: "Record 376.56 MT in 2025-26. Crop-by-crop breakdown.",
    url: "https://connectsangam.in/agriculture/production",
    type: "article",
  },
};

export default function ProductionArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Agriculture
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          India&rsquo;s food grain production explained
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Agriculture (Third Advance Estimates) · Last updated May 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Total production" value="376.56 MT" />
          <StatCard label="Rice production" value="154.02 MT" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s total food grain production reached a record{" "}
            <strong className="text-[#1A1A2E]">376.56 million tonnes</strong> in
            2025-26, a jump of{" "}
            <strong className="text-[#1A1A2E]">5.3%</strong> over last
            year&rsquo;s 357.73 million tonnes. This is the highest-ever food
            grain output in India&rsquo;s history.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Major food grains
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Rice</span>
                <span className="font-display text-xl font-semibold text-[#1A4A42]">
                  154.02 MT
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Wheat</span>
                <span className="font-display text-xl font-semibold text-[#1A4A42]">
                  120.66 MT
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Maize</span>
                <span className="font-display text-xl font-semibold text-[#1A4A42]">
                  55.09 MT
                </span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Pulses</span>
                <span className="font-display text-xl font-semibold text-[#1A4A42]">
                  27.41 MT
                </span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why it matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Food security:</span>{" "}
              Higher production means less dependence on imports and a stable
              buffer stock.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Farmer income:</span>{" "}
              Better production often leads to better income, supported by MSP
              procurement.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Exports:</span>{" "}
              Surplus production can be exported, strengthening India&rsquo;s
              position in global food trade.
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              🌾 <span className="font-medium">Key insight:</span> India is now
              the world&rsquo;s largest rice producer, surpassing China with a
              record 154 million tonne harvest. Wheat output hit a five-year
              high, and maize reached an all-time record.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Agriculture and Farmers Welfare, Third Advance Estimates
            for 2025-26. Data released via PIB on 27 May 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/agriculture/exports", title: "How India's agricultural exports are growing", topic: "agriculture" },
            { href: "/agriculture/farmer-income", title: "Farmer income and support in India", topic: "agriculture" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/agriculture"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Agriculture
          </Link>
        </div>
      </div>
    </article>
  );
}