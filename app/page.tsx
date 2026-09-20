import Link from "next/link";
import Confluence from "@/components/Confluence";
import { StatCard, ArticleCard, TopicTile } from "@/components/Cards";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C8794A]" />
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E]">
              Data you can trust
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.1] text-[#1A1A2E] max-w-4xl mx-auto">
            India&rsquo;s public data,
            <br />
            <span className="text-[#C8794A]">explained simply</span>
          </h1>

          <p className="text-[#4A4A5E] mt-5 max-w-lg mx-auto leading-relaxed">
            Numbers from the RBI, World Bank &amp; Government of India —
            presented plainly, sourced transparently, no spin.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              href="/economy"
              className="px-6 py-3 bg-[#1A4A42] text-white rounded-xl text-sm font-medium hover:bg-[#2A6A5E] transition-all duration-200 hover:shadow-lg"
            >
              Explore Data
            </Link>
            <Link
              href="/about"
              className="text-sm text-[#4A4A5E] hover:text-[#1A4A42] transition-colors"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <Confluence className="w-full h-12" />

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E]">
                This week&rsquo;s key numbers
              </p>
              <p className="text-sm text-[#8A8A9E]">
                India&rsquo;s economy at a glance
              </p>
            </div>
            <span className="text-xs text-[#8A8A9E]">Updated July 2026</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Repo rate" value="5.25%" />
            <StatCard label="Inflation (CPI)" value="4.82%" />
            <StatCard label="GDP growth" value="7.8%" />
            <StatCard label="Unemployment" value="5.1%" />
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E]">
                Explained this week
              </p>
              <p className="text-sm text-[#8A8A9E]">
                Fresh insights from our team
              </p>
            </div>
            <Link
              href="/articles"
              className="text-sm text-[#1A4A42] hover:text-[#C8794A] transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <ArticleCard
              href="/economy/repo-rate"
              title="What the repo rate means for your EMI"
              topic="economy"
            />
            <ArticleCard
              href="/states/growth"
              title="Which states grew fastest this year"
              topic="states"
            />
            <ArticleCard
              href="/population/age-visualised"
              title="India's population by age, visualised"
              topic="population"
            />
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-10 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E]">
              Browse by topic
            </p>
            <p className="text-sm text-[#8A8A9E]">Explore data by category</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <TopicTile href="/economy" title="Economy" />
            <TopicTile href="/population" title="Population" />
            <TopicTile href="/states" title="States" />
            <TopicTile href="/health" title="Health" />
            <TopicTile href="/india-vs-world" title="India vs world" />
            <TopicTile href="/agriculture" title="Agriculture" />
          </div>

          {/* Footer Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl px-5 py-4 text-center border border-[#F0EDE8] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <p className="font-display text-2xl font-semibold text-[#1A4A42]">
                15+
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A9E] mt-0.5">
                Data Sources
              </p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-4 text-center border border-[#F0EDE8] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <p className="font-display text-2xl font-semibold text-[#1A4A42]">
                6
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A9E] mt-0.5">
                Topics Covered
              </p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-4 text-center border border-[#F0EDE8] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <p className="font-display text-2xl font-semibold text-[#1A4A42]">
                24
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A9E] mt-0.5">
                Articles
              </p>
            </div>
            <div className="bg-white rounded-2xl px-5 py-4 text-center border border-[#F0EDE8] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <p className="font-display text-2xl font-semibold text-[#1A4A42]">
                100%
              </p>
              <p className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A9E] mt-0.5">
                Transparent
              </p>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-8 bg-[#1A4A42] rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white font-medium text-sm">
              <span className="font-display">Trusted by readers</span> — data
              you can rely on
            </p>
            <div className="flex items-center gap-4 text-xs text-white/70 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8794A]" />
                RBI Verified
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8794A]" />
                Government Data
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8794A]" />
                World Bank
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}