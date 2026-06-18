import type { TermOverride } from "./_types";

export const githubCopilot: TermOverride = {
  tags: ["ai-tool", "ide", "github"],
  relatedTerms: ["cursor", "claude-code", "github", "ide", "vibe-coding"],
  learningPath: ["github-copilot", "git", "github", "prompt", "vibe-coding"],
  zh: {
    oneLiner: "GitHub 官方出的 AI 代码补全工具，是 Vibe Coding 的鼻祖。",
    whatItLooksLike: `你在 VS Code 里写：
function calculatePrice(items) {
  // (你停在这里)

Copilot 灰色提示：
  return items.reduce((sum, i) => sum + i.price, 0);
  
按 Tab 接受`,
    analogy: "像有个看过你所有代码的同事在旁边猜你下一行要写什么——按 Tab 就接受它的猜测。",
    beginnerExplanation: "Copilot 是最早的 AI 编程助手，2021 年 GitHub 发布。在 VS Code / JetBrains 等编辑器里以补全形式工作。",
    whatYouCanDo: [
      "写代码时获得实时灰色补全",
      "用 /explain、/fix、/tests 等斜杠命令",
      "Copilot Chat 对话改代码",
      "Copilot Workspace 做多文件任务",
    ],
    whyItMatters: "它是"AI 写代码"概念的开山之作。后来的 Cursor、Windsurf 都受它启发。",
    vibeCodingUsage: "如果你已经在 VS Code 里用得很顺，加一个 Copilot 订阅就够日常用了，不一定要换 Cursor。",
    quickStart: [
      "去 github.com/features/copilot 订阅（学生免费）",
      "在 VS Code 装 GitHub Copilot 扩展",
      "登录 GitHub，开始写代码就有补全",
    ],
    commonMisunderstandings: [
      "以为它和 Cursor 一样强——补全很强但 Agent 能力弱",
      "Copilot Chat ≠ ChatGPT，背后模型不同",
      "免费版只对学生和开源维护者开放",
    ],
    technicalExplanation: "GitHub Copilot 由 GitHub + OpenAI 合作开发，早期基于 Codex，现在用 GPT-4 / Claude 等多模型。提供补全、Chat、CLI、Workspace 多种形态。",
    promptExample: "/explain 这段函数在做什么？有没有更简洁的写法？",
  },
  en: {
    oneLiner: "GitHub's official AI code completion tool — the original Vibe Coding ancestor.",
    whatItLooksLike: `In VS Code you type:
function calculatePrice(items) {
  // (cursor stops here)

Copilot suggests in gray:
  return items.reduce((sum, i) => sum + i.price, 0);

Press Tab to accept`,
    analogy: "Like a colleague who has read all your code guessing your next line — press Tab to accept.",
    beginnerExplanation: "Copilot is the original AI coding assistant, launched by GitHub in 2021. It works as autocomplete inside VS Code, JetBrains, and other editors.",
    whatYouCanDo: [
      "Get live gray-text autocomplete while typing",
      "Use slash commands: /explain, /fix, /tests",
      "Chat with Copilot to refactor code",
      "Multi-file tasks with Copilot Workspace",
    ],
    whyItMatters: "It pioneered the 'AI writes code' category. Cursor and Windsurf were all inspired by it.",
    vibeCodingUsage: "If you are already happy in VS Code, a Copilot subscription is enough — you do not have to switch to Cursor.",
    quickStart: [
      "Subscribe at github.com/features/copilot (free for students)",
      "Install the GitHub Copilot extension in VS Code",
      "Sign in to GitHub and start coding — completions appear",
    ],
    commonMisunderstandings: [
      "Thinking it equals Cursor — completion is great, but agent ability is weaker",
      "Copilot Chat is not ChatGPT — different models behind the scenes",
      "Free tier is only for students and open-source maintainers",
    ],
    technicalExplanation: "GitHub Copilot is built by GitHub + OpenAI. Originally based on Codex, now uses GPT-4 / Claude and others. Comes in completion, Chat, CLI, and Workspace forms.",
    promptExample: "/explain what does this function do, and is there a cleaner way to write it?",
  },
};
