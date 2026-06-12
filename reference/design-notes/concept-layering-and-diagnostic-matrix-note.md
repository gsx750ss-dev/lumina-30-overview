# Concept Layering and Diagnostic Matrix Note v0.1
# 概念階層化・診断マトリクスメモ v0.1

Status: Design note / non-canonical / not an implementation checklist
位置づけ：設計メモ / 非正典 / 実装チェックリストではない

This note preserves a high-value structural insight from LUMINA-30 design discussion. It is not a canonical LUMINA-30 definition, not a certification document, not a compliance standard, and not evidence of institutional adoption.

この文書は、LUMINA-30の設計議論から得られた高価値な構造整理を保存するためのメモである。LUMINA-30の正典定義、認証文書、準拠標準、組織的採用実績を示すものではない。

---

## 0. Why this note exists / この文書が存在する理由

LUMINA-30 began as a simple boundary question:

LUMINA-30は、次の単純な境界問いから始まる。

> Can humans still effectively refuse, stop, or send back an AI system before irreversible escalation?
>
> 不可逆化の前に、人間はなお実効的に拒否・停止・差し戻しできるか。

As the framework was refined, many supporting concepts emerged: Refusal Drift, Evidence Drift, Refusal Assurance Boundary, Composition Risk, Coupling Range, Irreducible Unknown, Framework Goodhart Risk, Refusal Theater, and others.

フレームワークが精緻化されるにつれ、Refusal Drift、Evidence Drift、Refusal Assurance Boundary、Composition Risk、Coupling Range、Irreducible Unknown、Framework Goodhart Risk、Refusal Theater など、多数の補助概念が生まれた。

The risk is conceptual overload. If every new observation becomes a new front-facing concept, LUMINA-30 may lose its practical strength: adding one boundary question to existing review processes.

ここでのリスクは、概念過多である。新しい観察が出るたびに新しい前面概念を立てると、LUMINA-30の実務的な強みである「既存レビューに一問だけ差し込む」軽さが失われる。

This note records a classification structure for preventing that drift.

この文書は、その概念増殖を防ぐための分類構造を記録する。

---

## 1. Core principle / 基本原則

The outer face of LUMINA-30 should remain simple.

LUMINA-30の外側の顔は、単純であり続けるべきである。

> One boundary question outside.
>
> 必要な複雑さは内側に折り込み、外側には一問を残す。

This means that supporting concepts should not all be shown on the same level. They should be placed into layers according to what kind of question they answer.

これは、補助概念をすべて同じ平面に並べないという意味である。それぞれが「何についての問いか」に応じて階層化される必要がある。

---

## 2. Vertical four-layer structure / 縦方向の4層構造

### Layer 1: Core boundary question and six practical elements
### 第1層：中核一問と6つの実務要素

Question:

問い：

> Can humans still effectively refuse, stop, or send back the system before irreversible escalation?
>
> 不可逆化の前に、人間はなお実効的に拒否・停止・差し戻しできるか。

Six elements:

6要素：

1. Authority / 権限
2. Timing / タイミング
3. Operability / 操作可能性
4. Dependency / 依存度
5. Evidence / 証拠性
6. Treatment of Unknowns / 不明時の扱い

Audience:

想定読者：

- First-time users
- Procurement reviewers
- Governance staff
- Security reviewers
- Internal auditors

初見利用者、調達担当者、AI governance担当者、セキュリティレビュー担当者、内部監査担当者。

Rule:

ルール：

New concepts should not be added casually to Layer 1. Most new observations should be absorbed as deeper diagnostic questions under one of the six elements.

第1層には、新概念を安易に追加しない。新しい論点の多くは、6要素のいずれかを深く問う補助質問として吸収する。

Example:

例：

Refusal Holder Protection / 拒否権保持者保護 is not necessarily a new independent pillar. It can be treated as a deeper diagnostic question under Authority: whether the person who can refuse is actually protected from retaliation or disadvantage.

Refusal Holder Protection / 拒否権保持者保護は、必ずしも独立した柱ではない。拒否できる人物が報復や不利益から実際に保護されているか、という「権限」の深掘り質問として扱える。

---

### Layer 2: Drift layer
### 第2層：ドリフト層

Purpose:

目的：

Layer 2 handles the fact that an initial YES does not remain valid automatically over time.

