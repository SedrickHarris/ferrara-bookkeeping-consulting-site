// Run: node scripts/verify-registry.ts   (Node 22.18+/24 strips types natively)
import { audiences, audienceGroups } from "../data/audiences.ts";
import { services } from "../data/services.ts";
import { audienceServicePages } from "../data/audienceServicePages.ts";

const errors: string[] = [];
const slugRe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const dupes = (xs: string[]) => xs.filter((x, i) => xs.indexOf(x) !== i);

const check = (label: string, actual: number, expected: number) => {
  console.log(`${label}: ${actual}`);
  if (actual !== expected) errors.push(`${label}: expected ${expected}, got ${actual}`);
};

check("audiences", audiences.length, 44);
check("services", services.length, 8);
check("audience groups", audienceGroups.length, 6);
check("pairings", audienceServicePages.length, 352);

const groupSlugs: string[] = audienceGroups.map((g) => g.slug);
const sets: [string, string[]][] = [
  ["audience", audiences.map((a) => a.slug)],
  ["service", services.map((s) => s.slug)],
  ["group", groupSlugs],
  ["pairing path", audienceServicePages.map((p) => p.path)],
];
for (const [label, slugs] of sets) {
  for (const d of dupes(slugs)) errors.push(`duplicate ${label}: ${d}`);
}
for (const s of [...audiences.map((a) => a.slug), ...services.map((s) => s.slug), ...groupSlugs]) {
  if (!slugRe.test(s)) errors.push(`malformed slug: ${s}`);
}
for (const a of audiences) {
  if (groupSlugs.includes(a.slug)) errors.push(`audience slug collides with group slug: ${a.slug}`);
  if (!groupSlugs.includes(a.group)) errors.push(`unknown group on ${a.slug}: ${a.group}`);
}
const pathRe = /^\/industries\/[a-z0-9-]+\/[a-z0-9-]+\/$/;
for (const p of audienceServicePages) {
  if (!pathRe.test(p.path)) errors.push(`malformed path: ${p.path}`);
  if (p.status !== "planned") errors.push(`not planned: ${p.path}`);
}

if (errors.length) {
  console.error("FAILED:\n" + errors.join("\n"));
  process.exit(1);
}
console.log("OK: no duplicate slugs, no malformed paths, all pairings planned.");
