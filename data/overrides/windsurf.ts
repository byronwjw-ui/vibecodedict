import type { TermOverride } from "./_types";

export const windsurf: TermOverride = {
  tags: ["ai-tool", "ide", "agent"],
  relatedTerms: ["cursor", "claude-code", "github-copilot", "agent", "ide"],
  learningPath: ["windsurf", "prompt", "agent", "git", "deployment"],
  zh: {
    oneLiner: "Codeium 出的 AI 编辑器，主打"Agent 帮你跑完整任务"。",
    whatItLooksLike: `[Windsurf 界面]
和 Cursor 类似，VS Code 风格
独有 "Cascade" 面板：
  你说一句"加个登录页"
  → Agent 自动规划步骤
  → 跨文件改动 + 命令执行
  → 给你 review`,
    analogy: "Cursor 偏"AI 助手"，Windsurf 偏"AI 实习生"——你下指令，它自己拆任务跑完。",
    beginnerExplanation: "Windsurf 是 Cursor 的主要竞争对手，长得像但思路不同。它的 Cascade 模式更激进，喜欢"一次干完一大段活"。",
    whatYouCanDo: [
      "用 Cascade 让 Agent 自动完成多步任务",
      "Tab 自动补全",
      "上下文跨文件引用",
      "终端命令也能让 AI 帮你跑",
    ],
    whyItMatters: "Windsurf 代表了"Agent 化"编辑器的方向。如果你想体验比 Cursor 更主动的 AI，可以试试。",
    vibeCodingUsage: "需要 AI 自己拿主意、连续操作的场景用 Windsurf；需要逐步控制、看每一步的用 Cursor。",
    quickStart: [
      "去 codeium.com/windsurf 下载",
      "打开项目，按 Cmd+I 打开 Cascade",
      "输入"帮我看看项目结构并提建议"",
    ],
    commonMisunderstandings: [
      "以为它和 Cursor 完全一样——Cascade 模式区别很大",
      "Agent 跑完了不 review 就 commit，容易出问题",
      "免费额度比 Cursor 大方但模型上限低",
    ],
    technicalExplanation: "Windsurf 由 Codeium 出品，基于 VS Code，独有 Cascade Agent 框架，支持多步规划、自主执行命令、跨文件协同编辑。",
    promptExample: "用 Cascade 帮我给这个 Next.js 项目加暗色模式，包含主题切换按钮和 Tailwind 配置。",
  },
  en: {
    oneLiner: "Codeium's AI editor, focused on agents that run whole tasks for you.",
    whatItLooksLike: `[Windsurf UI]
VS Code style, similar to Cursor
Unique "Cascade" panel:
  Say "add a login page"
  → Agent plans the steps
  → Multi-file edits + command runs
  → Review at the end`,
    analogy: "Cursor is more 'AI assistant'; Windsurf is more 'AI intern' — give an order and it runs the whole task.",
    beginnerExplanation: "Windsurf is Cursor's main competitor. It looks similar but its Cascade mode is more aggressive — it likes to finish big chunks of work in one go.",
    whatYouCanDo: [
      "Use Cascade to let an Agent complete multi-step tasks",
      "Tab autocomplete",
      "Cross-file context",
      "Let the AI run terminal commands",
    ],
    whyItMatters: "Windsurf represents the 'agent-first' editor direction. Try it if you want AI that is more proactive than Cursor.",
    vibeCodingUsage: "Use Windsurf when you want AI to make decisions and run continuously. Use Cursor when you want fine-grained control.",
    quickStart: [
      "Download from codeium.com/windsurf",
      "Open your project, press Cmd+I for Cascade",
      "Type 'look at this project and suggest improvements'",
    ],
    commonMisunderstandings: [
      "Assuming it is the same as Cursor — Cascade is very different",
      "Letting Cascade finish and committing without review is risky",
      "Free quota is generous, but top-tier models are limited",
    ],
    technicalExplanation: "Windsurf by Codeium is a VS Code-based editor with the Cascade agent framework: multi-step planning, autonomous command execution, and cross-file co-editing.",
    promptExample: "Use Cascade to add dark mode to this Next.js project — theme toggle button and Tailwind config.",
  },
};
