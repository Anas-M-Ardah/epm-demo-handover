# EPM complete demonstration walkthrough

Reference data date: 2026-10-01

# Start here

This repository is a **manual demonstration kit**, not an application, seed API or deployment repository. Follow it in an already running EPM instance. Every entry is synthetic. University names provide a recognizable setting; contractors, correspondence, values, quantities and records are illustrative and are not actual procurement data.

The principal story is a two-storey, approximately 4,000 m² teaching laboratory building, accompanied by equipment procurement for its research laboratories. Construction award: **3,400,000,000 IQD** (about 850,000 IQD per gross m² as a scenario assumption, not a market quotation). Equipment award: **285,000,000 IQD**. Estimates include the scope stated in each BOQ line; a lump sum is a defined package, not an unexplained contingency.

## Before entering anything
1. Ask the application owner for the EPM URL and confirmation that this is a demonstration environment.
2. Confirm it has the latest schedule-period, file viewer, receipt-role and central-administrator changes. The reference for this kit is the local implementation checked on 1 October 2026; a different deployed version may behave differently.
3. Use a dedicated demonstration instance or a clearly isolated pair of new projects. Never reset an existing database for this guide.
4. Download this repository as a ZIP and extract it. Upload files from `uploads`, not screenshots of the files.
5. The prepared reference data date **D is 2026-10-01**. A new project may inherit the latest date already present in the instance. **Read the project's displayed data date before entering readings.** It must match this pack for the dated expectations below to apply.
6. If the date differs, ask the pack maintainer for a regenerated pack using that data date. The optional builder accepts `--as-of YYYY-MM-DD`; it does not alter the application. Do not change the computer clock or invent an editable data-date field.
7. Reserve 3–4 hours for the complete hands-on cycle, or 30–45 minutes for the prepared read-only executive tour. These are planning estimates.

## Record the IDs assigned by your instance
Use `checklists/session-record.md`. Project IDs, payment numbers, receipt numbers, order numbers, document IDs and period numbers are generated. Find records by their title, contract code or official letter, then record the assigned ID. This guide never assumes your new project will be PRJ-0001.

## Dates used in this run
| Meaning | Date |
| --- | --- |
| Initial data date D | 2026-10-01 |
| Construction start | 2026-04-04 |
| Construction original finish | 2027-10-01 |
| Supply start | 2026-07-03 |
| Supply original finish | 2026-11-15 |
| Overdue payment letter D minus 16 days | 2026-09-15 |
| First new data date D plus 30 | 2026-10-31 |
| Second new data date D plus 60 | 2026-11-30 |

## Sequence
Complete chapters 01–06 first. Chapter 07 registers payments, including one deliberately overdue case. Chapter 08 explains SLA and notifications **before advancing the data date**. Chapter 09 closes two periods. Chapters 10–13 finish change orders, document control, risks/meetings, and the final presentation. This order preserves the expected percentages and the initial 16-day SLA demonstration.

Do not replace the baseline after progress starts merely to make charts look healthy. Do not approve with the super role when demonstrating separation of duties. Acknowledging an alert does not pay a certificate or finish an activity.


# Roles and workspace creation

## Create or select the workspace
1. Open the user card and select **مدير النظام المركزي**. This role is for setup and recovery; ordinary business steps below use their own roles.
2. Open **مساحات العمل → مساحة عمل جديدة**.
3. Enter the following values, then save:
| Field | Copy this value |
| --- | --- |
| الاسم بالعربية | جامعة بغداد |
| الاسم بالإنجليزية | University of Baghdad |
| الرمز | ub |
| رمز الشارة | UOB |
| النوع | جامعة حكومية |
| الحالة | نشطة |

**If `ub` already exists, reuse it.** Do not create `ub2` and expect the university and supply personas to inherit access; their scope is bound to workspace codes. On an empty instance this is a genuine workspace-creation step; on a populated instance explain reuse, without claiming to have created it.

For the optional supply redistribution, also create or reuse **الجامعة التكنولوجية**, English **University of Technology**, code **tu**, badge **UOT**, type **جامعة تقنية**, active. Assign it as a beneficiary of the supply project before redistribution. The available beneficiary persona can complete receipt actions for Baghdad only; the optional technology-university allocation will remain awaiting its own authorized receipt actor.

