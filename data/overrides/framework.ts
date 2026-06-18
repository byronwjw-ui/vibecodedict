import type { TermOverride } from "./_types";

export const framework: TermOverride = {
  tags: ["programming", "tool", "core"],
  relatedTerms: ["library", "package", "frontend", "backend", "npm"],
  learningPath: ["javascript", "framework", "frontend", "backend", "npm"],
  zh: {
    oneLiner: "Framework（框架）= 一套写好的\"骨架 + 规则\"——你按它的方式填空，就能快速做产品。",
    whatItLooksLike: `不用框架（裸 HTML/JS）：
  自己处理路由、状态、渲染、API
  做一个 Todo App 要 500 行

用 Next.js 框架：
  路由：建文件就行（app/page.tsx）
  状态：用 React Hooks
  API：建 api/ 文件夹
  做同样 Todo App 要 100 行

主流前端框架：
React / Vue / Svelte / Angular / Next.js`,
    analogy: "裸代码像自己盖房子——挖地基、砌墙、布线。框架像装修好的毛坯——你只挑家具摆放。",
    beginnerExplanation: "框架定下做事的\"规矩\"。你按规矩做，速度快、规范统一，能跟全世界用同框架的人协作。",
    whatYouCanDo: [
      "Next.js 做全栈 Web 应用",
      "React Native 做手机 App",
      "Django / FastAPI 做后端",
      "Tailwind 做 UI 样式",
    ],
    whyItMatters: "现代开发 99% 都用框架。手撸一切等于自己造轮子。Vibe Coding 时代尤其——AI 对主流框架最熟。",
    vibeCodingUsage: "让 AI \"做个网站\"，它默认选 Next.js + Tailwind。这是 AI 最熟的组合，错误最少、生成最快。",
    quickStart: [
      "选一个框架（推荐 Next.js）",
      "npx create-next-app 创建项目",
      "按官方教程做一个小 Demo",
    ],
    commonMisunderstandings: [
      "Framework 和 Library 不一样——Library 你调用它，Framework 调用你的代码（控制反转）",
      "框架越新不一定越好，主流稳定的更适合生产",
      "换框架成本很高，前期选型要慎重",
    ],
    technicalExplanation: "Framework 提供项目骨架、约定和工具链，常包含路由、状态管理、渲染、构建、测试等。前端：React、Vue、Svelte、Angular、Next.js、Nuxt。后端：Express、NestJS、Django、Rails、FastAPI。",
    promptExample: "请解释 Framework 和 Library 的区别，举例（jQuery vs React），并说说为什么 Vibe Coding 推荐用主流框架。",
  },
  en: {
    oneLiner: "A framework is a prebuilt skeleton + rules — fill in the blanks, ship product fast.",
    whatItLooksLike: `Without framework (plain HTML/JS):
  Handle routing, state, render, API yourself
  Todo app: ~500 lines

With Next.js:
  Routing: create files (app/page.tsx)
  State: React Hooks
  API: api/ folder
  Same Todo app: ~100 lines

Popular frontend frameworks:
React / Vue / Svelte / Angular / Next.js`,
    analogy: "Plain code is building a house from scratch. A framework is a finished shell — you just place furniture.",
    beginnerExplanation: "A framework sets the rules. Follow them = fast, consistent, and you can collaborate with anyone using the same framework.",
    whatYouCanDo: [
      "Build full-stack web apps with Next.js",
      "Build mobile apps with React Native",
      "Build backends with Django / FastAPI",
      "Style UIs with Tailwind",
    ],
    whyItMatters: "Modern dev is 99% framework-driven. Hand-coding everything = reinventing the wheel. AI knows mainstream frameworks best.",
    vibeCodingUsage: "Ask AI to 'build a site' — it defaults to Next.js + Tailwind. The combo AI knows best, fewest errors.",
    quickStart: [
      "Pick a framework (Next.js recommended)",
      "npx create-next-app",
      "Follow the official tutorial",
    ],
    commonMisunderstandings: [
      "Framework ≠ Library — Library you call; Framework calls you (inversion of control)",
      "Newer ≠ better — mainstream stable is best for prod",
      "Switching frameworks is expensive — choose carefully early",
    ],
    technicalExplanation: "Frameworks provide scaffolding, conventions, and toolchains: routing, state, render, build, test. Frontend: React, Vue, Svelte, Angular, Next.js, Nuxt. Backend: Express, NestJS, Django, Rails, FastAPI.",
    promptExample: "Explain Framework vs Library with examples (jQuery vs React), then why Vibe Coding prefers mainstream frameworks.",
  },
};
