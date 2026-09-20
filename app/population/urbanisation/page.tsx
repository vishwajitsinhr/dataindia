import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How fast is India urbanising? | DataIndia",
  description:
    "36% of Indians live in cities, growing at 2.3% per year. See which cities are growing fastest and the challenges that come with it.",
  openGraph: {
    title: "How fast is India urbanising?",
    description:
      "36% of Indians live in cities. Here's the urbanisation story.",
    url: "https://connectsangam.in/population/urbanisation",
    type: "article",
  },
};

export default function UrbanisationArticle() {
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
          How fast is India urbanising
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Census of India · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Urban population" value="36%" />
          <StatCard label="Growth rate" value="2.3% yearly" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India is urbanising rapidly. Currently,{" "}
            <strong className="text-[#1A1A2E]">36%</strong> of Indians live in
            cities, and this number is growing at{" "}
            <strong className="text-[#1A1A2E]">2.3%</strong> annually. By 2036,
            over <strong className="text-[#1A1A2E]">40%</strong> of India&rsquo;s
            population is expected to live in urban areas.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Fastest growing cities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Tier 2 cities:</span>{" "}
              Surat, Pune, and Ahmedabad are growing fastest
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Mumbai:</span> Still
              the largest, but growth is slowing
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Bangalore:</span>{" "}
              Tech hub continues to attract talent
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Challenges of urbanisation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Housing:</span> Need
              for affordable housing in cities
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Infrastructure:</span>{" "}
              Roads, transport, and utilities are under pressure
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Environment:</span>{" "}
              Pollution and waste management challenges
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Census of India, Ministry of Housing and Urban Affairs. Figures
            reflect the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/population/age-visualised", title: "India's population by age, visualised", topic: "population" },
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