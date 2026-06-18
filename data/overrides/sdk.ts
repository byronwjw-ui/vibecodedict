import type { TermOverride } from "./_types";

export const sdk: TermOverride = {
  tags: ["programming", "core", "tool"],
  relatedTerms: ["api", "library", "framework", "package", "npm"],
  learningPath: ["api", "sdk", "library", "package", "framework"],
  zh: {
    oneLiner: "SDK 是官方打包好的"工具箱"，让你少写代码就能用上某个服务。",
    whatItLooksLike: `不用 SDK 直接调 API：
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {...},
  body: JSON.stringify({...})
})

用 OpenAI SDK：
import OpenAI from 'openai'
const openai = new OpenAI()
const res = await openai.chat.completions.create({...})

少写一半代码，类型提示还更好`,
    analogy: "API 是"原料"，SDK 是"半成品工具包"——你直接用 SDK 包好的函数，不用自己拼接。",
    beginnerExplanation: "SDK = Software Development Kit。它把对某个服务的 API 调用、错误处理、类型定义全打包好，你 import 就能用。",
    whatYouCanDo: [
      "用 OpenAI SDK 调 GPT",
      "用 Anthropic SDK 调 Claude",
      "用 Stripe SDK 接支付",
      "用 Supabase SDK 操作数据库",
    ],
    whyItMatters: "现代开发几乎都靠 SDK 加速。能用 SDK 就别手写 API 请求，省时间、少 bug。",
    vibeCodingUsage: "让 Claude Code 接 OpenAI、Stripe、Supabase 等服务时，它会自动装对应 SDK，而不是手写 fetch。",
    quickStart: [
      "选一个服务（比如 OpenAI）",
      "npm install openai",
      "看 5 分钟官方 quickstart，跑通第一个调用",
    ],
    commonMisunderstandings: [
      "SDK 和 API 是两个东西——API 是接口，SDK 是封装",
      "不同语言的 SDK 功能可能不齐（Python > JS > 其他）",
      "SDK 版本更新可能 breaking，要看 changelog",
    ],
    technicalExplanation: "SDK（Software Development Kit）通常包含库（library）、文档、示例、命令行工具。对 Web 服务来说，SDK 是 API 的语言原生封装。",
    promptExample: "解释 SDK 和 API 的区别，用 OpenAI 的 Node.js SDK 举一个具体例子。",
  },
  en: {
    oneLiner: "An SDK is the official 'toolkit' that lets you use a service with much less code.",
    whatItLooksLike: `Raw API call:
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST', headers: {...}, body: JSON.stringify({...})
})

With OpenAI SDK:
import OpenAI from 'openai'
const openai = new OpenAI()
const res = await openai.chat.completions.create({...})

Half the code, better types`,
    analogy: "API is raw material. SDK is a prebuilt tool kit — call the wrapped functions instead of assembling yourself.",
    beginnerExplanation: "SDK = Software Development Kit. It bundles API calls, error handling, and types so you can just import and go.",
    whatYouCanDo: [
      "Call GPT via OpenAI SDK",
      "Call Claude via Anthropic SDK",
      "Payments via Stripe SDK",
      "DB via Supabase SDK",
    ],
    whyItMatters: "Modern dev runs on SDKs. Use the SDK over raw fetch — saves time, fewer bugs.",
    vibeCodingUsage: "When Claude Code wires up OpenAI, Stripe, or Supabase, it installs the SDK rather than hand-writing fetch.",
    quickStart: [
      "Pick a service (e.g. OpenAI)",
      "npm install openai",
      "Follow the 5-min quickstart, make one call work",
    ],
    commonMisunderstandings: [
      "SDK and API are different — API is the interface, SDK is the wrapper",
      "Feature parity varies across languages (Python > JS > others)",
      "SDK upgrades can break — read the changelog",
    ],
    technicalExplanation: "An SDK (Software Development Kit) typically bundles libraries, docs, examples, and CLI tools. For web services, the SDK is the language-native wrapper of an API.",
    promptExample: "Explain SDK vs API, and give a concrete example using OpenAI's Node.js SDK.",
  },
};
