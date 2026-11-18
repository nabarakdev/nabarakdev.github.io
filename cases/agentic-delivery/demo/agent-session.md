# Using the fixture in an actual agent session

The deterministic runner is a reproducible illustration. For a real coding-agent demonstration, use a separate local copy of the broken source and the fixture tests. Do not present a scripted walkthrough as an agent execution.

1. Give the agent `task.json`, `templates/search.broken.mjs` and the acceptance criteria. Withhold the fixed template from the working context.
2. Ask for the owning module, the cause, a bounded implementation plan and proportionate checks.
3. Approve implementation in the isolated example workspace.
4. Let the agent implement the change and execute the regression. Preserve actual command output and the precise source revision or hash.
5. If a separate reviewer is used, supply the pinned diff and criteria. Record its actual findings; otherwise identify the review as self-check.
6. Inspect the diff and MR description. Obtain publication approval before creating an actual remote PR or MR.
7. Record hosted CI and acceptance separately. Do not convert a local result into a release claim.

Suggested task prompt:

> Analyse the synthetic Jira fixture DEMO-001. Find why older search responses can overwrite the state of a newer request. First provide the owner, scope, acceptance criteria and plan. The fixture is local; do not contact Jira or any corporate services. Do not implement or publish before the applicable approval.

A recording should show the actual session, checks, findings and approval boundaries. This repository does not claim that such a recording has already been made.
