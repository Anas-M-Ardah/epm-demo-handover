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
