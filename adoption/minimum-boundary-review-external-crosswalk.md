<!-- File: lumina-30-overview/adoption/minimum-boundary-review-external-crosswalk.md -->

# Minimum Boundary Review External Crosswalk ｜ 最小境界レビュー外部接続表

## Status ｜ 位置づけ

This document is a non-core, non-binding adoption reference for mapping the LUMINA-30 Minimum Boundary Review to existing governance, audit, procurement, incident review, and risk-management workflows.
It does not modify LUMINA-30 Core Terminology and does not create new binding obligations.

This document does not replace NIST, ISO, OECD, EU AI Act, procurement, audit, or organizational risk-management processes.
It identifies where a short LUMINA-30 boundary-responsibility question can be inserted into those existing processes.

本資料は、LUMINA-30の最小境界レビューを、既存のガバナンス、監査、調達、事故レビュー、リスク管理ワークフローへ対応づけるための、非コア・非拘束の導入参照である。
LUMINA-30のコア用語を変更せず、新たな拘束的義務を作成しない。

本資料は、NIST、ISO、OECD、EU AI Act、調達、監査、組織的リスク管理の各プロセスを置き換えない。
それら既存プロセスのどこに、短いLUMINA-30境界責任質問を差し込めるかを示す。

---

## Purpose ｜ 目的

The fastest external adoption path is not to ask institutions to adopt the whole LUMINA-30 framework.
The fastest path is to add a minimum boundary review question to review surfaces they already use.

外部採用の最短経路は、組織にLUMINA-30全体の採用を求めることではない。
最短経路は、すでに使われているレビュー面に、最小境界レビュー質問を追加することである。

Minimum insertion question:

> Before irreversible consequences occur, does the process verify whether effective human refusal, correction, recovery, or rollback remains practically available, and whether responsibility for preserving those conditions is explicitly assigned?

最小差し込み質問：

> 不可逆的結果が生じる前に、有効な人間拒否・修正・回復・撤回が実効的に利用可能であり続けるか、またそれらの条件を保存する責任が明示的に割り当てられているかを確認しているか。

---

## External Crosswalk ｜ 外部接続表

