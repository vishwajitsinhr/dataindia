import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayushman Bharat: who it covers | DataIndia",
  description:
    "Ayushman Bharat PM-JAY covers 12+ crore families with ₹5 lakh/year hospitalisation cover. See who's eligible and what's covered.",
  openGraph: {
    title: "Ayushman Bharat: who it covers",
    description: "₹5 lakh/year cover for 12+ crore families. Who's eligible.",
    url: "https://connectsangam.in/health/ayushman-bharat",
    type: "article",
  },
};

export default function AyushmanBharatArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Health
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          Ayushman Bharat: who it covers
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: National Health Authority · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Families covered" value="12+ crore" />
          <StatCard label="Cover per family" value="₹5 L/year" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            Ayushman Bharat PM-JAY is the world&rsquo;s largest publicly funded
            health insurance scheme. It provides hospitalisation cover of{" "}
            <strong className="text-[#1A1A2E]">₹5 lakh per family per year</strong>{" "}
            to over <strong className="text-[#1A1A2E]">12 crore families</strong>{" "}
            — roughly the bottom 40% of India&rsquo;s population.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Who is eligible
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Families identified by the SECC 2011 deprivation criteria
              (rural and urban occupational categories)
            </li>
            <li>
              All households with a member aged 70 or above, regardless of
              income (from 2024)
            </li>
            <li>
              State-specific additions — many states have expanded coverage
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What is covered
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Hospitalisation:</span>{" "}
              Secondary and tertiary care at empanelled public and private
              hospitals
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Pre-existing conditions:</span>{" "}
              Covered from day one — no waiting period
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Procedures:</span>{" "}
              Covers 1,900+ medical procedures
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Cashless:</span>{" "}
              Beneficiary pays nothing at the point of care
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              💡 <span className="font-medium">Key insight:</span> PM-JAY covers
              only hospitalisation. It does not cover outpatient visits,
              medicines bought at pharmacies, or diagnostic tests done outside
              a hospital. Most out-of-pocket health spending in India is on
              these — which is why the scheme has a limited effect on
              household health costs.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why it matters
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Health shocks:</span>{" "}
              Hospitalisation is one of the biggest causes of debt for poor
              households in India
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">
                Reduces catastrophic spending:
              </span>{" "}
              Studies show PM-JAY reduced catastrophic health expenditure for
              enrolled families
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Evidence gap:</span>{" "}
              Independent evaluations find mixed results on health outcomes,
              with awareness and usage still low in some states
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            National Health Authority (NHA), PM-JAY dashboard; Ministry of
            Health and Family Welfare. Figures reflect the most recent data
            available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/health/spending", title: "Where India's health spending actually goes", topic: "health" },
            { href: "/health/vaccination", title: "India's vaccination coverage explained", topic: "health" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/health"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Health
          </Link>
        </div>
      </div>
    </article>
  );
}