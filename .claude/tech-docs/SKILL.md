---
name: tech-docs
description: >-
  Produce high-quality technical documentation that is visual, accurate, and
  defensible — the kind a seasoned engineer reads and calls well thought out, and
  that you can use to present and defend a feature implementation in review. Core
  discipline is anti-hallucination: every claim is GROUNDED in the actual code
  (read it, cite file:line), tagged with a maturity legend so the doc never
  overstates what's built, and closed with a verification pass where every
  statement is checkable. Visuals are diagrams-as-code (Mermaid: context/
  sequence/state/ER/flow + C4) committed alongside the doc — never draw.io or
  screenshots of diagrams. Picks the right doc TYPE first (Diátaxis: tutorial /
  how-to / reference / explanation; plus design doc, architecture doc, ADR,
  runbook), structures it from a proven skeleton, and writes audience-first.
  Use when the user asks to write/improve technical documentation, document a
  feature or system, create a design/architecture doc, an ADR, a runbook, API
  docs, or a doc to present/defend an implementation, or says existing docs are
  thin/inaccurate/hard to follow. The worked exemplar in this repo is
  docs/.../PAYMENTS_QRPH.md (built via the `payments` skill). Self-contained and
  portable — copy this folder into any repo's .claude/skills/.
---

# tech-docs — grounded, visual, defensible documentation

Most docs fail one of three ways: they're a wall of prose with no picture of the
system; they drift from or outright misstate the code (the AI-written-docs
failure mode — confident, wrong, unfalsifiable); or they read like notes, not
something an engineer would defend in a design review. This skill produces the
opposite: documentation grounded in the real code, visualized with
diagrams-as-code, structured so a seasoned reviewer finds it complete and honest.

**The thesis: a technical doc is a set of *claims about a system*, and every
claim must be checkable.** That single rule drives everything below — it's what
separates documentation from plausible-sounding fiction.

## Worked exemplar (read it when you have it)

In this repo, [`docs/normal-documentation/GUIDES/PAYMENTS_QRPH.md`](../../../docs/normal-documentation/GUIDES/PAYMENTS_QRPH.md)
is the standard this skill generalizes: status header, maturity legend, Mermaid
context/ER/state/sequence diagrams, a code map linking every file, spelled-out
invariants, a STRIDE threat table, failure modes, a runbook, and an honest
roadmap. Skim it before writing — then apply the *method*, not the payment
specifics.

---

## The five rules (the quality bar)

1. **Ground every claim in code.** Read the actual source before writing a line
   about it. A statement about behavior cites the file (`path:line`) that makes
   it true. If you can't point at the code, you don't know it — find out or mark
   it unknown. **Never describe what you assume the code does.**
2. **Tag maturity; never overstate.** Mark each component 🟢 Implemented (in code,
   tested) / 🟡 Partial (gap named inline) / 🔵 Planned (roadmap, not built). The
   most damaging doc error is presenting the aspirational as the actual. The
   legend makes honesty structural, not a matter of phrasing.
3. **Code is the source of truth — say so.** State at the top: where the doc and
   the code disagree, the code wins and the doc is the bug. This sets the
   maintenance contract and tells the reader how to resolve any conflict.
4. **Show the system, don't just describe it.** Anything with structure, flow, or
   states gets a diagram-as-code (see [references/diagrams-as-code.md](references/diagrams-as-code.md)).
   A reader should grasp the shape from pictures before the prose.
5. **Write for a named audience and a named purpose.** Decide who reads this and
   what they'll do with it, and cut everything that doesn't serve that. One doc =
   one audience+purpose; if you're serving two, you have two docs.

---

## Phase 0 — Decide the TYPE (before writing anything)

Different documentation kinds have different jobs; mixing them is why docs sprawl
and satisfy no one. Pick one (Diátaxis + the engineering doc kinds):

| Type | Answers | Reader is… | Skeleton |
|---|---|---|---|
| **Reference** | "what exactly is X?" | looking something up | the big multi-section reference (like PAYMENTS_QRPH) |
| **Explanation** | "why is it this way?" | trying to understand | narrative + diagrams + trade-offs |
| **How-to** | "how do I do X?" | accomplishing a task | numbered steps, copy-pasteable |
| **Tutorial** | "teach me from zero" | learning | guided, runs end-to-end |
| **Design doc** | "what are we building and why?" | reviewing/approving a change | the defend-an-implementation skeleton |
| **Architecture doc** | "how is the system shaped?" | onboarding / planning change | C4-style (context→container→component) |
| **ADR** | "what did we decide and why?" | future-you, deciding again | context · decision · consequences |
| **Runbook** | "it's on fire, what do I do?" | on-call | symptom → diagnosis → action |

Skeletons for the engineering kinds are in
[references/doc-skeletons.md](references/doc-skeletons.md). If the user wants a
doc "to present and defend a feature," that's the **Design doc** — see the "defend
it" bar below.

---

## Phase 1 — GROUND (the anti-hallucination phase)

Before structuring, gather *verified* truth. This is non-negotiable and is what
makes the doc trustworthy.

- **Read the entry points and the data path** the doc covers — routes, services,
  models, config — the way the `plan`/`security` skills do. Don't infer behavior
  from names or from older docs.
- **Collect anchors as you go:** for each thing you'll assert, note the
  `file:line`. These become the doc's links and your verification checklist.
- **Separate observed from intended.** What the code does today is 🟢/🟡. What a
  ticket/design says it *will* do is 🔵 — never blend them into one tense.
