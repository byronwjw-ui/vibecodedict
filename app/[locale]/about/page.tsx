import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const title = locale === "zh" ? `关于 | ${SITE_NAME}` : `About · ${SITE_NAME}`;
  return {
    title,
    description: locale === "zh" ? "了解 Vibe Coding Dictionary 是什么、为谁而做、为什么做。" : "Learn what Vibe Coding Dictionary is, who it is for, and why it exists.",
    alternates: { canonical: `${SITE_URL}/${locale}/about`, ...buildAlternates(`/about`) },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = getDictionary(loc);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-slate">
      <h1>{t.about.title}</h1>
      {loc === "zh" ? (
        <>
          <p>Vibe Coding Dictionary 是一个为小白、Vibe Coder、非科班开发者、AI 产品经理和 AI 创业者准备的中英双语 AI 编程词典。</p>
          <p>我们不是另一个百科，也不是简单翻译。每个词条都回答几个问题：它是什么？为什么重要？在 Vibe Coding 中怎么用？小白怎么理解？常见误区是什么？下一步学什么？</p>
          <p>第一版不接 AI API、不需要登录、不收费，专心做好“看懂”这件事。</p>
        </>
      ) : (
        <>
          <p>Vibe Coding Dictionary is a bilingual AI and coding glossary built for beginners, Vibe Coders, non-CS developers, AI product managers, and AI builders.</p>
          <p>It is not another encyclopedia, nor a simple translation. Each entry answers a few questions: what is it, why does it matter, how is it used in Vibe Coding, how should a beginner think about it, what are the common misunderstandings, and what to learn next.</p>
          <p>The first version has no AI chat, no login, and no paywall — just clear bilingual explanations.</p>
        </>
      )}
    </div>
  );
}
