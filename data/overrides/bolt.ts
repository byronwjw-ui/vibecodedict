import type { TermOverride } from "./_types";

export const bolt: TermOverride = {
  tags: ["ai-tool", "fullstack", "stackblitz"],
  relatedTerms: ["v0", "lovable", "replit-agent", "vercel", "supabase"],
  learningPath: ["bolt", "deployment", "supabase", "frontend", "vibe-coding"],
  zh: {
    oneLiner: "StackBlitz 出的浏览器内全栈 AI 生成器，前后端都能给你写。",
    whatItLooksLike: `打开 bolt.new
输入："做一个待办事项 App，支持登录和数据库"

左边：AI 在浏览器里跑 Node.js
中间：实时代码编辑
右边：实时网站预览
底部：终端日志

完事一键部署到 Netlify`,
    analogy: "v0 给你前端，Bolt 给你整个应用——前端 + 后端 + 数据库 + 部署，全包了。",
    beginnerExplanation: "Bolt.new 让你在浏览器里完整生成一个 Web 应用。不用本地装环境，AI 在云端跑 Node.js 给你看效果。",
    whatYouCanDo: [
      "生成全栈应用（React + Node + 数据库）",
      "在浏览器里实时调试",
      "一键部署到 Netlify",
      "导出代码到本地继续改",
    ],
    whyItMatters: "Bolt 把"AI 生成"从前端扩展到全栈，是 v0 的强劲对手。适合做 MVP。",
    vibeCodingUsage: "想快速验证一个 idea 时，Bolt 比本地装环境快 10 倍。出了 MVP 再导出代码用 Cursor 精修。",
    quickStart: [
      "打开 bolt.new（不用注册）",
      "描述你的应用想法",
      "等它生成 + 自动跑起来 + 看预览",
    ],
    commonMisunderstandings: [
      "免费 token 有限，复杂项目会很快耗完",
      "生成的后端比较简单，复杂业务还是要自己改",
      "和 Bolt.diy（开源版）不是一回事",
    ],
    technicalExplanation: "Bolt.new 由 StackBlitz 出品，基于 WebContainer 在浏览器里跑 Node.js，搭配 Claude 模型，输出可立即运行的全栈代码。",
    promptExample: "做一个个人记账 App。前端用 React，后端用 Express，数据存在 SQLite，支持添加、删除、按类别汇总。",
  },
  en: {
    oneLiner: "StackBlitz's in-browser full-stack AI generator — frontend and backend both included.",
    whatItLooksLike: `Open bolt.new
Type: "Build a todo app with login and a database"

Left: AI runs Node.js in the browser
Center: live code editor
Right: live website preview
Bottom: terminal logs

One-click deploy to Netlify`,
    analogy: "v0 gives you the frontend; Bolt gives you the whole app — frontend, backend, database, deploy, all in one.",
    beginnerExplanation: "Bolt.new generates a complete web app in your browser. No local setup — AI runs Node.js in the cloud and shows you the result.",
    whatYouCanDo: [
      "Generate full-stack apps (React + Node + DB)",
      "Live debug in the browser",
      "One-click deploy to Netlify",
      "Export code to keep editing locally",
    ],
    whyItMatters: "Bolt extends 'AI generation' from frontend to full-stack. A strong competitor to v0 — great for MVPs.",
    vibeCodingUsage: "When validating an idea fast, Bolt is 10x quicker than setting up locally. After MVP, export and polish with Cursor.",
    quickStart: [
      "Open bolt.new (no signup needed)",
      "Describe your app idea",
      "Wait for it to generate, run, and show a preview",
    ],
    commonMisunderstandings: [
      "Free tokens run out quickly for complex projects",
      "Generated backend is basic; complex logic still needs human work",
      "Bolt.new and the open-source Bolt.diy are not the same thing",
    ],
    technicalExplanation: "Bolt.new by StackBlitz uses WebContainer to run Node.js in the browser, powered by Claude, outputting runnable full-stack code.",
    promptExample: "Build a personal expense tracker. React frontend, Express backend, SQLite storage. Support add, delete, and category summary.",
  },
};
