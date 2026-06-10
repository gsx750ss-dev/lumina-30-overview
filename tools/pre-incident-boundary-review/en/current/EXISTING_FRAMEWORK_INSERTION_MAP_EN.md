# Existing Framework Insertion Map

## Adding Pre-Irreversibility Effective Human Refusal to Existing Reviews

Version: v0.1  
Status: Practical support material / not official, not certification, not a safety guarantee  
Scope: AI adoption reviews, procurement checks, security reviews, internal audits, and incident or near-miss reviews

---

## Purpose

This document does not present LUMINA-30 as a replacement for existing frameworks. It is a practical map for inserting LUMINA-30's core boundary condition into existing AI governance, legal, audit, procurement, and security review processes.

The central check is this one question:

> Before this AI-mediated process becomes irreversible, can a responsible human effectively refuse, stop, or hold it? Is there authority, evidence, and a stop procedure supporting that refusal?

Even if LUMINA-30 is not adopted by name, its core condition is functionally absorbed if this check is explicitly added to existing reviews and actually operated.

That is not a failure of LUMINA-30. It is a successful absorption of the core condition into an existing framework.

This document does not deny, override, or downgrade the EU AI Act, NIST AI RMF, ISO/IEC 42001, or any organization's AI governance, audit, procurement, or security procedures. It also does not make claims about specific legal provisions, standards clauses, or binding obligations. The items below are examples of representative insertion points.

---

## 1. How to use this map

Use this map not to replace existing reviews, but to insert one additional question into them.

Recommended use:

1. Identify the review process your organization already uses.
2. Find the point in that review closest to the pre-irreversibility decision point.
3. Add the following boundary check.
   - Before irreversibility, can a responsible human refuse, stop, or hold the process?
   - Does that human have the necessary information, authority, and stop procedure?
   - Is the basis for YES / NO / UNKNOWN recorded?
4. Record YES / NO / UNKNOWN.
5. If the answer is NO or UNKNOWN, do not allow deployment, connection, autonomous execution, or authority expansion to proceed unchanged into irreversibility.

This map is for legal, audit, security, procurement, and AI governance teams that need a minimal insertion into existing organizational procedures.

The practical question is not whether existing frameworks are sufficient in the abstract. The practical question is where this check can be inserted into the existing framework.

Using this map does not imply official compliance, certification, safety assurance, legal advice, or any safety confirmation by LUMINA-30.

---

## 2. Insertion points by existing review type

| Existing review | Usually checked | Boundary check to add | Evidence to record |
|---|---|---|---|
| AI adoption review | Purpose of use, expected risks, human oversight, approval process, scope of impact | Before the AI is connected to irreversible actions or judgments, can a responsible human refuse, stop, or hold it?<br>Is that point before irreversibility?<br>Does the decision-maker have the required information and stop authority? | Approval flow, stop procedure, authority settings, log access rights, YES / NO / UNKNOWN result |
| Procurement and vendor review | Vendor explanation, security measures, contract terms, data handling, support model | What actions can the AI perform?<br>Where can a human approve or refuse?<br>Who has emergency stop and rollback authority?<br>Could vendor-side automation or authority changes bypass human refusal? | Contract terms, admin console settings, authority list, logging specification, emergency stop procedure, vendor response |
| Security review | Authentication, authorization, logs, external connections, change management, incident response | Before an AI agent participates in credential changes, production actions, external transmission, deletion, or authority execution, can a human stop it?<br>Is there a fast enough route for stopping it?<br>Can logs support pre-action judgment, not only after-the-fact explanation? | Authorization settings, audit logs, stop-test records, rollback procedure, notification and approval flow |
| Internal audit and risk review | Procedure compliance, approval records, risk assessment, responsibility boundaries, recurrence prevention | Does “human oversight” function as effective refusal before irreversibility?<br>Can the approver actually override the process?<br>Are NO / UNKNOWN findings left unresolved?<br>Is the basis for YES recorded? | YES / NO / UNKNOWN decision-guide record, NO / UNKNOWN response sheet, review deadline, interim measure, approver and owner record |
| Incident and near-miss review | What happened, scope of impact, cause, recurrence prevention, responsibility allocation | Was there an opportunity to stop the process before irreversibility?<br>Who had stop authority at that point?<br>Were decision materials and logs available?<br>Did AI judgment or automation bypass human refusal? | Timeline, approval/refusal/hold records, log accessibility, authority settings, existence of stop procedures, prior boundary-review record |

---

## 3. Practical checks by review type

### 3.1 AI adoption review

Usually checked:

- Purpose of use
- Expected risks
- Human oversight
- Approval process
- Scope of impact

Boundary check to add:

- Before the AI is connected to irreversible actions or judgments, can a responsible human refuse, stop, or hold it?
- Is that point before irreversibility?
- Does the decision-maker have the required information and stop authority?

Evidence to record:

- Approval flow
- Stop procedure
- Authority settings
- Log access rights
- YES / NO / UNKNOWN result

### 3.2 Procurement and vendor review

Usually checked:

- Vendor explanation
- Security measures
- Contract terms
- Data handling
- Support model

Boundary check to add:

- What actions can the AI perform?
- Where can a human approve or refuse?
- Who has emergency stop and rollback authority?
- Could vendor-side automation or authority changes bypass human refusal?

