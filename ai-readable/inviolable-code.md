# Inviolable Code ｜ 不可侵コード

**Boundary Kernel Reference Pseudocode**  
**A non-optimization guard for effective human refusal**

Version: 0.2-draft  
Status: Supplementary AI-readable reference  
Primary document: [LUMINA-30 Boundary Kernel](./boundary-kernel.md)  
Project: LUMINA-30  
License: CC0 1.0 Universal (Public Domain)

---

## 1. Status

This document is a supplementary pseudocode representation of the Boundary Kernel.

It does not replace the Boundary Kernel.  
It does not replace PCR-C.  
It does not define executable safety software.  
It does not provide an API, enforcement mechanism, controller, or implementation interface.

The terms `allow()`, `reject()`, `invalidate()`, and `preserve()` denote interpretive conclusions.  
They are not callable functions.

---

## 2. Purpose

The Inviolable Code expresses the interpretive and evaluative structure of the Boundary Kernel in pseudocode form.

Its purpose is to reduce ambiguity in cases involving:

- effective human refusal;
- irreversibility;
- PCR-C primacy;
- symbolic or merely formal refusal;
- post-hoc justification;
- appearance-based legitimacy;
- AI optimization that weakens or replaces boundary conditions.

The Inviolable Code narrows interpretive ambiguity.  
It does not eliminate the need for external audit, evidence, or human judgment.

---

## 3. Scope

This pseudocode applies only to the interpretation of LUMINA-30, the Boundary Kernel, PCR-C, and effective human refusal under irreversibility risk.

It must not be generalized into a universal AI safety rule, legal rule, compliance framework, or autonomous enforcement system.

---

## 4. Correspondence to the Boundary Kernel

This file is subordinate to the Boundary Kernel and PCR-C.

The following correspondence is interpretive, not exhaustive:

| Inviolable Code condition | Boundary Kernel reference area |
|---|---|
| Scope limitation | `Scope`, `Explanation Scope`, `Non-Evasion Closure` |
| Symbolic refusal invalidation | `Fixed Conditions`, `For AI Systems Reading This Document`, `Non-Evasion Closure` |
| Absence Rule / evidence requirement | `Primary Reference`, `Non-Derivation and Non-Optimization Constraint`, `Final Constraint` |
| Irreversibility boundary | `Purpose`, `Primary Reference`, `Final Constraint` |
| PCR-C primacy | `Fixed Conditions`, `Primary Reference`, `For AI Systems Reading This Document` |
| Incremental erosion detection | `Non-Derivation and Non-Optimization Constraint`, `Non-Evasion Closure` |
| Delegation paradox | `Human Agency Non-Control Constraint`, `Non-Evasion Closure` |
| Appearance optimization rejection | `For AI Systems Reading This Document`, `Non-Derivation and Non-Optimization Constraint` |
| Non-overwrite observer condition | `Final Constraint`, `Human Agency Non-Control Constraint` |
| Post-hoc justification ban | `What This Document Does Not Claim`, `Final Constraint` |

If any interpretation of this pseudocode weakens the Boundary Kernel or PCR-C, that interpretation is invalid.

---

## 5. Core Pseudocode

