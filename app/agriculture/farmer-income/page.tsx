import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer income and support in India | DataIndia",
  description:
    "The average agricultural household earns ₹10,218 per month. PM-KISAN provides ₹6,000/year to over 9.49 crore farmers. See the details.",
  openGraph: {
    title: "Farmer income and support in India",
    description: "₹10,218/month average. PM-KISAN for 9.49 crore farmers.",
    url: "https://connectsangam.in/agriculture/farmer-income",
    type: "article",
  },
};

export default function FarmerIncomeArticle() {
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
          Farmer income and support in India
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: NSO Survey / Ministry of Agriculture · Last updated July 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="Avg monthly income" value="₹10,218" />
          <StatCard label="PM-KISAN support" value="₹6,000/yr" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            The average monthly income of an agricultural household in India is{" "}
            <strong className="text-[#1A1A2E]">₹10,218</strong>, according to the
            National Statistical Office (NSO) survey. This works out to roughly{" "}
            <strong className="text-[#1A1A2E]">₹1.23 lakh per year</strong> —
            lower than the commonly cited ₹1.5 lakh figure. The income comes from
            multiple sources: crop production (₹3,798), wages (₹4,063), animal
            farming (₹1,582), non-farm business (₹641), and leasing land (₹134).
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            PM-KISAN: Direct income support
          </h2>
          <p>
            The government&rsquo;s PM-KISAN scheme provides{" "}
            <strong className="text-[#1A1A2E]">₹6,000 per year</strong> to
            eligible farmer families, transferred directly into bank accounts in
            three equal instalments of ₹2,000 each. The 23rd instalment,
            released in June 2026, benefited over{" "}
            <strong className="text-[#1A1A2E]">9.49 crore farmers</strong> with
            more than ₹18,984 crore transferred.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Impact of PM-KISAN
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">Agricultural investment:</span>{" "}
              Over 92% of beneficiaries reported using the assistance for
              agricultural inputs like seeds, fertilizers, and pesticides.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Income improvement:</span>{" "}
              Nearly 85% of beneficiaries reported improved agricultural income
              and reduced dependence on informal credit.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Women beneficiaries:</span>{" "}
              More than 2.18 crore women farmers received benefits in the 23rd
              instalment, and women have received over ₹1.06 lakh crore
              cumulatively.
            </li>
          </ul>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              💡 <span className="font-medium">Did you know?</span> PM-KISAN has
              transferred over ₹4.47 lakh crore to farmers through 23 instalments
              since its launch in February 2019. In July 2026, the Union Cabinet
              approved its continuation from 2026-27 to 2030-31 with an outlay of
              ₹3.15 lakh crore.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            State variations
          </h2>
          <p>
            Farmer incomes vary widely across states. According to government
            data presented in Parliament, Meghalaya has the highest average
            monthly agricultural household income at{" "}
            <strong className="text-[#1A1A2E]">₹29,348</strong>, while Jharkhand
            has the lowest at <strong className="text-[#1A1A2E]">₹4,895</strong>.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            National Statistical Office (NSO) 77th Round Survey; Ministry of
            Agriculture and Farmers Welfare; PIB releases on PM-KISAN. Figures
            reflect the most recent data available as of July 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/agriculture/production", title: "India's food grain production explained", topic: "agriculture" },
            { href: "/agriculture/exports", title: "How India's agricultural exports are growing", topic: "agriculture" },
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