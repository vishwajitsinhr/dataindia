import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's population by age, visualised | DataIndia",
  description:
    "67% of Indians are of working age (15-64). See the full age breakdown — children, working age, and elderly — and why it matters.",
  openGraph: {
    title: "India's population by age, visualised",
    description: "67% of Indians are working age. See the full breakdown.",
    url: "https://connectsangam.in/population/age-visualised",
    type: "article",
  },
};

export default function PopulationAgeArticle() {
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
          India&rsquo;s population by age, visualised
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Census of India / World Bank · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Median age" value="28.4 years" />
          <StatCard label="Youth (0-24)" value="42%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India has one of the youngest populations in the world. With a
            median age of{" "}
            <strong className="text-[#1A1A2E]">28.4 years</strong>, India&rsquo;s
            demographic dividend is a key factor in the country&rsquo;s growth
            story.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Age distribution breakdown
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#4A4A5E]">Children (0-14)</span>
                  <span className="font-medium text-[#1A1A2E]">26%</span>
                </div>
                <div className="w-full bg-[#F0EDE8] rounded-full h-2.5">
                  <div
                    className="bg-[#1A4A42] h-2.5 rounded-full"
                    style={{ width: "26%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#4A4A5E]">Working age (15-64)</span>
                  <span className="font-medium text-[#1A1A2E]">67%</span>
                </div>
                <div className="w-full bg-[#F0EDE8] rounded-full h-2.5">
                  <div
                    className="bg-[#1A4A42] h-2.5 rounded-full"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#4A4A5E]">Elderly (65+)</span>
                  <span className="font-medium text-[#1A1A2E]">7%</span>
                </div>
                <div className="w-full bg-[#F0EDE8] rounded-full h-2.5">
                  <div
                    className="bg-[#C8794A] h-2.5 rounded-full"
                    style={{ width: "7%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What this means for India
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Opportunity:</span>{" "}
              A young workforce can drive economic growth
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Challenge:</span>{" "}
              Need to create enough jobs for millions entering the workforce
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Education:</span>{" "}
              Investment in education is critical
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Census of India, National Population Register, World Bank. Figures
            reflect the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/population/urbanisation", title: "How fast is India urbanising", topic: "population" },
            { href: "/population/demographic-dividend", title: "India's demographic dividend explained", topic: "population" },
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