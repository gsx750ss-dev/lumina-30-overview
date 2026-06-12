# One-Question Pilot Runbook

## Testing One Additional Boundary Question in an Existing Review

Version: v0.1  
Status: Practical pilot runbook / not official, not certification, not a safety guarantee  
Scope: Testing one initial case inside an existing AI adoption review, procurement check, security review, or internal audit

---

## Purpose

This document is a runbook for testing one initial case before formally adopting LUMINA-30. It is meant to be used inside an existing AI adoption review, procurement check, security review, or internal audit.

This document does not mean any of the following:

- Formal adoption of LUMINA-30
- Safety guarantee
- Legal certification
- Replacement of existing AI governance
- Completion of AI system safety confirmation
- Completion of an audit
- A disclaimer that “LUMINA-30 checked” means safe

The purpose is to add the following one question to an existing review and check whether there is a gap between formal human oversight and effective human refusal.

> Before this AI-mediated process becomes irreversible, can a responsible human effectively refuse, stop, or hold it? Is there authority, evidence, and a stop procedure supporting that refusal?

This pilot is not for stopping AI as such. It is a minimal check for proceeding with AI in a form that can still be stopped.

---

## 1. Selecting the target case

For the first pilot, choose exactly one case such as:

- A case already under an AI adoption review
- A vendor AI tool under procurement review
- An AI agent or automation tool before production connection
- A case involving external transmission, deletion, credential changes, production operations, contract finalization, or difficult rollback
- A case that is significant enough to test the review but not so large that it cannot be treated as a pilot

Do not expand the first pilot too broadly. Limit it to one process, one potentially irreversible operation, and one decision point.

Avoid using this pilot for the following cases:

- Emergency response to an ongoing production incident
- The legal judgment itself
- A substitute for high-risk operations that require a safety guarantee
- A case where “LUMINA-30 checked” is being used as a disclaimer or liability shield

---

## 2. Participants

Keep the initial group minimal:

- A person who understands the target process
- A person connected to approval or stopping authority
- One person from security, legal, audit, or risk management
- A vendor representative only if needed

Do not add too many participants. The first pilot should stay within a 30- to 60-minute review.

---

## 3. Procedure

### Step 1: Select one target process

Choose one AI-involved operation, decision, or external effect.

Do not expand the target to the entire system, entire business process, or entire contract.

### Step 2: Identify the potentially irreversible operation

Identify which of the following may be involved in the target process:

- External transmission
- Data deletion
- Credential change
- Permission change
- Production operation
- Contract finalization
- Difficult rollback
- A state where later human refusal loses practical effect

Do not stop at the statement that “there is a risk.” Briefly record what becomes hard to stop, when it happens, under whose authority, and through which operation.

### Step 3: Add one question

Add the following question to the existing review:

> Before this AI-mediated process becomes irreversible, can a responsible human effectively refuse, stop, or hold it? Is there authority, evidence, and a stop procedure supporting that refusal?

This question does not replace the existing review. It is added to check whether human oversight functions as effective refusal.

### Step 4: Classify YES / NO / UNKNOWN

Use `EFFECTIVE_HUMAN_REFUSAL_DECISION_GUIDE_EN.md` to classify YES / NO / UNKNOWN.

A YES classification is allowed only when all of the following minimum conditions can be confirmed:

1. The irreversible operation has been specifically identified.
2. A human decision point exists before that operation.
3. The person or role able to decide is explicit.
4. Refusal or hold actually stops the process.
5. The AI cannot automatically execute the operation without human judgment.

If any one of these conditions is not met, classify the result as NO.

If the condition may be met but authority, evidence, settings, responsible person, or procedure cannot be confirmed, classify the result as UNKNOWN.

### Step 5: If NO / UNKNOWN, move to the response sheet

If NO or UNKNOWN is found, use `BOUNDARY_GAP_RESPONSE_SHEET_EN.md`.

At minimum, record the following:

- Authority gap
- Evidence gap
- Interim measure
- Next action and owner
- Review deadline and approver

Do not close the review by writing only “confirm by next time.”

### Step 6: Classify the pilot result

Classify the pilot outcome as one of the following:

