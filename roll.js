// 1d25 Modul, 1d6 Quali, 1d81 Zelle, 1d3 RAM
function wuerfel(n){ return Math.floor(Math.random()*n)+1; }

function rollBundle(){
  const nr = wuerfel(25); // 01-25
  const qualiRoll = wuerfel(9); // 9→6→3
  const quali = qualiRoll>=7 ? "9 ALLE" : qualiRoll>=4 ? "6 QUALI" : "3 ROOT";
  const zelle = wuerfel(81); // HOME 40 Fixpunkt
  const ram = ["CHIP","TURBO","FAST"][wuerfel(3)-1];
  return {nr, quali, zelle, ram, isRoot: zelle===40};
}

// 3er Wurf = WURZEL
function roll3(){
  const a = rollBundle(); // aller
  const b = rollBundle(); // allen  
  const c = rollBundle(); // allem
  // f(f(f(x)))=f(x) check
  const idem = a.nr===b.nr && b.nr===c.nr;
  return {aller:a, allen:b, allem:c, wurzel: idem ? a : null, f3f: idem};
}
