"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/types/term";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const otherLocale: Locale = locale === "zh" ? "en" : "zh";
  const newPath = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${otherLocale}`);
  return (
    <Link
      href={newPath}
      className="inline-flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700"
    >
      <Languages className="w-3.5 h-3.5" />
      {otherLocale === "zh" ? "中文" : "English"}
    </Link>
  );
}
