# EM-MTE NOTES PLAN (2026-09-22)

Exam-targeted notes: one file per subtopic, questions embedded inside the notes as worked examples, every graph drawn + label-checked. Zero filler: every line must be something that earns marks or prevents a lost mark.

## Layer sources (all verified)
- reports/01-QUESTION-CENSUS.md: which questions exist + demand tags
- reports/02-TOPIC-TREE.md: cases + methods per leaf + diagram inventory
- reports/03-FORMULA-LAEDER.md: formulas + derivation chains + corollaries
- reports/04-SOURCE-ERRATA-AND-TRAPS.md: 18 source errors + convention traps
- reports/05-WORKED-EXAMPLES.md: 28 worked problems with verified answers
- EM-MTE/ppts-to-md/*.md (3 decks), work/notes-concat.txt: verbatim sources

## File map (25 files, ~/em-mte-oracle/notes/)

### BLOCK T: single phase transformer (mark weight est. 12-14/30)
| # | file | subtopics inside | graphs (drawn + label checklist) | embedded questions |
|---|------|------------------|----------------------------------|--------------------|
| N01 | construction-and-working | core/shell types, yoke, windings, laminations, working principle, transformer EMF origin, losses overview | core-type vs shell-type diagram, working diagram (two coils + flux path) | A1-01, A1-20 stems |
| N02 | emf-equation | Faraday chain, 4.44 f N Phi_m full derivation, emf per turn, flux-area relation, referred currents | sinusoidal flux + induced emf (90 deg lag) waveform | WE-04, WE-05, WE-06 fully solved; A1-02 stem |
| N03 | ideal-vs-practical | assumptions list, no-load phasor, I0 = Iw - jIm, practical-on-load phasor, mmf balance | no-load phasor, loaded phasor, I0 current triangle | A1-03 stem |
| N04 | equivalent-circuits | exact + simplified + approximate, referring rules both directions, the K vs a convention trap | 3 circuit variants, referred-to-both-sides versions | WE-01, WE-02 fully solved; A1-04 stem |
| N05 | oc-sc-tests | OC procedure + formulas, SC procedure + formulas, which-side rule, refer-after trap | OC circuit, SC circuit, shunt-branch Iw/Im diagram | WE-07, D1-05, D1-06 fully solved; A1-05/09/10 stems |
| N06 | voltage-regulation | [PROVE] exact phasor derivation lag/lead/unity, approximate expression, %drop shortcut, zero-regulation angle, denominator convention | regulation phasor (lag + lead), VR vs pf sketch | WE-08, WE-09, D1-01, D1-02 solved; A1-06/08 stems |
| N07 | efficiency | [PROVE] efficiency expression, max-eff derivation (d/dI -> Pcu = Pi), x = sqrt(Pi/Pcu,FL), eta_max expression | efficiency vs load curve with max point, loss-crossing diagram | WE-10, WE-11, D1-03, D1-04 solved; A1-07/11 stems |
| N08 | parallel-operation | conditions list, [PROVE] KCL/KVL load-sharing derivation, circulating current, impedance-ratio rule | parallel circuit, circulating-current loop | D1-07 solved; A1-12/13/14 stems |
| N09 | losses-and-why-pack | loss taxonomy + formulas (hyst/eddy expressions), kVA rating reason, the 5 WHY questions answer-keyed | loss vs load graph (Pi const, Pcu parabola) | A1-16..20 answer lines |

### BLOCK G: three phase transformers (mark weight est. 4-6/30)
| # | file | subtopics | graphs | embedded questions |
|---|------|-----------|--------|--------------------|
| N10 | connections | bank vs 3-leg unit, D-D, D-Y, Y-D, Y-Y: ratio rows + phase shift + use case + neutral caveat | 4 connection diagrams + 2 phasor triangle sets | A1-11/15 stems, notes prompts |
| N11 | open-delta-and-tables | 57.7% derivation (1/sqrt(3)), surviving bank math, master connection table | open-delta 2-transformer wiring + phasors | notes prompt Qs, 57.7% derivation as example |

### BLOCK D: DC machines (mark weight est. 12-14/30)
| # | file | subtopics | graphs | embedded questions |
|---|------|-----------|--------|--------------------|
| N12 | dc-fundamentals-and-construction | generator/motor action, Fleming rules, classification (4 gen + 3 motor types), yoke/poles/windings/commutator/brushes | DC machine cross-section (labeled), rotor photo-style diagram | A2-M02/M19 stems |
| N13 | windings-and-commutator | lap vs wave (A = P vs 2, m-plex forms), coil span 180 elec deg, commutator function | winding diamond (1'2/14'/2'3/43'), commutator segment map | A2-M20/21 stems |
| N14 | emf-equation-dc | [PROVE] Eg = Phi ZPN/(60A) full chain (4 slides worth), K and K' forms, lap/wave special cases | derivation chain diagram (flux cut per rev) | WE-12, WE-13 solved; A2-G03 stem |
| N15 | back-emf-torque-speed | [PROVE] Eb expression, [PROVE] torque equation, speed equation + ratio trick, motor/generator sign conventions | T vs Ia (shunt + series), N vs Ia curves | WE-18 solved; A2-M01/M15/M16 stems |
| N16 | generator-types-and-circuits | separately excited, shunt, series, compound (cum/diff), equations per type | 4 generator equivalent circuits | A2-G01/G02 stems |
| N17 | voltage-buildup-and-occ | residual flux loop, build-up chain, failure diagnosis x3, critical field resistance, critical speed | build-up staircase on OCC, OCC + field resistance line + R_critical | build-up derivation as example; A2-G04/G05/G06 stems |
| N18 | generator-characteristics | terminal characteristic each type + shape reasoning (series rising, compound 3 curves) | 4 terminal characteristics (the draw-question set) | A2-G07/G08 stems |
| N19 | motor-types-and-characteristics | shunt vs series vs compound motor equations, T-Ia/N-Ia/T-N per type, series no-load danger, applications | shunt + series characteristic set (6 curves) | WE-15, WE-16, WE-17, WE-19, WE-20 solved; A2-M02..M04 stems |
| N20 | dc-numerics-and-power-flow | the numeric family recipes (emf, back-emf, torque, speed, developed power), loss formulas, power flow both machines | power-flow diagram generator + motor | all remaining DC WE items cross-referenced; A2 numeric stems |
| N21 | dc-why-pack | the reasoning questions: reversal, speed rise/drop reasons, series no-load, lap/wave choice, starter reason | minimal | A2 WHY stems answer-keyed |

### META (drill + safety layer)
| # | file | content |
|---|------|---------|
| N22 | formula-sheet | one/two-pager: every formula, no prose. the rote artifact |
| N23 | traps-and-errata | 18 source errors + convention wars (VR denominator, K vs a, test sides, brush drop) + "write this, not that" |
| N24 | hedge-sheet | 5-liners: armature reaction (incl. mmf formulas), commutation (E=4e waveform + L di/dt + fixes), starters, speed control. insurance for the Lec 16-22 bleed |
| N25 | graph-drill-sheet | every graph from N01-N21 in blank-box form: title + label checklist + 60-second redraw drill |

## Per-file template (the non-filler contract)
1. EXAM PHRASINGS: the 1-3 question wordings this file answers (from census shapes)
2. CORE: definitions + boxed formulas + full derivation chains (never "it can be shown")
3. GRAPHS: ASCII draw + label checklist (axes, curves, intercepts, arrows, key points). what the examiner wants labeled is part of the content
4. WORKED EXAMPLES: matched WE items solved inline (givens -> first line -> substitution -> answer), with [SRC wrong / FIX] flags where the course material errs
5. PRACTICE STEMS: the matched assignment questions as drill prompts with first-line hints only (leave solving to the drill loop)
6. TRAPS: inline [TRAP]/[ERRATA] lines at the exact spot they bite
7. 60-SECOND QUIZ: 3 questions, answers folded at the bottom
Banned: motivation, syllabus restating, book lists, hedging prose. Hard rule scan (no em dashes, no AI-tell) per file.

## Authoring order + batching (exam is 09-23)
- Batch 1 (T core): N02, N04, N05, N06, N07 (the marks engine: derivation + numeric families)
- Batch 2 (T wrap + G): N01, N03, N08, N09, N10, N11
- Batch 3 (D core): N14, N15, N16, N17, N18
- Batch 4 (D wrap + meta): N12, N13, N19, N20, N21
- Batch 5 (drill layer): N22, N23, N24, N25
QA gate per batch: numbers cross-checked vs 05-WORKED-EXAMPLES, hard-rule scan, graph label check vs 02 diagram inventory.

## PDF pass (after authoring)
pandoc per file (LaTeX math) -> single merged EM-MTE-NOTES.pdf + per-file PDFs. Graphs stay ASCII-in-code-blocks (they print clean in monospace) unless user wants rendered figures later.
