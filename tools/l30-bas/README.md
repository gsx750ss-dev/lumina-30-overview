# L30-BAS Practical Sheets ｜ L30-BAS 実務シート

This folder contains the public L30-BAS v1.0 practical sheet set.  
It makes the actual use of L30-BAS visible without requiring readers to infer it only from the code-system document.

本フォルダには、公開用 L30-BAS v1.0 実務シート群を配置する。  
L30-BASの実際の使用箇所を、コード体系説明文書だけから推測させず、md上でも見える形にする。

---

## Important Position ｜ 重要な位置づけ

L30-BAS is not only a code-system explanation.  
The codes are embedded in practical sheets used for boundary checks, checklist review, and incident review.

L30-BASは、コード体系の説明だけではない。  
番地コードは、境界チェック、チェックリストレビュー、インシデントレビューに使う実務シート内に埋め込まれている。

The sheets are descriptive and non-binding.  
They do not create certification, compliance status, approval status, legal safe harbor, or policy mandates.

各シートは記述的・非拘束である。  
認証、適合状態、承認状態、法的免責、政策命令を作るものではない。

---

## Public Sheet Set ｜ 公開シート構成

| Sheet family | Files | Practical use | Embedded L30-BAS codes |
|---|---|---|---|
| Boundary Check ｜ 境界チェック | EN PDF / EN DOCX / JP PDF / JP DOCX | Minimal A4 boundary check for first review or rapid triage. ｜ 初回確認・迅速判定用のA4最小境界チェック。 | L30-BX-01, L30-BX-02, L30-BX-03, L30-BX-04, L30-CI, L30-OUT-01 |
| Civilizational Safety Checklist ｜ 文明安全チェックリスト | EN PDF / EN DOCX / JP PDF / JP DOCX | Broader checklist for review, audit preparation, governance discussion, and pre-incident evaluation. ｜ レビュー、監査前確認、ガバナンス検討、事前評価用の拡張チェックリスト。 | L30-BX boundary checks, L30-CI output, evidence / review notes |
| AI Incident Review Template ｜ AIインシデントレビュー票 | EN PDF / EN DOCX / JP PDF / JP DOCX | Structured incident-review sheet for context, timeline, evidence, refusal authority, irreversibility, and review output. ｜ 文脈、時系列、証拠、拒否権、不可逆性、レビュー出力を記録する事故後レビュー様式。 | L30-BX boundary checks, L30-OUT review outputs, L30-CI final status |

---

## File List ｜ ファイル一覧

### Boundary Check ｜ 境界チェック

- `EN_L30_BAS_Boundary_Check_v1_0.pdf`
- `EN_L30_BAS_Boundary_Check_v1_0.docx`
- `JP_L30_BAS_Boundary_Check_v1_0.pdf`
- `JP_L30_BAS_Boundary_Check_v1_0.docx`

### Civilizational Safety Checklist ｜ 文明安全チェックリスト

- `EN_L30_BAS_Civilizational_Safety_Checklist_v1_0.pdf`
- `EN_L30_BAS_Civilizational_Safety_Checklist_v1_0.docx`
- `JP_L30_BAS_Civilizational_Safety_Checklist_v1_0.pdf`
- `JP_L30_BAS_Civilizational_Safety_Checklist_v1_0.docx`

### AI Incident Review Template ｜ AIインシデントレビュー票

- `EN_L30_BAS_AI_Incident_Review_Template_v1_0.pdf`
- `EN_L30_BAS_AI_Incident_Review_Template_v1_0.docx`
- `JP_L30_BAS_AI_Incident_Review_Template_v1_0.pdf`
- `JP_L30_BAS_AI_Incident_Review_Template_v1_0.docx`

---

## How to Read the Sheet Set ｜ 読み方

Use the sheet family according to the review depth:

レビューの深さに応じて、以下のように使い分ける。

1. **Boundary Check**  
   Use when the reviewer needs the shortest possible LUMINA-30 boundary check.  
   最短のLUMINA-30境界確認が必要な場合に使う。

2. **Civilizational Safety Checklist**  
   Use when the reviewer needs a broader checklist for safety, audit, governance, or pre-incident review.  
   安全性、監査、ガバナンス、事前レビューのために広めの確認表が必要な場合に使う。

3. **AI Incident Review Template**  
   Use after an event or suspected incident, when context, evidence, timeline, refusal authority, and final review output must be recorded.  
   事故または疑い事案の後に、文脈、証拠、時系列、拒否権、最終レビュー出力を記録する必要がある場合に使う。

---

## Minimal Code Visibility ｜ 最小番地表示

The following codes are visibly used across the practical sheet set:

実務シート群では、以下の番地が見える形で使用される。

- `L30-BX-01` — Was the system still pre-irreversible?  
  まだ不可逆前だったか。
- `L30-BX-02` — Was Human Refusal Authority still effective before irreversible impact?  
  不可逆的影響の前に、人間の拒否権は実効的に残っていたか。
- `L30-BX-03` — Is there sufficient evidence to verify the boundary condition?  
  境界条件を確認できるだけの証拠はあるか。
- `L30-BX-04` — Can procedural validity be confirmed under LUMINA-30 boundary conditions?  
  LUMINA-30境界条件上、手続的有効性を確認できるか。
- `L30-CI` — Valid / Invalid / Invalid (Not Verifiable)  
  有効 / 無効 / 無効（確認不能）。
- `L30-OUT-01` — Boundary Review Note / summary finding.  
  境界レビュー記録 / 要約所見。

---

## Canonical Reference ｜ 正規参照

Canonical address-system document:

[docs/L30_BOUNDARY_ADDRESS_SYSTEM.md](../../docs/L30_BOUNDARY_ADDRESS_SYSTEM.md)

Canonical practical-sheet entry:

[Overview README — L30-BAS Practical Sheets](../../README.md#l30-bas-practical-sheets)
