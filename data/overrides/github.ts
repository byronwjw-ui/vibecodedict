import type { TermOverride } from "./_types";

export const github: TermOverride = {
  tags: ["tool", "platform", "core"],
  relatedTerms: ["git", "repository", "pull-request", "branch", "github-copilot"],
  learningPath: ["git", "github", "repository", "branch", "pull-request"],
  zh: {
    oneLiner: "GitHub 是全球最大的代码托管平台——Git 的"云端家"。",
    whatItLooksLike: `你的本地代码：
  git push origin main
  ↓
  ↓ 上传到 GitHub
  ↓
github.com/你的用户名/项目名
  - 浏览代码
  - 看历史
  - 别人能 clone
  - 自动跑测试（Actions）
  - 提 issue / PR`,
    analogy: "Git 是你电脑里的版本管理工具。GitHub 是把它放到云上 + 加协作功能 + 社交属性。像"代码的微信 + 网盘 + 朋友圈"。",
    beginnerExplanation: "GitHub 让代码存到云上。别人能看到、协作、给你提建议；你能展示作品、找开源项目用。",
    whatYouCanDo: [
      "云端备份代码",
      "开源你的项目",
      "协作（PR、Issue、Review）",
      "找现成的库直接用",
      "做简历（github.com/你的名字）",
    ],
    whyItMatters: "全世界 90%+ 的开源代码在 GitHub。学会用 GitHub 就能站在巨人肩膀上——免费用别人写好的东西。",
    vibeCodingUsage: "Cursor / Claude Code 经常需要从 GitHub 拉别人的项目作参考、装包、贡献代码。MCP 也能直接连 GitHub 操作 issue 和 PR。",
    quickStart: [
      "去 github.com 注册（免费）",
      "新建一个 repo",
      "把本地项目 git push 上去",
    ],
    commonMisunderstandings: [
      "GitHub ≠ Git——GitHub 是平台，Git 是工具",
      "代码不会自动私有——默认 public，要选 private",
      "免费版可以无限私有仓库，不用担心收费",
    ],
    technicalExplanation: "GitHub 是微软旗下的 Git 托管平台。提供仓库托管、协作（PR/Issue）、CI/CD（Actions）、包管理（Packages）、AI（Copilot）等服务。竞争对手：GitLab、Bitbucket、Gitee。",
    promptExample: "请解释 Git 和 GitHub 的区别，并举一个具体例子说明 GitHub 上的"Pull Request"是怎么用的。",
  },
  en: {
    oneLiner: "GitHub is the world's largest code hosting platform — Git's home in the cloud.",
    whatItLooksLike: `Local code:
  git push origin main
  ↓
  ↓ uploads to GitHub
  ↓
github.com/your-name/project
  - Browse code
  - View history
  - Others can clone
  - Auto-run tests (Actions)
  - Open issues / PRs`,
    analogy: "Git is local. GitHub puts it in the cloud + adds collaboration + social. Like 'WeChat + cloud drive + feed' for code.",
    beginnerExplanation: "GitHub stores code in the cloud. Others can see, collaborate, and suggest changes. You can showcase work and grab open-source libraries.",
    whatYouCanDo: [
      "Cloud-backup your code",
      "Open-source projects",
      "Collaborate (PRs, Issues, Reviews)",
      "Use ready-made libraries",
      "Build your portfolio at github.com/you",
    ],
    whyItMatters: "90%+ of open source lives on GitHub. Using it = standing on giants' shoulders — free, ready-made software.",
    vibeCodingUsage: "Cursor / Claude Code often pull GitHub projects for reference, install packages, and contribute. MCP can drive GitHub issues and PRs directly.",
    quickStart: [
      "Sign up at github.com (free)",
      "Create a repo",
      "git push your local project",
    ],
    commonMisunderstandings: [
      "GitHub ≠ Git — GitHub is platform, Git is tool",
      "Code is NOT private by default — choose private",
      "Free plan allows unlimited private repos",
    ],
    technicalExplanation: "GitHub (Microsoft-owned) hosts Git repos with PRs/Issues, CI/CD (Actions), packages, and AI (Copilot). Rivals: GitLab, Bitbucket, Gitee.",
    promptExample: "Explain Git vs GitHub, and show how a Pull Request works with a concrete example.",
  },
};
