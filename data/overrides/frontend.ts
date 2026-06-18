import type { TermOverride } from "./_types";

export const frontend: TermOverride = {
  tags: ["web", "frontend", "core"],
  relatedTerms: ["backend", "html", "css", "javascript", "framework"],
  learningPath: ["html", "css", "javascript", "frontend", "framework"],
  zh: {
    oneLiner: "前端 = 用户在浏览器里看到、点到、滑到的一切——也就是"界面"。",
    whatItLooksLike: `用户在网页上看到：
- 标题、按钮、图片
- 输入框
- 滚动、动画
- 暗色模式切换
↑ 这些都是前端

技术栈：
HTML + CSS + JavaScript
框架：React / Vue / Next.js / Tailwind`,
    analogy: "餐厅的"前厅"——客人看到的菜单、装修、服务员。前端工程师就是布置前厅的人。",
    beginnerExplanation: "前端是网页/App 给用户看的那部分。浏览器打开后看到的、能交互的所有东西，都是前端。",
    whatYouCanDo: [
      "用 HTML/CSS/JS 做静态网页",
      "用 React/Vue 做动态应用",
      "用 Tailwind 快速做漂亮 UI",
      "做响应式（手机/电脑都好看）",
    ],
    whyItMatters: "前端是用户接触你产品的唯一入口。前端做得好，用户体验好；做得差，再好的功能也没人用。",
    vibeCodingUsage: "v0 / Bolt / Cursor 主打的就是"AI 生成前端"。出 MVP、做原型，前端是最容易用 AI 全自动的部分。",
    quickStart: [
      "选一个框架（推荐 Next.js + Tailwind）",
      "用 v0.dev 生成一个页面看看",
      "下载代码到本地用 Cursor 改",
    ],
    commonMisunderstandings: [
      "前端 ≠ "简单的"——做好交互、性能、可访问性是大学问",
      "现代前端不只是网页，也包括手机 App（React Native）",
      "前端框架很多但底层还是 HTML/CSS/JS",
    ],
    technicalExplanation: "前端（Frontend）指运行在用户设备（浏览器/客户端）上的代码。技术栈分三层：标记（HTML）、样式（CSS）、逻辑（JS）。主流框架：React、Vue、Svelte、Angular。",
    promptExample: "请解释前端和后端的区别，并举一个具体例子（比如"用户登录"）说明前端做什么、后端做什么。",
  },
  en: {
    oneLiner: "Frontend = everything users see, click, and swipe in the browser — the interface.",
    whatItLooksLike: `What the user sees:
- Headings, buttons, images
- Inputs
- Scrolling, animations
- Dark mode toggle
↑ all frontend

Stack:
HTML + CSS + JavaScript
Frameworks: React / Vue / Next.js / Tailwind`,
    analogy: "A restaurant's front-of-house — menu, decor, waitstaff. Frontend devs design the front-of-house.",
    beginnerExplanation: "Frontend is the part of a site/app that the user sees. Everything visible and interactive in the browser is frontend.",
    whatYouCanDo: [
      "Static pages with HTML/CSS/JS",
      "Dynamic apps with React/Vue",
      "Fast pretty UI with Tailwind",
      "Responsive (mobile + desktop)",
    ],
    whyItMatters: "Frontend is the only thing users touch. Good frontend = good UX. Bad frontend = even great features go unused.",
    vibeCodingUsage: "v0 / Bolt / Cursor specialize in 'AI-generated frontend'. Frontend is the easiest layer to automate with AI.",
    quickStart: [
      "Pick a framework (Next.js + Tailwind is great)",
      "Generate a page with v0.dev",
      "Download the code, edit in Cursor",
    ],
    commonMisunderstandings: [
      "Frontend is not 'easy' — interaction, perf, a11y are deep topics",
      "Modern frontend includes mobile apps (React Native)",
      "Many frameworks, but it's all HTML/CSS/JS underneath",
    ],
    technicalExplanation: "Frontend = code that runs on the user's device (browser/client). Three layers: markup (HTML), style (CSS), logic (JS). Top frameworks: React, Vue, Svelte, Angular.",
    promptExample: "Explain frontend vs backend with a concrete example like 'user login' — what each side does.",
  },
};
