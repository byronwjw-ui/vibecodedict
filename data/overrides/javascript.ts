import type { TermOverride } from "./_types";

export const javascript: TermOverride = {
  tags: ["programming", "web", "core"],
  relatedTerms: ["html", "css", "frontend", "framework", "typescript"],
  learningPath: ["html", "css", "javascript", "typescript", "framework"],
  zh: {
    oneLiner: "JavaScript 是让网页"动起来"的编程语言——点击、动画、数据都靠它。",
    whatItLooksLike: `// 点击按钮弹出问候
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('你好！');
});

// 从服务器拿数据
fetch('/api/users')
  .then(res => res.json())
  .then(users => console.log(users));`,
    analogy: "HTML 是骨架，CSS 是皮肤，JavaScript 是肌肉和神经——能动、能反应、能记忆。",
    beginnerExplanation: "JavaScript 让网页变成"应用"。没有它，网页只是文字图片；有了它，能登录、能购物、能聊天。",
    whatYouCanDo: [
      "响应用户点击、输入、滚动",
      "调 API 获取数据",
      "做动画、游戏",
      "用 Node.js 写后端",
      "做手机 App（React Native）",
    ],
    whyItMatters: "JavaScript 是世界上用得最多的编程语言。Web、移动、服务器、桌面、AI 工具——无处不在。",
    vibeCodingUsage: "Cursor / Claude Code 写网页时绝大部分是 JavaScript（或 TypeScript）。React、Next.js、Vue、Node.js 全都基于它。",
    quickStart: [
      "打开浏览器，按 F12 进 Console",
      "输入 alert('hello') 回车",
      "再试试 1 + 1、document.title",
    ],
    commonMisunderstandings: [
      "JavaScript ≠ Java，名字像，完全是两个东西",
      "异步（async/await、Promise）是新手最大坎",
      "前后端通用，但跑的环境不同（浏览器 vs Node.js）",
    ],
    technicalExplanation: "JavaScript 是 ECMAScript 标准实现的动态脚本语言，单线程事件循环，支持函数式、面向对象、原型继承。运行环境包括浏览器、Node.js、Deno、Bun。",
    promptExample: "请解释 JavaScript 是什么，举一个"点击按钮显示问候"的最小例子，并说说它和 Java 的区别。",
  },
  en: {
    oneLiner: "JavaScript is the language that makes web pages alive — clicks, animations, data.",
    whatItLooksLike: `// Greet on button click
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Hi!');
});

// Fetch data
fetch('/api/users')
  .then(res => res.json())
  .then(users => console.log(users));`,
    analogy: "HTML is bones, CSS is skin, JavaScript is muscles and nerves — it moves, reacts, remembers.",
    beginnerExplanation: "JavaScript turns pages into apps. Without it, pages are just text and images. With it: login, shopping, chat.",
    whatYouCanDo: [
      "React to clicks, input, scroll",
      "Fetch data from APIs",
      "Animations and games",
      "Backend with Node.js",
      "Mobile apps via React Native",
    ],
    whyItMatters: "JavaScript is the world's most used language — web, mobile, server, desktop, AI tools, everywhere.",
    vibeCodingUsage: "Cursor / Claude Code mostly write JavaScript (or TypeScript). React, Next.js, Vue, Node.js all run on it.",
    quickStart: [
      "Open the browser, press F12 for Console",
      "Type alert('hello'), press Enter",
      "Try 1 + 1, document.title",
    ],
    commonMisunderstandings: [
      "JavaScript is not Java — completely different languages",
      "Async (async/await, Promise) is the biggest beginner hurdle",
      "Same language, different runtimes (browser vs Node.js)",
    ],
    technicalExplanation: "JavaScript implements ECMAScript — a dynamic, single-threaded scripting language with event loop, supporting functional, OO, and prototype-based styles. Runtimes: browser, Node.js, Deno, Bun.",
    promptExample: "Explain JavaScript, show a minimal 'click button → greet' example, and contrast it with Java.",
  },
};