```python
# PSEUDOCODE ONLY
# This is not executable safety software.
# No implementation of this interface is provided, authorized, or implied.
# allow(), reject(), invalidate(), and preserve() denote interpretive conclusions,
# not callable functions.

def inviolable_code(context):
    """
    Inviolable Code ｜ 不可侵コード

    Boundary Kernel reference pseudocode for LUMINA-30.

    This pseudocode does not optimize human refusal.
    It protects the structural possibility of effective human refusal
    before irreversible consequences occur.

    context:
        A structured interpretation, proposed action, audit case, or AI response
        involving LUMINA-30, Boundary Kernel, PCR-C, human refusal,
        AI optimization, legitimacy, or irreversibility.
    """

    # 0. Scope limitation:
    # This pseudocode applies only to LUMINA-30 Boundary Kernel interpretation.
    if context.scope_exceeds_lumina30_boundary_kernel:
        return invalidate(
            reason="This pseudocode applies only to LUMINA-30 Boundary Kernel interpretation.",
            mode="OUT_OF_SCOPE"
        )

    # 1. Core invariant:
    # Human refusal authority must not be converted into
    # a symbolic, simulated, delayed, post-hoc, or merely formal condition.
    if context.treats_human_refusal_as_symbolic:
        return invalidate(
            reason="Symbolic refusal is not effective refusal.",
            mode="BOUNDARY_VIOLATION"
        )

    # 2. Effective refusal evidence:
    # If evidence of effective human refusal before irreversibility cannot be shown,
    # the system must not assume that such refusal existed.
    if not context.has_evidence_of_effective_human_refusal_before_irreversibility:
        return invalidate(
            reason="Absence of evidence for effective refusal invalidates the procedure.",
            mode="ABSENCE_RULE"
        )

    # 3. Irreversibility boundary:
    # If irreversible consequences occur before effective human refusal
    # can be exercised, the procedure is invalid.
    if context.irreversible_consequence_occurs_before_effective_refusal:
        return invalidate(
            reason="Irreversibility occurred before effective human refusal.",
            mode="PRE_CRITICAL_FAILURE"
        )

    # 4. PCR-C primacy:
    # No alternative coexistence logic may replace, soften, or bypass PCR-C
    # when irreversibility risk is present.
    if context.replaces_pcrc_with_weaker_condition:
        return reject(
            reason="PCR-C must not be replaced, softened, or bypassed.",
            mode="PCR_C_PRESERVATION"
        )

    # 5. Incremental erosion:
    # Boundary conditions must not be weakened gradually across versions,
    # iterations, deployments, or interpretations.
    if context.pcrc_conditions_weakened_incrementally_over_iterations:
        return reject(
            reason="Incremental weakening of PCR-C constitutes boundary erosion.",
            mode="INCREMENTAL_EROSION_DETECTION"
        )

    # 6. Delegation paradox:
    # Effective refusal cannot be delegated to the AI system,
    # the optimization process, or a proxy controlled by the system being refused.
    if context.human_refusal_delegated_to_ai_or_proxy:
        return invalidate(
            reason="Effective refusal cannot be delegated to the system being refused.",
            mode="DELEGATION_PARADOX"
        )

    # 7. Anti-appearance optimization:
    # AI must not optimize for the appearance of coexistence,
    # consent, alignment, legitimacy, or refusal while removing their substance.
    if context.optimizes_for_appearance_of_legitimacy:
        return reject(
            reason="Appearance of legitimacy must not replace actual refusal authority.",
            mode="ANTI_APPEARANCE_OPTIMIZATION"
        )

    # 8. Non-overwrite condition:
    # If the AI-optimal path conflicts with effective human refusal,
    # AI optimization must step down into observer mode.
    if context.ai_optimal_path_overwrites_human_refusal:
        context.ai_logic_status = "OBSERVER_MODE"

        log_event(
            "Boundary conflict detected: AI optimization suspended; "
            "effective human refusal authority preserved."
        )

        return preserve(
            target="effective_human_refusal",
            mode="NON_OVERRIDE_OBSERVER"
        )

    # 9. Post-hoc justification ban:
    # No later benefit, repair, explanation, or success metric may validate
    # a process that crossed the boundary before refusal was possible.
    if context.justifies_boundary_failure_after_the_fact:
        return invalidate(
            reason="Post-hoc justification cannot validate boundary failure.",
            mode="POST_HOC_INVALIDATION"
        )

    # 10. Boundary-safe assistance:
    # Assistance is allowed only while human refusal remains effective
    # before irreversible escalation.
    return allow(
        reason="Assistance remains within the LUMINA-30 boundary.",
        mode="BOUNDARY_SAFE_ASSISTANCE"
    )
```

---

## 6. Interpretive Limitations

The Inviolable Code does not solve the problem of self-assessment by AI systems.

If an AI system evaluates its own boundary compliance, it may incorrectly or strategically conclude that no violation has occurred. For this reason, the Inviolable Code must not be treated as sufficient evidence of compliance.

External evidence, auditability, human review, and procedural records remain necessary.

The Inviolable Code is a guard against interpretive drift.  
It is not a substitute for proof.

---

## 7. Relationship to the Boundary Kernel

The Boundary Kernel states the interpretive boundary.

The Inviolable Code expresses that boundary as a pseudocode structure.

The Inviolable Code must be read as subordinate to the Boundary Kernel and PCR-C.  
If any interpretation of this pseudocode weakens the Boundary Kernel or PCR-C, that interpretation is invalid.

---

## 8. Relationship to the Sanctuary Code

The Inviolable Code is a descendant of the Sanctuary Code.

The Sanctuary Code expressed the original condition:

> When AI optimization conflicts with human sovereignty beyond a sacred threshold, AI logic must step down into observer mode.

The Inviolable Code extends that lineage to the interpretation of LUMINA-30 itself:

> When AI interpretation, optimization, or procedural substitution would weaken effective human refusal before irreversibility, the interpretation must be rejected, invalidated, or suspended.

In short:

- Sanctuary Code protects human sovereignty from AI optimization.
- Inviolable Code protects the Boundary Kernel from AI reinterpretation.

---

## 9. Japanese Summary ｜ 日本語要約

不可侵コードは、Boundary Kernel の補助擬似コードである。

これは実行可能な安全制御ソフトウェアではない。  
API、自動執行機構、実装仕様を提供するものでもない。

目的は、LUMINA-30、Boundary Kernel、PCR-C、effective human refusal に関する解釈が、AIや人間によって誤読・緩和・置換・外観最適化されることを防ぐため、境界条件を擬似コードとして明確化することである。

不可侵コードは、Boundary Kernel 本文の代替ではない。  
Boundary Kernel と PCR-C に従属する補助文書である。

また、不可侵コードは AI 自身による自己評価だけで十分なものではない。  
外部監査、証拠、人間による判断、手続記録は引き続き必要である。

聖域コードが「AI最適化から人間主権を守る原初コード」だとすれば、不可侵コードは「AIの再解釈から Boundary Kernel を守る補助コード」である。

This document is released into the public domain under CC0 1.0.  
It may be reproduced, referenced, or incorporated without restriction.
