import type { TermOverride } from "./_types";

export const branch: TermOverride = {
  tags: ["git", "core"],
  relatedTerms: ["git", "github", "commit", "pull-request", "repository"],
  learningPath: ["git", "branch", "commit", "pull-request", "github"],
  zh: {
    oneLiner: "Branch（分支）= 在不影响主代码的前提下，开一个平行版本试想法。",
    whatItLooksLike: `main 分支:    A → B → C → D
                       ↓ 这里开新分支
feature分支:           E → F → G

新分支随便改，不影响 main
满意了 → 合并回 main:
main:         A → B → C → D ─┐
                              ├→ H
feature:                E → F → G ─┘`,
    analogy: "像写小说时存一个"分支档"——主线照常，分支可以试别的剧情。喜欢就合回主线，不喜欢就删。",
    beginnerExplanation: "Branch 让你在不破坏主代码的前提下尝试新功能。改坏了删掉分支，主线毫发无损。",
    whatYouCanDo: [
      "做新功能开 feature 分支",
      "修 bug 开 hotfix 分支",
      "多人协作各开各的分支",
      "随时切换、对比、合并",
    ],
    whyItMatters: "没分支 = 改代码像走钢丝。有分支 = 想试就试，不行就回。",
    vibeCodingUsage: "让 AI 改重大功能前，先 git checkout -b new-feature 开分支。AI 改坏了 git checkout main 一键回到安全状态。",
    quickStart: [
      "git branch new-feature  创建分支",
      "git checkout new-feature  切过去",
      "改完 commit，然后 git checkout main && git merge new-feature",
    ],
    commonMisunderstandings: [
      "分支不是文件夹复制——是指向不同 commit 的指针",
      "切分支前要 commit 当前改动，否则可能丢",
      "main 和 master 是同一个意思（GitHub 默认现在用 main）",
    ],
    technicalExplanation: "Git branch 是指向某个 commit 的可移动指针。HEAD 指向当前分支。切换分支 = 切换工作区到对应 commit 的状态。",
    promptExample: "请解释 Git Branch 是什么，给一个具体例子说明"用分支开发新功能"的完整流程。",
  },
  en: {
    oneLiner: "Branch = a parallel version of your code so you can experiment without touching the main one.",
    whatItLooksLike: `main:    A → B → C → D
                  ↓ branch off here
feature:          E → F → G

Change freely, main untouched.
Happy with it → merge back:
main:    A → B → C → D ─┐
                         ├→ H
feature:           E → F → G ─┘`,
    analogy: "Like a novel's branch outline — main plot stays, branch tries an alternate. Like it? Merge. Don't? Delete.",
    beginnerExplanation: "Branches let you try new things without breaking main. Bad idea? Delete the branch.",
    whatYouCanDo: [
      "Open feature branches for new work",
      "Open hotfix branches for bugs",
      "Parallel branches for teammates",
      "Switch, diff, merge anytime",
    ],
    whyItMatters: "No branches = tightrope coding. With branches = experiment freely, roll back at will.",
    vibeCodingUsage: "Before letting AI make big changes, git checkout -b new-feature. AI breaks it? git checkout main = safe.",
    quickStart: [
      "git branch new-feature  (create)",
      "git checkout new-feature  (switch)",
      "After edits: commit, git checkout main && git merge new-feature",
    ],
    commonMisunderstandings: [
      "Branches aren't folder copies — they're pointers to commits",
      "Commit before switching, or you may lose changes",
      "main and master are the same (GitHub defaults to main now)",
    ],
    technicalExplanation: "A Git branch is a movable pointer to a commit. HEAD points at the current branch. Switching = updating the working tree to that commit's state.",
    promptExample: "Explain Git branches with a concrete example of using a feature branch end-to-end.",
  },
};
