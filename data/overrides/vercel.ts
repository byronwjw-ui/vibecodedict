import type { TermOverride } from "./_types";

export const vercel: TermOverride = {
  tags: ["deployment", "platform", "tool"],
  relatedTerms: ["netlify", "v0", "domain", "ssl", "ci-cd"],
  learningPath: ["github", "vercel", "domain", "ssl", "ci-cd"],
  zh: {
    oneLiner: "把代码"一键变成网站"的部署平台——连 GitHub 就能自动上线。",
    whatItLooksLike: `1. 把代码 push 到 GitHub
2. 在 Vercel 点 Import 选这个仓库
3. Vercel 自动：
   - 装依赖
   - 跑 build
   - 部署
   - 给一个 .vercel.app 域名
4. 之后每次 git push，Vercel 自动重新部署

完事访问 your-project.vercel.app`,
    analogy: "像 Dropbox——你在本地动文件，云端自动同步。Vercel 是"你 push 代码，网站自动更新"。",
    beginnerExplanation: "Vercel 让"上线网站"从复杂运维变成点一下。最适合 Next.js / React 项目，也是 v0 的同公司产品。",
    whatYouCanDo: [
      "一键部署 GitHub 项目",
      "自动 HTTPS + 全球 CDN",
      "自定义域名（买的 .com 也能挂上）",
      "Preview Deployment（每个 PR 给一个临时 URL）",
    ],
    whyItMatters: "Vibe Coding 时代你"做"完了产品，下一步就是"上线"。Vercel 让上线只需要 30 秒。",
    vibeCodingUsage: "Cursor / Claude Code 做完项目，让它"帮我部署到 Vercel"——它会自动配 vercel.json、push 代码、给你 URL。",
    quickStart: [
      "去 vercel.com 用 GitHub 登录",
      "点 New Project → 选你的仓库",
      "点 Deploy，等 1 分钟",
    ],
    commonMisunderstandings: [
      "Vercel 免费版很慷慨，个人项目随便用",
      "免费版商业用途有限制（看 ToS）",
      "Vercel 主要做前端，重后端用别的平台更合适",
    ],
    technicalExplanation: "Vercel 是 Next.js 母公司的 PaaS 平台。提供 Edge Network、Serverless Functions、Edge Functions、自动 HTTPS、Preview Deployments、Analytics、KV/Postgres 等服务。",
    promptExample: "请解释 Vercel 是什么，对比"传统部署"和"Vercel 部署"一个 Next.js 项目的步骤差别。",
  },
  en: {
    oneLiner: "A platform that turns code into a live website in one click — connect GitHub, ship instantly.",
    whatItLooksLike: `1. Push code to GitHub
2. Click Import on Vercel
3. Vercel auto:
   - installs deps
   - runs build
   - deploys
   - gives a .vercel.app URL
4. Every future git push redeploys

Visit your-project.vercel.app`,
    analogy: "Like Dropbox — you save locally, cloud syncs. Vercel: you push code, your site updates.",
    beginnerExplanation: "Vercel turns 'go live' from a chore into one click. Best for Next.js / React. Same company as v0.",
    whatYouCanDo: [
      "One-click deploy from GitHub",
      "Auto HTTPS + global CDN",
      "Custom domains",
      "Preview Deployments (per-PR URLs)",
    ],
    whyItMatters: "After Vibe Coding builds your product, you ship it. Vercel makes that 30 seconds.",
    vibeCodingUsage: "After Cursor / Claude Code finishes a project, ask 'deploy to Vercel' — it sets up vercel.json, pushes, and returns a URL.",
    quickStart: [
      "Sign in at vercel.com with GitHub",
      "Click New Project → pick your repo",
      "Click Deploy, wait 1 min",
    ],
    commonMisunderstandings: [
      "Free tier is generous for personal use",
      "Commercial use has limits — read the ToS",
      "Mostly frontend — heavy backend? use a different platform",
    ],
    technicalExplanation: "Vercel is the PaaS by Next.js's parent company. Offers Edge Network, Serverless Functions, Edge Functions, auto HTTPS, Preview Deployments, Analytics, KV/Postgres.",
    promptExample: "Explain Vercel and contrast traditional deployment vs Vercel deployment of a Next.js project.",
  },
};
