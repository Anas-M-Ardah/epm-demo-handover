# Distribute supply and complete receipt handoffs

Open the supply project's **الفقرات التجهيزية**, contract UOB-SUP-2026-017. Do not substitute construction progress approval for the physical receipt process.

## Allocate quantities
As **المستخدم المختص — جامعة بغداد**, allocate all original quantities to **جامعة بغداد**: S01 3, S02 2, S03 4, S04 6, S05 2, S06 4. Save each line. Expected allocated quantities equal contracted quantities, but all received quantities remain zero.

## Full cycle for S04 microscopes
Use quantity **6**, event date **2026-10-01**, and these distinct roles/files. Record the generated numbers.

| Order | Role | Action and values | Upload |
| --- | --- | --- | --- |
| 1 | ممثل المجهّز | إشعار الجاهزية; 6 devices; receipt deadline 2026-10-08; note: الأجهزة جاهزة للتسليم مع الملحقات ووثائق الفحص. | 04-supply/S04-readiness.pdf |
| 2 | عضو لجنة الاستلام المخزني | استلام مخزني; 6 devices; store: المخزن المركزي — جامعة بغداد; committee: لجنة الاستلام المخزني; note: فحص العدد وسلامة التغليف. | 04-supply/S04-warehouse.pdf |
| 3 | ممثل الجهة المستفيدة — جامعة بغداد | استلام أولي; 6 devices; beneficiary جامعة بغداد; result مطابق; note: تم التشغيل والتحقق من العدسات والكاميرا والملحقات. | 04-supply/S04-preliminary.pdf |
| 4 | ممثل الجهة المستفيدة — جامعة بغداد | استلام نهائي; 6 devices; result مطابق; note: استكمال اختبار القبول والتدريب وتسليم الأدلة. | 04-supply/S04-final.pdf |

All files are in `uploads/`. Same-day dates represent a condensed walkthrough, not a claim that contractual warranty obligations disappear at final acceptance. A real acceptance date and warranty remain governed by the contract.

**Expected:** readiness does not move stock. Warehouse, preliminary and final totals each become 6 for their own stage. These are the same six devices moving through stages—never 18 devices. Trying to receive a seventh device is refused. Final acceptance is not available before preliminary receipt and conformity.

## Partial batch and nonconformity for S01 freezers
1. Supplier: readiness for **3** devices; use `S01-readiness.pdf`.
2. Warehouse role: receive **3**; use `S01-warehouse.pdf`.
3. Baghdad beneficiary: preliminary receipt **2**, result **غير مطابق**, observations `اختلاف إعدادات الإنذار وغياب شهادة معايرة أحد المجمدات` → `S01-nonconformity.pdf`.
4. Confirm final acceptance of that batch is blocked.
5. Supplier: open the affected receipt's correction/resubmission action. Submit `تم ضبط الإنذار واستكمال شهادة المعايرة وإعادة العرض للفحص` and `S01-correction.pdf`.
6. Baghdad beneficiary: record a **separate reinspection** referencing the original batch; quantity remains 2, result **مطابق**, upload `S01-reinspection.pdf`.
7. Record final acceptance of those **2** using `S01-final.pdf`.

**Expected:** warehouse total remains 3; preliminary and final totals are 2. One device remains in warehouse awaiting beneficiary handover. Correction and reinspection do not add stock or erase the original nonconforming record. The other supply lines remain unreceived for later sessions.

If the app provides device-detail fields, enter for S04: model `DM-40`, origin `Germany`, warranty `24 months`, serial range `UOB-MIC-2026-001` to `UOB-MIC-2026-006`; these are fictional identifiers, not assertions about a manufacturer. Do not create unsupported fields if the panel lacks them.

## Optional redistribution
After adding `tu` as an allowed project beneficiary, use the untouched S06 line to move **1 of 4 UPS units** from Baghdad to the technology university through a supply change order in chapter 10. Do not directly edit distributions to bypass the order, and do not move already accepted devices.
