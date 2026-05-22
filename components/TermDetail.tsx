import Link from "next/link";
import type { Term, Locale } from "@/types/term";
import { DifficultyBadge } from "./DifficultyBadge";
import { RelatedTerms } from "./RelatedTerms";
import { CopyPromptButton } from "./CopyPromptButton";
import { getDictionary } from "@/lib/i18n";
import { getRelatedTerms, getLearningPathTerms } from "@/lib/terms";
import { getCategoryBySlug } from "@/lib/categories";

export function TermDetail({ term, locale }: { term: Term; locale: Locale }) {
  const t = getDictionary(locale);
  const c = term[locale];
  const category = getCategoryBySlug(term.category);
  const related = getRelatedTerms(term);
  const pathTerms = getLearningPathTerms(term.learningPath);
  return (
    <article className="max-w-3xl">
      <nav className="text-sm text-slate-500 mb-4 flex flex-wrap items-center gap-1">
        <Link href={`/${locale}`} className="hover:text-slate-900">{t.siteName}</Link>
        <span>/</span>
        <Link href={`/${locale}/terms`} className="hover:text-slate-900">{t.nav.terms}</Link>
        {category ? (<><span>/</span><Link href={`/${locale}/categories/${category.slug}`} className="hover:text-slate-900">{category[locale].name}</Link></>) : null}
        <span>/</span>
        <span className="text-slate-900">{c.title}</span>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{c.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span>{c.english}</span>
          <span className="text-slate-300">·</span>
          <span>{c.chinese}</span>
          <DifficultyBadge difficulty={term.difficulty} locale={locale} />
          {category ? (
            <Link href={`/${locale}/categories/${category.slug}`} className="text-brand-700 hover:underline">{category[locale].name}</Link>
          ) : null}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {term.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">#{tag}</span>
          ))}
        </div>
      </header>

      <section className="mb-8 p-5 rounded-xl bg-brand-50/60 border border-brand-100">
        <div className="text-xs font-medium text-brand-700 uppercase tracking-wider">{t.term.oneLiner}</div>
        <p className="mt-1 text-lg text-slate-900">{c.oneLiner}</p>
      </section>

      <Block title={t.term.beginner}><p>{c.beginnerExplanation}</p></Block>
      <Block title={t.term.technical}><p>{c.technicalExplanation}</p></Block>
      <Block title={t.term.whyItMatters}><p>{c.whyItMatters}</p></Block>
      <Block title={t.term.vibeUsage}><p>{c.vibeCodingUsage}</p></Block>

      <Block title={t.term.useCases}>
        <ul className="list-disc pl-5 space-y-1">
          {c.useCases.map((u, i) => (<li key={i}>{u}</li>))}
        </ul>
      </Block>

      {c.codeExample ? (
        <Block title={t.term.codeExample}>
          <pre className="text-sm rounded-lg bg-slate-900 text-slate-100 p-4 overflow-x-auto"><code>{c.codeExample}</code></pre>
        </Block>
      ) : null}

      <Block title={t.term.misunderstandings}>
        <ul className="list-disc pl-5 space-y-1">
          {c.commonMisunderstandings.map((u, i) => (<li key={i}>{u}</li>))}
        </ul>
      </Block>

      {related.length ? (
        <Block title={t.term.related}>
          <RelatedTerms terms={related} locale={locale} />
        </Block>
      ) : null}

      {pathTerms.length ? (
        <Block title={t.term.learningPath}>
          <ol className="space-y-2">
            {pathTerms.map((pt, i) => (
              <li key={pt.slug}>
                <Link href={`/${locale}/terms/${pt.slug}`} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 hover:border-brand-200 hover:bg-brand-50/30">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-sm flex items-center justify-center">{i + 1}</span>
                  <div>
                    <div className="font-medium text-slate-900">{pt[locale].title}</div>
                    <div className="text-sm text-slate-500 line-clamp-1">{pt[locale].oneLiner}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Block>
      ) : null}

      <Block title={t.term.promptExample}>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <pre className="text-sm text-slate-800 mb-3">{c.promptExample}</pre>
          <CopyPromptButton text={c.promptExample} locale={locale} />
        </div>
      </Block>

      <div className="mt-10 text-xs text-slate-400">{t.term.updatedAt}: {term.updatedAt}</div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</h2>
      <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">{children}</div>
    </section>
  );
}
