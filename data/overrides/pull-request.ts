import type { TermOverride } from "./_types";

export const pullRequest: TermOverride = {
  tags: ["git", "github", "collaboration"],
  relatedTerms: ["github", "branch", "commit", "git", "repository"],
  learningPath: ["git", "branch", "commit", "pull-request", "github"],
  zh: {
    oneLiner: "Pull Request（PR）= \"请把我分支的改动合到主分支\"的正式申请——团队协作的标配。",
    whatItLooksLike: `工作流：
1. 我开分支 feature/login
2. 改完代码 push 到 GitHub
3. 点 New Pull Request
4. 写说明：改了什么、为什么
5. 队友 review、提建议
6. 改完 → 队友 Approve
7. 点 Merge 合并到 main

GitHub 上 PR 长这样：
#42 Add login feature
[Files changed] [Conversation] [Commits]
[ Merge pull request ] [ Close ]`,
    analogy: "PR 像一份\"装修方案\"——你提案、大家讨论、确认后才开工合并。",
    beginnerExplanation: "PR 是团队协作改代码的方式。一个人写好分支 → 发 PR → 别人审 → 合并。",
    whatYouCanDo: [
      "提交改动让别人 review",
      "在 PR 里讨论代码细节",
      "自动跑测试（CI），失败拦截合并",
      "给开源项目贡献代码",
    ],
    whyItMatters: "没 PR = 直接改 main = 容易出大事故。PR 让\"代码改动可讨论、可拦截、可追溯\"。",
    vibeCodingUsage: "Cursor / Claude Code 改完后会建议你\"开 PR\"。这是 Vibe Coding 的正确节奏——AI 改完，你 review 再合并。",
    quickStart: [
      "推一个新分支到 GitHub",
      "GitHub 页面会自动提示 Compare & pull request",
      "写好说明，点 Create pull request",
    ],
    commonMisunderstandings: [
      "PR 不是字面意思的'拉取请求'——是'请把我的改动拉进主仓库'",
      "小 PR > 大 PR——一次只改一件事更好 review",
      "PR 合并后分支可以删，不影响历史",
    ],
    technicalExplanation: "Pull Request 是 GitHub/GitLab 等平台层概念。底层是 git merge 或 git rebase。包含 commits、diff、讨论、CI 状态、approval。",
    promptExample: "请解释 Pull Request 是什么，给一个完整工作流：从开分支到合并的每一步。",
  },
  en: {
    oneLiner: "Pull Request (PR) = a formal request to merge your branch into main — standard team workflow.",
    whatItLooksLike: `Workflow:
1. Create branch feature/login
2. Push to GitHub
3. Click New Pull Request
4. Write what changed and why
5. Teammates review
6. After edits → Approve
7. Click Merge`,
    analogy: "A PR is a renovation proposal — present it, discuss, get sign-off, then build.",
    beginnerExplanation: "PRs are how teams ship code together. Branch → PR → review → merge.",
    whatYouCanDo: [
      "Submit changes for review",
      "Discuss code line-by-line",
      "Run CI; failure blocks merge",
      "Contribute to open source",
    ],
    whyItMatters: "No PR = changes go straight to main = accidents happen. PRs make changes discussable and traceable.",
    vibeCodingUsage: "Cursor / Claude Code suggest opening a PR after edits. Right Vibe Coding rhythm: AI → review → merge.",
    quickStart: [
      "Push a new branch to GitHub",
      "GitHub prompts 'Compare & pull request'",
      "Write a message, click Create pull request",
    ],
    commonMisunderstandings: [
      "'Pull' means 'please pull my changes into main'",
      "Small PRs > big PRs — easier to review",
      "After merge, the branch is safe to delete",
    ],
    technicalExplanation: "Pull Request is a platform concept (GitHub, GitLab). Underneath: git merge or rebase, with commits, diffs, discussions, CI checks, approvals.",
    promptExample: "Explain Pull Requests with a full 'open branch to merge' workflow.",
  },
};
