import Link from "next/link";
import type { Term, Locale } from "@/types/term";

export function RelatedTerms({ terms, locale }: { terms: Term[]; locale: Locale }) {
  if (!terms.length) return null;
  return (
    <ul className="grid sm:grid-cols-2 gap-2">
      {terms.map((t) => (
        <li key={t.slug}>
          <Link
            href={`/${locale}/terms/${t.slug}`}
            className="block rounded-lg border border-slate-200 px-3 py-2 hover:border-brand-200 hover:bg-brand-50/40"
          >
            <div className="text-sm font-medium text-slate-900">{t[locale].title}</div>
            <div className="text-xs text-slate-500 line-clamp-1">{t[locale].oneLiner}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
