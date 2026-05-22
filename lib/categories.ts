import categoriesData from "@/data/categories.json";
import pathsData from "@/data/learning-paths.json";
import type { Category, LearningPath } from "@/types/term";
import { getAllTerms } from "./terms";

export function getAllCategories(): Category[] {
  const cats = categoriesData as Category[];
  const terms = getAllTerms();
  // recompute count from real data so it stays accurate
  return cats.map((c) => ({ ...c, count: terms.filter((t) => t.category === c.slug).length }));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((c) => c.slug === slug);
}

export function getAllPaths(): LearningPath[] {
  return pathsData as LearningPath[];
}

export function getPathBySlug(slug: string): LearningPath | undefined {
  return getAllPaths().find((p) => p.slug === slug);
}
