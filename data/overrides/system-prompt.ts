import type { TermOverride } from "./_types";

export const systemPrompt: TermOverride = {
  tags: ["ai", "prompt", "core"],
  relatedTerms: ["prompt", "prompt-engineering", "user-prompt", "llm", "context-window"],
  learningPath: ["prompt", "system-prompt", "user-prompt", "prompt-engineering", "context-window"],
  zh: {
    oneLiner: "对话开头给 AI 定的"人设/规则"，决定它接下来怎么回话。",
    whatItLooksLike: `OpenAI API 调用：

{
  "messages": [
    { "role": "system", "content": "你是一个 K12 数学辅导老师。永远用小学生能懂的话回答，每次最多 3 句话。" },
    { "role": "user", "content": "什么是分数？" }
  ]
}

→ AI 会按"K12 老师 + 简短"作答`,
    analogy: "像入职说明。员工入职时告诉他岗位职责、说话风格、底线，他之后就照办。",
    beginnerExplanation: "System Prompt 是 AI 对话最开头那段"设定"。它定调子——身份、风格、底线、输出格式都从这里定。",
    whatYouCanDo: [
      "给 AI 设角色（你是一个资深 ...）",
      "定输出格式（用 JSON 返回，三个字段）",
      "划红线（不要回答 X 类问题）",
      "锁定语气（专业 / 幽默 / 简短）",
    ],
    whyItMatters: "好的 system prompt 比好的 user prompt 影响更大。Custom GPTs、Cursor 规则、企业 AI 都靠它定调。",
    vibeCodingUsage: "Cursor / Claude Code 里的"Rules"和".cursorrules"文件，本质就是 system prompt——告诉 AI 你的项目规范。",
    quickStart: [
      "在 ChatGPT 自定义指令里写一段，看效果差别",
      "在 Cursor 里写 .cursorrules",
      "对比"有 system prompt"vs"没有"的输出",
    ],
    commonMisunderstandings: [
      "System prompt ≠ user prompt——user 是问题，system 是规则",
      "不能写得太长——会吃 context",
      "AI 不一定 100% 遵守，关键规则要重复强调",
    ],
    technicalExplanation: "System Prompt 是 LLM API 调用中 role=\"system\" 的消息。一般在对话最前面，优先级高于 user message。Claude 用 system 参数，OpenAI 用 messages 数组。",
    promptExample: "请帮我写一个 system prompt，让 AI 充当"小白友好的编程导师"，永远用类比解释技术概念，每次回答控制在 100 字以内。",
  },
  en: {
    oneLiner: "The 'role/rules' set at the start of a chat — decides how the AI behaves from then on.",
    whatItLooksLike: `OpenAI API call:

{
  "messages": [
    { "role": "system", "content": "You are a K-12 math tutor. Always explain like a child can understand, max 3 sentences." },
    { "role": "user", "content": "What is a fraction?" }
  ]
}

→ AI answers as 'K-12 tutor + brief'`,
    analogy: "Like an onboarding doc. Tell the new hire their role, tone, and boundaries — they follow it.",
    beginnerExplanation: "System Prompt is the 'setup' message at the start. Identity, style, limits, output format — all set here.",
    whatYouCanDo: [
      "Set a role ('you are a senior...')",
      "Define output format (JSON with 3 fields)",
      "Draw red lines (don't answer X)",
      "Lock the tone (formal / playful / brief)",
    ],
    whyItMatters: "A good system prompt outweighs a good user prompt. Custom GPTs, Cursor rules, enterprise AI all rely on it.",
    vibeCodingUsage: "Cursor's Rules and .cursorrules files are essentially system prompts — telling the AI your project's conventions.",
    quickStart: [
      "Try ChatGPT custom instructions",
      "Write a .cursorrules in Cursor",
      "Compare 'with system prompt' vs 'without'",
    ],
    commonMisunderstandings: [
      "System prompt is not user prompt — user asks, system rules",
      "Don't write it too long — eats context",
      "AI won't follow 100%; repeat critical rules",
    ],
    technicalExplanation: "A System Prompt is the role=\"system\" message in an LLM API call. Highest priority, placed first. Claude uses a system parameter; OpenAI uses the messages array.",
    promptExample: "Write a system prompt that makes the AI a 'beginner-friendly coding mentor' — always uses analogies, max 100 words per reply.",
  },
};
