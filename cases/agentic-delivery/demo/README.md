# Reproducible local delivery example

Requires **Node.js 20+**. No install step, dependencies, credentials or external services.

```sh
# From the repository root:
node cases/agentic-delivery/demo/run.mjs
node cases/agentic-delivery/demo/run.mjs --approve-implementation
```

The task and URL in `task.json` are fictional fixtures. The runner reads the task, resolves `packages/search` as its owner, then stops unless implementation is explicitly permitted. With `--approve-implementation`, it creates a local educational workspace under the ignored `.demo-output/` directory, executes the regression against the broken version, applies the fixed template and executes the same suite again.

The four deterministic scenarios cover a normal query, a late older response, an older response while the latest request is pending, and an older response after a newer request fails. Promise ordering makes the regression reproducible without timer races.

Expected executed result:

```text
Baseline: 1 passed / 3 failed → fixed: 4 passed / 0 failed
Artifacts: validation.json, tests-before.tap, tests-after.tap, change.diff, merge-request.md
WAITING_FOR_PUBLICATION_APPROVAL: nothing pushed, posted or merged.
```

## Artifacts

| File | Content |
| --- | --- |
| `validation.json` | Executed counts, source hashes, scope and remaining gates |
| `tests-before.tap`, `tests-after.tap` | Raw output from the Node.js test runner |
| `change.diff` | The bounded product-source change; validation fixtures excluded |
| `merge-request.md` | A reviewable MR description with actual validation |
| `workspace/` | An isolated reproduction workspace |

The example uses prepared broken and fixed templates. It is a deterministic reproduction of local delivery stages, not an AI coding agent or evidence that enterprise orchestration ran in public. No independent reviewer, remote CI, mobile runtime or acceptance is asserted. Publication is intentionally outside the runner; unsupported options are rejected.

The CLI can be run again; it rewrites only its own generated files under `.demo-output/`. To explore the same task with an agent, see [agent-session.md](agent-session.md).
