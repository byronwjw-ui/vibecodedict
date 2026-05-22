import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllPaths, getPathBySlug } from "@/lib/categories";
import { getLearningPathTerms } from "@/lib/terms";
import { pathMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  for (const locale of ["zh", "en"]) {
    for (const p of getAllPaths()) out.push({ locale, slug: p.slug });
  }
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const path = getPathBySlug(slug);
  if (!path) return {};
  return pathMetadata(path, locale as Locale);
}

export default async function PathDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  const path = getPathBySlug(slug);
  if (!path) {
    notFound();
  }
  const pth = path!;
  const terms = getLearningPathTerms(pth.terms);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-slate-500 mb-4">
        <Link href={`/${loc}`} className="hover:text-slate-900">{t.siteName}</Link>
        <span className="mx-1">/</span>
        <Link href={`/${loc}/paths`} className="hover:text-slate-900">{t.nav.paths}</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-900">{pth[loc].title}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{pth[loc].title}</h1>
      <p className="text-slate-600 mt-2 mb-8">{pth[loc].description}</p>
      <ol className="space-y-3">
        {terms.map((term, i) => (
          <li key={term.slug}>
            <Link href={`/${loc}/terms/${term.slug}`} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-200 hover:shadow-sm">
              <span className="shrink-0 w-9 h-9 rounded-full bg-brand-50 text-brand-700 font-semibold flex items-center justify-center">{i + 1}</span>
              <div className="flex-1">
                <div className="text-xs text-slate-400">{t.paths.stepLabel(i + 1)}</div>
                <div className="font-medium text-slate-900">{term[loc].title}</div>
                <div className="text-sm text-slate-500 line-clamp-2">{term[loc].oneLiner}</div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
