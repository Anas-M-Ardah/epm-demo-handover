# Change orders and construction versus supply

Perform this chapter **after** the progress checkpoints, because applying a quantity change can legitimately alter weights and percentages.

## Construction quantity increase
As **مهندس مقيم**, open the construction project's **الأوامر التغييرية → إنشاء أمر تغييري** and select UOB-CIV-2026-041.

| Field | Value |
| --- | --- |
| العنوان | زيادة كمية الحفر لمعالجة اختلاف مناسيب التأسيس |
| النوع | Select the engineering change type shown for construction |
| كتاب المقاول / مرجع الطلب | UOB-CIV-VO-001 |
| الكتاب الرسمي الوارد | UOB-ENG-VO-2026-001 |
| تاريخ الكتاب | Use the current project data date after period closure; record it in the session ledger |
| الجهة المسؤولة | دائرة المهندس المقيم |
| المبرر | أظهر الرفع المساحي اختلاف مناسيب التأسيس والحاجة إلى حفر إضافي مقداره 600 م³ مع بقاء مدة العقد دون تمديد. |
| البند | C01 — أعمال الحفر ونقل النواتج |
| نوع التغيير | زيادة كمية |
| مقترح المقاول | Additional quantity 600 m³; excess rate 21000 IQD/m³ |
| مقترح دائرة المهندس المقيم | Additional quantity 600 m³; excess rate 21000 IQD/m³ |
| الأثر الزمني المطلوب | 0 days |
| المرفق | uploads/06-changes/construction-quantity-justification.pdf |

Enter **600 as the increase**, not 3100. Leave original unit rate 18000 unchanged. Review the server preview before submission.

## Explain the 20 percent rule with numbers
Original quantity is **2,500 m³**. Its 20% allowance is **500 m³**. For this first order there is no prior cumulative increase:
- First 500 additional m³ × original 18,000 IQD = **9,000,000 IQD**.
- Remaining 100 m³ × separately approved excess rate 21,000 IQD = **2,100,000 IQD**.
- Proposed increase = **11,100,000 IQD**; proposed total quantity = **3,100 m³**.

The allowance is based on original contracted quantity and cumulative changes; it does not restart with every order. The committee decides the approved figures. A preview does not establish an approved rate or amend the contract.

## Complete the approval route
Submit the order, then open its detail. Read the current stage and responsible party before every action. The six stages and role switches are:

| Stage | Construction role | Supply role |
| --- | --- | --- |
| 1 — دراسة الطلب | مهندس مقيم | عضو لجنة الفحص والاستلام |
| 2 — لجنة أوامر الغيار | عضو لجنة أوامر الغيار | عضو لجنة أوامر الغيار |
| 3 — تثبيت الأسعار | عضو لجنة تثبيت الأسعار | عضو لجنة تثبيت الأسعار |
| 4 — المصادقة والتخصيص | عضو لجنة أوامر الغيار | عضو لجنة أوامر الغيار |
| 5 — الأمر الوزاري وملحق العقد | عضو لجنة أوامر الغيار | عضو لجنة أوامر الغيار |
| 6 — التنفيذ | مهندس مقيم | عضو لجنة الفحص والاستلام |

Stage 4 is conditional; if skipped, show its recorded reason. A required external endorsement belongs inside a stage and must be received before that stage can finish; it is not a seventh stage. This zero-day example does not automatically require the quarter-duration external review. For each active stage, open its decision area, select **موافقة**, enter an appropriate comment and execute once. Record the next stage before switching roles.

At **تثبيت الأسعار**, use **عضو لجنة تثبيت الأسعار** and explicitly enter approved additional quantity **600**, approved original rate **18000** if requested, approved excess rate **21000**, and approved days **0**. Do not enter the 11.1-million total into a unit-price field. Record decision `اعتماد الزيادة وفق الذرعة مع إبقاء السعر الأصلي ضمن حد العشرين بالمئة واعتماد سعر الجزء الزائد فقط`.

After each decision, verify the completed stage, comment and next responsible party. Use **عضو لجنة أوامر الغيار** for stages 2, 4 when applicable, and 5; stage 6 returns to **مهندس مقيم**. Use an external endorsement role only if that specific external review is required. If a stage identifies another party, use that exact role; never use the central administrator to make a route appear correct.

When approved, first show that original/effective contract values have not changed merely because approval exists. As the authorized project/resident-engineer role, select **تطبيق الأمر** and review the application checklist.

**Expected after successful application:** effective contract value **3,921,100,000 IQD** (original contract 3,910,000,000 + 11,100,000), and effective BOQ value **3,411,100,000 IQD**, effective C01 quantity **3,100 m³**, original quantity and award retained in history, unchanged contractual finish because approved days are zero. Applying again must not double the change. The official project revised budget remains **4,100,000,000 IQD** until finance separately changes it.

## Supply difference and zero-value redistribution
Use untouched S06 in UOB-SUP-2026-017. Ensure the technology university is an allowed beneficiary. Create a supply redistribution moving **1 UPS** from Baghdad to the technology university. Attach `supply-redistribution-justification.pdf`; proposals and approved days are **0 monetary impact / 0 days**.

The technical party is **لجنة الفحص والاستلام**, not **دائرة المهندس المقيم**. Before applying: Baghdad 4 / technology university 0. After the approved order is applied: **Baghdad 3 / technology university 1**, contracted total remains 4 and supply BOQ/award component remains **215,600 USD** and effective contract value remains **247,940 USD**.

The pricing committee still records an explicit decision for a zero-value order. Explicitly confirm the S06 line's fixed zero effect (approved quantity delta 0), leave rate and excess rate blank, and enter approved days 0; do not invent a positive price proposal, skip a stage, or add a dummy quantity to bypass validation. If this path is unavailable, stop and report a deployment-version gap. This was a previously identified bug and must not be demonstrated as a valid business rule.
