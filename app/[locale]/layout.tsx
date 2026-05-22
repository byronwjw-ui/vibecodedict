import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/types/term";

export async function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
