import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E5E0] bg-white mt-12">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold text-[#1A1A2E]">
              DataIndia
            </p>
            <p className="text-sm text-[#8A8A9E] mt-2 leading-relaxed">
              India&rsquo;s public data, explained simply.
            </p>
            <p className="text-xs text-[#8A8A9E] mt-2">
              Part of{" "}
              <span className="text-[#1A4A42] font-medium">ConnectSangam</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://twitter.com/connectsangam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DataIndia on Twitter"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F9F7F4] border border-[#F0EDE8] text-[#4A4A5E] hover:text-[#1A4A42] hover:border-[#1A4A42] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/connectsangam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DataIndia on Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F9F7F4] border border-[#F0EDE8] text-[#4A4A5E] hover:text-[#C8794A] hover:border-[#C8794A] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] font-medium mb-3">
              Topics
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/economy" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Economy</Link></li>
              <li><Link href="/population" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Population</Link></li>
              <li><Link href="/states" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">States</Link></li>
              <li><Link href="/health" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Health</Link></li>
              <li><Link href="/india-vs-world" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">India vs World</Link></li>
              <li><Link href="/agriculture" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Agriculture</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] font-medium mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">About</Link></li>
              <li><Link href="/articles" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">All Articles</Link></li>
              <li><Link href="/glossary" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Glossary</Link></li>
              <li><Link href="/visualizations" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Visualizations</Link></li>
              <li><Link href="/tools" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Tools</Link></li>
              <li><Link href="/privacy" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-[#4A4A5E] hover:text-[#1A4A42] transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] font-medium mb-3">
              Data Sources
            </h3>
            <ul className="space-y-2 text-sm text-[#4A4A5E]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                Reserve Bank of India
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                Ministry of Statistics (MoSPI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                Ministry of Finance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                NITI Aayog
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                World Bank
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A4A42]" />
                Census of India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#E8E5E0] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#8A8A9E]">
          <p>© {new Date().getFullYear()} ConnectSangam. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#1A4A42] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1A4A42] transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-[#1A4A42] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}