## Role card to keep beside the application
| Exact role label | Used for |
| --- | --- |
| المستخدم المختص — جامعة بغداد | Create projects/contracts; submit BOQ, schedules and progress |
| مهندس مقيم | Approve BOQ/schedule/progress; construction payment first desk; close periods |
| مدير مشروع | Project decisions and document approval; not a substitute for all payment desks |
| محلل موازنة | Project budgets/allocations and second payment desk |
| قسم الحسابات | Third payment desk and disbursement |
| ممثل المجهّز | Readiness and supplier correction submission |
| عضو لجنة الاستلام المخزني | Warehouse receipt |
| ممثل الجهة المستفيدة — جامعة بغداد | Preliminary receipt, reinspection and final acceptance for Baghdad |
| عضو لجنة الفحص والاستلام | Supply change-order technical review; not a substitute for the payment desk role |
| عضو لجنة أوامر الغيار | Change-order committee stages |
| عضو لجنة تثبيت الأسعار | Approved quantities/rates and days at the pricing stage |
| عضو لجنة المراجعة المصادقة | External endorsement when explicitly required; not the default final workflow owner |
| مدير عام | Portfolio presentation across workspaces |
| مدير النظام المركزي | Setup and documented administrative recovery; intentionally broad permissions |

Role switching in this prototype demonstrates capacities; it is not proof of independent authenticated accounts. The central administrator can approve its own submissions, so using it throughout would conceal the normal controls.

**Checkpoint:** a university specialist can see `ub`; an unrelated university role should not acquire access just because its name sounds similar.


# Create the two projects and their contracts

Switch to **المستخدم المختص — جامعة بغداد**. Open the workspace, then **المشاريع → تعريف مشروع جديد**. Create each column below as a separate project. Leave generated identifiers to the system.

| Field | Construction project | Supply project |
| --- | --- | --- |
| الاسم بالعربية | إنشاء مبنى المختبرات التعليمية — مجمع الجادرية | تجهيز مختبرات البحث العلمي — مجمع الجادرية |
| English name | Jadriya Teaching Laboratory Building | Jadriya Research Laboratory Equipment |
| نوع المشروع | المشاريع الإنشائية | مشاريع التجهيز |
| حالة المشروع | مستمر | مستمر |
| مرحلة التنفيذ | الهيكل الإنشائي | إحالة |
| سنة الإدراج | 2026 | 2026 |
| نوع التمويل | الموازنة الاتحادية | الموازنة الاتحادية |
| الكلفة المقررة IQD | 4000000000 | 330000000 |
| المنطقة | بغداد | بغداد |
| الأولوية | عالية | عالية |
| اسم التشكيل | وزارة التعليم العالي والبحث العلمي | وزارة التعليم العالي والبحث العلمي |
| الجهة المستفيدة | جامعة بغداد | جامعة بغداد |
| الهيكل التنظيمي | قسم الشؤون الهندسية / شعبة الأبنية | قسم الشؤون الهندسية / شعبة التجهيز |
| الفرع | شعبة الأبنية | شعبة التجهيز |
| الشركة الاستشارية | مكتب آفاق الجادرية للاستشارات الهندسية | مكتب آفاق الجادرية للاستشارات الهندسية |
| الوصف | مبنى مختبرات تعليمية بطابقين بمساحة إجمالية تقارب 4000 م²، مع الخدمات والأعمال الخارجية. | تجهيز مختبرين بحثيين بأجهزة حفظ العينات والسلامة والتحضير والفحص، مع التركيب والتدريب. |

Save each project, record its generated ID, and check that its data date is **2026-10-01**. Project creation is a direct save in this implementation; there is no project-definition approval route to invent.

## Create contracts
Stay in the same role. Open each project → **العقود → إضافة عقد جديد**.

