"use client";

import { useState } from "react";

interface Visualization {
  id: string;
  title: string;
  description: string;
  category: string;
  unit?: string;
  data: { label: string; value: number; color?: string; display?: string }[];
}

const visualizations: Visualization[] = [
  // Economy
  {
    id: "gdp-growth",
    title: "India's GDP Growth",
    description: "Quarterly real GDP growth for FY 2025-26.",
    category: "Economy",
    unit: "%",
    data: [
      { label: "Q1 FY26", value: 7.8, color: "#1A4A42" },
      { label: "Q2 FY26", value: 8.2, color: "#2A6A5E" },
      { label: "Q3 FY26", value: 7.5, color: "#C8794A" },
      { label: "Q4 FY26", value: 7.3, color: "#8A8A9E" },
    ],
  },
  {
    id: "inflation",
    title: "India's Inflation Rate (CPI)",
    description: "Annual average CPI inflation over the last 4 years.",
    category: "Economy",
    unit: "%",
    data: [
      { label: "FY 2022-23", value: 6.7, color: "#C8794A" },
      { label: "FY 2023-24", value: 5.4, color: "#1A4A42" },
      { label: "FY 2024-25", value: 4.6, color: "#2A6A5E" },
      { label: "FY 2025-26", value: 1.7, color: "#1A4A42" },
    ],
  },
  {
    id: "repo-rate",
    title: "Repo Rate Trend",
    description: "RBI's repo rate over recent policy meetings.",
    category: "Economy",
    unit: "%",
    data: [
      { label: "Dec 2024", value: 6.50, color: "#8A8A9E" },
      { label: "Feb 2025", value: 6.25, color: "#C8794A" },
      { label: "Apr 2025", value: 6.00, color: "#C8794A" },
      { label: "Jun 2025", value: 5.50, color: "#2A6A5E" },
      { label: "Dec 2025", value: 5.25, color: "#1A4A42" },
    ],
  },
  // Population
  {
    id: "population",
    title: "India's Population Growth",
    description: "Total population over the last 4 years.",
    category: "Population",
    unit: " billion",
    data: [
      { label: "2023", value: 1.438, color: "#1A4A42", display: "1.44B" },
      { label: "2024", value: 1.441, color: "#2A6A5E", display: "1.44B" },
      { label: "2025", value: 1.454, color: "#C8794A", display: "1.45B" },
      { label: "2026", value: 1.470, color: "#1A4A42", display: "1.47B" },
    ],
  },
  {
    id: "age-distribution",
    title: "India's Age Distribution",
    description: "Share of population by age group.",
    category: "Population",
    unit: "%",
    data: [
      { label: "0-14 (Children)", value: 26, color: "#1A4A42" },
      { label: "15-64 (Working age)", value: 67, color: "#2A6A5E" },
      { label: "65+ (Elderly)", value: 7, color: "#C8794A" },
    ],
  },
  {
    id: "urbanisation",
    title: "Urbanisation Trend",
    description: "Share of Indians living in cities.",
    category: "Population",
    unit: "%",
    data: [
      { label: "2024", value: 34, color: "#1A4A42" },
      { label: "2025", value: 35, color: "#2A6A5E" },
      { label: "2026", value: 36, color: "#C8794A" },
      { label: "2030 (proj.)", value: 40, color: "#1A4A42" },
    ],
  },
  // States
  {
    id: "state-gdp",
    title: "Top State Economies",
    description: "Share of India's GDP by state.",
    category: "States",
    unit: "%",
    data: [
      { label: "Maharashtra", value: 14.0, color: "#1A4A42" },
      { label: "Tamil Nadu", value: 9.4, color: "#2A6A5E" },
      { label: "Uttar Pradesh", value: 9.0, color: "#C8794A" },
      { label: "Karnataka", value: 8.7, color: "#8A8A9E" },
      { label: "Gujarat", value: 8.2, color: "#1A4A42" },
    ],
  },
  {
    id: "literacy",
    title: "Literacy Rate by State",
    description: "Highest and lowest literacy rates across states.",
    category: "States",
    unit: "%",
    data: [
      { label: "Kerala", value: 96.2, color: "#1A4A42" },
      { label: "Delhi", value: 88.7, color: "#2A6A5E" },
      { label: "Maharashtra", value: 84.8, color: "#C8794A" },
      { label: "Rajasthan", value: 69.7, color: "#8A8A9E" },
      { label: "Bihar", value: 63.8, color: "#C8794A" },
    ],
  },
  {
    id: "per-capita",
    title: "Per Capita Income by State",
    description: "Annual per capita income in top states (₹ lakh).",
    category: "States",
    unit: " lakh",
    data: [
      { label: "Maharashtra", value: 3.48, color: "#1A4A42", display: "₹3.48L" },
      { label: "Telangana", value: 3.35, color: "#2A6A5E", display: "₹3.35L" },
      { label: "Karnataka", value: 3.18, color: "#C8794A", display: "₹3.18L" },
      { label: "Gujarat", value: 3.02, color: "#8A8A9E", display: "₹3.02L" },
      { label: "Tamil Nadu", value: 2.95, color: "#1A4A42", display: "₹2.95L" },
    ],
  },
  // Health
  {
    id: "health-spending",
    title: "Health Spending by Country",
    description: "Total health spending as % of GDP.",
    category: "Health",
    unit: "%",
    data: [
      { label: "USA", value: 16.6, color: "#C8794A" },
      { label: "Germany", value: 11.7, color: "#8A8A9E" },
      { label: "China", value: 5.3, color: "#2A6A5E" },
      { label: "Brazil", value: 4.9, color: "#1A4A42" },
      { label: "India", value: 2.1, color: "#C8794A" },
    ],
  },
  {
    id: "life-expectancy",
    title: "Life Expectancy Trends",
    description: "India's life expectancy over the decades.",
    category: "Health",
    unit: " years",
    data: [
      { label: "2000", value: 62.5, color: "#8A8A9E", display: "62.5 yrs" },
      { label: "2010", value: 66.0, color: "#2A6A5E", display: "66.0 yrs" },
      { label: "2020", value: 68.8, color: "#1A4A42", display: "68.8 yrs" },
      { label: "2026", value: 72.7, color: "#C8794A", display: "72.7 yrs" },
    ],
  },
  {
    id: "vaccination",
    title: "Vaccination Coverage",
    description: "Percentage of children vaccinated by vaccine type.",
    category: "Health",
    unit: "%",
    data: [
      { label: "BCG", value: 95, color: "#1A4A42" },
      { label: "DPT", value: 93, color: "#2A6A5E" },
      { label: "Polio", value: 98, color: "#C8794A" },
      { label: "Measles", value: 90, color: "#8A8A9E" },
    ],
  },
  // India vs World
  {
    id: "global-growth",
    title: "GDP Growth: India vs Neighbours",
    description: "India leads the region in GDP growth.",
    category: "India vs World",
    unit: "%",
    data: [
      { label: "India", value: 7.7, color: "#1A4A42" },
      { label: "China", value: 4.8, color: "#2A6A5E" },
      { label: "Bangladesh", value: 4.5, color: "#C8794A" },
      { label: "Pakistan", value: 3.2, color: "#8A8A9E" },
      { label: "Sri Lanka", value: 2.8, color: "#C8794A" },
    ],
  },
  {
    id: "global-health",
    title: "Health Spending: India vs World",
    description: "India spends less than most major economies.",
    category: "India vs World",
    unit: "%",
    data: [
      { label: "India", value: 2.1, color: "#1A4A42" },
      { label: "Brazil", value: 4.9, color: "#2A6A5E" },
      { label: "China", value: 5.3, color: "#C8794A" },
      { label: "Global Avg", value: 6.0, color: "#8A8A9E" },
      { label: "USA", value: 16.6, color: "#C8794A" },
    ],
  },
  {
    id: "population-comparison",
    title: "Population: India vs World",
    description: "Most populous countries (in billions).",
    category: "India vs World",
    unit: " billion",
    data: [
      { label: "India", value: 1.47, color: "#1A4A42", display: "1.47B" },
      { label: "China", value: 1.41, color: "#2A6A5E", display: "1.41B" },
      { label: "USA", value: 0.34, color: "#C8794A", display: "0.34B" },
      { label: "Indonesia", value: 0.28, color: "#8A8A9E", display: "0.28B" },
      { label: "Pakistan", value: 0.24, color: "#1A4A42", display: "0.24B" },
    ],
  },
  // Agriculture
  {
    id: "food-production",
    title: "Food Grain Production",
    description: "India's food grain production by crop (in MT).",
    category: "Agriculture",
    unit: " MT",
    data: [
      { label: "Rice", value: 154.02, color: "#1A4A42", display: "154 MT" },
      { label: "Wheat", value: 120.66, color: "#2A6A5E", display: "120.7 MT" },
      { label: "Maize", value: 55.09, color: "#C8794A", display: "55.1 MT" },
      { label: "Pulses", value: 27.41, color: "#8A8A9E", display: "27.4 MT" },
    ],
  },
  {
    id: "agri-exports",
    title: "Agricultural Exports",
    description: "Top agricultural exports (in $ billion).",
    category: "Agriculture",
    unit: "B",
    data: [
      { label: "Rice", value: 11.5, color: "#1A4A42", display: "$11.5B" },
      { label: "Marine", value: 8.4, color: "#2A6A5E", display: "$8.4B" },
      { label: "Spices", value: 4.4, color: "#C8794A", display: "$4.4B" },
      { label: "Others", value: 28.2, color: "#8A8A9E", display: "$28.2B" },
    ],
  },
];

