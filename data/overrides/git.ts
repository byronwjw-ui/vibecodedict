import type { TermOverride } from "./_types";

export const git: TermOverride = {
  tags: ["tool", "version-control", "core"],
  relatedTerms: ["github", "branch", "commit", "pull-request", "repository"],
  learningPath: ["git", "github", "branch", "commit", "pull-request"],
  zh: {
    oneLiner: "Git 是"代码时光机"——能保存历史、回到任意时刻、和别人合作不打架。",
    whatItLooksLike: `git init                # 初始化仓库
git add .               # 暂存改动
git commit -m "加登录"  # 提交，附说明
git log                 # 查看历史
git checkout abc123     # 回到某个版本
git branch new-feature  # 创建新分支
git merge new-feature   # 合并分支`,
    analogy: "Git 像 Google Docs 的"版本历史"，但更强——能开多个并行版本，最后合并成一个。",
    beginnerExplanation: "Git 帮你记录代码每次改了什么。改坏了能回去、想试新想法可以开分支、想跟人合作不会覆盖对方。",
    whatYouCanDo: [
      "保存每次代码改动",
      "回到任意历史版本",
      "和团队并行开发（分支）",
      "看谁改了什么、为什么改",
      "撤销已提交的错误",
    ],
    whyItMatters: "现代软件开发的基础设施。不会 Git 等于不会保存文件——做着做着会丢掉重要进度。",
    vibeCodingUsage: "Vibe Coding 里 AI 经常一次改很多文件。**改前一定 git commit**，改坏了 git reset 一键回退。这是救命操作。",
    quickStart: [
      "装 Git（mac 自带，windows 装 Git for Windows）",
      "新项目跑 git init",
      "记住三句话：git add . / git commit -m '说明' / git push",
    ],
    commonMisunderstandings: [
      "Git ≠ GitHub。Git 是工具，GitHub 是托管平台",
      "git push 之前一定要 commit",
      "不要 force push 公共分支——会覆盖别人的提交",
    ],
    technicalExplanation: "Git 是 Linus Torvalds 2005 年创建的分布式版本控制系统。基于内容寻址的对象存储（blob、tree、commit、tag），支持分支、合并、变基、远程协作。",
    promptExample: "用一个具体场景（"两个人同时改一个文件"）说明 Git 是怎么避免覆盖对方代码的。",
  },
  en: {
    oneLiner: "Git is the code time machine — save history, revert to any moment, collaborate without conflicts.",
    whatItLooksLike: `git init                # init a repo
git add .               # stage changes
git commit -m "login"   # commit with message
git log                 # view history
git checkout abc123     # jump to a version
git branch new-feature  # create branch
git merge new-feature   # merge branch`,
    analogy: "Like Google Docs version history, but more powerful — multiple parallel versions, mergeable.",
    beginnerExplanation: "Git tracks every change. Break it? Revert. Try something new? Branch. Work with others? Merge without overwriting.",
    whatYouCanDo: [
      "Save every change",
      "Revert to any version",
      "Parallel work via branches",
      "See who changed what and why",
      "Undo bad commits",
    ],
    whyItMatters: "Modern dev's foundation. No Git = no save = you'll lose work.",
    vibeCodingUsage: "AI often changes many files at once. **Commit before changes** so a bad run is one `git reset` away. Lifesaver.",
    quickStart: [
      "Install Git (macOS has it, Windows: Git for Windows)",
      "Run git init in a new project",
      "Memorize: git add . / git commit -m '...' / git push",
    ],
    commonMisunderstandings: [
      "Git ≠ GitHub. Git is the tool, GitHub is the host",
      "Always commit before push",
      "Don't force push to shared branches — overwrites others",
    ],
    technicalExplanation: "Git is Linus Torvalds's 2005 distributed VCS. Content-addressed object store (blob, tree, commit, tag), with branches, merges, rebases, and remotes.",
    promptExample: "Explain how Git prevents two developers editing the same file from overwriting each other.",
  },
};
