import type { TermOverride } from "./_types";

export const v0: TermOverride = {
  tags: ["ai-tool", "ui", "frontend", "vercel"],
  relatedTerms: ["bolt", "lovable", "vercel", "frontend", "react"],
  learningPath: ["v0", "vercel", "frontend", "deployment", "vibe-coding"],
  zh: {
    oneLiner: "Vercel 出的 AI 网页生成器，描述一句话就给你一个能跑的页面。",
    whatItLooksLike: `输入：
"做一个 SaaS 定价页，三栏，紫色为主"

输出：
✓ 生成 React + Tailwind 代码
✓ 实时预览
✓ 一键部署到 Vercel
✓ 一键 fork 到 GitHub`,
    analogy: "像点外卖。你说"我要一个登录页"，10 秒后页面就上桌了，还能直接吃（部署上线）。",
    beginnerExplanation: "v0.dev 是 Vercel 推出的"用嘴写网页"工具。你打字描述，它生成 React 组件代码 + 实时预览。",
    whatYouCanDo: [
      "快速生成 landing page、定价页、Dashboard",
      "生成单个 React 组件",
      "迭代修改（继续提需求改样式）",
      "一键部署到 Vercel 上线",
    ],
    whyItMatters: "v0 是"零代码生成可用网页"的代表。对没写过前端的人来说，是最低门槛的入口。",
    vibeCodingUsage: "前期用 v0 快速出原型 → 满意了导出代码 → 用 Cursor / Claude Code 继续完善后端逻辑。",
    quickStart: [
      "去 v0.dev 登录（用 Vercel 账号）",
      "输入"做一个 [你想要的页面]"",
      "满意后点 Deploy 一键上线",
    ],
    commonMisunderstandings: [
      "以为它能做完整产品——它只擅长前端 UI",
      "免费版有积分限制",
      "生成的代码偶尔需要手动微调",
    ],
    technicalExplanation: "v0 由 Vercel 推出，基于 Claude / GPT 等模型，输出 React + Tailwind + shadcn/ui 风格代码，与 Vercel 部署、Next.js 生态深度绑定。",
    promptExample: "做一个面向 AI 编程小白的产品官网首页，深色背景，紫色 + 蓝色渐变，包含 Hero、特性卡片、CTA 三个区块。",
  },
  en: {
    oneLiner: "Vercel's AI website generator — describe a page, get a working one.",
    whatItLooksLike: `Input:
"SaaS pricing page, three columns, purple"

Output:
✓ React + Tailwind code
✓ Live preview
✓ One-click deploy to Vercel
✓ One-click fork to GitHub`,
    analogy: "Like ordering takeout. Say 'I want a login page', 10 seconds later it is on your table — and ready to eat (deploy).",
    beginnerExplanation: "v0.dev is Vercel's 'type to build web pages' tool. Describe what you want and it generates React component code with a live preview.",
    whatYouCanDo: [
      "Quickly generate landing pages, pricing pages, dashboards",
      "Generate single React components",
      "Iterate by prompting more changes",
      "One-click deploy to Vercel",
    ],
    whyItMatters: "v0 represents 'zero-code to a usable site'. For non-frontend folks, it is the lowest barrier to entry.",
    vibeCodingUsage: "Use v0 for fast prototyping → export the code → continue with Cursor or Claude Code for backend logic.",
    quickStart: [
      "Sign in at v0.dev (with your Vercel account)",
      "Type 'build a [page you want]'",
      "Click Deploy to go live",
    ],
    commonMisunderstandings: [
      "Thinking it builds full products — it specializes in frontend UI",
      "Free tier has credit limits",
      "Generated code sometimes needs manual tweaks",
    ],
    technicalExplanation: "v0 by Vercel runs on Claude / GPT, outputs React + Tailwind + shadcn/ui-styled code, and is deeply tied to Vercel deployment and the Next.js ecosystem.",
    promptExample: "Build a homepage for an AI-coding-for-beginners product. Dark background, purple-to-blue gradient, with Hero, feature cards, and CTA sections.",
  },
};
