import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India vs China: population and growth | DataIndia",
  description:
    "India is now the world's most populous country at 1.47 billion, ahead of China at 1.41 billion. See the key differences in age and urbanisation.",
  openGraph: {
    title: "India vs China: population and growth",
    description: "1.47B vs 1.41B. Compare age, urbanisation, and growth.",
    url: "https://connectsangam.in/india-vs-world/population",
    type: "article",
  },
};

export default function PopulationComparisonArticle() {
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
          India vs China: population and growth
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: World Bank / UN · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="India population" value="1.47 billion" />
          <StatCard label="China population" value="1.41 billion" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India has overtaken China as the world&rsquo;s most populous
            country. India&rsquo;s population is estimated at{" "}
            <strong className="text-[#1A1A2E]">1.47 billion</strong> in 2026,
            while China&rsquo;s population has fallen to{" "}
            <strong className="text-[#1A1A2E]">1.41 billion</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Key differences
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Median age — India</span>
                <span className="font-medium text-[#1A1A2E]">28.4 years</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Median age — China</span>
                <span className="font-medium text-[#1A1A2E]">38.4 years</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Working age — India</span>
                <span className="font-medium text-[#1A1A2E]">67%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Working age — China</span>
                <span className="font-medium text-[#1A1A2E]">63%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Urban share — India</span>
                <span className="font-medium text-[#1A1A2E]">36%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#4A4A5E]">Urban share — China</span>
                <span className="font-medium text-[#1A1A2E]">65%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            World Bank, United Nations Population Division. Figures reflect the
            most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/india-vs-world/growth", title: "How India's growth compares to its neighbours", topic: "world" },
            { href: "/india-vs-world/health-spending", title: "Where India ranks on public health spending", topic: "world" },
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