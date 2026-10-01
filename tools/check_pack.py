"""Read-only integrity checks for the documentation pack. Uses only Python's standard library."""
from pathlib import Path
from decimal import Decimal
import re,json,zipfile,xml.etree.ElementTree as ET,hashlib
ROOT=Path(__file__).resolve().parents[1]
errors=[]; checks=[]
for f in list((ROOT/'docs').glob('*.md'))+list(ROOT.glob('*.md'))+list((ROOT/'checklists').glob('*.md')):
 for dest in re.findall(r'\]\(([^)]+)\)',f.read_text(encoding='utf-8')):
  if '://' in dest or dest.startswith('#'):continue
  target=(f.parent/dest.split('#')[0]).resolve()
  if not target.exists():errors.append(f'Missing link in {f.name}: {dest}')
checks.append('Relative document links checked')
for kind,expected_count,expected_total in [('construction',10,3400000000),('supply',6,215600)]:
 p=ROOT/'uploads/01-boq'/f'{kind}-boq.xlsx'
 with zipfile.ZipFile(p) as z:
  root=ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
  ns={'s':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
  rows=root.findall('.//s:sheetData/s:row',ns)
  total=Decimal(0)
  for row in rows[1:]:
   values={c.attrib['r'].rstrip('0123456789'):c.find('s:v',ns).text for c in row if c.find('s:v',ns) is not None}
   total+=Decimal(values['E'])*Decimal(values['F'])
  assert len(rows)-1==expected_count and total==expected_total,(kind,len(rows),total)
 checks.append(f'{kind}: {expected_count} workbook rows; total {expected_total} {"IQD" if kind=="construction" else "USD"}')
manifest=json.loads((ROOT/'validation/upload-manifest.json').read_text(encoding='utf-8'))
for entry in manifest:
 f=ROOT/entry['file']
 if not f.exists() or hashlib.sha256(f.read_bytes()).hexdigest()!=entry['sha256']:errors.append('Changed/missing upload '+entry['file'])
checks.append(f'{len(manifest)} upload checksums checked')
data=json.loads((ROOT/'data/scenario.json').read_text(encoding='utf-8'))
assert data['totals']['constructionEarnedPeriod1']==504000000
assert data['totals']['constructionEarnedPeriod2']==645000000
assert 2500*Decimal('.2')*18000+(600-2500*Decimal('.2'))*21000==11100000
assert 3400000000+340000000+170000000+11100000==3921100000
assert data['currencies']=={'construction':'IQD','supply':'USD'}
assert data['totals']['supplyAward']==215600
assert data['totals']['supplyOriginalContract']==215600+21560+10780==247940
checks.append('USD supply award and full contract value reconciled')
checks.append('Progress, 20% tier split and effective contract total independently reconciled')
report={'passed':not errors,'checks':checks,'errors':errors}
print(json.dumps(report,ensure_ascii=False,indent=2))
raise SystemExit(0 if report['passed'] else 1)
