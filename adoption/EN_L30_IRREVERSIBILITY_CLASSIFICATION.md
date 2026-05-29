<!-- L30_LANG_LOCK: EN_ONLY -->
# LUMINA-30 Irreversibility Classification for Boundary Review

Status: non-binding public reference. This page is not a legal standard, certification scheme, risk taxonomy, deployment approval, official adoption claim, enforcement mechanism, or safety guarantee.

Use this page when a reviewer needs to identify what kind of irreversible path may be opened before applying the LUMINA-30 boundary question.

## Core classification question

> What may become difficult, impossible, or procedurally invalid to reverse if this action proceeds, and does that change whether effective human refusal must be preserved before the action occurs?

LUMINA-30 does not treat every risk as irreversible. It asks whether a relevant action may cross a boundary after which human refusal becomes too late, symbolic, ineffective, or non-reviewable.

## Classification tags

Use these tags in boundary reviews, pre-incident reviews, release memos, procurement records, or incident review notes.

- **REVERSIBLE** — the action can be stopped, rolled back, contained, or corrected before serious irreversible effects occur.
- **HARD TO REVERSE** — rollback is possible, but costly, delayed, partial, or dependent on uncertain cooperation.
- **EFFECTIVELY IRREVERSIBLE** — reversal is technically, socially, legally, physically, or operationally unavailable in practice.
- **REFUSAL-LOSS RISK** — the action may remove, bypass, or hollow out the ability of accountable humans to refuse before consequences escalate.
- **UNKNOWN / EVIDENCE GAP** — the review lacks enough evidence to classify reversibility.

If reversibility is unknown, LUMINA-30 should not treat the boundary as cleared. Resolve the evidence gap before proceeding.

## Common irreversibility classes

| Class | What may become irreversible | Review focus |
|---|---|---|
| Life and bodily harm | Death, injury, loss of health, or exposure to physical danger. | Can the action be stopped before harm occurs, not merely compensated afterward? |
| Legal or administrative finality | Deportation, detention, denial of rights, irreversible enforcement, or records that are hard to correct. | Can an accountable human stop the process before the decision takes effect? |
| Data dissemination | Public release, replication, scraping, model ingestion, or cross-border transfer of sensitive data. | Can the data still be contained before it spreads beyond meaningful control? |
| Capability exposure | Release of model capabilities, tool access, exploit knowledge, automation capacity, or dual-use workflows. | Can exposure be paused before replication, integration, or misuse becomes hard to contain? |
| Infrastructure dependency | Connection to systems that become operationally dependent on the AI or automated process. | Can humans still refuse without triggering service failure or lock-in? |
| Autonomous chain reaction | Escalating automated actions, recursive delegation, high-speed propagation, or self-reinforcing workflows. | Is there a human stop point before the chain crosses the boundary? |
| Reputation and social trust damage | Irreversible public accusation, scoring, exclusion, reputational collapse, or social labeling. | Can affected people challenge or stop the action before the damage becomes practically unrecoverable? |
| Institutional lock-in | Procurement, contract, policy, staffing, or governance decisions that make reversal politically or operationally unrealistic. | Is refusal still meaningful before commitments harden? |
| Public or democratic displacement | Decisions that remove meaningful public objection, affected-stakeholder input, or representative review. | Is there an actual refusal path for the affected humans or their representatives? |
| Loss of human refusal authority | Delegation, automation, secrecy, timing, pressure, dependency, or system design that makes human refusal nominal only. | Does the action itself eliminate the condition LUMINA-30 requires? |

## Minimal classification record

```text
LUMINA-30 Irreversibility Classification Record

Action under review:
Potential irreversible class(es):
What may become hard or impossible to reverse:
Who could refuse before the boundary:
What evidence supports reversibility or irreversibility:
Time available before the boundary:
Stop / rollback / containment mechanism:
Classification tag:
Evidence gaps:
Reviewer / accountable owner:
Date:
```

## What not to do

Do not use the word “irreversible” as a rhetorical label. A classification should identify a concrete boundary, evidence, timing, stop mechanism, and human refusal holder.

Do not claim that a system is safe merely because a harm might be compensated later. Compensation after the boundary is not the same as effective refusal before the boundary.

Do not let an AI system classify its own irreversible path as acceptable by relying on predicted benefit, inferred consent, procedural appearance, aggregate utility, or internal assurance.

## Relation to other LUMINA-30 tools

- Use [Evidence Requirements](./EN_L30_EVIDENCE_REQUIREMENTS.html) to show what evidence supports the classification.
- Use the [Practical Boundary Review Pack](./EN_L30_PRACTICAL_BOUNDARY_REVIEW_PACK.html) for a compact working set.
- Use the [Pre-Incident Boundary Review — One-Page Practical Sheet](./EN_L30_PRE_INCIDENT_BOUNDARY_REVIEW_ONEPAGE.html) before release, deployment, capability exposure, connection, publication, or authority handoff.
- Use the [Consultation and Routing Map](./EN_L30_CONSULTATION_ROUTING_MAP.html) when unsure which review path should handle the issue.

## Guardrail

This classification page does not decide whether a system may proceed. It only helps reviewers name the possible irreversible path so that effective human refusal can be checked before the boundary is crossed.
