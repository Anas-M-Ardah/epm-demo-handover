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

| Field | Construction IQD | Supply USD |
| --- | --- | --- |
| رمز العقد | UOB-CIV-2026-041 | UOB-SUP-2026-017 |
| اسم العقد | عقد إنشاء مبنى المختبرات التعليمية | عقد تجهيز مختبرات البحث العلمي |
| المكوّن | المكوّن المدني | المكوّن التجهيزي |
| الحالة | مستمر | مستمر |
| العملة | IQD — الدينار العراقي | USD — الدولار الأمريكي |
| مبلغ الإحالة (Construction IQD / Supply USD) | 3400000000 | 215600 |
| الاحتياط (Construction IQD / Supply USD) | 340000000 | 21560 |
| مبلغ الإشراف (Construction IQD / Supply USD) | 170000000 | 10780 |
| مبلغ المراقبة | 0 | 0 |
| تاريخ المباشرة | 2026-04-04 | 2026-07-03 |
| تاريخ الإنجاز | 2027-10-01 | 2026-11-15 |
| المقاول / المجهز | شركة روافد الجادرية للمقاولات | شركة مدار المختبر للتجهيز العلمي |
| الجهة المنفذة | قسم الشؤون الهندسية — جامعة بغداد | شعبة التجهيز — جامعة بغداد |
| الاستشاري | مكتب آفاق الجادرية للاستشارات الهندسية | مكتب آفاق الجادرية للاستشارات الهندسية |
| كتاب الإحالة | UOB-ENG-2026-041 | UOB-SUP-2026-017 |
| تاريخ الكتاب | 2026-03-25 | 2026-06-23 |
| التواصل | contracts.civil@example.org | contracts.supply@example.org |

These contractor names and contact addresses are fictional. Do not substitute actual vendors without authorization.

**Checkpoint:** original awards are 3,400,000,000 IQD and 215,600 USD. The original contract values are **3,910,000,000 IQD** and **247,940 USD**: award + reserve + the combined supervision/monitoring amount. For this scenario there is no separately entered monitoring charge: enter monitoring as 0. The checked implementation calculates original contract value from award + reserve + supervision. Its finance screens group supervision/monitoring; do not add a fourth amount to the expected total. A nonzero separate monitoring amount needs clarification of that field's intended treatment before another scenario uses it. The BOQs match the award amounts, not the totals including reserves and supervision. If a code is already used, stop and record a new run suffix consistently; never edit an existing contract to fit this exercise.

## Set the official project financial basis
Switch to **محلل موازنة** → each project's **الموقف المالي → تعديل**. Enter:
| Field | Construction IQD | Supply IQD |
| --- | --- | --- |
| الكلفة المقررة | 4000000000 | 330000000 |
| الكلفة المعدلة | 4100000000 | 330000000 |
| تخصيص السنة 2026 | 2200000000 | 300000000 |
| حالة المناقلة | لا توجد | لا توجد |

The supply project budget and annual allocation are still entered in IQD, even though its contract is USD. These are separately approved budget inputs, not converted contract fields.

Save and reopen the financial page. Annual allocation and revised cost are separate recorded figures; neither is automatically the sum of contracts. All payments in this kit remain inside both limits.
