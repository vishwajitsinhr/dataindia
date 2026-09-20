import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where literacy rates are rising fastest | DataIndia",
  description:
    "Kerala leads with 96.2% literacy. Bihar trails at 63.8%. See the top 5 states and where the biggest gaps remain.",
  openGraph: {
    title: "Where literacy rates are rising fastest",
    description: "Kerala at 96.2%, Bihar at 63.8%. See the top 5 states.",
    url: "https://connectsangam.in/states/literacy",
    type: "article",
  },
};

export default function LiteracyArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            States
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          Where literacy rates are rising fastest
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Census of India · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="National Avg" value="77.7%" />
          <StatCard label="Highest" value="96.2%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s literacy rate stands at{" "}
            <strong className="text-[#1A1A2E]">77.7%</strong>.{" "}
            <strong className="text-[#1A1A2E]">Kerala</strong> continues to lead
            with <strong className="text-[#1A1A2E]">96.2%</strong>, while Bihar
            has the lowest literacy rate at{" "}
            <strong className="text-[#1A1A2E]">63.8%</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Top 5 States by Literacy Rate
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">1. Kerala</span>
                <span className="font-medium text-[#1A1A2E]">96.2%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">2. Lakshadweep</span>
                <span className="font-medium text-[#1A1A2E]">92.3%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">3. Mizoram</span>
                <span className="font-medium text-[#1A1A2E]">91.6%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">4. Delhi</span>
                <span className="font-medium text-[#1A1A2E]">88.7%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">5. Maharashtra</span>
                <span className="font-medium text-[#1A1A2E]">84.8%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why literacy matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Economic growth:</span>{" "}
              Literate populations contribute more to the economy
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Health outcomes:</span>{" "}
              Better health awareness
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Social mobility:</span>{" "}
              Education helps break the poverty cycle
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Census of India, National Family Health Survey (NFHS). Figures
            reflect the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/states/growth", title: "Which states grew fastest this year", topic: "states" },
            { href: "/states/per-capita", title: "Per capita income by state, compared", topic: "states" },
            { href: "/states/poverty", title: "State-wise poverty rates explained", topic: "states" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/states"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to States
          </Link>
        </div>
      </div>
    </article>
  );
}