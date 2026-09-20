import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India vs Brazil: emerging economies compared | DataIndia",
  description:
    "India grows at 7.7% vs Brazil's 2.5%. Compare the two largest emerging economies on growth, population, and median age.",
  openGraph: {
    title: "India vs Brazil: emerging economies compared",
    description: "India 7.7% vs Brazil 2.5%. Full comparison.",
    url: "https://connectsangam.in/india-vs-world/vs-brazil",
    type: "article",
  },
};

export default function VsBrazilArticle() {
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
          India vs Brazil: emerging economies compared
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: World Bank · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="India GDP growth" value="7.7%" />
          <StatCard label="Brazil GDP growth" value="2.5%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India and Brazil are two of the world&rsquo;s largest emerging
            economies. India&rsquo;s GDP growth of{" "}
            <strong className="text-[#1A1A2E]">7.7%</strong> far outpaces
            Brazil&rsquo;s <strong className="text-[#1A1A2E]">2.5%</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Key comparisons
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">GDP growth:</span>{" "}
              India 7.7% vs Brazil 2.5%
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Population:</span>{" "}
              India 1.47B vs Brazil 216M
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Median age:</span>{" "}
              India 28.4 vs Brazil 33.5
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            World Bank, IMF World Economic Outlook. Figures reflect the most
            recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/india-vs-world/growth", title: "How India's growth compares to its neighbours", topic: "world" },
            { href: "/india-vs-world/health-spending", title: "Where India ranks on public health spending", topic: "world" },
            { href: "/india-vs-world/population", title: "India vs China: population and growth", topic: "world" },
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