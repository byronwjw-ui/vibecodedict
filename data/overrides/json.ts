import type { TermOverride } from "./_types";

export const json: TermOverride = {
  tags: ["web", "data", "core"],
  relatedTerms: ["api", "http", "javascript", "yaml", "xml"],
  learningPath: ["json", "api", "http", "javascript", "yaml"],
  zh: {
    oneLiner: "一种像 Excel 表一样的"数据格式"——人能看懂，机器能直接读。",
    whatItLooksLike: `{
  "name": "张三",
  "age": 28,
  "skills": ["JavaScript", "React"],
  "address": {
    "city": "上海",
    "zip": "200000"
  }
}

→ 大括号 = 对象（一组键值对）
→ 中括号 = 数组（列表）
→ 字符串要用双引号包起来`,
    analogy: "像超级清晰的"数据便签"。你能看懂，AI 能看懂，浏览器和服务器都能看懂——所以大家用它互相传数据。",
    beginnerExplanation: "JSON 就是一种约定好的写数据的格式。一个 .json 文件能存配置、能存用户信息、能存任何结构化数据。",
    whatYouCanDo: [
      "做配置文件（package.json、tsconfig.json）",
      "API 返回数据的标准格式",
      "存用户偏好、应用状态",
      "和别的系统交换数据",
    ],
    whyItMatters: "做 Vibe Coding 你会**每天**见到 JSON。API 返回是它、配置文件是它、AI 返回结构化数据也是它。",
    vibeCodingUsage: "Claude Code 给你装包后会改 package.json（JSON 文件）。让 AI 返回结构化结果时，你会要求它用 JSON 格式。",
    quickStart: [
      "打开你项目根目录的 package.json，看看长啥样",
      "去 jsonlint.com 粘段 JSON 测试格式对不对",
      "让 AI 把"姓名/年龄/技能"输出成 JSON 试一下",
    ],
    commonMisunderstandings: [
      "字符串必须用双引号 \"，不能用单引号 '",
      "最后一个元素后面不能加逗号（严格 JSON）",
      "不支持注释——要写说明用 YAML 或 JSON5",
    ],
    technicalExplanation: "JSON（JavaScript Object Notation）是基于 JS 对象字面量语法的轻量级数据交换格式，ECMA-404 标准。支持的类型：对象、数组、字符串、数字、布尔、null。",
    promptExample: "请用一个具体例子解释 JSON 是什么，对比"用纯文字描述用户信息"和"用 JSON 描述用户信息"的区别。",
  },
  en: {
    oneLiner: "A spreadsheet-like data format — humans can read it, machines can use it directly.",
    whatItLooksLike: `{
  "name": "Alice",
  "age": 28,
  "skills": ["JavaScript", "React"],
  "address": {
    "city": "Shanghai",
    "zip": "200000"
  }
}

→ Braces = object (key-value pairs)
→ Brackets = array (list)
→ Strings must use double quotes`,
    analogy: "Like an ultra-clear data sticky note. You can read it, AI can read it, browsers and servers can read it — that's why everyone uses it.",
    beginnerExplanation: "JSON is just an agreed-upon way to write data. A .json file holds configs, user data, or any structured data.",
    whatYouCanDo: [
      "Config files (package.json, tsconfig.json)",
      "Standard API response format",
      "Store user preferences and app state",
      "Exchange data between systems",
    ],
    whyItMatters: "In Vibe Coding you'll see JSON every day. API responses, config files, structured AI output — all JSON.",
    vibeCodingUsage: "When Claude Code installs packages, it edits package.json. When asking AI for structured output, you'll request JSON.",
    quickStart: [
      "Open your project's package.json",
      "Paste JSON into jsonlint.com to validate",
      "Ask AI to output a 'name/age/skills' record as JSON",
    ],
    commonMisunderstandings: [
      "Strings must use double quotes, not single",
      "No trailing comma allowed (strict JSON)",
      "No comments — use YAML or JSON5 for that",
    ],
    technicalExplanation: "JSON (JavaScript Object Notation) is a lightweight data interchange format based on JS object literal syntax (ECMA-404). Types: object, array, string, number, boolean, null.",
    promptExample: "Explain JSON with a concrete example. Compare 'describing user info in plain text' vs 'in JSON'.",
  },
};
