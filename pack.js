let bundle = [];

function packt(modul){
  bundle.push(modul);
  const sum = bundle.reduce((s,m)=>s+(m.auto||243),0);
  const scsi = bundle.map(m=>m.scsi).sort((a,b)=>a-b);
  const contiguous = scsi.every((v,i)=> i===0 || v===scsi[i-1]+1 || v>scsi[i-1]);
  const hasRoot = bundle.some(m=>m.quali.includes("ROOT"));
  const valid = hasRoot && bundle.length>=3 && contiguous;
  return {bundle, sum, scsi, hasRoot, valid, count: bundle.length};
}

function unpackt(){
  const out = [...bundle];
  bundle = [];
  return out;
}

// Tender Abfahrt
function tenderAbfahrt(ort){
  const p = packt({}); // aktuelles bundle
  if(!p.valid) return "TENDER STOP — kein ROOT oder Lücke in SCSI 0-24";
  return `TENDER → ${ort} · ${p.count} Module · Σ ${p.sum} · SCSI ${p.scsi.join("→")} · ${p.hasRoot ? "ROOT OK" : "NO ROOT"}`;
}
