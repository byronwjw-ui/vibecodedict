import Link from "next/link";
import type { Term, Locale } from "@/types/term";
import { DifficultyBadge } from "./DifficultyBadge";
import { getDictionary } from "@/lib/i18n";

export function TermCard({ term, locale }: { term: Term; locale: Locale }) {
  const c = term[locale];
  const t = getDictionary(locale);
  return (
    <Link
      href={`/${locale}/terms/${term.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-sm transition"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700 leading-tight">
          {c.title}
        </h3>
        <DifficultyBadge difficulty={term.difficulty} locale={locale} />
      </div>
      <p className="text-sm text-slate-600 line-clamp-2">{c.oneLiner}</p>
      <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-slate-500">
        <span className="px-2 py-0.5 rounded-md bg-slate-100">{c.chinese || c.english}</span>
        {term.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-50">#{tag}</span>
        ))}
      </div>
      <span className="sr-only">{t.common.readMore}</span>
    </Link>
  );
}
