import type { TermOverride } from "./_types";

export const token: TermOverride = {
  tags: ["ai", "llm", "core"],
  relatedTerms: ["llm", "context-window", "prompt", "embedding", "tokenizer"],
  learningPath: ["llm", "token", "context-window", "prompt", "embedding"],
  zh: {
    oneLiner: "Token 是 LLM 处理文字的最小单位，类似"字片段"。",
    whatItLooksLike: `句子: "ChatGPT 真好用"
拆成 token: ["Chat", "G", "PT", " 真", "好", "用"]
共 6 个 token

英文："Hello world"
拆成: ["Hello", " world"]
共 2 个 token

经验：1 个英文单词 ≈ 1-2 token，1 个汉字 ≈ 1-2 token`,
    analogy: "LLM 看世界不是按"字"，是按"token"。就像我们看英文按单词、看中文按词组——它有自己的切分方式。",
    beginnerExplanation: "你跟 AI 的对话，会先被拆成 token 再喂给模型。计费、长度限制、速度，全都按 token 算。",
    whatYouCanDo: [
      "知道 1000 token ≈ 750 英文单词 ≈ 500 中文字",
      "用 tiktoken 工具估算 token 数",
      "理解为什么 prompt 太长会报错（超 context window）",
      "理解 API 计费",
    ],
    whyItMatters: "API 按 token 收费。理解 token 才能控制成本——一次错误的长 prompt 可能比正常贵 10 倍。",
    vibeCodingUsage: "Claude Code 跑久了卡顿/变贵，通常是因为 context 里 token 堆积。学会"清上下文"是省钱关键。",
    quickStart: [
      "去 platform.openai.com/tokenizer 玩一下",
      "把你常用的 prompt 粘进去，看占多少 token",
      "查一下 Claude / GPT 的单价",
    ],
    commonMisunderstandings: [
      "1 个字 = 1 token？不对，中英文都不一定",
      "token 不是单词——可能是字片段、标点、空格",
      "不同模型的 tokenizer 不一样，价格也不一样",
    ],
    technicalExplanation: "Token 是 tokenizer（如 BPE、SentencePiece）切分后的最小单元。LLM 的输入输出都以 token 为单位，模型上下文长度、API 计费都基于 token 数。",
    promptExample: "请解释 token 是什么，举一个中文句子和英文句子的拆分例子，并说说为什么 API 按 token 收费。",
  },
  en: {
    oneLiner: "A token is the smallest unit of text an LLM processes — like a 'word fragment'.",
    whatItLooksLike: `Sentence: "ChatGPT is great"
Tokens: ["Chat", "G", "PT", " is", " great"]
= 5 tokens

Chinese: "我爱编程"
Tokens: ["我", "爱", "编", "程"]
= ~4 tokens

Rule of thumb: 1 word ≈ 1-2 tokens`,
    analogy: "LLMs see the world in tokens, not characters. Like how we read English by words and Chinese by phrases — the model has its own chunking.",
    beginnerExplanation: "Your conversation with AI is first split into tokens, then fed to the model. Pricing, length limits, speed — all in tokens.",
    whatYouCanDo: [
      "Know 1000 tokens ≈ 750 English words",
      "Estimate with tiktoken",
      "Understand why long prompts error (context window)",
      "Understand API billing",
    ],
    whyItMatters: "APIs charge by token. Knowing tokens means controlling cost — one bad long prompt can cost 10x normal.",
    vibeCodingUsage: "Claude Code slowing down or getting expensive usually means token buildup. Learning to clear context is the key to savings.",
    quickStart: [
      "Play with platform.openai.com/tokenizer",
      "Paste your common prompts, see token counts",
      "Look up Claude / GPT pricing",
    ],
    commonMisunderstandings: [
      "1 character = 1 token? No — varies by language",
      "Tokens are not words — can be fragments, punctuation, spaces",
      "Tokenizers differ across models — so does pricing",
    ],
    technicalExplanation: "A token is the smallest unit produced by a tokenizer (BPE, SentencePiece, etc.). LLM I/O is measured in tokens, and context length and API billing are token-based.",
    promptExample: "Explain what a token is, give one Chinese and one English example of tokenization, and say why APIs bill by token.",
  },
};
