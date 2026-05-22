export type Locale = "zh" | "en";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type QualityLevel = 1 | 2 | 3;

export interface LocalizedTermContent {
  title: string;
  english: string;
  chinese: string;
  oneLiner: string;
  beginnerExplanation: string;
  technicalExplanation: string;
  whyItMatters: string;
  vibeCodingUsage: string;
  useCases: string[];
  codeExample?: string;
  commonMisunderstandings: string[];
  promptExample: string;
}

export interface Term {
  slug: string;
  category: string;
  difficulty: Difficulty;
  tags: string[];
  qualityLevel: QualityLevel;
  relatedTerms: string[];
  learningPath: string[];
  updatedAt: string;
  zh: LocalizedTermContent;
  en: LocalizedTermContent;
}

export interface LocalizedCategoryContent {
  name: string;
  description: string;
}

export interface Category {
  slug: string;
  icon: string;
  count: number;
  zh: LocalizedCategoryContent;
  en: LocalizedCategoryContent;
}

export interface LocalizedPathContent {
  title: string;
  description: string;
}

export interface LearningPath {
  slug: string;
  terms: string[];
  zh: LocalizedPathContent;
  en: LocalizedPathContent;
}
