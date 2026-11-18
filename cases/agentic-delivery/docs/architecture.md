# Architecture & context handoffs

This is the generalised architecture of the configured engineering process. Boxes represent responsibilities and integration boundaries, not a claim that a bespoke agent runtime or hard enforcement mechanism was built.

```mermaid
flowchart TB
  subgraph S["Confirmed sources"]
    J["Jira and acceptance criteria"]
    D["Specifications, API and design"]
    G["Repositories and dependency map"]
  end
  subgraph O["Orchestration"]
    C["Relevant context and source authority"]
    P["Scope, risk and permission boundaries"]
    H["Revision-bound assignments and handoffs"]
  end
  subgraph X["Execution responsibilities"]
    A["Specialist analysis when needed"]
    W["One active implementation writer"]
    R["Independent reviewer when required"]
    Q["Tests and runtime validation by scope"]
  end
  subgraph T["Tools"]
    M["MCP services"]
    CLI["Command-line software"]
    CI["Git and CI/CD"]
  end
  J --> C
  D --> C
  G --> C
  C --> P --> H
  H --> A
  H --> W
  W --> R
  W --> Q
  A --> W
  M --- C
  CLI --- W
  Q --> E["Diff, results, limitations and revision"]
  R --> E
  E --> AP{"Publication approved?"}
  AP -->|Yes| MR["Merge Request"]
  MR --> CI
```

## Compact and full routes

A bounded, reversible change with a confirmed owner can use a compact route: gather the necessary context, implement within scope and perform proportionate checks. Cross-repository behaviour, changed API contracts, authentication, signing, payment execution or unresolved product behaviour require the fuller delivery route and the applicable independent review.

The route changes the depth of analysis and evidence, not the requirement to perform meaningful validation. Existing required project suites and migration cycles remain mandatory.

## The handoff contract

| Field | Purpose |
| --- | --- |
| Task and acceptance criteria | Establish expected behaviour |
| Owning module and permitted files | Limit implementation scope |
| Source and dependency revisions | Make the assignment reproducible |
| Decisions and unresolved questions | Preserve source authority |
| Checks and actual results | Distinguish execution from intention |
| Review findings and limitations | Keep remaining work visible |
| Publication target and approval | Bound external effects |

```mermaid
sequenceDiagram
  participant E as Engineer
  participant O as Orchestrating agent
  participant W as Implementer
  participant R as Reviewer
  participant G as Git and CI
  E->>O: Task link and applicable authorisation
  O->>O: Context, owner, dependencies and risk
  O->>W: Bounded assignment with source revision
  W-->>O: Change, checks and pinned diff
  opt Independent review required by route
    O->>R: Same revision, criteria and constraints
    R-->>O: Findings and remaining limitations
  end
  O-->>E: Reviewable result and publication scope
  E->>O: Publication approval
  O->>G: Publish MR to verified target
  G-->>O: Observed CI result
  O-->>E: MR, CI, runtime and acceptance states
```

## Multiple repositories

```mermaid
flowchart LR
  A["Shared package A / MR"] --> C["Application integration / MR"]
  B["Feature package B / MR"] --> C
  A --> V["Compatibility checks"]
  B --> V
  C --> V
  V --> S["Approved integration and release order"]
```

Repository identity, active dependency sources, source and target branches and integration order are checked independently. A passing package test does not prove that the consuming application is ready.

## Enforcement boundary

Markdown instructions guide agent behaviour; their existence does not prove technical enforcement. Server branch protection, credentials and runtime safeguards remain separate controls. A repeated pass by the same agent is not independent review.

## Platform references

The configured process builds on platform capabilities documented by OpenAI: [AGENTS.md instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [Skills](https://learn.chatgpt.com/docs/build-skills). The project-specific architecture, working rules, boundaries and delivery process are my engineering contribution.
