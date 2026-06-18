import type { TermOverride } from "./_types";

export const database: TermOverride = {
  tags: ["data", "backend", "core"],
  relatedTerms: ["supabase", "backend", "sql", "api", "postgresql"],
  learningPath: ["database", "sql", "supabase", "backend", "api"],
  zh: {
    oneLiner: "数据库 = 应用永久存数据的"硬盘 + 索引"——查得快、改得安全。",
    whatItLooksLike: `users 表：
| id | name | email          | created_at |
|----|------|----------------|------------|
| 1  | 张三 | a@example.com  | 2024-01-01 |
| 2  | 李四 | b@example.com  | 2024-01-02 |

SQL 查询：
SELECT name, email FROM users WHERE id = 1;

→ 返回: 张三, a@example.com`,
    analogy: "像 Excel 表但加了"索引、权限、备份、多人同时改不冲突"。简单说：能撑得住几百万行的 Excel。",
    beginnerExplanation: "数据库是存数据的专用软件。用户、订单、消息、配置——任何需要长期保存的东西都放这。",
    whatYouCanDo: [
      "存用户、订单、文章、评论",
      "用 SQL 灵活查询",
      "做关联（一个用户 → 多个订单）",
      "权限控制、备份恢复",
    ],
    whyItMatters: "做任何"有用户"的应用都需要数据库。这是后端的核心。",
    vibeCodingUsage: "Supabase = 托管的 PostgreSQL + 现成 API。Vibe Coding 里最常见的数据库选择。AI 几条指令就能建表、改表。",
    quickStart: [
      "去 supabase.com 注册，建个项目",
      "在 Table Editor 里建一张 todos 表",
      "让 Cursor 写代码读写这张表",
    ],
    commonMisunderstandings: [
      "数据库不是 Excel——多人写入有事务保证",
      "SQL 和 NoSQL 是两类，常用还是 SQL",
      "不是越多越好——多个数据库会增加复杂度",
    ],
    technicalExplanation: "数据库（Database）是用来存储、查询、管理结构化数据的系统。主流类型：关系型（PostgreSQL、MySQL、SQLite）、文档型（MongoDB）、键值（Redis）、向量（pgvector、Pinecone）。",
    promptExample: "请解释数据库是什么，对比"用 JSON 文件存数据"和"用数据库存数据"在多用户场景下的区别。",
  },
  en: {
    oneLiner: "Database = an app's permanent disk + index — fast queries, safe writes.",
    whatItLooksLike: `users table:
| id | name  | email         | created_at |
|----|-------|---------------|------------|
| 1  | Alice | a@example.com | 2024-01-01 |
| 2  | Bob   | b@example.com | 2024-01-02 |

SQL:
SELECT name, email FROM users WHERE id = 1;

→ Returns: Alice, a@example.com`,
    analogy: "Like an Excel sheet with indexes, permissions, backups, and conflict-free concurrent edits. An Excel that handles millions of rows.",
    beginnerExplanation: "A database is software for storing data. Users, orders, messages, configs — anything you need to keep.",
    whatYouCanDo: [
      "Store users, orders, posts, comments",
      "Query flexibly via SQL",
      "Relate data (one user → many orders)",
      "Permissions, backups, restores",
    ],
    whyItMatters: "Any app with users needs a database. It's the heart of the backend.",
    vibeCodingUsage: "Supabase = managed Postgres + ready APIs. The most common DB pick in Vibe Coding. AI can create and edit tables in a few commands.",
    quickStart: [
      "Sign up at supabase.com",
      "Create a 'todos' table in Table Editor",
      "Have Cursor read/write it",
    ],
    commonMisunderstandings: [
      "Not Excel — multi-user writes have transactions",
      "SQL vs NoSQL are two families — SQL is still the default",
      "More DBs ≠ better — adds complexity",
    ],
    technicalExplanation: "Databases store and query structured data. Families: relational (Postgres, MySQL, SQLite), document (MongoDB), key-value (Redis), vector (pgvector, Pinecone).",
    promptExample: "Explain databases by contrasting 'storing data in JSON files' vs 'in a DB' for a multi-user app.",
  },
};