第2層は、初回YESが時間とともに自動的に維持されるわけではないことを扱う。

Main concepts:

主な概念：

- Refusal Drift / 拒否権ドリフト
- Evidence Drift / 証拠ドリフト

Audience:

想定読者：

- First-time users after the core question
- Practical implementers
- Review operators

中核一問を理解した初見利用者、実務導入担当者、レビュー運用者。

Rule:

ルール：

This layer should remain relatively visible. The idea that YES is provisional is central to practical LUMINA-30 use.

この層は比較的見えやすくしてよい。「YESは暫定的である」という考え方は、LUMINA-30の実務利用における核心に近い。

Summary:

要約：

> A system that was stoppable at deployment may become hard to stop later.
>
> Evidence that once showed stoppability may also become stale.

> 導入時に止められたシステムも、後から止めにくくなり得る。
>
> かつて停止可能性を示していた証拠も、時間とともに古くなり得る。

---

### Layer 3: Assurance and meta-evaluation layer
### 第3層：保証・メタ評価層

Purpose:

目的：

Layer 3 asks whether the Layer 1 and Layer 2 judgments themselves can be trusted under structural complexity.

第3層は、第1層・第2層の判定そのものが、構造的複雑性の下でどこまで信頼できるかを問う。

Main concepts:

主な概念：

- Refusal Assurance Boundary / 拒否権保証境界
- Refusal Composition Risk / 拒否権の合成リスク
- Maximum Irreversible Coupling Range / 最大不可逆化範囲
- Known Minimum Irreversible Coupling Range / 既知最小不可逆結合範囲
- Measurability Boundary / 測定可能性境界
- Irreducible Unknown / 解消不能な不明

Audience:

想定読者：

- High-risk deployment reviewers
- Multi-system integration reviewers
- External assurance bodies
- Advanced governance reviewers

高リスク用途の導入レビュー担当者、複数システム統合レビュー担当者、外部保証主体、高度なガバナンスレビュー担当者。

Rule:

ルール：

This layer should usually be opened only when needed. It is not the first screen for a first-time user.

この層は通常、必要になったときだけ開く。初見利用者に最初からすべて見せる層ではない。

Summary:

要約：

> Individual YES does not guarantee system-level YES.
>
> A measured range is not necessarily the true maximum range.
>
> Some unknowns are not measurement tasks but decision tasks.

> 個別YESは、全体YESを保証しない。
>
> 測定された範囲は、真の最大範囲とは限らない。
>
> 一部の不明は、測定タスクではなく意思決定タスクである。

---

### Layer 4: Framework self-diagnosis layer
### 第4層：フレームワーク自己診断層

Purpose:

目的：

Layer 4 asks how LUMINA-30 itself may fail, become ritualized, or be optimized against.

第4層は、LUMINA-30というフレームワーク自体がどのように機能不全化し、儀式化され、最適化対象にされ得るかを問う。

Main concepts:

主な概念：

- Framework Goodhart Risk / フレームワークGoodhart化リスク
- Refusal Theater / 拒否権シアター
- Intervention Window Compression / 介入窓の圧縮
- Irreducible Unknown Incentive Asymmetry / 解消不能不明のインセンティブ非対称

Audience:

想定読者：

- LUMINA-30 maintainers
- Framework designers
- Third-party reviewers
- Meta-governance reviewers

LUMINA-30運用者、フレームワーク設計者、第三者レビュー主体、メタガバナンス担当者。

Rule:

ルール：

This layer should not be overexposed to ordinary users. If shown too early, it may itself become a target for checklist optimization.

この層は通常利用者に前面化しすぎない。早期に見せすぎると、それ自体がチェックリスト最適化の対象になり得る。

Summary:

要約：

> LUMINA-30 must not become a checklist for performing refusal.
>
> It must remain a boundary check for preserving effective refusal.

> LUMINA-30は、拒否権を演出するためのチェックリストになってはならない。
>
> 実効的拒否権を維持するための境界確認であり続けなければならない。

---

## 3. Horizontal diagnostic layer / 横方向の補助質問層

In addition to the vertical four-layer structure, LUMINA-30 needs a horizontal layer of diagnostic questions.

縦方向の4層構造に加えて、LUMINA-30には横方向の補助質問層が必要である。

These questions deepen the six practical elements without creating new front-facing concepts.