| Field | Construction | Supply |
| --- | --- | --- |
| رمز العقد | DEMO-CIV-26 | DEMO-SUP-26 |
| اسم العقد | عقد إنشاء مبنى المختبرات التعليمية | عقد تجهيز مختبرات البحث العلمي |
| المكوّن | المكوّن المدني | المكوّن التجهيزي |
| الحالة | مستمر | مستمر |
| العملة | IQD — الدينار العراقي | IQD — الدينار العراقي |
| مبلغ الإحالة | 3400000000 | 285000000 |
| الاحتياط | 340000000 | 28500000 |
| مبلغ الإشراف | 170000000 | 14250000 |
| مبلغ المراقبة | 0 | 0 |
| تاريخ المباشرة | 2026-04-04 | 2026-07-03 |
| تاريخ الإنجاز | 2027-10-01 | 2026-11-15 |
| المقاول / المجهز | شركة روافد الجادرية للمقاولات | شركة مدار المختبر للتجهيز العلمي |
| الجهة المنفذة | قسم الشؤون الهندسية — جامعة بغداد | شعبة التجهيز — جامعة بغداد |
| الاستشاري | مكتب آفاق الجادرية للاستشارات الهندسية | مكتب آفاق الجادرية للاستشارات الهندسية |
| كتاب الإحالة | UOB-ENG-2026-041 | UOB-SUP-2026-017 |
| تاريخ الكتاب | 2026-03-25 | 2026-06-23 |
| التواصل | civil.demo@example.invalid | supply.demo@example.invalid |

These contractor names and contact addresses are fictional. Do not substitute actual vendors without authorization.

**Checkpoint:** original awards are 3,400,000,000 and 285,000,000 IQD. The original contract values are **3,910,000,000 IQD** and **327,750,000 IQD**: award + reserve + the combined supervision/monitoring amount. For this scenario there is no separately entered monitoring charge: enter monitoring as 0. The checked implementation calculates original contract value from award + reserve + supervision. Its finance screens group supervision/monitoring; do not add a fourth amount to the expected total. A nonzero separate monitoring amount needs clarification of that field's intended treatment before another scenario uses it. The BOQs match the award amounts, not the totals including reserves and supervision. If a code is already used, stop and record a new run suffix consistently; never edit an existing contract to fit this exercise.

## Set the official project financial basis
Switch to **محلل موازنة** → each project's **الموقف المالي → تعديل**. Enter:
| Field | Construction IQD | Supply IQD |
| --- | --- | --- |
| الكلفة المقررة | 4000000000 | 330000000 |
| الكلفة المعدلة | 4100000000 | 330000000 |
| تخصيص السنة 2026 | 2200000000 | 300000000 |
| حالة المناقلة | لا توجد | لا توجد |

Save and reopen the financial page. Annual allocation and revised cost are separate recorded figures; neither is automatically the sum of contracts. All payments in this kit remain inside both limits.


# Import and approve bills of quantities

Use the dedicated files, not the data-reference tables or the full guide:

| Contract | Upload | Expected lines | Expected amount |
| --- | --- | ---: | ---: |
| DEMO-CIV-26 | [construction-boq.xlsx](uploads/01-boq/construction-boq.xlsx) | 10 | 3,400,000,000 IQD |
| DEMO-SUP-26 | [supply-boq.xlsx](uploads/01-boq/supply-boq.xlsx) | 6 | 285,000,000 IQD |

1. As **المستخدم المختص — جامعة بغداد**, open the project and select its contract.
2. Construction: open **جدول الكميات**. Supply: open **الفقرات التجهيزية** and its BOQ/import action.
3. Choose **استيراد** and the initial-table type **جدول أولي**.
4. Upload the matching workbook. Its first worksheet is intentionally the import table; do not move a cover sheet in front of it.
5. In column mapping, match Code → الرمز; Description → الوصف; Division → الباب; Unit → الوحدة; Qty → الكمية; Rate → السعر. Rates are IQD because the contract is IQD; the file itself does not change the contract currency.
6. Review all rows and compare the total above. Submit for approval.
7. Switch to **مهندس مقيم**, open the submitted version and approve it.
8. Return to the register. Check the quantities, rates, line amounts and weights. Weights must sum to 100%, allowing the application's stated rounding.

**Control:** a normal specialist cannot approve their own submitted import. Before approval, the proposed file must not silently replace the live BOQ.

**Files:** upload the original workbook bytes to its entry in **الوثائق والمخططات** if the imported-file entry exists but says it has not been uploaded. Importing structured rows and retaining a downloadable original are separate operations in some builds.

The full row-by-row values are in [construction inputs](data/construction-boq.md) and [supply inputs](data/supply-boq.md). Do not add a totals row to the import worksheet: it would be interpreted as an item.


# Schedules baseline current plan and quantity links

## Initial baseline
For each contract, use **المستخدم المختص — جامعة بغداد → الجدول الزمني → استيراد**.

| Contract | File | Expected activity count | Cost |
| --- | --- | ---: | ---: |
| DEMO-CIV-26 | [construction-baseline.xer](uploads/02-schedules/construction-baseline.xer) | 11 including M900 | 3,400,000,000 IQD |
| DEMO-SUP-26 | [supply-baseline.xer](uploads/02-schedules/supply-baseline.xer) | 7 including M900 | 285,000,000 IQD |

