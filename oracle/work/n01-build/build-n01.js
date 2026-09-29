// N01: Single Phase Transformer: Construction, Working, Losses
// Format target: COA-MTE-30-Minute-Rescue-Rote-Pack.pdf (question shape / what to write / key distinction / one-line conclusion / closed-book check)
// Explain-depth: must be able to EXPLAIN in the paper, not just recite.
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.3 x 7.5

// ---- palette: copper + iron (content-informed: transformer = copper windings on steel core)
const COPPER = "8C4A2F";   // primary
const COPPER_BRIGHT = "D9822B"; // accent
const IRON = "262B33";     // dark bg / core steel
const STEEL = "7D868F";    // core gray
const CARD = "F6F4F1";     // subtle card tint
const CARD2 = "EDE7E0";
const TEXT = "2B2B2B";
const MUTED = "6B6B6B";
const WHITE = "FFFFFF";
const RED = "B3382C";

const H = "Cambria";      // serif headers (safe font)
const B = "Calibri";      // body (safe font)
const M = "Courier New";  // formulas (safe mono)

// ---------- helpers (fresh objects every call; pptxgenjs mutates options) ----------
function chip(slide, x, y, w, txt) {
  slide.addShape("roundRect", { x, y, w, h: 0.32, fill: { color: COPPER }, rectRadius: 0.16, line: { type: "none" } });
  slide.addText(txt, { x, y, w, h: 0.32, fontFace: H, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0, charSpacing: 1 });
}
function card(slide, x, y, w, h, tint) {
  slide.addShape("roundRect", { x, y, w, h, fill: { color: tint || CARD }, rectRadius: 0.08, line: { type: "none" }, shadow: { type: "outer", color: "BBBBBB", blur: 3, offset: 1, angle: 90, opacity: 0.35 } });
}
function head(slide, txt, y) {
  slide.addText(txt, { x: 0.5, y: y || 0.35, w: 12.3, h: 0.55, fontFace: H, fontSize: 28, bold: true, color: COPPER, margin: 0 });
}
function body(slide, items, opt) {
  // items: array of {text, opts} runs; opt: box
  slide.addText(items, Object.assign({ fontFace: B, fontSize: 13, color: TEXT, valign: "top", margin: 0.06, paraSpaceAfter: 5 }, opt));
}
function label(slide, x, y, w, txt, size, color, bold) {
  slide.addText(txt, { x, y, w, h: 0.3, fontFace: B, fontSize: size || 10.5, bold: !!bold, color: color || TEXT, align: "center", valign: "middle", margin: 0 });
}
function arrow(slide, x, y, w, h, color, dash) {
  slide.addShape("line", { x, y, w, h, line: { color: color || COPPER_BRIGHT, width: 2, endArrowType: "triangle", dashType: dash ? "dash" : "solid" } });
}
function line(slide, x, y, w, h, color, width, dash) {
  slide.addShape("line", { x, y, w, h, line: { color: color || IRON, width: width || 1.5, dashType: dash ? "dash" : "solid" } });
}
function coil(slide, x, y, w, h, txt, fill) {
  slide.addShape("roundRect", { x, y, w, h, fill: { color: fill || COPPER_BRIGHT }, rectRadius: 0.06, line: { color: COPPER, width: 1 } });
  slide.addText(txt, { x, y, w, h, fontFace: H, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0 });
}
function polyLine(slide, pts, color, width) {
  for (let i = 0; i < pts.length - 1; i++) {
    slide.addShape("line", {
      x: Math.min(pts[i][0], pts[i + 1][0]), y: Math.min(pts[i][1], pts[i + 1][1]),
      w: Math.abs(pts[i + 1][0] - pts[i][0]), h: Math.abs(pts[i + 1][1] - pts[i][1]),
      flipH: (pts[i + 1][0] - pts[i][0]) * (pts[i + 1][1] - pts[i][1]) < 0,
      line: { color: color || COPPER, width: width || 2 },
    });
  }
}
function notes(slide, txt) { slide.addNotes(txt); }

// ============================================================ S1 TITLE (dark)
let s = pres.addSlide();
s.background = { color: IRON };
s.addText("ELC2104  |  ELECTRICAL MACHINES  |  MTE", { x: 0.6, y: 0.45, w: 12, h: 0.35, fontFace: H, fontSize: 14, bold: true, color: COPPER_BRIGHT, margin: 0, charSpacing: 2 });
s.addText("N01: Single Phase Transformer", { x: 0.6, y: 1.1, w: 12, h: 0.9, fontFace: H, fontSize: 44, bold: true, color: WHITE, margin: 0 });
s.addText("Construction, Working Principle, and Losses", { x: 0.6, y: 2.0, w: 12, h: 0.5, fontFace: H, fontSize: 22, color: "D8CFC6", margin: 0 });
s.addText("Built to be EXPLAINED in the paper, not just recited. Every part has a function, every function has a one-line reason, every graph has a label checklist.", { x: 0.6, y: 2.7, w: 11.8, h: 0.6, fontFace: B, fontSize: 14, italic: true, color: "BFB6AC", margin: 0 });
card(s, 0.6, 3.6, 12.1, 1.5, "323945");
s.addText([
  { text: "QUESTION SHAPES THIS FILE ANSWERS\n", options: { bold: true, color: COPPER_BRIGHT, fontSize: 13, breakLine: true } },
  { text: "A1-01: ", options: { bold: true, color: WHITE, fontSize: 13 } },
  { text: "Explain the construction and working of a single phase transformer.\n", options: { color: "E3DCD4", fontSize: 13, breakLine: true } },
  { text: "A1-20: ", options: { bold: true, color: WHITE, fontSize: 13 } },
  { text: "List the losses in a transformer and explain how to reduce them.", options: { color: "E3DCD4", fontSize: 13 } },
], { x: 0.85, y: 3.75, w: 11.6, h: 1.25, fontFace: B, valign: "top", margin: 0 });
s.addText("Honest note: understanding beats rereading. After each slide, close it and say the explanation out loud once.", { x: 0.6, y: 5.5, w: 12, h: 0.4, fontFace: B, fontSize: 12, italic: true, color: "9C948B", margin: 0 });
s.addText("EM-MTE notes set  |  N01 of N25  |  source-verified against LMS decks + handwritten notes", { x: 0.6, y: 6.8, w: 12, h: 0.3, fontFace: B, fontSize: 10, color: "7A736B", margin: 0 });
notes(s, "N01 opener. Tell the student: this file covers construction + working + loss overview. The full EMF derivation is N02, equivalent circuits N04. Sources: 1ph deck slides 1-13/32-33, notes pages 383-385/394/402, A1 Q1/Q20.");

