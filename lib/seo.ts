import type { Metadata } from "next";
import type { Locale, Term, Category, LearningPath } from "@/types/term";
import { SITE_NAME, SITE_URL } from "./constants";

function altLang(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export function buildAlternates(pathWithinLocale: string) {
  // pathWithinLocale should start with '/'; e.g. '/terms/api'
  return {
    languages: {
      zh: `${SITE_URL}/zh${pathWithinLocale}`,
      en: `${SITE_URL}/en${pathWithinLocale}`,
      "x-default": `${SITE_URL}/zh${pathWithinLocale}`,
    },
  } as const;
}

export function termMetadata(term: Term, locale: Locale): Metadata {
  const content = term[locale];
  const title =
    locale === "zh"
      ? `${content.title} 是什么？小白也能看懂的解释 | ${SITE_NAME}`
      : `What is ${content.title}? Beginner-friendly explanation | ${SITE_NAME}`;
  const description =
    locale === "zh"
      ? `用小白能理解的方式解释 ${content.title}：它是什么、为什么重要、在 Vibe Coding 中怎么用、常见场景、相关概念和 Prompt 示例。`
      : `A beginner-friendly explanation of ${content.title}: what it means, why it matters, how it is used in Vibe Coding, common use cases, related terms, and prompt examples.`;
  const canonical = `${SITE_URL}/${locale}/terms/${term.slug}`;
  return {
    title,
    description,
    alternates: { canonical, ...buildAlternates(`/terms/${term.slug}`) },
    openGraph: { title, description, url: canonical, siteName: SITE_NAME, type: "article", locale },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function categoryMetadata(category: Category, locale: Locale): Metadata {
  const c = category[locale];
  const title =
    locale === "zh"
      ? `${c.name} 词条集合 | ${SITE_NAME}`
      : `${c.name} · ${SITE_NAME}`;
  const description = c.description;
  const canonical = `${SITE_URL}/${locale}/categories/${category.slug}`;
  return {
    title,
    description,
    alternates: { canonical, ...buildAlternates(`/categories/${category.slug}`) },
    openGraph: { title, description, url: canonical, siteName: SITE_NAME, type: "website", locale },
  };
}

export function pathMetadata(path: LearningPath, locale: Locale): Metadata {
  const p = path[locale];
  const title = locale === "zh" ? `${p.title} | ${SITE_NAME}` : `${p.title} · ${SITE_NAME}`;
  const description = p.description;
  const canonical = `${SITE_URL}/${locale}/paths/${path.slug}`;
  return {
    title,
    description,
    alternates: { canonical, ...buildAlternates(`/paths/${path.slug}`) },
    openGraph: { title, description, url: canonical, siteName: SITE_NAME, type: "website", locale },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const title =
    locale === "zh"
      ? `${SITE_NAME} · 看懂 AI 时代的编程词汇`
      : `${SITE_NAME} · Understand the language of AI and coding`;
  const description =
    locale === "zh"
      ? "Vibe Coding Dictionary 是一个为小白、Vibe Coder 和 AI 创业者准备的中英双语 AI 编程词典。"
      : "Vibe Coding Dictionary is a bilingual AI and coding glossary for beginners, Vibe Coders, and AI builders.";
  const canonical = `${SITE_URL}/${locale}`;
  return {
    title,
    description,
    alternates: { canonical, ...buildAlternates(`/`) },
    openGraph: { title, description, url: canonical, siteName: SITE_NAME, type: "website", locale },
  };
}
