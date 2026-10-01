# Validation and demonstration boundaries

Prepared against the application working tree inspected on 1 October 2026. The existing application and database were not changed while producing this pack.

## Verified for this handover

- Two XLSX first-sheet BOQs: 10 construction rows totaling 3,400,000,000 IQD and 6 supply rows totaling 285,000,000 IQD. Quantity/rate columns contain numeric values; there is no extra totals row to import as an item.
- Three XER files parsed using the application's actual `parseXer` implementation: 11 construction activities and 7 supply activities including one milestone each; six workdays, Friday off, 8 hours per day; valid endpoint IDs on every relationship. See `schedule-parser-results.json`.
- Twenty-one actual PDFs checked for readable extracted text and one-page output. Representative measurement, nonconformity and payment-letter pages visually inspected. See `pdf-checks.json`.
- Construction measured values, period percentages, financial percentages, 20% quantity tier and full contract value reconciled independently.
- Roles checked against the current persona capabilities; change-order route checked against the six-stage workflow definition.
- Relative links and upload-file checksums checked with `tools/check_pack.py`.

## What is not claimed

This is not a completed browser rehearsal against your manager's deployment. The version, initial project data date, role availability and existing identifiers must be checked at the beginning of the run. No records were inserted into EPM to make the guide appear tested.

The schedule files target the EPM importer; a round trip through Autodesk Primavera was not tested. PDF/Excel renderings were inspected locally; the manager must still confirm upload and preview in the deployed app.

## Source findings reflected in the guide

| Area | Checked implementation | Consequence for the walkthrough |
| --- | --- | --- |
| New project data date | ProjectsEndpoints inherits latest existing date, else UTC today | Read the new project's date; regenerate the pack if different |
| Contract value | ContractEndpoints sums award + reserve + supervision | Monitoring is entered as zero in this case; BOQ total and total contract are separate |
| Payment route | AuditRoute and Personas define resident / finance / accounts | Use three roles; do not ask finance to release accounts |
| Supply receipts | Persona receipt-kind and beneficiary restrictions | Supplier, warehouse and beneficiary handoffs remain separate |
| Change orders | WorkflowMachine and ChangeOrderReview | Six visible stages; pricing never silently skipped; explicit zero delta for supply redistribution |
| Periods | PeriodLifecycle, PeriodProgress, PeriodFigures and period endpoints | Frozen history, evidence gates, carry-forward and restricted reopening |
| Documents | DocumentsEndpoints and AttachmentFiles | Registration and physical upload can be distinct; preserve revisions |
| Risks and meetings | GET-only feature endpoints and read-only screens | Optional prepared-data tour; no invented create/edit steps |
| Alerts | SlaAlertAutomationService and project alert endpoints | Background evaluation exists; external channel records may still be simulated |

The historical video guides and old runsheets were not treated as authoritative where they disagreed with current code. The kit explicitly avoids their outdated all-in-one receipt role and two-finance-role assumptions.
