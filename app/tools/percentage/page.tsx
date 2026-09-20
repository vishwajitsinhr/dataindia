"use client";

import { useState } from "react";
import Link from "next/link";

export default function PercentageChange() {
  const [oldValue, setOldValue] = useState(100);
  const [newValue, setNewValue] = useState(115);

  const diff = newValue - oldValue;
  const change = oldValue !== 0 ? (diff / oldValue) * 100 : 0;
  const isIncrease = diff >= 0;

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
          Percentage Change
        </h1>
        <p className="text-[#8A8A9E] mt-3 text-sm">
          Find the percentage increase or decrease between any two values.
        </p>

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          {/* Inputs */}
          <div className="lg:col-span-3 bg-white border border-[#F0EDE8] rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                  Old value
                </label>
                <input
                  type="number"
                  value={oldValue}
                  onChange={(e) => setOldValue(Number(e.target.value))}
                  className="w-full mt-2 border border-[#F0EDE8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20 focus:border-[#1A4A42] transition-all"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                  New value
                </label>
                <input
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(Number(e.target.value))}
                  className="w-full mt-2 border border-[#F0EDE8] rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A4A42]/20 focus:border-[#1A4A42] transition-all"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E5E0]">
              <p className="text-xs uppercase tracking-widest text-[#8A8A9E]">
                Formula
              </p>
              <p className="font-mono text-sm text-[#4A4A5E] mt-2">
                % change = ((new − old) / old) × 100
              </p>
            </div>
          </div>

          {/* Result */}
          <div
            className={`lg:col-span-2 rounded-2xl p-6 text-white ${
              isIncrease ? "bg-[#1A4A42]" : "bg-[#C8794A]"
            }`}
          >
            <p className="text-[10px] uppercase tracking-widest text-white/60">
              {isIncrease ? "Increase" : "Decrease"}
            </p>
            <p className="font-display text-4xl font-semibold mt-1">
              {isIncrease ? "+" : ""}
              {change.toFixed(2)}%
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Old value</span>
                <span className="font-medium">{oldValue.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">New value</span>
                <span className="font-medium">{newValue.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm pt-3 border-t border-white/20">
                <span className="text-white/70">Difference</span>
                <span className="font-medium">
                  {isIncrease ? "+" : ""}
                  {diff.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-[#F0EDE8] rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-[#8A8A9E]">
              Example
            </p>
            <p className="text-sm text-[#4A4A5E] mt-2 leading-relaxed">
              If India&rsquo;s GDP grew from ₹100 to ₹107.7, that&rsquo;s a{" "}
              <strong className="text-[#1A1A2E]">+7.7%</strong> change.
            </p>
          </div>
          <div className="bg-white border border-[#F0EDE8] rounded-2xl p-5">
            <p className="text-xs uppercase tracking-widest text-[#8A8A9E]">
              Common use
            </p>
            <p className="text-sm text-[#4A4A5E] mt-2 leading-relaxed">
              Comparing any two periods — inflation, growth, exports, or
              anything else in our articles.
            </p>
          </div>
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