import type { TermOverride } from "./_types";

export const backend: TermOverride = {
  tags: ["web", "backend", "core"],
  relatedTerms: ["frontend", "database", "api", "http", "supabase"],
  learningPath: ["frontend", "backend", "database", "api", "deployment"],
  zh: {
    oneLiner: "后端 = 跑在服务器上、用户看不见但所有功能背后的"大脑"。",
    whatItLooksLike: `用户点"登录"按钮 →
  ↓ 前端把账号密码发给后端
后端：
  1. 收到请求
  2. 查数据库验证密码
  3. 生成 token
  4. 返回结果给前端
  ↓
前端收到 → 跳到首页

技术栈：
Node.js / Python / Go / 数据库`,
    analogy: "餐厅的"后厨"——客人看不见，但所有菜都在那里做。前端服务员把订单递进去，后厨做好再递出来。",
    beginnerExplanation: "后端处理"逻辑"和"数据"。用户登录验证、订单处理、消息存储——这些都在后端完成。",
    whatYouCanDo: [
      "处理用户注册、登录",
      "存数据、查数据",
      "调用第三方 API",
      "处理支付、发邮件",
      "做权限和安全",
    ],
    whyItMatters: "没有后端的应用只是"展示页"。需要登录、需要存数据、需要交易，就需要后端。",
    vibeCodingUsage: "现代 Vibe Coding 后端经常用 Supabase / Firebase 这类"BaaS"——不用自己搭服务器，AI 几条指令就配好。",
    quickStart: [
      "选一个"BaaS"（推荐 Supabase）",
      "在它的界面里建一张表",
      "让 AI 写前端代码读写这张表",
    ],
    commonMisunderstandings: [
      "前后端不一定要分开——简单项目可以一起写（Next.js 全栈）",
      "后端不只是数据库——还有逻辑、认证、缓存、队列",
      "Serverless 不等于"没服务器"，是"你不用管服务器"",
    ],
    technicalExplanation: "后端（Backend）指运行在服务器上的代码与服务。常见技术：Node.js、Python（Django/FastAPI）、Go、Java、Ruby。配合数据库（PostgreSQL、MySQL、MongoDB）和云平台运行。",
    promptExample: "用一个具体例子（用户注册）说明前端、后端、数据库三者怎么协作，每一步谁做什么。",
  },
  en: {
    oneLiner: "Backend = the brain on the server — invisible to users but powers every feature.",
    whatItLooksLike: `User clicks Login →
  ↓ frontend sends username/password
Backend:
  1. Receives request
  2. Verifies against DB
  3. Issues token
  4. Sends result back
  ↓
Frontend → redirect to home

Stack:
Node.js / Python / Go / database`,
    analogy: "A restaurant's kitchen — invisible but every dish is made there. Frontend waiters pass orders in, kitchen sends food back.",
    beginnerExplanation: "Backend handles 'logic' and 'data'. User auth, order processing, message storage — all backend.",
    whatYouCanDo: [
      "User signup / login",
      "Store and query data",
      "Call third-party APIs",
      "Payments, emails",
      "Auth and security",
    ],
    whyItMatters: "Without backend, apps are just display. Anything with login, storage, or transactions needs backend.",
    vibeCodingUsage: "Modern Vibe Coding backends often use BaaS like Supabase / Firebase — no server setup, AI configures it.",
    quickStart: [
      "Pick a BaaS (Supabase recommended)",
      "Create a table in its UI",
      "Have AI write frontend code to read/write it",
    ],
    commonMisunderstandings: [
      "Front and back don't have to be split — simple projects can be full-stack (Next.js)",
      "Backend isn't only the DB — also logic, auth, cache, queues",
      "Serverless doesn't mean 'no server' — means 'you don't manage it'",
    ],
    technicalExplanation: "Backend = server-side code and services. Stacks: Node.js, Python (Django/FastAPI), Go, Java, Ruby. Pairs with DBs (Postgres, MySQL, Mongo) on cloud platforms.",
    promptExample: "Explain how frontend, backend, and database collaborate using user signup as an example — who does what at each step.",
  },
};
