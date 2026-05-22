import Link from "next/link";
import type { LearningPath, Locale } from "@/types/term";
import { getDictionary } from "@/lib/i18n";
import { getTermBySlug } from "@/lib/terms";

export function LearningPathCard({ path, locale }: { path: LearningPath; locale: Locale }) {
  const p = path[locale];
  const t = getDictionary(locale);
  const preview = path.terms.slice(0, 5).map((s) => getTermBySlug(s)).filter(Boolean);
  return (
    <Link
      href={`/${locale}/paths/${path.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-sm transition"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">{p.title}</h3>
      <p className="text-sm text-slate-600 mt-1 line-clamp-2">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
        {preview.map((term) =>
          term ? (
            <span key={term.slug} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
              {term[locale].title}
            </span>
          ) : null,
        )}
        {path.terms.length > 5 ? <span className="px-2 py-0.5 text-slate-400">+{path.terms.length - 5}</span> : null}
      </div>
      <div className="mt-3 text-xs text-slate-500">{t.paths.termCount(path.terms.length)}</div>
    </Link>
  );
}
