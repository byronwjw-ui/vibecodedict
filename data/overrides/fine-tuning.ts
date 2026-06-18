import type { TermOverride } from "./_types";

export const fineTuning: TermOverride = {
  tags: ["ai", "training", "llm"],
  relatedTerms: ["llm", "rag", "prompt", "lora", "training"],
  learningPath: ["llm", "prompt", "rag", "fine-tuning", "lora"],
  zh: {
    oneLiner: "用你自己的数据继续训练一个已有模型，让它学会"你的风格"或"专业知识"。",
    whatItLooksLike: `通用 GPT-4：写邮件 → 普通职场风
       ↓ 用你 1000 封历史邮件 fine-tune
你专属 GPT-4：写邮件 → 跟你说话风格一模一样

训练数据格式：
{"messages": [
  {"role": "user", "content": "..."},
  {"role": "assistant", "content": "..."}
]}`,
    analogy: "Prompt 是临场嘱咐，Fine-tuning 是入职培训。培训过后，员工再也不用每次都嘱咐风格了。",
    beginnerExplanation: "Fine-tuning 让你不用每次都写一大段 prompt 来指挥风格——把风格直接训进模型里。",
    whatYouCanDo: [
      "让模型学会你公司的写作风格",
      "训一个领域专家（医学、法律、客服）",
      "提升某个特定任务的准确率",
      "压缩 prompt 长度，省 token",
    ],
    whyItMatters: "对企业、对深度个性化场景，fine-tuning 比 RAG 更"深"。但成本高，门槛高。",
    vibeCodingUsage: "大部分 Vibe Coding 场景**不需要** fine-tuning，先用好 prompt + RAG。只有当 prompt 已经无法满足时再考虑。",
    quickStart: [
      "准备 100-1000 条高质量训练数据",
      "用 OpenAI / Anthropic / 开源框架（LLaMA-Factory）做训练",
      "评估效果，迭代",
    ],
    commonMisunderstandings: [
      "Fine-tuning ≠ 教模型新知识——它擅长学风格、格式、习惯，不擅长记新事实",
      "数据少了没用——通常需要至少 100 条优质样本",
      "成本远高于 RAG，做之前要算账",
    ],
    technicalExplanation: "Fine-tuning 是在预训练模型基础上，用少量领域数据继续训练，调整权重。常见技术：full fine-tuning、LoRA、QLoRA、SFT、DPO、RLHF。",
    promptExample: "请解释 Fine-tuning 和 RAG 的区别，并说说什么时候该用 fine-tuning，什么时候该用 RAG。",
  },
  en: {
    oneLiner: "Continue training an existing model on your data so it learns your style or domain.",
    whatItLooksLike: `Generic GPT-4: writes emails → corporate
       ↓ fine-tune on 1000 of your emails
Your GPT-4: writes emails → sounds exactly like you

Training data:
{"messages": [
  {"role": "user", "content": "..."},
  {"role": "assistant", "content": "..."}
]}`,
    analogy: "A prompt is a quick reminder. Fine-tuning is onboarding. After onboarding, you never have to repeat the style.",
    beginnerExplanation: "Fine-tuning bakes style or behavior into the model so you don't write the same long prompt every time.",
    whatYouCanDo: [
      "Teach your company's writing style",
      "Train a domain expert (medical, legal, support)",
      "Boost accuracy on a specific task",
      "Shrink prompts and save tokens",
    ],
    whyItMatters: "For enterprises or deeply personalized use cases, fine-tuning goes deeper than RAG. But it costs more and has a higher bar.",
    vibeCodingUsage: "Most Vibe Coding does NOT need fine-tuning. Master prompts + RAG first. Only fine-tune when those hit a ceiling.",
    quickStart: [
      "Prepare 100-1000 quality training samples",
      "Train with OpenAI / Anthropic / LLaMA-Factory",
      "Evaluate and iterate",
    ],
    commonMisunderstandings: [
      "Fine-tuning is not for teaching new facts — it shapes style and format",
      "Too little data → no effect (typically need 100+ quality examples)",
      "Costs far exceed RAG — do the math first",
    ],
    technicalExplanation: "Fine-tuning continues training a pretrained model on domain data to adjust weights. Common techniques: full fine-tune, LoRA, QLoRA, SFT, DPO, RLHF.",
    promptExample: "Explain the difference between fine-tuning and RAG, and when to use each.",
  },
};