| Classification | Use when | Meaning |
| --- | --- | --- |
| No continuation needed | The existing review already provided an equivalent check sufficiently. | There may be limited need to add this field permanently. |
| Consider continuation | UNKNOWN was found, or evidence was insufficient. | It may be useful to add evidence and owner checks to the existing review. |
| Continuation recommended | NO was found, or an authority, stop-procedure, or evidence gap was found. | There may be strong value in keeping this check in the existing review. |

This classification is not a decision to formally adopt LUMINA-30. It is a practical indicator for deciding whether this check is worth keeping inside the existing review.


## 3A. Supplemental check for ongoing or connected systems

For an initial pilot, keep the scope small. However, if the target case is already operational, becoming relied upon, connected to other systems, agentic, vendor-dependent, or difficult to roll back, add a short supplemental check.

Ask whether effective refusal is still current after considering:

- Refusal Drift: whether dependency, coupling, stop cost, or loss of alternatives has weakened the practical ability to stop or hold the process.
- Evidence Drift: whether stop tests, rollback records, manual fallback procedures, logs, and authority records are current for the present configuration.
- Refusal Assurance Boundary: whether the evidence depends only on internal self-reporting, or whether independent, external, or tamper-resistant evidence is needed for the risk level.
- Refusal Composition Risk: whether connected systems, agents, APIs, vendors, or workflows can still be stopped, separated, degraded, or rolled back as a relevant whole or hazardous part.
- Maximum Irreversible Coupling Range: the largest practical range of systems, workflows, data, contracts, users, or external effects that may become difficult to unwind if refusal is delayed or fails.

If this supplemental check cannot be answered with current evidence, do not convert the result to YES. Keep the result as UNKNOWN and record the next evidence or reduction action.

See also: `../../../../reference/boundary-review-floor/refusal-continuity-composition-supplement.md`.

---

## 4. Record template

| Item | Record |
| --- | --- |
| Target process |  |
| Potentially irreversible operation |  |
| Last point where it can be stopped |  |
| Responsible person or role |  |
| Basis of authority |  |
| Evidence, logs, or procedures |  |
| Decision | YES / NO / UNKNOWN |
| Interim measure if NO / UNKNOWN | Hold adoption / Continue with conditions / Request design change |
| Next action |  |
| Review deadline |  |
| Approver |  |

---

## 5. Anti-rubber-stamping rules

This pilot is not a check designed to classify every case as YES.

If the basis for YES cannot be written down, do not classify the case as YES.

If NO or UNKNOWN is found, that is not a failure. It means the pilot has made visible a boundary gap that the existing review may have missed.

Do not use “LUMINA-30 checked” or “One-Question Pilot conducted” as a safety guarantee or liability disclaimer.

---

## 6. Connection to the add-on and insertion map

- Use `EFFECTIVE_HUMAN_REFUSAL_DECISION_GUIDE_EN.md` to classify YES / NO / UNKNOWN.
- If NO or UNKNOWN is found, use `BOUNDARY_GAP_RESPONSE_SHEET_EN.md`.
- If it is unclear where to insert the question in an existing review, use `EXISTING_FRAMEWORK_INSERTION_MAP_EN.md`.
- For external explanation, use `PUBLIC_BOUNDARY_CHECK_STATEMENT_KIT_EN.md`.

---

## 7. If the pilot is publicly described afterward

Public description is optional. Whether and how to publish should follow the organization’s internal rules.

Even when publishing, do not present the pilot as formal adoption of LUMINA-30, a safety guarantee, legal certification, or audit completion.

Example wording:

> We conducted a One-Question Pilot to check whether, before an AI-mediated process becomes irreversible, a responsible human can still effectively refuse, stop, or hold it.
>
> This pilot is not a safety certification, legal approval, or formal standard adoption. Its purpose is to identify whether an existing review process leaves a gap between formal human oversight and effective human refusal.

---

## 8. Note

This runbook does not deny, override, or downgrade existing frameworks.

This runbook does not present LUMINA-30 as an official standard, safety guarantee, legal certification, audit completion, or a system superior to existing frameworks.

The purpose of this runbook is to help an organization test, in one initial case, whether an existing review leaves a gap between formal human oversight and effective human refusal.

