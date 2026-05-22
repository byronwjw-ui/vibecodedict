// Generates data/terms.json from scripts/terms-spec.mjs + overrides.
// Run with: node scripts/generate-terms.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { SPEC } from "./terms-spec.mjs";
import { OVERRIDES } from "./term-overrides.mjs";
import { slugify } from "./term-helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "data", "terms.json");

const CATEGORY_ZH = {
  "ai-basics": "AI 基础",
  "vibe-coding": "Vibe Coding",
  "programming-basics": "编程基础",
  "web-development": "Web 开发",
  "shell-git-dev-environment": "Shell / Git / 开发环境",
  "database-backend-deployment": "数据库 / 后端 / 部署",
  "product-startup": "产品 / 创业",
};
const CATEGORY_EN = {
  "ai-basics": "AI Basics",
  "vibe-coding": "Vibe Coding",
  "programming-basics": "Programming Basics",
  "web-development": "Web Development",
  "shell-git-dev-environment": "Shell, Git & Dev Env",
  "database-backend-deployment": "Database, Backend & Deployment",
  "product-startup": "Product & Startup",
};

// Minimal Chinese name dictionary — falls back to English title when missing.
const ZH_NAMES = {
  ai: "人工智能", llm: "大语言模型", model: "模型", token: "Token", prompt: "提示词",
  "system-prompt": "系统提示词", "user-prompt": "用户提示词", "context-window": "上下文窗口",
  agent: "智能体", rag: "检索增强生成", embedding: "嵌入向量", "vector-database": "向量数据库",
  "fine-tuning": "微调", inference: "推理", temperature: "温度", "top-p": "Top-p 采样",
  "function-calling": "函数调用", "tool-calling": "工具调用", mcp: "MCP 模型上下文协议",
  hallucination: "幻觉", "prompt-injection": "提示词注入", "api-key": "API 密钥",
  openai: "OpenAI", claude: "Claude", gemini: "Gemini", deepseek: "DeepSeek",
  transformer: "Transformer", "neural-network": "神经网络", training: "训练", dataset: "数据集",
  multimodal: "多模态", "vision-model": "视觉模型", "speech-to-text": "语音转文字",
  "text-to-speech": "文字转语音", "reasoning-model": "推理模型", "chain-of-thought": "思维链",
  evaluation: "评估", benchmark: "基准测试", latency: "延迟", "rate-limit": "速率限制",
  cost: "成本", "prompt-engineering": "提示词工程", "context-engineering": "上下文工程",
  "ai-workflow": "AI 工作流", "ai-automation": "AI 自动化", "ai-assistant": "AI 助手",
  chatbot: "聊天机器人", "knowledge-base": "知识库", memory: "记忆", guardrails: "护栏",
  safety: "安全", alignment: "对齐", "model-distillation": "模型蒸馏", quantization: "量化",
  lora: "LoRA 微调", checkpoint: "检查点", parameters: "参数", "open-source-model": "开源模型",
  "closed-source-model": "闭源模型", "model-provider": "模型提供商",
  "vibe-coding": "Vibe Coding", "claude-code": "Claude Code", cursor: "Cursor",
  windsurf: "Windsurf", trae: "Trae", replit: "Replit", bolt: "Bolt", lovable: "Lovable",
  "github-copilot": "GitHub Copilot", codeium: "Codeium", tabnine: "Tabnine",
  "ai-ide": "AI 编辑器", "code-agent": "代码 Agent", "pair-programming": "结对编程",
  "code-review": "代码评审", refactor: "重构", debug: "调试", "stack-trace": "调用栈",
  "error-message": "错误信息", prd: "产品需求文档", spec: "规格说明", "user-story": "用户故事",
  "acceptance-criteria": "验收标准", "task-breakdown": "任务拆解", "project-scaffold": "项目脚手架",
  boilerplate: "样板代码", codebase: "代码库", "repository-context": "仓库上下文",
  "dev-server": "开发服务器", "hot-reload": "热重载", build: "构建", lint: "代码检查",
  format: "代码格式化", test: "测试", "unit-test": "单元测试", "integration-test": "集成测试",
  "e2e-test": "端到端测试", bug: "Bug", feature: "功能", "commit-message": "提交信息",
  "pull-request-review": "PR 评审", "tech-debt": "技术债", architecture: "架构",
  component: "组件", "file-tree": "文件树",
  variable: "变量", constant: "常量", function: "函数", parameter: "形参", argument: "实参",
  "return-value": "返回值", class: "类", object: "对象", method: "方法", property: "属性",
  array: "数组", list: "列表", string: "字符串", number: "数字", boolean: "布尔值",
  null: "Null 空值", undefined: "Undefined 未定义", loop: "循环", condition: "条件",
  "if-statement": "if 语句", "else-statement": "else 语句", switch: "Switch 语句",
  error: "错误", exception: "异常", "try-catch": "Try Catch", type: "类型", interface: "接口",
  module: "模块", import: "Import 导入", export: "Export 导出", package: "包",
  dependency: "依赖", runtime: "运行时", compiler: "编译器", interpreter: "解释器",
  syntax: "语法", semantics: "语义", scope: "作用域", closure: "闭包", async: "异步",
  await: "Await 关键字", promise: "Promise", callback: "回调函数", event: "事件",
  state: "状态", "data-structure": "数据结构", algorithm: "算法", recursion: "递归",
  api: "应用程序接口", sdk: "软件开发工具包", framework: "框架", library: "库",
  "design-pattern": "设计模式", oop: "面向对象编程", "functional-programming": "函数式编程",
  frontend: "前端", backend: "后端", "full-stack": "全栈", html: "HTML", css: "CSS",
  javascript: "JavaScript", typescript: "TypeScript", react: "React", "next-js": "Next.js",
  vue: "Vue", svelte: "Svelte", "node-js": "Node.js", express: "Express", http: "HTTP",
  https: "HTTPS", request: "请求", response: "响应", header: "请求头", cookie: "Cookie",
  session: "会话", json: "JSON 数据格式", "rest-api": "REST API", graphql: "GraphQL",
  websocket: "WebSocket", authentication: "身份认证", authorization: "授权", oauth: "OAuth",
  jwt: "JWT 令牌", cors: "CORS 跨域", domain: "域名", dns: "DNS 域名解析", cdn: "CDN 内容分发网络",
  ssr: "服务端渲染", ssg: "静态站点生成", csr: "客户端渲染", hydration: "水合",
  route: "路由", middleware: "中间件", form: "表单", validation: "校验",
  "responsive-design": "响应式设计", accessibility: "无障碍", seo: "SEO 搜索引擎优化",
  "landing-page": "落地页", deployment: "部署",
  terminal: "终端", shell: "Shell", bash: "Bash", zsh: "Zsh", cli: "命令行工具",
  command: "命令", path: "路径", "environment-variable": "环境变量",
  cd: "cd 命令", ls: "ls 命令", pwd: "pwd 命令", mkdir: "mkdir 命令", touch: "touch 命令",
  rm: "rm 命令", cp: "cp 命令", mv: "mv 命令", cat: "cat 命令", echo: "echo 命令",
  grep: "grep 命令", find: "find 命令", chmod: "chmod 命令", chown: "chown 命令",
  sudo: "sudo 命令", curl: "curl 命令", wget: "wget 命令", env: "env 命令", "path-env": "PATH 环境变量",
  npm: "npm 包管理器", pnpm: "pnpm 包管理器", yarn: "yarn 包管理器", npx: "npx 命令",
  "package-json": "package.json", "node-modules": "node_modules",
  git: "Git 版本控制", github: "GitHub", repository: "代码仓库", commit: "提交",
  branch: "分支", merge: "合并", rebase: "变基", "pull-request": "Pull Request",
  clone: "克隆", fork: "Fork", push: "推送", pull: "拉取", conflict: "冲突",
  gitignore: ".gitignore", readme: "README", license: "开源协议", "ssh-key": "SSH 密钥",
  "github-actions": "GitHub Actions", "ci-cd": "CI/CD 持续集成与持续交付",
  docker: "Docker", dockerfile: "Dockerfile", container: "容器",
  database: "数据库", sql: "SQL", nosql: "NoSQL", postgresql: "PostgreSQL",
  mysql: "MySQL", sqlite: "SQLite", mongodb: "MongoDB", supabase: "Supabase",
  firebase: "Firebase", prisma: "Prisma", orm: "对象关系映射", table: "数据表",
  row: "行", column: "列", index: "索引", query: "查询", migration: "迁移",
  schema: "数据库结构", cache: "缓存", redis: "Redis", queue: "队列", server: "服务器",
  serverless: "无服务器", "edge-function": "边缘函数", vercel: "Vercel", netlify: "Netlify",
  railway: "Railway", render: "Render", cloudflare: "Cloudflare", aws: "AWS",
  mvp: "最小可行产品", saas: "SaaS", b2b: "B2B", b2c: "B2C", "user-flow": "用户流程",
  wireframe: "线框图", prototype: "原型", "conversion-rate": "转化率",
  retention: "留存", churn: "流失"
};