1. Select Primavera XER, cost weighting and **خط أساس**.
2. Review activity IDs, WBS groups, dates, costs, calendars and relationships.
3. Submit, then switch to **مهندس مقيم** and approve. If a baseline reason is requested, enter `اعتماد البرنامج الأساسي للعقد وفق خطة التنفيذ المرفقة`.
4. Inspect a WBS summary bar, an ordinary activity and the zero-duration M900 milestone. Expand/collapse groups and scroll horizontally.
5. Check the six-day calendar: Saturday–Thursday, 08:00–16:00; Friday is not a working day. There are no holiday exceptions in these files. This is an agreed scenario calendar, not a claim about an official holiday schedule.

These files are tailored to the EPM XER importer. They are not certified round-trip Primavera project exports.

## Link BOQ to activities
Open **ربط الكميات بالأنشطة**. For construction, C01 → A10, C02 → A20, through C10 → A100. For supply, S01 → S10 through S06 → S60. Set **100% of each line to its matching activity**, then save.

Check every line has exactly one 100% link. M900 has no cost and no BOQ quantity; do not assign a financial share to it. A percentage here is the distribution of a BOQ line across activities, not an instruction to mark the activity complete.

## Current update after the initial progress approval
Do this after chapter 05, before closing periods:
1. Submit [construction-current-update.xer](uploads/02-schedules/construction-current-update.xer) as **تحديث حالي**, with the same activity IDs.
2. Approve as **مهندس مقيم**.
3. A30 baseline finish stays **2026-11-30**, while its current finish becomes **2026-12-30**. A40 baseline finish stays **2027-01-29**, current finish becomes **2027-02-28**.
4. Approved percentages, actual starts and original costs must remain unchanged.

**Explain:** baseline is the approved comparison reference; current is the latest forecast plan. An approved current update does not erase baseline delay. Imported dependency links are validated and displayed; EPM does not run a full Primavera scheduling engine or automatically shift successors when you edit a date. Critical-path indicators depend on the data available in the deployed importer; do not promise a particular critical count for this file.


# Record and approve construction progress

Use the construction project at data date **2026-10-01**. Start with the BOQ and schedule approved and linked.

1. As **المستخدم المختص — جامعة بغداد**, open **الإنجاز** and the construction contract.
2. Submit the four readings below. The entered percentage is **cumulative**, not this month's increment.
3. Attach [construction-measurement-period-1.pdf](uploads/03-evidence/construction-measurement-period-1.pdf) to each reading, using evidence title `ذرعة الأعمال المنجزة للفترة الأولى`.
4. Switch to **مهندس مقيم**. Open each pending reading, inspect its supporting document and approve.

| Activity | Cumulative % | Actual start | Actual finish | Measured cumulative quantity |
| --- | --- | --- | --- | --- |
| A10 | 100 | 2026-04-04 | 2026-05-04 | 2500 m³ |
| A20 | 100 | 2026-05-05 | 2026-07-13 | 600 m³ |
| A30 | 30 | 2026-07-14 | Leave empty | 480 m³ |
| A40 | 10 | 2026-09-01 | Leave empty | 600 m² |

Leave all remaining activities and M900 at 0%. Do not invent actual dates for activities that have not started.

**Expected before the change order:** earned BOQ value **504,000,000 IQD** and cost-weighted progress **14.8235%** (the screen may round to 14.8% or 15%). Because this kit uses equal BOQ/activity costs and one-to-one links, the construction physical and cost-weighted schedule measures reconcile at this point. This is not a general promise for every project.

Open **الوثائق والمخططات**, filter progress evidence and preview the actual file. If metadata exists but bytes are absent, upload the same named file there. A successful approval alone does not prove that a PDF can be opened.

**Useful controls:** 30% without an actual start must be refused; 100% without an actual finish must be refused; a finish before its start or after the project's data date must be refused. Do not save deliberately bad readings into the main narrative. M900 accepts 0% or 100%, not 50%.

Now complete the current-schedule update in chapter 04. It must preserve these approved readings.


# Distribute supply and complete receipt handoffs

Open the supply project's **الفقرات التجهيزية**, contract DEMO-SUP-26. Do not substitute construction progress approval for the physical receipt process.

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