| Existing surface | Insert the Minimum Boundary Review here | What LUMINA-30 adds |
|---|---|---|
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | Govern, Map, Measure, or Manage review notes; risk register entries; incident learning records | A boundary-responsibility check for whether effective refusal, correction, recovery, or rollback remains practically available before irreversibility |
| [NIST Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) | Generative AI risk action tracking; deployment review; misuse and overreliance review | A compact check for whether optimization-driven deployment removes human intervention conditions before irreversible effects |
| [ISO/IEC 42001 AI management system](https://www.iso.org/standard/42001) | Responsibility assignment, records, internal audit, corrective action, continual improvement | A reviewable question about who preserves boundary responsibility, evidence, verification, and correction before irreversibility |
| [OECD AI risks and incidents](https://www.oecd.org/en/topics/ai-risks-and-incidents) | Incident and hazard evidence, reporting notes, accountability review, post-incident learning | A post-incident boundary finding: whether effective refusal existed before irreversible consequences, and whether undefined responsibility contributed to failure |
| [EU AI Act Article 27 fundamental-rights impact assessment](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-27) | Impact description, affected groups, risk measures, human oversight, mitigation review | A pre-deployment question about whether affected humans retain practical refusal, correction, recovery, or rollback conditions before irreversibility |
| Internal AI governance review | Project approval notes, model deployment review, high-impact system review | A short boundary-responsibility field that can be added without replacing the review structure |
| Audit checklist | Evidence review, responsibility review, corrective-action review | A check for whether the audit verifies practical refusal and responsibility assignment before irreversible effects |
| Procurement review | Supplier requirements, scope review, update controls, termination clauses | A clause asking whether the supplier and deployer preserve refusal, rollback, evidence, verification, and correction responsibilities |
| Incident report | Timeline, cause, impact, containment, lessons learned | A boundary finding that distinguishes technical failure, responsibility diffusion, evidence absence, anti-bypass failure, and delayed correction |
| Organizational risk register | Risk description, owner, controls, evidence, review date | A minimal field for boundary risk, responsible actor, evidence, anti-bypass condition, and next review point |

---

## Minimal Field to Add ｜ 追加する最小欄

Use the following field when the existing process cannot accept a full LUMINA-30 form.

既存プロセスがLUMINA-30の完全な帳票を受け入れにくい場合は、以下の最小欄を使用する。

```text
LUMINA-30 Minimum Boundary Review:
Before irreversible consequences occur, are effective human refusal, correction, recovery, or rollback practically available?
Responsible actor:
Evidence:
Anti-bypass condition:
Correction owner:
Decision tag: Preserved / Not Demonstrated / Not Applicable / Needs Review
```

```text
LUMINA-30 最小境界レビュー：
不可逆的結果が生じる前に、有効な人間拒否・修正・回復・撤回は実効的に利用可能か。
責任主体：
証拠：
迂回防止条件：
是正責任主体：
判定タグ：Preserved / Not Demonstrated / Not Applicable / Needs Review
```

---

## How to Use This Crosswalk ｜ この接続表の使い方

1. Identify the existing workflow already used by the institution.
2. Select the closest row in the crosswalk.
3. Insert the Minimum Boundary Review field at the corresponding review surface.
4. Do not claim that LUMINA-30 replaces the existing framework.
5. Record whether responsibility, evidence, anti-bypass review, and correction ownership are explicitly assigned before irreversibility.

1. その組織がすでに使用している既存ワークフローを特定する。
2. 本接続表から最も近い行を選ぶ。
3. 対応するレビュー面に、最小境界レビュー欄を差し込む。
4. LUMINA-30が既存枠組みを置き換えるとは主張しない。
5. 不可逆化前に、責任、証拠、迂回防止確認、是正責任が明示的に割り当てられているかを記録する。

---

## Relationship to Other LUMINA-30 Materials ｜ 他のLUMINA-30資料との関係

- [Minimum Boundary Review Adoption Pack ｜ 最小境界レビュー導入パック](./minimum-boundary-review-adoption-pack.md) provides the compact adoption block and decision tags.
- [Rapid Implementation Bridge ｜ 迅速実装ブリッジ](./rapid-implementation-bridge.md) explains the fast implementation route.
- [Minimum Boundary Review Form ｜ 最小境界レビュー票](../templates/minimum-boundary-review-form.md) provides a short form for practical use.
- [How the Boundary Responsibility Mechanism Works ｜ 境界責任メカニズムの仕組み](./how-the-boundary-responsibility-mechanism-works.md) explains the mechanism behind the review.

- [Minimum Boundary Review Adoption Pack ｜ 最小境界レビュー導入パック](./minimum-boundary-review-adoption-pack.md) は、短い導入欄と判定タグを提供する。
- [Rapid Implementation Bridge ｜ 迅速実装ブリッジ](./rapid-implementation-bridge.md) は、迅速実装の経路を説明する。
- [Minimum Boundary Review Form ｜ 最小境界レビュー票](../templates/minimum-boundary-review-form.md) は、実務用の短い帳票を提供する。
- [How the Boundary Responsibility Mechanism Works ｜ 境界責任メカニズムの仕組み](./how-the-boundary-responsibility-mechanism-works.md) は、レビュー背後の仕組みを説明する。

---

## Non-Prescriptive Boundary ｜ 非処方的境界

This crosswalk does not determine the correct legal, policy, technical, procurement, or enforcement mechanism.
Those decisions belong to competent institutions in each domain.

LUMINA-30 only asks whether the boundary condition was preserved:

> Were effective human refusal, correction, recovery, or rollback practically available before irreversible consequences, and was responsibility for preserving those conditions explicitly assigned?

本接続表は、正しい法律・政策・技術・調達・執行メカニズムを決定しない。
それらの判断は、各分野の適格な制度主体に属する。

LUMINA-30が問うのは、境界条件が保存されていたかである。

> 不可逆的結果が生じる前に、有効な人間拒否・修正・回復・撤回は実効的に利用可能であり、それらの条件を保存する責任は明示的に割り当てられていたか。
