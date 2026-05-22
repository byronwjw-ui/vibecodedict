import Link from "next/link";
import type { Category, Locale } from "@/types/term";
import { getDictionary } from "@/lib/i18n";
import * as Icons from "lucide-react";

export function CategoryCard({ category, locale }: { category: Category; locale: Locale }) {
  const c = category[locale];
  const t = getDictionary(locale);
  // @ts-expect-error — dynamic icon access
  const Icon = Icons[category.icon] || Icons.Folder;
  return (
    <Link
      href={`/${locale}/categories/${category.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-200 hover:shadow-sm transition"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">{c.name}</h3>
      </div>
      <p className="text-sm text-slate-600 line-clamp-2 mb-3">{c.description}</p>
      <div className="text-xs text-slate-500">{t.categories.termCount(category.count)}</div>
    </Link>
  );
}
