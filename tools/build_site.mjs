import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
const root=path.resolve(import.meta.dirname,'..');
const files=[...fs.readdirSync(path.join(root,'docs')).filter(x=>x.endsWith('.md')).sort().map(x=>'docs/'+x),'data/construction-boq.md','data/supply-boq.md','checklists/acceptance.md','TROUBLESHOOTING.md','UPLOAD-REGISTER.md','validation/README.md'];
const ids=new Map(files.map(f=>[f,path.basename(f,'.md')==='README'?'validation':path.basename(f,'.md')]));
const pages=files.map(f=>{const raw=fs.readFileSync(path.join(root,f),'utf8');const title=raw.match(/^# (.+)/m)[1];let html=marked.parse(raw.replace(/^# .+\r?\n/,''));html=html.replace(/href="([^"]+)"/g,(whole,target)=>{if(/^(https?:|mailto:|#)/.test(target))return whole;const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(f),target));return `href="${resolved==='checklists/session-record.md'?'#notebook':ids.has(resolved)?'#'+ids.get(resolved):resolved}"`;});return {id:ids.get(f),file:f,title,html,text:raw,chapter:f.startsWith('docs/')};});
const uploads=JSON.parse(fs.readFileSync(path.join(root,'validation/upload-manifest.json'),'utf8'));
const fields=fs.readFileSync(path.join(root,'checklists/session-record.md'),'utf8').split('\n').filter(x=>x.startsWith('|')).slice(2).map(x=>x.split('|').slice(1,-1).map(v=>v.trim()));
fs.writeFileSync(path.join(root,'assets/content.js'),'window.EPM='+JSON.stringify({pages,uploads,fields})+';\n');
console.log(`Built ${pages.length} pages and ${uploads.length} downloads.`);

