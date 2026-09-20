import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DataIndia",
  description:
    "Terms of Service for DataIndia — what we offer, how we handle data accuracy, and your responsibilities as a user.",
  openGraph: {
    title: "Terms of Service | DataIndia",
    description:
      "What we offer, how we handle data accuracy, and your responsibilities.",
    url: "https://connectsangam.in/terms",
    type: "website",
  },
};

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Terms of Service
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        Terms of Service
      </h1>
      <p className="text-[#8A8A9E] mt-2 font-mono text-[13px]">
        Last updated: July 2026
      </p>

      <div className="mt-8 space-y-6 text-[#4A4A5E] leading-relaxed">
        <p>
          Welcome to DataIndia, a project of ConnectSangam. By using our website,
          you agree to these Terms of Service.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using DataIndia, you agree to be bound by these
            Terms. If you do not agree, please do not use our website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            What DataIndia Offers
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Explanations of key economic and social indicators</li>
            <li>Data visualizations and stats</li>
            <li>Links to original data sources</li>
            <li>Educational content about India&rsquo;s public data</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Accuracy of Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Data comes from third-party sources (RBI, Government of India,
              World Bank, MoSPI)
            </li>
            <li>We do not guarantee 100% accuracy or completeness</li>
            <li>Information is provided for educational purposes only</li>
          </ul>
          <div className="mt-3 bg-[#C8794A]/10 border-l-4 border-[#C8794A] px-4 py-3 rounded-r-lg">
            <p className="text-sm text-[#1A1A2E]">
              <span className="font-semibold">Important:</span> DataIndia is for
              informational and educational purposes. It is not financial,
              legal, or professional advice.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the website for lawful purposes only</li>
            <li>Not attempt to disrupt or harm the website</li>
            <li>Not use automated systems to scrape content</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Intellectual Property
          </h2>
          <p>
            All original content on DataIndia — including articles, charts, and
            analysis — is the property of ConnectSangam. You may cite or share
            our content with attribution. You may not republish it in full
            without permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            External Links
          </h2>
          <p>
            DataIndia links to external sources (RBI, World Bank, PIB, etc.) for
            reference. We are not responsible for the content or availability of
            those sites.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be
            resolved in the courts of India.
          </p>
        </div>

        <div className="border-t border-[#E8E5E0] pt-4 text-sm text-[#8A8A9E]">
          <p>ConnectSangam — making public data accessible for everyone.</p>
        </div>
      </div>
    </div>
  );
}