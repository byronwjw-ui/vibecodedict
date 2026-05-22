"use client";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { Term, Category, Locale, Difficulty } from "@/types/term";
import { TermCard } from "@/components/TermCard";
import { EmptyState } from "@/components/EmptyState";
import { getDictionary } from "@/lib/i18n";
import { Search } from "lucide-react";

export function TermsBrowser({ terms, categories, locale }: { terms: Term[]; categories: Category[]; locale: Locale }) {
  const t = getDictionary(locale);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("");
  const [diff, setDiff] = useState<Difficulty | "">("");

  const fuse = useMemo(
    () =>
      new Fuse(terms, {
        keys: [
          `${locale}.title`,
          `${locale}.english`,
          `${locale}.chinese`,
          `${locale}.oneLiner`,
          `${locale}.beginnerExplanation`,
          "slug",
          "tags",
        ],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [terms, locale],
  );

  const filtered = useMemo(() => {
    let list = q.trim() ? fuse.search(q).map((r) => r.item) : terms;
    if (cat) list = list.filter((x) => x.category === cat);
    if (diff) list = list.filter((x) => x.difficulty === diff);
    return list;
  }, [terms, q, cat, diff, fuse]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 flex-1 rounded-xl border border-slate-200 bg-white px-4 h-11">
          <Search className="w-4 h-4 text-slate-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.list.searchInList} className="flex-1 bg-transparent outline-none" />
        </div>
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="">{t.list.allCategories}</option>
          {categories.map((c) => (<option key={c.slug} value={c.slug}>{c[locale].name}</option>))}
        </select>
        <select value={diff} onChange={(e) => setDiff(e.target.value as Difficulty | "")} className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm">
          <option value="">{t.list.allDifficulties}</option>
          <option value="beginner">{t.difficulty.beginner}</option>
          <option value="intermediate">{t.difficulty.intermediate}</option>
          <option value="advanced">{t.difficulty.advanced}</option>
        </select>
      </div>
      {filtered.length === 0 ? (
        <EmptyState message={t.list.empty} />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((term) => (<TermCard key={term.slug} term={term} locale={locale} />))}
        </div>
      )}
    </div>
  );
}