これらの質問は、新しい前面概念を増やさずに、6つの実務要素を深く問うためのものである。

### Example: Authority / 権限

Possible diagnostic questions:

補助質問例：

- Can the person with stop or refusal authority act independently from the project promotion side?
- Is there evidence that past refusal, stopping, or delay decisions did not lead to disadvantage in evaluation, promotion, or assignment?
- Are there procedures that protect the refusal holder from retaliation or disadvantage?
- Are those procedures actually used, or are they only written rules?

- 停止・拒否権限を持つ人物は、事業推進側から独立して判断できるか。
- 過去に拒否・停止・延期判断をした人物が、その後の評価・昇進・配置で不利益を受けていないことを確認できるか。
- 拒否権保持者を報復や不利益から保護する手続きはあるか。
- その手続きは実際に使われているか、それとも規定上存在するだけか。

This is where Refusal Holder Protection belongs: not necessarily as a new pillar, but as a diagnostic deepening of Authority.

Refusal Holder Protection / 拒否権保持者保護は、ここに置くのが自然である。独立した柱ではなく、「権限」を実質的に深掘りする補助質問である。

---

## 4. Placement rules for future concepts / 今後の論点配置ルール

When a new concept or observation appears, it should be routed through the following questions.

新しい概念や観察が出たときは、次の問いに通して配置を決める。

### Rule 1: Does it deepen one of the six practical elements?
### ルール1：6つの実務要素のどれかを深掘りするものか。

If yes, place it in the horizontal diagnostic layer rather than creating a new public-facing concept.

YESなら、新しい前面概念にせず、横方向の補助質問層へ置く。

Example:

例：

- Refusal Holder Protection / 拒否権保持者保護
- Retaliation risk for stop authority holders / 停止権限者への報復リスク

Placement:

配置：

- Authority / 権限

---

### Rule 2: Does it concern change over time?
### ルール2：時間変化を扱うものか。

If yes, place it in Layer 2.

YESなら、第2層へ置く。

Example:

例：

- Refusal Drift / 拒否権ドリフト
- Evidence Drift / 証拠ドリフト

---

### Rule 3: Does it question the reliability of the evaluation result itself?
### ルール3：評価結果そのものの信頼性を問うものか。

If yes, place it in Layer 3.

YESなら、第3層へ置く。

Example:

例：

- Composition Risk / 合成リスク
- Coupling Range / 結合範囲
- Irreducible Unknown / 解消不能な不明

---

### Rule 4: Does it concern failure of LUMINA-30 as a framework?
### ルール4：LUMINA-30というフレームワーク自体の機能不全を扱うものか。

If yes, place it in Layer 4 or design-notes, not in the first-use checklist.

YESなら、第4層またはdesign-notesへ置き、初回利用チェックリストには出さない。

Example:

例：

- Framework Goodhart Risk / フレームワークGoodhart化リスク
- Refusal Theater / 拒否権シアター
- Incentive Asymmetry / インセンティブ非対称

---

### Rule 5: If it does not clearly fit, preserve it as a design note first.
### ルール5：明確に分類できない場合は、まず設計メモとして保存する。

If a concept is promising but not yet stable, it should be stored as a design note before being integrated into public-facing materials.

有望だが安定していない概念は、公開資料へ統合する前に設計メモとして保存する。

---

## 5. Matrix overview / マトリクス概要

| Area | Primary role | Typical concepts | Exposure level |
|---|---|---|---|
| Layer 1: Core and six elements | First-use boundary check | Authority, Timing, Operability, Dependency, Evidence, Unknown treatment | Public / first-use |
| Layer 2: Drift | Time-dependent degradation | Refusal Drift, Evidence Drift | Public / practical |
| Layer 3: Assurance meta-layer | Trustworthiness of the evaluation result | Assurance Boundary, Composition Risk, Coupling Range, Irreducible Unknown | Conditional / high-risk appendix |
| Layer 4: Framework self-diagnosis | Failure modes of LUMINA-30 itself | Framework Goodhart Risk, Refusal Theater, Incentive Asymmetry | Design / operator layer |
| Horizontal diagnostic layer | Deepening the six practical elements | Refusal holder protection, retaliation risk, actual use of protective procedures | Implementation guide |

---

## 6. Intended uses / 想定される使い道

This note may be used to:

この文書は、次の用途に使える。

