// Validates terms spec + categories + learning paths.
// Pure Node, no tsx required.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { SPEC } from "./terms-spec.mjs";
import { slugify } from "./term-helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const categories = JSON.parse(readFileSync(join(ROOT, "data/categories.json"), "utf8"));
const paths = JSON.parse(readFileSync(join(ROOT, "data/learning-paths.json"), "utf8"));

const errors = [];
function err(m) { errors.push(m); }

if (SPEC.length !== 300) err(`Expected 300 terms in SPEC, got ${SPEC.length}`);

const slugs = new Set();
const slugsList = [];
const byCat = {};
const byLevel = { 1: 0, 2: 0, 3: 0 };
const diffSet = new Set(["beginner", "intermediate", "advanced"]);
const qlSet = new Set([1, 2, 3]);
const catSlugs = new Set(categories.map((c) => c.slug));

for (const [name, category, difficulty, ql] of SPEC) {
  const slug = slugify(name);
  if (slugs.has(slug)) err(`Duplicate slug: ${slug} (${name})`);
  slugs.add(slug); slugsList.push(slug);
  if (!catSlugs.has(category)) err(`Term ${name} has unknown category: ${category}`);
  if (!diffSet.has(difficulty)) err(`Term ${name} invalid difficulty: ${difficulty}`);
  if (!qlSet.has(ql)) err(`Term ${name} invalid qualityLevel: ${ql}`);
  byCat[category] = (byCat[category] || 0) + 1;
  byLevel[ql] = (byLevel[ql] || 0) + 1;
}

const EXPECTED_CAT = {
  "ai-basics": 60,
  "vibe-coding": 45,
  "programming-basics": 55,
  "web-development": 45,
  "shell-git-dev-environment": 55,
  "database-backend-deployment": 30,
  "product-startup": 10,
};
for (const [c, n] of Object.entries(EXPECTED_CAT)) {
  if ((byCat[c] || 0) !== n) err(`Category ${c} expected ${n}, got ${byCat[c] || 0}`);
}
const EXPECTED_LEVEL = { 1: 100, 2: 150, 3: 50 };
for (const [lvl, n] of Object.entries(EXPECTED_LEVEL)) {
  if ((byLevel[lvl] || 0) !== n) err(`Quality level ${lvl} expected ${n}, got ${byLevel[lvl] || 0}`);
}

for (const p of paths) {
  for (const slug of p.terms) {
    if (!slugs.has(slug)) err(`Learning path ${p.slug} references missing slug: ${slug}`);
  }
}

if (errors.length) {
  console.error("\nValidation FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
} else {
  console.log(`✓ OK: ${SPEC.length} terms, ${categories.length} categories, ${paths.length} paths.`);
  console.log("  Per category:", byCat);
  console.log("  Per quality level:", byLevel);
}
