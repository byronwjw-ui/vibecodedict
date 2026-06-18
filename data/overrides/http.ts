import type { TermOverride } from "./_types";

export const http: TermOverride = {
  tags: ["web", "network", "core"],
  relatedTerms: ["api", "json", "rest-api", "ssl", "webhook"],
  learningPath: ["http", "api", "json", "rest-api", "ssl"],
  zh: {
    oneLiner: "HTTP 是浏览器和服务器之间"说话的规矩"——所有网页和 API 都用它。",
    whatItLooksLike: `浏览器请求：
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer sk-xxx

服务器响应：
HTTP/1.1 200 OK
Content-Type: application/json

{ "users": [...] }

常见状态码：
200 成功 | 401 未登录 | 404 找不到 | 500 服务器崩了`,
    analogy: "像快递。你寄个包裹（请求），上面写收件人和内容；收到回件（响应），上面标着"已签收"或"地址错误"。",
    beginnerExplanation: "HTTP 是网络上最常用的协议。每次你打开网页、刷新、点按钮，背后都在发 HTTP 请求。",
    whatYouCanDo: [
      "知道 GET / POST / PUT / DELETE 的区别",
      "看懂 404 / 500 是谁的锅",
      "用 curl 或 Postman 测 API",
      "理解 https 比 http 多了"加密"",
    ],
    whyItMatters: "Vibe Coding 时调 API、看报错、做接口，全都绕不开 HTTP。看懂状态码 = 排查问题快一倍。",
    vibeCodingUsage: "AI 写的代码大量出现 fetch、axios、HTTP 请求。错误也大多是 HTTP 错误——你要知道 401 vs 403 vs 500 各代表什么。",
    quickStart: [
      "在浏览器开发者工具的 Network 面板，看页面发了哪些请求",
      "学 4 个动词：GET 读、POST 创建、PUT 改、DELETE 删",
      "记 4 个状态码：200 / 401 / 404 / 500",
    ],
    commonMisunderstandings: [
      "HTTP 和 HTTPS 不是两个协议，HTTPS 就是加了 SSL 加密的 HTTP",
      "POST 不一定是"创建"，开发里常被滥用",
      "404 不一定是 bug——也可能是你拼错了 URL",
    ],
    technicalExplanation: "HTTP（HyperText Transfer Protocol）是基于 TCP 的应用层无状态协议。当前主流 HTTP/1.1、HTTP/2、HTTP/3。包含方法、状态码、Header、Body 四部分。",
    promptExample: "请解释 HTTP 是什么，列出 4 个最常用的 HTTP 方法和 4 个最常见的状态码，每个用一句话说明。",
  },
  en: {
    oneLiner: "HTTP is the rule book for how browsers and servers talk — every web page and API uses it.",
    whatItLooksLike: `Request:
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer sk-xxx

Response:
HTTP/1.1 200 OK
Content-Type: application/json

{ "users": [...] }

Status codes:
200 OK | 401 auth needed | 404 not found | 500 server error`,
    analogy: "Like shipping. You send a package (request) with recipient and contents; you get a receipt back (response) saying 'delivered' or 'address wrong'.",
    beginnerExplanation: "HTTP is the most-used protocol on the web. Every page open, refresh, or button click sends HTTP requests.",
    whatYouCanDo: [
      "Know GET / POST / PUT / DELETE",
      "Diagnose 404 vs 500",
      "Test APIs with curl or Postman",
      "Understand HTTPS = HTTP + encryption",
    ],
    whyItMatters: "Vibe Coding requires understanding API calls and errors. Knowing status codes makes debugging 2x faster.",
    vibeCodingUsage: "AI-generated code is full of fetch, axios, and HTTP. Errors are often HTTP errors — you need to know 401 vs 403 vs 500.",
    quickStart: [
      "Open DevTools → Network tab, watch what requests fire",
      "Learn 4 verbs: GET / POST / PUT / DELETE",
      "Memorize 4 codes: 200 / 401 / 404 / 500",
    ],
    commonMisunderstandings: [
      "HTTP and HTTPS are not two protocols — HTTPS is HTTP + SSL",
      "POST is not always 'create' — devs often misuse it",
      "404 is not always a bug — maybe you typed the URL wrong",
    ],
    technicalExplanation: "HTTP (HyperText Transfer Protocol) is a stateless application-layer protocol over TCP. Modern: HTTP/1.1, /2, /3. Parts: method, status, headers, body.",
    promptExample: "Explain HTTP, list the 4 most common verbs and status codes with one-line definitions each.",
  },
};
