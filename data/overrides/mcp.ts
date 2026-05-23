import type { TermOverride } from "./_types";

export const mcp: TermOverride = {
  tags: ["ai", "protocol", "agent", "anthropic"],
  relatedTerms: ["claude-code", "agent", "api", "tool-use", "anthropic"],
  learningPath: ["mcp", "claude-code", "api", "agent", "tool-use"],
  zh: {
    oneLiner: "Model Context Protocol，让 AI 标准化地连接外部工具和数据的协议。",
    whatItLooksLike: `Claude Code 配置 MCP server：

  {
    "mcpServers": {
      "github": { "command": "npx", "args": [...] },
      "supabase": { "command": "node", "args": [...] }
    }
  }

→ Claude 现在能直接查 GitHub issue、读 Supabase 表`,
    analogy: "MCP 之于 AI Agent，像 USB 之于电脑——一个标准接口，啥外设都能插。",
    beginnerExplanation: "MCP 是 Anthropic 2024 年提出的协议。让 Claude / Cursor 等 AI 工具能用统一方式连接 GitHub、数据库、Slack、Figma 等外部系统。",
    whatYouCanDo: [
      "让 Claude Code 读写你的 GitHub 仓库",
      "让 AI 直接查询数据库",
      "接 Slack / Notion / Figma / Linear",
      "自己写 MCP server 扩展 AI 能力",
    ],
    whyItMatters: "在 MCP 之前，每个工具要单独写集成。MCP 出现后，写一次能被所有 AI 工具用——这是 AI 工具生态的拐点。",
    vibeCodingUsage: "给 Claude Code 装 GitHub MCP 后，可以直接说"看一下 issue #42 然后改"，它自己读 issue + 改代码。",
    quickStart: [
      "查 mcp.so 或 Anthropic 官方文档",
      "在 Claude Desktop 或 Claude Code 配置 mcp.json",
      "测试连一个 server（如 filesystem）",
    ],
    commonMisunderstandings: [
      "MCP 不是 API——它是更上层的协议规范",
      "不是所有 AI 都支持 MCP（目前 Claude 系最强）",
      "装 MCP 不等于安全，要看 server 来源",
    ],
    technicalExplanation: "MCP（Model Context Protocol）是 Anthropic 推出的开放协议，定义了 AI 客户端与外部 server 之间的标准通信（资源、工具、Prompt），基于 JSON-RPC，支持 stdio 和 HTTP。",
    promptExample: "我想让 Claude Code 通过 MCP 连接我的 Supabase 数据库，自动读 users 表。请告诉我配置步骤。",
  },
  en: {
    oneLiner: "Model Context Protocol — a standard for AI to connect to external tools and data.",
    whatItLooksLike: `Claude Code MCP config:

  {
    "mcpServers": {
      "github": { "command": "npx", "args": [...] },
      "supabase": { "command": "node", "args": [...] }
    }
  }

→ Claude can now read GitHub issues, query Supabase`,
    analogy: "MCP is to AI agents what USB is to PCs — one standard plug, any peripheral works.",
    beginnerExplanation: "MCP is a protocol from Anthropic (2024). It lets AI tools like Claude and Cursor connect to GitHub, databases, Slack, and Figma in a uniform way.",
    whatYouCanDo: [
      "Let Claude Code read/write your GitHub repos",
      "Let AI query your database directly",
      "Connect Slack / Notion / Figma / Linear",
      "Write your own MCP server",
    ],
    whyItMatters: "Before MCP, each tool needed a custom integration. With MCP, one server works across all AI clients — a turning point for the AI ecosystem.",
    vibeCodingUsage: "After adding the GitHub MCP to Claude Code, you can say 'read issue #42 and fix it', and it does both itself.",
    quickStart: [
      "Visit mcp.so or Anthropic docs",
      "Configure mcp.json in Claude Desktop / Code",
      "Try connecting a simple server like filesystem",
    ],
    commonMisunderstandings: [
      "MCP is not an API — it is a higher-level protocol",
      "Not every AI supports MCP (Claude is strongest today)",
      "Installing a server does not mean it is safe — check the source",
    ],
    technicalExplanation: "MCP (Model Context Protocol) is Anthropic's open protocol defining standard communication between AI clients and external servers (resources, tools, prompts), based on JSON-RPC over stdio or HTTP.",
    promptExample: "I want Claude Code to use MCP to connect my Supabase database and read the users table. Walk me through the setup.",
  },
};
