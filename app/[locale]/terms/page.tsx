import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllTerms } from "@/lib/terms";
import { getAllCategories } from "@/lib/categories";
import { TermsBrowser } from "./TermsBrowser";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const title = locale === "zh" ? `所有词条 | ${SITE_NAME}` : `All Terms · ${SITE_NAME}`;
  const description = locale === "zh" ? "浏览中英双语 AI 编程词典的全部词条。" : "Browse all bilingual entries in Vibe Coding Dictionary.";
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${locale}/terms`, ...buildAlternates(`/terms`) },
  };
}

export default async function TermsListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const terms = getAllTerms();
  const categories = getAllCategories();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t.list.title}</h1>
      <p className="text-slate-600 mb-6">{t.list.total(terms.length)}</p>
      <TermsBrowser terms={terms} categories={categories} locale={loc} />
    </div>
  );
}