// ============================================================ S2 QUESTION SHAPE + MARK GRAMMAR
s = pres.addSlide();
head(s, "Question shape and the mark grammar");
chip(s, 0.5, 1.0, 2.2, "READ THIS FIRST");
card(s, 0.5, 1.5, 6.1, 2.6);
s.addText([
  { text: "A1-01 (the big one): ", options: { bold: true, color: COPPER, breakLine: true } },
  { text: "Explain the construction and working of a single phase transformer.\n\n", options: { breakLine: true } },
  { text: "A1-20: ", options: { bold: true, color: COPPER, breakLine: true } },
  { text: "What are the losses in a transformer? Explain the methods to reduce them.", options: {} },
], { x: 0.75, y: 1.7, w: 5.6, h: 2.2, fontFace: B, fontSize: 14, color: TEXT, valign: "top", margin: 0 });
card(s, 6.9, 1.5, 5.9, 2.6, CARD2);
s.addText([
  { text: "WHAT TO WRITE (mark components, in order)\n", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true, paraSpaceAfter: 6 } },
  { text: "1. One-line definition (transformer = static machine, mutual induction)", options: { bullet: true, breakLine: true } },
  { text: "2. The construction diagram, fully labeled (diagram marks)", options: { bullet: true, breakLine: true } },
  { text: "3. Each part + its function in one line (2 marks live here)", options: { bullet: true, breakLine: true } },
  { text: "4. Working: the 6-step flux story + Faraday's law named", options: { bullet: true, breakLine: true } },
  { text: "5. One-line conclusion (voltage transforms, frequency does not)", options: { bullet: true } },
], { x: 7.1, y: 1.7, w: 5.5, h: 2.2, fontFace: B, fontSize: 12.5, color: TEXT, valign: "top", margin: 0, paraSpaceAfter: 4 });
card(s, 0.5, 4.35, 12.3, 1.35);
s.addText([
  { text: "KEY DISTINCTION  ", options: { bold: true, color: RED, fontSize: 13 } },
  { text: "A transformer has NO rotating part and NO air gap: it is a static device. So it has no mechanical (friction/windage) losses at all. Its entire loss story is copper + iron. A DC machine problem's 'mechanical losses' never apply here.", options: { fontSize: 13.5 } },
], { x: 0.75, y: 4.55, w: 11.8, h: 0.95, fontFace: B, color: TEXT, valign: "top", margin: 0 });
// small transformer symbol diagram bottom-right
s.addShape("line", { x: 8.9, y: 6.1, w: 0, h: 0.7, line: { color: IRON, width: 2 } });
s.addShape("line", { x: 9.15, y: 6.1, w: 0, h: 0.7, line: { color: IRON, width: 2 } });
s.addShape("line", { x: 9.75, y: 6.1, w: 0, h: 0.7, line: { color: IRON, width: 2 } });
s.addShape("line", { x: 10.0, y: 6.1, w: 0, h: 0.7, line: { color: IRON, width: 2 } });
line(s, 9.4, 6.45, 0.3, 0, STEEL, 2);
arrow(s, 8.35, 6.45, 0.5, 0, COPPER_BRIGHT, false);
arrow(s, 10.1, 6.45, 0.5, 0, COPPER_BRIGHT, false);
label(s, 8.0, 6.05, 1.0, "~ V1", 10, MUTED);
label(s, 10.2, 6.05, 1.0, "V2 ~", 10, MUTED);
label(s, 8.9, 6.85, 1.4, "circuit symbol", 9, MUTED);
s.addText("One-line conclusion to memorize: definition, labeled diagram, part functions, Faraday, conclusion. In that order, every time.", { x: 0.5, y: 6.3, w: 8.0, h: 0.7, fontFace: H, fontSize: 13, italic: true, bold: true, color: COPPER, margin: 0 });
notes(s, "Mark grammar: marks are components. The A1-01 answer shape is the 5-step skeleton on the right. The KEY DISTINCTION card prevents a whole class of wrong-answer losses (students import mechanical losses from the DC machine block).");

