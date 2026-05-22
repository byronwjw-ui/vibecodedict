import categoriesData from "@/data/categories.json";
import pathsData from "@/data/learning-paths.json";
import type { Category, LearningPath } from "@/types/term";
import { getAllTerms } from "./terms";

export function getAllCategories(): Category[] {
  const cats = categoriesData as unknown as Category[];
  const terms = getAllTerms();
  return cats.map((c) => ({ ...c, count: terms.filter((t) => t.category === c.slug).length }));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((c) => c.slug === slug);
}

export function getAllPaths(): LearningPath[] {
  return pathsData as unknown as LearningPath[];
}

export function getPathBySlug(slug: string): LearningPath | undefined {
  return getAllPaths().find((p) => p.slug === slug);
}
