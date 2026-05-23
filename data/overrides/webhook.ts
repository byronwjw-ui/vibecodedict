import type { TermOverride } from "./_types";

export const webhook: TermOverride = {
  tags: ["api", "automation", "integration"],
  relatedTerms: ["api", "http", "ci-cd", "automation", "github"],
  learningPath: ["http", "api", "webhook", "automation", "ci-cd"],
  zh: {
    oneLiner: "事件发生时，一个系统自动"打电话"通知另一个系统的机制。",
    whatItLooksLike: `场景：Stripe 收到付款后通知你的服务器

1. 你在 Stripe 后台配置 webhook URL：
   https://your-site.com/api/payment

2. 用户付款 → Stripe 自动 POST：
   POST /api/payment
   {
     "event": "payment_succeeded",
     "amount": 9900,
     "user_id": "u123"
   }

3. 你的代码处理这个事件
   (发邮件、更新数据库、解锁功能)`,
    analogy: "API 是你主动打电话问。Webhook 是别人有事打给你——你不用一直问，等通知就行。",
    beginnerExplanation: "Webhook = "如果发生 X，请通知我"。设置一次后，对方有事会自动 POST 到你的 URL。",
    whatYouCanDo: [
      "Stripe 收款后通知后端发货",
      "GitHub push 后触发 CI/CD",
      "Slack 消息触发自动回复",
      "Notion 更新触发同步",
      "用户付费后解锁功能",
    ],
    whyItMatters: "Webhook 让系统间能"自动联动"。不写 webhook = 要轮询查询 = 又慢又费资源。",
    vibeCodingUsage: "做 SaaS 必学。让 AI 帮你接 Stripe / Lemon Squeezy / Polar 收款，背后都是 webhook 处理。",
    quickStart: [
      "在服务里（如 Stripe）注册一个 webhook URL",
      "你的项目加一个 API route 接收 POST",
      "用 ngrok 或 Vercel 部署后测试",
    ],
    commonMisunderstandings: [
      "Webhook 必须是公网 URL——本地开发要用 ngrok",
      "一定要校验签名，不然别人能伪造请求",
      "对方可能重试，要做幂等处理（同一事件来 2 次也不能重复扣款）",
    ],
    technicalExplanation: "Webhook 是基于 HTTP 的回调机制。事件方在事件发生时向接收方注册的 URL 发 POST 请求。常配合签名验证（HMAC）和重试机制。",
    promptExample: "请解释 Webhook 是什么，对比"API 轮询"和"Webhook"两种方式实现"用户付款后发邮件"的差别。",
  },
  en: {
    oneLiner: "When event X happens, system A automatically calls system B's URL.",
    whatItLooksLike: `Scenario: Stripe payment notifies your server

1. Configure webhook URL in Stripe dashboard:
   https://your-site.com/api/payment

2. User pays → Stripe POSTs:
   POST /api/payment
   {
     "event": "payment_succeeded",
     "amount": 9900,
     "user_id": "u123"
   }

3. Your code handles the event
   (send email, update DB, unlock feature)`,
    analogy: "APIs are calls you make. Webhooks are calls others make to you — wait instead of asking.",
    beginnerExplanation: "Webhook = 'when X happens, please notify me'. Configure once, get auto-POSTs on events.",
    whatYouCanDo: [
      "Stripe payment → fulfill order",
      "GitHub push → trigger CI/CD",
      "Slack message → auto-reply",
      "Notion change → sync",
      "User pays → unlock feature",
    ],
    whyItMatters: "Webhooks let systems link automatically. No webhook = polling = slow and wasteful.",
    vibeCodingUsage: "Mandatory for SaaS. When AI wires Stripe / Lemon Squeezy / Polar, webhooks handle the events.",
    quickStart: [
      "Register a webhook URL in the service (e.g., Stripe)",
      "Add an API route to receive POSTs",
      "Test with ngrok or after deploy",
    ],
    commonMisunderstandings: [
      "Webhook URLs must be public — use ngrok for local dev",
      "Verify signatures — otherwise spoofable",
      "Senders retry — make handlers idempotent",
    ],
    technicalExplanation: "Webhooks are HTTP callbacks. The event source POSTs to the registered URL when events occur, typically with HMAC signing and retries.",
    promptExample: "Explain webhooks — compare API polling vs webhook for 'send email after payment'.",
  },
};
