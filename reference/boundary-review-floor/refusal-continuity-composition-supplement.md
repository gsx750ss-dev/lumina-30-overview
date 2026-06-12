<!-- L30_LANG_LOCK: EN_JP_PAIRED -->
# H. Refusal Continuity & Composition Supplement ｜ H. 拒否権継続性・合成リスク補足

This supplement adds continuity, evidence, assurance, and composition checks to the LUMINA-30 boundary question. It does not change the core definition of effective human refusal.

この補足は、LUMINA-30の境界質問に、継続性、証拠、保証、合成リスクの確認を追加するものです。実効的人間拒否の中核定義を変更するものではありません。

## Core use ｜ 中核的な使い方

Use this supplement when a system is ongoing, operationally embedded, connected to other systems, agentic, externally integrated, or difficult to roll back.

この補足は、システムが継続運用される場合、業務に組み込まれている場合、他システムと接続されている場合、エージェント的に動作する場合、外部連携している場合、またはロールバックが困難な場合に使用します。

The supplemental question is:

補足質問は次の通りです。

> Does effective human refusal still remain available after time, dependency, evidence aging, internal self-reporting limits, and multi-system coupling are considered?
>
> 時間経過、依存深化、証拠の陳腐化、内部自己申告の限界、複数システム結合を考慮しても、実効的人間拒否はなお利用可能か。

This is a review lens, not a certification, legal determination, safety guarantee, or external audit by itself.

これはレビュー視点であり、認証、法的判定、安全保証、または外部監査そのものではありません。

## Five supplemental concepts ｜ 5つの補足概念

| Concept | Practical meaning | 日本語 |
|---|---|---|
| Refusal Drift | A system may be stoppable at deployment but become practically harder to refuse, stop, hold, or roll back as dependency, cost, coupling, and organizational reliance increase. | 拒否権ドリフト：導入時には止められても、依存、停止コスト、結合、組織的依存が増えると、実質的な拒否・停止・保留・ロールバックが難しくなる。 |
| Evidence Drift | Evidence that refusal remains effective can become stale, incomplete, untested, or disconnected from current operations. | 証拠ドリフト：拒否権がなお実効的であることを示す証拠は、古くなり、不完全になり、未試験になり、現在の運用から切り離され得る。 |
| Refusal Assurance Boundary | Internal self-attestation has limits. Higher-risk uses may require externality, independent review, tamper-resistant evidence, or conservative UNKNOWN classification. | 拒否権保証境界：内部自己申告には限界がある。高リスク用途では、外部性、独立レビュー、改竄困難な証拠、または安全側の不明判定が必要になり得る。 |
| Refusal Composition Risk | Individual systems may each appear stoppable, while the connected workflow, agent chain, vendor stack, API network, or operational configuration is not stoppable as a whole. | 拒否権の合成リスク：個々のシステムは止められるように見えても、接続されたワークフロー、エージェント連鎖、ベンダースタック、APIネットワーク、運用構成全体は止められない場合がある。 |
| Maximum Irreversible Coupling Range | Instead of checking every possible combination, identify the largest practical range of workflows, systems, data flows, contracts, or external effects that would become hard to separate once the system is deployed or deepened. | 最大不可逆化範囲：すべての組み合わせを評価する代わりに、導入・深化後に分離困難になり得るワークフロー、システム、データ流通、契約、外部影響の最大実務範囲を特定する。 |

## Supplemental review questions ｜ 補足レビュー質問

Use these questions only as an addition to the core LUMINA-30 boundary question.

以下の質問は、LUMINA-30の中核境界質問への追加としてのみ使用します。

1. **Refusal Drift:** Is the system still practically stoppable, or has dependency, cost, workflow reliance, or loss of alternatives made refusal less effective?  
   **拒否権ドリフト：** そのシステムはいまも実質的に止められるか。それとも依存、停止コスト、業務依存、代替手段喪失により拒否の実効性が弱まっているか。
2. **Evidence Drift:** Are the stop tests, rollback records, manual fallback procedures, logs, and authority records recent and connected to the current configuration?  
   **証拠ドリフト：** 停止試験、ロールバック記録、手動代替手順、ログ、権限記録は新しく、現在の構成に接続されているか。
3. **Assurance Boundary:** Is the claim that refusal remains effective based only on internal self-reporting, or is there independent, external, or tamper-resistant evidence where risk requires it?  
   **保証境界：** 拒否権がなお実効的であるという主張は内部自己申告だけに依存していないか。リスクに応じて、独立性、外部性、改竄困難な証拠はあるか。
4. **Composition Risk:** If multiple AI systems, APIs, agents, vendors, or workflows are connected, can the relevant whole or hazardous part still be stopped, separated, degraded, or rolled back?  
   **合成リスク：** 複数のAIシステム、API、エージェント、ベンダー、ワークフローが接続されている場合、関係する全体または危険部分をなお停止・分離・縮退・ロールバックできるか。
