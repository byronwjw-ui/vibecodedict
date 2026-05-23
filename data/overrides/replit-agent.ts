import type { TermOverride } from "./_types";

export const replitAgent: TermOverride = {
  tags: ["ai-tool", "agent", "fullstack", "replit"],
  relatedTerms: ["bolt", "lovable", "v0", "agent", "deployment"],
  learningPath: ["replit-agent", "deployment", "database", "agent", "vibe-coding"],
  zh: {
    oneLiner: "Replit 出的全栈 AI Agent，从需求到上线一条龙搞定。",
    whatItLooksLike: `打开 replit.com/new
输入："做一个能让用户上传照片并打分的网站"

Replit Agent：
1. 自动选技术栈
2. 装包、写代码
3. 配数据库、配域名
4. 部署上线
5. 给你一个可访问的 URL`,
    analogy: "v0 给你画图，Bolt 给你做菜，Replit Agent 直接帮你开餐厅——连服务员都雇好了。",
    beginnerExplanation: "Replit Agent 是 Replit 出的 AI 工程师。你描述项目，它自己规划、写、跑、部署，全程几乎不用你写代码。",
    whatYouCanDo: [
      "从一句话需求生成完整应用",
      "自动配数据库、认证、域名",
      "Replit 云端运行，无需本地环境",
      "在手机上也能用（Replit App）",
    ],
    whyItMatters: "Replit Agent 是"AI 自主开发"的代表。适合彻底没有编程基础的用户。",
    vibeCodingUsage: "你只负责想清楚做什么、给清楚需求、验证结果。技术细节全部交给 Agent。",
    quickStart: [
      "去 replit.com 注册（免费）",
      "点 Create app → 选 Agent",
      "输入你的想法，等它做完",
    ],
    commonMisunderstandings: [
      "以为完全免费——Agent 是付费功能",
      "复杂业务它做不好，适合小工具/小网站",
      "做完不 review 直接上线，安全和性能可能有坑",
    ],
    technicalExplanation: "Replit Agent 基于 Claude 等模型，结合 Replit 云端开发环境、PostgreSQL 数据库、内置认证、自动部署组成端到端 Agent 工作流。",
    promptExample: "做一个让用户提交反馈的小网站，需要邮箱登录、SQLite 存数据、管理员能看到所有反馈列表。",
  },
  en: {
    oneLiner: "Replit's full-stack AI agent that takes you from idea to live URL.",
    whatItLooksLike: `Open replit.com/new
Type: "Build a site where users upload photos and rate them"

Replit Agent:
1. Picks the stack
2. Installs packages, writes code
3. Provisions DB, sets up domain
4. Deploys live
5. Gives you a working URL`,
    analogy: "v0 paints, Bolt cooks, Replit Agent runs the whole restaurant — waiters included.",
    beginnerExplanation: "Replit Agent is Replit's AI engineer. Describe a project; it plans, writes, runs, and deploys — almost no coding needed.",
    whatYouCanDo: [
      "Turn a sentence into a complete app",
      "Auto-provision DB, auth, and domain",
      "Run in Replit's cloud (no local setup)",
      "Use it from your phone (Replit App)",
    ],
    whyItMatters: "Replit Agent is the poster child of 'autonomous AI development'. Great for users with zero coding background.",
    vibeCodingUsage: "Your job: think clearly, prompt clearly, verify. Hand all the engineering details to the agent.",
    quickStart: [
      "Sign up at replit.com (free)",
      "Click Create app → choose Agent",
      "Describe your idea and wait",
    ],
    commonMisunderstandings: [
      "Thinking it is fully free — Agent is a paid feature",
      "Bad at complex business logic; best for small tools and sites",
      "Shipping without review can leave security and perf issues",
    ],
    technicalExplanation: "Replit Agent runs on Claude and similar models, combined with Replit's cloud dev environment, PostgreSQL, built-in auth, and auto-deploy into an end-to-end agent workflow.",
    promptExample: "Build a small feedback site. Email login, SQLite for storage, and an admin view of all feedback.",
  },
};
