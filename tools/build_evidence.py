"""Creates synthetic upload PDFs. Requires reportlab; no network or application access."""
from pathlib import Path
import json, hashlib
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

ROOT=Path(__file__).resolve().parents[1]
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='RecordTitle',fontName='Helvetica-Bold',fontSize=19,leading=25,textColor=colors.HexColor('#183650'),spaceAfter=18))
styles.add(ParagraphStyle(name='RecordBody',fontName='Helvetica',fontSize=11,leading=17,spaceAfter=13))
styles.add(ParagraphStyle(name='Eyebrow',fontName='Helvetica-Bold',fontSize=9,leading=13,textColor=colors.HexColor('#217B86'),spaceAfter=10))
def clean(s): return s.replace('—','-').replace('–','-').replace('’',"'")
def footer(canvas,doc):
 canvas.saveState();canvas.setStrokeColor(colors.HexColor('#D3DFE7'));canvas.line(44,53,551,53)
 canvas.setFont('Helvetica',8);canvas.setFillColor(colors.HexColor('#526674'))
 canvas.drawString(44,39,'SYNTHETIC DEMONSTRATION RECORD | Not an official approval, invoice or certificate')
 canvas.drawRightString(551,25,str(doc.page));canvas.restoreState()
inventory=[]
for path,title,lines in json.loads((ROOT/'data/evidence-content.json').read_text(encoding='utf-8')):
 p=ROOT/'uploads'/path;p.parent.mkdir(parents=True,exist_ok=True)
 story=[Paragraph('EPM / ENGINEERING PROJECT DEMONSTRATION',styles['Eyebrow']),Paragraph(escape(clean(title)),styles['RecordTitle']),HRFlowable(width='100%',thickness=1,color=colors.HexColor('#D3DFE7')),Spacer(1,18)]
 story += [Paragraph(escape(clean(t)),styles['RecordBody']) for t in lines]
 story += [Spacer(1,12),Paragraph('Evidence handling: upload this file to the matching workflow record. Preserve the generated reference and the decision history in EPM.',styles['RecordBody'])]
 SimpleDocTemplate(str(p),pagesize=(595,842),rightMargin=44,leftMargin=44,topMargin=44,bottomMargin=72,title=clean(title),author='EPM Demonstration Kit').build(story,onFirstPage=footer,onLaterPages=footer)
 inventory.append({'file':'uploads/'+path,'title':title,'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(ROOT/'validation/evidence-files.json').write_text(json.dumps(inventory,indent=2))
print(f'Created {len(inventory)} PDF evidence files.')
