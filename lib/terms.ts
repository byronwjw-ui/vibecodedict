import { buildTerms } from "./build-terms";
import type { Term, Locale, LocalizedTermContent, QualityLevel } from "@/types/term";
import { POPULAR_TERM_SLUGS, BEGINNER_MUST_READ_SLUGS } from "./constants";

export function getAllTerms(): Term[] {
  return buildTerms();
}

export function getTermBySlug(slug: string): Term | undefined {
  return getAllTerms().find((t) => t.slug === slug);
}

export function getTermsByCategory(categorySlug: string): Term[] {
  return getAllTerms().filter((t) => t.category === categorySlug);
}

export function getRelatedTerms(term: Term): Term[] {
  return term.relatedTerms
    .map((slug) => getTermBySlug(slug))
    .filter((t): t is Term => Boolean(t));
}

export function getLearningPathTerms(slugs: string[]): Term[] {
  return slugs
    .map((s) => getTermBySlug(s))
    .filter((t): t is Term => Boolean(t));
}

export function getPopularTerms(): Term[] {
  return POPULAR_TERM_SLUGS.map((s) => getTermBySlug(s)).filter((t): t is Term => Boolean(t));
}

export function getRecentTerms(limit = 12): Term[] {
  return [...getAllTerms()]
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, limit);
}

export function getBeginnerMustRead(): Term[] {
  return BEGINNER_MUST_READ_SLUGS.map((s) => getTermBySlug(s)).filter((t): t is Term => Boolean(t));
}

export function getTermsByQualityLevel(level: QualityLevel): Term[] {
  return getAllTerms().filter((t) => t.qualityLevel === level);
}

export function getLocalizedTerm(term: Term, locale: Locale): LocalizedTermContent {
  return term[locale];
}
