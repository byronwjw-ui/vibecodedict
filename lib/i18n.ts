import { DEFAULT_LOCALE, LOCALES } from "./constants";
import type { Locale } from "@/types/term";

export function isValidLocale(locale: string): locale is Locale {
  return (LOCALES as readonly string[]).includes(locale);
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === "zh" ? "en" : "zh";
}

export { DEFAULT_LOCALE, LOCALES };

export interface Dictionary {
  siteName: string;
  tagline: string;
  nav: {
    terms: string;
    categories: string;
    paths: string;
    about: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    popular: string;
    categories: string;
    paths: string;
    mustRead: string;
    recent: string;
    whyTitle: string;
    whyBody: string;
  };
  term: {
    english: string;
    chinese: string;
    category: string;
    difficulty: string;
    tags: string;
    oneLiner: string;
    beginner: string;
    technical: string;
    whyItMatters: string;
    vibeUsage: string;
    useCases: string;
    codeExample: string;
    misunderstandings: string;
    related: string;
    learningPath: string;
    promptExample: string;
    copyPrompt: string;
    copied: string;
    updatedAt: string;
  };
  list: {
    title: string;
    filterCategory: string;
    filterDifficulty: string;
    allCategories: string;
    allDifficulties: string;
    searchInList: string;
    empty: string;
    total: (n: number) => string;
  };
  categories: {
    title: string;
    subtitle: string;
    termCount: (n: number) => string;
  };
  paths: {
    title: string;
    subtitle: string;
    stepLabel: (n: number) => string;
    termCount: (n: number) => string;
    back: string;
  };
  difficulty: {
    beginner: string;
    intermediate: string;
    advanced: string;
  };
  about: {
    title: string;
  };
  common: {
    readMore: string;
    backHome: string;
    search: string;
    noResults: string;
  };
  footer: {
    tagline: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    siteName: "Vibe Coding Dictionary",
    tagline: "给小白和 Vibe Coder 的 AI 编程词典",
    nav: {
      terms: "词条",
      categories: "分类",
      paths: "学习路径",
      about: "关于",
    },
    home: {
      heroTitle: "看懂 AI 时代的编程词汇",
      heroSubtitle:
        "Vibe Coding Dictionary 是一个为小白、Vibe Coder 和 AI 创业者准备的中英双语 AI 编程词典。",
      searchPlaceholder: "搜索 API、Claude Code、MCP、Shell、RAG...",
      popular: "热门词条",
      categories: "按分类探索",
      paths: "学习路径",
      mustRead: "新手必看词条",
      recent: "最近更新",
      whyTitle: "为什么做这个词典",
      whyBody:
        "AI 编程世界里的词汇多、快、杂。我们希望用人话、中英双语和 Vibe Coding 场景，让你一眼看懂、看会、看透。",
    },
    term: {
      english: "英文名称",
      chinese: "中文名称",
      category: "分类",
      difficulty: "难度",
      tags: "标签",
      oneLiner: "一句话解释",
      beginner: "小白解释",
      technical: "专业解释",
      whyItMatters: "为什么重要",
      vibeUsage: "在 Vibe Coding 中怎么用",
      useCases: "常见使用场景",
      codeExample: "代码例子",
      misunderstandings: "常见误区",
      related: "相关词条",
      learningPath: "推荐学习路径",
      promptExample: "可复制 Prompt",
      copyPrompt: "复制 Prompt",
      copied: "已复制",
      updatedAt: "更新于",
    },
    list: {
      title: "所有词条",
      filterCategory: "分类",
      filterDifficulty: "难度",
      allCategories: "全部分类",
      allDifficulties: "全部难度",
      searchInList: "在词条中搜索...",
      empty: "没有找到匹配的词条",
      total: (n: number) => `共 ${n} 个词条`,
    },
    categories: {
      title: "分类浏览",
      subtitle: "从你感兴趣的领域入手。",
      termCount: (n: number) => `${n} 个词条`,
    },
    paths: {
      title: "学习路径",
      subtitle: "按顺序学习，逆向拆解 AI 编程。",
      stepLabel: (n: number) => `第 ${n} 步`,
      termCount: (n: number) => `${n} 个词条`,
      back: "返回路径列表",
    },
    difficulty: {
      beginner: "初级",
      intermediate: "中级",
      advanced: "高级",
    },
    about: {
      title: "关于 Vibe Coding Dictionary",
    },
    common: {
      readMore: "查看详情",
      backHome: "返回首页",
      search: "搜索",
      noResults: "没有结果",
    },
    footer: {
      tagline: "双语 AI 编程词典。不需要登录，不需要付费，只为让 AI 编程更好懂。",
    },
  },
  en: {
    siteName: "Vibe Coding Dictionary",
    tagline: "A beginner-friendly AI and coding dictionary for Vibe Coders.",
    nav: {
      terms: "Terms",
      categories: "Categories",
      paths: "Paths",
      about: "About",
    },
    home: {
      heroTitle: "Understand the language of AI and coding.",
      heroSubtitle:
        "Vibe Coding Dictionary is a bilingual AI and coding glossary for beginners, Vibe Coders, and AI builders.",
      searchPlaceholder: "Search API, Claude Code, MCP, Shell, RAG...",
      popular: "Popular terms",
      categories: "Explore by category",
      paths: "Learning paths",
      mustRead: "Must-read for beginners",
      recent: "Recently updated",
      whyTitle: "Why this dictionary",
      whyBody:
        "AI coding is full of confusing terms. We use plain language, bilingual explanations, and real Vibe Coding context so you actually get it.",
    },
    term: {
      english: "English",
      chinese: "Chinese",
      category: "Category",
      difficulty: "Difficulty",
      tags: "Tags",
      oneLiner: "One-liner",
      beginner: "Beginner explanation",
      technical: "Technical explanation",
      whyItMatters: "Why it matters",
      vibeUsage: "How it is used in Vibe Coding",
      useCases: "Common use cases",
      codeExample: "Code example",
      misunderstandings: "Common misunderstandings",
      related: "Related terms",
      learningPath: "Recommended learning path",
      promptExample: "Copyable prompt",
      copyPrompt: "Copy Prompt",
      copied: "Copied",
      updatedAt: "Updated",
    },
    list: {
      title: "All Terms",
      filterCategory: "Category",
      filterDifficulty: "Difficulty",
      allCategories: "All categories",
      allDifficulties: "All difficulties",
      searchInList: "Search terms...",
      empty: "No matching terms found",
      total: (n: number) => `${n} terms`,
    },
    categories: {
      title: "Browse categories",
      subtitle: "Start from a field you care about.",
      termCount: (n: number) => `${n} terms`,
    },
    paths: {
      title: "Learning paths",
      subtitle: "Learn in order, from zero to AI coding.",
      stepLabel: (n: number) => `Step ${n}`,
      termCount: (n: number) => `${n} terms`,
      back: "Back to paths",
    },
    difficulty: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
    about: {
      title: "About Vibe Coding Dictionary",
    },
    common: {
      readMore: "Read more",
      backHome: "Back home",
      search: "Search",
      noResults: "No results",
    },
    footer: {
      tagline: "Bilingual AI & coding glossary. No login, no paywall, no fluff.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
