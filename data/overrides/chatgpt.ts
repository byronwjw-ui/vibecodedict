import type { TermOverride } from "./_types";

export const chatgpt: TermOverride = {
  tags: ["ai-tool", "llm", "chatbot", "openai"],
  relatedTerms: ["llm", "claude-code", "cursor", "prompt", "openai"],
  learningPath: ["chatgpt", "prompt", "llm", "api", "vibe-coding"],
  zh: {
    oneLiner: "OpenAI 出的对话式 AI，掀起这一轮 AI 浪潮的起点。",
    whatItLooksLike: `打开 chat.openai.com
输入框：
"帮我写一个 Python 脚本，把文件夹里所有 .md 文件合并成一个"

ChatGPT：
[代码块]
import os
...
[解释]
这个脚本会...`,
    analogy: "像一个什么都懂一点的万能助理。让它写代码、改文案、解释概念、做计划，都行。",
    beginnerExplanation: "ChatGPT 是 OpenAI 2022 年发布的对话产品，让"和 AI 聊天解决问题"成为日常。",
    whatYouCanDo: [
      "问任何问题、写任何文字",
      "Code Interpreter 跑 Python",
      "上传文件让 AI 分析",
      "用 GPT-4o 看图、识图",
      "Custom GPTs 做专属机器人",
    ],
    whyItMatters: "它是大众接触 AI 的入口。理解了 ChatGPT 的用法，再学 Claude Code、Cursor 都好懂。",
    vibeCodingUsage: "写代码时用它做"前置思考"——问思路、查 API、debug 错误信息，然后再回到 Cursor 实操。",
    quickStart: [
      "去 chat.openai.com 注册",
      "试试问"帮我用一段话解释 Vibe Coding"",
      "再试"教我怎么从零做一个网站"",
    ],
    commonMisunderstandings: [
      "ChatGPT ≠ GPT 模型，它是包装了 GPT 的产品",
      "免费版是 GPT-4o mini，模型比付费版弱很多",
      "它不联网搜索的版本会用旧数据回答",
    ],
    technicalExplanation: "ChatGPT 是 OpenAI 基于 GPT 系列模型（GPT-3.5/4/4o/o1）的对话产品，集成 Code Interpreter、DALL-E、Browsing、Custom GPTs 等工具。",
    promptExample: "我完全没编程基础，想做一个个人博客网站。请给我一个"从零到上线"的步骤清单，每步说清楚要用什么工具。",
  },
  en: {
    oneLiner: "OpenAI's conversational AI — the spark that started this AI wave.",
    whatItLooksLike: `Open chat.openai.com
Type:
"Write a Python script to merge all .md files in a folder"

ChatGPT:
[code block]
import os
...
[explanation]
This script will...`,
    analogy: "Like a generalist assistant who knows a bit of everything — code, copywriting, concepts, planning.",
    beginnerExplanation: "ChatGPT is OpenAI's conversational product launched in 2022. It made 'chatting with AI to solve problems' a daily habit.",
    whatYouCanDo: [
      "Ask anything, write anything",
      "Run Python via Code Interpreter",
      "Upload files for AI to analyze",
      "Use GPT-4o for vision",
      "Build Custom GPTs",
    ],
    whyItMatters: "It is the public's gateway to AI. Understanding ChatGPT makes Claude Code and Cursor easier to learn.",
    vibeCodingUsage: "Use it for 'pre-thinking' while coding — ask for an approach, look up APIs, debug errors, then return to Cursor for execution.",
    quickStart: [
      "Sign up at chat.openai.com",
      "Try 'explain Vibe Coding in one paragraph'",
      "Try 'teach me to build a website from scratch'",
    ],
    commonMisunderstandings: [
      "ChatGPT is not the GPT model — it is a product wrapping GPT",
      "Free tier uses GPT-4o mini, much weaker than paid",
      "Without browsing on, it answers from stale data",
    ],
    technicalExplanation: "ChatGPT is OpenAI's conversational product on top of GPT models (3.5/4/4o/o1), integrating Code Interpreter, DALL-E, Browsing, and Custom GPTs.",
    promptExample: "I have zero coding background and want to build a personal blog. Give me a 'zero to live' checklist, and for each step say which tool to use.",
  },
};
