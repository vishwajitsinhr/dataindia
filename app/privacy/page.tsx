import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DataIndia",
  description:
    "DataIndia's privacy policy — what information we collect, how we use it, and your rights.",
  openGraph: {
    title: "Privacy Policy | DataIndia",
    description:
      "What information we collect, how we use it, and your rights.",
    url: "https://connectsangam.in/privacy",
    type: "website",
  },
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Privacy Policy
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        Privacy Policy
      </h1>
      <p className="text-[#8A8A9E] mt-2 font-mono text-[13px]">
        Last updated: July 2026
      </p>

      <div className="mt-8 space-y-6 text-[#4A4A5E] leading-relaxed">
        <p>
          At ConnectSangam, we take your privacy seriously. This Privacy Policy
          explains how we collect, use, and protect your information when you
          use DataIndia and other ConnectSangam services.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Information We Collect
          </h2>
          <p>We collect minimal information to improve your experience:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="font-medium text-[#1A1A2E]">Usage data</span> —
              how you interact with our website (anonymously)
            </li>
            <li>
              <span className="font-medium text-[#1A1A2E]">Cookies</span> — to
              improve your browsing experience
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improve our website content and user experience</li>
            <li>Analyze usage patterns to make DataIndia better</li>
            <li>Understand which topics are most valuable to our readers</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Data Sources
          </h2>
          <p>DataIndia uses publicly available data from:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Reserve Bank of India (RBI)</li>
            <li>Government of India open data platforms</li>
            <li>World Bank</li>
            <li>Ministry of Statistics and Programme Implementation (MoSPI)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Cookies
          </h2>
          <p>
            We use minimal cookies to enhance your experience. You can control
            cookie settings in your browser. We do not use cookies for
            advertising or tracking across other websites.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact us through{" "}
            <a
              href="https://connectsangam.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A4A42] hover:text-[#C8794A] transition-colors"
            >
              ConnectSangam
            </a>
            .
          </p>
        </div>

        <div className="border-t border-[#E8E5E0] pt-4 text-sm text-[#8A8A9E]">
          <p>ConnectSangam — making public data accessible for everyone.</p>
        </div>
      </div>
    </div>
  );
}