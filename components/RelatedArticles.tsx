import Link from "next/link";

interface RelatedArticle {
  href: string;
  title: string;
  topic: "economy" | "population" | "states" | "health" | "world" | "agriculture";
}

const topicLabels: Record<string, string> = {
  economy: "Economy",
  population: "Population",
  states: "States",
  health: "Health",
  world: "India vs world",
  agriculture: "Agriculture",
};

export default function RelatedArticles({
  articles,
}: {
  articles: RelatedArticle[];
}) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#E8E5E0]">
      <h3 className="font-display text-xl font-semibold text-[#1A1A2E] mb-4">
        Related Articles
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="bg-white rounded-xl px-4 py-3 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-[#F0EDE8]"
          >
            <p className="font-display text-sm text-[#1A1A2E]">
              {article.title}
            </p>
            <p className="text-xs font-mono mt-0.5 text-[#1A4A42]">
              {topicLabels[article.topic] || article.topic}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}