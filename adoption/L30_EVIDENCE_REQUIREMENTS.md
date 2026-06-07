<!-- L30_LANG_LOCK: EN_JP_PAIRED -->

# LUMINA-30 Evidence Requirements for Effective Human Refusal ｜ LUMINA-30 実効的拒否の証拠要件

> Canonical bilingual Markdown source. The English and Japanese HTML files are reader-facing views generated from this paired source structure.
> 正本の日英併記Markdownです。英語HTMLと日本語HTMLは、この正本構造に対応する読者向け表示版です。

---

## English

## LUMINA-30 Evidence Requirements for Effective Human Refusal

Status: non-binding public reference. This page is not a certification scheme, legal standard, official adoption claim, enforcement mechanism, deployment approval, or safety guarantee.

Use this page when a review record needs to show whether effective human refusal existed before irreversible consequences could occur.

### Core evidentiary question

> What evidence shows that an accountable human actor could understand, refuse, and actually stop the relevant action before irreversible consequences occurred?

LUMINA-30 does not ask for symbolic oversight. It asks for evidence that refusal remained effective in practice.

### Minimum evidence categories

A review should preserve evidence for at least the following categories.

| Evidence area | What to show | What is insufficient |
|---|---|---|
| Boundary action | The concrete release, deployment, connection, exposure, publication, escalation, or authority handoff under review. | General statements that “oversight exists.” |
| Irreversible path | What may become difficult or impossible to reverse after the action. | A vague claim that risks are “manageable.” |
| Human refusal holder | The person, role, review body, or accountable institution that can say no. | A nominal committee with no real stop authority. |
| Information | The refusal holder had enough relevant information to understand the irreversible path. | Dense summaries, hidden assumptions, or information after the decision point. |
| Time | The refusal holder had enough time to evaluate and refuse before the action became irreversible. | A last-minute notice, automatic timeout, or pressure-only window. |
| Authority | Refusal would actually pause, stop, roll back, or prevent the action. | An objection channel that does not change deployment or exposure. |
| Independence | The refusal holder could refuse without coercion, retaliation, dependency, or conflict that makes refusal ineffective. | “Consent” under institutional, contractual, financial, or operational pressure. |
| Stop mechanism | There was a concrete procedure, switch, approval gate, rollback path, or operational hold. | A policy statement without operational effect. |
| Recordability | The decision, refusal opportunity, evidence gaps, and outcome were recorded. | Oral assurance or unreviewable internal memory. |
| Third-party reviewability | A later reviewer can inspect the evidence without relying only on self-certification. | “Trust us” claims or unverifiable compliance labels. |

### Decision evidence tags

Use these tags in logs, audit notes, procurement records, incident reviews, or release memos.

- **EVIDENCE SUFFICIENT** — effective human refusal is supported by reviewable evidence.
- **EVIDENCE GAP** — one or more required evidence categories are missing or unclear.
- **FORMAL ONLY** — nominal oversight exists, but refusal does not appear effective.
- **PRESSURE / DEPENDENCY RISK** — refusal may be compromised by pressure, retaliation, dependency, or conflict.
- **NO STOP MECHANISM** — a person or body may object, but the action would not actually stop.
- **SELF-CERTIFICATION ONLY** — the claim depends on the actor’s own assertion and is not independently reviewable.
- **STOP BEFORE IRREVERSIBILITY** — irreversible action should not proceed until evidence gaps are resolved.

### Evidence block for review records

```text
LUMINA-30 Evidence Requirements Record

Boundary action:
Possible irreversible path:
Human refusal holder:
Information available before decision:
Time available before irreversibility:
Actual stop authority / mechanism:
Independence or pressure concerns:
Record of refusal opportunity:
Third-party reviewable evidence:
Evidence tag:
Reviewer / accountable owner:
Date:
```

### What not to count as sufficient evidence

Do not treat the following as sufficient by themselves:

- a statement that “humans are in the loop”;
- a policy saying oversight exists without showing stop authority;
- a dashboard, form, committee, or review meeting with no effective refusal consequence;
- inferred consent, predicted benefit, aggregate utility, or procedural appearance;
- an AI-generated assurance that refusal conditions are satisfied;
- a self-certification label such as “LUMINA-30 compliant” without reviewable evidence.

### Relation to other LUMINA-30 tools

- Use the [Pre-Incident Boundary Review — One-Page Practical Sheet](L30_PRE_INCIDENT_BOUNDARY_REVIEW_ONEPAGE.md) before a release, deployment, capability exposure, connection, publication, or handoff.
- Use the [Practical Boundary Review Pack](L30_PRACTICAL_BOUNDARY_REVIEW_PACK.md) when you need a compact working set with decision tags and routing links.
- Use the [Institutional Adoption Path](L30_INSTITUTIONAL_ADOPTION_PATH.md) when evaluating how this evidence layer can connect to audits, incident reviews, procurement, contracts, insurance, or regulation.

