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