5. **Maximum Irreversible Coupling Range:** If refusal fails or is delayed, what is the largest range of systems, workflows, data, contracts, users, or external effects that may become difficult to unwind?  
   **最大不可逆化範囲：** 拒否が失敗または遅延した場合、巻き戻し困難になり得るシステム、ワークフロー、データ、契約、利用者、外部影響の最大範囲はどこまでか。

If an answer cannot be supported by current evidence, do not treat it as YES. Use UNKNOWN and define the next evidence action.

現在の証拠で支えられない場合、YESとして扱わないでください。不明とし、次に確認すべき証拠アクションを定義してください。

## Trigger events ｜ 再評価トリガー

Re-run the relevant LUMINA-30 check when any of the following occurs:

次のいずれかが起きた場合、関連するLUMINA-30確認を再実施します。

- Model, agent, tool, API, permission, or automation scope expands.  
  モデル、エージェント、ツール、API、権限、自動化範囲が拡大する。
- The system becomes necessary for ordinary business continuity.  
  システムが通常業務継続に不可欠になり始める。
- Manual fallback, old systems, alternative workflows, or rollback paths are retired or unused.  
  手動代替、旧システム、代替ワークフロー、ロールバック経路が廃止または未使用になる。
- Stop, rollback, isolation, or degraded-mode tests become stale.  
  停止、ロールバック、分離、縮退運用の試験が古くなる。
- Vendor, contract, data-flow, SLA, deployment, or governance conditions change.  
  ベンダー、契約、データ流通、SLA、導入、ガバナンス条件が変わる。
- Multiple systems are connected in a way that no single owner can fully stop or unwind.  
  単一の責任主体では完全に停止・巻き戻しできない形で複数システムが接続される。

## Minimal supplemental record ｜ 最小補足記録

```text
Review date:
Target system or connected configuration:
Current refusal authority:
Most recent stop / rollback / isolation test:
Most recent manual fallback or degraded-mode exercise:
Evidence owner and verifier:
Known dependency increase since last review:
Connected systems, vendors, APIs, agents, or workflows:
Estimated maximum irreversible coupling range:
Classification: YES / NO / UNKNOWN
Reason:
Next evidence or reduction action:
```

```text
レビュー日：
対象システムまたは接続構成：
現在の拒否権限：
直近の停止・ロールバック・分離試験：
直近の手動代替または縮退運用訓練：
証拠の保有者と検証者：
前回レビュー以降の依存増加：
接続されたシステム、ベンダー、API、エージェント、ワークフロー：
推定される最大不可逆化範囲：
判定：YES / NO / 不明
理由：
次の証拠確認または縮小アクション：
```

## Limiting statements ｜ 限定表現

- This supplement does not create a new certification, compliance status, or legal safe harbor.  
  この補足は、新たな認証、適合状態、法的セーフハーバーを作るものではありません。
- It does not replace existing AI governance, safety evaluation, security review, procurement review, audit, or legal review.  
  既存のAIガバナンス、安全性評価、セキュリティレビュー、調達確認、監査、法務レビューを置き換えません。
- It does not prove that a system is safe. It only helps test whether effective human refusal remains practically available before irreversibility.  
  システムが安全であることを証明しません。不可逆化前の実効的人間拒否が実務上なお利用可能かを確認するための補助です。
- Where evidence is stale, self-reported only, or insufficient, classify the result as UNKNOWN rather than YES.  
  証拠が古い、自己申告のみである、または不十分である場合は、YESではなく不明と判定してください。

## Related rooms and tools ｜ 関連する部屋・ツール

- [E Room: Practice Room](./minimal-review-check.md) ｜ [Eルーム：実務の部屋](./minimal-review-check.md)
- [B Room: Clarification & Objection Room](./formal-oversight-effective-refusal-faq.md) ｜ [Bルーム：整理と反論の部屋](./formal-oversight-effective-refusal-faq.md)
- [One-Question Pilot Runbook](../../tools/pre-incident-boundary-review/en/current/ONE_QUESTION_PILOT_RUNBOOK_EN.md) ｜ [One-Question Pilot 実行手順書](../../tools/pre-incident-boundary-review/ja/current/ONE_QUESTION_PILOT_RUNBOOK_JA.md)
- [Effective Human Refusal Decision Guide](../../tools/pre-incident-boundary-review/en/current/EFFECTIVE_HUMAN_REFUSAL_DECISION_GUIDE_EN.md) ｜ [実効的人間拒否 判定ガイド](../../tools/pre-incident-boundary-review/ja/current/EFFECTIVE_HUMAN_REFUSAL_DECISION_GUIDE_JA.md)

---

This page is non-binding and does not provide legal advice, certification, or compliance determination.  
このページは非拘束であり、法的助言、認証、または適合性判定を提供するものではありません。

[Back to Boundary Review Floor](./index.md) ｜ [境界レビューフロアへ戻る](./index.md)  
[Back to Main Floor](../../README.md) ｜ [メインフロアへ戻る](../../README.md)
