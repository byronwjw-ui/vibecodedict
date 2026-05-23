import type { TermOverride } from "./_types";

export const claudeCode: TermOverride = {
  tags: ["ai-tool", "agent", "cli", "claude"],
  relatedTerms: ["cursor", "windsurf", "github-copilot", "agent", "terminal"],
  learningPath: ["claude-code", "terminal", "git", "prompt", "deployment"],
  zh: {
    oneLiner: "在终端里跟你一起写代码的 AI 编程助手。",
    whatItLooksLike: `$ claude
> 帮我加一个登录页
✓ 读取 app/layout.tsx
✓ 创建 app/login/page.tsx
✓ 修改 components/Header.tsx
是否提交？(y/n)`,
    analogy: "像住在你电脑里的资深工程师。你说一句话，它读项目、改文件、跑命令，最后给你看结果。",
    beginnerExplanation: "Claude Code 是 Anthropic 出的命令行 AI 工具。打开终端输入需求，它就帮你改代码、装包、跑测试、修 bug。",
    whatYouCanDo: [
      "从零搭一个 Next.js / React 项目",
      "给现有项目加一个新页面或功能",
      "排查报错并自动修复",
      "接入 Supabase、Stripe、OpenAI 等服务",
      "重构代码、写测试、写文档",
    ],
    whyItMatters: "它是 Vibe Coding 时代最具代表性的工具之一。不用记语法、不用写脚手架，自然语言就能跑通整个开发流程。",
    vibeCodingUsage: "你不再"写代码"，而是"描述要做什么"。Claude Code 会拆任务、执行命令、自检报错，你只需要 review 和点确认。",
    quickStart: [
      "去 claude.ai/code 安装 CLI 工具",
      "在项目根目录运行 `claude`",
      "输入你的第一条需求，比如"帮我看看这个项目结构"",
    ],
    commonMisunderstandings: [
      "以为它只会聊天——它真的会改你的本地文件",
      "不给上下文就让它干活——结果会跑偏，要说清项目背景",
      "盲目接受它的修改——一定要 review diff 再提交",
    ],
    technicalExplanation: "Claude Code 是基于 Claude 模型的 CLI agent，本地运行，支持文件读写、shell 执行、tool use 和 MCP 协议扩展。",
    promptExample: "我有一个 Next.js 14 项目，帮我加一个 /pricing 页面，参考 Stripe 的定价页风格，三栏布局，用 Tailwind。",
  },
  en: {
    oneLiner: "An AI coding assistant that pair-programs with you inside your terminal.",
    whatItLooksLike: `$ claude
> add a login page
✓ read app/layout.tsx
✓ create app/login/page.tsx
✓ modify components/Header.tsx
commit changes? (y/n)`,
    analogy: "Like a senior engineer living inside your computer. Say what you want, it reads the project, edits files, runs commands, and shows you the result.",
    beginnerExplanation: "Claude Code is Anthropic's command-line AI tool. Open a terminal, type what you want, and it edits code, installs packages, runs tests, and fixes bugs.",
    whatYouCanDo: [
      "Scaffold a Next.js / React project from zero",
      "Add a new page or feature to an existing project",
      "Diagnose errors and auto-fix them",
      "Wire up Supabase, Stripe, OpenAI, and other services",
      "Refactor code, write tests, write docs",
    ],
    whyItMatters: "It is one of the defining tools of the Vibe Coding era. No syntax memorization, no boilerplate — natural language drives the whole dev loop.",
    vibeCodingUsage: "You stop 'writing code' and start 'describing what you want'. Claude Code breaks the task down, runs commands, checks itself, and you just review and approve.",
    quickStart: [
      "Install the CLI from claude.ai/code",
      "Run `claude` in your project root",
      "Type your first request, e.g. 'walk me through this project structure'",
    ],
    commonMisunderstandings: [
      "Thinking it only chats — it actually edits your local files",
      "Giving it no context and expecting magic — be explicit about the project",
      "Accepting every change blindly — always review the diff before committing",
    ],
    technicalExplanation: "Claude Code is a CLI agent built on the Claude model. It runs locally with file read/write, shell execution, tool use, and MCP protocol extension support.",
    promptExample: "I have a Next.js 14 project. Add a /pricing page styled like Stripe's pricing page — three-column layout, Tailwind, responsive.",
  },
};
