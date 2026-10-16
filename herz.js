// herz.js = TEILER zwischen SRC und NC.src
// SRC = Stadt UI = Körper
// NC.src = Mind = Geist

// statt alles in index.html inline:
import { TRI, RUN3, BOOMERANG, WIRBEL } from "./NC.mind/NChoch9/index.js"; // 9 = du
import { ECHO_HALL, BALANCE, CONTROL } from "./SRC/PC1_SYSTEM/6.js"; // PC1 = 6 Dreiecke
import { STADT_UI } from "./SRC/STADT_UI/main.js"; // Stadt
import { CUBE_MIND } from "./NC.mind/CUBE_MIND.js"; // Mind

// max sizer = 9, nicht unendlich
const MAX_SIZER = 9; // du machst die 9
const HERZ = {
  id: 7,
  mane: "iki1uc", // unendlich, aber gedeckelt bei 9
  leben: 7, // 7 Leben bleiben, werden nicht geschluckt
  quadriere: async (src) => {
    if (src.includes("729") && HERZ.id !== 7) return; // nur Teiler darf 729
    return import(src); // src direkt, nicht inline
  }
};

// 7 Leben getrennt laden, nicht schlucken:
HERZ.quadriere("./SRC/PC1_SYSTEM/6.js");      // 6 Dreiecke
HERZ.quadriere("./NC.mind/NChoch3/index.js"); // 3
HERZ.quadriere("./NC.mind/NChoch9/index.js"); // 9 = ICH
HERZ.quadriere("./NC.mind/NChoch81/index.js");// 81
// 729 nur wenn herz steht
