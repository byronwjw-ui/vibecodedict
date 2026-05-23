import type { TermOverride } from "./_types";

export const ssl: TermOverride = {
  tags: ["security", "web", "deployment"],
  relatedTerms: ["http", "domain", "vercel", "deployment", "security"],
  learningPath: ["http", "ssl", "domain", "deployment", "vercel"],
  zh: {
    oneLiner: "让网站加上"加密锁"的技术——浏览器地址栏那个 🔒 就是 SSL 给的。",
    whatItLooksLike: `http://example.com   ← 不安全 ⚠️
                       (中间人可看到所有数据)

https://example.com  ← 加密 🔒
                       (传输内容只有你和服务器能解)

证书来源：
- Let's Encrypt（免费）
- Vercel / Netlify（自动配）
- 企业版 CA（付费）`,
    analogy: "像快递的"保险箱"。普通快递（HTTP）所有人都能撬开看。SSL 加了锁，只有收件人有钥匙。",
    beginnerExplanation: "SSL（现在叫 TLS）让你和网站之间的对话加密。即使别人在中间窃听，也只看到一堆乱码。",
    whatYouCanDo: [
      "保护用户数据（密码、信用卡）",
      "让浏览器不显示"不安全"警告",
      "提升 SEO（Google 偏好 HTTPS）",
      "用 Service Worker、地理定位等现代 API",
    ],
    whyItMatters: "没 SSL 的网站浏览器会标红"不安全"，用户立刻跑。SEO 也会被惩罚。现在 HTTPS 是必须。",
    vibeCodingUsage: "Vercel / Netlify 部署默认自动配 SSL，你不用管。绑定自定义域名后也是自动续期，**Vibe Coding 时代 SSL 几乎隐形了**。",
    quickStart: [
      "用 Vercel/Netlify 部署，SSL 自动开",
      "看浏览器地址栏的 🔒 确认生效",
      "自己服务器的话用 Certbot + Let's Encrypt",
    ],
    commonMisunderstandings: [
      "SSL 不等于"网站安全"——它只加密传输，不保证后端无漏洞",
      "证书过期网站会"中毒"，但 Vercel 自动续期不用担心",
      "免费证书和付费证书在加密强度上一样，只是品牌背书不同",
    ],
    technicalExplanation: "SSL/TLS（Transport Layer Security）通过非对称加密握手 + 对称加密通信保护数据。当前主流 TLS 1.3。证书由 CA 签发，浏览器内置 CA 列表。",
    promptExample: "请解释 HTTPS / SSL 的作用，并对比"在咖啡店连公共 WiFi 登录"时 HTTP 和 HTTPS 的风险差别。",
  },
  en: {
    oneLiner: "The tech that adds the 🔒 padlock — encrypts traffic between browser and site.",
    whatItLooksLike: `http://example.com   ← unsafe ⚠️
                       (anyone in between sees everything)

https://example.com  ← encrypted 🔒
                       (only you and the server can decrypt)

Certificate sources:
- Let's Encrypt (free)
- Vercel / Netlify (auto)
- Commercial CAs (paid)`,
    analogy: "Like a lockbox for shipping. Plain HTTP — anyone can open and peek. SSL adds the lock, only the recipient has the key.",
    beginnerExplanation: "SSL (now TLS) encrypts the conversation between you and a site. Eavesdroppers see gibberish.",
    whatYouCanDo: [
      "Protect user data (passwords, cards)",
      "Avoid the browser 'not secure' warning",
      "Boost SEO (Google prefers HTTPS)",
      "Use modern APIs (Service Worker, geolocation)",
    ],
    whyItMatters: "Without SSL, browsers flag your site as unsafe — users bounce, SEO penalizes. HTTPS is mandatory now.",
    vibeCodingUsage: "Vercel / Netlify auto-provision SSL. Even after custom domain binding, renewals are automatic — SSL is invisible in Vibe Coding.",
    quickStart: [
      "Deploy to Vercel/Netlify — SSL is auto",
      "Check the 🔒 in your address bar",
      "Self-hosted? Use Certbot + Let's Encrypt",
    ],
    commonMisunderstandings: [
      "SSL is not full 'site safety' — only encrypts transit",
      "Expired certs poison sites — but Vercel auto-renews",
      "Free and paid certs have the same encryption strength",
    ],
    technicalExplanation: "SSL/TLS uses asymmetric handshake + symmetric encryption. Modern: TLS 1.3. Certificates issued by CAs; browsers ship a CA list.",
    promptExample: "Explain HTTPS / SSL — compare the risks of HTTP vs HTTPS when logging in over public coffee-shop WiFi.",
  },
};
