import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
const here = dirname(fileURLToPath(import.meta.url));
const task = JSON.parse(await readFile(join(here, "task.json"), "utf8"));
const output = resolve(here, "../../../.demo-output");
const args = process.argv.slice(2);
if (args.some((arg) => arg !== "--approve-implementation")) {
  console.error(
    "Supported option: --approve-implementation. No remote publication is implemented.",
  );
  process.exit(2);
}
console.log(
  "EDUCATIONAL REPRODUCTION / synthetic task / deterministic workflow, no agent runtime",
);
console.log(
  `Task ${task.key} → owner ${task.owner} → one permitted source file`,
);
if (!args.includes("--approve-implementation")) {
  console.log(
    "WAITING_FOR_IMPLEMENTATION_APPROVAL: no workspace or source files changed.",
  );
  process.exit(0);
}
const working = join(output, "workspace", task.owner);
await mkdir(working, { recursive: true });
const broken = await readFile(
  join(here, "templates/search.broken.mjs"),
  "utf8",
);
const fixed = await readFile(join(here, "templates/search.fixed.mjs"), "utf8");
const testPath = join(working, "search.test.mjs");
await writeFile(join(working, "search.mjs"), broken);
await copyFile(join(here, "templates/search.test.mjs"), testPath);
function checks() {
  const result = spawnSync(
    process.execPath,
    ["--test", "--test-reporter=tap", testPath],
    { encoding: "utf8" },
  );
  if (result.error) throw result.error;
  const log = result.stdout + result.stderr;
  return {
    exitCode: result.status,
    passed: Number(log.match(/# pass (\d+)/)?.[1] ?? 0),
    failed: Number(log.match(/# fail (\d+)/)?.[1] ?? 0),
    log,
  };
}
const before = checks();
if (before.exitCode === 0 || before.passed !== 1 || before.failed !== 3)
  throw new Error("The expected baseline regression was not reproduced.");
await writeFile(join(working, "search.mjs"), fixed);
const after = checks();
if (after.exitCode !== 0 || after.passed !== 4 || after.failed !== 0)
  throw new Error("Fixed implementation failed acceptance checks.");
const hash = (text) => createHash("sha256").update(text).digest("hex");
const report = {
  task: task.key,
  example: "synthetic",
  executedAt: new Date().toISOString(),
  baseline: { passed: before.passed, failed: before.failed },
  fixed: { passed: after.passed, failed: after.failed },
  changedSourceFiles: task.allowedPaths,
  sourceHashBefore: hash(broken),
  sourceHashAfter: hash(fixed),
  review: "No independent agent review executed by this deterministic example",
  publication: "WAITING_FOR_APPROVAL",
  ci: "NOT_RUN",
  runtime: "Node.js unit tests only",
};
await writeFile(
  join(output, "validation.json"),
  JSON.stringify(report, null, 2) + "\n",
);
await writeFile(join(output, "tests-before.tap"), before.log);
await writeFile(join(output, "tests-after.tap"), after.log);
// Build a real unified diff from the exact templates used in this execution.
const oldLines = broken.trimEnd().split("\n");
const newLines = fixed.trimEnd().split("\n");
const lcs = Array.from(
  { length: oldLines.length + 1 },
  () => new Uint16Array(newLines.length + 1),
);
for (let i = oldLines.length - 1; i >= 0; i--) {
  for (let j = newLines.length - 1; j >= 0; j--) {
    lcs[i][j] =
      oldLines[i] === newLines[j]
        ? 1 + lcs[i + 1][j + 1]
        : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
  }
}
let i = 0,
  j = 0;
const changes = [];
while (i < oldLines.length || j < newLines.length) {
  if (
    i < oldLines.length &&
    j < newLines.length &&
    oldLines[i] === newLines[j]
  ) {
    changes.push(" " + oldLines[i++]);
    j++;
  } else if (
    i < oldLines.length &&
    (j === newLines.length || lcs[i + 1][j] >= lcs[i][j + 1])
  )
    changes.push("-" + oldLines[i++]);
  else changes.push("+" + newLines[j++]);
}
const patch = [
  "--- a/packages/search/search.mjs",
  "+++ b/packages/search/search.mjs",
  `@@ -1,${oldLines.length} +1,${newLines.length} @@`,
  ...changes,
  "",
].join("\n");
await writeFile(join(output, "change.diff"), patch);
const mr = `# ${task.key}: Keep the latest search request authoritative\n\nOlder responses can no longer overwrite current search results. The public search method is preserved.\n\n## Scope\n\n- Owner: packages/search\n- Changed product source: packages/search/search.mjs\n- Validation fixture stays separate from the proposed product diff.\n\n## Executed validation\n\n- Baseline: ${before.passed} passed, ${before.failed} failed.\n- Fixed: ${after.passed} passed, ${after.failed} failed.\n- Source SHA-256: ${report.sourceHashAfter}\n\n## Remaining gates\n\nPublication requires explicit approval. No independent reviewer, remote CI, merge, mobile runtime or product acceptance is claimed by this educational example.\n`;
await writeFile(join(output, "merge-request.md"), mr);
console.log(
  `Baseline: ${before.passed} passed / ${before.failed} failed → fixed: ${after.passed} passed / ${after.failed} failed`,
);
console.log(
  "Artifacts: validation.json, tests-before.tap, tests-after.tap, change.diff, merge-request.md",
);
console.log(
  "WAITING_FOR_PUBLICATION_APPROVAL: nothing pushed, posted or merged. Output: .demo-output/",
);
