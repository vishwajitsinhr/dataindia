import { ArticleCard, StatCard } from "@/components/Cards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who India is, in numbers | DataIndia",
  description:
    "India's population by age, urbanisation, demographic dividend, and literacy — key demographic indicators explained simply.",
  openGraph: {
    title: "Who India is, in numbers",
    description:
      "Age, growth, urbanisation, and demographic dividend — India explained.",
    url: "https://connectsangam.in/population",
    type: "website",
  },
};

export default function PopulationHub() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="font-mono text-[12px] uppercase tracking-widest text-[#1A4A42] bg-[#1A4A42]/10 px-3 py-1 rounded-full">
          Population
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8794A] bg-[#C8794A]/10 px-3 py-1 rounded-full">
          ConnectSangam
        </span>
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1A1A2E] max-w-xl">
        Who India is, in numbers
      </h1>
      <p className="text-[#8A8A9E] mt-4 max-w-lg">
        Age, growth, migration, demographic dividend, and household data from
        the census and national surveys.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <StatCard label="Population" value="1.47 billion" />
        <StatCard label="Median age" value="28.4 years" />
        <StatCard label="Urban share" value="36%" />
        <StatCard label="Literacy rate" value="77.7%" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mt-10">
        <ArticleCard href="/population/age-visualised" title="India's population by age, visualised" topic="population" />
        <ArticleCard href="/population/urbanisation" title="How fast is India urbanising" topic="population" />
        <ArticleCard href="/population/demographic-dividend" title="India's demographic dividend explained" topic="population" />
        <ArticleCard href="/population/literacy-gender-gap" title="India's literacy gender gap, explained" topic="population" />
      </div>
    </div>
  );
}