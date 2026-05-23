import type { TermOverride } from "./_types";

export const promptEngineering: TermOverride = {
  tags: ["ai", "prompt", "core"],
  relatedTerms: ["prompt", "system-prompt", "llm", "context-window", "chain-of-thought"],
  learningPath: ["prompt", "prompt-engineering", "system-prompt", "context-window", "rag"],
  zh: {
    oneLiner: "研究"怎么跟 AI 说话能得到更好结果"的方法学。",
    whatItLooksLike: `坏 Prompt：
"帮我写个网站"

好 Prompt：
"用 Next.js 14 + Tailwind 做一个个人作品集网站。
- 风格：极简、深色背景
- 页面：首页、作品、关于、联系
- 参考：linear.app 的视觉
先给我目录结构，再分步骤做。"`,
    analogy: "像写需求文档。同事看不懂的需求 → 干出来的活也不对。AI 一模一样。",
    beginnerExplanation: "Prompt Engineering 是一系列技巧的统称：怎么给上下文、怎么举例、怎么分步骤、怎么让 AI 自检。",
    whatYouCanDo: [
      "用 few-shot（举例子）提高准确度",
      "用 chain-of-thought（让 AI 一步步想）解复杂题",
      "用角色设定（你是一个资深...）调输出风格",
      "用 XML 标签结构化输入",
    ],
    whyItMatters: "同样的模型，会写 Prompt 的人能榨出 3 倍效果。Vibe Coding 时代，这是核心生产力技能。",
    vibeCodingUsage: "给 Claude Code / Cursor 提需求时，永远附上：项目背景、技术栈、限制条件、参考样例、验证标准。",
    quickStart: [
      "学一个套路：背景 + 目标 + 限制 + 输出格式",
      "每次让 AI 干活前，按这个套路写一遍",
      "对比"随便问"和"按套路问"的结果",
    ],
    commonMisunderstandings: [
      "以为是玄学——其实有具体可学的套路",
      "以为越长越好——关键是信息密度，不是字数",
      "以为对所有模型都通用——不同模型口味不同",
    ],
    technicalExplanation: "Prompt Engineering 包括 zero-shot、few-shot、chain-of-thought、role-playing、structured output（XML/JSON）、self-consistency、ReAct 等技术，是 LLM 应用层的核心方法学。",
    promptExample: "你是一个资深前端工程师。我会给你一段 React 代码，请按下面格式分析：\n1. 主要问题\n2. 修改建议\n3. 重构后的代码\n现在开始：[贴代码]",
  },
  en: {
    oneLiner: "The methodology of 'how to talk to AI to get better results'.",
    whatItLooksLike: `Bad prompt:
"build me a website"

Good prompt:
"Build a portfolio site with Next.js 14 + Tailwind.
- Style: minimal, dark
- Pages: Home, Work, About, Contact
- Reference: linear.app
First give me the folder structure, then go step by step."`,
    analogy: "Like writing a spec. Bad spec → bad work from your teammate. AI is the same.",
    beginnerExplanation: "Prompt Engineering is a bundle of techniques: how to give context, give examples, decompose steps, and have AI self-check.",
    whatYouCanDo: [
      "Use few-shot (examples) to boost accuracy",
      "Use chain-of-thought (think step by step) for hard problems",
      "Use role-playing ('you are a senior...') to shape style",
      "Use XML tags to structure inputs",
    ],
    whyItMatters: "Same model, 3x results for a good prompter. In Vibe Coding it is a core productivity skill.",
    vibeCodingUsage: "When tasking Claude Code / Cursor, always include: project background, stack, constraints, examples, success criteria.",
    quickStart: [
      "Learn the template: context + goal + constraints + output format",
      "Use it every time you task AI",
      "Compare 'random' vs 'templated' outputs",
    ],
    commonMisunderstandings: [
      "Thinking it is mysticism — there are concrete patterns",
      "Longer is not better — information density matters",
      "Not all techniques transfer across models — each has its taste",
    ],
    technicalExplanation: "Prompt Engineering includes zero-shot, few-shot, chain-of-thought, role-playing, structured output (XML/JSON), self-consistency, ReAct, and more — the core methodology of LLM application work.",
    promptExample: "You are a senior frontend engineer. I will paste React code, please respond in this format:\n1. Main issues\n2. Suggested changes\n3. Refactored code\nStarting now: [code]",
  },
};
