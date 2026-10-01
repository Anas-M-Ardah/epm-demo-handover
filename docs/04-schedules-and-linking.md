# Schedules baseline current plan and quantity links

## Initial baseline
For each contract, use **المستخدم المختص — جامعة بغداد → الجدول الزمني → استيراد**.

| Contract | File | Expected activity count | Cost |
| --- | --- | ---: | ---: |
| UOB-CIV-2026-041 | [construction-baseline.xer](../uploads/02-schedules/construction-baseline.xer) | 11 including M900 | 3,400,000,000 IQD |
| UOB-SUP-2026-017 | [supply-baseline.xer](../uploads/02-schedules/supply-baseline.xer) | 7 including M900 | 215,600 USD |

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
1. Submit [construction-current-update.xer](../uploads/02-schedules/construction-current-update.xer) as **تحديث حالي**, with the same activity IDs.
2. Approve as **مهندس مقيم**.
3. A30 baseline finish stays **2026-11-30**, while its current finish becomes **2026-12-30**. A40 baseline finish stays **2027-01-29**, current finish becomes **2027-02-28**.
4. Approved percentages, actual starts and original costs must remain unchanged.

**Explain:** baseline is the approved comparison reference; current is the latest forecast plan. An approved current update does not erase baseline delay. Imported dependency links are validated and displayed; EPM does not run a full Primavera scheduling engine or automatically shift successors when you edit a date. Critical-path indicators depend on the data available in the deployed importer; do not promise a particular critical count for this file.
