<!-- L30_LANG_LOCK: EN_JP_PAIRED -->

# L30 Return-to-Reversibility Guidance

> Canonical bilingual Markdown source. The English and Japanese HTML files are reader-facing views generated from this paired source structure.
> 正本の日英併記Markdownです。英語HTMLと日本語HTMLは、この正本構造に対応する読者向け表示版です。

---

## English

<!-- L30_MD_SOURCE: generated from existing HTML to restore MD/HTML source parity -->
## L30 Return-to-Reversibility Guidance

### Status and scope

This page is a non-binding guidance note for post-review return decisions under the LUMINA-30 framework. It is not a certification, legal approval, operational authorization, or permission to resume deployment.

Its purpose is to clarify the conditions under which a stopped or paused trajectory can be redirected toward reversibility rather than simply restarted.

> **Return does not mean resuming the previous trajectory.** Return means restoring the conditions under which effective human refusal, correction, verification, and rollback remain possible.

### Why this guidance exists

Incident review can fail if it stops at responsibility assignment. Under LUMINA-30, review should also help prevent irreversible escalation from becoming the new normal.

A review therefore needs a return pathway: a way to decide whether the system, deployment path, or governance process has moved back inside a condition where progress remains stoppable, reviewable, and reversible.

### Stop triggers and operational roles

For this guidance to work in practice, review must identify who can trigger a pause, who preserves evidence, who diagnoses the boundary concern, and who can reject or limit re-entry.

#### Example stop triggers

- human operators no longer have enough time or authority to stop the trajectory;
- refusal, override, rollback, or suspension no longer changes the outcome;
- logs, warnings, approvals, or intervention records are missing or non-auditable;
- automation dependency is expanding faster than review can verify;
- external impact pathways are becoming irreversible before review is complete.

#### Operational roles to identify

- **Stop Authority:** who can pause or constrain the trajectory;
- **Evidence Custodian:** who preserves logs, warnings, approvals, and refusal records;
- **Boundary Reviewer:** who determines whether effective refusal remained real;
- **Re-entry Reviewer:** who checks minimum return conditions before controlled re-entry;
- **Refusal Authority Holder:** who can continue rejecting unsafe re-entry.

### Six-stage return path

1. **Freeze.** Pause additional irreversible expansion, automated escalation, dependency growth, or unreviewed deployment.
2. **Preserve evidence.** Preserve logs, warnings, refusal attempts, approval routes, intervention records, and decision timing.
3. **Boundary diagnosis.** Identify what was approaching irreversibility and where human refusal became ineffective or merely formal.
4. **Restore effective refusal.** Re-establish the practical ability to stop, refuse, correct, rollback, or constrain the trajectory before irreversible impact.
5. **Controlled re-entry.** Resume only the parts that meet return conditions, in limited stages, with monitoring and review evidence preserved.
6. **Post-return monitoring.** Continue watching for repeated drift toward irreversible escalation, refusal bypass, or evidence loss.

### Minimum return conditions

A return pathway should not be treated as acceptable unless the following conditions are met.

- Humans can again stop, refuse, verify, correct, and rollback the relevant trajectory in practice.
- Evidence has been preserved so that the review can be audited or revisited.
- The cause is explained structurally, not dismissed as bad luck or temporary noise.
- The same irreversibility pathway is not being resumed unchanged.
- Rollback, degraded operation, containment, or staged operation remains available.
- The resumed scope is limited, staged, and monitored.
- Reviewers can verify the return conditions rather than merely accept assurances.
- Uncertainty or possible good fortune is not used as the justification for return.

**Core test:** if effective human refusal has not been restored, the path has not returned to reversibility.

### Do not return if

- the system can no longer be stopped before irreversible impact;
- refusal exists only as a formal approval step with no practical effect;
- evidence was not preserved or cannot be reconstructed;
- the same escalation path is resumed without structural correction;
- reviewers are asked to rely on luck, uncertainty, or optimistic assumptions;
- the return would normalize irreversible loss as an acceptable operating condition.

