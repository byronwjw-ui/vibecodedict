import type { TermOverride } from "./_types";

export const agent: TermOverride = {
  tags: ["ai", "agent", "core"],
  relatedTerms: ["llm", "tool-use", "claude-code", "mcp", "devin"],
  learningPath: ["llm", "prompt", "agent", "tool-use", "mcp"],
  zh: {
    oneLiner: "能自己规划、调用工具、连续行动直到完成任务的 AI 程序。",
    whatItLooksLike: `任务："订一张周五去上海的机票"

Agent 自动：
1. 搜航班网站
2. 查可选航班
3. 比价
4. 填表单
5. 给你确认链接

(它会调浏览器、调 API、做决策，全程不用你管)`,
    analogy: "普通 LLM 像问答机器。Agent 像助理——你说目标，它自己出门、办事、回来汇报。",
    beginnerExplanation: "Agent = LLM + 工具 + 循环 + 记忆。它不只是回答你，还能去做事：开浏览器、跑命令、调 API。",
    whatYouCanDo: [
      "Claude Code 帮你跑完整开发任务",
      "Devin 自己写 PR",
      "Replit Agent 自己部署应用",
      "自动化运营、客服、数据分析",
    ],
    whyItMatters: "Agent 把"AI 回答问题"升级成"AI 完成任务"。这是 2024-2025 年 AI 的最大演进方向。",
    vibeCodingUsage: "你在用 Claude Code / Cursor Composer / Windsurf Cascade 时就是在跟 Agent 协作。它们都是编程 Agent。",
    quickStart: [
      "用一个 Agent 工具（Claude Code 最简单）",
      "给一个明确的多步任务（比如"加个登录功能"）",
      "观察它怎么规划、执行、自检",
    ],
    commonMisunderstandings: [
      "Agent ≠ 全自动——它会失败、会卡住，需要人监督",
      "不是所有"AI 工具"都是 Agent",
      "Agent 跑得越久越贵，要控制 token 消耗",
    ],
    technicalExplanation: "Agent 是基于 LLM 的自主系统，包含规划（planning）、工具调用（tool use）、记忆（memory）、反思（reflection）等模块，通过循环执行直到目标达成。",
    promptExample: "你是一个编程 Agent。任务是给我的 Next.js 项目加暗色模式。请先列出步骤，确认后再执行。",
  },
  en: {
    oneLiner: "An AI program that plans, uses tools, and keeps acting until the job is done.",
    whatItLooksLike: `Task: "Book a flight to Shanghai this Friday"

Agent does:
1. Search airline sites
2. Look up options
3. Compare prices
4. Fill the form
5. Send you a confirmation link

(It drives a browser, calls APIs, makes decisions)`,
    analogy: "Plain LLM is a Q&A machine. Agent is an assistant — give the goal, it goes out, gets it done, reports back.",
    beginnerExplanation: "Agent = LLM + tools + loop + memory. It doesn't just reply — it acts: drives browsers, runs commands, calls APIs.",
    whatYouCanDo: [
      "Claude Code runs full dev tasks",
      "Devin opens its own PRs",
      "Replit Agent deploys apps autonomously",
      "Automate ops, support, analytics",
    ],
    whyItMatters: "Agents upgrade 'AI answers' to 'AI finishes tasks'. This is the biggest AI direction of 2024-2025.",
    vibeCodingUsage: "Using Claude Code, Cursor Composer, or Windsurf Cascade means collaborating with coding agents.",
    quickStart: [
      "Pick an agent tool (Claude Code is easiest)",
      "Give it a clear multi-step task",
      "Watch how it plans, executes, and self-checks",
    ],
    commonMisunderstandings: [
      "Agent does not mean fully autonomous — it fails and needs supervision",
      "Not every 'AI tool' is an agent",
      "The longer it runs, the more it costs — watch token usage",
    ],
    technicalExplanation: "Agents are LLM-based autonomous systems with planning, tool use, memory, and reflection modules, looping until a goal is met.",
    promptExample: "You are a coding agent. Add dark mode to my Next.js project. List the steps first, then execute after I confirm.",
  },
};
