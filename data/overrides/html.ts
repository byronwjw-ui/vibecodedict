import type { TermOverride } from "./_types";

export const html: TermOverride = {
  tags: ["web", "frontend", "core"],
  relatedTerms: ["css", "javascript", "frontend", "http", "framework"],
  learningPath: ["html", "css", "javascript", "frontend", "framework"],
  zh: {
    oneLiner: "HTML 是描述网页"骨架"的语言——一切网页的基础。",
    whatItLooksLike: `<!DOCTYPE html>
<html>
  <head>
    <title>我的网页</title>
  </head>
  <body>
    <h1>欢迎</h1>
    <p>这是一段文字。</p>
    <button>点我</button>
  </body>
</html>

→ 浏览器打开就能看到标题、段落、按钮`,
    analogy: "HTML 是房子的"承重墙和户型图"——决定房间数、门窗位置。CSS 是装修，JS 是电器和家具。",
    beginnerExplanation: "HTML 用一对对"标签"（如 <h1>、<p>、<button>）告诉浏览器：这里是标题，这里是段落，这里是按钮。",
    whatYouCanDo: [
      "做静态网页（不需要后端）",
      "结构化任何文档内容",
      "嵌入图片、视频、链接",
      "创建表单收集数据",
    ],
    whyItMatters: "所有 Web 都从 HTML 开始。哪怕 AI 帮你生成的也是 HTML。看不懂 HTML，就看不懂 AI 给你做了什么。",
    vibeCodingUsage: "v0 / Cursor / Claude Code 输出的网页代码本质都是 HTML（或 HTML + React 包装）。能看懂结构 = 能改。",
    quickStart: [
      "新建一个 index.html 文件",
      "复制上面那段代码进去",
      "双击文件用浏览器打开",
    ],
    commonMisunderstandings: [
      "HTML 不是编程语言——是标记语言，没有逻辑",
      "标签必须闭合（如 <p>...</p>），少一个就报错",
      "HTML 不能直接做出"动态"效果，那是 JavaScript 的活",
    ],
    technicalExplanation: "HTML（HyperText Markup Language）是 W3C 标准的标记语言，用嵌套标签构建 DOM 树。当前主流版本是 HTML5，包含语义化标签和多媒体支持。",
    promptExample: "请用最简单的方式解释 HTML 是什么，并给出一个包含标题、段落、按钮和图片的最小 HTML 例子。",
  },
  en: {
    oneLiner: "HTML is the language for the skeleton of a web page — the foundation of the web.",
    whatItLooksLike: `<!DOCTYPE html>
<html>
  <head>
    <title>My page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
    <button>Click me</button>
  </body>
</html>

→ Open in a browser to see title, paragraph, button`,
    analogy: "HTML is a house's structural walls and floor plan. CSS is decor, JS is the appliances.",
    beginnerExplanation: "HTML uses paired 'tags' (like <h1>, <p>, <button>) to tell the browser: this is a heading, this is a paragraph, this is a button.",
    whatYouCanDo: [
      "Build static web pages (no backend)",
      "Structure any document",
      "Embed images, videos, links",
      "Create forms",
    ],
    whyItMatters: "Every website starts with HTML. AI's output is also HTML. Can't read HTML, can't see what AI built.",
    vibeCodingUsage: "v0 / Cursor / Claude Code output is HTML (or HTML wrapped in React). Read structure → you can change it.",
    quickStart: [
      "Create index.html",
      "Paste the example above",
      "Double-click to open in a browser",
    ],
    commonMisunderstandings: [
      "HTML is not a programming language — it's markup, no logic",
      "Tags must close (<p>...</p>) — missing one breaks layout",
      "HTML can't do 'dynamic' on its own — that's JavaScript",
    ],
    technicalExplanation: "HTML (HyperText Markup Language) is a W3C-standard markup language. Nested tags form the DOM tree. HTML5 adds semantic tags and multimedia.",
    promptExample: "Explain HTML simply and give a minimal example with a heading, paragraph, button, and image.",
  },
};
