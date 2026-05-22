import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/constants";
import { getAllTerms } from "@/lib/terms";
import { getAllCategories, getAllPaths } from "@/lib/categories";

// Explicit literal types so Next 15.5+ strict MetadataRoute.Sitemap
// inference does not widen these to `string`.
type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
const WEEKLY: ChangeFreq = "weekly";
const MONTHLY: ChangeFreq = "monthly";
const YEARLY: ChangeFreq = "yearly";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  for (const locale of LOCALES) {
    out.push({ url: `${SITE_URL}/${locale}`, lastModified: now, changeFrequency: WEEKLY, priority: 1 });
    out.push({ url: `${SITE_URL}/${locale}/terms`, lastModified: now, changeFrequency: WEEKLY, priority: 0.9 });
    out.push({ url: `${SITE_URL}/${locale}/categories`, lastModified: now, changeFrequency: WEEKLY, priority: 0.7 });
    out.push({ url: `${SITE_URL}/${locale}/paths`, lastModified: now, changeFrequency: WEEKLY, priority: 0.7 });
    out.push({ url: `${SITE_URL}/${locale}/about`, lastModified: now, changeFrequency: YEARLY, priority: 0.3 });
  }
  for (const term of getAllTerms()) {
    for (const locale of LOCALES) {
      out.push({ url: `${SITE_URL}/${locale}/terms/${term.slug}`, lastModified: now, changeFrequency: MONTHLY, priority: 0.6 });
    }
  }
  for (const c of getAllCategories()) {
    for (const locale of LOCALES) {
      out.push({ url: `${SITE_URL}/${locale}/categories/${c.slug}`, lastModified: now, changeFrequency: MONTHLY, priority: 0.5 });
    }
  }
  for (const p of getAllPaths()) {
    for (const locale of LOCALES) {
      out.push({ url: `${SITE_URL}/${locale}/paths/${p.slug}`, lastModified: now, changeFrequency: MONTHLY, priority: 0.5 });
    }
  }
  return out;
}
