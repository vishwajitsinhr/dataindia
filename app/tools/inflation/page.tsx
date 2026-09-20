"use client";

import { useState } from "react";
import Link from "next/link";

export default function InflationAdjuster() {
  const [amount, setAmount] = useState(100000);
  const [fromYear, setFromYear] = useState(2015);
  const [toYear, setToYear] = useState(2026);
  const [rate, setRate] = useState(5);

  const years = Math.max(0, toYear - fromYear);
  const adjusted = amount * Math.pow(1 + rate / 100, years);
  const totalIncrease = adjusted - amount;
  const percentIncrease = amount > 0 ? (adjusted / amount - 1) * 100 : 0;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

  const currentYear = new Date().getFullYear();
  const yearsList = Array.from(
    { length: currentYear - 1999 },
    (_, i) => currentYear - i
  ).reverse();

  // Year-by-year breakdown (last 5 years only, to keep UI clean)
  const breakdown = Array.from({ length: years + 1 }, (_, i) => {
    const y = fromYear + i;
    const value = amount * Math.pow(1 + rate / 100, i);
    return { year: y, value };
  });
  const displayBreakdown = years <= 10 ? breakdown : breakdown.filter((_, i) => i % 5 === 0 || i === years);

  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#1A4A42] bg-[#1A4A42]/10 px-4 py-1.5 rounded-full">
            Tools
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8A8A9E] bg-white px-4 py-1.5 rounded-full border border-[#F0EDE8]">
            ConnectSangam
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.1] text-[#1A1A2E]">
          Inflation Adjuster
        </h1>
        <p className="text-[#8A8A9E] mt-3 text-sm">
          See what an old amount is worth today, adjusted for inflation.
        </p>

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          {/* Inputs */}
          <div className="lg:col-span-3 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-2 border border-[#F0EDE8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20 focus:border-[#1A4A42] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    From year
                  </label>
                  <select
                    value={fromYear}
                    onChange={(e) => setFromYear(Number(e.target.value))}
                    className="w-full mt-2 border border-[#F0EDE8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20"
                  >
                    {yearsList.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    To year
                  </label>
                  <select
                    value={toYear}
                    onChange={(e) => setToYear(Number(e.target.value))}
                    className="w-full mt-2 border border-[#F0EDE8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20"
                  >
                    {yearsList.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    Average inflation
                  </label>
                  <span className="font-display text-lg font-semibold text-[#1A1A2E]">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full mt-3 accent-[#1A4A42]"
                />
                <div className="flex justify-between text-[10px] text-[#8A8A9E] mt-1 font-mono">
                  <span>1%</span>
                  <span>15%</span>
                </div>
                <p className="text-xs text-[#8A8A9E] mt-2">
                  India&rsquo;s long-term CPI average has been around 5-6%.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 bg-[#1A4A42] rounded-2xl p-6 text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/60">
              Adjusted value in {toYear}
            </p>
            <p className="font-display text-4xl font-semibold mt-1">
              {fmt(adjusted)}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Original amount</span>
                <span className="font-medium">{fmt(amount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Increase</span>
                <span className="font-medium">{fmt(totalIncrease)}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-white/20">
                <span className="text-white/70">In {years} years</span>
                <span className="font-medium">+{percentIncrease.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Year-by-year breakdown */}
        {displayBreakdown.length > 1 && (
          <div className="mt-8 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-[#1A1A2E] mb-4">
              Year by year
            </h2>
            <div className="space-y-2 text-sm">
              {displayBreakdown.map((row) => (
                <div
                  key={row.year}
                  className="flex justify-between items-center border-b border-[#E8E5E0] pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-[#8A8A9E] font-mono">{row.year}</span>
                  <span className="font-medium text-[#1A1A2E]">
                    {fmt(row.value)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 pt-8 border-t border-[#E8E5E0]">
          <p className="text-sm text-[#8A8A9E] mb-3">Related reading</p>
          <Link
            href="/economy/inflation"
            className="inline-block px-4 py-2 bg-white border border-[#F0EDE8] rounded-xl text-sm hover:border-[#1A4A42] hover:text-[#1A4A42] transition-colors"
          >
            Is India&rsquo;s inflation actually falling →
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-[#8A8A9E] hover:text-[#1A4A42] transition-colors"
          >
            ← Back to all tools
          </Link>
        </div>
      </div>
    </div>
  );
}