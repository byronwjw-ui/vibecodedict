import { SPEC, type SpecRow } from "@/data/terms-spec";
import { ZH_NAMES } from "@/data/zh-names";
import { OVERRIDES } from "@/data/term-overrides";
import { slugify } from "./slugify";
import type { Term, LocalizedTermContent, Difficulty, QualityLevel } from "@/types/term";

const CAT_BLURB_ZH: Record<string, string> = {
  "ai-basics": "AI 基础",
  "vibe-coding": "Vibe Coding",
  "programming-basics": "编程基础",
  "web-development": "Web 开发",
  "shell-git-dev-environment": "Shell / Git / 开发环境",
  "database-backend-deployment": "数据库与后端部署",
  "product-startup": "产品与创业",
};
const CAT_BLURB_EN: Record<string, string> = {
  "ai-basics": "AI Basics",
  "vibe-coding": "Vibe Coding",
  "programming-basics": "Programming Basics",
  "web-development": "Web Development",
  "shell-git-dev-environment": "Shell, Git & Dev Env",
  "database-backend-deployment": "Database, Backend & Deployment",
  "product-startup": "Product & Startup",
};

function templated(name: string, slug: string, category: string): { zh: LocalizedTermContent; en: LocalizedTermContent } {
  const zhName = ZH_NAMES[slug] || name;
  const catZh = CAT_BLURB_ZH[category] || category;
  const catEn = CAT_BLURB_EN[category] || category;
  const zh: LocalizedTermContent = {
    title: name,
    english: name,
    chinese: zhName,
    oneLiner: `${name}（${zhName}）是${catZh}中一个常见且重要的概念。`,
    beginnerExplanation: `你可以把 ${name} 当作${catZh}里的一块拼图。看懂它能让你更快地理解 AI 编程工具、教程和错误信息。`,
    technicalExplanation: `在${catZh}中，${name} 指的是一组特定的概念、约定或工具。它通常与相关组件一起出现在实际开发场景中，作为完成具体任务的基础存在。`,
    whyItMatters: `了解 ${name} 能让你在用 Claude Code、Cursor 等 AI 工具时更准确地描述需求、看懂 AI 的输出，减少误解和返工。`,
    vibeCodingUsage: `在 Vibe Coding 中，当 AI 帮你生成或修改代码时，${name} 经常出现在它的解释、错误提示或建议里。能看懂它，你就能更高效地与 AI 协作。`,
    useCases: [
      `在 AI 帮你写代码时遇到 ${name}`,
      `阅读教程或文档时看到 ${name}`,
      `调试问题时定位到 ${name} 相关报错`,
      `与团队沟通时用到 ${name} 这个术语`,
    ],
    codeExample: "",
    commonMisunderstandings: [
      `认为 ${name} 是很高深的概念，实际上在 AI 编程里它是日常词汇`,
      `把 ${name} 和其他相似概念混淆`,
      `忽略 ${name} 在实际项目中的具体用法`,
    ],
    promptExample: `请用小白能理解的方式解释 ${name}，并结合 Vibe Coding 或 Claude Code 的场景举一个例子。`,
  };
  const en: LocalizedTermContent = {
    title: name,
    english: name,
    chinese: zhName,
    oneLiner: `${name} is a common and important concept in ${catEn}.`,
    beginnerExplanation: `Think of ${name} as one piece of the ${catEn} puzzle. Reading it confidently helps you understand AI coding tools, tutorials, and error messages faster.`,
    technicalExplanation: `In ${catEn}, ${name} refers to a specific set of concepts, conventions, or tools that typically appear together in real development workflows.`,
    whyItMatters: `Understanding ${name} lets you describe what you want more precisely to tools like Claude Code or Cursor, and read their output more confidently, reducing misunderstandings and rework.`,
    vibeCodingUsage: `In Vibe Coding, ${name} often appears in the AI's explanations, error messages, and suggestions. Reading it confidently makes your collaboration with AI much smoother.`,
    useCases: [
      `AI uses ${name} when generating or modifying code`,
      `You encounter ${name} in tutorials and documentation`,
      `You debug an error that mentions ${name}`,
      `Your team uses ${name} as everyday vocabulary`,
    ],
    codeExample: "",
    commonMisunderstandings: [
      `Thinking ${name} is advanced — it is everyday vocabulary in AI coding`,
      `Confusing ${name} with a similar-looking concept`,
      `Ignoring how ${name} actually shows up in your project`,
    ],
    promptExample: `Explain ${name} in a beginner-friendly way, with one concrete example from Vibe Coding or Claude Code.`,
  };
  return { zh, en };
}

let CACHED: Term[] | null = null;

export function buildTerms(): Term[] {
  if (CACHED) return CACHED;
  const all: Term[] = [];
  const slugSet = new Set<string>();
  const byCategory: Record<string, string[]> = {};
  const rows: { name: string; category: string; difficulty: Difficulty; qualityLevel: QualityLevel; slug: string }[] = [];
  for (const [name, category, difficulty, qualityLevel] of SPEC as SpecRow[]) {
    const slug = slugify(name);
    if (slugSet.has(slug)) {
      // Resilient: skip duplicate instead of throwing during build.
      if (typeof console !== "undefined") {
        console.warn(`[build-terms] Skipping duplicate slug "${slug}" from name "${name}"`);
      }
      continue;
    }
    slugSet.add(slug);
    (byCategory[category] ||= []).push(slug);
    rows.push({ name, category, difficulty, qualityLevel, slug });
  }
  for (const { name, category, difficulty, qualityLevel, slug } of rows) {
    const base = templated(name, slug, category);
    const override = OVERRIDES[slug] || {};
    const zh = { ...base.zh, ...(override.zh || {}) } as LocalizedTermContent;
    const en = { ...base.en, ...(override.en || {}) } as LocalizedTermContent;
    const sameCat = (byCategory[category] || []).filter((s) => s !== slug);
    const related = override.relatedTerms || sameCat.slice(0, 5);
    const path = override.learningPath || [slug, ...sameCat.slice(0, 4)];
    const tags = override.tags || [category.split("-")[0], "core"];
    all.push({
      slug,
      category,
      difficulty,
      tags,
      qualityLevel,
      relatedTerms: related,
      learningPath: path,
      updatedAt: "2026-05-22",
      zh,
      en,
    });
  }
  CACHED = all;
  return all;
}
