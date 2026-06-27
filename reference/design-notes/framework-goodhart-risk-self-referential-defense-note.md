# Framework Goodhart Risk and Self-Referential Defense Note v0.3
# フレームワークGoodhart化リスクと自己言及的防御メモ v0.3

Status: supplementary design note / 補助設計メモ
Date: 2026-06-13
Scope: non-canonical LUMINA-30 design-note archive

This note is a standalone supplementary design note. It does not modify the LUMINA-30 canonical core, does not create a certification scheme, and does not claim legal, regulatory, academic, or institutional adoption.

この文書は、補助的な設計上の観察を保存するための単体メモである。LUMINA-30の正典的中核を変更するものではなく、認証制度を作るものでもなく、法的・規制上・学術上・制度上の採用を主張するものでもない。


Reference location: reference/design-notes/
Folder convention: supplementary design-note archive / 補助設計メモ・アーカイブ

This file is stored in the design-notes folder. That folder preserves supplementary conceptual notes separately from public guidance, canonical text, and operational checklists.

このファイルは design-notes フォルダに保存されている。このフォルダは、補助的な概念メモを、公開ガイダンス、正典本文、運用チェックリストとは分けて保持する場所である。

## 0. Purpose, use, objections, and limits

### 0.1 Why this note exists

This note exists because a mature boundary framework can itself become a target of compliance optimization. If LUMINA-30 is preserved only as a checklist, later readers may mistake repeated YES outcomes for durable refusal capability. This note records the opposite warning: a review framework can be hollowed out by the same organizational incentives it is meant to detect.

The value of this note is therefore not that it adds another mandatory rule. Its value is that it preserves a self-referential warning: LUMINA-30 must also watch how LUMINA-30 is being used.

### 0.1 この文書が存在する理由

成熟した境界フレームワークは、それ自体が準拠最適化の対象になり得る。LUMINA-30が単なるチェックリストとして保存された場合、後から読む人は、YESが繰り返されたことを持続的な拒否能力の証明と誤解する可能性がある。この文書は、その逆の警告を記録する。すなわち、レビュー枠組みそのものが、本来検知すべき組織的インセンティブによって空洞化され得るという警告である。

したがって、この文書の価値は、新しい必須規則を増やすことではない。LUMINA-30が、LUMINA-30自身の使われ方も監視しなければならない、という自己言及的警告を保存する点にある。

### 0.2 Intended uses

This note may be useful for:

- future review of whether LUMINA-30 is being used as a living boundary check or as a pass/fail ritual;
- drafting future FAQ or operational guidance on framework Goodhartization;
- designing audits that test the conditions behind a YES result rather than the appearance of a YES result;
- preserving discussion outcomes that may otherwise be lost in chat threads;
- reminding future contributors that the canonical core should remain fixed while verification probes may need partial variation.

This note should not be used as a claim that LUMINA-30 has solved framework Goodhartization. It only identifies the risk and records possible safeguards.

### 0.2 想定される使い道

この文書は、次の用途で有用になり得る。

- LUMINA-30が、生きた境界確認として使われているか、単なる通過儀礼になっていないかを将来確認する
- フレームワークGoodhart化に関するFAQや運用ガイダンスを将来作る際の下敷きにする
- YESという結果の外形ではなく、そのYESがどの条件下で検証されたかを問う監査設計に使う
- チャットスレッド内で失われやすい議論成果を保存する
- 正典的中核は固定しつつ、検証プローブには一部可変性が必要であることを将来の貢献者に思い出させる

この文書は、LUMINA-30がフレームワークGoodhart化を解決済みである、という主張に使うべきではない。ここで行っているのは、リスクの特定と候補的な防御策の記録である。

### 0.3 Likely objections and limits

Possible objections include:

- variable probes may make the review process feel less predictable;
- partially non-announced checks may create operational burden or distrust;
- too much variability may weaken comparability across reviews;
- the concept may be misread as permission to change the LUMINA-30 core;
- the note may add complexity before the framework has broad adoption.

These objections are valid. For that reason, this note does not recommend changing the canonical core. It recommends separating the fixed core from variable verification probes. Variability should be limited, documented, and used only to reduce rehearsal-driven compliance simulation.

### 0.3 想定される異議と限界

想定される異議には、次のものがある。

- 可変プローブはレビュー手続きの予測可能性を下げる
- 一部非予告の確認は、運用負荷や不信感を生む可能性がある
- 可変性が強すぎると、レビュー間の比較可能性が弱まる
- この概念が、LUMINA-30の中核を変更してよいという意味に誤読される可能性がある
- 広範な採用前に、複雑性を増やしすぎる可能性がある

これらの異議は妥当である。そのため、この文書は正典的中核の変更を推奨しない。推奨するのは、固定された中核と可変的な検証プローブを分けることである。可変性は限定的で、記録可能で、演習化された準拠演出を弱める目的に限って用いるべきである。

### 0.4 Publication and integration timing

This note is suitable as a supplementary design-note archive. It should not be treated as a top-level public entry unless at least one of the following conditions applies:

