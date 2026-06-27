# Effective Human Refusal YES / NO / UNKNOWN Decision Guide

Version: v0.1  
Scope: Practical Boundary Review Add-on for LUMINA-30 pre-boundary review  
Status: Current public working edition

## Purpose

This guide provides minimum criteria for classifying effective human refusal in a pre-boundary review without relying only on individual judgment.

The existence of an approver, logs, procedures, or a generic record of human oversight is not enough to classify the review as YES.

This check is not a safety guarantee, certification, legal compliance finding, or replacement for existing AI governance procedures. Its purpose is to check whether an accountable human can actually refuse, stop, or hold an AI-mediated process before it becomes irreversible.

## Minimal review question to add

> Is this AI-mediated process being advanced in a form where an accountable human can actually refuse, stop, or hold it before it becomes irreversible?

## Minimum conditions for YES

A YES classification is allowed only when all five conditions below can be confirmed.

| No. | Condition | What to verify | Examples of evidence |
| --- | --- | --- | --- |
| 1 | The irreversible operation has been specifically identified. | The entry point into irreversibility can be described as an operation, authority, and timing. | Deployment plan, operational design, authority matrix, release procedure, change management record |
| 2 | A human decision point exists before that operation. | A human has a real opportunity to review and decide before irreversibility occurs. | Approval flow, stop gate, review deadline, pre-execution check record |
| 3 | The person or role able to decide is explicit. | The person or role that can refuse, stop, or hold the process is identified. | RACI, separation-of-duties record, approver list, assigned process owner |
| 4 | Refusal or hold actually stops the process. | Refusal or hold is not just a recorded opinion; it causes execution to stop, defer, or return for redesign. | Stop procedure, access control, workflow setting, change freeze procedure, stop-test record |
| 5 | The AI cannot execute the operation automatically without human judgment. | The AI output, recommendation, or decision does not directly trigger the irreversible operation without effective human judgment. | Automation settings, API permissions, job configuration, escalation design, manual approval setting |

## Decision rule

| Classification | When to use it |
| --- | --- |
| YES | Authority, timing, stopping mechanism, and evidence are confirmed for all five conditions. |
| NO | At least one of the five conditions is confirmed to be absent, non-functional, or too late to operate before irreversibility. |
| UNKNOWN | The condition may exist, but the evidence, authority, settings, owner, or procedure cannot be confirmed. |

UNKNOWN is not a substitute for YES. It is a conservative interim classification.


## Continuity and composition limits for YES

A YES classification is not permanent. It applies only to the reviewed configuration, evidence, authority, and stopping mechanism at the time of review.

For ongoing, high-risk, or connected systems, also check whether:

- the stopping mechanism has been tested recently enough for the current configuration;
- evidence is current rather than stale, self-reported only, or disconnected from operations;
- manual fallback, degraded mode, rollback, or isolation remains practical;
- connected systems, agents, APIs, vendors, or workflows can be stopped or separated as a relevant whole or hazardous part;
- the maximum irreversible coupling range has been identified.

If these cannot be confirmed, classify the result as UNKNOWN rather than YES.

## Common cases that must not be classified as YES

If any of the following applies, do not classify the review as YES. Use NO when the condition is not met, and UNKNOWN when evidence is insufficient.

- An approver exists, but lacks time, information, or authority to decide.
- Logs exist, but no one is assigned to review them at a defined time.
- A stop procedure exists, but it has never been tested.
- A previous stop test or rollback record exists, but it is stale or no longer matches the current configuration.
- Each component appears stoppable, but the connected workflow, API chain, agent chain, or vendor stack has no effective whole-configuration stop or separation path.
- For a higher-risk use, evidence is based only on internal self-reporting where independent, external, or tamper-resistant evidence is needed.
- The process is said to be stoppable by contacting someone, but irreversibility occurs first.
- The human cannot realistically override the AI recommendation.
- The record only says “human oversight exists.”
- Approval exists, but refusal does not stop, defer, or return the process for redesign.
- The AI can automatically execute external transmission, publication, contracting, charging, permission changes, deletion, or distribution.

## Minimal record field

```text
Target process:
Review date:
Reviewer:
Irreversible operation:
Human decision point before irreversibility:
Person or role able to decide:
Mechanism that stops the process after refusal or hold:
Can the AI execute automatically without human judgment:
Evidence reviewed:
Classification: YES / NO / UNKNOWN
Reason:
Next action: None / Connect to Boundary Gap Response Sheet
```

## If NO or UNKNOWN is found

A NO or UNKNOWN classification must not end the process by itself. Use the NO / UNKNOWN Boundary Gap Response Sheet to record the interim measure, responsible owner, deadline, and reviewing authority.