import type { TermOverride } from "./_types";

export const rag: TermOverride = {
  tags: ["ai", "rag", "retrieval", "core"],
  relatedTerms: ["llm", "embedding", "vector-database", "context-window", "prompt"],
  learningPath: ["llm", "embedding", "rag", "vector-database", "context-window"],
  zh: {
    oneLiner: "让 AI 先查资料再回答，避免胡说八道的技术。",
    whatItLooksLike: `用户问："公司请假流程是什么？"

普通 LLM：[瞎猜，因为没见过你公司文档]

RAG 流程：
1. 把问题转成向量
2. 去公司文档库搜相关段落
3. 把段落 + 问题一起发给 LLM
4. LLM 基于真实文档作答`,
    analogy: "普通 LLM 像凭记忆答题。RAG 像开卷考试——先翻书找答案，再写。",
    beginnerExplanation: "RAG = Retrieval-Augmented Generation。让 AI 先从你的资料库里"检索"相关内容，再"生成"回答，准确度大幅提升。",
    whatYouCanDo: [
      "做公司内部文档问答机器人",
      "让 AI 基于你的笔记/书籍回答问题",
      "给客服系统接入产品手册",
      "减少 AI 幻觉",
    ],
    whyItMatters: "LLM 训练数据有时间截止 + 不知道你的私有信息。RAG 解决了这两个问题，是企业 AI 应用最常见的方案。",
    vibeCodingUsage: "做"AI 客服"、"AI 知识库"、"读论文助手"这类应用，本质都是 RAG。Cursor 的 codebase 索引也是 RAG。",
    quickStart: [
      "把文档切成小段（chunking）",
      "用 embedding 把每段转成向量存进向量数据库",
      "用户提问时检索 → 拼上下文 → 给 LLM",
    ],
    commonMisunderstandings: [
      "以为 RAG 是模型——它是一种"用法"，跟模型无关",
      "切块大小很关键，太大太小都不准",
      "RAG 不等于"上传 PDF 让 GPT 看"，背后流程复杂得多",
    ],
    technicalExplanation: "RAG（Retrieval-Augmented Generation）是 2020 年 Facebook 提出的范式。流程：文档分块 → embedding → 存向量库 → 查询时检索 Top-K → 拼入 prompt → LLM 生成。",
    promptExample: "解释 RAG 的原理，画一个流程图，并说明跟"直接把整本书塞进 LLM"有什么区别。",
  },
  en: {
    oneLiner: "Make AI look things up before answering — so it stops making stuff up.",
    whatItLooksLike: `User: "What is the leave policy?"

Plain LLM: [makes up, never saw your docs]

RAG flow:
1. Turn question into a vector
2. Search your docs for relevant chunks
3. Send chunks + question to the LLM
4. LLM answers grounded in real docs`,
    analogy: "Plain LLM is a closed-book exam. RAG is open-book — flip to the right page first, then write.",
    beginnerExplanation: "RAG = Retrieval-Augmented Generation. AI retrieves relevant content from your data first, then generates an answer — accuracy improves dramatically.",
    whatYouCanDo: [
      "Internal docs Q&A bot",
      "Personal notes / books assistant",
      "Customer support with product docs",
      "Reduce hallucinations",
    ],
    whyItMatters: "LLM training data has a cutoff and does not know your private info. RAG solves both — the most common enterprise AI pattern.",
    vibeCodingUsage: "AI customer support, AI knowledge bases, paper-reading helpers — all RAG. Cursor's codebase indexing is RAG too.",
    quickStart: [
      "Chunk your docs into small pieces",
      "Embed each chunk into vectors and store in a vector DB",
      "On query: retrieve → assemble context → call LLM",
    ],
    commonMisunderstandings: [
      "RAG is not a model — it is a usage pattern, model-agnostic",
      "Chunk size matters — too big or too small both hurt",
      "RAG is not 'upload a PDF to GPT' — the pipeline is more complex",
    ],
    technicalExplanation: "RAG (Retrieval-Augmented Generation) was proposed by Facebook in 2020. Pipeline: doc chunking → embedding → vector store → top-K retrieval at query time → prompt augmentation → LLM generation.",
    promptExample: "Explain RAG, draw the flow, and contrast it with 'stuffing an entire book into the LLM context'.",
  },
};
