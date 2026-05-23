import type { TermOverride } from "./_types";

export const contextWindow: TermOverride = {
  tags: ["ai", "llm", "core"],
  relatedTerms: ["token", "llm", "prompt", "rag", "memory"],
  learningPath: ["token", "context-window", "prompt", "rag", "memory"],
  zh: {
    oneLiner: "LLM 一次能看到的最大 token 数，相当于它的"短期记忆容量"。",
    whatItLooksLike: `各模型 Context Window：
- GPT-4o:        128K token  (~10 万字)
- Claude 3.5:    200K token  (~15 万字)
- Gemini 1.5:    2M token    (~150 万字)
- DeepSeek V3:   128K token

超过这个长度 → 报错或截断旧消息`,
    analogy: "像短期记忆。模型一次能记住的内容有上限——超了就忘掉最早的，或者直接拒绝处理。",
    beginnerExplanation: "Context Window 是 LLM 一次能处理的文字量上限。聊得太久、文档太长、贴的代码太多——都会撞这个墙。",
    whatYouCanDo: [
      "选模型时看 context 大小",
      "长对话定期清记忆",
      "太长的文档要用 RAG 拆分",
      "估算自己的需求要多大 context",
    ],
    whyItMatters: "决定了 AI 能"看多少东西"作答。做"读整本书"、"分析大代码库"这类任务，context 是核心瓶颈。",
    vibeCodingUsage: "Cursor / Claude Code 跑大项目时，要主动控制：只 @-mention 必要文件，避免 token 爆掉。",
    quickStart: [
      "查你常用模型的 context 大小",
      "做一个超长 prompt 实验，看什么时候报错",
      "学会"开新对话"重置上下文",
    ],
    commonMisunderstandings: [
      "context 越大越好？错——越大越贵、越慢",
      "塞满 context 不等于 AI 都记得——长上下文里中段内容容易被忽略（lost in the middle）",
      "context 不等于"长期记忆"，关掉对话就没了",
    ],
    technicalExplanation: "Context Window 是 LLM 单次推理可处理的最大 token 数，由模型架构（attention）决定。包含 system prompt、对话历史、当前 query 和预留输出空间。",
    promptExample: "请解释 Context Window 是什么，对比几个主流大模型的 context 大小，并说说"lost in the middle"现象。",
  },
  en: {
    oneLiner: "The max number of tokens an LLM sees at once — its 'short-term memory size'.",
    whatItLooksLike: `Model context windows:
- GPT-4o:        128K tokens
- Claude 3.5:    200K tokens
- Gemini 1.5:    2M tokens
- DeepSeek V3:   128K tokens

Exceed it → error or oldest messages dropped`,
    analogy: "Short-term memory. The model can only hold so much at once — beyond that it forgets the oldest, or refuses.",
    beginnerExplanation: "Context Window is the max text an LLM can process at once. Long chats, long docs, big code paste-ins all hit this wall.",
    whatYouCanDo: [
      "Check window size when picking a model",
      "Clear long chats periodically",
      "Use RAG for very long docs",
      "Estimate the context you need",
    ],
    whyItMatters: "It controls how much the AI 'sees' to answer. For 'read a whole book' or 'analyze a large codebase', context is the bottleneck.",
    vibeCodingUsage: "On large projects with Cursor / Claude Code, actively manage context: only @-mention necessary files to avoid blowing tokens.",
    quickStart: [
      "Check the context size of the model you use",
      "Try a huge prompt, see when it errors",
      "Practice 'new chat' to reset context",
    ],
    commonMisunderstandings: [
      "Bigger context is always better? No — bigger = slower and pricier",
      "Filling context does not mean AI remembers it all (lost in the middle)",
      "Context is not long-term memory — gone when chat closes",
    ],
    technicalExplanation: "Context Window is the max tokens for a single LLM inference, determined by attention architecture. Includes system prompt, chat history, current query, and reserved output space.",
    promptExample: "Explain context window, compare a few top models, and discuss the 'lost in the middle' phenomenon.",
  },
};
