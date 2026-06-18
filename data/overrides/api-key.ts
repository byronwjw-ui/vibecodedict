import type { TermOverride } from "./_types";

export const apiKey: TermOverride = {
  tags: ["api", "security", "core"],
  relatedTerms: ["api", "environment-variables", "sdk", "authentication", "security"],
  learningPath: ["api", "api-key", "environment-variables", "sdk", "authentication"],
  zh: {
    oneLiner: "API Key 是你调用某个服务的"通行证 + 账单地址"，绝不能泄露。",
    whatItLooksLike: `OpenAI API Key:
sk-proj-aB3xY9zP...... (长串字符)

正确放法：
.env 文件 → OPENAI_API_KEY=sk-...
代码里 → process.env.OPENAI_API_KEY

危险放法：
直接写代码里 ❌
提交到 GitHub ❌
贴到聊天里 ❌`,
    analogy: "像信用卡。给了别人，别人能花你钱；丢公网上，全世界都能花你钱。",
    beginnerExplanation: "API Key 是一串字符。任何调用 API 的请求都要带上它，服务方靠它知道是你 + 该谁付账。",
    whatYouCanDo: [
      "调用 OpenAI / Claude / Stripe 等服务",
      "在自己应用里集成第三方功能",
      "设置不同 key 限制权限和额度",
    ],
    whyItMatters: "泄露 API Key 等于把钱包贴公告栏。新手最常见的事故，几小时就能被刷走几千美金。",
    vibeCodingUsage: "Claude Code / Cursor 帮你接服务时，会自动提醒"把 key 放进 .env 里、加进 .gitignore"。一定要照做。",
    quickStart: [
      "去服务商后台生成一个 key",
      "新建 .env 文件存放，加进 .gitignore",
      "代码里通过环境变量读取，不要硬编码",
    ],
    commonMisunderstandings: [
      "前端不能放 API Key——浏览器里所有人都能看到",
      "提交到 GitHub 后哪怕 force push 也不安全，必须立刻 revoke",
      "免费额度也要小心——量大可能扣信用卡",
    ],
    technicalExplanation: "API Key 是用于身份认证和访问控制的凭证字符串。常通过 HTTP Header（Authorization: Bearer ...）传递。生产环境建议结合 IP 白名单、scope 限制、定期轮换。",
    promptExample: "请解释 API Key 是什么，列出 3 个新手最容易犯的安全错误，以及对应的正确做法。",
  },
  en: {
    oneLiner: "An API Key is a service pass and billing address — never leak it.",
    whatItLooksLike: `OpenAI API Key:
sk-proj-aB3xY9zP...... (long string)

Correct:
.env file → OPENAI_API_KEY=sk-...
Code → process.env.OPENAI_API_KEY

Dangerous:
Hardcoded in source ❌
Committed to GitHub ❌
Pasted in chat ❌`,
    analogy: "Like a credit card. Give it away — they spend your money. Post it publicly — the world does.",
    beginnerExplanation: "An API Key is a string. Every API request includes it so the service knows it is you and who to bill.",
    whatYouCanDo: [
      "Call OpenAI / Claude / Stripe and others",
      "Integrate third-party features",
      "Limit permissions and quotas with separate keys",
    ],
    whyItMatters: "Leaking an API Key is like pinning your wallet to a billboard. Newbies often lose thousands of dollars in hours.",
    vibeCodingUsage: "When Claude Code / Cursor wires services, it reminds you to put keys in .env and add .gitignore. Always do it.",
    quickStart: [
      "Generate a key in the service dashboard",
      "Store in .env, add .gitignore",
      "Read via env vars, never hardcode",
    ],
    commonMisunderstandings: [
      "Never put API keys in frontend — browsers expose them",
      "Once pushed to GitHub, force-push is not safe — revoke immediately",
      "Even free tiers can charge you if abused",
    ],
    technicalExplanation: "An API Key is a credential string for auth and access control, usually sent via HTTP header (Authorization: Bearer ...). In production: IP allowlists, scoped keys, regular rotation.",
    promptExample: "Explain API Key, list 3 common beginner security mistakes, and the right practice for each.",
  },
};
