import type { TermOverride } from "./_types";

export const vibeCoding: TermOverride = {
  tags: ["core", "ai-coding", "concept"],
  relatedTerms: ["claude-code", "cursor", "prompt", "agent", "ai"],
  learningPath: ["vibe-coding", "claude-code", "cursor", "prompt", "deployment"],
  zh: {
    oneLiner: "用自然语言指挥 AI 写代码，自己不直接敲代码的开发方式。",
    whatItLooksLike: `传统编程：
  你 → 写代码 → 跑起来

Vibe Coding：
  你 → 描述想要什么 → AI 写代码 → 你 review → 跑起来`,
    analogy: "传统编程像自己下厨。Vibe Coding 像跟厨师点菜——你只需说清楚要吃什么，剩下的厨师搞定。",
    beginnerExplanation: "Vibe Coding 是 Andrej Karpathy 2024 年提出的概念。核心：你只描述想法和感觉，AI 负责把它变成可运行的代码。",
    whatYouCanDo: [
      "把"想做个 App"变成实际能跑的东西",
      "不会编程也能验证产品 idea",
      "迭代速度快 5-10 倍",
      "把脑力花在"做什么"而不是"怎么写"",
    ],
    whyItMatters: "Vibe Coding 让做软件的门槛大幅降低。非技术创始人、设计师、产品经理都能独立做出 MVP。",
    vibeCodingUsage: "工具：Claude Code / Cursor / Windsurf / v0 / Bolt / Lovable。方法：描述清楚 → AI 执行 → 你 review → 迭代。",
    quickStart: [
      "装 Cursor 或 Claude Code",
      "找一个小目标（比如做个待办列表）",
      "用自然语言一步步描述需求，让 AI 做",
    ],
    commonMisunderstandings: [
      "以为完全不用懂编程——你需要看懂 AI 写的东西",
      "以为越快越好——不 review 容易留 bug",
      "以为只能做小项目——大项目也能 Vibe Code，但要拆解",
    ],
    technicalExplanation: "Vibe Coding 描述的是以自然语言为主、IDE + AI Agent 协作为辅的软件开发范式。强调意图表达、快速迭代、AI 自主执行加人工 review。",
    promptExample: "我想做一个让用户上传 PDF 然后用 AI 总结要点的网页应用。请帮我规划技术栈、列出步骤，然后我们一步步来。",
  },
  en: {
    oneLiner: "A way of building software where you describe what you want in natural language and AI writes the code.",
    whatItLooksLike: `Traditional coding:
  You → write code → run

Vibe Coding:
  You → describe what you want → AI writes code → you review → run`,
    analogy: "Traditional coding is cooking. Vibe Coding is ordering at a restaurant — say what you want and the chef handles the rest.",
    beginnerExplanation: "Vibe Coding was coined by Andrej Karpathy in 2024. The core idea: you express the idea and the vibe, AI turns it into running code.",
    whatYouCanDo: [
      "Turn 'I want to build an app' into something real",
      "Validate product ideas without coding background",
      "Iterate 5-10x faster",
      "Spend brain power on 'what to build', not 'how to write it'",
    ],
    whyItMatters: "Vibe Coding lowers the barrier to building software. Non-technical founders, designers, and PMs can ship MVPs themselves.",
    vibeCodingUsage: "Tools: Claude Code / Cursor / Windsurf / v0 / Bolt / Lovable. Method: describe → AI executes → you review → iterate.",
    quickStart: [
      "Install Cursor or Claude Code",
      "Pick a small goal (e.g. a todo list)",
      "Describe what you want step by step",
    ],
    commonMisunderstandings: [
      "Thinking you need zero coding knowledge — you must read what AI writes",
      "Faster is not always better — skipping review leaves bugs",
      "Thinking it is only for toys — large projects work too, with decomposition",
    ],
    technicalExplanation: "Vibe Coding refers to a development paradigm centered on natural language intent, IDE + AI Agent collaboration, autonomous AI execution, and human review.",
    promptExample: "I want a web app where users upload a PDF and AI summarizes the key points. Plan the stack, list the steps, and let us go one by one.",
  },
};
