"use client";

import { useState } from "react";
import Link from "next/link";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const months = years * 12;
  const emi =
    monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : principal / months;
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;
  const interestShare = (totalInterest / totalPayment) * 100;

  const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

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
          EMI Calculator
        </h1>
        <p className="text-[#8A8A9E] mt-3 text-sm">
          Calculate your monthly loan payment, total interest, and total
          repayment.
        </p>

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          {/* Inputs */}
          <div className="lg:col-span-3 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline">
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    Loan amount
                  </label>
                  <span className="font-display text-lg font-semibold text-[#1A1A2E]">
                    {fmt(principal)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={20000000}
                  step={50000}
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full mt-3 accent-[#1A4A42]"
                />
                <div className="flex justify-between text-[10px] text-[#8A8A9E] mt-1 font-mono">
                  <span>₹1L</span>
                  <span>₹2Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    Interest rate (per year)
                  </label>
                  <span className="font-display text-lg font-semibold text-[#1A1A2E]">
                    {rate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full mt-3 accent-[#1A4A42]"
                />
                <div className="flex justify-between text-[10px] text-[#8A8A9E] mt-1 font-mono">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                    Tenure
                  </label>
                  <span className="font-display text-lg font-semibold text-[#1A1A2E]">
                    {years} {years === 1 ? "year" : "years"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full mt-3 accent-[#1A4A42]"
                />
                <div className="flex justify-between text-[10px] text-[#8A8A9E] mt-1 font-mono">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 bg-[#1A4A42] rounded-2xl p-6 text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/60">
              Monthly EMI
            </p>
            <p className="font-display text-4xl font-semibold mt-1">
              {fmt(emi)}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Principal</span>
                <span className="font-medium">{fmt(principal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Total interest</span>
                <span className="font-medium">{fmt(totalInterest)}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-white/20">
                <span className="text-white/70">Total payment</span>
                <span className="font-medium">{fmt(totalPayment)}</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-xs text-white/60 mb-1">
                <span>Interest share</span>
                <span>{interestShare.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#C8794A] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${interestShare}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#8A8A9E] mt-4">
          Home loan rates are usually 2-3% above the repo rate. Check your bank
          for the exact rate.
        </p>

        {/* Related */}
        <div className="mt-10 pt-8 border-t border-[#E8E5E0]">
          <p className="text-sm text-[#8A8A9E] mb-3">Related reading</p>
          <Link
            href="/economy/repo-rate"
            className="inline-block px-4 py-2 bg-white border border-[#F0EDE8] rounded-xl text-sm hover:border-[#1A4A42] hover:text-[#1A4A42] transition-colors"
          >
            What the repo rate means for your EMI →
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