- **Find the seams that matter** — invariants, trust boundaries, ownership ("who
  may write this field"), failure modes. Seasoned readers look for exactly these;
  a doc that names them reads as authored by someone who understands the system.
- **If something can't be verified, say so explicitly** (🟡 with the gap, or an
  open question) rather than papering over it with confident prose. An honest
  "unknown" is more credible than a wrong certainty.

---

## Phase 2 — STRUCTURE

Take the skeleton for the chosen type and adapt it (delete a section only with a
reason — write `_N/A_` rather than silently dropping a concern). Universal
elements for any substantial technical doc:

- **A status header table** — Status, Owners, Audience, **Source of truth**
  (the code path), Related docs. Sets context and the maintenance contract in
  five lines.
- **The maturity legend**, defined once near the top.
- **A table of contents** for anything over ~3 screens.
- **A code map** — a table linking each described file to its responsibility, so
  the doc is navigable into the source.

Order sections so the reader builds a mental model top-down: purpose → big
picture (diagram) → model/contracts → details → operations/edge cases →
limitations. Put the honest limitations/roadmap *last and present* — never omit
them; their presence is a credibility signal, not a weakness.

---

## Phase 3 — VISUALIZE (diagrams-as-code, no draw.io)

Diagrams live in the doc as Mermaid fenced code blocks — versioned with the doc,
diffable, renderable on GitHub/most viewers, editable without a tool. The catalog
in [references/diagrams-as-code.md](references/diagrams-as-code.md) maps each need
to a diagram type with copy-paste snippets:

- **System context / data flow** → `flowchart` (boxes + labelled arrows; mark
  trust boundaries with subgraphs).
- **A request/interaction over time** → `sequenceDiagram` (with `autonumber`).
- **A lifecycle / status field** → `stateDiagram-v2` (show terminal states; note
  monotonic transitions).
- **Data model** → `erDiagram` (entities + relationships + cardinality).
- **Architecture at scale** → C4 levels expressed as nested `flowchart`
  subgraphs (context → container → component).
- **Sequencing/plan** → `gantt` only when timeline genuinely matters.

Rules: one idea per diagram (a diagram that needs a paragraph to decode is two
diagrams); label every arrow; keep node text short and put detail in the prose;
**verify it renders** (a broken Mermaid block is worse than none). Don't diagram
the trivial — a three-step linear flow is a sentence.

---

## Phase 4 — WRITE

- **Lead with the conclusion**, then support it (inverted pyramid) — the reader
  gets the point before the detail. Don't make them read to the end to learn what
  the thing is.
- **Prefer tables and lists to prose** for anything enumerable: fields, errors,
  env vars, trade-offs, failure modes. Dense, scannable, hard to be vague in.
- **Be precise and concrete.** Name the actual function, field, status code,
  env var. Vague docs ("the system handles errors gracefully") are where
  hallucinations and hand-waving hide — specificity is falsifiable, which is the
  point.
- **State invariants and contracts explicitly** ("X is only ever written by Y";
  "this endpoint requires Z"). These are what reviewers check against and what
  prevent future drift.
- **Explain the *why* for non-obvious choices**, briefly, inline or as an ADR
  link — "why this shape" is what makes a doc read as thought-through rather than
  merely descriptive.
- **Keep prose tight.** Cut filler, hedging, and restatement. Match the repo's
  existing doc voice and Markdown conventions; use real relative links to files
  and other docs (so they're clickable and break loudly if a path moves).

### The "defend it" bar (for design / feature docs)

A doc you'll present and defend in review has to answer what a sharp reviewer
will ask — include these or be ready for the gap:

- **What & why** — the problem, and what a user/system can do after that they
  couldn't before. The acceptance signal for "done".
- **Alternatives considered** — the other approaches and why you rejected them.
  Its absence reads as "didn't think it through"; its presence pre-empts half the
  questions.
- **Trade-offs owned** — what this costs (perf, complexity, scope deferred) said
  plainly. Hiding the downside destroys credibility faster than the downside.
- **Risk surfaces** — security/failure/data-integrity implications, as a table.
- **Evidence** — tests/benchmarks/a walkthrough proving it works, not just that
  it exists.
- **Rollout & rollback** — how it ships safely and how it's undone.
- **Honest limitations & roadmap** — the 🔵 gaps, owned, with tickets.

---

## Phase 5 — VERIFY (close the loop on accuracy)

The pass that makes the doc trustworthy — do it every time:

- **Walk every claim against the code.** Each assertion either resolves to the
  `file:line` you anchored in Phase 1, or it's downgraded to 🟡/🔵 or removed. No
  unsourced statements of fact survive.
- **Check the maturity tags are honest** — nothing 🟢 that isn't actually in the
  code and covered; nothing aspirational left untagged.
- **Render every diagram** and confirm it shows what the prose says.
- **Resolve every link** (files and cross-doc) — no dead or guessed paths.
- **Re-read as the target audience**: can they do the thing / approve the change
  / fix the incident from this alone? Cut what doesn't serve that.
- **Wire it into the docs index** so it's discoverable, and if the repo runs a
  ticket process, give doc work its own `DOC-NN` (don't bury "write the docs" as
  an un-owned acceptance criterion — it gets dropped under pressure).

A doc that passes this pass is one a seasoned dev can read, trust, and build on —
and one you can stand behind in review.

---

## Portability & fit

The method (ground → type → structure → visualize → write → verify), the five
rules, the Mermaid catalog, and the skeletons are stack- and project-agnostic.
Always defer to the host repo's existing doc home, naming, and voice
(`docs/` layout, `CLAUDE.md`, an INDEX) over these defaults — adapt to it rather
than impose. For documenting a *specific* domain this repo already has a deep
skill for (e.g. `payments`), use that skill's domain template and apply this
skill for the writing craft and the accuracy/verification discipline.
