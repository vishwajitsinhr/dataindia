import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's literacy gender gap, explained | DataIndia",
  description:
    "Male literacy is 84.7% vs female literacy at 70.3% — a gap of 14 percentage points. See how it varies by state and why it matters.",
  openGraph: {
    title: "India's literacy gender gap, explained",
    description:
      "Male 84.7% vs female 70.3%. See the gap by state and why it matters.",
    url: "https://connectsangam.in/population/literacy-gender-gap",
    type: "article",
  },
};

export default function LiteracyGenderGapArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Population
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          India&rsquo;s literacy gender gap, explained
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Census of India / NFHS · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Male literacy" value="84.7%" />
          <StatCard label="Female literacy" value="70.3%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s overall literacy rate is 77.7%, but it hides a wide
            gender gap. Male literacy stands at{" "}
            <strong className="text-[#1A1A2E]">84.7%</strong>, while female
            literacy is <strong className="text-[#1A1A2E]">70.3%</strong> — a
            gap of roughly 14 percentage points.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            How the gap varies by state
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Kerala</span>
                <span className="font-medium text-[#1A4A42]">~4 pts gap</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Maharashtra</span>
                <span className="font-medium text-[#1A4A42]">~10 pts gap</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Rajasthan</span>
                <span className="font-medium text-[#C8794A]">~20 pts gap</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Bihar</span>
                <span className="font-medium text-[#C8794A]">~19 pts gap</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why it matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">
                Workforce participation:
              </span>{" "}
              Female literacy is closely linked to female labour force
              participation
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Child outcomes:</span>{" "}
              Educated mothers have healthier children and lower child mortality
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Income:</span> Each
              additional year of schooling raises lifetime earnings
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📚 <span className="font-medium">Key insight:</span> The gap has
              narrowed over the last two decades. In 2001, female literacy was
              53.7% vs male 75.3% — a gap of 21.6 points. Today it&rsquo;s
              closer to 14 points.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Census of India; National Family Health Survey (NFHS-5 and NFHS-6).
            Figures reflect the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/population/age-visualised", title: "India's population by age, visualised", topic: "population" },
            { href: "/states/literacy", title: "Where literacy rates are rising fastest", topic: "states" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/population"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Population
          </Link>
        </div>
      </div>
    </article>
  );
}