// Hand-written content overrides keyed by slug.
// Anything missing falls back to templated content in lib/build-terms.ts.
import type { LocalizedTermContent } from "@/types/term";
import type { TermOverride } from "./overrides/_types";

// Group 1 — AI editing tools
import { claudeCode } from "./overrides/claude-code";
import { cursor } from "./overrides/cursor";
import { windsurf } from "./overrides/windsurf";
import { githubCopilot } from "./overrides/github-copilot";
import { v0 } from "./overrides/v0";
import { bolt } from "./overrides/bolt";
import { replitAgent } from "./overrides/replit-agent";
import { lovable } from "./overrides/lovable";
import { devin } from "./overrides/devin";
import { chatgpt } from "./overrides/chatgpt";

// Group 2 — core concepts (vibe-coding, prompt-engineering, mcp, rag, agent,
// token, context-window, embedding, fine-tuning, sdk, api-key, hallucination,
// system-prompt). ai/llm/prompt/api stay in LEGACY below for now.
import { vibeCoding } from "./overrides/vibe-coding";
import { promptEngineering } from "./overrides/prompt-engineering";
import { mcp } from "./overrides/mcp";
import { rag } from "./overrides/rag";
import { agent } from "./overrides/agent";
import { token } from "./overrides/token";
import { contextWindow } from "./overrides/context-window";
import { embedding } from "./overrides/embedding";
import { fineTuning } from "./overrides/fine-tuning";
import { sdk } from "./overrides/sdk";
import { apiKey } from "./overrides/api-key";
import { hallucination } from "./overrides/hallucination";
import { systemPrompt } from "./overrides/system-prompt";

const MODULAR: Record<string, TermOverride> = {
  // Group 1
  "claude-code": claudeCode,
  cursor: cursor,
  windsurf: windsurf,
  "github-copilot": githubCopilot,
  v0: v0,
  bolt: bolt,
  "replit-agent": replitAgent,
  lovable: lovable,
  devin: devin,
  chatgpt: chatgpt,
  // Group 2
  "vibe-coding": vibeCoding,
  "prompt-engineering": promptEngineering,
  mcp: mcp,
  rag: rag,
  agent: agent,
  token: token,
  "context-window": contextWindow,
  embedding: embedding,
  "fine-tuning": fineTuning,
  sdk: sdk,
  "api-key": apiKey,
  hallucination: hallucination,
  "system-prompt": systemPrompt,
};

