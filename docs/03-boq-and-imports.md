# Import and approve bills of quantities

Use the dedicated files, not the data-reference tables or the full guide:

| Contract | Upload | Expected lines | Expected amount |
| --- | --- | ---: | ---: |
| UOB-CIV-2026-041 | [construction-boq.xlsx](../uploads/01-boq/construction-boq.xlsx) | 10 | 3,400,000,000 IQD |
| UOB-SUP-2026-017 | [supply-boq.xlsx](../uploads/01-boq/supply-boq.xlsx) | 6 | 285,000,000 IQD |

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

The full row-by-row values are in [construction inputs](../data/construction-boq.md) and [supply inputs](../data/supply-boq.md). Do not add a totals row to the import worksheet: it would be interpreted as an item.
