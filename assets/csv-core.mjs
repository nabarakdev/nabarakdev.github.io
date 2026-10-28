/** CSV Desk: browser-local parsing and transformations. No I/O or storage. */
const DELIMITERS=[',',';','\t'];

export class CsvError extends Error {
  constructor(code,text,index){
    const before=text.slice(0,index),lines=before.split(/\r\n|\r|\n/);
    super(code);this.name='CsvError';this.code=code;this.line=lines.length;this.column=lines.at(-1).length+1;
  }
}

function parseRaw(text,delimiter){
  if(!DELIMITERS.includes(delimiter))throw new TypeError('Unsupported delimiter');
  const rows=[];let row=[],field='',state='start',touched=false,skippedEmptyLines=0;
  const finishField=()=>{row.push(field);field='';state='start'};
  const finishRow=()=>{
    if(touched||row.length||field.length){finishField();rows.push(row)}else skippedEmptyLines++;
    row=[];field='';state='start';touched=false;
  };
  for(let i=0;i<text.length;i++){
    const ch=text[i];
    if(state==='quoted'){
      if(ch==='"')state='closed';else field+=ch;
      continue;
    }
    if(state==='closed'&&ch==='"'){field+='"';state='quoted';continue}
    if(ch===delimiter){finishField();touched=true;continue}
    if(ch==='\r'||ch==='\n'){
      finishRow();if(ch==='\r'&&text[i+1]==='\n')i++;continue;
    }
    if(state==='closed')throw new CsvError('AFTER_QUOTE',text,i);
    if(ch==='"'){
      if(state!=='start')throw new CsvError('UNEXPECTED_QUOTE',text,i);
      state='quoted';touched=true;continue;
    }
    field+=ch;state='unquoted';touched=true;
  }
  if(state==='quoted')throw new CsvError('UNCLOSED_QUOTE',text,text.length);
  if(touched||row.length||field.length){finishField();rows.push(row)}
  return {rows,skippedEmptyLines};
}

function normalizedInput(text){
  if(typeof text!=='string')throw new TypeError('CSV input must be a string');
  return text.charCodeAt(0)===0xfeff?text.slice(1):text;
}

export function detectDelimiter(input){
  const text=normalizedInput(input);let best=',',bestScore=-Infinity;
  for(const delimiter of DELIMITERS){
    let rows;try{rows=parseRaw(text,delimiter).rows.slice(0,30)}catch{continue}
    if(!rows.length)continue;
    const multicolumn=rows.filter(row=>row.length>1);
    if(!multicolumn.length)continue;
    const counts=new Map();for(const row of multicolumn)counts.set(row.length,(counts.get(row.length)||0)+1);
    const [width,count]=[...counts].sort((a,b)=>b[1]-a[1]||b[0]-a[0])[0];
    const score=(count/rows.length)*100+(multicolumn.length/rows.length)*20+Math.min(width,20);
    if(score>bestScore){bestScore=score;best=delimiter}
  }
  return best;
}

export function parseDelimited(input,{delimiter='auto',trim=false,dedupe=false}={}){
  const text=normalizedInput(input);
  const selected=delimiter==='auto'?detectDelimiter(text):delimiter;
  const parsed=parseRaw(text,selected);
  const transformed=parsed.rows.map(row=>row.map(value=>trim?value.trim():value));
  const seen=new Set(),rows=[];let removedDuplicates=0;
  for(const row of transformed){const key=JSON.stringify(row);if(dedupe&&seen.has(key)){removedDuplicates++;continue}seen.add(key);rows.push(row)}
  const columns=rows.reduce((max,row)=>Math.max(max,row.length),0);
  const referenceWidth=rows[0]?.length||0;
  return {rows,delimiter:selected,originalRows:parsed.rows.length,removedDuplicates,skippedEmptyLines:parsed.skippedEmptyLines,columns,raggedRows:rows.filter(row=>row.length!==referenceWidth).length};
}

export function stringifyCsv(rows,{delimiter=','}={}){
  if(!DELIMITERS.includes(delimiter))throw new TypeError('Unsupported delimiter');
  const encode=(value,only)=>{
    const text=String(value??'');
    return text.startsWith('\uFEFF')||text.includes(delimiter)||/["\r\n]/.test(text)||(only&&text==='')?'"'+text.replaceAll('"','""')+'"':text;
  };
  return rows.length?rows.map(row=>row.map(value=>encode(value,row.length===1)).join(delimiter)).join('\r\n')+'\r\n':'';
}
