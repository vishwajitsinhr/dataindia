import Link from "next/link";

// ============================================
// STAT CARD
// ============================================
export function StatCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative bg-white rounded-2xl px-4 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-[#F0EDE8] ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A4A42] to-[#C8794A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <p className="text-[10px] uppercase tracking-[0.12em] text-[#8A8A9E]">
          {label}
        </p>
        <p className="font-display text-xl font-semibold text-[#1A1A2E] mt-0.5 tracking-tight break-words leading-tight">
          {value}
        </p>
      </div>
    </div>
  );
}

// ============================================
// ARTICLE CARD
// ============================================
const topicColors: Record<
  string,
  { dot: string; label: string }
> = {
  economy: { dot: "bg-[#1A4A42]", label: "Economy" },
  population: { dot: "bg-[#1A4A42]", label: "Population" },
  health: { dot: "bg-[#1A4A42]", label: "Health" },
  states: { dot: "bg-[#1A4A42]", label: "States" },
  world: { dot: "bg-[#1A4A42]", label: "India vs world" },
  agriculture: { dot: "bg-[#1A4A42]", label: "Agriculture" },
};

export function ArticleCard({
  href,
  title,
  topic,
  className = "",
}: {
  href: string;
  title: string;
  topic:
    | "economy"
    | "population"
    | "health"
    | "states"
    | "world"
    | "agriculture";
  className?: string;
}) {
  const s = topicColors[topic];
  return (
    <Link
      href={href}
      className={`block group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#F0EDE8] ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2 h-2 rounded-full ${s.dot}`} />
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#8A8A9E]">
          {s.label}
        </span>
      </div>
      <h3 className="font-display text-xl font-medium text-[#1A1A2E] group-hover:text-[#C8794A] transition-colors leading-snug">
        {title}
      </h3>
      <div className="mt-4 flex items-center gap-2 text-sm text-[#8A8A9E] group-hover:text-[#1A4A42] transition-colors">
        <span>Read article</span>
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
  );
}

// ============================================
// TOPIC TILE
// ============================================
export function TopicTile({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const icons: Record<string, string> = {
    Economy: "📊",
    Population: "👥",
    States: "🗺️",
    Health: "❤️",
    "India vs world": "🌍",
    Agriculture: "🌾",
  };

  return (
    <Link
      href={href}
      className="group relative bg-white rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#F0EDE8] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A4A42]/5 to-[#C8794A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="text-3xl mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
          {icons[title] || "📌"}
        </div>
        <p className="text-sm font-medium text-[#1A1A2E] group-hover:text-[#C8794A] transition-colors">
          {title}
        </p>
      </div>
    </Link>
  );
}