- LUMINA-30 is being discussed as an operational checklist by external users;
- repeated YES outcomes or checklist-style usage become a visible concern;
- a future FAQ or guidance page needs to explain why LUMINA-30 is not a certification checklist;
- external reviewers ask how LUMINA-30 prevents its own formalization from becoming a ritual;
- a later version integrates Framework Goodhart Risk with Measurability Boundary, Irreducible Unknown, or intervention-window guidance.

Until then, the recommended status is preservation-only: keep the note available in the repository, but do not promote it as a primary entry point.

### 0.4 公開・統合タイミング

この文書は今保存する価値があるが、直ちにトップ導線へ出す必要があるとは限らない。少なくとも次のいずれかに該当するまでは、リンク無し、または弱い導線に留めるのが望ましい。

- LUMINA-30が外部利用者によって運用チェックリストとして扱われ始めた
- YESの反復やチェックリスト的運用が、目に見える懸念になった
- 将来のFAQやガイダンスで、LUMINA-30が認証チェックリストではない理由を説明する必要が出た
- 外部レビュー者から、LUMINA-30自身の形式化が儀式化するリスクをどう防ぐのか問われた
- 将来版で、Framework Goodhart Riskを、測定可能性境界、解消不能な不明、または介入窓の指針と統合する必要が出た

それまでは、補助設計メモとして扱う。すなわち、リポジトリ内で参照可能な状態に保つが、主要入口としては前面化しない。

---

## 1. Core concern

LUMINA-30 asks whether effective human refusal remains possible before irreversible escalation. As the framework becomes more usable, it may also become a target of organizational optimization.

If an organization treats LUMINA-30 as a checklist to pass rather than as a boundary check for preserving effective refusal, the framework itself can become subject to Goodhart's law.

The operational target may drift from:

- preserving effective human refusal,

to:

- producing YES outcomes or acceptable UNKNOWN outcomes within the LUMINA-30 review format.

This is Framework Goodhart Risk.

---

## 1. 中核的懸念

LUMINA-30は、不可逆化前に実効的人間拒否がなお可能かを問う。だが、フレームワークが使いやすくなるほど、それ自体が組織的最適化の対象になり得る。

組織がLUMINA-30を、実効的拒否を維持するための境界確認ではなく、通過すべきチェックリストとして扱うようになった場合、LUMINA-30自体がGoodhartの法則の対象になる。

運用上の目標は、次の状態から、

- 実効的人間拒否を維持すること

次の状態へとドリフトし得る。

- LUMINA-30のレビュー形式上、YESまたは許容可能な不明を出すこと

これがフレームワークGoodhart化リスクである。

---

## 2. Refusal Theater as a symptom

Refusal Theater is not the root cause. It is an observable symptom of Framework Goodhart Risk.

Refusal Theater occurs when an organization produces evidence, drills, records, or review outputs that make refusal appear available while the practical ability to refuse has weakened or disappeared.

Examples include:

- stop drills performed only on low-impact subsystems;
- evidence records refreshed without testing real refusal conditions;
- manual fallback procedures that exist on paper but are no longer staffed, trained, or economically usable;
- review packages designed to satisfy expected questions rather than expose actual refusal weakness.

The issue is not merely poor documentation. The issue is that the review process itself can become a stage on which refusal is performed rather than preserved.

---

## 2. 症状としての拒否権シアター

拒否権シアターは根本原因ではない。フレームワークGoodhart化リスクが現実化したときの観測可能な症状である。

拒否権シアターとは、実際の拒否可能性が弱まっている、または失われているにもかかわらず、拒否が可能であるように見える証拠、訓練、記録、レビュー結果が作られる状態を指す。

例として、次のものがある。

- 影響の小さいサブシステムだけを対象にした停止ドライラン
- 実際の拒否条件を検証せずに更新される証拠記録
- 文書上は存在するが、人員・訓練・経済性の面で使えなくなった手動代替手順
- 実際の拒否弱点を明らかにするためではなく、予想される質問を満たすために作られるレビュー資料

問題は単なる文書不備ではない。レビュー手続きそのものが、拒否を維持する場ではなく、拒否を演出する場になり得る点にある。

---

## 3. Fixed core and variable verification probes

The response to Framework Goodhart Risk should not be to make the LUMINA-30 core unstable.

The canonical core must remain fixed:

- effective human refusal before irreversible escalation;
- the distinction between formal oversight and practical refusal;
- the YES / NO / UNKNOWN discipline;
- the rule that UNKNOWN must not be treated as YES.

However, the verification probes used to test that core should not be fully predictable.

A safer structure is:

- fixed canonical core;
- stable decision discipline;
- partially variable verification probes;
- non-announced or partially non-announced evidence checks;
- rotating drift indicators;
- sampled review of refusal evidence across different operational layers.

This preserves the identity of LUMINA-30 while reducing optimization toward fixed checklist performance.

---

## 3. 固定中核と可変検証プローブ

