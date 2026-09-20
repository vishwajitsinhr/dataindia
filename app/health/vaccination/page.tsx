import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India's vaccination coverage explained | DataIndia",
  description:
    "India achieved 97.9% full immunisation in 2025-26, covering 2.67 crore children annually. See the vaccine breakdown and new initiatives.",
  openGraph: {
    title: "India's vaccination coverage explained",
    description:
      "97.9% full immunisation. See the vaccine-by-vaccine breakdown.",
    url: "https://connectsangam.in/health/vaccination",
    type: "article",
  },
};

export default function VaccinationArticle() {
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
          India&rsquo;s vaccination coverage explained
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Health &amp; Family Welfare · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Full immunisation (2025-26)" value="97.9%" />
          <StatCard label="Children covered annually" value="2.67 crore" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            India&rsquo;s national full immunisation coverage (FIC) stood at{" "}
            <strong className="text-[#1A1A2E]">97.9%</strong> in 2025-26,
            maintaining above 90% for the fourth consecutive year. The Universal
            Immunization Programme (UIP) reaches{" "}
            <strong className="text-[#1A1A2E]">2.67 crore newborns</strong> and{" "}
            <strong className="text-[#1A1A2E]">2.9 crore pregnant women</strong>{" "}
            annually, protecting against 12 vaccine-preventable diseases.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            National Full Immunisation Coverage
          </h2>
          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">2022-23</span>
                <span className="font-medium text-[#1A4A42]">94.7%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">2023-24</span>
                <span className="font-medium text-[#1A4A42]">93.7%</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">2024-25</span>
                <span className="font-medium text-[#1A4A42]">98.3%</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">2025-26</span>
                <span className="font-medium text-[#C8794A]">97.9%</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Key vaccines under UIP
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">BCG:</span> For
              tuberculosis
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">DPT/Pentavalent:</span>{" "}
              For diphtheria, pertussis, tetanus, hepatitis B, and Hib
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Polio:</span> India
              is polio-free since 2014
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Measles-Rubella:</span>{" "}
              Second dose coverage improved to 71.8% (NFHS-6)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Rotavirus:</span>{" "}
              Coverage more than doubled to 85.4% (NFHS-6)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">PCV:</span> For
              pneumococcal pneumonia
            </li>
          </ul>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Recent initiatives (2026)
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">HPV campaign:</span>{" "}
              Launched February 2026 for ~1.2 crore girls aged 14 years across
              all states and UTs. 52.1 lakh girls vaccinated as of July 15, 2026.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Indigenous Td vaccine:</span>{" "}
              Launched February 2026, with 55 lakh doses supplied by April 2026.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">U-WIN platform:</span>{" "}
              Digital vaccination registry with 11.87 crore children and 3.96
              crore pregnant women registered as of March 2026.
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              💉 <span className="font-medium">Did you know?</span> India runs
              the world&rsquo;s largest vaccination programme. As the world&rsquo;s
              largest vaccine producer, India supplies approximately 60% of
              global vaccines.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Health and Family Welfare, Universal Immunization
            Programme (UIP) data; PIB releases on immunization progress (July
            2026) and vaccine launches (February-March 2026). Figures reflect
            the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/health/spending", title: "Where India's health spending actually goes", topic: "health" },
            { href: "/health/air-quality", title: "How air quality varies by city", topic: "health" },
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