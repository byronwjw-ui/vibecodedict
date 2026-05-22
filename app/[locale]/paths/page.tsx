import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllPaths } from "@/lib/categories";
import { LearningPathCard } from "@/components/LearningPathCard";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  if (!isValidLocale(locale)) return {};
  const title = locale === "zh" ? `学习路径 | ${SITE_NAME}` : `Learning Paths · ${SITE_NAME}`;
  return {
    title,
    description: locale === "zh" ? "按顺序学习 AI 编程的词条路径。" : "Curated bilingual learning paths.",
    alternates: { canonical: `${SITE_URL}/${locale}/paths`, ...buildAlternates(`/paths`) },
  };
}

export default function PathsPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const paths = getAllPaths();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{t.paths.title}</h1>
      <p className="text-slate-600 mt-2 mb-8">{t.paths.subtitle}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {paths.map((p) => (<LearningPathCard key={p.slug} path={p} locale={loc} />))}
      </div>
    </div>
  );
}
