import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools — Free India Data Calculators | DataIndia",
  description:
    "Free calculators for India's data — EMI calculator, inflation adjuster, and percentage change. No signup, no tracking.",
  openGraph: {
    title: "Tools — Free India Data Calculators | DataIndia",
    description:
      "EMI, inflation, and percentage calculators. Free and private.",
    url: "https://connectsangam.in/tools",
    type: "website",
  },
};

const tools = [
  {
    href: "/tools/emi",
    emoji: "🏠",
    title: "EMI Calculator",
    description:
      "Calculate your monthly home, car, or personal loan EMI. See total interest and total payment instantly.",
  },
  {
    href: "/tools/inflation",
    emoji: "💰",
    title: "Inflation Adjuster",
    description:
      "See what an old amount is worth today. Adjust for inflation across any years since 2000.",
  },
  {
    href: "/tools/percentage",
    emoji: "📊",
    title: "Percentage Change",
    description:
      "Find the percentage increase or decrease between any two values. Useful for data analysis.",
  },
];

export default function ToolsHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Tools
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        Data tools you can actually use
      </h1>
      <p className="text-[#8A8A9E] mt-3 max-w-lg">
        Simple calculators to understand India&rsquo;s numbers — free, private,
        and no signup required.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group relative bg-white border border-[#F0EDE8] rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A4A42] to-[#C8794A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="text-3xl mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 inline-block">
              {tool.emoji}
            </div>
            <h3 className="font-display text-xl font-medium text-[#1A1A2E] group-hover:text-[#C8794A] transition-colors">
              {tool.title}
            </h3>
            <p className="text-sm text-[#4A4A5E] mt-2 leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#8A8A9E] group-hover:text-[#1A4A42] transition-colors">
              <span>Open tool</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-5 bg-[#1A4A42]/5 border border-[#1A4A42]/10 rounded-2xl text-center">
        <p className="text-sm text-[#1A1A2E]">
          🔒 All calculations run in your browser. Your inputs never leave your
          device.
        </p>
      </div>
    </div>
  );
}