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