フレームワークGoodhart化リスクへの対策は、LUMINA-30の中核を不安定化させることではない。

正典的中核は固定されなければならない。

- 不可逆化前の実効的人間拒否
- 形式的監督と実務的拒否の区別
- YES / NO / 不明 の判定規律
- 不明をYESとして扱わない規則

一方で、その中核を検証するためのプローブは、完全に予測可能であるべきではない。

より安全な構造は次の通りである。

- 固定された正典的中核
- 安定した判定規律
- 一部可変の検証プローブ
- 非予告または一部非予告の証拠確認
- ローテーションされるドリフト指標
- 複数の運用層にまたがる拒否証拠のサンプル確認

これにより、LUMINA-30の同一性を維持しつつ、固定チェックリストへの最適化を弱めることができる。

---

## 4. Relationship to intervention window compression

Variable probes and partially non-announced checks may also partially mitigate Intervention Window Compression.

If an organization knows exactly when and how it will be evaluated, it may prepare only for those review moments. If the verification probes are partially variable, the organization has a stronger incentive to maintain continuous readiness.

This does not eliminate the risk that system drift may outpace review cycles. It only changes the operational posture from periodic compliance preparation toward a more persistent state of refusal readiness.

---

## 4. 介入窓の圧縮との関係

可変プローブと一部非予告の確認は、介入窓の圧縮に対する部分的な緩和策にもなり得る。

組織が、いつ、どのように評価されるかを完全に知っている場合、その評価時点にだけ備える可能性がある。検証プローブが一部可変であれば、組織は常時答えられる状態を維持するインセンティブを持ちやすくなる。

これは、システムのドリフト速度がレビューサイクルを上回るリスクを消すものではない。周期的な審査準備から、より持続的な拒否準備状態へ運用姿勢を近づけるための部分的対策である。

---

## 5. Relationship to irreducible unknown incentive asymmetry

Framework Goodhart Risk also interacts with the incentive problem around Irreducible Unknowns.

Reporting an irreducible unknown with high potential impact may delay deployment, create internal friction, or harm the perceived performance of the reporting team. Ignoring or softening the unknown may create future, probabilistic, and externally distributed harm.

This asymmetry cannot be fully solved by LUMINA-30 alone. LUMINA-30 can only require that such asymmetry be recognized, recorded, and escalated rather than hidden inside an acceptable-looking review package.

A practical safeguard is to protect the reporting of serious unknowns from retaliation, performance penalty, or informal organizational punishment.

---

## 5. 解消不能不明のインセンティブ非対称との関係

フレームワークGoodhart化リスクは、解消不能な不明をめぐるインセンティブ問題とも結びつく。

影響大の解消不能な不明を報告すると、展開が遅れ、組織内摩擦が生じ、報告したチームの評価が下がる可能性がある。一方で、その不明を無視または軽く扱った場合の損害は、将来の、確率的な、外部に分散された損害になりやすい。

この非対称性は、LUMINA-30だけでは完全には解決できない。LUMINA-30が要求できるのは、その非対称性を、見栄えのよいレビュー資料の中に隠すのではなく、認識し、記録し、エスカレーションすることである。

実務上の保護策として、重大な不明を報告した者が、報復、人事上の不利益、非公式な組織的制裁を受けないようにする必要がある。

---

## 6. Suggested operational rule

LUMINA-30 must not become a checklist for performing refusal. It must remain a boundary check for preserving effective refusal.

Therefore:

- the core question should remain fixed;
- the evidence basis should remain challengeable;
- the verification probes should retain partial unpredictability;
- review results should record not only the answer, but the conditions under which that answer was tested;
- repeated YES outcomes should not be treated as proof of durable refusal unless drift, evidence quality, composition, unknowns, and Goodhart risk remain actively examined.

---

## 6. 推奨される運用規則

LUMINA-30は、拒否権を演出するためのチェックリストになってはならない。実効的拒否権を維持するための境界確認であり続けなければならない。

そのため、次の規律が必要である。

- 中核の問いは固定する
- 証拠の根拠は常に問い直し可能にする
- 検証プローブには部分的な予測不能性を残す
- レビュー結果には、答えだけでなく、その答えがどの条件下で検証されたかを記録する
- YESが繰り返されたことを、持続的な拒否権の証明として扱わない。ドリフト、証拠品質、合成リスク、不明、Goodhart化リスクが継続的に確認されている場合に限り、暫定的な判断として扱う

---

## 7. Preservation note

This document preserves a self-referential defense layer developed through discussion. It is intentionally standalone and contains no external hyperlinks. It is not intended to replace existing LUMINA-30 materials. It is retained as a supplementary design-note archive for later review, not as primary public navigation or an active implementation plan.

---

## 7. 保存メモ

この文書は、議論を通じて形成された自己言及的防御層を保存するためのものである。意図的に単体文書とし、外部リンクを含めていない。既存のLUMINA-30資料を置き換えるものではない。将来の整理やレビュー時に参照するための補助設計メモ・アーカイブとして保持する。主要公開導線または実装計画として提示するものではない。