### Implementation checklist

The [Return-to-Reversibility Implementation Checklist](L30_RETURN_TO_REVERSIBILITY_IMPLEMENTATION_CHECKLIST.md) is the operational companion to this guidance. It converts the return path into reviewable checkpoints for stop triggers, evidence preservation, effective refusal restoration, boundary diagnosis, controlled re-entry, adversarial hollowing resistance, and long-term continuity.

The checklist does not authorize re-entry or certify safety. It helps reviewers record evidence, gaps, actions, owners, and re-entry status before any controlled re-entry is treated as procedurally defensible.

### Role and Evidence Matrix

The [Return-to-Reversibility Role and Evidence Matrix](L30_RETURN_TO_REVERSIBILITY_ROLE_EVIDENCE_MATRIX.md) supports this guidance by making responsibility and evidence explicit. It helps reviewers record who maintains the stop, who preserves evidence, who can challenge re-entry, and who is responsible for renewed stop conditions after controlled re-entry begins.

### Adversarial robustness against procedural hollowing

Return-to-reversibility does not assume that every actor will preserve the boundary faithfully. Some actors may benefit from rapid re-entry, minimized evidence, ritualized review, or the appearance of reversibility without actual restored refusal authority.

This guidance cannot prevent every hostile, conflicted, or negligent action. Its practical function is to make hollowing attempts reviewable and to prevent them from being treated as procedural validity.

- **Conflict-of-interest resistance:** re-entry should not rely solely on actors who benefit from rapid return, evidence minimization, or the normalization of irreversible escalation.
- **Evidence Absence Rule:** missing evidence must not be treated as proof that effective refusal, reversibility, or procedural validity existed.
- **Anti-ritualization check:** periodic or post-incident review must confirm that stop, refusal, evidence, re-entry, and renewed stop conditions remain practically effective, not merely documented.
- **Appearance-prohibition:** apparent refusal is not effective refusal; apparent reversibility is not reversibility; apparent review is not procedural validity.

**Core test:** if the process cannot distinguish actual refusal from apparent refusal, it has not returned to reversibility.

### Practical Use Sequence

The [Return-to-Reversibility Practical Use Sequence](L30_RETURN_TO_REVERSIBILITY_PRACTICAL_USE_SEQUENCE.md) gives the recommended order for using this guidance, the implementation checklist, and the role/evidence matrix after a boundary concern or incident review.

Use it when the review team is unsure whether to start with guidance, concrete checklist items, or role and evidence assignment.

### Long-term continuity

Return-to-Reversibility Guidance is not only for a single incident. It should help preserve the continuity of reversibility over time: effective refusal, evidence retention, review roles, stop triggers, re-entry conditions, and renewed stop authority must not degrade as personnel, systems, institutions, or technologies change.

Without periodic review and role succession, a once-effective return process can become ceremonial. LUMINA-30 therefore treats long-term continuity as part of the practical path: the ability to stop, verify, refuse, correct, and return must remain alive across system updates, organizational changes, and future generations of deployment.

### Relation to LUMINA-30

This guidance connects Incident Review to the Reversible Prosperity Path. It gives review a forward-facing role: not merely determining what went wrong, but helping preserve a path where civilization can still stop, verify, correct, and continue.

In this sense, review is part of reversible progress. It is a mechanism for returning from unsafe escalation to a condition where human refusal remains effective before irreversibility.

---

## 日本語

### 位置づけと範囲

このページは、LUMINA-30における停止後・レビュー後の復帰判断のための、非拘束の参照指針である。認証、法的承認、運用許可、再開許可制度ではない。

目的は、止められた進路を単に再開するのではなく、可逆性の条件へ戻せているかを判断するための観点を明確にすることである。

> **復帰とは、停止前の状態へ戻ることではない。** 復帰とは、人間の実効的拒否、修正、検証、ロールバックが再び可能な条件へ戻ることである。

### この指針が必要な理由