If the app provides device-detail fields, enter for S04: model `DM-40`, origin `Germany`, warranty `24 months`, serial range `DEMO-MIC-001` to `DEMO-MIC-006`; these are fictional identifiers, not assertions about a manufacturer. Do not create unsupported fields if the panel lacks them.

## Optional redistribution
After adding `tu` as an allowed project beneficiary, use the untouched S06 line to move **1 of 4 UPS units** from Baghdad to the technology university through a supply change order in chapter 10. Do not directly edit distributions to bypass the order, and do not move already accepted devices.


# Finance and payment approval

The financial basis in chapter 02 must already be saved. Use construction contract **DEMO-CIV-26**. The current payment wizard records the cost-component distribution and its sum; do not invent a required **نوع الدفعة** selector or a gross/retention form if it is not shown.

## Register the first certificate
As **مهندس مقيم**, open **الموقف المالي → الدفعات → تسجيل دفعة**.
1. Select DEMO-CIV-26.
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


# SLA notifications and resolution

Start at **2026-10-01**, before period closure advances the project's date.

## Explain the overdue route
Open **الموقف المالي → مهل التدقيق → UOB-FIN-2026-102**.
- First desk started from letter date **2026-09-15**.
- **16 elapsed days** against a **7-day** limit means **9 days beyond the limit**.
- The screen may display elapsed and limit without a separate nine-day value. Explain the subtraction; do not claim an extra field is visible.
- The second and third desks have not started. They must not be described as overdue merely because the first desk is overdue.

## Show notification behavior
1. Open project **التنبيهات**, then the central **مركز التنبيهات**.
2. Locate the alert for this payment, normally rule **R12** (audit SLA breach). Open its linked source and confirm it returns to the right project/payment.
3. Inspect the rule's actual severity, channels and escalation interval. Quote the values shown; rules can be configured, so this kit does not promise a fixed recipient count.
4. Wait for the background evaluation cycle (normally around one minute), or use **تشغيل أتمتة العرض** when offered. Refresh once. Repeated evaluation should not create duplicate copies of the same delivery or escalation step.
5. Review the notification/delivery history. In-app records and simulated channel history are demonstrable; do not claim a real email or SMS was sent unless that environment has a working external provider and delivery evidence.
6. Acknowledge the alert with **إقرار**. Show the actor/history. Acknowledgement records awareness—it does not resolve the payment.
7. Navigate to documents and back. The startup/login notification prompt should not repeatedly obstruct navigation during the same session. The inbox remains accessible.

## Resolve the business cause
Switch in sequence: **مهندس مقيم → محلل موازنة → قسم الحسابات**, releasing only each role's current desk for letter 102. Refresh the alert evaluation.

**Expected:** the payment is paid; no active first-desk breach remains for that resolved route. Its historical processing duration and audit trail remain. Total paid across the two certificates is now **350,000,000 IQD**, split **315,000,000 award + 21,000,000 reserve + 14,000,000 supervision/monitoring**. Financial progress is **8.5366%**; annual allocation use is **15.9091%**.

If no alert appears, check the project data date, enabled R12 rule, payment's actual current desk and its start date. Changing the laptop clock is not a valid substitute. An acknowledged historical entry may remain in the archive even though the source breach has been resolved.


# Close progress periods and carry work forward

Use **مهندس مقيم** in the construction project. Complete all initial progress approvals and their evidence, and finish the initial SLA chapter first.

## First closure
1. Open **الإنجاز → إغلاق فترة الإنجاز**.
2. Review **متطلبات الإغلاق**. There must be no pending readings, approved readings without evidence, or invalid activity dates.
3. If missing evidence is listed, open its resolution action and attach `construction-measurement-period-1.pdf` to the named reading. Do not resubmit a duplicate percentage just to conceal the missing evidence.
4. Optionally set **دورية الفترات → شهرية**. For this controlled run, the explicitly entered next data date below is the comparison point; a calendar-month suggestion can differ from a 30-day interval.
5. Enter **2026-10-31** as **تاريخ البيانات الجديد**, then close once.
6. Open **سجل الفترات المقفلة → عرض السجل**.

**Expected:** one new closed record and one successor open period. The closed schedule measure is **14.8235%**. For A30, the successor starts with **previous 30%, period 0%, cumulative 30%**. For A40 it starts **10%, 0%, 10%**. Completed A10/A20 have no remaining future work. Remaining construction value is **2,896,000,000 IQD**. The closed period retains its recorded currency quote.

