import type { TermOverride } from "./_types";

export const cursor: TermOverride = {
  tags: ["ai-tool", "ide", "vibe-coding"],
  relatedTerms: ["claude-code", "windsurf", "github-copilot", "ide", "vibe-coding"],
  learningPath: ["cursor", "prompt", "git", "deployment", "vibe-coding"],
  zh: {
    oneLiner: "一个内置 AI 的代码编辑器，让你边写代码边跟 AI 对话。",
    whatItLooksLike: `[Cursor 界面]
左侧：文件树
中间：代码编辑器
右侧：AI Chat 面板
快捷键 Cmd+K = 选中代码让 AI 改
快捷键 Cmd+L = 打开 AI 对话`,
    analogy: "像 VS Code，但每个角落都塞了个 AI 助理。你选一段代码按个键，它就帮你改。",
    beginnerExplanation: "Cursor 是基于 VS Code 改造的 AI 编辑器。打开任何项目，选中代码、按快捷键，AI 就能解释、改写、修 bug。",
    whatYouCanDo: [
      "选中代码让 AI 解释或重构",
      "用自然语言生成新文件或新函数",
      "让 AI 跨多个文件做修改",
      "Tab 键自动补全（比 Copilot 更聪明）",
    ],
    whyItMatters: "Cursor 是目前小白最容易上手的 Vibe Coding 编辑器。装好就能用，不需要配命令行。",
    vibeCodingUsage: "Claude Code 跑在终端，Cursor 跑在图形界面。要看代码、点鼠标、做调整，Cursor 更顺手。",
    quickStart: [
      "去 cursor.com 下载安装",
      "打开你的项目文件夹",
      "按 Cmd+L 打开 Chat，问"这个项目是做什么的？"",
    ],
    commonMisunderstandings: [
      "以为它和 VS Code 完全一样——AI 功能差别巨大",
      "免费版有调用次数限制，重度用户需要 Pro",
      "不指定上下文文件，AI 会瞎猜",
    ],
    technicalExplanation: "Cursor 是 VS Code 的 fork，内置 GPT-4 / Claude / 自家模型，支持 Tab 补全、Cmd+K 编辑、Cmd+L 对话、Composer 多文件改写、@-mention 上下文引用。",
    promptExample: "看一下 @app/page.tsx 这个文件，帮我把里面的英文文案改成中文，保留原有结构。",
  },
  en: {
    oneLiner: "A code editor with AI built in, so you can chat while you code.",
    whatItLooksLike: `[Cursor UI]
Left: file tree
Center: code editor
Right: AI Chat panel
Cmd+K = let AI edit selected code
Cmd+L = open AI chat`,
    analogy: "Like VS Code, but every corner has an AI assistant. Select code, hit a key, AI rewrites it.",
    beginnerExplanation: "Cursor is an AI-native editor built on VS Code. Open any project, select code, press a shortcut, and AI explains, rewrites, or debugs.",
    whatYouCanDo: [
      "Select code and let AI explain or refactor",
      "Generate new files or functions from natural language",
      "Multi-file edits via Composer",
      "Tab autocomplete (smarter than Copilot)",
    ],
    whyItMatters: "Cursor is the easiest Vibe Coding editor for beginners. Install and go — no terminal setup.",
    vibeCodingUsage: "Claude Code lives in the terminal; Cursor lives in a GUI. When you want to see code and click around, Cursor is smoother.",
    quickStart: [
      "Download from cursor.com",
      "Open your project folder",
      "Press Cmd+L and ask 'what is this project?'",
    ],
    commonMisunderstandings: [
      "Assuming it is just VS Code — the AI features are night and day",
      "Free tier has request limits; heavy users need Pro",
      "Without specifying context, AI will guess wrong",
    ],
    technicalExplanation: "Cursor is a fork of VS Code with GPT-4 / Claude / proprietary models built in. Features: Tab completion, Cmd+K inline edit, Cmd+L chat, multi-file Composer, @-mention context.",
    promptExample: "Look at @app/page.tsx and translate all English copy to Chinese, keeping the original structure.",
  },
};