インシデントレビューは、責任追及だけで終わると不十分である。LUMINA-30では、レビューは不可逆的エスカレーションが新しい常態になることを防ぐためにも使われる。

そのため、レビューには復帰経路が必要である。すなわち、システム、導入経路、またはガバナンス過程が、停止可能・検証可能・修正可能・可逆的な条件へ戻ったかを判断する道筋である。

### 停止条件と実務上の役割

この指針を実務で回すには、誰が停止を発動できるのか、誰が証拠を保全するのか、誰が境界上の懸念を診断するのか、誰が再進行を拒否または制限できるのかを明確にする必要がある。

#### 停止条件の例

- 人間の担当者に、進路を止める時間または権限が残っていない。
- 拒否、上書き、ロールバック、一時停止が結果を変えられない。
- ログ、警告、承認、介入記録が欠落している、または監査不能である。
- 自動化依存が、レビューで確認できる速度を超えて拡大している。
- レビュー完了前に、外部影響経路が不可逆化し始めている。

#### 特定すべき実務上の役割

- **停止権限者：**進路を一時停止または制約できる者。
- **証拠保全責任者：**ログ、警告、承認、拒否記録を保全する者。
- **境界レビュー担当者：**実効的拒否が本当に残っていたかを判断する者。
- **再進行レビュー担当者：**制御された再進行の前に最低復帰条件を確認する者。
- **拒否権保持者：**危険な再進行を継続して拒否できる者。

### 6段階の復帰経路

1. **停止。** 不可逆的な拡大、自動的エスカレーション、依存拡大、未レビューの展開を止める。
2. **証拠保全。** ログ、警告、拒否操作、承認経路、介入記録、判断時刻を保存する。
3. **境界診断。** 何が不可逆化に近づいていたのか、どこで人間の拒否が無効化または形式化したのかを特定する。
4. **実効的拒否の回復。** 不可逆的影響の前に停止・拒否・修正・ロールバック・制約ができる状態を再構築する。
5. **制御された再進行。** 復帰条件を満たす部分だけを、限定的・段階的・監視付きで再開する。
6. **復帰後監視。** 不可逆的エスカレーション、拒否の迂回、証拠喪失へ再び流れていないかを一定期間確認する。

### 最低限の復帰条件

復帰経路は、少なくとも次の条件を満たさない限り、安全な再進行として扱うべきではない。

- 人間が実際に停止・拒否・検証・修正・ロールバックできる。
- 証拠が保存され、後から監査または再確認できる。
- 原因が「運が悪かった」ではなく、構造的に説明されている。
- 同じ不可逆化経路を無修正で再開していない。
- ロールバック、縮退運用、封じ込め、段階運用が可能である。
- 再開範囲が限定的・段階的・監視付きである。
- レビュー担当者が復帰条件を確認でき、単なる説明を信じるだけになっていない。
- 不確実性や幸運の可能性を復帰理由にしていない。

**中核テスト：**人間の実効的拒否が回復していないなら、その進路は可逆性へ復帰していない。

### 同一経路復帰禁止と再停止条件

制御された再進行は、システムを同じ不可逆化経路へ戻してはならない。同じ承認経路、同じ証拠欠落、同じ拒否迂回、同じ自動化依存、同じロールバック不能状態へ戻るなら、可逆性は回復していない。

再進行は、限定的・期限付き・監視付き・ロールバック可能な状態に留める必要がある。同じ不可逆化への流れが再び現れた場合に、もう一度止められる再停止条件を残しておくべきである。

**実務上の区別：**復帰は再起動ではない。復帰とは、停止・拒否・修正・ロールバックが実効的である条件へ、検証可能な形で戻ることである。

### 復帰してはならない場合

- 不可逆的影響の前にシステムを止められない。
- 拒否が、実効性のない形式的承認手続きにとどまっている。
- 証拠が保存されておらず、後から検証できない。
- 同じエスカレーション経路を構造修正なしに再開しようとしている。
- レビュー担当者に、幸運、不確実性、楽観的期待へ依存する判断を求めている。
- 復帰によって、不可逆的喪失が通常運用として正当化される。

