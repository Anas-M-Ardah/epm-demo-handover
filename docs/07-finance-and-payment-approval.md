# Finance and payment approval

The financial basis in chapter 02 must already be saved. Use construction contract **UOB-CIV-2026-041**. The current payment wizard records the cost-component distribution and its sum; do not invent a required **نوع الدفعة** selector or a gross/retention form if it is not shown.

## Register the first certificate
As **مهندس مقيم**, open **الموقف المالي → الدفعات → تسجيل دفعة**.
1. Select UOB-CIV-2026-041.
2. Enter the three components below.
3. Enter the official letter number and date.
4. Upload the financial letter and the measurement sheet in their respective areas.
5. Review the contract, allocations, total and attachments, then submit once.

| Field | Value |
| --- | --- |
| الإحالة IQD | 180000000 |
| الاحتياط IQD | 12000000 |
| الإشراف والمراقبة IQD | 8000000 |
| Total IQD | 200000000 |
| رقم كتاب المالية | UOB-FIN-2026-101 |
| تاريخ الكتاب | 2026-10-01 |
| Financial letter | 05-finance/payment-101-letter.pdf |
| Measurement evidence | 05-finance/payment-101-measurement.pdf |

The component amounts come from the letter's allocation, not automatically from BOQ weights. This certificate covers an installment of accepted works and associated approved cost components; 200 million is below the measured 504 million. Do not describe the difference as an application error or as an automatically calculated retention.

## Three distinct payment desks
Open **مهل التدقيق** and locate **UOB-FIN-2026-101**, not an unrelated card.
1. **مهندس مقيم:** release the first desk after checking the measurement. The financial desk becomes current.
2. **محلل موازنة:** release the financial desk after checking allocation and cost basis. The accounts desk becomes current.
3. **قسم الحسابات:** release the final desk. Confirm the payment becomes **مصروفة**.

Before step 3, registration/certification must not be described as cash paid. After disbursement, cumulative spending is **200,000,000 IQD**. Financial progress against the recorded revised cost is **200,000,000 / 4,100,000,000 = 4.8780%**. Annual allocation use is **9.0909% of 2,200,000,000 IQD**. These are different denominators.

## Create an overdue certificate for the next chapter
Repeat registration, but **do not release any desk**:
| Field | Value |
| --- | --- |
| الإحالة IQD | 135000000 |
| الاحتياط IQD | 9000000 |
| الإشراف والمراقبة IQD | 6000000 |
| Total IQD | 150000000 |
| رقم كتاب المالية | UOB-FIN-2026-102 |
| تاريخ الكتاب | 2026-09-15 |
| Financial letter | 05-finance/payment-102-letter.pdf |
| Measurement evidence | 05-finance/payment-102-measurement.pdf |

This is a deliberately back-entered, previously received letter for a remaining measured installment. The app starts its first desk from the entered letter date. The letter and evidence both state that historical date. Its amount must **not** increase paid spending while it remains pending. Finish chapter 08 before changing the project's data date.