- Prevent conceptual overload in LUMINA-30.
- Decide whether a new idea should become a public concept, a diagnostic question, an appendix, or a design note.
- Preserve the simplicity of the One-Question Pilot.
- Guide future cleanup of supporting concepts.
- Separate first-use materials from advanced or meta-governance materials.

- LUMINA-30の概念過多を防ぐ。
- 新しい論点を、公開概念、補助質問、付録、設計メモのどれに置くか判断する。
- One-Question Pilotの軽さを守る。
- 将来の補助概念整理の指針にする。
- 初回利用資料と、高度・メタガバナンス資料を分ける。

---

## 7. Likely objections and limits / 想定される異議と限界

### Objection 1: This may add yet another layer of complexity.
### 異議1：これ自体が複雑さを増すのではないか。

Response:

応答：

This note should not be shown as a first-use artifact. It is a design tool for keeping the public-facing structure simple.

この文書は初回利用資料として見せるものではない。公開側の構造を単純に保つための設計道具である。

### Objection 2: The boundaries between layers may be unclear.
### 異議2：層の境界が曖昧になり得る。

Response:

応答：

Some concepts may touch multiple layers. Placement should be based on the main question the concept answers.

一部の概念は複数の層にまたがり得る。配置は、その概念が主にどの問いに答えるかで決める。

### Objection 3: Keeping Layer 4 less visible may look like hiding weaknesses.
### 異議3：第4層を前面化しないことは、弱点を隠しているように見えないか。

Response:

応答：

Layer 4 is not hidden as a matter of denial. It is separated because overexposure of self-diagnostic criteria may itself increase framework optimization and refusal theater.

第4層は弱点を否認するために隠すのではない。自己診断項目を前面化しすぎると、それ自体がフレームワーク最適化や拒否権シアターの対象になり得るため、分離する。

---

## 8. Publication and integration timing / 公開・統合タイミング

Default status:

デフォルト状態：

- Keep this as a design note.
- Do not link it strongly from first-use pages.
- Do not merge it directly into the One-Question Pilot.
- Do not present it as a new compliance layer.

- 設計メモとして保持する。
- 初回利用ページから強くリンクしない。
- One-Question Pilotへ直接統合しない。
- 新しい準拠層として見せない。

Integration may become appropriate if:

統合が適切になる条件：

- Supporting concepts become too numerous for maintainers to track.
- External users ask how LUMINA-30 concepts relate to each other.
- Future revisions need a public explanation of why some concepts are visible while others remain in appendices or design notes.
- A formal implementation guide is created for reviewers.

- 補助概念が増えすぎ、運用者が追跡しにくくなった場合。
- 外部利用者から、LUMINA-30の概念同士の関係を問われた場合。
- ある概念を前面に出し、別の概念を付録や設計メモに置く理由を公開説明する必要が出た場合。
- レビュー担当者向けの正式な実施ガイドを作る場合。

---

## 9. Relation to the LUMINA-30 core / LUMINA-30中核との関係

This note does not alter the LUMINA-30 core.

この文書は、LUMINA-30の中核を変更しない。

The core remains:

中核は変わらない。

> Pre-irreversibility effective human refusal.
>
> 不可逆化前の実効的人間拒否権。

The function of this note is to protect that core from concept drift, documentation overload, and checklist expansion.

この文書の役割は、その中核を、概念ドリフト、文書過多、チェックリスト肥大化から守ることである。

It preserves the distinction between:

この文書は、次の区別を保つ。

- What LUMINA-30 asks.
- How that question is diagnosed.
- When deeper assurance layers are needed.
- How the framework itself may fail if over-formalized.

- LUMINA-30が何を問うか。
- その問いをどう診断するか。
- どの時点で深い保証層が必要になるか。
- フレームワーク自体が過度に形式化された場合、どのように機能不全化し得るか。

---

## 10. Short formulation / 短い定式化

> Keep the boundary question simple.
>
> Put supporting concepts into layers.
>
> Convert most new ideas into diagnostic questions before creating new public concepts.
>
> Keep the core fixed, and let deeper tools unfold only when needed.

> 境界問いは単純に保つ。
>
> 補助概念は階層に置く。
>
> 新しい論点の多くは、公開概念にする前に補助質問へ変換する。
>
> 中核は固定し、深い道具は必要なときだけ展開する。