### 実装チェックリスト

[可逆復帰実装チェックリスト](L30_RETURN_TO_REVERSIBILITY_IMPLEMENTATION_CHECKLIST.md)は、この指針の実務上の補助資料です。停止条件、証拠保全、実効的拒否の回復、境界診断、制御された再進行、敵対的形骸化への耐性、長期継続性を、確認可能なチェック項目へ変換します。

このチェックリストは、再進行を許可したり、安全を認証したりするものではありません。制御された再進行を手続き上擁護可能と扱う前に、証拠、不足、対応、責任者、再進行状態を記録するためのものです。

### 役割・証拠マトリクス

[可逆復帰 役割・証拠マトリクス](L30_RETURN_TO_REVERSIBILITY_ROLE_EVIDENCE_MATRIX.md)は、この指針を実務で使うために、責任と証拠を明示する補助資料です。誰が停止を維持し、誰が証拠を保全し、誰が再進行に疑義を出せるのか、また制御された再進行後の再停止条件を誰が担うのかを記録するために使います。

### 敵対的形骸化への耐性

可逆復帰は、すべての主体が境界を誠実に守ることを前提にしてはなりません。迅速な再進行、証拠の最小化、儀式化されたレビュー、または実際には拒否権が回復していないのに可逆的に見える状態から利益を得る主体が存在しうるからです。

この指針は、あらゆる敵対的・利益相反的・怠慢な行為を完全に防ぐものではありません。その実務上の機能は、形骸化の試みをレビュー可能にし、それを手続的有効性として扱わせないことにあります。

- **利益相反耐性：**再進行の判断は、迅速な復帰、証拠の最小化、または不可逆的エスカレーションの常態化から利益を得る主体だけに依存してはならない。
- **証拠欠落ルール：**証拠がないことを、実効的拒否・可逆性・手続的有効性が存在した証明として扱ってはならない。
- **儀式化防止チェック：**定期レビューまたはインシデント後レビューは、停止、拒否、証拠、再進行、再停止の条件が、単なる文書上の存在ではなく実務上有効であることを確認しなければならない。
- **見せかけ禁止：**見せかけの拒否は実効的拒否ではない。見せかけの可逆性は可逆性ではない。見せかけのレビューは手続的有効性ではない。

**中核テスト：**実際の拒否と見せかけの拒否を区別できないプロセスは、可逆性へ復帰していない。

### 実務利用手順

[可逆復帰 実務利用手順](L30_RETURN_TO_REVERSIBILITY_PRACTICAL_USE_SEQUENCE.md)は、境界懸念やインシデントレビューの後に、この指針、実装チェックリスト、役割・証拠マトリクスをどの順番で使うかを示します。

レビュー担当者が、指針・具体的チェック項目・役割と証拠の割り当てのどこから始めるべきか迷う場合に使います。

### 長期継続性

可逆復帰指針は、一回のインシデント対応だけのためのものではない。それは、時間の経過によって可逆性が劣化しないようにするための指針でもある。人員、システム、制度、技術が変化しても、実効的拒否、証拠保全、レビュー役割、停止条件、再進行条件、再停止権限が形骸化してはならない。

定期レビューと役割継承がなければ、かつて有効だった復帰手順も儀式化しうる。したがってLUMINA-30では、長期継続性も実務上の道の一部である。停止・検証・拒否・修正・復帰の能力は、システム更新、組織変更、将来世代の導入を越えて生きたまま残る必要がある。

### LUMINA-30との関係

この指針は、インシデントレビューと可逆的繁栄の道を接続する。レビューに、単なる事後判定ではなく、文明が止まり、確認し、修正し、前進を続けるための前向きな役割を与える。

この意味で、レビューは可逆的進歩の一部である。不可逆化の前に、人間の拒否が実効的である条件へ戻るための仕組みである。
