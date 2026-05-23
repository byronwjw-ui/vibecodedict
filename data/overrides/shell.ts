import type { TermOverride } from "./_types";

export const shell: TermOverride = {
  tags: ["tool", "terminal", "core"],
  relatedTerms: ["terminal", "git", "npm", "claude-code", "ide"],
  learningPath: ["terminal", "shell", "git", "npm", "claude-code"],
  zh: {
    oneLiner: "Shell = 终端里\"翻译你的命令给电脑听\"的程序——常见的有 bash、zsh、PowerShell。",
    whatItLooksLike: `终端打开后跑的是 Shell：

$ echo "hello"
hello

$ pwd
/Users/you/projects

$ which zsh
/bin/zsh

$ cat ~/.zshrc   ← Shell 的配置文件
export PATH=...
alias gs='git status'`,
    analogy: "终端是\"窗口\"，Shell 是\"窗口里说话的翻译\"。你说英文（命令），它翻成电脑能懂的指令。",
    beginnerExplanation: "Shell 是终端里跑的程序。你看到的 $ 提示符就是它。打命令、跑脚本、配环境变量都靠它。",
    whatYouCanDo: [
      "执行命令（cd / ls / git）",
      "配 alias（gs = git status）",
      "写脚本自动化重复任务",
      "组合命令（管道 |、重定向 >）",
    ],
    whyItMatters: "Shell 的配置（如 .zshrc）决定你的开发体验。配好 = 飞快；没配 = 一直手动复制。",
    vibeCodingUsage: "Claude Code 跑的 shell 命令本质都靠 Shell 解释执行。AI 让你\"加这条 alias 到 .zshrc\"也是在配 Shell。",
    quickStart: [
      "macOS / 大部分 Linux 默认 zsh",
      "打开终端跑 echo $SHELL 看用的是哪个",
      "编辑 ~/.zshrc 加几个 alias",
    ],
    commonMisunderstandings: [
      "Shell 和终端不是一个东西——终端是窗口，Shell 是程序",
      "Windows 的 PowerShell 跟 bash 命令很不一样",
      "改完 .zshrc 要 source ~/.zshrc 或重开终端才生效",
    ],
    technicalExplanation: "Shell 是用户和操作系统内核之间的命令解释器。常见 Shell：bash、zsh、fish、PowerShell、cmd。可执行命令、变量、流程控制、脚本。",
    promptExample: "请解释 Shell 和终端的区别，并给一个 .zshrc 配置示例（带 3 个有用的 alias）。",
  },
  en: {
    oneLiner: "Shell = the program inside the terminal that translates your commands — common ones: bash, zsh, PowerShell.",
    whatItLooksLike: `Inside a terminal you talk to a Shell:

$ echo "hello"
hello

$ pwd
/Users/you/projects

$ which zsh
/bin/zsh

$ cat ~/.zshrc   ← Shell config
export PATH=...
alias gs='git status'`,
    analogy: "Terminal is the window. Shell is the translator in the window. You speak English, it tells the OS.",
    beginnerExplanation: "Shell runs inside a terminal. The $ prompt is it. Commands, scripts, env vars all flow through it.",
    whatYouCanDo: [
      "Run commands (cd, ls, git)",
      "Set aliases (gs = git status)",
      "Write scripts to automate tasks",
      "Combine commands (pipes |, redirect >)",
    ],
    whyItMatters: "Shell config (e.g. .zshrc) defines your dev experience. Configured = fast.",
    vibeCodingUsage: "Shell commands Claude Code runs are interpreted by the Shell. 'Add this alias to .zshrc' = configuring the Shell.",
    quickStart: [
      "macOS / most Linux default to zsh",
      "Run echo $SHELL",
      "Edit ~/.zshrc, add a few aliases",
    ],
    commonMisunderstandings: [
      "Shell ≠ terminal — terminal is window, Shell is the program",
      "PowerShell commands differ a lot from bash",
      "After editing .zshrc: source ~/.zshrc or reopen terminal",
    ],
    technicalExplanation: "Shell is the command interpreter between user and OS kernel. Common shells: bash, zsh, fish, PowerShell, cmd.",
    promptExample: "Explain Shell vs terminal, then provide a sample .zshrc with 3 useful aliases.",
  },
};