## Second period
As the specialist, submit A30 **45% cumulative** and A40 **20% cumulative**, using `construction-measurement-period-2.pdf`. Keep their original actual starts and leave their finishes blank. Approve as the resident engineer.

| Activity | Previous | This period | Cumulative | Cumulative quantity |
| --- | ---: | ---: | ---: | --- |
| A30 | 30% | 15 percentage points | 45% | 720 m³ |
| A40 | 10% | 10 percentage points | 20% | 1,200 m² |

The new construction earned value is **645,000,000 IQD**, progress **18.9706%**, period increase **4.1471 percentage points**, remaining value **2,755,000,000 IQD**. The first closed record must still show the earlier values.

Close the second period with next data date **2026-11-30**. The successor starts with zero new-period progress, not zero cumulative progress. Actual dates and accepted readings remain.

## Reopening is an optional separate branch
To demonstrate reopening, do it immediately after the first closure **before entering any successor reading**, then return to the main sequence. Enter reason `إعادة فتح الفترة لتصحيح مرجع الأدلة قبل بدء أي عمل في الفترة التالية` (at least ten characters). Only the latest closed period may reopen, and a successor containing readings blocks it. The empty successor is withdrawn; period numbers need not remain consecutive after reclosing. History remains retained. Do not attempt to reopen period one after completing period two and call the refusal a bug.

Period closure is a reporting cut-off, not project completion, contract acceptance, or payment approval.


# Change orders and construction versus supply

Perform this chapter **after** the progress checkpoints, because applying a quantity change can legitimately alter weights and percentages.

## Construction quantity increase
As **مهندس مقيم**, open the construction project's **الأوامر التغييرية → إنشاء أمر تغييري** and select DEMO-CIV-26.

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
Use untouched S06 in DEMO-SUP-26. Ensure the technology university is an allowed beneficiary. Create a supply redistribution moving **1 UPS** from Baghdad to the technology university. Attach `supply-redistribution-justification.pdf`; proposals and approved days are **0 monetary impact / 0 days**.

The technical party is **لجنة الفحص والاستلام**, not **دائرة المهندس المقيم**. Before applying: Baghdad 4 / technology university 0. After the approved order is applied: **Baghdad 3 / technology university 1**, contracted total remains 4 and supply BOQ/award component remains **285,000,000 IQD** and effective contract value remains **327,750,000 IQD**.

The pricing committee still records an explicit decision for a zero-value order. Explicitly confirm the S06 line's fixed zero effect (approved quantity delta 0), leave rate and excess rate blank, and enter approved days 0; do not invent a positive price proposal, skip a stage, or add a dummy quantity to bypass validation. If this path is unavailable, stop and report a deployment-version gap. This was a previously identified bug and must not be demonstrated as a valid business rule.


# Documents revisions and viewing uploaded files

Open the construction project's **الوثائق والمخططات**. This is both a document register and the point for finding attachments owned by other workflows.

## Register and approve a document
As **مهندس مقيم**, create:
| Field | Value |
| --- | --- |
| الرمز | CIV-STR-001 |
| العنوان | مذكرة تصميم الأساسات ومراجعة المناسيب |
| التخصص | إنشائي |
| جهة الإصدار | مكتب آفاق الجادرية للاستشارات الهندسية |
| المراجعة | First revision generated by the system |
| تاريخ الإصدار | 2026-10-01 |
| كتاب الإرسال | UOB-DOC-2026-021 |
| File | 07-documents/foundation-note-r1.pdf |

1. Register the document/revision with the filename and upload its bytes when prompted.
2. If registration only creates metadata, select the row's upload action and choose the **identical named file** from this pack.
3. Open **معاينة / عرض الملف**. Confirm the PDF pages load and text is readable. Then test download and reopening.
4. Switch to **مدير مشروع** and approve the revision with comment `مقبول للتنفيذ ضمن حدود المخططات المعتمدة وبعد التحقق من مناسيب الموقع`.
5. Add a new revision using `foundation-note-r2.pdf`, transmittal **UOB-DOC-2026-022**, description `إضافة توضيح مناسيب الحفر الإضافي والإحالة إلى الأمر التغييري`.
6. Submit/approve the new revision. Show both revisions and their status history. Never overwrite the old file under the original revision.

