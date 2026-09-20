import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How India's agricultural exports are growing | DataIndia",
  description:
    "India's agri exports reached $52.55 billion in FY26, up 2.8%. See the top export categories — rice, marine products, and spices.",
  openGraph: {
    title: "How India's agricultural exports are growing",
    description: "$52.55 billion in FY26. Top exports breakdown.",
    url: "https://connectsangam.in/agriculture/exports",
    type: "article",
  },
};

export default function ExportsArticle() {
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
          How India&rsquo;s agricultural exports are growing
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Department of Commerce · Last updated June 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Agri exports (FY26)" value="$52.55B" />
          <StatCard label="Growth (YoY)" value="2.8%" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s agricultural exports reached a record{" "}
            <strong className="text-[#1A1A2E]">$52.55 billion</strong> in FY
            2025-26, growing <strong className="text-[#1A1A2E]">2.8%</strong>{" "}
            year-on-year from $51.12 billion in FY 2024-25, according to
            Department of Commerce data.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Top exports
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Rice:</span> India
              remains the world&rsquo;s largest exporter of rice, shipping{" "}
              <strong className="text-[#1A1A2E]">$11.5 billion</strong> worth
              in FY26.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Marine products:</span>{" "}
              A standout performer, exports surged{" "}
              <strong className="text-[#1A1A2E]">13.4%</strong> to{" "}
              <strong className="text-[#1A1A2E]">$8.4 billion</strong>, driven
              by new markets in Europe and Southeast Asia.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Spices:</span> Exports
              reached <strong className="text-[#1A1A2E]">$4.4 billion</strong>,
              maintaining strong global demand.
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📈 <span className="font-medium">Key insight:</span> Growth is
              being driven by high-value segments like marine products and
              processed foods. Free Trade Agreements with the UK, UAE, and
              Australia are opening new markets for Indian exporters.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Department of Commerce, Ministry of Commerce and Industry, Government
            of India. Figures reflect final data for FY 2025-26, as reported by
            PIB in June 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/agriculture/production", title: "India's food grain production explained", topic: "agriculture" },
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