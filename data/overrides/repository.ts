import type { TermOverride } from "./_types";

export const repository: TermOverride = {
  tags: ["tool", "git", "core"],
  relatedTerms: ["git", "github", "branch", "commit", "pull-request"],
  learningPath: ["git", "github", "repository", "branch", "commit"],
  zh: {
    oneLiner: "Repository（仓库）= 一个项目的"所有代码 + 历史"的集合，简称 repo。",
    whatItLooksLike: `一个 repo 的样子：

my-project/
├── .git/          ← Git 历史（隐藏文件夹）
├── src/
│   ├── index.js
│   └── App.tsx
├── package.json
├── README.md
└── .gitignore

GitHub 上：
github.com/your-name/my-project
- 主页（README 显示）
- Code 标签：所有文件
- Commits：所有历史
- Branches：所有分支
- Issues / PRs：讨论 + 代码评审`,
    analogy: "Repo = 一个项目专属的"文件柜"。里面放所有代码 + 一个详细的"修改记录本"（Git）。",
    beginnerExplanation: "你在 GitHub 上看到的每个项目都是一个 repo。一个 repo 通常对应一个项目、一个产品、一个想法。",
    whatYouCanDo: [
      "clone 别人的 repo 到本地",
      "fork 一个 repo 改成自己的",
      "在 repo 里开 issue 提问/报 bug",
      "提 PR 贡献代码",
      "Star 你喜欢的 repo",
    ],
    whyItMatters: "GitHub 上有几亿个 repo。会找、会用 = 你能用全世界最好的代码作基础。",
    vibeCodingUsage: "Claude Code 一开始就会让你 cd 到 repo 根目录。所有 AI 编程都以"一个 repo"为工作单位。",
    quickStart: [
      "在 GitHub 点 New Repository 建一个",
      "用 git clone <URL> 拉到本地",
      "或者在本地 git init 后推上去",
    ],
    commonMisunderstandings: [
      "repo 和文件夹不一样——repo 里有 .git 隐藏目录记录历史",
      "Monorepo（多项目共用一个 repo）vs 多 repo，各有优缺点",
      "fork ≠ clone。fork 是 GitHub 上复制；clone 是下到本地",
    ],
    technicalExplanation: "Repository 是 Git 的工作单元，包含工作区（working tree）、暂存区（index）、本地仓库（.git 目录）和远程仓库（remote）。",
    promptExample: "请解释什么是 Git Repository，并对比"本地文件夹"、"本地 repo"、"GitHub 上的 repo"三个概念的区别。",
  },
  en: {
    oneLiner: "Repository (repo) = a project's complete code + history, in one bundle.",
    whatItLooksLike: `A repo looks like:

my-project/
├── .git/          ← Git history (hidden)
├── src/
│   ├── index.js
│   └── App.tsx
├── package.json
├── README.md
└── .gitignore

On GitHub:
github.com/your-name/my-project
- Home (README shown)
- Code tab: all files
- Commits: all history
- Branches: all branches
- Issues / PRs: discuss + review`,
    analogy: "Repo = a dedicated filing cabinet for a project. Code inside + a detailed change log (Git).",
    beginnerExplanation: "Every project on GitHub is a repo. One repo usually = one project, one product, one idea.",
    whatYouCanDo: [
      "Clone someone else's repo locally",
      "Fork a repo to make it yours",
      "Open issues for questions/bugs",
      "Open PRs to contribute",
      "Star repos you like",
    ],
    whyItMatters: "Hundreds of millions of repos on GitHub. Find and use them = stand on the world's best code.",
    vibeCodingUsage: "Claude Code starts by cd-ing into a repo. AI coding works at the 'repo' unit.",
    quickStart: [
      "Click New Repository on GitHub",
      "git clone <URL> locally",
      "Or git init locally and push",
    ],
    commonMisunderstandings: [
      "Repo ≠ folder — repo has a hidden .git directory",
      "Monorepo vs multi-repo each have trade-offs",
      "Fork ≠ clone — fork is GitHub copy, clone is local",
    ],
    technicalExplanation: "Repository is Git's working unit: working tree, index (staging), local repo (.git), and optional remotes.",
    promptExample: "Explain Git repositories — compare 'local folder', 'local repo', and 'GitHub repo'.",
  },
};
