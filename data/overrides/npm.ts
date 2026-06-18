import type { TermOverride } from "./_types";

export const npm: TermOverride = {
  tags: ["tool", "package", "javascript"],
  relatedTerms: ["package", "library", "framework", "javascript", "terminal"],
  learningPath: ["javascript", "terminal", "npm", "package", "framework"],
  zh: {
    oneLiner: "npm = JavaScript 的\"应用商店\"——全世界 200 万个免费包，一行命令装上用。",
    whatItLooksLike: `npm install react        ← 装 React
npm install -D eslint    ← 装开发依赖（不部署）
npm uninstall foo        ← 卸载
npm run dev              ← 跑项目命令
npm update               ← 更新所有包

package.json 记录所有依赖：
{
  "dependencies": {
    "react": "19.0.0",
    "next": "14.2.18"
  }
}`,
    analogy: "像 App Store 之于 iPhone。需要功能？搜个包装上就有，不用自己造。",
    beginnerExplanation: "npm = Node Package Manager。任何前端/Node 项目都用它装依赖、跑命令。",
    whatYouCanDo: [
      "装现成的库（React、Vue、axios...）",
      "管理项目依赖版本",
      "发布自己的包给全世界用",
      "用 npm scripts 自动化任务",
    ],
    whyItMatters: "JavaScript 生态最大的优势就是 npm。你想做的功能，99% 已经有人写好包了。",
    vibeCodingUsage: "Claude Code 给你的项目加功能时，背后大量 npm install。看 package.json 就能知道项目用了什么。",
    quickStart: [
      "装 Node.js（自带 npm）",
      "项目里跑 npm init -y 初始化",
      "试 npm install dayjs，看 node_modules 多出来",
    ],
    commonMisunderstandings: [
      "npm 和 yarn / pnpm / bun 是竞争对手，功能类似",
      "node_modules 文件夹超大，别 commit 进 Git",
      "装到 dependencies 和 devDependencies 是有区别的",
    ],
    technicalExplanation: "npm 是 Node.js 默认包管理器。包从 npmjs.com 注册中心下载到 node_modules。锁文件（package-lock.json）保证团队装到同样版本。",
    promptExample: "请解释 npm 是什么，对比 npm 和 yarn / pnpm / bun 的区别，并说说什么时候用什么。",
  },
  en: {
    oneLiner: "npm = JavaScript's app store — 2M free packages, install in one command.",
    whatItLooksLike: `npm install react        ← install React
npm install -D eslint    ← dev-only dep
npm uninstall foo        ← remove
npm run dev              ← run a script
npm update               ← update all

package.json tracks deps:
{
  "dependencies": {
    "react": "19.0.0",
    "next": "14.2.18"
  }
}`,
    analogy: "Like the App Store for iPhones. Need a feature? Install a package — don't build from scratch.",
    beginnerExplanation: "npm = Node Package Manager. Every frontend / Node project uses it for deps and scripts.",
    whatYouCanDo: [
      "Install ready-made libs (React, Vue, axios...)",
      "Manage dep versions",
      "Publish your own packages",
      "Automate tasks via npm scripts",
    ],
    whyItMatters: "JavaScript's edge is npm. Whatever you want to build, 99% chance someone already wrote a package.",
    vibeCodingUsage: "When Claude Code adds features, lots of npm install happens. Check package.json to see what's used.",
    quickStart: [
      "Install Node.js (npm included)",
      "npm init -y in a project",
      "Try npm install dayjs and see node_modules grow",
    ],
    commonMisunderstandings: [
      "npm vs yarn / pnpm / bun — competitors, similar features",
      "node_modules is huge — never commit it",
      "dependencies vs devDependencies — they differ",
    ],
    technicalExplanation: "npm is Node.js's default package manager. Packages download from npmjs.com to node_modules. Lockfile (package-lock.json) ensures reproducible installs.",
    promptExample: "Explain npm — compare npm, yarn, pnpm, bun and when to use each.",
  },
};
