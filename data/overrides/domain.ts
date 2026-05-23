import type { TermOverride } from "./_types";

export const domain: TermOverride = {
  tags: ["deployment", "web", "core"],
  relatedTerms: ["vercel", "ssl", "dns", "deployment", "netlify"],
  learningPath: ["deployment", "domain", "dns", "ssl", "vercel"],
  zh: {
    oneLiner: "Domain（域名）是你网站的"门牌号"——例如 google.com、apple.com。",
    whatItLooksLike: `域名结构：
  app . example . com
   ↑      ↑       ↑
 子域名  主域名  顶级域

买域名：
- Namecheap / Cloudflare Registrar / 阿里云
- .com 约 100 元/年
- .ai 约 700 元/年

绑到 Vercel：
1. Vercel 后台加自定义域名
2. 域名商后台配 DNS（CNAME 或 A 记录）
3. 等几分钟生效`,
    analogy: "网站的"门牌号"。没有的话用户只能记 IP 地址（172.66.43.21）——不可能。有了门牌号，用户输 google.com 就能找到你。",
    beginnerExplanation: "域名是你产品在互联网上的"地址"。要让用户能找到你，必须有一个好记的域名。",
    whatYouCanDo: [
      "买一个 .com / .ai / .io",
      "绑定到部署平台（Vercel/Netlify）",
      "配子域名（blog.your-site.com）",
      "设邮箱（hello@your-site.com）",
    ],
    whyItMatters: "默认部署给的 .vercel.app 不专业。买个自己的域名 = 品牌的第一步。",
    vibeCodingUsage: "Cursor / Claude Code 做完项目部署到 Vercel 后，下一步就是绑域名。它们能告诉你配 DNS 的具体步骤。",
    quickStart: [
      "去 Cloudflare 或 Namecheap 搜你想要的域名",
      "买下来（推荐 .com）",
      "在 Vercel 添加域名，按提示改 DNS",
    ],
    commonMisunderstandings: [
      "域名和网站托管是两回事——分别要买/配",
      "便宜的奇怪后缀（.xyz / .top）SEO 一般",
      "DNS 改了不是立刻生效，可能要几小时到 48 小时",
    ],
    technicalExplanation: "Domain 是 DNS 系统中的命名节点。结构：顶级域（TLD）+ 主域 + 子域。配置常用记录：A（IP）、CNAME（别名）、MX（邮件）、TXT（验证）。",
    promptExample: "请解释域名是什么，给一个具体步骤清单"如何把自己买的 .com 域名绑到 Vercel 部署上"。",
  },
  en: {
    oneLiner: "A domain is your site's street address — like google.com or apple.com.",
    whatItLooksLike: `Domain anatomy:
  app . example . com
   ↑      ↑       ↑
 sub    main    TLD

Buy:
- Namecheap / Cloudflare Registrar / GoDaddy
- .com ~ $12/year
- .ai ~ $90/year

Bind to Vercel:
1. Add domain in Vercel
2. Update DNS at registrar (CNAME or A)
3. Wait minutes to hours`,
    analogy: "Without it, users would memorize IPs (172.66.43.21) — impossible. With it, they type google.com.",
    beginnerExplanation: "A domain is your product's address on the internet. Memorable name = users can find you.",
    whatYouCanDo: [
      "Buy a .com / .ai / .io",
      "Bind to a deploy platform (Vercel/Netlify)",
      "Set subdomains (blog.your-site.com)",
      "Configure email (hello@your-site.com)",
    ],
    whyItMatters: "Default .vercel.app domains aren't professional. Buying your own = step one of branding.",
    vibeCodingUsage: "After Cursor / Claude Code deploys to Vercel, next is the domain. They can walk you through DNS setup.",
    quickStart: [
      "Search on Cloudflare or Namecheap",
      "Buy one (.com recommended)",
      "Add domain in Vercel, follow DNS prompts",
    ],
    commonMisunderstandings: [
      "Domains and hosting are separate purchases",
      "Cheap weird TLDs (.xyz / .top) hurt SEO",
      "DNS changes can take minutes to 48 hours",
    ],
    technicalExplanation: "A domain is a DNS node. Anatomy: TLD + main + sub. Common records: A (IP), CNAME (alias), MX (mail), TXT (verification).",
    promptExample: "Explain domains and give a step-by-step for binding a purchased .com to a Vercel deployment.",
  },
};