const CAT_BLURB_ZH = {
  "ai-basics": "AI 基础",
  "vibe-coding": "Vibe Coding 工具与流程",
  "programming-basics": "编程基础",
  "web-development": "Web 开发",
  "shell-git-dev-environment": "Shell / Git / 开发环境",
  "database-backend-deployment": "数据库与后端部署",
  "product-startup": "产品与创业",
};

function defaultTerm(name, category, difficulty, qualityLevel, slug) {
  const zhName = ZH_NAMES[slug] || name;
  const zh = {
    title: name,
    english: name,
    chinese: zhName,
    oneLiner: `${name}（${zhName}）是${CAT_BLURB_ZH[category]}中的一个重要概念。`,
    beginnerExplanation: `你可以把 ${name} 当作${CAT_BLURB_ZH[category]}中的一块拼图。理解它能让你更快地看懂 AI 编程工具和教程。`,
    technicalExplanation: `在${CAT_BLURB_ZH[category]}领域，${name} 指的是一组特定的概念、约定或工具。它通常出现在与之相关的实际开发场景中，作为完成任务的基础组成部分。`,
    whyItMatters: `了解 ${name} 能让你在用 Claude Code、Cursor 等 AI 工具时更准确地描述需求，减少误解和返工。`,
    vibeCodingUsage: `在 Vibe Coding 中，当 AI 帮你生成或修改代码时，${name} 经常出现在它的解释、错误提示或建议里。能看懂它，你就能更高效地与 AI 协作。`,
    useCases: [
      `在 AI 帮你写代码时用到 ${name}`,
      `阅读教程或文档时遇到 ${name}`,
      `调试问题时定位到 ${name} 相关报错`,
      `与团队沟通时用到 ${name} 这个术语`,
    ],
    codeExample: "",
    commonMisunderstandings: [
      `认为 ${name} 是很高深的概念，其实在 AI 编程里它非常常见`,
      `把 ${name} 和其他相似概念混淆`,
      `忽略 ${name} 在实际项目中的具体用法`,
    ],
    promptExample: `请用小白能理解的方式解释 ${name}，并结合 Vibe Coding 或 Claude Code 的场景举一个例子。`,
  };
  const en = {
    title: name,
    english: name,
    chinese: zhName,
    oneLiner: `${name} is an important concept in ${CATEGORY_EN[category]}.`,
    beginnerExplanation: `Think of ${name} as one piece of the ${CATEGORY_EN[category]} puzzle. Knowing it helps you read AI coding tools and tutorials faster.`,
    technicalExplanation: `In ${CATEGORY_EN[category]}, ${name} refers to a specific set of concepts, conventions, or tools that frequently appear together in real development workflows.`,
    whyItMatters: `Understanding ${name} lets you describe what you want more precisely to tools like Claude Code or Cursor, reducing misunderstandings and rework.`,
    vibeCodingUsage: `In Vibe Coding, ${name} often shows up in the AI's explanations, error messages, and suggestions. Reading it confidently makes your collaboration with AI much smoother.`,
    useCases: [
      `AI uses ${name} when generating or modifying code for you`,
      `You encounter ${name} in tutorials and documentation`,
      `You debug an error that mentions ${name}`,
      `Your team uses ${name} as everyday vocabulary`,
    ],
    codeExample: "",
    commonMisunderstandings: [
      `Thinking ${name} is advanced — it is everyday vocabulary in AI coding`,
      `Confusing ${name} with a similar-looking concept`,
      `Ignoring how ${name} actually shows up in your project`,
    ],
    promptExample: `Explain ${name} in a beginner-friendly way, with one concrete example from Vibe Coding or Claude Code.`,
  };
  return { zh, en };
}