// Legacy inline overrides (kept for now; ai/llm/prompt/api already had quality content).
const LEGACY: Record<string, TermOverride> = {
  ai: {
    tags: ["ai", "core"],
    relatedTerms: ["llm", "agent", "model", "prompt", "neural-network"],
    learningPath: ["ai", "llm", "prompt", "agent", "rag"],
    zh: {
      oneLiner: "AI 是让机器模拟人类智能的技术总称。",
      beginnerExplanation: "AI 就像一个会学习的助手。你给它看很多例子，它就能总结规律，然后帮你做事，比如写文章、画图、写代码。",
      technicalExplanation: "AI 是研究让计算机系统执行通常需要人类智能的任务的领域，包括感知、推理、学习、决策和自然语言处理。",
      whyItMatters: "AI 是 Vibe Coding 时代的基础。理解 AI，是理解 LLM、Agent、RAG 等概念的起点。",
      vibeCodingUsage: "你用 Claude Code、Cursor、ChatGPT 时，本质上都在调用 AI 来帮你写代码、改 bug、做设计。",
      useCases: ["智能助手", "自动写代码", "图片生成", "智能客服", "数据分析"],
      commonMisunderstandings: [
        "AI 不等于 LLM，LLM 只是 AI 的一种",
        "AI 不是无所不能，它会出错、会幻觉",
        "AI 不是真的'理解'你说的话，它是在做概率预测",
      ],
      promptExample: "请用小白能理解的方式解释 AI，并举一个 Vibe Coding 中调用 AI 的例子。",
    },
    en: {
      oneLiner: "AI is the umbrella term for technology that lets machines simulate human intelligence.",
      beginnerExplanation: "Think of AI as a learning assistant. Show it many examples and it spots patterns, then helps you write text, generate images, or write code.",
      technicalExplanation: "AI is the field of building computer systems that perform tasks typically requiring human intelligence: perception, reasoning, learning, decision-making, and natural language processing.",
      whyItMatters: "AI is the foundation of the Vibe Coding era. Understanding AI is the starting point for understanding LLMs, agents, and RAG.",
      vibeCodingUsage: "When you use Claude Code, Cursor, or ChatGPT, you are calling AI to write code, fix bugs, and design features.",
      useCases: ["Smart assistants", "Auto-generating code", "Image generation", "AI customer support", "Data analysis"],
      commonMisunderstandings: [
        "AI is not the same as an LLM — LLM is one kind of AI",
        "AI is not all-knowing; it makes mistakes and hallucinates",
        "AI does not truly understand you — it predicts probabilities",
      ],
      promptExample: "Explain AI in a beginner-friendly way and give one example of using AI in Vibe Coding.",
    },
  },
  llm: {
    tags: ["ai", "llm", "core"],
    relatedTerms: ["ai", "token", "context-window", "prompt", "transformer"],
    learningPath: ["ai", "llm", "token", "prompt", "context-window"],
    zh: {
      oneLiner: "LLM 是用海量文本训练出来、能理解和生成语言的大模型。",
      beginnerExplanation: "LLM 就像一个看过无数本书的人，你问它任何问题，它都能根据'读过的内容'给你一个看起来合理的回答。",
      technicalExplanation: "LLM 是基于 Transformer 架构、用大规模文本语料训练的语言模型，通过预测下一个 token 来生成文本。",
      whyItMatters: "LLM 是 ChatGPT、Claude、Gemini、DeepSeek 的底层引擎，也是 Vibe Coding 的核心动力。",
      vibeCodingUsage: "Claude Code 背后是 Claude 这个 LLM；Cursor 背后是 GPT、Claude 等多种 LLM。让 LLM 帮你写代码就是 Vibe Coding 的常规操作。",
      useCases: ["写代码", "写文档", "翻译", "总结长文", "Agent 推理"],
      commonMisunderstandings: ["LLM 不是搜索引擎，它没有实时联网", "LLM 不会真的'思考'，它在做概率预测", "LLM 会幻觉，回答需要核实"],
      promptExample: "请用小白能理解的方式解释 LLM，并说明它和搜索引擎的区别。",
    },
    en: {
      oneLiner: "An LLM is a large model trained on huge amounts of text that can understand and generate language.",
      beginnerExplanation: "An LLM is like someone who has read countless books. Ask it anything and it gives a reasonable-sounding answer based on what it has read.",
      technicalExplanation: "An LLM is a Transformer-based language model trained on large text corpora that generates text by predicting the next token.",
      whyItMatters: "LLMs power ChatGPT, Claude, Gemini, and DeepSeek — and they are the core engine of Vibe Coding.",
      vibeCodingUsage: "Claude Code runs on the Claude LLM; Cursor runs on multiple LLMs. Prompting an LLM to write code is the daily routine of Vibe Coding.",
      useCases: ["Writing code", "Writing docs", "Translation", "Summarizing long text", "Agent reasoning"],
      commonMisunderstandings: ["An LLM is not a search engine — it is not connected to live web", "An LLM does not truly think — it predicts probabilities", "LLMs hallucinate; verify their answers"],
      promptExample: "Explain LLM in a beginner-friendly way and contrast it with a search engine.",
    },
  },
  prompt: {
    tags: ["ai", "prompt", "core"],
    relatedTerms: ["llm", "system-prompt", "user-prompt", "prompt-engineering", "context-window"],
    learningPath: ["prompt", "system-prompt", "user-prompt", "prompt-engineering", "context-window"],
    zh: {
      oneLiner: "Prompt 是你给 AI 的输入，决定了它怎么理解任务、输出什么结果。",
      beginnerExplanation: "Prompt 就是你对 AI 说的话。你说得越清楚、越具体，AI 干出来的活就越接近你想要的。",
      technicalExplanation: "Prompt 是传递给 LLM 的输入文本，可以包含指令、上下文、示例和输入数据。Prompt 的质量直接决定输出的质量。",
      whyItMatters: "在 Vibe Coding 里，你不是在写代码，你是在写 Prompt。Prompt 写得好，项目推进快一倍。",
      vibeCodingUsage: "告诉 Claude Code、Cursor 你要做什么、项目背景是什么、限制是什么，都是在写 Prompt。",
      useCases: ["让 AI 写一个页面", "让 AI 修复 bug", "让 AI 总结长文档", "让 AI 生成单元测试"],
      commonMisunderstandings: ["Prompt 越长越好是错的，关键是清楚不是长", "什么背景都不补充是主要报错原因", "认为 AI 能猜你的意思——它不会"],
      promptExample: "请用一个具体例子解释什么是 Prompt，并对比一个"坏 Prompt"和"好 Prompt"的差别。",
    },
    en: {
      oneLiner: "A prompt is the input you give an AI, which determines how it understands the task and what it outputs.",
      beginnerExplanation: "A prompt is what you say to an AI. The clearer and more specific you are, the closer the result will be to what you want.",
      technicalExplanation: "A prompt is the input text passed to an LLM. It may include instructions, context, examples, and input data. Prompt quality directly determines output quality.",
      whyItMatters: "In Vibe Coding you are not writing code, you are writing prompts. A good prompt moves the project forward twice as fast.",
      vibeCodingUsage: "Telling Claude Code or Cursor what to do, the project background, and the constraints — it is all prompt writing.",
      useCases: ["Ask AI to build a page", "Ask AI to fix a bug", "Ask AI to summarize long docs", "Ask AI to write unit tests"],
      commonMisunderstandings: ["Longer prompts are not always better — clarity matters more", "Skipping context is the top cause of bad output", "Assuming AI can guess what you mean — it cannot"],
      promptExample: "With a concrete example, explain what a prompt is, then contrast a 'bad prompt' with a 'good prompt'.",
    },
  },
  api: {
    tags: ["programming", "web", "core"],
    relatedTerms: ["http", "json", "api-key", "sdk", "rest-api"],
    learningPath: ["http", "json", "rest-api", "api-key", "sdk"],
    zh: {
      oneLiner: "API 是软件之间互相调用功能和交换数据的接口。",
      beginnerExplanation: "API 就像餐厅菜单。你不需要知道厨房怎么做菜，只需要按菜单点餐，餐厅就会把结果给你。",
      technicalExplanation: "API 是一组定义好的规则、协议和数据格式，让不同软件系统之间进行通信。常见的 Web API 基于 HTTP，使用 JSON 交换数据。",
      whyItMatters: "在 AI 编程中，调用大模型、连接数据库、接入支付、登录系统和第三方工具，通常都需要 API。",
      vibeCodingUsage: "当你让 Claude Code 接入 OpenAI、Stripe、Supabase 或 GitHub 时，它本质上都在处理 API 调用、API Key 与错误。",
      useCases: ["调用 OpenAI 或 Claude 模型", "接第三方登录", "获取天气数据", "处理支付", "连接数据库服务"],
      codeExample: "fetch('https://api.example.com/users')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      commonMisunderstandings: ["API 不是网页本身", "API Key 不能随便暴露在前端", "API 报错不一定是代码逻辑错，也可能是权限、参数、额度或网络问题"],
      promptExample: "请用小白能理解的方式解释 API，并结合一个 AI 应用开发案例说明它怎么用。",
    },
    en: {
      oneLiner: "An API is an interface that lets software systems call functions and exchange data.",
      beginnerExplanation: "An API is like a restaurant menu. You do not need to know how the kitchen works — you just order from the menu and the kitchen delivers.",
      technicalExplanation: "An API is a defined set of rules, protocols, and data formats that lets different software systems communicate. Web APIs typically run over HTTP and exchange JSON.",
      whyItMatters: "In AI coding, calling models, payment services, databases, login systems, and third-party tools almost always means using an API.",
      vibeCodingUsage: "When you ask Claude Code to connect to OpenAI, Stripe, Supabase, or GitHub, it is really managing API calls, API keys, and errors.",
      useCases: ["Calling OpenAI or Claude models", "Adding third-party login", "Fetching weather data", "Handling payments", "Connecting to database services"],
      codeExample: "fetch('https://api.example.com/users')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      commonMisunderstandings: ["An API is not the same as a web page", "API keys should not be exposed in the frontend", "An API error is not always a code bug — it may be auth, params, quota, or network"],
      promptExample: "Explain API in a beginner-friendly way and show one concrete AI app development example.",
    },
  },
};

// Modular wins over legacy when the same slug appears in both.
export const OVERRIDES: Record<string, TermOverride> = { ...LEGACY, ...MODULAR };

// Re-export for any external consumer.
export type { TermOverride };
export type { LocalizedTermContent };
