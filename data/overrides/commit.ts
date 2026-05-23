import type { TermOverride } from "./_types";

export const commit: TermOverride = {
  tags: ["git", "core"],
  relatedTerms: ["git", "branch", "pull-request", "github", "repository"],
  learningPath: ["git", "commit", "branch", "pull-request", "github"],
  zh: {
    oneLiner: "Commit = 把一次改动\"存档\"，给它一个说明——Git 的最小记录单位。",
    whatItLooksLike: `git add .
git commit -m "加登录功能"

查看历史：
$ git log --oneline
f2a1b3c 加登录功能
d9e8c2a 改首页样式
b6e7d1f 初始化项目

每个 commit 都有：
- 哈希 ID（f2a1b3c）
- 作者
- 时间
- 改了什么文件
- 你写的说明`,
    analogy: "像游戏存档。打 boss 前存一下，挂了能读档。代码大改前 commit 一下，搞砸了能 reset。",
    beginnerExplanation: "Commit 是把当前的改动\"打包存档\"。Git 历史就是一连串 commit。",
    whatYouCanDo: [
      "保存阶段性进度",
      "出问题回到任意 commit",
      "分享改动给团队",
      "看每行代码是谁、什么时候写的",
    ],
    whyItMatters: "Commit 信息写得好 = 几个月后看自己代码不懵。Vibe Coding 时代尤其重要——AI 改的代码你要看懂为什么改。",
    vibeCodingUsage: "让 AI 改前先 commit，改后再 commit。一个清晰的 commit 历史 = 出问题能精准定位\"是哪次改动引入的\"。",
    quickStart: [
      "git add .   (暂存所有改动)",
      "git commit -m '说明这次改了什么'",
      "git log --oneline 查看历史",
    ],
    commonMisunderstandings: [
      "commit message 不能只写'update'——三个月后没人看得懂",
      "commit 越频繁越好，不要一次堆几十个改动",
      "commit ≠ push，commit 只是本地，push 才上 GitHub",
    ],
    technicalExplanation: "Git commit 是一个不可变对象，包含 tree（文件快照）、parent（上一个 commit）、author、message。SHA-1 哈希作为唯一 ID。",
    promptExample: "请解释 Git Commit 是什么，给 5 个写好 commit message 的例子，以及 5 个反例。",
  },
  en: {
    oneLiner: "Commit = save one set of changes with a message — Git's smallest record.",
    whatItLooksLike: `git add .
git commit -m "add login"

View history:
$ git log --oneline
f2a1b3c add login
d9e8c2a tweak home styles
b6e7d1f initial commit`,
    analogy: "Like a game save. Save before the boss; load if you die. Commit before big changes; reset if AI breaks it.",
    beginnerExplanation: "A commit packages your current changes into history. Git's log is a chain of commits.",
    whatYouCanDo: [
      "Save progress checkpoints",
      "Revert to any commit",
      "Share changes with the team",
      "See who wrote each line and when",
    ],
    whyItMatters: "Good commit messages = readable history months later. Crucial in Vibe Coding.",
    vibeCodingUsage: "Commit before AI changes, commit after. A clean log lets you pinpoint which edit introduced a bug.",
    quickStart: [
      "git add .  (stage everything)",
      "git commit -m 'what changed and why'",
      "git log --oneline",
    ],
    commonMisunderstandings: [
      "'update' is not a useful message",
      "Commit often — don't bundle dozens of changes",
      "Commit ≠ push. Commit is local, push uploads to GitHub",
    ],
    technicalExplanation: "A Git commit is an immutable object containing tree, parent, author, and message. SHA-1 hash as ID.",
    promptExample: "Explain Git commits — give 5 good and 5 bad commit message examples.",
  },
};