These files are design-review **notes**, not signed engineering drawings or actual structural calculations. Do not present them as construction-authorized documents outside the demonstration.

## Find attachments from other modules
Filter by progress, payments, supply, change orders, schedules and meetings. Verify at least one file from each completed chapter. Select the source/reference link and confirm it returns to the correct record. Repeated filenames can exist on different records; check project, contract, source and revision rather than filename alone.

The app supports inline viewing of PDF and supported images. Spreadsheet and XER originals may download rather than render as a PDF. That is not evidence that the upload failed. File size limit is **20 MiB**; all supplied examples are well below it.

**Acceptance:** a file row alone is insufficient. Mark success only after the viewer/download returns the actual content. An unavailable-file row means metadata was registered but the bytes still need uploading.


# Optional risks meetings and accountable actions

**Current implementation boundary:** these two screens are read-only. There are no risk or meeting creation/update endpoints in the checked build. Therefore this chapter is an optional prepared-data tour, not part of the manager's manual-entry cycle. Do not look for an Add button or switch to the central administrator expecting one to appear. No database-loading script is included in this documentation repository.

## Records for the application owner to prepare separately if desired
The owner may populate these through their approved environment-preparation process. Ask them to link the records to the manager's actual generated project IDs. These are supplied values, not a claim that this repository loads them.

| Risk code | Title | Category | Probability | Impact | Owner | State | Indicator |
| --- | --- | --- | ---: | ---: | --- | --- | --- |
| RSK-01 | تأخر توريد لوحات التوزيع الكهربائية | زمني | 3 | 3 | مسؤول التجهيز | مفتوح | SPI |
| RSK-02 | اختلاف مناسيب التأسيس | فني | 2 | 3 | مهندس الموقع | تحت المعالجة | SPI |
| RSK-03 | تجاوز كلفة الأعمال الإضافية | مالي | 2 | 2 | مدير المشروع | مفتوح | CPI |

The current risk scale has **three levels**, not five. Inspect the row's probability, impact, severity band, owner, state and KPI link. Risk status has open, mitigating and suspended states in the checked lookup; do not invent a Closed status.

## Prepared meeting and actions
Meeting title: `اجتماع تنسيق الأعمال المدنية والتجهيزات`. Date: **2026-10-01**. Decision: `اعتماد خطة معالجة مناسيب التأسيس واستكمال تأكيد توريد اللوحات قبل بدء التشطيبات`. Supporting file: `uploads/08-meetings/coordination-minutes.pdf`.

| Code | Action | Owner | Due date | Priority | State |
| --- | --- | --- | --- | --- | --- |
| ACT-01 | تقديم الرفع المساحي المحدث وذرعة الحفر | مهندس الموقع | 2026-10-06 | عالية | مفتوح |
| ACT-02 | تأكيد شحن لوحات التوزيع | مسؤول التجهيز | 2026-10-11 | عالية | قيد التنفيذ |
| ACT-03 | مراجعة تعارضات الخدمات | المكتب الاستشاري | 2026-10-15 | متوسطة | مفتوح |

If the owner has prepared these records, show the meeting, linked actions, owners and due dates; open its minutes in the files module. The action state is stored, not automatically inferred from the due date. The manager cannot update it from the current read-only screen.

**Alternative requiring no prepared data:** register the minutes PDF as an ordinary document under reports/correspondence in chapter 11, code `CIV-MTG-001`, title `محضر تنسيق الأعمال المدنية والتجهيزات`, issuer `قسم الشؤون الهندسية — جامعة بغداد`. This demonstrates the real file/register/revision workflow. Explain that this does not create a structured meeting or action in the separate read-only module.


# Dashboard explanation and final presentation

Use **مدير عام** for the portfolio overview, then open each project. Use ordinary workflow roles for further edits.

## Before applying the quantity change
| Figure | Construction value | What it means |
| --- | ---: | --- |
| Original contract award | 3,400,000,000 IQD | Contract commitment before applied changes |
| All-component contract total | 3,910,000,000 IQD | Award + reserve + combined supervision/monitoring (no double counting) |
| Revised project budget | 4,100,000,000 IQD | Finance-maintained project budget basis |
| Current-year allocation | 2,200,000,000 IQD | Spending allocation for the reference year |
| Approved progress after first readings | 14.8235% | 504,000,000 earned / 3,400,000,000 BOQ |
| Approved progress after second readings | 18.9706% | 645,000,000 earned / 3,400,000,000 BOQ |
| Paid after certificate 101 | 200,000,000 IQD | Cash disbursed after the third desk |
| Paid after certificates 101 and 102 | 350,000,000 IQD | Sum of paid amounts, not pending submissions |
| Financial progress after both | 8.5366% | Paid / recorded revised project budget |

