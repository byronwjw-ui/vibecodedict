import type { TermOverride } from "./_types";

export const environmentVariables: TermOverride = {
  tags: ["deployment", "security", "core"],
  relatedTerms: ["api-key", "deployment", "vercel", "secrets", "security"],
  learningPath: ["environment-variables", "api-key", "deployment", "vercel", "secrets"],
  zh: {
    oneLiner: "把"敏感信息和环境差异"放在代码外的特殊变量——不进 Git，部署时注入。",
    whatItLooksLike: `项目根目录 .env.local：
OPENAI_API_KEY=sk-...
DATABASE_URL=postgres://...
NEXT_PUBLIC_SITE_URL=https://example.com

.gitignore：
.env.local  ← 重要！不能 commit

代码里读：
process.env.OPENAI_API_KEY`,
    analogy: "像演员的"耳麦"——台本（代码）上不写台词，耳麦实时告诉你今天的版本。开发环境一套，生产环境一套，演员不用换。",
    beginnerExplanation: "环境变量让代码"在开发机和服务器跑都行"，并且 API Key、密码不暴露在代码里。",
    whatYouCanDo: [
      "存 API Key 不进 Git",
      "区分开发/测试/生产环境",
      "切换数据库地址、域名",
      "Feature flag 开关",
    ],
    whyItMatters: "不会用环境变量 = 把密码写在代码里 = 上 GitHub 后被全网扒。新手最常见安全事故。",
    vibeCodingUsage: "Vercel / Netlify 部署都有 Environment Variables 配置页。Cursor 写代码会自动用 process.env 读，提醒你在 Vercel 里也加上。",
    quickStart: [
      "项目根目录新建 .env.local 文件",
      "写 KEY=value（一行一个）",
      "把 .env.local 加进 .gitignore",
    ],
    commonMisunderstandings: [
      "Next.js 里 NEXT_PUBLIC_ 开头的会暴露给浏览器，不要把 Secret 放这",
      ".env.local 一定要加 .gitignore，否则等于没用",
      "本地配了不等于线上也配——Vercel 里要手动加",
    ],
    technicalExplanation: "环境变量是操作系统/运行时的键值对。Node.js 通过 process.env 访问。常见加载方式：dotenv、Next.js 自动加载、平台注入（Vercel/Netlify Dashboard）。",
    promptExample: "请解释环境变量为什么重要，并给一个具体例子说明"硬编码 API Key"和"用环境变量"的区别。",
  },
  en: {
    oneLiner: "Special variables for secrets and env differences — kept out of code, injected at deploy time.",
    whatItLooksLike: `.env.local at project root:
OPENAI_API_KEY=sk-...
DATABASE_URL=postgres://...
NEXT_PUBLIC_SITE_URL=https://example.com

.gitignore:
.env.local  ← critical, don't commit

In code:
process.env.OPENAI_API_KEY`,
    analogy: "Like an actor's earpiece — the script doesn't say lines, the earpiece tells you today's variation. Dev env one set, prod another.",
    beginnerExplanation: "Env vars let code run on dev and server alike, while keeping API keys and passwords out of source.",
    whatYouCanDo: [
      "Keep API keys out of Git",
      "Separate dev / test / prod",
      "Switch DB URLs and domains",
      "Feature flags",
    ],
    whyItMatters: "Not using env vars = passwords in code = scraped after pushing to GitHub. Top beginner security mistake.",
    vibeCodingUsage: "Vercel / Netlify have Environment Variables panels. Cursor writes process.env reads and reminds you to add them on Vercel.",
    quickStart: [
      "Create .env.local at project root",
      "Write KEY=value (one per line)",
      "Add .env.local to .gitignore",
    ],
    commonMisunderstandings: [
      "Next.js NEXT_PUBLIC_ vars are exposed in browser — never put secrets there",
      "Forgetting .gitignore = leaking secrets",
      "Local env ≠ prod env — set them on Vercel too",
    ],
    technicalExplanation: "Env vars are OS/runtime key-value pairs. Node.js reads them via process.env. Loaders: dotenv, Next.js auto-load, platform dashboards.",
    promptExample: "Explain why env vars matter — compare 'hardcoded API key' vs 'using env var' with a concrete example.",
  },
};
