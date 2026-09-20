import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's demographic dividend explained | DataIndia",
  description:
    "India's median age is 28.4 years, with 67% of the population of working age. Here's what the demographic dividend means and why it matters.",
  openGraph: {
    title: "India's demographic dividend explained",
    description:
      "Median age 28.4. What the demographic dividend means for India.",
    url: "https://connectsangam.in/population/demographic-dividend",
    type: "article",
  },
};

export default function DemographicDividendArticle() {
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
          India&rsquo;s demographic dividend explained
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Census of India · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Median age" value="28.4 years" />
          <StatCard label="Working age" value="67%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s median age is{" "}
            <strong className="text-[#1A1A2E]">28.4 years</strong>, with{" "}
            <strong className="text-[#1A1A2E]">67%</strong> of the population in
            the working age group (15-64). This is India&rsquo;s demographic
            dividend — a unique opportunity for economic growth.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What is the demographic dividend?
          </h2>
          <p>
            The demographic dividend is the economic growth potential that can
            result from shifts in a population&rsquo;s age structure, mainly
            when the working-age population is larger than the non-working-age
            population.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why it matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Growth potential:</span>{" "}
              More workers = more economic activity
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Innovation:</span>{" "}
              Young populations tend to be more innovative
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Challenges:</span>{" "}
              Need to create enough jobs for millions entering the workforce
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Census of India, National Population Register. Figures reflect the
            most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/population/age-visualised", title: "India's population by age, visualised", topic: "population" },
            { href: "/population/urbanisation", title: "How fast is India urbanising", topic: "population" },
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