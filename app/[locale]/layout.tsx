import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/types/term";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isValidLocale(locale)) notFound();
  const loc = locale as Locale;
  return (
    <div className="min-h-screen flex flex-col" lang={loc === "zh" ? "zh-CN" : "en"}>
      <Header locale={loc} />
      <main className="flex-1">{children}</main>
      <Footer locale={loc} />
    </div>
  );
}