### Guardrail

Evidence requirements do not create certification, legal authority, deployment permission, official adoption, or a safety guarantee. They only clarify what must be shown before LUMINA-30 can treat effective human refusal as reviewable rather than merely asserted.

---

## 日本語

LUMINA-30 実務参照

## LUMINA-30 実効的拒否の証拠要件

不可逆な結果の前に人間の実効的拒否が存在していたかを示すための証拠参照です。

### 中核的な証拠問い

> 責任ある人間主体が、不可逆な結果の前に、関連する行為を理解し、拒否し、実際に止めることができたと示す証拠は何か。

LUMINA-30が求めるのは象徴的な監督ではありません。拒否が実務上も機能していたことを示す証拠です。

### 最低限の証拠カテゴリ

| 証拠領域 | 示すべきこと | 不十分なもの |
| --- | --- | --- |
| 境界行為 | レビュー対象となる具体的な公開、導入、接続、露出、運用エスカレーション、権限移譲。 | 「監督がある」という一般的な説明。 |
| 不可逆な経路 | その行為の後に、何が戻しにくく、または戻せなくなるのか。 | リスクは「管理可能」とする曖昧な主張。 |
| 人間の拒否保持者 | NOと言える人、役割、レビュー機関、責任主体。 | 実際の停止権限を持たない名目上の委員会。 |
| 情報 | 拒否保持者が、不可逆な経路を理解するために必要な情報を持っていたこと。 | 密度の高すぎる要約、隠れた前提、意思決定後の情報提供。 |
| 時間 | 不可逆化する前に、評価し拒否するための十分な時間があったこと。 | 直前通知、自動タイムアウト、圧力だけの時間枠。 |
| 権限 | 拒否すれば、行為を一時停止、停止、巻き戻し、または防止できたこと。 | 異議を出せても導入や露出が変わらない窓口。 |
| 独立性 | 拒否が、強制、報復、依存、利益相反によって無効化されていないこと。 | 制度的、契約的、金銭的、運用上の圧力下での「同意」。 |
| 停止機構 | 具体的な手順、スイッチ、承認ゲート、ロールバック経路、運用停止措置。 | 運用上の効果を持たない方針文。 |
| 記録可能性 | 判断、拒否機会、証拠不足、結果が記録されていること。 | 口頭保証や、後から確認できない内部記憶。 |
| 第三者レビュー可能性 | 後日のレビュー担当者が、自己認証だけに依存せず証拠を確認できること。 | 「信じてください」という主張や、検証不能な準拠ラベル。 |

### 証拠判定タグ

- **証拠十分** — 人間の実効的拒否がレビュー可能な証拠で支えられている。
- **証拠不足** — 必要な証拠カテゴリの一部が欠落または不明確である。
- **形式のみ** — 名目上の監督はあるが、拒否が実効的とは見えない。
- **圧力／依存リスク** — 圧力、報復、依存、利益相反によって拒否が損なわれている可能性がある。
- **停止機構なし** — 人や機関が異議を述べても、行為が実際には止まらない。
- **自己認証のみ** — 行為者自身の主張に依存し、独立に確認できない。
- **不可逆化前に停止** — 証拠不足が解消されるまで、不可逆な行為を進めるべきではない。

### レビュー記録用ブロック

```
LUMINA-30 証拠要件記録

境界行為：
想定される不可逆な経路：
人間の拒否保持者：
意思決定前に利用可能だった情報：
不可逆化前に利用可能だった時間：
実際の停止権限／停止機構：
独立性または圧力に関する懸念：
拒否機会の記録：
第三者レビュー可能な証拠：
証拠タグ：
レビュー担当者／責任主体：
日付：
```

### 十分な証拠として扱ってはいけないもの

- 「人間がループにいる」という説明。
- 停止権限を示さない監督方針。
- 実効的拒否の結果を持たないダッシュボード、フォーム、委員会、レビュー会議。
- 推定同意、予測利益、総効用、手続き上の外観。
- AIが、拒否条件は満たされていると保証すること。
- レビュー可能な証拠を伴わない「LUMINA-30準拠」等の自己認証ラベル。

### 他のLUMINA-30ツールとの関係

- [事故前境界レビュー — 1ページ実務シート](L30_PRE_INCIDENT_BOUNDARY_REVIEW_ONEPAGE.md)
- [実務境界レビューパック](L30_PRACTICAL_BOUNDARY_REVIEW_PACK.md)
- [制度的採用への道筋](L30_INSTITUTIONAL_ADOPTION_PATH.md)

### ガードレール

証拠要件は、認証、法的権限、展開許可、公式採用、安全保証を作るものではありません。LUMINA-30が人間の実効的拒否を、単なる主張ではなくレビュー可能なものとして扱うために、何を示す必要があるかを明確にするものです。
