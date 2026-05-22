"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { Search, X } from "lucide-react";
import type { Term, Locale } from "@/types/term";
import { getDictionary } from "@/lib/i18n";

interface Props {
  terms: Term[];
  locale: Locale;
  placeholder?: string;
  size?: "md" | "lg";
  autoFocus?: boolean;
}

export function SearchBox({ terms, locale, placeholder, size = "md", autoFocus }: Props) {
  const t = getDictionary(locale);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const fuse = useMemo(
    () =>
      new Fuse(terms, {
        keys: [
          { name: "slug", weight: 0.4 },
          { name: `${locale}.title`, weight: 0.5 },
          { name: `${locale}.english`, weight: 0.4 },
          { name: `${locale}.chinese`, weight: 0.4 },
          { name: `${locale}.oneLiner`, weight: 0.3 },
          { name: `${locale}.beginnerExplanation`, weight: 0.2 },
          { name: "tags", weight: 0.2 },
          { name: "category", weight: 0.1 },
        ],
        threshold: 0.4,
        ignoreLocation: true,
        minMatchCharLength: 1,
      }),
    [terms, locale],
  );
  const results = useMemo(() => (q.trim() ? fuse.search(q, { limit: 8 }).map((r) => r.item) : []), [q, fuse]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const sizeCls = size === "lg" ? "h-14 text-lg" : "h-11 text-base";
  return (
    <div ref={ref} className="relative w-full">
      <div className={`flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 ${sizeCls} shadow-sm focus-within:border-brand-300`}>
        <Search className="w-4 h-4 text-slate-400" />
        <input
          aria-label={t.common.search}
          autoFocus={autoFocus}
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder || t.home.searchPlaceholder}
          className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
        />
        {q ? (
          <button onClick={() => { setQ(""); setOpen(false); }} aria-label="clear" className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        ) : null}
      </div>
      {open && q.trim() ? (
        <div className="absolute z-20 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden">
          {results.length === 0 ? (
            <div className="p-4 text-sm text-slate-500">{t.common.noResults}</div>
          ) : (
            <ul>
              {results.map((term) => (
                <li key={term.slug}>
                  <Link
                    href={`/${locale}/terms/${term.slug}`}
                    className="block px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-slate-900">{term[locale].title}</span>
                      <span className="text-xs text-slate-400">{t.difficulty[term.difficulty]}</span>
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{term[locale].oneLiner}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
