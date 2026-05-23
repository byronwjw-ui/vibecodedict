import type { LocalizedTermContent } from "@/types/term";

export interface TermOverride {
  tags?: string[];
  relatedTerms?: string[];
  learningPath?: string[];
  zh?: Partial<LocalizedTermContent>;
  en?: Partial<LocalizedTermContent>;
}
