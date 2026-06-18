import type { TermOverride } from "./_types";

export const lovable: TermOverride = {
  tags: ["ai-tool", "fullstack", "no-code"],
  relatedTerms: ["v0", "bolt", "replit-agent", "supabase", "vercel"],
  learningPath: ["lovable", "supabase", "deployment", "frontend", "vibe-coding"],
  zh: {
    oneLiner: "瑞典出的"AI 全栈生成器"，主打用聊天的方式做产品。",
    whatItLooksLike: `打开 lovable.dev
聊天框输入：
"做一个健身打卡 App，每天记录、看周报"

→ 自动生成代码
→ 自动接 Supabase 数据库
→ 自动部署
→ 给你一个域名

继续聊天："加个排行榜功能"
→ 自动改代码 + 重新部署`,
    analogy: "像跟一个全栈工程师 + 设计师 + 运维 24 小时在线聊。聊出 idea，他们直接做完上线。",
    beginnerExplanation: "Lovable 把"做产品"变成"聊天"。每次对话都会自动改代码、改数据库、重新部署，最适合非技术创业者。",
    whatYouCanDo: [
      "从对话生成完整 Web 应用",
      "自动接 Supabase 做后端",
      "自动部署到 lovable 域名",
      "可以连接你自己的 GitHub 仓库",
    ],
    whyItMatters: "Lovable 在欧洲非常火，是非技术创业者最爱的 AI 工具之一。代表了"对话即开发"的方向。",
    vibeCodingUsage: "出 MVP 阶段用 Lovable 最快。验证完模式后，可以导出代码用 Cursor 继续精修。",
    quickStart: [
      "去 lovable.dev 注册",
      "在对话框描述你想做的产品",
      "等它做完，给你一个可访问 URL",
    ],
    commonMisunderstandings: [
      "免费版每天有消息次数限制",
      "复杂业务逻辑不如手工写灵活",
      "和 Lovable.com（别的公司）没关系",
    ],
    technicalExplanation: "Lovable 由瑞典团队开发，基于 Claude 等模型，输出 React + Vite + Supabase 技术栈，内置 GitHub 同步和自动部署。",
    promptExample: "做一个 SaaS 落地页，主题是"给非技术创始人的 AI 编程课"，包含价格、特性、用户案例三个板块。",
  },
  en: {
    oneLiner: "A Swedish AI full-stack generator — build products by chatting.",
    whatItLooksLike: `Open lovable.dev
Chat box:
"Build a fitness check-in app with daily logs and weekly reports"

→ Code generated
→ Supabase DB wired up
→ Auto-deployed
→ You get a URL

Keep chatting: "Add a leaderboard"
→ Code updated + redeployed`,
    analogy: "Like a 24/7 group chat with a full-stack engineer, designer, and DevOps. Talk through the idea, they ship it.",
    beginnerExplanation: "Lovable turns 'building a product' into 'chatting'. Each message updates code, DB, and redeploys. Perfect for non-technical founders.",
    whatYouCanDo: [
      "Generate full apps from chat",
      "Auto-wire Supabase backend",
      "Auto-deploy to a lovable domain",
      "Connect your own GitHub repo",
    ],
    whyItMatters: "Lovable is huge in Europe and a favorite among non-technical founders. Represents the 'conversation is development' direction.",
    vibeCodingUsage: "Use Lovable for fastest MVP. After validation, export code and polish with Cursor.",
    quickStart: [
      "Sign up at lovable.dev",
      "Describe your product idea in chat",
      "Wait — you get a working URL",
    ],
    commonMisunderstandings: [
      "Free tier has daily message limits",
      "Complex business logic is less flexible than hand-coded",
      "Unrelated to Lovable.com (different company)",
    ],
    technicalExplanation: "Lovable, by a Swedish team, runs on Claude and similar models, outputs React + Vite + Supabase stacks, with built-in GitHub sync and auto-deploy.",
    promptExample: "Build a SaaS landing page for 'AI coding course for non-technical founders'. Sections: pricing, features, customer stories.",
  },
};
