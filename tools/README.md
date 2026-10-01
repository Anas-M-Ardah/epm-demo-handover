# Optional pack maintenance

The manager does not need to run these tools. All required files are already supplied. None of the builders calls EPM, edits a database or loads records.

To re-date the kit, a maintainer with Python 3 and ReportLab can run:

```powershell
python tools/build_demo_pack.py --as-of 2026-10-01
python tools/build_evidence.py
```

Use the actual initial **project data date** in place of the example. These regenerate chapters, XER schedules, scenario inputs and PDF content. The BOQ XLSX values are date-independent and need no rebuild for a date change. Rebuild them with `node tools/build_workbooks.mjs` only when quantities/rates change; that optional tool requires `@oai/artifact-tool` in the maintainer's environment. It is not needed by the demonstrator.

After any change, recheck the upload manifest/checksums, link integrity, PDF readability and the actual EPM schedule parser. Rehearse the deployed version before a formal presentation. Do not distribute a partially regenerated kit.

## Website maintenance

After changing the Markdown sources, run `node tools/build_site.mjs` (requires the `marked` package) to refresh `assets/content.js`. No dependency installation is needed to view the finished site. The website assets are plain HTML, CSS and JavaScript.

Run `node tools/check_site.mjs` with Playwright and installed Chrome for offline browser checks. Run `python tools/check_pack.py` to verify source links, upload hashes and totals. Regenerate the distribution ZIP from the committed repository after validation.
