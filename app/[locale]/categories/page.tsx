import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllCategories } from "@/lib/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const title = locale === "zh" ? `分类浏览 | ${SITE_NAME}` : `Categories · ${SITE_NAME}`;
  return {
    title,
    description: locale === "zh" ? "按分类浏览 AI 编程词汇。" : "Browse the dictionary by category.",
    alternates: { canonical: `${SITE_URL}/${locale}/categories`, ...buildAlternates(`/categories`) },
  };
}

export default async function CategoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const categories = getAllCategories();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{t.categories.title}</h1>
      <p className="text-slate-600 mt-2 mb-8">{t.categories.subtitle}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((c) => (<CategoryCard key={c.slug} category={c} locale={loc} />))}
      </div>
    </div>
  );
}