const categories = ["All", "Economy", "Population", "States", "Health", "India vs World", "Agriculture"];

export default function Visualizations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? visualizations
    : visualizations.filter((v) => v.category === selectedCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Visualizations
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        Data Visualizations
      </h1>
      <p className="text-[#8A8A9E] mt-3 max-w-lg">
        See India&rsquo;s data come to life with simple charts and comparisons.
      </p>

      {/* Category Filter */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-mono whitespace-nowrap transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#1A4A42] text-white"
                : "bg-white border border-[#F0EDE8] text-[#8A8A9E] hover:border-[#1A4A42] hover:text-[#1A4A42]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Visualization Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mt-8">
        {filtered.map((viz) => {
          const maxValue = Math.max(...viz.data.map((d) => d.value));
          const minValue = Math.min(...viz.data.map((d) => d.value));
          // If values are close (within 20% of each other), scale from 0 for fair comparison.
          // Otherwise scale relative to max for visual clarity.
          const scaleFromZero = maxValue / minValue < 1.3;
          const effectiveMin = scaleFromZero ? 0 : minValue * 0.9;

          return (
            <div
              key={viz.id}
              className="bg-white border border-[#F0EDE8] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="pr-3">
                  <h3 className="font-display text-lg font-medium text-[#1A1A2E]">
                    {viz.title}
                  </h3>
                  <p className="text-sm text-[#8A8A9E] mt-0.5">{viz.description}</p>
                </div>
                <span className="text-xs font-mono text-[#8A8A9E] bg-[#F9F7F4] px-2 py-1 rounded-full border border-[#F0EDE8] whitespace-nowrap">
                  {viz.category}
                </span>
              </div>

              {/* Bar Chart */}
              <div className="mt-4 space-y-2.5">
                {viz.data.map((item, index) => {
                  const percentage =
                    ((item.value - effectiveMin) /
                      (maxValue - effectiveMin || 1)) *
                    100;
                  const barColor = item.color || "#1A4A42";
                  const displayText =
                    item.display ?? `${item.value}${viz.unit ?? ""}`;

                  return (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4A4A5E]">{item.label}</span>
                        <span className="font-medium text-[#1A1A2E]">
                          {displayText}
                        </span>
                      </div>
                      <div className="w-full bg-[#F0EDE8] rounded-full h-2.5 mt-0.5 overflow-hidden">
                        <div
                          className="h-2.5 rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.max(2, percentage)}%`,
                            backgroundColor: barColor,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-[#1A4A42]/5 rounded-2xl border border-[#1A4A42]/10 text-center">
        <p className="text-sm text-[#1A1A2E]">
          📊 {filtered.length} visualizations available. More coming soon!
        </p>
      </div>
    </div>
  );
}