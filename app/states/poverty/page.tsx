import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "State-wise poverty rates explained | DataIndia",
  description:
    "India's poverty rate is 14.2%. Kerala has the lowest at 5.6%, Bihar the highest at 33.7%. See the state-by-state picture.",
  openGraph: {
    title: "State-wise poverty rates explained",
    description: "National average 14.2%. Kerala lowest, Bihar highest.",
    url: "https://connectsangam.in/states/poverty",
    type: "article",
  },
};

export default function PovertyArticle() {
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
          State-wise poverty rates explained
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: NITI Aayog · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="National avg" value="14.2%" />
          <StatCard label="Lowest" value="5.6% (Kerala)" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s poverty rate varies significantly by state. The
            national average is{" "}
            <strong className="text-[#1A1A2E]">14.2%</strong>, with Kerala
            having the lowest poverty rate at{" "}
            <strong className="text-[#1A1A2E]">5.6%</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Key states
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Lowest poverty:</span>{" "}
              Kerala (5.6%)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Highest poverty:</span>{" "}
              Bihar (33.7%)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">National average:</span>{" "}
              14.2%
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            NITI Aayog, National Multidimensional Poverty Index. Figures reflect
            the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/states/growth", title: "Which states grew fastest this year", topic: "states" },
            { href: "/states/per-capita", title: "Per capita income by state, compared", topic: "states" },
            { href: "/states/literacy", title: "Where literacy rates are rising fastest", topic: "states" },
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