After application of the construction change, effective contract value becomes **3,921,100,000 IQD** and effective BOQ value becomes **3,411,100,000 IQD**. Weights and progress may recalculate; use the displayed post-change figures and the preserved earlier period records rather than insisting on the pre-change percentages.

## Read the indicators accurately
- Physical progress is derived from linked BOQ/activity progress; schedule weighting and project financial progress have their own bases.
- SPI compares earned progress/value to the baseline planned position at the project data date. CPI compares earned value to the actual-cost basis implemented here, which is payment-derived. A high CPI may reflect payment timing; it is not proof that the final project will be under budget.
- The current-versus-baseline chart explains forecast movement. A changed plan does not mean the original baseline was deleted.
- Open risks are unresolved exposures; open alerts are actionable conditions; neither is identical to payment status.
- For supply, warehouse, preliminary and final quantities are stage totals for the same devices. Read their labels before explaining a percentage.

## Currency display
Every monetary figure should identify IQD or USD. Display conversion does not change the contract's native currency. Read the configured rate/date/source shown by the app; do not call it a live market feed. If the configured quote is 1 USD = 1,310 IQD, 3,400,000,000 IQD displays as about 2,595,419.85 USD. If the quote differs, the displayed conversion should differ. The numeric tables above remain native IQD.

## Suggested eight-minute ending
1. Portfolio and project grouping: ownership and visibility (one minute).
2. Construction dashboard, baseline/current and two closed periods: measurable progress and retained history (two minutes).
3. Payment desks, resolved overdue case and audit history: responsibility and intervention (one minute).
4. Supply allocation and receipt/correction trail: traceable delivery and acceptance (one minute).
5. Applied change and preserved original contract: controlled modification (one minute).
6. Documents viewer, revisions and source links: accessible supporting evidence (one minute).
7. Notifications and the meeting-minutes document: decisions carried through to follow-up; show structured risks/actions only if prepared (one minute).

Suggested closing words: “EPM connects the project definition, contract, quantities, schedule, evidence and approvals. The result is a shared view of what was planned, what was completed, what was paid, and who must act next—with the history needed to explain each decision.”

The optional Autodesk model requires an already connected, authorized model. This pack does not contain proprietary geometry or credentials. If using the existing Karbala campus, identify it as a separate demonstration model; do not present it as the Jadriya laboratory building or claim viewer selection updates quantities and payments.


# Optional portfolio expansion and repeat runs

The core cycle deliberately uses two rich projects. Add these only after completing it, using the same workspace and creation process. They are planning examples, not preloaded histories.

| Project | Type | Planned budget IQD | Award IQD | Reserve IQD | Supervision IQD | Separate monitoring IQD | Story |
| --- | --- | --- | --- | --- | --- | --- | --- |
| تأهيل شبكة المياه في مجمع الجادرية | إنشائي | 880000000 | 750000000 | 75000000 | 37500000 | 0 | Early mobilization; later record real progress from entered evidence |
| تطوير قاعات التعليم الإلكتروني | تجهيز | 165000000 | 140000000 | 14000000 | 7000000 | 0 | Procurement approved; delivery has not started |
| تأهيل المكتبة المركزية | إنشائي | 2200000000 | 1850000000 | 185000000 | 92500000 | 0 | Separate rehabilitation component alongside new construction |
| تجهيز ورشة القياسات الهندسية | تجهيز | 495000000 | 420000000 | 42000000 | 21000000 | 0 | Higher-value equipment procurement with several beneficiaries |

Use distinct contract codes DEMO-EXT-01 through DEMO-EXT-04. Record all generated IDs in the session ledger. Do not label a project completed, delayed or paid just to diversify the dashboard: build the corresponding schedule, readings and payment history first. These optional projects begin as planning/procurement examples and are not included in the core expected totals.

For a repeat demonstration, use a new approved test project pair and unique contract/letter suffixes, or an administrator-provided fresh demonstration instance. Do not delete unrelated workspaces or reset the application from this guide. Keep a session ledger for each run. A later data date requires a consistently regenerated pack, not a mixture of old letters and new expected SLA values.
