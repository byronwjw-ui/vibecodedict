import type { TermOverride } from "./_types";

export const supabase: TermOverride = {
  tags: ["backend", "database", "baas"],
  relatedTerms: ["database", "backend", "api", "vercel", "authentication"],
  learningPath: ["database", "supabase", "backend", "api", "authentication"],
  zh: {
    oneLiner: "开源版 Firebase——数据库 + 登录 + 文件存储 + API 全包的"后端套件"。",
    whatItLooksLike: `1. 在 supabase.com 建项目
2. UI 里建表（users / posts / ...）
3. 拿到现成 API：

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(URL, KEY)

const { data } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })`,
    analogy: "做菜的"半成品包"——食材洗好切好调料配好，你只管炒。Supabase 把数据库、登录、存储都给你配好，你只管写前端。",
    beginnerExplanation: "Supabase 让你不用搭后端就能做完整应用。数据库、登录、文件、Realtime——一站式。",
    whatYouCanDo: [
      "PostgreSQL 数据库（SQL 强大）",
      "用户认证（邮箱、Google、GitHub 登录）",
      "文件存储",
      "Realtime 订阅（数据变了实时推送前端）",
      "Edge Functions",
    ],
    whyItMatters: "对 Vibe Coding 而言，Supabase 是"后端的 Vercel"——把复杂运维变成点几下。开源也能自部署。",
    vibeCodingUsage: "Cursor / Claude Code / Lovable 默认推荐 Supabase。让 AI"加个登录功能"，它会自动用 Supabase Auth。",
    quickStart: [
      "去 supabase.com 注册建项目",
      "Table Editor 建一张表",
      "拷贝 URL 和 anon key 到代码里",
    ],
    commonMisunderstandings: [
      "Supabase 不是 NoSQL——底层是 PostgreSQL",
      "免费版有项目数和容量限制",
      "RLS（行级安全）配错会全网可见，新手必踩坑",
    ],
    technicalExplanation: "Supabase 是基于 PostgreSQL 的开源 BaaS，提供 Auth（GoTrue）、Storage、Realtime（基于 Postgres Logical Replication）、Edge Functions（Deno）。",
    promptExample: "请解释 Supabase 是什么，对比"自己搭 Node + Postgres"和"用 Supabase"做一个登录系统的工作量差别。",
  },
  en: {
    oneLiner: "The open-source Firebase — DB, auth, storage, and APIs in one backend kit.",
    whatItLooksLike: `1. Create a project at supabase.com
2. Create tables in the UI
3. Use the auto-generated API:

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(URL, KEY)

const { data } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })`,
    analogy: "Like a meal kit — ingredients prepped, you just cook. Supabase preps DB, auth, storage; you focus on frontend.",
    beginnerExplanation: "Supabase lets you build full apps without a backend setup — DB, auth, files, realtime in one place.",
    whatYouCanDo: [
      "PostgreSQL DB (powerful SQL)",
      "Auth (email, Google, GitHub login)",
      "File storage",
      "Realtime subscriptions",
      "Edge Functions",
    ],
    whyItMatters: "For Vibe Coding, Supabase is 'Vercel for the backend' — complex DevOps becomes a few clicks. Open source = self-host option.",
    vibeCodingUsage: "Cursor / Claude Code / Lovable default to Supabase. Ask AI 'add login' — it wires up Supabase Auth.",
    quickStart: [
      "Create a project at supabase.com",
      "Make a table in Table Editor",
      "Copy URL + anon key to your code",
    ],
    commonMisunderstandings: [
      "Not NoSQL — built on PostgreSQL",
      "Free tier limits project count and storage",
      "Misconfigured RLS exposes data publicly — common beginner trap",
    ],
    technicalExplanation: "Supabase is open-source BaaS on PostgreSQL. Components: Auth (GoTrue), Storage, Realtime (Postgres Logical Replication), Edge Functions (Deno).",
    promptExample: "Explain Supabase and contrast 'self-host Node + Postgres' vs 'use Supabase' for building a login system.",
  },
};
