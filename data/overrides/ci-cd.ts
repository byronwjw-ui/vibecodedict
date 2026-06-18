import type { TermOverride } from "./_types";

export const ciCd: TermOverride = {
  tags: ["deployment", "devops", "automation"],
  relatedTerms: ["github", "vercel", "deployment", "git", "webhook"],
  learningPath: ["git", "github", "vercel", "ci-cd", "deployment"],
  zh: {
    oneLiner: "代码每次改动都自动跑测试 + 自动上线的流水线——人不用手动操作。",
    whatItLooksLike: `git push origin main
  ↓
GitHub Actions / Vercel 自动触发：
  1. ✓ 装依赖
  2. ✓ 跑测试
  3. ✓ 检查代码风格
  4. ✓ build 生产版本
  5. ✓ 部署到服务器
  ↓
网站上线 (5 分钟以内)

失败任一步 → 不上线 + 邮件通知`,
    analogy: "像工厂流水线。原料（代码）放上去，机器自动检验、组装、打包、上货架。人只看监控屏。",
    beginnerExplanation: "CI = Continuous Integration（持续集成）：自动测试。CD = Continuous Deployment（持续部署）：自动上线。",
    whatYouCanDo: [
      "git push 就自动部署",
      "PR 自动跑测试拦截 bug",
      "出问题自动回滚",
      "多环境自动同步（dev / staging / prod）",
    ],
    whyItMatters: "没有 CI/CD：每次上线都人工操作 → 容易出错 → 不敢频繁发布。有了 CI/CD：一天发 10 次也安全。",
    vibeCodingUsage: "你用 Vercel 已经在用 CI/CD 了——push 就自动部署，就是 CD。要加测试就是配 GitHub Actions。",
    quickStart: [
      "用 Vercel 部署 = 默认开了 CD",
      "想加测试，建 .github/workflows/test.yml",
      "让 Cursor 帮你写一份 yaml 配置",
    ],
    commonMisunderstandings: [
      "CI/CD 不只是工具，是工作流哲学",
      "CI 不等于"自动测试"——还可以是 lint、安全扫描、build",
      "CD 上线前最好加人工 review，纯自动有风险",
    ],
    technicalExplanation: "CI/CD 是 DevOps 核心实践。工具：GitHub Actions、GitLab CI、CircleCI、Jenkins。流程：trigger → build → test → deploy → monitor。",
    promptExample: "请解释 CI 和 CD 的区别，并给一个 GitHub Actions 的最小配置例子（每次 push 自动跑测试）。",
  },
  en: {
    oneLiner: "An automated pipeline that tests and deploys on every code change — no manual steps.",
    whatItLooksLike: `git push origin main
  ↓
GitHub Actions / Vercel auto-runs:
  1. ✓ install deps
  2. ✓ run tests
  3. ✓ lint
  4. ✓ build for production
  5. ✓ deploy
  ↓
Live in 5 minutes

Any step fails → no deploy + email`,
    analogy: "Like a factory line. Drop in raw material (code), machines inspect, assemble, package, ship. Humans just watch the dashboard.",
    beginnerExplanation: "CI = Continuous Integration (auto-test). CD = Continuous Deployment (auto-ship).",
    whatYouCanDo: [
      "Auto-deploy on git push",
      "PRs auto-test to catch bugs",
      "Auto-rollback on failure",
      "Multi-env sync (dev / staging / prod)",
    ],
    whyItMatters: "Without CI/CD: manual deploys → errors → fear of releases. With CI/CD: ship 10 times a day safely.",
    vibeCodingUsage: "Using Vercel? You already have CD — push triggers deploy. Add tests via GitHub Actions.",
    quickStart: [
      "Deploying via Vercel = CD by default",
      "Want tests? Create .github/workflows/test.yml",
      "Ask Cursor to write the yaml",
    ],
    commonMisunderstandings: [
      "CI/CD isn't just tools — it's a workflow philosophy",
      "CI ≠ just 'auto-test' — also lint, security scan, build",
      "Pure auto CD is risky — add human review for prod",
    ],
    technicalExplanation: "CI/CD is a core DevOps practice. Tools: GitHub Actions, GitLab CI, CircleCI, Jenkins. Flow: trigger → build → test → deploy → monitor.",
    promptExample: "Explain CI vs CD, and show a minimal GitHub Actions config that runs tests on push.",
  },
};
