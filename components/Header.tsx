import Link from "next/link";
import { Sparkles } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="w-7 h-7 rounded-md bg-brand-600 text-white flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="hidden sm:inline">{t.siteName}</span>
          <span className="sm:hidden">VCD</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          <Link href={`/${locale}/terms`} className="px-2 sm:px-3 py-1.5 rounded-md text-slate-700 hover:bg-slate-100">{t.nav.terms}</Link>
          <Link href={`/${locale}/categories`} className="px-2 sm:px-3 py-1.5 rounded-md text-slate-700 hover:bg-slate-100">{t.nav.categories}</Link>
          <Link href={`/${locale}/paths`} className="px-2 sm:px-3 py-1.5 rounded-md text-slate-700 hover:bg-slate-100">{t.nav.paths}</Link>
          <Link href={`/${locale}/about`} className="px-2 sm:px-3 py-1.5 rounded-md text-slate-700 hover:bg-slate-100 hidden sm:inline-block">{t.nav.about}</Link>
          <LanguageSwitcher locale={locale} />
        </nav>
      </div>
    </header>
  );
}
