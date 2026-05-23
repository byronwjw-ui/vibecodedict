import type { TermOverride } from "./_types";

export const hallucination: TermOverride = {
  tags: ["ai", "llm", "core"],
  relatedTerms: ["llm", "rag", "prompt", "fine-tuning", "context-window"],
  learningPath: ["llm", "hallucination", "rag", "prompt", "fine-tuning"],
  zh: {
    oneLiner: "AI 一本正经地胡说八道——编造事实但说得很自信。",
    whatItLooksLike: `用户："React 的 useNuclear hook 怎么用？"

GPT 回答（幻觉）：
"useNuclear 是 React 18 新增的 hook，
用于管理核心状态。基本用法：
const [state] = useNuclear(initialValue);
..."

(其实根本没有这个 hook)`,
    analogy: "像一个怕被罚的实习生——不知道答案也不说，编一个听起来对的糊弄过去。",
    beginnerExplanation: "Hallucination 是 LLM 的核心缺陷。它不"知道"自己不知道，所以会编。编得还特别像真的。",
    whatYouCanDo: [
      "用 RAG 让 AI 基于真实文档作答",
      "Prompt 里加"不知道就说不知道"",
      "对关键事实手动 google 核实",
      "用最新模型（一般幻觉率更低）",
    ],
    whyItMatters: "幻觉是 AI 产品落地最大障碍。客服编规则、医生编药、律师编案例——都是真事故。",
    vibeCodingUsage: "AI 写代码也会幻觉——编不存在的库、不存在的 API、过时的语法。**永远要跑一遍** 再相信。",
    quickStart: [
      "问一个生僻问题，看 AI 怎么编",
      "用同样问题问几个模型，对比",
      "Prompt 加一句"不确定就说不知道"，看效果",
    ],
    commonMisunderstandings: [
      "幻觉不是 bug，是 LLM 的本质——它在做概率预测，不是查事实",
      "幻觉率越来越低但永远不会归零",
      "RAG 能缓解但不能根除",
    ],
    technicalExplanation: "Hallucination 指 LLM 生成的内容缺乏事实依据。原因：训练数据噪声、概率采样的本质、缺少 grounding。缓解方式：RAG、Chain-of-thought、Self-consistency、Fine-tuning、Tool use。",
    promptExample: "请解释 LLM 幻觉是什么，举一个具体例子，并给出 3 种减少幻觉的实用方法。",
  },
  en: {
    oneLiner: "AI confidently makes things up — sounds authoritative, totally wrong.",
    whatItLooksLike: `User: "How do I use React's useNuclear hook?"

GPT (hallucination):
"useNuclear is a new hook in React 18,
used for managing core state. Usage:
const [state] = useNuclear(initialValue);
..."

(That hook does not exist)`,
    analogy: "Like an intern afraid of getting in trouble — doesn't know, makes up something plausible.",
    beginnerExplanation: "Hallucination is LLM's core flaw. It doesn't 'know' what it doesn't know, so it invents — convincingly.",
    whatYouCanDo: [
      "Use RAG to ground answers in real docs",
      "Add 'say I don't know if unsure' to prompts",
      "Manually verify key facts",
      "Use newer models (lower hallucination rate)",
    ],
    whyItMatters: "Hallucination is the #1 barrier for AI in production. Bots inventing policies, doctors inventing meds, lawyers inventing cases — all real incidents.",
    vibeCodingUsage: "AI code also hallucinates — fake libraries, fake APIs, outdated syntax. **Always run it** before trusting it.",
    quickStart: [
      "Ask an obscure question, watch it invent",
      "Ask the same question across models",
      "Add 'say I don't know if unsure' — observe the change",
    ],
    commonMisunderstandings: [
      "Not a bug — it's the nature of probabilistic prediction",
      "Rates keep dropping but will never be zero",
      "RAG helps but doesn't eliminate it",
    ],
    technicalExplanation: "Hallucination is unfounded LLM output. Causes: noisy training data, probabilistic sampling, lack of grounding. Mitigations: RAG, chain-of-thought, self-consistency, fine-tuning, tool use.",
    promptExample: "Explain LLM hallucination, give a concrete example, and list 3 practical ways to reduce it.",
  },
};
