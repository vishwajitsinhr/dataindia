"use client";

import { useState } from "react";
import Link from "next/link";
import { ArticleCard } from "@/components/Cards";

const articles = [
  // Economy
  { href: "/economy/repo-rate", title: "What the repo rate means for your EMI", topic: "economy" as const, date: "July 2026" },
  { href: "/economy/inflation", title: "Is India's inflation actually falling", topic: "economy" as const, date: "July 2026" },
  { href: "/economy/fiscal-deficit", title: "What the fiscal deficit means for you", topic: "economy" as const, date: "July 2026" },
  { href: "/economy/gdp-growth", title: "How GDP growth is actually measured", topic: "economy" as const, date: "July 2026" },
  { href: "/economy/unemployment", title: "Understanding unemployment in India", topic: "economy" as const, date: "July 2026" },
  { href: "/economy/upi-payments", title: "UPI is still free for you — but merchants now pay a small fee", topic: "economy" as const, date: "September 2026" },
  // Population
  { href: "/population/age-visualised", title: "India's population by age, visualised", topic: "population" as const, date: "July 2026" },
  { href: "/population/urbanisation", title: "How fast is India urbanising", topic: "population" as const, date: "July 2026" },
  { href: "/population/demographic-dividend", title: "India's demographic dividend explained", topic: "population" as const, date: "July 2026" },
  { href: "/population/literacy-gender-gap", title: "India's literacy gender gap, explained", topic: "population" as const, date: "July 2026" },
  // States
  { href: "/states/growth", title: "Which states grew fastest this year", topic: "states" as const, date: "July 2026" },
  { href: "/states/per-capita", title: "Per capita income by state, compared", topic: "states" as const, date: "July 2026" },
  { href: "/states/literacy", title: "Where literacy rates are rising fastest", topic: "states" as const, date: "July 2026" },
  { href: "/states/poverty", title: "State-wise poverty rates explained", topic: "states" as const, date: "July 2026" },
  // Health
  { href: "/health/spending", title: "Where India's health spending actually goes", topic: "health" as const, date: "July 2026" },
  { href: "/health/air-quality", title: "How air quality varies by city", topic: "health" as const, date: "July 2026" },
  { href: "/health/vaccination", title: "India's vaccination coverage explained", topic: "health" as const, date: "July 2026" },
  { href: "/health/ayushman-bharat", title: "Ayushman Bharat: who it covers", topic: "health" as const, date: "July 2026" },
  // India vs World
  { href: "/india-vs-world/growth", title: "How India's growth compares to its neighbours", topic: "world" as const, date: "July 2026" },
  { href: "/india-vs-world/health-spending", title: "Where India ranks on public health spending", topic: "world" as const, date: "July 2026" },
  { href: "/india-vs-world/population", title: "India vs China: population and growth", topic: "world" as const, date: "July 2026" },
  { href: "/india-vs-world/vs-brazil", title: "India vs Brazil: emerging economies compared", topic: "world" as const, date: "July 2026" },
  // Agriculture
  { href: "/agriculture/production", title: "India's food grain production explained", topic: "agriculture" as const, date: "May 2026" },
  { href: "/agriculture/exports", title: "How India's agricultural exports are growing", topic: "agriculture" as const, date: "June 2026" },
  { href: "/agriculture/farmer-income", title: "Farmer income and support in India", topic: "agriculture" as const, date: "July 2026" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "economy", label: "Economy" },
  { key: "population", label: "Population" },
  { key: "states", label: "States" },
  { key: "health", label: "Health" },
  { key: "world", label: "India vs World" },
  { key: "agriculture", label: "Agriculture" },
];

export default function Articles() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered = articles.filter((a) => {
    const matchesCategory =
      selectedCategory === "all" || a.topic === selectedCategory;
    const matchesQuery =
      query.trim() === "" ||
      a.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          All Articles
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        All Articles
      </h1>
      <p className="text-[#8A8A9E] mt-3 max-w-lg">
        {articles.length} articles explaining India&rsquo;s public data — in
        plain English.
      </p>

      {/* Search + Category filter */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-[#F0EDE8] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20 focus:border-[#1A4A42] transition-all bg-white"
        />
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-mono whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.key
                  ? "bg-[#1A4A42] text-white"
                  : "bg-white border border-[#F0EDE8] text-[#8A8A9E] hover:border-[#1A4A42] hover:text-[#1A4A42]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-center text-[#8A8A9E] py-16">
          No articles found. Try a different search or category.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          {filtered.map((article) => (
            <div key={article.href}>
              <ArticleCard
                href={article.href}
                title={article.title}
                topic={article.topic}
              />
              <p className="text-xs text-[#8A8A9E] font-mono mt-1 ml-1">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 p-4 bg-[#1A4A42]/5 rounded-2xl border border-[#1A4A42]/10 text-center">
        <p className="text-sm text-[#1A1A2E]">
          📚 Showing {filtered.length} of {articles.length} articles
        </p>
      </div>
    </div>
  );
}