function relatedFor(slug, category, allBySlug, allByCategory) {
  const sameCat = (allByCategory[category] || []).filter((s) => s !== slug).slice(0, 5);
  return sameCat;
}
function pathFor(slug, category, allByCategory) {
  const same = (allByCategory[category] || []).filter((s) => s !== slug).slice(0, 4);
  return [slug, ...same];
}

function main() {
  const allSlugs = new Set();
  const allByCategory = {};
  const rows = SPEC.map(([name, category, difficulty, qualityLevel]) => {
    const slug = slugify(name);
    if (allSlugs.has(slug)) throw new Error(`Duplicate slug ${slug}`);
    allSlugs.add(slug);
    (allByCategory[category] ||= []).push(slug);
    return { name, category, difficulty, qualityLevel, slug };
  });
  const out = rows.map(({ name, category, difficulty, qualityLevel, slug }) => {
    const base = defaultTerm(name, category, difficulty, qualityLevel, slug);
    const override = OVERRIDES[slug] || {};
    const zh = { ...base.zh, ...(override.zh || {}) };
    const en = { ...base.en, ...(override.en || {}) };
    return {
      slug,
      category,
      difficulty,
      tags: override.tags || [category.split("-")[0], "core"],
      qualityLevel,
      relatedTerms: override.relatedTerms || relatedFor(slug, category, allSlugs, allByCategory),
      learningPath: override.learningPath || pathFor(slug, category, allByCategory),
      updatedAt: "2026-05-22",
      zh,
      en,
    };
  });
  writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(`Wrote ${out.length} terms to ${OUT}`);
}
main();
