import type { TermOverride } from "./_types";

export const css: TermOverride = {
  tags: ["web", "frontend", "core"],
  relatedTerms: ["html", "javascript", "frontend", "tailwind", "framework"],
  learningPath: ["html", "css", "javascript", "tailwind", "frontend"],
  zh: {
    oneLiner: "CSS 是给网页"上妆"的语言——颜色、字体、布局都靠它。",
    whatItLooksLike: `HTML（光秃秃）:
<h1>Hello</h1>
<button>Click</button>

加上 CSS:
h1 { color: purple; font-size: 48px; }
button { 
  background: black; 
  color: white; 
  padding: 12px 24px;
  border-radius: 8px;
}

→ 标题变紫色大字，按钮变黑底白字圆角`,
    analogy: "如果 HTML 是房子结构，CSS 就是装修——刷墙、铺地板、挑家具风格。",
    beginnerExplanation: "CSS（Cascading Style Sheets）告诉浏览器：什么元素长什么样。颜色、大小、位置、动画，全靠 CSS。",
    whatYouCanDo: [
      "设颜色、字体、大小",
      "做响应式布局（手机/电脑自适应）",
      "动画和过渡效果",
      "暗色模式",
    ],
    whyItMatters: "好的 CSS 决定网页"好不好看"和"好不好用"。同一个 HTML 套不同 CSS 能变成完全不同的产品。",
    vibeCodingUsage: "现代 Vibe Coding 里 99% 用 Tailwind CSS——直接在 HTML 标签里写 class，不用单独 CSS 文件。",
    quickStart: [
      "在 HTML 里加 <style> 标签",
      "写几个简单规则改字色和大小",
      "试试 Tailwind Playground 体验最快方式",
    ],
    commonMisunderstandings: [
      "CSS 不是编程语言——是样式描述",
      "不同浏览器对 CSS 支持有差异（罕见但存在）",
      "CSS 顺序和优先级很有讲究，新手常被"为啥没生效"卡住",
    ],
    technicalExplanation: "CSS（Cascading Style Sheets）通过选择器匹配 HTML 元素并应用样式规则。当前主流是 CSS3，支持 Flexbox、Grid、变量、动画、嵌套等特性。",
    promptExample: "请解释 CSS 是什么，给一个简单例子展示同一个按钮的"无 CSS"和"加了 CSS"两种样子。",
  },
  en: {
    oneLiner: "CSS is the makeup language for the web — colors, fonts, layout.",
    whatItLooksLike: `HTML (plain):
<h1>Hello</h1>
<button>Click</button>

With CSS:
h1 { color: purple; font-size: 48px; }
button {
  background: black;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}

→ Purple bold title, black rounded button`,
    analogy: "HTML is the structure, CSS is the interior design — paint, floors, furniture.",
    beginnerExplanation: "CSS (Cascading Style Sheets) tells the browser how things look. Colors, sizes, positions, animations.",
    whatYouCanDo: [
      "Set colors, fonts, sizes",
      "Responsive layouts (mobile + desktop)",
      "Animations and transitions",
      "Dark mode",
    ],
    whyItMatters: "Good CSS decides whether a site looks and feels right. Same HTML + different CSS = different product.",
    vibeCodingUsage: "Modern Vibe Coding is 99% Tailwind CSS — write classes directly in HTML, no separate CSS files.",
    quickStart: [
      "Add a <style> tag to HTML",
      "Write a few rules for color and size",
      "Try Tailwind Playground for the fastest workflow",
    ],
    commonMisunderstandings: [
      "CSS is not a programming language — style description",
      "Browsers differ on CSS support (rare but real)",
      "Specificity and order rules trip up beginners",
    ],
    technicalExplanation: "CSS matches HTML via selectors and applies style rules. CSS3 brings Flexbox, Grid, variables, animations, and nesting.",
    promptExample: "Explain CSS, show a simple example with and without CSS for the same button.",
  },
};