// ============================================================ S3 CONSTRUCTION: PARTS + DIAGRAM
s = pres.addSlide();
head(s, "Construction: the parts and their jobs");
chip(s, 0.5, 1.0, 2.9, "ROTE 1  |  CONSTRUCTION");
// ---- DIAGRAM: transformer front view (core-type) ----
const DX = 7.6, DY = 1.55, DW = 5.1, DH = 5.3;
card(s, DX - 0.1, DY - 0.1, DW + 0.2, DH + 0.2, "FFFFFF");
// yoke top and bottom
s.addShape("rect", { x: DX + 0.7, y: DY + 0.3, w: 3.6, h: 0.5, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: DX + 0.7, y: DY + 4.3, w: 3.6, h: 0.5, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
label(s, DX + 2.1, DY + 0.05, 1.2, "yoke", 10, COPPER, true);
label(s, DX + 2.0, DY + 4.85, 1.4, "yoke", 10, COPPER, true);
// two limbs
s.addShape("rect", { x: DX + 0.7, y: DY + 0.8, w: 0.6, h: 3.5, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: DX + 3.7, y: DY + 0.8, w: 0.6, h: 3.5, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
// windings on left limb: LV inner (copper), HV outer (dark copper)
coil(s, DX + 0.15, DY + 1.4, 0.5, 2.3, "HV", COPPER);
coil(s, DX + 0.7, DY + 1.5, 0.35, 2.1, "LV", COPPER_BRIGHT);
coil(s, DX + 3.7, DY + 1.5, 0.35, 2.1, "LV", COPPER_BRIGHT);
coil(s, DX + 4.1, DY + 1.4, 0.5, 2.3, "HV", COPPER);
// insulation hints
line(s, DX + 0.5, DY + 1.2, 0, 2.7, "444444", 1, true);
line(s, DX + 4.55, DY + 1.2, 0, 2.7, "444444", 1, true);
// bushings
s.addShape("roundRect", { x: DX + 0.2, y: DY + 0.05, w: 0.25, h: 0.45, fill: { color: "D9D2C8" }, rectRadius: 0.08, line: { color: MUTED, width: 1 } });
s.addShape("roundRect", { x: DX + 4.5, y: DY + 0.05, w: 0.25, h: 0.45, fill: { color: "D9D2C8" }, rectRadius: 0.08, line: { color: MUTED, width: 1 } });
label(s, DX - 0.1, DY - 0.05, 1.5, "bushing", 9, MUTED);
label(s, DX + 3.6, DY - 0.05, 1.5, "bushing", 9, MUTED);
// limb label + flux arrows
label(s, DX + 2.0, DY + 1.7, 1.1, "limb (core)", 10, IRON, true);
arrow(s, DX + 1.5, DY + 1.05, 2.0, 0, RED, true);
arrow(s, DX + 3.3, DY + 4.15, -2.0, 0, RED, true);
label(s, DX + 1.7, DY + 0.75, 1.8, "mutual flux (dashed)", 9, RED);
label(s, DX + 1.55, DY + 2.1, 1.9, "laminated core\n(CRGO steel sheets)", 9.5, IRON);
s.addText("Front view, core-type. Windings on BOTH limbs. LV winding sits next to the limb, HV outside it.", { x: DX, y: DY + 5.0, w: DW, h: 0.35, fontFace: B, fontSize: 10, italic: true, color: MUTED, align: "center", margin: 0 });
// ---- parts cards (left column) ----
const parts = [
  ["Magnetic core + yoke", "Laminated CRGO (cold-rolled grain-oriented) steel. The limbs carry the windings; the yoke closes the flux path so flux has one low-reluctance loop. Also the mechanical frame."],
  ["Windings (LV + HV)", "Primary and secondary, insulated copper. LV: fewer turns of thick wire. HV: more turns of thin wire. Wound concentrically: LV nearest the limb, HV over it (insulation cost is lowest this way)."],
  ["Insulation", "Enamel on conductors, pressboard/paper between windings and core, transformer oil in the tank. The HV winding sits OUTSIDE because that is where the biggest insulation distance to earth is cheapest."],
  ["Tank, oil, accessories", "Sheet-steel tank with transformer oil: cools and insulates. Conservator takes up oil expansion. Bushings bring terminals out of the tank. Silica-gel breather dries the air. These add up to a large share of total weight."],
];
let py = 1.5;
for (const [t, d] of parts) {
  card(s, 0.5, py, 6.7, 1.18);
  s.addText([
    { text: t + "  ", options: { bold: true, color: COPPER, fontSize: 12.5 } },
    { text: d, options: { fontSize: 11.5 } },
  ], { x: 0.7, y: py + 0.08, w: 6.35, h: 1.0, fontFace: B, color: TEXT, valign: "top", margin: 0 });
  py += 1.3;
}
s.addText("One-line conclusion: core gives the flux path, windings give the voltage, insulation and oil keep them apart and cool.", { x: 0.5, y: 6.75, w: 7.0, h: 0.5, fontFace: H, fontSize: 12, italic: true, bold: true, color: COPPER, margin: 0 });
notes(s, "A1-01 part 1. The drawing is the marks anchor: yoke, limb, LV, HV, insulation, bushings, tank. Sources: 1ph deck slides 4-9 (construction), notes 383-385. CRGO + lamination thickness 0.27-0.35 mm named in the deck.");

// ============================================================ S4 CORE-TYPE vs SHELL-TYPE
s = pres.addSlide();
head(s, "Core type vs shell type");
chip(s, 0.5, 1.0, 3.2, "ROTE 1  |  TWO CONSTRUCTIONS");
// core-type diagram (left)
card(s, 0.5, 1.55, 4.1, 3.3, "FFFFFF");
s.addShape("rect", { x: 1.3, y: 1.85, w: 2.5, h: 0.35, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 1.3, y: 4.0, w: 2.5, h: 0.35, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 1.3, y: 2.2, w: 0.4, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 3.4, y: 2.2, w: 0.4, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
coil(s, 0.8, 2.5, 0.4, 1.2, "HV", COPPER);
coil(s, 3.5, 2.5, 0.4, 1.2, "HV", COPPER);
coil(s, 1.3, 2.55, 0.3, 1.1, "LV", COPPER_BRIGHT);
coil(s, 3.4, 2.55, 0.3, 1.1, "LV", COPPER_BRIGHT);
arrow(s, 1.8, 2.0, 1.5, 0, RED, true);
arrow(s, 3.2, 4.2, -1.5, 0, RED, true);
s.addText("CORE TYPE\nwinding surrounds the core. Windings on BOTH limbs.", { x: 0.6, y: 4.9, w: 3.9, h: 0.5, fontFace: B, fontSize: 11, bold: true, color: TEXT, align: "center", margin: 0 });
// shell-type diagram (middle)
card(s, 4.9, 1.55, 4.1, 3.3, "FFFFFF");
s.addShape("rect", { x: 5.5, y: 1.85, w: 2.9, h: 0.35, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 5.5, y: 4.0, w: 2.9, h: 0.35, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 5.5, y: 2.2, w: 0.35, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 8.05, y: 2.2, w: 0.35, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 6.75, y: 2.2, w: 0.4, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
coil(s, 6.4, 2.5, 0.3, 1.2, "HV", COPPER);
coil(s, 7.2, 2.5, 0.3, 1.2, "HV", COPPER);
coil(s, 6.75, 2.55, 0.3, 1.1, "LV", COPPER_BRIGHT);
arrow(s, 6.0, 2.0, 1.0, 0, RED, true);
arrow(s, 7.6, 4.2, -1.0, 0, RED, true);
label(s, 5.4, 2.0, 0.9, "return path", 8.5, RED);
s.addText("SHELL TYPE\ncore surrounds the winding. Windings only on the CENTER limb; flux splits into two return paths.", { x: 5.0, y: 4.9, w: 3.9, h: 0.6, fontFace: B, fontSize: 11, bold: true, color: TEXT, align: "center", margin: 0 });
// comparison table (right)
card(s, 9.3, 1.55, 3.5, 4.9, CARD2);
s.addText([
  { text: "QUICK COMPARE\n\n", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true } },
  { text: "Flux path\n", options: { bold: true, breakLine: true } },
  { text: "core: one loop through 2 limbs. shell: splits through 2 outer limbs.\n\n", options: { fontSize: 11, breakLine: true } },
  { text: "Windings\n", options: { bold: true, breakLine: true } },
  { text: "core: concentric, on both limbs. shell: sandwich, on center limb only.\n\n", options: { fontSize: 11, breakLine: true } },
  { text: "Insulation\n", options: { bold: true, breakLine: true } },
  { text: "core type: easier HV insulation, more insulation volume. shell: windings shielded by outer limbs.\n\n", options: { fontSize: 11, breakLine: true } },
  { text: "Used for\n", options: { bold: true, breakLine: true } },
  { text: "core type: high voltage, power transformers. shell type: low voltage, high current, small transformers.", options: { fontSize: 11 } },
], { x: 9.5, y: 1.7, w: 3.15, h: 4.6, fontFace: B, color: TEXT, valign: "top", margin: 0 });
s.addText("One-line conclusion: core type = winding around core (HV-friendly). Shell type = core around winding (LV high-current, mechanically protected).", { x: 0.5, y: 5.6, w: 8.5, h: 0.7, fontFace: H, fontSize: 12.5, italic: true, bold: true, color: COPPER, margin: 0 });
s.addText("Draw labels the examiner wants: number of limbs, where the windings sit, and the flux path direction.", { x: 0.5, y: 6.5, w: 8.5, h: 0.4, fontFace: B, fontSize: 11, color: MUTED, margin: 0 });
notes(s, "Deck slide 9 wording verbatim: 'In core type the winding surrounds the core. In shell type the core surrounds the winding.' The single-phase shell-type construction shows (a) the 3-limb core with windings on the middle leg (deck figure b/c). Label checklist for exam drawing: limbs, winding placement, flux path arrows.");

// ============================================================ S5 WINDINGS + INSULATION LADDER
s = pres.addSlide();
head(s, "Windings: why LV is inside and HV is outside");
chip(s, 0.5, 1.0, 3.4, "ROTE 1  |  WINDING DETAIL");
// cross-section diagram
card(s, 0.5, 1.55, 5.2, 4.6, "FFFFFF");
s.addShape("ellipse", { x: 2.25, y: 2.5, w: 1.7, h: 1.7, fill: { color: STEEL }, line: { color: IRON, width: 1.5 } });
label(s, 2.25, 3.1, 1.7, "core limb\n(section)", 10, WHITE, true);
s.addShape("ellipse", { x: 1.85, y: 2.1, w: 2.5, h: 2.5, fill: { type: "none" }, line: { color: COPPER_BRIGHT, width: 6 } });
s.addShape("ellipse", { x: 1.35, y: 1.75, w: 3.5, h: 3.2, fill: { type: "none" }, line: { color: COPPER, width: 6 } });
label(s, 3.95, 2.15, 1.5, "LV winding\n(thick wire,\nfew turns)", 9.5, COPPER_BRIGHT, true);
label(s, 4.35, 1.55, 1.4, "HV winding\n(thin wire,\nmany turns)", 9.5, COPPER, true);
arrow(s, 4.55, 2.5, -0.45, 0.3, "444444", true);
arrow(s, 4.8, 1.95, -0.3, 0.1, "444444", true);
label(s, 1.0, 5.0, 4.2, "insulation between every layer, and to earth", 9, MUTED);
s.addText("Limb cross-section (concentric windings)", { x: 0.6, y: 5.4, w: 5.0, h: 0.35, fontFace: B, fontSize: 10.5, italic: true, color: MUTED, align: "center", margin: 0 });
// right: rows
card(s, 6.0, 1.55, 6.8, 1.35);
s.addText([
  { text: "LV winding: ", options: { bold: true, color: COPPER } },
  { text: "few turns of THICK wire (high current, low voltage). Placed next to the limb.\n" },
  { text: "HV winding: ", options: { bold: true, color: COPPER } },
  { text: "many turns of THIN wire (low current, high voltage). Placed over the LV winding." },
], { x: 6.2, y: 1.68, w: 6.4, h: 1.1, fontFace: B, fontSize: 12.5, color: TEXT, valign: "top", margin: 0 });
card(s, 6.0, 3.1, 6.8, 1.5);
s.addText([
  { text: "WHY this order (the explain-the-reason marks)\n", options: { bold: true, color: RED, fontSize: 12.5, breakLine: true, paraSpaceAfter: 5 } },
  { text: "The core is at earth potential. The LV winding has a small voltage, so it needs only thin insulation to the core. The HV winding is then insulated from the LV, and since HV sits outside, its insulation to the tank/earth has the longest path. Total insulation volume is minimum this way.", options: { fontSize: 12 } },
], { x: 6.2, y: 3.22, w: 6.4, h: 1.3, fontFace: B, color: TEXT, valign: "top", margin: 0 });
card(s, 6.0, 4.8, 3.3, 1.35, CARD2);
s.addText([
  { text: "COIL TYPES\n", options: { bold: true, color: COPPER, fontSize: 12, breakLine: true } },
  { text: "Concentric: cylindrical, LV inside HV (core type). Sandwich: discs of LV and HV stacked alternately (shell type).", options: { fontSize: 11 } },
], { x: 6.2, y: 4.9, w: 2.95, h: 1.15, fontFace: B, color: TEXT, valign: "top", margin: 0 });
card(s, 9.5, 4.8, 3.3, 1.35, CARD2);
s.addText([
  { text: "TURNS LAW (preview of N02)\n", options: { bold: true, color: COPPER, fontSize: 12, breakLine: true } },
  { text: "E1/E2 = N1/N2 = a. Voltage transforms with turns, frequency never changes.", options: { fontSize: 11, fontFace: M } },
], { x: 9.7, y: 4.9, w: 2.95, h: 1.15, fontFace: B, color: TEXT, valign: "top", margin: 0 });
s.addText("One-line conclusion: LV thick-and-few inside, HV thin-and-many outside: minimum insulation, same flux.", { x: 0.5, y: 6.45, w: 12.3, h: 0.5, fontFace: H, fontSize: 12.5, italic: true, bold: true, color: COPPER, margin: 0 });
notes(s, "Deck slides 5-8: concentric/sandwich coil types, LV next to core reasoning, thick/few vs thin/many turns. This slide answers 'explain the winding arrangement' follow-ups in A1-01.");

// ============================================================ S6 WHY EACH PART: EDDY + LAMINATIONS DIAGRAM
s = pres.addSlide();
head(s, "Why laminated? (the eddy-current story)");
chip(s, 0.5, 1.0, 3.3, "ROTE 1  |  THE WHY LAYER");
// solid block diagram
card(s, 0.5, 1.55, 3.6, 3.4, "FFFFFF");
s.addShape("rect", { x: 1.1, y: 2.1, w: 2.4, h: 1.8, fill: { color: STEEL }, line: { color: IRON, width: 1.5 } });
s.addShape("ellipse", { x: 1.6, y: 2.4, w: 1.4, h: 1.2, fill: { type: "none" }, line: { color: RED, width: 2.5, endArrowType: "triangle" } });
s.addText("SOLID core: large eddy-current loops free to circulate", { x: 0.6, y: 4.3, w: 3.4, h: 0.5, fontFace: B, fontSize: 9.5, bold: true, color: RED, align: "center", valign: "top", margin: 0 });
s.addText("big loops = big I2R heating", { x: 0.6, y: 1.62, w: 3.4, h: 0.3, fontFace: B, fontSize: 9.5, italic: true, color: MUTED, align: "center", margin: 0 });
// laminated stack diagram
card(s, 4.3, 1.55, 3.6, 3.4, "FFFFFF");
for (let i = 0; i < 6; i++) {
  s.addShape("rect", { x: 4.9, y: 2.1 + i * 0.3, w: 2.4, h: 0.24, fill: { color: STEEL }, line: { color: IRON, width: 0.75 } });
}
s.addShape("ellipse", { x: 5.35, y: 2.15, w: 0.5, h: 0.2, fill: { type: "none" }, line: { color: RED, width: 1.5, endArrowType: "triangle" } });
s.addShape("ellipse", { x: 6.3, y: 2.75, w: 0.5, h: 0.2, fill: { type: "none" }, line: { color: RED, width: 1.5, endArrowType: "triangle" } });
s.addText("LAMINATED core: loops trapped inside one thin sheet (thickness t)", { x: 4.4, y: 4.3, w: 3.4, h: 0.5, fontFace: B, fontSize: 9.5, bold: true, color: COPPER, align: "center", valign: "top", margin: 0 });
s.addText("insulation between sheets blocks the loops", { x: 4.4, y: 1.62, w: 3.4, h: 0.3, fontFace: B, fontSize: 9.5, italic: true, color: MUTED, align: "center", margin: 0 });
// formula card
card(s, 8.1, 1.55, 4.7, 3.4, CARD2);
s.addText([
  { text: "THE TWO IRON-LOSS FORMULAS\n\n", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true } },
  { text: "P_hysteresis = kh x f x Bm^1.6\n", options: { fontFace: M, fontSize: 13, breakLine: true } },
  { text: "cut it with better steel: CRGO / silicon steel has a narrow B-H loop, so less energy lost per cycle.\n\n", options: { fontSize: 11, breakLine: true } },
  { text: "P_eddy = ke x f2 x Bm2 x t2\n", options: { fontFace: M, fontSize: 13, breakLine: true } },
  { text: "cut it by laminating: t = sheet thickness, and the loss falls with t SQUARED. 0.27-0.35 mm sheets, insulated from each other.", options: { fontSize: 11 } },
], { x: 8.3, y: 1.7, w: 4.35, h: 3.1, fontFace: B, color: TEXT, valign: "top", margin: 0 });
// why-rows bottom
const why = [
  ["Why CRGO steel?", "Narrow hysteresis loop: less energy dissipated per magnetisation cycle."],
  ["Why a yoke?", "Closes the magnetic circuit so the flux has one continuous low-reluctance path; also mechanically braces the limbs."],
  ["Why oil + conservator?", "Oil insulates and cools; the conservator gives the oil room to expand so the tank never over-pressures."],
  ["Why a breather?", "Silica gel dries the air entering as oil volume changes: moisture is insulation's enemy."],
];
let wx = 0.5;
for (const [t, d] of why) {
  card(s, wx, 5.15, 3.0, 1.55);
  s.addText([{ text: t + "\n", options: { bold: true, color: COPPER, fontSize: 11.5, breakLine: true } }, { text: d, options: { fontSize: 10.5 } }],
    { x: wx + 0.15, y: 5.25, w: 2.75, h: 1.35, fontFace: B, color: TEXT, valign: "top", margin: 0 });
  wx += 3.15;
}
notes(s, "This slide IS the answer to A1-18 (why laminated core) and the 'reduce the losses' half of A1-20. The t-squared line is the marks point. Deck slide 32 gives both formulas; notes give the laminations/silicon-steel reduction methods.");

// ============================================================ S7 WORKING PRINCIPLE DIAGRAM
s = pres.addSlide();
head(s, "Working principle: the six-step flux story");
chip(s, 0.5, 1.0, 3.1, "ROTE 2  |  WORKING");
// ---- working diagram ----
card(s, 0.5, 1.55, 7.4, 4.4, "FFFFFF");
// core: one limb column with yokes
s.addShape("rect", { x: 3.3, y: 1.9, w: 2.4, h: 0.4, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 3.3, y: 5.2, w: 2.4, h: 0.4, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 3.3, y: 2.3, w: 0.5, h: 2.9, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
s.addShape("rect", { x: 5.2, y: 2.3, w: 0.5, h: 2.9, fill: { color: STEEL }, line: { color: IRON, width: 1 } });
// primary coil left limb, secondary right limb
coil(s, 2.6, 2.7, 0.55, 2.1, "N1", COPPER_BRIGHT);
coil(s, 5.85, 2.7, 0.55, 2.1, "N2", COPPER);
// source and load
s.addShape("roundRect", { x: 0.7, y: 3.1, w: 1.4, h: 1.3, fill: { color: IRON }, rectRadius: 0.1, line: { type: "none" } });
s.addText("~ AC\nsource\nV1", { x: 0.7, y: 3.1, w: 1.4, h: 1.3, fontFace: B, fontSize: 11, bold: true, color: WHITE, align: "center", valign: "middle", margin: 0 });
s.addShape("roundRect", { x: 6.9, y: 3.1, w: 0.8, h: 1.3, fill: { color: CARD2 }, rectRadius: 0.1, line: { color: IRON, width: 1.5 } });
s.addText("LOAD\nZ", { x: 6.9, y: 3.1, w: 0.8, h: 1.3, fontFace: B, fontSize: 10.5, bold: true, color: TEXT, align: "center", valign: "middle", margin: 0 });
// leads
arrow(s, 2.1, 3.35, 0.45, 0, IRON, false);
arrow(s, 2.1, 4.15, 0.45, 0, IRON, false);
arrow(s, 6.4, 3.35, 0.45, 0, IRON, false);
arrow(s, 6.4, 4.15, 0.45, 0, IRON, false);
// flux path dashed arrows around window
arrow(s, 3.9, 2.05, 1.2, 0, RED, true);
arrow(s, 5.45, 3.2, 0, 1.7, RED, true);
arrow(s, 5.0, 5.35, -1.2, 0, RED, true);
arrow(s, 3.55, 4.9, 0, -1.7, RED, true);
label(s, 3.8, 1.6, 2.0, "mutual flux", 9.5, RED, true);
label(s, 2.2, 2.35, 1.6, "primary\nE1 = 4.44 f N1 Bm A", 8.5, COPPER_BRIGHT, true);
label(s, 5.7, 5.6, 1.8, "secondary\nE2 = 4.44 f N2 Bm A", 8.5, COPPER, true);
s.addText("Working diagram: AC in N1 -> alternating flux in the core -> flux links N2 -> emf induced in N2 by Faraday -> load current.", { x: 0.6, y: 5.95, w: 7.2, h: 0.35, fontFace: B, fontSize: 10, italic: true, color: MUTED, align: "center", margin: 0 });
// steps card
card(s, 8.1, 1.55, 4.7, 3.5, CARD2);
s.addText([
  { text: "THE SEQUENCE TO WRITE\n\n", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true } },
  { text: "1. AC supply to primary N1 -> alternating current i1.", options: { breakLine: true, paraSpaceAfter: 3 } },
  { text: "2. Alternating MMF = N1 x i1 in the core.", options: { breakLine: true, paraSpaceAfter: 3 } },
  { text: "3. Alternating mutual flux Bm set up, confined to the low-reluctance iron path.", options: { breakLine: true, paraSpaceAfter: 3 } },
  { text: "4. The SAME flux links the secondary N2 (mutual induction).", options: { breakLine: true, paraSpaceAfter: 3 } },
  { text: "5. Faraday: emf is induced in N2 because d(flux)/dt is non-zero: E2 = 4.44 f N2 Bm A.", options: { breakLine: true, paraSpaceAfter: 3 } },
  { text: "6. Close the secondary on a load -> current flows -> power delivered at transformed voltage.", options: {} },
], { x: 8.3, y: 1.68, w: 4.35, h: 3.25, fontFace: B, fontSize: 11.5, color: TEXT, valign: "top", margin: 0 });
card(s, 8.1, 5.25, 4.7, 1.35);
s.addText([
  { text: "STEP-UP / STEP-DOWN\n", options: { bold: true, color: RED, fontSize: 12, breakLine: true } },
  { text: "N2 > N1 -> V2 > V1 (step-up). N2 < N1 -> V2 < V1 (step-down). The transformation ratio k = N2/N1 = E2/E1 = I1/I2.", options: { fontSize: 11.5 } },
], { x: 8.3, y: 5.37, w: 4.35, h: 1.1, fontFace: B, color: TEXT, valign: "top", margin: 0 });
s.addText("One-line conclusion: one alternating flux, two circuits. Power crosses by mutual induction at UNCHANGED frequency.", { x: 0.5, y: 6.4, w: 7.4, h: 0.6, fontFace: H, fontSize: 12, italic: true, bold: true, color: COPPER, margin: 0 });
notes(s, "A1-01 part 2 + A1-02 preview. The 6-step story is the written answer skeleton. Full EMF derivation is N02; this slide names Faraday and shows the formula as a preview. Sources: 1ph deck slides 10-12 (Faraday + flux sine + 90 deg emf lag), notes 386-387.");

// ============================================================ S8 WHY NOT DC (AC vs DC graphs)
s = pres.addSlide();
head(s, "Why a transformer needs AC (A1-16 answer)");
chip(s, 0.5, 1.0, 3.2, "ROTE 2  |  THE WHY");
// left graph: AC flux + emf
card(s, 0.5, 1.55, 6.1, 3.6, "FFFFFF");
const gx = 1.1, gy = 3.3, gw = 5.0, gh = 1.5;
line(s, gx, gy, gw, 0, IRON, 1.5);            // x axis
line(s, gx + 0.3, gy - gh, 0, 2 * gh, IRON, 1.5); // y axis
arrow(s, gx + gw, gy, 0.15, 0, IRON, false);
arrow(s, gx + 0.3, gy - gh - 0.15, 0, 0.15, IRON, false);
label(s, gx + 4.2, gy + 0.08, 1.2, "time", 9, MUTED);
label(s, gx - 0.05, gy - gh - 0.35, 1.6, "flux / emf", 9, MUTED);
// sinusoids via segments
const sinPts = (x0, y0, w, amp, phase) => {
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24 * 2 * Math.PI;
    pts.push([x0 + (w * i) / 24, y0 - amp * Math.sin(t + phase)]);
  }
  return pts;
};
polyLine(s, sinPts(gx + 0.3, gy, 4.6, 1.0, 0), RED, 2.25);        // flux
polyLine(s, sinPts(gx + 0.3, gy, 4.6, 1.0, Math.PI / 2), COPPER, 2.25); // emf: -cos => lag 90
label(s, gx + 3.4, gy - 1.25, 1.5, "flux (Bm sin wt)", 9.5, RED, true);
label(s, gx + 0.6, gy + 0.7, 1.8, "induced emf lags 90 deg", 9.5, COPPER, true);
s.addText("AC SUPPLY: flux alternates, d(flux)/dt is never zero for long -> emf is induced in BOTH windings (e = -N d(flux)/dt).", { x: 0.6, y: 4.7, w: 5.9, h: 0.4, fontFace: B, fontSize: 10, italic: true, color: MUTED, align: "center", margin: 0 });
// right graph: DC
card(s, 6.8, 1.55, 6.0, 3.6, "FFFFFF");
const hx = 7.4, hy = 3.3, hw = 4.8;
line(s, hx, hy, hw, 0, IRON, 1.5);
line(s, hx + 0.3, hy - 1.5, 0, 3.0, IRON, 1.5);
arrow(s, hx + hw, hy, 0.15, 0, IRON, false);
arrow(s, hx + 0.3, hy - 1.6, 0, 0.15, IRON, false);
label(s, hx + 4.1, hy + 0.08, 1.2, "time", 9, MUTED);
// flat flux
line(s, hx + 0.3, hy - 1.0, 4.4, 0, RED, 2.25);
label(s, hx + 3.0, hy - 1.25, 1.8, "flux = constant", 9.5, RED, true);
// zero emf on axis
line(s, hx + 0.3, hy, 4.4, 0, COPPER, 3);
label(s, hx + 0.6, hy + 0.15, 1.8, "induced emf = 0", 9.5, COPPER, true);
// current rocket
polyLine(s, [[hx + 0.4, hy + 1.2], [hx + 1.4, hy + 1.05], [hx + 2.2, hy + 0.2], [hx + 2.6, hy - 1.3]], "444444", 2.25);
label(s, hx + 2.2, hy + 1.1, 2.4, "primary current = V/R only -> huge -> winding overheats", 9, "444444", true);
s.addText("DC SUPPLY: constant flux -> d(flux)/dt = 0 -> NO induced back-emf -> the primary is just its winding resistance. DANGER: it burns.", { x: 6.9, y: 4.7, w: 5.8, h: 0.4, fontFace: B, fontSize: 10, italic: true, color: RED, align: "center", margin: 0 });
// answer card
card(s, 0.5, 5.3, 12.3, 1.35, CARD2);
s.addText([
  { text: "A1-16 MODEL ANSWER  ", options: { bold: true, color: RED, fontSize: 12.5 } },
  { text: "A transformer works on mutual induction, which demands a changing flux. With DC, flux is constant, so the induced emf e = -N d(flux)/dt is zero, there is no back-emf to oppose the supply, and the primary winding draws a current limited only by its own resistance (V/R). That current is very large and overheats/destroys the winding. Also the core saturates. Conclusion: transformers are rated and used with AC only.", options: { fontSize: 12 } },
], { x: 0.7, y: 5.45, w: 11.9, h: 1.05, fontFace: B, color: TEXT, valign: "top", margin: 0 });
notes(s, "The left graph labels the 90-degree lag between flux and induced emf (deck slides 11-12). The right graph is the classic DC failure picture. This slide also plants A1-17's seed: at no load the primary draws only the small magnetising + core-loss current.");

// ============================================================ S9 LOSSES TREE + HYSTERESIS LOOP
s = pres.addSlide();
head(s, "Losses in a transformer");
chip(s, 0.5, 1.0, 2.9, "ROTE 3  |  LOSSES");
// loss tree (left)
card(s, 0.5, 1.55, 5.6, 4.85);
s.addText([
  { text: "TOTAL LOSS = copper + iron (+ stray)", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true } },
  { text: "COPPER LOSS (winding, load-dependent)", options: { bold: true, fontSize: 11.5, breakLine: true } },
  { text: "Pcu = I1^2 R1 + I2^2 R2 = I^2 R (varies with the square of load current)", options: { fontFace: M, fontSize: 11, breakLine: true } },
  { text: "IRON / CORE LOSS (constant at fixed V and f)", options: { bold: true, fontSize: 11.5, breakLine: true } },
  { text: "(a) Hysteresis loss: energy spent re-orienting domains every cycle.", options: { fontSize: 10.5, breakLine: true } },
  { text: "    P_h = kh x f x Bm^1.6", options: { fontFace: M, fontSize: 11, breakLine: true } },
  { text: "(b) Eddy-current loss: circulating currents induced IN the core itself.", options: { fontSize: 10.5, breakLine: true } },
  { text: "    P_e = ke x f^2 x Bm^2 x t^2", options: { fontFace: M, fontSize: 11, breakLine: true } },
  { text: "STRAY LOSSES: small leakage-flux losses in tank/frame; conventionally a small % of output.", options: { fontSize: 10.5, breakLine: true } },
], { x: 0.7, y: 1.68, w: 5.2, h: 4.1, fontFace: B, color: TEXT, valign: "top", margin: 0, paraSpaceAfter: 6 });
s.addText("NO mechanical losses: the transformer is a STATIC machine (no rotor, no bearings).", { x: 0.7, y: 5.95, w: 5.2, h: 0.4, fontFace: B, fontSize: 10.5, bold: true, color: RED, valign: "top", margin: 0 });
// hysteresis loop diagram (right)
card(s, 6.3, 1.55, 6.5, 4.3, "FFFFFF");
const bx = 8.4, by = 3.7;
line(s, bx - 1.7, by, 4.6, 0, IRON, 1.5);       // H axis
line(s, bx, by - 1.6, 0, 3.2, IRON, 1.5);       // B axis
arrow(s, bx + 2.9, by, 0.15, 0, IRON, false);
arrow(s, bx, by - 1.7, 0, 0.15, IRON, false);
label(s, bx + 2.6, by + 0.1, 0.8, "H", 11, IRON, true);
label(s, bx + 0.1, by - 1.8, 0.8, "B", 11, IRON, true);
// loop: two arcs approximated by rotated ellipse outline
s.addShape("ellipse", { x: bx - 1.1, y: by - 1.35, w: 2.2, h: 2.7, fill: { type: "none" }, line: { color: RED, width: 2.5 }, rotate: 20 });
label(s, bx - 0.6, by - 1.5, 1.8, "Bm (saturation knee)", 8.5, RED, true);
label(s, bx - 1.5, by + 0.1, 0.7, "Hc", 9, MUTED, true);
label(s, bx + 0.15, by - 0.35, 0.8, "Br", 9, MUTED, true);
label(s, bx + 0.75, by + 0.55, 2.6, "LOOP AREA = energy lost per cycle\n(as heat) = the hysteresis loss", 9.5, RED, true);
s.addText("B-H hysteresis loop. Narrower loop (CRGO/silicon steel) = smaller area = smaller P_h.", { x: 6.4, y: 5.0, w: 6.3, h: 0.4, fontFace: B, fontSize: 10, italic: true, color: MUTED, align: "center", margin: 0 });
s.addText("One-line conclusion: copper follows the load current squared; iron follows voltage and frequency and stays flat. Static machine: no mechanical loss.", { x: 0.5, y: 6.85, w: 12.3, h: 0.45, fontFace: H, fontSize: 12, italic: true, bold: true, color: "5C2E1A", margin: 0 });
notes(s, "A1-20 first half. Formulas from 1ph deck slide 32 + notes 397/402. The hysteresis loop with Bm, Br, Hc labels is the drawn-graph marks. Preview of N09 (losses + kVA full treatment).");

// ============================================================ S10 LOSS VS LOAD + REDUCTION + kVA
s = pres.addSlide();
head(s, "Reducing the losses, and why transformers are rated in kVA");
chip(s, 0.5, 1.0, 3.6, "ROTE 3  |  REDUCE + RATING");
// loss vs load graph
card(s, 0.5, 1.55, 5.4, 3.7, "FFFFFF");
const lx = 1.2, ly = 4.7, lw = 4.2, lh = 2.6;
line(s, lx, ly, lw, 0, IRON, 1.5);
line(s, lx, ly - lh, 0, lh, IRON, 1.5);
arrow(s, lx + lw, ly, 0.15, 0, IRON, false);
arrow(s, lx, ly - lh - 0.15, 0, 0.15, IRON, false);
label(s, lx + 3.4, ly + 0.08, 1.4, "load current I", 9, MUTED);
label(s, lx - 0.15, ly - lh - 0.35, 1.4, "loss (W)", 9, MUTED);
line(s, lx, ly - 1.0, lw - 0.3, 0, COPPER, 2);                        // Pi: constant iron loss
polyLine(s, [[lx, ly], [lx + 1.0, ly - 0.08], [lx + 2.0, ly - 0.35], [lx + 3.0, ly - 0.8], [lx + 3.9, ly - 1.45]], "444444", 2);   // Pcu: I^2 R parabola
polyLine(s, [[lx, ly - 1.0], [lx + 1.0, ly - 1.08], [lx + 2.0, ly - 1.35], [lx + 3.0, ly - 1.8], [lx + 3.9, ly - 2.45]], RED, 2.25); // total
label(s, lx + 2.5, ly - 1.28, 1.9, "Pi = constant (iron)", 9, COPPER, true);
label(s, lx + 2.3, ly - 0.5, 1.9, "Pcu = I^2 R (parabola)", 9, "444444", true);
label(s, lx + 1.9, ly - 2.75, 1.6, "total loss", 9, RED, true);
s.addText("Losses vs load: iron flat, copper quadratic. Efficiency peaks where Pcu = Pi (that is N07).", { x: 0.6, y: 5.3, w: 5.2, h: 0.4, fontFace: B, fontSize: 10, italic: true, color: MUTED, align: "center", margin: 0 });
// reduction methods
card(s, 6.1, 1.55, 6.7, 2.3, CARD2);
s.addText([
  { text: "HOW TO REDUCE (A1-20 marks live here)\n\n", options: { bold: true, color: COPPER, fontSize: 13, breakLine: true } },
  { text: "Hysteresis loss: use CRGO / silicon steel (narrow B-H loop, less energy per cycle).", options: { bullet: true, breakLine: true, paraSpaceAfter: 3 } },
  { text: "Eddy-current loss: laminated core (insulated sheets 0.27-0.35 mm). Loss falls with t^2.", options: { bullet: true, breakLine: true, paraSpaceAfter: 3 } },
  { text: "Copper loss: use thicker conductors (lower R); keep windings short (lower mean turn length).", options: { bullet: true, breakLine: true, paraSpaceAfter: 3 } },
  { text: "Stray: careful winding/flux-path design + magnetic shielding.", options: { bullet: true } },
], { x: 6.3, y: 1.68, w: 6.3, h: 2.05, fontFace: B, fontSize: 11.5, color: TEXT, valign: "top", margin: 0 });
// kVA card
card(s, 6.1, 4.05, 6.7, 2.1);
s.addText([
  { text: "WHY kVA AND NOT kW (A1-19)\n\n", options: { bold: true, color: RED, fontSize: 13, breakLine: true } },
  { text: "Core loss depends mainly on VOLTAGE. Copper loss depends mainly on CURRENT. Neither loss knows the load power factor. But kW = kVA x pf, so if the manufacturer rated in kW, the safe kVA would depend on the customer's pf. Rating in kVA keeps the temperature rise safe for ANY pf the user connects.", options: { fontSize: 12 } },
], { x: 6.3, y: 4.18, w: 6.3, h: 1.85, fontFace: B, color: TEXT, valign: "top", margin: 0 });
s.addText("One-line conclusion: iron fixed by V and f, copper by I squared, so the honest rating is kVA.", { x: 0.5, y: 6.45, w: 12.3, h: 0.5, fontFace: H, fontSize: 12.5, italic: true, bold: true, color: COPPER, margin: 0 });
notes(s, "A1-20 second half + A1-19. The kVA argument is one of the guaranteed reasoning questions (notes page 394 gives the exact argument). Reduction methods verbatim from notes 419 losses page (eddy -> laminations, hysteresis -> silicon steel).");

// ============================================================ S11 A1-01 MODEL ANSWER CARD
s = pres.addSlide();
head(s, "A1-01: the model answer you reproduce");
chip(s, 0.5, 1.0, 3.3, "WORKED  |  FULL ANSWER");
card(s, 0.5, 1.5, 12.3, 5.0, "FFFFFF");
s.addText([
  { text: "Q: Explain the construction and working of a single phase transformer.\n\n", options: { bold: true, color: IRON, fontSize: 14, breakLine: true } },
  { text: "Construction. ", options: { bold: true, color: COPPER, fontSize: 12.5 } },
  { text: "A single phase transformer is a static (non-rotating) electrical machine that transfers AC power from one circuit to another at the same frequency but a different voltage, by mutual induction. Its magnetic circuit is a core built of laminated CRGO (cold-rolled grain-oriented) steel sheets, typically 0.27-0.35 mm thick and insulated from each other; the laminations suppress eddy currents and the grain-oriented steel reduces hysteresis loss. The core has two limbs (core type: winding surrounds the core) or three limbs with the winding on the centre limb (shell type: core surrounds the winding). A yoke joins the limbs so the flux has a closed, low-reluctance path and the assembly is mechanically rigid. Two windings sit concentrically on the limbs: the primary and secondary. The LV winding (few turns of thick wire) is placed next to the core and the HV winding (many turns of thin wire) over it, so the insulation volume is minimum. Windings, core and leads live in a sheet-steel tank filled with transformer oil (insulation + cooling), with a conservator for oil expansion, bushings to bring the terminals out, and a silica-gel breather to keep the air dry.\n\n", options: { fontSize: 11.5, breakLine: true } },
  { text: "Working. ", options: { bold: true, color: COPPER, fontSize: 12.5 } },
  { text: "When an AC supply is given to the primary (N1 turns), an alternating current flows and produces an alternating magnetomotive force N1 x i1. This sets up an alternating mutual flux in the core, which is confined to the low-reluctance iron path and therefore links the secondary (N2 turns) also. Because the flux is alternating, by Faraday's law an emf is induced in each winding, e = -N d(flux)/dt; in rms terms E1 = 4.44 f N1 Bm A and E2 = 4.44 f N2 Bm A (the 4.44 f N Bm A law is derived in N02). With the secondary circuit closed on a load, the induced E2 drives a current and power is delivered to the load. The voltage is transformed in the ratio E1/E2 = N1/N2 = 1/k, while the frequency is unchanged.\n\n", options: { fontSize: 11.5, breakLine: true } },
  { text: "Conclusion. ", options: { bold: true, color: COPPER, fontSize: 12.5 } },
  { text: "One alternating flux, two electrically separate circuits: voltage and current transform by the turns ratio, power (minus losses) crosses unchanged, frequency stays the same.", options: { fontSize: 11.5 } },
], { x: 0.7, y: 1.6, w: 11.9, h: 4.8, fontFace: B, color: TEXT, valign: "top", margin: 0 });
s.addText("Label checklist if you redraw the figure: yoke, limbs, LV winding, HV winding, insulation, tank + oil, conservator, bushings, flux path arrows.", { x: 0.5, y: 6.6, w: 12.3, h: 0.4, fontFace: B, fontSize: 11, italic: true, color: MUTED, margin: 0 });
notes(s, "The full examinable prose. The student should be able to rewrite this from memory after two passes. Every claim here is sourced from the decks/notes; nothing invented.");

// ============================================================ S12 A1-20 ANSWER + MEMORY DUMP + CHECK (dark)
s = pres.addSlide();
s.background = { color: IRON };
s.addText("A1-20 model answer + closed-book check", { x: 0.5, y: 0.35, w: 12.3, h: 0.5, fontFace: H, fontSize: 26, bold: true, color: WHITE, margin: 0 });
card(s, 0.5, 1.0, 6.2, 3.2, "323945");
s.addText([
  { text: "A1-20: List the losses and how to reduce them.\n\n", options: { bold: true, color: COPPER_BRIGHT, fontSize: 12.5, breakLine: true } },
  { text: "A transformer has two main losses. (1) Copper loss, the I^2R heating of both windings, which varies with the square of load current. (2) Iron (core) loss, constant at fixed voltage and frequency, in two parts: hysteresis loss (energy spent reversing domains every cycle, P_h = kh f Bm^1.6) and eddy-current loss (circulating currents induced in the core metal, P_e = ke f^2 Bm^2 t^2). Small stray losses also appear in tank/frame from leakage flux. Reduction: hysteresis by CRGO/silicon steel (narrow B-H loop), eddy by laminating the core (loss falls with t^2), copper by thicker conductors and shorter mean turn, stray by careful design and shielding. Because core loss depends on voltage and copper loss on current, neither follows the power factor, so the transformer is rated in kVA, not kW.", options: { fontSize: 11, color: "E3DCD4" } },
], { x: 0.7, y: 1.12, w: 5.8, h: 2.95, fontFace: B, valign: "top", margin: 0 });
card(s, 6.95, 1.0, 5.85, 3.2, "323945");
s.addText([
  { text: "ONE-PAGE MEMORY DUMP (write cold)", options: { bold: true, color: COPPER_BRIGHT, fontSize: 12.5, breakLine: true } },
  { text: "core: laminated CRGO, gives the flux path", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "yoke: closes flux path + supports", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "LV: thick, few turns, next to limb", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "HV: thin, many turns, outermost", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "core type: winding around core (HV)", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "shell type: core around winding (LV)", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "working: AC -> MMF -> flux -> Faraday -> E2", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "E = 4.44 f N Bm A ; k = N2/N1 = E2/E1 = I1/I2", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "losses: Pcu = I^2R ; Ph = kh f Bm^1.6 ; Pe = ke f^2 Bm^2 t^2", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "static machine -> NO mechanical loss", options: { fontFace: M, fontSize: 10.5, breakLine: true } },
  { text: "rating: kVA (losses track V and I, not pf)", options: { fontFace: M, fontSize: 10.5 } },
], { x: 7.15, y: 1.12, w: 5.5, h: 2.95, fontFace: B, color: "E3DCD4", valign: "top", margin: 0, paraSpaceAfter: 4 });
card(s, 0.5, 4.4, 12.3, 1.55, "323945");
s.addText([
  { text: "CLOSED-BOOK CHECK (cover this slide, answer out loud)", options: { bold: true, color: COPPER_BRIGHT, fontSize: 12.5, breakLine: true } },
  { text: "1. Name every part of a single phase transformer and its function in one line each.    2. Draw and label core type and shell type, and say which suits HV and why.", options: { fontSize: 11.5, color: "E3DCD4", breakLine: true } },
  { text: "3. Give the 6-step working sequence ending at the load current.    4. Why does a transformer fail on DC? Give the full argument.", options: { fontSize: 11.5, color: "E3DCD4", breakLine: true } },
  { text: "5. List all losses, two reduction methods per iron loss, and one sentence on why the rating is kVA.", options: { fontSize: 11.5, color: "E3DCD4" } },
], { x: 0.7, y: 4.55, w: 11.9, h: 1.3, fontFace: B, valign: "top", margin: 0, paraSpaceAfter: 5 });
s.addText([
  { text: "ANSWER STRUCTURE WHEN PANIC HITS  ", options: { bold: true, color: COPPER_BRIGHT, fontSize: 12 } },
  { text: "define -> draw and label the diagram -> state the governing formula or sequence -> substitute/speak through the steps -> finish with a one-line conclusion. Never leave it blank.", options: { fontSize: 12, color: "E3DCD4" } },
], { x: 0.5, y: 6.2, w: 12.3, h: 0.7, fontFace: B, valign: "top", margin: 0 });
notes(s, "Closing slide. The memory dump is the cold-reproduction artifact: student writes it on blank paper and repairs only failed lines. Next files: N02 (EMF equation derivation), N04 (equivalent circuits), N07 (efficiency).");

pres.writeFile({ fileName: "/home/liebert511/em-mte-oracle/notes/N01-single-phase-transformer-construction-working.pptx" })
  .then(() => console.log("WROTE N01 pptx"))
  .catch((e) => { console.error("FAIL", e); process.exit(1); });
