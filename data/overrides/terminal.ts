import type { TermOverride } from "./_types";

export const terminal: TermOverride = {
  tags: ["tool", "core"],
  relatedTerms: ["shell", "ide", "claude-code", "git", "npm"],
  learningPath: ["terminal", "shell", "git", "npm", "claude-code"],
  zh: {
    oneLiner: "终端 = 黑底白字的"指令窗口"——用打字代替点鼠标的方式操作电脑。",
    whatItLooksLike: `~/projects $ ls
my-app  notes.md  resume.pdf

~/projects $ cd my-app
~/projects/my-app $ npm install
✓ added 367 packages

~/projects/my-app $ git status
On branch main
nothing to commit, working tree clean

~/projects/my-app $ claude
> 帮我加一个登录页`,
    analogy: "界面是"点菜单"，终端是"直接喊话"。会喊话的人能让电脑做菜单里没有的事。",
    beginnerExplanation: "终端是一个文字界面。你打命令，电脑执行。看似古早，实则是最强大的操作方式。",
    whatYouCanDo: [
      "装包（npm install xxx）",
      "操作文件（cd、ls、mv）",
      "跑项目（npm run dev）",
      "git 操作",
      "跑 Claude Code 等 CLI AI 工具",
    ],
    whyItMatters: "Vibe Coding 你不可能避开终端。Claude Code 就在终端跑。学会基础命令 = 解锁 50% 的 AI 编程能力。",
    vibeCodingUsage: "Claude Code、各种 CLI 工具、装依赖、起服务、查日志——全在终端。Cursor 也内置终端面板。",
    quickStart: [
      "macOS: Spotlight 搜 Terminal；Windows: 装 Windows Terminal",
      "学 5 个命令：cd / ls / pwd / mkdir / rm",
      "试在终端里 cd 到你的项目，跑 npm install",
    ],
    commonMisunderstandings: [
      "终端 ≠ 黑客电影——日常命令并不可怕",
      "macOS / Linux 的命令大多和 Windows 不一样",
      "rm -rf 是大杀器，乱用会丢数据",
    ],
    technicalExplanation: "终端（Terminal）是用户与 shell（如 bash、zsh）交互的程序。常见终端：macOS Terminal、iTerm2、Windows Terminal、Warp、Tabby。",
    promptExample: "请解释终端是什么，列出 5 个新手必会的命令，并用一句话说每个命令做什么。",
  },
  en: {
    oneLiner: "Terminal = the black-and-white command window — type instead of click to drive your computer.",
    whatItLooksLike: `~/projects $ ls
my-app  notes.md  resume.pdf

~/projects $ cd my-app
~/projects/my-app $ npm install
✓ added 367 packages

~/projects/my-app $ git status
On branch main
nothing to commit

~/projects/my-app $ claude
> add a login page`,
    analogy: "GUI is a menu. Terminal is shouting directly at the chef. Shouting works for things off-menu too.",
    beginnerExplanation: "Terminal is a text interface. Type commands, computer executes. Looks old, actually most powerful.",
    whatYouCanDo: [
      "Install packages (npm install xxx)",
      "Manage files (cd, ls, mv)",
      "Run projects (npm run dev)",
      "Git operations",
      "Run Claude Code and other CLI AI tools",
    ],
    whyItMatters: "You cannot avoid the terminal in Vibe Coding. Claude Code lives there. Basic commands = 50% of AI coding power unlocked.",
    vibeCodingUsage: "Claude Code, CLI tools, deps, dev server, logs — all terminal. Cursor includes a terminal panel.",
    quickStart: [
      "macOS: Spotlight → Terminal. Windows: install Windows Terminal",
      "Learn 5 commands: cd / ls / pwd / mkdir / rm",
      "cd into a project, run npm install",
    ],
    commonMisunderstandings: [
      "Terminal ≠ hacker movie — daily commands aren't scary",
      "macOS/Linux commands differ from Windows",
      "rm -rf is a sledgehammer — misuse loses data",
    ],
    technicalExplanation: "Terminal is a program that interfaces with a shell (bash, zsh). Popular terminals: macOS Terminal, iTerm2, Windows Terminal, Warp, Tabby.",
    promptExample: "Explain terminal — list 5 essential beginner commands with one-line descriptions.",
  },
};
