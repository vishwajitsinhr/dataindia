import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DataIndia — Why we explain India's public data",
  description:
    "DataIndia takes numbers from the RBI, government open data platforms, and the World Bank, and explains what they actually mean, in plain language.",
  openGraph: {
    title: "About DataIndia | ConnectSangam",
    description:
      "Why we explain India's public data — sourced, transparent, no spin.",
    url: "https://connectsangam.in/about",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          About
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        Why DataIndia
      </h1>

      <div className="mt-6 space-y-4 text-[#4A4A5E] leading-relaxed">
        <p>
          Most public data about India is scattered across dense government
          reports and PDFs. DataIndia takes numbers from the RBI, government
          open data platforms, and the World Bank, and explains what they
          actually mean, in plain language.
        </p>
        <p>
          No opinions, no spin — every article shows its source and the date it
          was last updated. If the data changes, the article changes with it.
        </p>

        {/* Quote */}
        <div className="border-l-4 border-[#C8794A] pl-4 my-6 py-2 bg-[#C8794A]/10 rounded-r-lg">
          <p className="text-[#1A1A2E] font-display text-lg">
            &ldquo;DataIndia is part of ConnectSangam — sangam means confluence,
            the meeting point of rivers. This is where India&rsquo;s public data
            converges into something anyone can actually read.&rdquo;
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl px-4 py-4 text-center border border-[#F0EDE8]">
            <p className="font-display text-2xl font-semibold text-[#1A4A42]">
              15+
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A9E]">
              Data Sources
            </p>
          </div>
          <div className="bg-white rounded-2xl px-4 py-4 text-center border border-[#F0EDE8]">
            <p className="font-display text-2xl font-semibold text-[#1A4A42]">
              6
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A9E]">
              Topics Covered
            </p>
          </div>
          <div className="bg-white rounded-2xl px-4 py-4 text-center border border-[#F0EDE8]">
            <p className="font-display text-2xl font-semibold text-[#1A4A42]">
              24
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A9E]">
              Articles
            </p>
          </div>
          <div className="bg-white rounded-2xl px-4 py-4 text-center border border-[#F0EDE8]">
            <p className="font-display text-2xl font-semibold text-[#1A4A42]">
              100%
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A9E]">
              Transparent
            </p>
          </div>
        </div>

        {/* How we work */}
        <div className="mt-8 p-6 bg-white border border-[#F0EDE8] rounded-2xl">
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-4">
            How we work
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-[#C8794A] font-mono shrink-0">01</span>
              <span>
                <span className="font-medium text-[#1A1A2E]">Source first.</span>{" "}
                Every number is traced back to the RBI, a government database,
                or the World Bank.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8794A] font-mono shrink-0">02</span>
              <span>
                <span className="font-medium text-[#1A1A2E]">Plain language.</span>{" "}
                No jargon without explanation. If we can&rsquo;t say it simply,
                we haven&rsquo;t understood it yet.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8794A] font-mono shrink-0">03</span>
              <span>
                <span className="font-medium text-[#1A1A2E]">
                  Dated and maintained.
                </span>{" "}
                Every article shows when it was last updated. When the data
                changes, we change the article.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8794A] font-mono shrink-0">04</span>
              <span>
                <span className="font-medium text-[#1A1A2E]">No spin.</span> We
                explain what the data says, not what anyone wishes it said.
              </span>
            </li>
          </ul>
        </div>

        {/* ConnectSangam */}
        <div className="mt-8 p-6 bg-white border border-[#F0EDE8] rounded-2xl">
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            About ConnectSangam
          </h2>
          <p className="text-[#4A4A5E] leading-relaxed">
            ConnectSangam is a platform dedicated to making public data
            accessible and understandable for everyone. We believe that
            informed citizens make better decisions, and that starts with
            clear, transparent data.
          </p>
          <Link
            href="https://connectsangam.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[#1A4A42] hover:text-[#C8794A] font-mono text-sm transition-colors duration-300"
          >
            Visit ConnectSangam →
          </Link>
        </div>

        {/* Follow us — Twitter + Instagram only */}
        <div className="mt-8 p-6 bg-white border border-[#F0EDE8] rounded-2xl">
          <h2 className="font-display text-xl font-semibold text-[#1A1A2E] mb-3">
            Follow us
          </h2>
          <p className="text-[#4A4A5E] text-sm mb-4">
            Get the latest updates when we publish new articles or tools.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://twitter.com/connectsangam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F9F7F4] border border-[#F0EDE8] text-sm text-[#4A4A5E] hover:border-[#1A4A42] hover:text-[#1A4A42] transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a
              href="https://instagram.com/connectsangam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F9F7F4] border border-[#F0EDE8] text-sm text-[#4A4A5E] hover:border-[#C8794A] hover:text-[#C8794A] transition-all"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-6 p-4 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl">
          <p className="text-sm text-[#1A1A2E] text-center font-medium">
            💡 Our Mission: Making India&rsquo;s public data accessible to
            everyone.
          </p>
        </div>
      </div>
    </div>
  );
}