# Vibe Coding Dictionary

中英双语 AI 编程词典 / Bilingual AI & coding glossary.

300 个词条、中英双语、SEO 友好、本地搜索、学习路径。不需要数据库、不调用 AI API、不需要登录。

## 快速开始

```bash
npm install
npm run dev          # http://localhost:3000 → 自动跳转到 /zh
npm run build        # 生产构建，全部词条、分类、路径页面都会静态生成
npm start            # 启动生产服务
npm run validate:data
npm run lint
```

## 部署到 Vercel

1. 在 Vercel 导入这个 GitHub 仓库
2. Framework Preset 选 Next.js
3. 不需要任何环境变量
4. 点击 Deploy

## 主要文件

- `data/terms-spec.ts` — 300 个词条的规格列表 (名称 / 分类 / 难度 / 质量等级)
- `data/zh-names.ts` — 词条中文名称字典
- `data/term-overrides.ts` — Level 1 精调词条的手写内容
- `data/categories.json` — 7 个分类
- `data/learning-paths.json` — 6 条学习路径
- `lib/build-terms.ts` — 运行时合成 300 个词条对象的构建器
- `scripts/validate-data.mjs` — 数据校验脚本 (调用 `npm run validate:data` 运行)

## 新增 / 修改词条

1. 在 `data/terms-spec.ts` (和同步 `scripts/terms-spec.mjs`) 里追加一行 `[name, category, difficulty, qualityLevel]`。
2. 可选：在 `data/zh-names.ts` 里加上中文名称。
3. 可选：在 `data/term-overrides.ts` 里手写 zh/en 精调内容 (建议 Level 1 词条都手写)。
4. 运行 `npm run validate:data` 验证。
5. 提交即可。

## 代码架构

- Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS
- Fuse.js 本地搜索
- 词条详情、分类、学习路径页全部 SSG 预生成，利于 SEO
- 中英双语路由：`/zh/*` 和 `/en/*`；`/` 重定向到 `/zh`
- `sitemap.xml` 和 `robots.txt` 自动生成

## 已知事项 / Roadmap

- **Level 2 / Level 3 词条** 采用模板化生成，建议后续人工精修：在 `data/term-overrides.ts` 中逐个补充 zh/en 精调内容。
- 首批手写词条：`ai`, `llm`, `prompt`, `claude-code`, `api`。其他 Level 1 词条是首批人工精修的首选。
- 不接 AI API、不接数据库、不做登录 / 会员 / 评论 (第一版明确不做)。

## License

MIT.
