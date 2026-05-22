import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { getAllTerms, getTermBySlug } from "@/lib/terms";
import { TermDetail } from "@/components/TermDetail";
import { termMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const out: { locale: string; slug: string }[] = [];
  const terms = getAllTerms();
  for (const locale of ["zh", "en"]) {
    for (const t of terms) out.push({ locale, slug: t.slug });
  }
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const term = getTermBySlug(slug);
  if (!term) return {};
  return termMetadata(term, locale as Locale);
}

export default async function TermDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const term = getTermBySlug(slug);
  if (!term) notFound();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <TermDetail term={term} locale={locale as Locale} />
    </div>
  );
}
