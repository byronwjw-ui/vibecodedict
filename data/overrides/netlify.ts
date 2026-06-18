import type { TermOverride } from "./_types";

export const netlify: TermOverride = {
  tags: ["deployment", "platform", "tool"],
  relatedTerms: ["vercel", "domain", "ssl", "ci-cd", "bolt"],
  learningPath: ["github", "netlify", "domain", "ssl", "ci-cd"],
  zh: {
    oneLiner: "Vercel 的老对手——把代码连 GitHub 自动部署上线的平台。",
    whatItLooksLike: `连 GitHub → 选仓库 → 部署
拿到 your-site.netlify.app

特色：
- 拖文件夹也能部署（不用 GitHub）
- 内置 Forms（不写后端就能收表单）
- Functions（轻量后端逻辑）
- Identity（用户登录系统）`,
    analogy: "和 Vercel 像兄弟。Vercel 偏 Next.js 生态，Netlify 偏静态站和"无后端建站"。",
    beginnerExplanation: "Netlify 是部署平台老牌玩家。简单网站、文档站、静态博客最常见的选择之一。",
    whatYouCanDo: [
      "部署任何前端项目",
      "免后端收表单（Forms）",
      "拖一个 dist 文件夹就能上线",
      "做"Jamstack"应用",
    ],
    whyItMatters: "和 Vercel 一样让上线变简单。不同的生态偏好——Bolt.new 默认部署到 Netlify。",
    vibeCodingUsage: "Bolt 做完的项目默认部署在 Netlify。如果你用 Bolt，就不用单独学 Vercel 了。",
    quickStart: [
      "去 netlify.com 注册",
      "Add new site → 选仓库或拖文件夹",
      "等 30 秒拿到 URL",
    ],
    commonMisunderstandings: [
      "Netlify 和 Vercel 高度相似，选哪个看习惯",
      "免费 build minutes 有限，重度用户要付费",
      "Functions 用 AWS Lambda，冷启动可能慢",
    ],
    technicalExplanation: "Netlify 是较早的 Jamstack 部署平台。提供 CDN、Functions（基于 AWS Lambda）、Forms、Identity、Split Testing 等服务。",
    promptExample: "对比 Vercel 和 Netlify 这两个部署平台，从个人开发者角度说说怎么选。",
  },
  en: {
    oneLiner: "Vercel's longtime rival — deploy code from GitHub automatically.",
    whatItLooksLike: `Connect GitHub → pick repo → deploy
Get your-site.netlify.app

Highlights:
- Drag a folder to deploy (no GitHub needed)
- Built-in Forms (no backend to collect submissions)
- Functions (lightweight backend)
- Identity (user auth)`,
    analogy: "Vercel's sibling. Vercel leans Next.js; Netlify leans static sites and no-backend.",
    beginnerExplanation: "Netlify is a longstanding deploy platform. A top pick for static sites, docs, and blogs.",
    whatYouCanDo: [
      "Deploy any frontend project",
      "Collect forms with no backend",
      "Drag a dist folder to ship",
      "Build Jamstack apps",
    ],
    whyItMatters: "Same magic as Vercel — go live easily. Bolt.new defaults to Netlify.",
    vibeCodingUsage: "Bolt projects deploy to Netlify by default. Use Bolt? You don't need Vercel separately.",
    quickStart: [
      "Sign up at netlify.com",
      "Add new site → repo or drag folder",
      "Wait 30s for a URL",
    ],
    commonMisunderstandings: [
      "Very similar to Vercel — pick by preference",
      "Free build minutes are limited",
      "Functions run on AWS Lambda — cold starts possible",
    ],
    technicalExplanation: "Netlify is an early Jamstack platform with CDN, Functions (AWS Lambda), Forms, Identity, and Split Testing.",
    promptExample: "Compare Vercel and Netlify for an individual developer — how do you choose?",
  },
};
