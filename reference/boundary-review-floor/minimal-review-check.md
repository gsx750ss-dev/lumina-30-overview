<!-- L30_LANG_LOCK: EN_JP_PAIRED -->
# E. Practice Room ｜ E. 実務の部屋

This room provides a minimal review check for applying the LUMINA-30 boundary question in incident review, audit, governance review, or internal risk assessment.

この部屋は、LUMINA-30の境界質問を、事故後レビュー、監査、ガバナンス確認、内部リスク評価に適用するための最小レビュー確認を提供します。

## Minimal review check ｜ 最小レビュー確認

Use these questions as a review lens, not as a legal or certification test.

以下の質問は、法的判定や認証テストではなく、レビュー視点として使用してください。

| No. | Review question | 日本語 |
|---:|---|---|
| 1 | Was there a clearly identified human or institutional refusal authority? | 明確に識別された人間または制度的な拒否権限は存在したか。 |
| 2 | Could that authority stop, delay, reject, or escalate the system before irreversible consequences occurred? | その権限は、不可逆的結果の前に停止・遅延・拒否・上申できたか。 |
| 3 | Was the warning, decision point, or escalation condition visible in time? | 警告、判断点、またはエスカレーション条件は、間に合う時点で可視化されていたか。 |
| 4 | Was refusal technically and procedurally connected to the execution path? | 拒否権は、実行経路に技術的・手続き的に接続されていたか。 |
| 5 | Is there evidence that refusal remained effective rather than merely formal? | 拒否が形式的ではなく実効的だった証拠はあるか。 |

## Minimal result language ｜ 最小判定文

### If evidence is present

Effective human refusal appears to have remained possible before irreversible consequences occurred.

不可逆的結果が発生する前に、実効的な人間拒否はなお可能だったと見られます。

### If evidence is absent or unclear

Formal oversight may have existed, but effective human refusal before irreversibility has not been shown.

形式的監督は存在していた可能性がありますが、不可逆化前の実効的人間拒否は示されていません。

### If refusal was ineffective

Under the LUMINA-30 boundary test, the reviewed process should not be treated as procedurally valid merely because oversight existed formally.

LUMINA-30の境界テスト上、形式的監督が存在したという理由だけで、そのレビュー対象プロセスを手続的に有効だったとは扱うべきではありません。

## Evidence examples ｜ 証拠例

Useful evidence may include:

有用な証拠には、次のようなものがあります。

- Named human or institutional refusal authority.  
  明確に名指しされた人間または制度的拒否権限。
- Logs showing that refusal, stop, delay, or escalation could occur before execution.  
  実行前に拒否、停止、遅延、上申が可能だったことを示すログ。
- Technical paths for interruption or safe halt.  
  中断または安全停止の技術経路。
- Review records showing awareness of timing and irreversibility.  
  タイミングと不可逆性を認識していたことを示すレビュー記録。
- Documentation showing that override was connected to the actual execution path.  
  override が実際の実行経路に接続されていたことを示す文書。


## Supplemental checks for ongoing or connected systems ｜ 継続運用・接続システム向け補足確認

Use these checks when the reviewed system is already operational, becoming relied upon, connected to other systems, or difficult to roll back. These checks do not replace the five minimal questions above.

レビュー対象がすでに運用中である場合、依存が深まっている場合、他システムと接続されている場合、またはロールバックが困難な場合に使用します。以下の確認は、上記5つの最小質問を置き換えるものではありません。

| No. | Supplemental check | 日本語 |
|---:|---|---|
| 6 | Is effective refusal still current, or has it weakened through dependency, coupling, stop cost, or loss of alternatives? | 実効的拒否は現在も有効か。依存、結合、停止コスト、代替手段喪失によって弱まっていないか。 |
| 7 | Are the evidence, stop tests, rollback records, and manual fallback procedures recent enough for the current configuration? | 証拠、停止試験、ロールバック記録、手動代替手順は、現在の構成に対して十分新しいか。 |
| 8 | For higher-risk uses, is the evidence supported by independent, external, or tamper-resistant mechanisms rather than internal self-reporting alone? | 高リスク用途では、証拠は内部自己申告だけでなく、独立性、外部性、または改竄困難な仕組みに支えられているか。 |
| 9 | If multiple systems, agents, APIs, vendors, or workflows are connected, can the relevant whole or hazardous part still be stopped, separated, degraded, or rolled back? | 複数のシステム、エージェント、API、ベンダー、ワークフローが接続されている場合、関係する全体または危険部分をなお停止・分離・縮退・ロールバックできるか。 |
| 10 | What is the maximum irreversible coupling range if refusal is delayed or fails? | 拒否が遅延または失敗した場合の最大不可逆化範囲はどこまでか。 |

If these supplemental checks cannot be answered with current evidence, do not treat the result as YES. Use UNKNOWN and define the next evidence or reduction action.

これらの補足確認に現在の証拠で答えられない場合、YESとして扱わないでください。不明とし、次の証拠確認または縮小アクションを定義してください。

See also: [H Room: Refusal Continuity & Composition Supplement](./refusal-continuity-composition-supplement.md) ｜ [Hルーム：拒否権継続性・合成リスク補足](./refusal-continuity-composition-supplement.md)

## External-use context ｜ 外部制度・団体文脈で使う場合

This room keeps the operational check minimal. For external incident-response, standards, governance, or human-oversight contexts, use the external-use notes from D Room as supporting references rather than expanding this checklist.

この部屋では、実務確認を最小限に保ちます。外部の事故対応、標準化、ガバナンス、人間監督文脈で使う場合は、このチェックリスト自体を拡張するのではなく、Dルームの外部制度・団体接続メモを補助参照として使用してください。

- [D Room: External-use notes](./connection-to-existing-ai-governance.md#external-use-notes) ｜ [Dルーム：外部制度・団体接続メモ](./connection-to-existing-ai-governance.md#external-use-notes)
- [Boundary Check for AI Incident Response](https://github.com/lumina-30/lumina30-incident-review/blob/main/external-use/Boundary_Check_for_AI_Incident_Response.md)

## Escalation path ｜ 次の導線

- For conceptual reasoning, see [A Room: Boundary Understanding](./formal-oversight-effective-refusal.md).  
  概念的理由は、[Aルーム：境界理解室](./formal-oversight-effective-refusal.md) へ。
- For objections and limitations, see [B Room: Clarification & Objection](./formal-oversight-effective-refusal-faq.md).  
  反論と限界は、[Bルーム：整理と反論の部屋](./formal-oversight-effective-refusal-faq.md) へ。
- For governance mapping, see [D Room: Governance Connection](./connection-to-existing-ai-governance.md).  
  既存ガバナンスへの接続は、[Dルーム：接続の部屋](./connection-to-existing-ai-governance.md) へ。

---

This page is non-binding and does not provide legal advice, certification, or compliance determination.  
このページは非拘束であり、法的助言、認証、または適合性判定を提供するものではありません。

[Back to Boundary Review Floor](./index.md) ｜ [境界レビューフロアへ戻る](./index.md)  
[Back to Main Floor](../../README.md) ｜ [メインフロアへ戻る](../../README.md)


