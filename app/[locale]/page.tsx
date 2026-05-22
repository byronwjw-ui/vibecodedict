import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllTerms, getPopularTerms, getRecentTerms, getBeginnerMustRead } from "@/lib/terms";
import { getAllCategories, getAllPaths } from "@/lib/categories";
import { SearchBox } from "@/components/SearchBox";
import { SectionHeading } from "@/components/SectionHeading";
import { TermCard } from "@/components/TermCard";
import { CategoryCard } from "@/components/CategoryCard";
import { LearningPathCard } from "@/components/LearningPathCard";
import { homeMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const { locale } = params;
  if (!isValidLocale(locale)) return {};
  return homeMetadata(locale as Locale);
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const terms = getAllTerms();
  const popular = getPopularTerms().slice(0, 6);
  const mustRead = getBeginnerMustRead().slice(0, 6);
  const recent = getRecentTerms(6);
  const categories = getAllCategories();
  const paths = getAllPaths();
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">{t.home.heroTitle}</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{t.home.heroSubtitle}</p>
        <div className="mt-8 max-w-2xl mx-auto">
          <SearchBox terms={terms} locale={loc} size="lg" placeholder={t.home.searchPlaceholder} />
        </div>
        <div className="mt-4 text-xs text-slate-400">{terms.length}+ {loc === "zh" ? "中英双语词条" : "bilingual terms"}</div>
      </section>

      <section className="py-8">
        <SectionHeading title={t.home.popular} action={<Link href={`/${loc}/terms`} className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">{t.common.readMore} <ArrowRight className="w-3 h-3" /></Link>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {popular.map((term) => (<TermCard key={term.slug} term={term} locale={loc} />))}
        </div>
      </section>

      <section className="py-8">
        <SectionHeading title={t.home.categories} action={<Link href={`/${loc}/categories`} className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">{t.common.readMore} <ArrowRight className="w-3 h-3" /></Link>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((c) => (<CategoryCard key={c.slug} category={c} locale={loc} />))}
        </div>
      </section>

      <section className="py-8">
        <SectionHeading title={t.home.paths} action={<Link href={`/${loc}/paths`} className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">{t.common.readMore} <ArrowRight className="w-3 h-3" /></Link>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {paths.map((p) => (<LearningPathCard key={p.slug} path={p} locale={loc} />))}
        </div>
      </section>

      <section className="py-8">
        <SectionHeading title={t.home.mustRead} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mustRead.map((term) => (<TermCard key={term.slug} term={term} locale={loc} />))}
        </div>
      </section>

      <section className="py-8">
        <SectionHeading title={t.home.recent} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {recent.map((term) => (<TermCard key={term.slug} term={term} locale={loc} />))}
        </div>
      </section>

      <section className="py-12 my-8 rounded-2xl bg-slate-50 border border-slate-200 p-8">
        <h2 className="text-2xl font-semibold text-slate-900">{t.home.whyTitle}</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">{t.home.whyBody}</p>
      </section>
    </div>
  );
}
