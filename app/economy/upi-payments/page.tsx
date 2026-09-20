import { StatCard } from "@/components/Cards";
import RelatedArticles from "@/components/RelatedArticles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPI is still free for you — but merchants now pay a small fee | DataIndia",
  description:
    "The new UPI framework lets banks charge a 0.4% Merchant Discount Rate on some high-value merchant payments. Customers still pay nothing. Here's what changed and what didn't.",
  openGraph: {
    title: "UPI is still free for you — but merchants now pay a small fee",
    description: "Customers still pay nothing. Only large merchants pay a small MDR on high-value payments.",
    url: "https://connectsangam.in/economy/upi-payments",
    type: "article",
  },
};

export default function UpiPaymentsArticle() {
  return (
    <article className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Economy
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          UPI is still free for you — but merchants now pay a small fee
        </h1>

        <p className="text-[#8A8A9E] mt-3 text-sm">
          Source: Ministry of Finance / NPCI · Last updated September 2026
        </p>

        <div className="grid grid-cols-2 gap-4 mt-10 max-w-sm">
          <StatCard label="P2P transfers" value="100% free" />
          <StatCard label="Merchant payments ≤ ₹2,000" value="Free" />
        </div>

        <div className="mt-10 space-y-6 text-[#4A4A5E] leading-relaxed">
          <p>
            The government recently introduced a new UPI framework that allows
            a <strong className="text-[#1A1A2E]">Merchant Discount Rate (MDR)</strong>{" "}
            on certain high-value merchant payments. There&rsquo;s been a lot of
            confusion about this — but the bottom line is simple:{" "}
            <strong className="text-[#1A1A2E]">customers still pay nothing.</strong>
          </p>

          <p>
            The Ministry of Finance clarified directly:{" "}
            <em>&ldquo;MDR is neither a tax nor a charge collected by the
            Government or NPCI.&rdquo;</em> It is a fee shared among banks and
            payment providers to keep the UPI system running.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What stays free
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-[#1A1A2E]">All person-to-person (P2P) transfers:</span>{" "}
              Sending money to friends, family, or anyone — any amount — is
              completely free. This covers 70% of UPI&rsquo;s total transaction
              value.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Merchant payments up to ₹2,000:</span>{" "}
              No MDR applies. This is the vast majority of small purchases.
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Small merchants:</span>{" "}
              Street vendors, kirana shops, and small businesses receiving up to
              ₹1 lakh per month via UPI QR codes continue to enjoy zero MDR.
            </li>
          </ul>

          <p>
            Together, this means roughly <strong className="text-[#1A1A2E]">96% of
            merchant transactions</strong> are unaffected.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            What changes
          </h2>
          <p>
            For certain <strong className="text-[#1A1A2E]">merchant payments above
            ₹2,000</strong>, a small MDR of <strong className="text-[#1A1A2E]">0.4%</strong>{" "}
            applies. It&rsquo;s capped at ₹300 for transactions of ₹75,000 and
            above.
          </p>

          <div className="mt-4 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <p className="text-xs uppercase tracking-widest text-[#8A8A9E] mb-3">
              Who pays what
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Customer sending money</span>
                <span className="font-medium text-[#1A4A42]">Nothing</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Small merchant (≤ ₹1L/month)</span>
                <span className="font-medium text-[#1A4A42]">Nothing</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#E8E5E0] pb-2">
                <span className="text-[#4A4A5E]">Large merchant, payment ≤ ₹2,000</span>
                <span className="font-medium text-[#1A4A42]">Nothing</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#4A4A5E]">Large merchant, payment &gt; ₹2,000</span>
                <span className="font-medium text-[#C8794A]">0.4% MDR</span>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Is there GST on UPI payments?
          </h2>
          <p>
            <strong className="text-[#1A1A2E]">No.</strong> There is no GST on
            UPI transactions themselves. GST only applies to the MDR fee — and
            only for merchants who pay it.
          </p>
          <p>
            For a GST-registered merchant, the GST paid on MDR can be claimed as
            input tax credit, so it isn&rsquo;t a permanent cost.
          </p>

          <div className="mt-6 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl p-4">
            <p className="text-sm text-[#1A1A2E]">
              📌 <span className="font-medium">Key takeaway:</span> Nothing has
              changed for you as a UPI user. Sending money to anyone remains
              free. Paying small merchants remains free. Only large merchants
              receiving high-value payments now pay a small processing fee —
              and they may pass some of it on through general pricing.
            </p>
          </div>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Why this change was made
          </h2>
          <p>
            UPI processes more transactions than any other real-time payment
            system in the world. Running and expanding that infrastructure —
            fraud prevention, reliability, security — costs money. Until now,
            the government subsidised it through an incentive scheme. The new
            MDR framework shifts part of that cost to the merchants who benefit
            most from high-value digital payments.
          </p>

          <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mt-8 mb-3">
            Source
          </h2>
          <p className="text-[#8A8A9E]">
            Ministry of Finance, PIB releases (September 2026); National Payments
            Corporation of India (NPCI). Figures reflect the most recent data
            available as of September 2026.
          </p>
        </div>

        <RelatedArticles
          articles={[
            { href: "/economy/repo-rate", title: "What the repo rate means for your EMI", topic: "economy" },
            { href: "/economy/gdp-growth", title: "How GDP growth is actually measured", topic: "economy" },
          ]}
        />

        <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
          <Link
            href="/economy"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to Economy
          </Link>
        </div>
      </div>
    </article>
  );
}