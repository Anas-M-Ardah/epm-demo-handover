# EPM demonstration walkthrough

A documentation-only kit for your manager to build and demonstrate a complete EPM business cycle through the application. It contains **instructions, exact synthetic input data and actual upload files**. It contains no app source, database dump, seed endpoint, passwords or deployment setup.

**Prepared reference data date: 2026-10-01.** English instructions retain the exact Arabic screen/role names. Arabic project/BOQ data is ready to copy. Upload evidence PDFs use clear English descriptions of the same scenario.

## Start
1. Download/extract the repository ZIP.
2. Open **[index.html](index.html)** in Chrome or Edge. It is a complete HTML/CSS/JavaScript handbook and works offline.
3. Begin with **Start here**, then follow the chapter sequence. Use the upload library to view/download supporting files.
4. Fill the **Session notebook** in the website, then export it. Entries and completion marks stay in your browser; they are not shared automatically.
5. Follow chapters in numerical order. [Full walkthrough in one copyable document](FULL-WALKTHROUGH.md).

## Chapters
1. [Start here](docs/00-start-here.md)
2. [Roles and workspace creation](docs/01-roles-and-workspaces.md)
3. [Create the two projects and their contracts](docs/02-projects-and-contracts.md)
4. [Import and approve bills of quantities](docs/03-boq-and-imports.md)
5. [Schedules baseline current plan and quantity links](docs/04-schedules-and-linking.md)
6. [Record and approve construction progress](docs/05-progress-and-evidence.md)
7. [Distribute supply and complete receipt handoffs](docs/06-supply-distribution-and-receipts.md)
8. [Finance and payment approval](docs/07-finance-and-payment-approval.md)
9. [SLA notifications and resolution](docs/08-sla-notifications-and-resolution.md)
10. [Close progress periods and carry work forward](docs/09-close-and-reopen-progress-periods.md)
11. [Change orders and construction versus supply](docs/10-change-orders-and-supply-differences.md)
12. [Documents revisions and viewing uploaded files](docs/11-documents-revisions-and-file-viewing.md)
13. [Optional risks meetings and accountable actions](docs/12-risks-meetings-and-actions.md)
14. [Dashboard explanation and final presentation](docs/13-dashboard-and-final-presentation.md)
15. [Optional portfolio expansion and repeat runs](docs/14-optional-portfolio-and-repeat-runs.md)

## Files and checks
- [Upload register](UPLOAD-REGISTER.md): exact file, destination and expected use.
- [Construction BOQ inputs](data/construction-boq.md) and [supply inputs](data/supply-boq.md).
- [Acceptance checklist](checklists/acceptance.md) and [troubleshooting](TROUBLESHOOTING.md).
- [Validation status](validation/README.md): what was checked and what still needs a rehearsal in your deployed instance.

Begin with the two principal projects. The optional portfolio extension comes after the full cycle, not before it. Construction uses IQD; the supply contract uses USD. Project budgets and allocations remain IQD. This material is synthetic and is not procurement advice or an approved engineering design.

## Standalone documentation website

This folder is its own Git repository. The website uses local assets, including Cairo with its font license. It needs no application server, API, account, build step or internet connection to read. Extract the entire ZIP before opening `index.html`; keep its folders together. Any static host can serve the same root folder.

Features: full-text search, sequential chapters, copyable input cells, PDF viewing/downloads, print-friendly guides, a local session notebook, and saved completion/acceptance checklists. Changing browser or clearing browser storage will not retain session notes; export them after each run. Markdown files remain the editable source and fallback.

## Published guide

Open the handbook at https://anas-m-ardah.github.io/epm-demo-handover/ . GitHub Pages serves the root of the `main` branch. Push changes to `main` after regenerating `assets/content.js` and checking the pack. The `.nojekyll` file keeps the static assets unchanged.
