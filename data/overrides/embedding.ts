import type { TermOverride } from "./_types";

export const embedding: TermOverride = {
  tags: ["ai", "embedding", "rag", "core"],
  relatedTerms: ["rag", "vector-database", "llm", "semantic-search", "similarity"],
  learningPath: ["llm", "embedding", "vector-database", "rag", "semantic-search"],
  zh: {
    oneLiner: "把文字、图片转换成一串数字（向量），让机器能计算"相似度"。",
    whatItLooksLike: `"猫"     → [0.21, -0.43, 0.88, ..., 0.05]  (1536 维)
"狗"     → [0.19, -0.41, 0.85, ..., 0.07]
"汽车"   → [-0.55, 0.12, -0.33, ..., 0.91]

"猫"和"狗"的向量很近 → 它们语义相似
"猫"和"汽车"的向量很远 → 不相似`,
    analogy: "把每个词、每段话变成空间里的一个"坐标点"。意思相近的词，坐标也相近。",
    beginnerExplanation: "Embedding 是 AI 理解语义的基础。所有"语义搜索"、"推荐"、"RAG"背后都用它。",
    whatYouCanDo: [
      "做语义搜索（不是关键词匹配）",
      "RAG 找相关文档",
      "推荐系统",
      "文本分类、聚类",
      "去重相似内容",
    ],
    whyItMatters: "没有 embedding 就没有 RAG，没有现代搜索，没有 AI 客服系统。它是把"文字"变成"AI 能算的数字"的桥梁。",
    vibeCodingUsage: "做 AI 知识库、做语义搜索功能时，你会调用 embedding API（OpenAI、Cohere、本地模型）把内容转向量，存进向量数据库。",
    quickStart: [
      "调一次 OpenAI 的 text-embedding-3-small API",
      "看看返回的向量长什么样",
      "对比两个相似句子和两个不相似句子的"距离"",
    ],
    commonMisunderstandings: [
      "embedding 模型 ≠ chat 模型，它不会回话",
      "向量维度不是越高越好，要看效果",
      "中英文混排时要选支持多语言的 embedding 模型",
    ],
    technicalExplanation: "Embedding 是把离散数据（文本、图像等）映射为稠密向量的过程。常用模型有 OpenAI text-embedding-3、Cohere embed、BGE、E5。相似度通常用 cosine similarity。",
    promptExample: "请解释 embedding 是什么，用一个具体例子说明"语义相近"怎么变成"向量距离近"。",
  },
  en: {
    oneLiner: "Turn text or images into numbers (vectors) so machines can compute similarity.",
    whatItLooksLike: `"cat"   → [0.21, -0.43, 0.88, ..., 0.05]  (1536-dim)
"dog"   → [0.19, -0.41, 0.85, ..., 0.07]
"car"   → [-0.55, 0.12, -0.33, ..., 0.91]

"cat" and "dog" vectors are close → similar meaning
"cat" and "car" are far → not similar`,
    analogy: "Turn every word into a point in space. Words with similar meaning live close together.",
    beginnerExplanation: "Embeddings are how AI understands meaning. Semantic search, recommendation, and RAG all depend on them.",
    whatYouCanDo: [
      "Semantic search (not keyword)",
      "Find relevant docs for RAG",
      "Recommendation systems",
      "Classification and clustering",
      "Deduplication of similar content",
    ],
    whyItMatters: "No embeddings, no RAG, no modern search, no AI support systems. They bridge 'text' to 'numbers AI can compute'.",
    vibeCodingUsage: "Building AI knowledge bases or semantic search, you'll call an embedding API (OpenAI, Cohere, local) and store vectors in a vector DB.",
    quickStart: [
      "Call OpenAI's text-embedding-3-small once",
      "See what the vector looks like",
      "Compare distances between similar vs dissimilar sentences",
    ],
    commonMisunderstandings: [
      "Embedding models are not chat models — they do not talk",
      "Higher dimensions are not always better",
      "For multilingual content, pick a multilingual embedding model",
    ],
    technicalExplanation: "Embedding maps discrete data (text, images) into dense vectors. Popular models: OpenAI text-embedding-3, Cohere embed, BGE, E5. Similarity is usually cosine.",
    promptExample: "Explain embeddings with a concrete example of how 'semantic similarity' becomes 'vector closeness'.",
  },
};
