"use client";

import { useState } from "react";

interface Term {
  term: string;
  definition: string;
  category: string;
}

const terms: Term[] = [
  // Economy
  { term: "Repo Rate", definition: "The interest rate at which the Reserve Bank of India lends money to commercial banks. Currently 5.25%.", category: "Economy" },
  { term: "Reverse Repo Rate", definition: "The interest rate at which the RBI borrows money from commercial banks. Currently 3.35%.", category: "Economy" },
  { term: "GDP", definition: "Gross Domestic Product — the total value of all goods and services produced in India. Real GDP grew 7.8% in Q1 FY 2026-27.", category: "Economy" },
  { term: "CPI", definition: "Consumer Price Index — measures the average change in prices paid by consumers for goods and services. Currently 4.82% (August 2026).", category: "Economy" },
  { term: "WPI", definition: "Wholesale Price Index — measures price changes at the wholesale level, before retail. Tracks goods traded in bulk between businesses.", category: "Economy" },
  { term: "Fiscal Deficit", definition: "The difference between government earnings and spending. April-July 2026 stood at 26.8% of the full-year target.", category: "Economy" },
  { term: "Inflation", definition: "The rate at which prices for goods and services rise, reducing purchasing power. Currently 4.82% (August 2026).", category: "Economy" },
  { term: "Monetary Policy", definition: "The process by which the RBI controls the supply of money to achieve economic goals like controlling inflation.", category: "Economy" },
  { term: "Fiscal Policy", definition: "The use of government spending and taxation to influence the economy.", category: "Economy" },
  { term: "MPC", definition: "Monetary Policy Committee — the six-member RBI body that decides the repo rate. Meets every two months.", category: "Economy" },
  { term: "Unemployment Rate", definition: "The percentage of the labor force that is unemployed. Currently 5.1% (July 2026, PLFS).", category: "Economy" },
  { term: "PLFS", definition: "Periodic Labour Force Survey — the official MoSPI survey that measures employment and unemployment across India. Published monthly.", category: "Economy" },
  { term: "MDR", definition: "Merchant Discount Rate — a small fee banks and payment providers charge merchants on certain UPI transactions above ₹2,000. Not a tax. Not paid by customers.", category: "Economy" },

  // Population
  { term: "Demographic Dividend", definition: "The economic growth potential that results from a young, working-age population. India's median age is 28.4 years.", category: "Population" },
  { term: "Urbanisation", definition: "The movement of people from rural to urban areas. Currently 36% of Indians live in cities.", category: "Population" },
  { term: "Median Age", definition: "The age that divides the population into two equal halves. India's median age is 28.4 years.", category: "Population" },
  { term: "Literacy Rate", definition: "The percentage of people who can read and write. India's literacy rate is 77.7%.", category: "Population" },
  { term: "Population Density", definition: "The number of people per square kilometer. India's population density is approximately 480 people per sq km.", category: "Population" },
  { term: "Sex Ratio", definition: "The number of females per 1,000 males in a population. India's sex ratio is 943.", category: "Population" },
  { term: "TFR", definition: "Total Fertility Rate — the average number of children a woman has in her lifetime. India's TFR is 2.0, below the replacement rate of 2.1.", category: "Population" },

  // States
  { term: "GSDP", definition: "Gross State Domestic Product — the total value of goods and services produced in a state.", category: "States" },
  { term: "Per Capita Income", definition: "The average income earned per person in a state or country. India's national average is ₹2.15 lakh.", category: "States" },
  { term: "Poverty Rate", definition: "The percentage of people living below the poverty line. India's national average is 14.2%.", category: "States" },
  { term: "HDI", definition: "Human Development Index — a UNDP measure combining life expectancy, education, and income. Ranks countries and states on human development.", category: "States" },

  // Health
  { term: "Life Expectancy", definition: "The average number of years a person is expected to live. India's life expectancy is 72.7 years (2026).", category: "Health" },
  { term: "Health Expenditure", definition: "The total spending on healthcare as a percentage of GDP. India's total health spending is 3.8% of GDP, with government spending at 1.84%.", category: "Health" },
  { term: "Infant Mortality Rate", definition: "The number of infant deaths per 1,000 live births. India's IMR is 20.9 per 1,000 (2026).", category: "Health" },
  { term: "Maternal Mortality Rate", definition: "The number of maternal deaths per 100,000 live births. India's MMR is 88 per 100,000.", category: "Health" },
  { term: "Vaccination Coverage", definition: "The percentage of children receiving full immunization. India's coverage reached 97.9% in 2025-26.", category: "Health" },
  { term: "AQI", definition: "Air Quality Index — a 0–500 scale that rates air pollution. Higher values mean worse air. Delhi often exceeds 300 in winter.", category: "Health" },
  { term: "UIP", definition: "Universal Immunization Programme — India's free vaccination program for children and pregnant women, covering 12 diseases.", category: "Health" },
  { term: "PM-JAY", definition: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana — India's ₹5 lakh/year health insurance scheme for ~12 crore poor families.", category: "Health" },

  // Agriculture
  { term: "Food Grain Production", definition: "The total production of food grains like rice, wheat, pulses. India produced a record 376.56 MT in 2025-26.", category: "Agriculture" },
  { term: "MSP", definition: "Minimum Support Price — the guaranteed price at which the government buys crops from farmers to protect their income.", category: "Agriculture" },
  { term: "PM-KISAN", definition: "A government scheme providing ₹6,000 per year to eligible farmers as direct income support. Over 9.49 crore farmers covered.", category: "Agriculture" },
  { term: "Irrigation", definition: "The artificial application of water to land for agriculture. Currently 52% of India's land is irrigated.", category: "Agriculture" },
  { term: "Agri Exports", definition: "India's agricultural exports reached a record $52.55 billion in FY 2025-26, up 2.8% from $51.12 billion.", category: "Agriculture" },

  // India vs World
  { term: "World Bank", definition: "An international financial institution that provides loans and grants to developing countries for development projects.", category: "India vs World" },
  { term: "IMF", definition: "International Monetary Fund — an organization that works to foster global monetary cooperation and financial stability.", category: "India vs World" },
  { term: "Emerging Economy", definition: "A country with rapid economic growth and industrialization, like India, China, and Brazil.", category: "India vs World" },
  { term: "Purchasing Power Parity", definition: "An economic measure that compares currencies based on what they can buy in each country, not just exchange rates. India is the 3rd largest economy by PPP.", category: "India vs World" },
];

const categories = ["All", "Economy", "Population", "States", "Health", "Agriculture", "India vs World"];

export default function Glossary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = terms.filter((term) => {
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Glossary
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E]">
        Data Glossary
      </h1>
      <p className="text-[#8A8A9E] mt-3 max-w-lg">
        Key terms explained in plain English — no jargon, no confusion.
      </p>

      {/* Stats */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <span className="text-[#8A8A9E]">{terms.length} terms explained</span>
        <span className="text-[#8A8A9E]">·</span>
        <span className="text-[#8A8A9E]">{categories.length - 1} categories</span>
      </div>

      {/* Search & Filter */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border border-[#F0EDE8] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20 focus:border-[#1A4A42] transition-all bg-white"
        />
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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
      </div>

      {/* Terms List */}
      <div className="mt-8 space-y-3">
        {filteredTerms.length === 0 ? (
          <p className="text-center text-[#8A8A9E] py-12">
            No terms found. Try a different search.
          </p>
        ) : (
          filteredTerms.map((item) => (
            <div
              key={item.term}
              className="bg-white border border-[#F0EDE8] rounded-2xl px-5 py-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-display text-lg font-medium text-[#1A1A2E]">
                  {item.term}
                </h3>
                <span className="text-xs font-mono text-[#8A8A9E] bg-[#F9F7F4] px-3 py-1 rounded-full border border-[#F0EDE8]">
                  {item.category}
                </span>
              </div>
              <p className="text-[#4A4A5E] text-sm mt-1 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 p-4 bg-[#1A4A42]/5 rounded-2xl border border-[#1A4A42]/10 text-center">
        <p className="text-sm text-[#1A1A2E]">
          📚 {terms.length} terms explained. More coming soon!
        </p>
      </div>
    </div>
  );
}