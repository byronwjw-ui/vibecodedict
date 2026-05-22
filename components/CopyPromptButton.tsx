"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/term";

export function CopyPromptButton({ text, locale }: { text: string; locale: Locale }) {
  const [copied, setCopied] = useState(false);
  const dict = getDictionary(locale);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* noop */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md border border-slate-200 hover:bg-slate-50"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? dict.term.copied : dict.term.copyPrompt}
    </button>
  );
}
