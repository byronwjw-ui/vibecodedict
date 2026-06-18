import type { TermOverride } from "./_types";

export const devin: TermOverride = {
  tags: ["ai-tool", "agent", "autonomous"],
  relatedTerms: ["claude-code", "agent", "replit-agent", "cursor", "vibe-coding"],
  learningPath: ["devin", "agent", "claude-code", "deployment", "vibe-coding"],
  zh: {
    oneLiner: "Cognition 出的"AI 软件工程师"，号称能独立完成完整工程任务。",
    whatItLooksLike: `给 Devin 一个 Slack 消息：
"帮我把这个 React 项目迁移到 Next.js 14"

Devin 自己：
- 开浏览器查文档
- 打开终端跑命令
- 写代码、跑测试
- 提 Pull Request
- 在 Slack 回报进度

你只需要 review PR`,
    analogy: "之前的 AI 是助手，Devin 是同事。给它一个 Jira 任务，它自己拉分支、写代码、提 PR，你 review 就行。",
    beginnerExplanation: "Devin 是 Cognition 公司 2024 年推出的"自主软件工程师"。它有自己的浏览器、终端、编辑器，能独立完成多天的任务。",
    whatYouCanDo: [
      "把一个完整工程任务交给它",
      "做大型项目的依赖升级",
      "排查复杂线上 bug",
      "通过 Slack / GitHub 异步协作",
    ],
    whyItMatters: "Devin 是"AI 员工"概念的代表。它把 Vibe Coding 推到极限——你只下 ticket，不写代码。",
    vibeCodingUsage: "适合给它复杂、耗时、标准化的任务（比如批量重构、升级依赖）。日常小活用 Claude Code / Cursor 更划算。",
    quickStart: [
      "去 devin.ai 申请使用",
      "通过 Slack 或 Web 给它分配任务",
      "等它跑完，review 它提的 PR",
    ],
    commonMisunderstandings: [
      "以为它万能——复杂业务它也会卡住",
      "贵——比 Cursor / Claude Code 贵很多",
      "不是给个性化、需要紧密对话的任务用的",
    ],
    technicalExplanation: "Devin 由 Cognition Labs 开发，配备独立的浏览器、shell、编辑器和长期记忆，基于多模型协同 + 工具调用 + 自我反思实现持续工作。",
    promptExample: "看一下我们仓库里所有用了 momentjs 的地方，全部换成 dayjs，并提一个 PR。",
  },
  en: {
    oneLiner: "Cognition's 'AI software engineer' — claims to finish full engineering tasks autonomously.",
    whatItLooksLike: `Send Devin a Slack message:
"Migrate this React project to Next.js 14"

Devin will:
- Open a browser to read docs
- Run terminal commands
- Write code, run tests
- Open a Pull Request
- Report progress in Slack

You just review the PR`,
    analogy: "Previous AIs were assistants; Devin is a coworker. Hand it a Jira ticket, it branches, codes, opens a PR, and you review.",
    beginnerExplanation: "Devin is Cognition's 'autonomous software engineer', launched in 2024. It has its own browser, terminal, and editor, and can run multi-day tasks.",
    whatYouCanDo: [
      "Hand off a full engineering task",
      "Run large dependency upgrades",
      "Diagnose complex production bugs",
      "Async-collaborate via Slack and GitHub",
    ],
    whyItMatters: "Devin embodies the 'AI employee' concept and pushes Vibe Coding to its limit — you file tickets, not code.",
    vibeCodingUsage: "Best for long, complex, standardized tasks (mass refactors, dep upgrades). For small daily work, Claude Code / Cursor is cheaper.",
    quickStart: [
      "Request access at devin.ai",
      "Assign tasks via Slack or web",
      "Review the PR it opens",
    ],
    commonMisunderstandings: [
      "Assuming it can do everything — complex business logic still trips it",
      "Expensive — much more than Cursor or Claude Code",
      "Not for highly interactive, conversational work",
    ],
    technicalExplanation: "Devin by Cognition Labs runs its own browser, shell, editor, and long-term memory, coordinating multiple models, tool calls, and self-reflection for continuous work.",
    promptExample: "Find every usage of momentjs in our repo, replace with dayjs, and open a PR.",
  },
};
