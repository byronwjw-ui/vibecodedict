import Fuse from "fuse.js";
import { getAllTerms } from "./terms";
import type { Term, Locale } from "@/types/term";

export interface SearchResult {
  term: Term;
  score: number;
}

let ZH_INDEX: Fuse<Term> | null = null;
let EN_INDEX: Fuse<Term> | null = null;

function makeIndex(locale: Locale): Fuse<Term> {
  const keys: { name: string; weight: number }[] = [
    { name: "slug", weight: 0.4 },
    { name: `${locale}.title`, weight: 0.5 },
    { name: `${locale}.english`, weight: 0.4 },
    { name: `${locale}.chinese`, weight: 0.4 },
    { name: `${locale}.oneLiner`, weight: 0.3 },
    { name: `${locale}.beginnerExplanation`, weight: 0.2 },
    { name: "tags", weight: 0.2 },
    { name: "category", weight: 0.1 },
  ];
  return new Fuse(getAllTerms(), {
    keys,
    threshold: 0.4,
    ignoreLocation: true,
    includeScore: true,
    minMatchCharLength: 1,
  });
}

function getIndex(locale: Locale): Fuse<Term> {
  if (locale === "zh") {
    if (!ZH_INDEX) ZH_INDEX = makeIndex("zh");
    return ZH_INDEX;
  }
  if (!EN_INDEX) EN_INDEX = makeIndex("en");
  return EN_INDEX;
}

export function searchTerms(query: string, locale: Locale, limit = 30): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  const results = getIndex(locale).search(q, { limit });
  return results.map((r) => ({ term: r.item, score: r.score ?? 0 }));
}
