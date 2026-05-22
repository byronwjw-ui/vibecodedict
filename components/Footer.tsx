import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
        <div>
          <div className="font-semibold text-slate-900">{t.siteName}</div>
          <p className="mt-1 max-w-md">{t.footer.tagline}</p>
          <p className="mt-3 text-slate-400">© {year} {t.siteName}</p>
        </div>
        <div className="flex sm:justify-end gap-6">
          <Link href={`/${locale}/terms`} className="hover:text-slate-900">{t.nav.terms}</Link>
          <Link href={`/${locale}/categories`} className="hover:text-slate-900">{t.nav.categories}</Link>
          <Link href={`/${locale}/paths`} className="hover:text-slate-900">{t.nav.paths}</Link>
          <Link href={`/${locale}/about`} className="hover:text-slate-900">{t.nav.about}</Link>
        </div>
      </div>
    </footer>
  );
}
