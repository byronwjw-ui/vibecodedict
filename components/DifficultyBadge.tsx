import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n";
import type { Difficulty, Locale } from "@/types/term";

const STYLE: Record<Difficulty, string> = {
  beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  advanced: "bg-rose-50 text-rose-700 border-rose-200",
};

export function DifficultyBadge({ difficulty, locale }: { difficulty: Difficulty; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <span className={cn("inline-flex items-center text-xs px-2 py-0.5 rounded-full border", STYLE[difficulty])}>
      {t.difficulty[difficulty]}
    </span>
  );
}
