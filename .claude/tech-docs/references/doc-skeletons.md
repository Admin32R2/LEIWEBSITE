# Doc skeletons

Ready skeletons for the engineering documentation kinds, matched to Phase 0 of
the `tech-docs` skill. Copy the one that fits the **type** you picked, fill the
`<…>`, and delete a section only with a reason (`_N/A_` beats a silent gap). All
of them assume the five rules: ground claims in code, tag maturity (🟢/🟡/🔵),
code-is-source-of-truth, show-don't-just-tell, audience-first.

For a **large reference** (the PAYMENTS_QRPH-scale doc), don't use a skeleton
here — use the 19-section structure in the `payments` skill's
`references/payments-doc-template.md` (it's generalizable beyond payments).

---

## A. Design / feature doc — to present & defend an implementation

The default when the ask is "document this feature so I can present and defend
it." Built to answer what a sharp reviewer asks.

```markdown
# <Feature> — Design

| | |
|---|---|
| Status | <Proposed / Accepted / Implemented> · maturity 🟢/🟡/🔵 |
| Author / Owners | <names> |
| Audience | reviewers, implementers |
| Source of truth | <code path once built; the code wins over this doc> |
| Related | <tickets, ADRs, related docs> |

## Summary
<2–4 sentences: the problem, the chosen approach, the outcome. The reader gets
the whole point here before any detail.>

## Problem & goals
- **Problem:** <what's broken/missing, with evidence>
- **Goal:** <what a user/system can do after that they can't now>
- **Acceptance signal:** <"done" means…>
- **Non-goals:** <explicitly out of scope>

## Current state
<What exists today, grounded in code (file:line). The gap to the goal.>

## Proposed design
<Narrative + a diagram (context/flow). The shape first, then the mechanism.>

```mermaid
flowchart LR
  <context or data-flow diagram>
```

- **Data model / contract changes:** <tables, API shapes, migrations>
- **Key invariants:** <what must always hold; who may write what>
- **Component responsibilities:** <code map: file → responsibility>

## Alternatives considered
| Option | Pros | Cons | Verdict |
|---|---|---|---|
| <A (chosen)> | | | chosen |
| <B> | | | rejected because… |
<Absence of this section reads as "didn't think it through."> 

## Trade-offs
<What this costs — perf, complexity, scope deferred — stated plainly. Owning the
downside builds more credibility than hiding it.>

## Risks & security
| Risk / threat | Impact | Mitigation |
|---|---|---|
| <…> | | |

## Testing & evidence
<How it's proven to work: tests, a walkthrough, benchmarks. Not "it has tests" —
which behaviors are covered.>

## Rollout & rollback
<How it ships safely (flag/staged/migration), how it's undone.>

## Limitations & roadmap
- 🔵 <known gap, owned, with a ticket>
```

---

## B. Architecture doc — C4-style

For "how is this system / service shaped?" Onboarding and change-planning.

```markdown
# <System> — Architecture

| Status | maturity legend | Owners | Source of truth | Related |
|---|---|---|---|---|

## 1. Context (who/what it talks to)
```mermaid
flowchart TB
  <C4 L1: system + external actors/systems>
```

## 2. Containers (the deployable/runtime parts)
```mermaid
flowchart TB
  <C4 L2: apps, services, datastores, workers inside the system>
```
| Container | Tech | Responsibility |
|---|---|---|

## 3. Components (per container, as needed)
<C4 L3 only for the containers worth zooming into. Code map per component.>

## 4. Key flows
<sequenceDiagram(s) for the important request paths.>

## 5. Data model
```mermaid
erDiagram
  <entities + cardinality>
```

## 6. Cross-cutting concerns
<auth, config/secrets, observability, error handling — each grounded in code.>

## 7. Decisions
<links to ADRs for the non-obvious choices.>

## 8. Limitations & evolution
<🔵 where it's headed; known constraints.>
```

---

## C. ADR — Architecture Decision Record

One decision, immutable once accepted. Number them (`ADR-0001`), keep them short.

```markdown
# ADR-<NNNN>: <decision in a noun phrase>

| Status | Proposed / Accepted / Superseded by ADR-XXXX |
| Date | <YYYY-MM-DD> |
| Deciders | <names> |

## Context
<The forces at play: the problem, constraints, what we know. Neutral — no
decision yet.>

## Decision
<"We will <do X>." One clear statement. The reasoning in a few lines.>

## Consequences
- **Positive:** <what gets better>
- **Negative / costs:** <what we accept>
- **Follow-ups:** <what this now requires>

## Alternatives considered
<Each option + why not. Brief.>
```

---

## D. Runbook — operational, for on-call

Symptom-first. Written to be used at 3am under stress: scannable, copy-pasteable,
no theory.

```markdown
# Runbook — <service / area>

| Owners | Escalation | Dashboards | Related |
|---|---|---|---|

## Architecture (1 diagram)
```mermaid
flowchart LR
  <just enough to orient: the moving parts and where they fail>
```

## Common incidents
### <Symptom, as on-call would observe it>
- **Likely cause:** <…>
- **Diagnose:** <exact commands / queries / where to look>
- **Fix:** <exact steps; mark any that are irreversible>
- **Verify recovered:** <signal that it's resolved>

## Routine operations
<deploy, rollback, restart, run a one-off job — exact commands.>

## Key signals & thresholds
| Metric | Healthy | Alert at |
|---|---|---|
```

---

## E. How-to — task-focused

For "how do I do <X>?" Numbered, copy-pasteable, one task.

```markdown
# How to <accomplish task>

**Goal:** <what you'll have at the end.>
**Prerequisites:** <access, tools, state assumed.>

## Steps
1. <action> — `<exact command>`
2. <action> — `<exact command>`
   - Expected: <what you should see>

## Verify it worked
<the check that confirms success>

## Troubleshooting
| Symptom | Cause | Fix |
|---|---|---|
```

---

## Choosing fast

- "Document this feature for review" → **A (Design doc)**
- "Document how the system is built" → **B (Architecture)**
- "Why did we choose X?" → **C (ADR)**
- "What do I do when it breaks?" → **D (Runbook)**
- "How do I do this task?" → **E (How-to)**
- "Complete reference for subsystem X" → the `payments` skill's 19-section
  template (generalizable), not a skeleton here.
```