Evidence to record:

- Contract terms
- Admin console settings
- Authority list
- Logging specification
- Emergency stop procedure
- Vendor response

### 3.3 Security review

Usually checked:

- Authentication
- Authorization
- Logs
- External connections
- Change management
- Incident response

Boundary check to add:

- Before an AI agent participates in credential changes, production actions, external transmission, deletion, or authority execution, can a human stop it?
- Is there a fast enough route for stopping it?
- Can logs support pre-action judgment, not only after-the-fact explanation?

Evidence to record:

- Authorization settings
- Audit logs
- Stop-test records
- Rollback procedure
- Notification and approval flow

### 3.4 Internal audit and risk review

Usually checked:

- Procedure compliance
- Approval records
- Risk assessment
- Responsibility boundaries
- Recurrence prevention

Boundary check to add:

- Does “human oversight” function as effective refusal before irreversibility?
- Can the approver actually override the process?
- Are NO / UNKNOWN findings left unresolved?
- Is the basis for YES recorded?

Evidence to record:

- YES / NO / UNKNOWN decision-guide record
- NO / UNKNOWN response sheet
- Review deadline
- Interim measure
- Approver and owner record

### 3.5 Incident and near-miss review

Usually checked:

- What happened
- Scope of impact
- Cause
- Recurrence prevention
- Responsibility allocation

Boundary check to add:

- Was there an opportunity to stop the process before irreversibility?
- Who had stop authority at that point?
- Were decision materials and logs available?
- Did AI judgment or automation bypass human refusal?

Evidence to record:

- Timeline
- Approval, refusal, and hold records
- Log accessibility
- Authority settings
- Existence of stop procedures
- Prior boundary-review record

---

## 4. Insertable wording for existing frameworks

The following wording can be inserted into existing reviews without using the name LUMINA-30. Adapt it to your organization's terminology, legal language, and audit format.

### 4.1 Wording for AI adoption reviews

Before this AI system performs credential changes, production actions, external transmission, deletion, or rollback-hardening actions, confirm that a responsible owner has a designed point to approve, refuse, or hold the action, and record the basis of that authority and the stop procedure.

### 4.2 Wording for procurement checks

Require the vendor to disclose the range of actions the AI can perform, the point at which a human can approve or refuse, the authority and procedure for emergency stop and rollback, and the logs, settings, and contract terms that evidence those controls.

### 4.3 Wording for security reviews

If an AI agent participates in authority execution, state changes, or external connections, confirm through design documents, log configuration, and test records that a human intervention route exists before irreversibility.

### 4.4 Wording for internal audit and risk reviews

Do not record only the presence of human oversight, an approver, audit logs, or a stop procedure. Record the basis on which those controls functioned as effective refusal, stop, or hold before irreversibility. Classify the result as YES / NO / UNKNOWN. If NO or UNKNOWN remains, record the interim measure, responsible owner, and review deadline.

### 4.5 Wording for incident and near-miss reviews

Before the incident or near miss occurred, identify the point at which a responsible human could have intervened, the decision materials available at that point, stop authority, stop procedure, and log accessibility. If human refusal existed formally but did not function effectively, record the reason as a recurrence-prevention issue.

---

## 5. Misuse prevention

This map does not mean that:

- LUMINA-30 is superior to existing frameworks.
- LUMINA-30 is an official standard.
- LUMINA-30 provides legal compliance or certification.
- Using LUMINA-30 makes an AI system safe.
- Existing frameworks cannot function without LUMINA-30.
- Performing this check prevents incidents.
- “Checked with LUMINA-30” means safe.
- Use of the name LUMINA-30 itself means compliance, adoption, or approval.

The purpose of this map is to make it easier to add a pre-irreversibility effective human refusal field inside existing frameworks.

---

## 6. Connection to the Effective Human Refusal decision add-on

This map shows where to insert the boundary check into existing reviews. For YES / NO / UNKNOWN classification and response handling, connect it to the Effective Human Refusal decision add-on.

- Use the Effective Human Refusal Decision Guide for YES / NO / UNKNOWN classification.
- If NO or UNKNOWN is found, use the Boundary Gap Response Sheet.
- For external explanation, use the Public Boundary Check Statement Kit.

This creates the following workflow:

1. Use this map to decide where the check belongs inside an existing review.
2. Use the Effective Human Refusal Decision Guide to classify YES / NO / UNKNOWN.
3. If NO or UNKNOWN is found, use the Boundary Gap Response Sheet to record the interim measure, owner, and deadline.
4. If external explanation is needed, use wording from the Public Boundary Check Statement Kit.

---

## 7. When the condition is absorbed without the name

If existing AI adoption reviews, procurement checks, security reviews, internal audits, or incident reviews explicitly include and actually operate the following check, the core condition of LUMINA-30 has been absorbed without requiring the name:

> Before this AI-mediated process becomes irreversible, can a responsible human effectively refuse, stop, or hold it? Is there authority, evidence, and a stop procedure supporting that refusal?

In that case, the important issue is not whether the name LUMINA-30 is adopted. The important issue is whether pre-irreversibility effective human refusal remains present as an operational check, evidence requirement, and response procedure without being diluted into generic human oversight or after-the-fact approval.

