// Maintenance utility only; the manager uploads the already generated XLSX files.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {Workbook, SpreadsheetFile} from '@oai/artifact-tool';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(await fs.readFile(path.join(root,'data/scenario.json'),'utf8'));
for(const kind of ['construction','supply']) {
 const wb=Workbook.create();
 const sheet=wb.worksheets.add('BOQ');
 const rows=[['Code','Description','Division','Unit','Qty',`Rate (${data.currencies[kind]})`],...data[kind].map(r=>r.slice(0,6))];
 sheet.getRange(`A1:F${rows.length}`).values=rows;
 sheet.getRange(`A1:F${rows.length}`).format.font.name='Arial';
 sheet.getRange(`A1:F${rows.length}`).format.font.size=11;
 sheet.getRange(`A1:F${rows.length}`).format.rowHeight=34;
 sheet.getRange(`A1:F${rows.length}`).format.verticalAlignment='center';
 sheet.getRange('A1:F1').format.fill='#183650';
 sheet.getRange('A1:F1').format.font.color='#FFFFFF';
 sheet.getRange('A1:F1').format.font.bold=true;
 sheet.getRange('A:A').format.columnWidth=12;
 sheet.getRange('B:B').format.columnWidth=66;
 sheet.getRange('C:C').format.columnWidth=25;
 sheet.getRange('D:D').format.columnWidth=14;
 sheet.getRange('E:F').format.columnWidth=22;
 sheet.getRange(`B2:D${rows.length}`).format.horizontalAlignment='right';
 sheet.getRange(`E2:F${rows.length}`).setNumberFormat('#,##0');
 for(let n=3;n<=rows.length;n+=2)sheet.getRange(`A${n}:F${n}`).format.fill='#F0F5F8';
 const out=path.join(root,'uploads/01-boq');await fs.mkdir(out,{recursive:true});
 await (await SpreadsheetFile.exportXlsx(wb)).save(path.join(out,`${kind}-boq.xlsx`));
 const preview=await wb.render({sheetName:'BOQ',range:`A1:F${Math.min(rows.length,6)}`,scale:1,format:'png'});
 await fs.writeFile(path.join(root,'validation',`${kind}-boq-preview.png`),new Uint8Array(await preview.arrayBuffer()));
 console.log(JSON.stringify({kind,rows:rows.length-1,total:data[kind].reduce((s,r)=>s+r[4]*r[5],0)}));
}
