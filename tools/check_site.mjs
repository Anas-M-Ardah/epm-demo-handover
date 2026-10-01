import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const root=path.resolve(import.meta.dirname,'..');
const base=pathToFileURL(path.join(root,'index.html')).href;
const browser=await chromium.launch({headless:true,channel:'chrome'});
const page=await browser.newPage({viewport:{width:1440,height:1050}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(base);
await page.screenshot({path:path.join(root,'validation/site-desktop.png'),fullPage:true});
await page.getByRole('link',{name:'02 Create the two projects and their contracts',exact:true}).click();
await page.locator('.article').waitFor();
await page.screenshot({path:path.join(root,'validation/site-reader.png'),fullPage:false});
console.log('tables',await page.locator('table').count(),'copy controls',await page.locator('.copy-cell').count());
await page.getByRole('button',{name:'Mark complete',exact:true}).click();
await page.reload();if(await page.getByRole('button',{name:'Completed ✓',exact:true}).count()!==1)throw new Error('Completion not saved');
await page.goto(base+'#files');
if(await page.locator('.file').count()!==26)throw new Error('Files missing');
await page.getByRole('button',{name:'XER',exact:true}).click();if(await page.locator('.file').count()!==3)throw new Error('Filter failure');
await page.locator('#search').fill('S04');if(await page.locator('.results a').count()<1)throw new Error('Search failure');
await page.goto(base+'#notebook');
await page.locator('textarea').first().fill('QA test session');await page.reload();if(await page.locator('textarea').first().inputValue()!=='QA test session')throw new Error('Notes not persisted');
for(const width of [375,768,1024,1440]){await page.setViewportSize({width,height:900});for(const id of ['home','02-projects-and-contracts','files','notebook']){await page.goto(base+'#'+id);if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('Overflow '+width+' '+id)} }
await page.setViewportSize({width:375,height:850});await page.goto(base);await page.screenshot({path:path.join(root,'validation/site-mobile.png'),fullPage:true});
await page.getByRole('button',{name:'Menu',exact:true}).click();if(!await page.locator('#sidebar').isVisible())throw new Error('Menu failure');
await page.goto(base+'#acceptance');
if(await page.locator('.check-item input').count()!==22)throw new Error('Checklist count');
await page.locator('.check-item input').first().check();await page.reload();
if(!await page.locator('.check-item input').first().isChecked())throw new Error('Checklist persistence');
await page.goto(base+'#notebook');
const downloadPromise=page.waitForEvent('download');await page.locator('#export').click();
if((await downloadPromise).suggestedFilename()!=='EPM-session-record.txt')throw new Error('Export failed');
await page.setViewportSize({width:1440,height:1050});
await page.goto(base+'#02-projects-and-contracts');
await page.locator('.copy-cell').first().click();
await page.waitForFunction(()=>document.querySelector('#toast').textContent.startsWith('Copied'));
const content=await page.evaluate(()=>window.EPM);
for(const p of content.pages){await page.goto(base+'#'+p.id);for(const href of await page.locator('main a').evaluateAll(es=>es.map(e=>e.getAttribute('href')))){if(href.startsWith('#')){const id=href.slice(1).split('~')[0];if(!['home','files','notebook',...content.pages.map(x=>x.id)].includes(id))throw new Error('Broken chapter '+href)}else if(!/^(https?:|mailto:)/.test(href)&&!fs.existsSync(path.join(root,decodeURIComponent(href))))throw new Error('Missing target '+href)}}
if(errors.length)throw new Error(errors.join('; '));
console.log(JSON.stringify({errors,status:'Passed offline navigation, persistence, search, filters and responsive overflow checks'}));await browser.close();


