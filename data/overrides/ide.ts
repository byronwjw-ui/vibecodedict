import type { TermOverride } from "./_types";

export const ide: TermOverride = {
  tags: ["tool", "editor", "core"],
  relatedTerms: ["cursor", "github-copilot", "windsurf", "terminal", "framework"],
  learningPath: ["ide", "cursor", "terminal", "git", "framework"],
  zh: {
    oneLiner: "IDE = 写代码的"瑞士军刀"——编辑、运行、调试、查错都在一个软件里。",
    whatItLooksLike: `经典 IDE 界面：
┌─────────────────────────────┐
│ 文件树 │   代码编辑器        │
│        │                    │
│        │                    │
├────────┼─────────────────────┤
│        │   终端 / 调试       │
└─────────────────────────────┘

主流 IDE：
- VS Code (最流行，免费)
- Cursor (AI 加持的 VS Code)
- WebStorm (JetBrains 出品)
- Xcode (做 iOS)`,
    analogy: "记事本是菜刀，IDE 是料理厨房——刀具、案板、灶台、调料架都备好了。",
    beginnerExplanation: "IDE = Integrated Development Environment（集成开发环境）。把编辑、补全、运行、调试、Git 全塞进一个软件。",
    whatYouCanDo: [
      "智能补全",
      "实时报错提示",
      "调试（断点、查变量）",
      "集成 Git、终端",
      "装扩展定制功能",
    ],
    whyItMatters: "用记事本写代码 = 用菜刀做满汉全席。装个 IDE 能让生产力翻 5 倍。",
    vibeCodingUsage: "Cursor、Windsurf 都是 IDE。它们的本质是"VS Code + AI"。装好 IDE 是 Vibe Coding 第一步。",
    quickStart: [
      "去 cursor.com 下载（推荐）或 code.visualstudio.com",
      "打开任意项目文件夹",
      "开始写代码，看智能提示",
    ],
    commonMisunderstandings: [
      "IDE 和编辑器区分越来越模糊——VS Code 严格说是编辑器，但功能像 IDE",
      "不同语言适合不同 IDE（写 iOS 用 Xcode，写 Java 用 IntelliJ）",
      "IDE 的扩展生态很重要，光看主体功能不够",
    ],
    technicalExplanation: "IDE 集成代码编辑器、编译器、解释器、调试器、构建工具、版本控制于一体。VS Code 是基于 Electron 的轻量化编辑器，通过扩展达到 IDE 体验。",
    promptExample: "请解释 IDE 是什么，对比用"记事本写代码"和"用 VS Code 写代码"的体验差别。",
  },
  en: {
    oneLiner: "IDE = the Swiss Army knife for coding — edit, run, debug, all in one app.",
    whatItLooksLike: `Classic IDE layout:
┌─────────────────────────────┐
│ Files  │  Code editor        │
│        │                    │
│        │                    │
├────────┼─────────────────────┤
│        │  Terminal / Debug   │
└─────────────────────────────┘

Popular:
- VS Code (most popular, free)
- Cursor (AI-augmented VS Code)
- WebStorm (JetBrains)
- Xcode (iOS)`,
    analogy: "Notepad is a kitchen knife. IDE is a full kitchen — knives, board, stove, spice rack.",
    beginnerExplanation: "IDE = Integrated Development Environment. Edits, completions, runs, debugs, and Git all in one app.",
    whatYouCanDo: [
      "Smart autocomplete",
      "Live error hints",
      "Debug (breakpoints, variables)",
      "Integrated Git, terminal",
      "Extensions for everything",
    ],
    whyItMatters: "Notepad coding = cooking a feast with a paring knife. An IDE 5x's your productivity.",
    vibeCodingUsage: "Cursor and Windsurf are IDEs — essentially 'VS Code + AI'. Installing one is step one of Vibe Coding.",
    quickStart: [
      "Download Cursor or VS Code",
      "Open a project folder",
      "Start typing — watch suggestions",
    ],
    commonMisunderstandings: [
      "Editor vs IDE blurs — VS Code is technically an editor with IDE features",
      "Different langs prefer different IDEs (Xcode iOS, IntelliJ Java)",
      "Extension ecosystem matters more than core features",
    ],
    technicalExplanation: "An IDE integrates editor, compiler/interpreter, debugger, build tools, and VCS. VS Code is an Electron-based lightweight editor that achieves IDE feel via extensions.",
    promptExample: "Explain IDE — contrast 'writing code in Notepad' vs 'in VS Code'.",
  },
};
