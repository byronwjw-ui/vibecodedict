import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllCategories, getCategoryBySlug } from "@/lib/categories";
import { getTermsByCategory } from "@/lib/terms";
import { TermCard } from "@/components/TermCard";
import { categoryMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of ["zh", "en"]) {
    for (const c of getAllCategories()) out.push({ locale, slug: c.slug });
  }
  return out;
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  const { locale, slug } = params;
  if (!isValidLocale(locale)) return {};
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return categoryMetadata(category, locale as Locale);
}

export default function CategoryDetail({ params }: { params: { locale: string; slug: string } }) {
  const { locale, slug } = params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const category = getCategoryBySlug(slug);
  if (!category) {
    notFound();
  }
  const cat = category!;
  const terms = getTermsByCategory(slug);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm text-slate-500 mb-4">
        <Link href={`/${loc}`} className="hover:text-slate-900">{t.siteName}</Link>
        <span className="mx-1">/</span>
        <Link href={`/${loc}/categories`} className="hover:text-slate-900">{t.nav.categories}</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-900">{cat[loc].name}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{cat[loc].name}</h1>
      <p className="text-slate-600 mt-2 mb-2">{cat[loc].description}</p>
      <p className="text-xs text-slate-500 mb-8">{t.categories.termCount(terms.length)}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {terms.map((term) => (<TermCard key={term.slug} term={term} locale={loc} />))}
      </div>
    </div>
  );
}
