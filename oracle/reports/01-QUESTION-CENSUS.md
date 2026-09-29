# 01 QUESTION CENSUS (scan wave, 2026-09-22)

Every question found in the corpus, deduped, shaped, and demand-tagged.
Scope law: EM-mte-syllabus.md union handout Lec 1-15. PARKED items tagged [PARKED].

Demand tags: [PROVE] derivation/proof expected | [WORKING] explain operation/construction | [NUM] numerical solve | [DIAG] must draw | [WHY] reasoning question.

Total in-scope items: 92 (65 assignment + 7 deck examples + 20 worked notes problems + deck/notes revision prompts counted inside blocks below).
Parked items: 20 (armature reaction, commutation, starters, speed control + induction tail).

## A. TRANSFORMER, single phase (T block)

### A1 Assignment 1 (20 questions, ELC2104_Assignment1)
| id | question (compressed) | shape | demand |
|----|----------------------|-------|--------|
| A1-01 | construction + working principle, neat diagram | CONSTRUCTION | [WORKING][DIAG] |
| A1-02 | derive EMF equation, significance of each parameter | DERIVE-EMF | [PROVE] |
| A1-03 | ideal vs practical transformer + assumptions | CONCEPT-COMPARE | [WORKING] |
| A1-04 | equivalent circuit + identify components | CIRCUIT | [WORKING][DIAG] |
| A1-05 | methods to determine equivalent-circuit parameters | TEST-METHOD | [WORKING] |
| A1-06 | voltage regulation, derive expression at different pf | DERIVE-REG | [PROVE] |
| A1-07 | derive efficiency expression + max-efficiency condition | DERIVE-EFF | [PROVE] |
| A1-08 | derive approximate VR expression for lagging and leading | DERIVE-REG-APPROX | [PROVE] |
| A1-09 | SC test, neat circuit, derive equivalent impedance params | TEST-DERIVE | [PROVE][DIAG] |
| A1-10 | OC test, show how core loss and no-load params found | TEST-DERIVE | [PROVE][DIAG] |
| A1-11 | max-efficiency condition + expression; also 3ph construction + advantages | DERIVE-EFF + 3PH | [PROVE][WORKING] |
| A1-12 | conditions for parallel operation, explain each | CONDITIONS | [WORKING] |
| A1-13 | circulating current: causes, effects, remedies | REASONING | [WHY][WORKING] |
| A1-14 | load sharing in parallel, derive condition for proper sharing | DERIVE-SHARE | [PROVE] |
| A1-15 | 3ph connections: Y-Y, D-D, Y-D, D-Y with diagrams | CONNECTIONS | [WORKING][DIAG] |
| A1-16 | why transformer does not work on DC | WHY | [WHY] |
| A1-17 | why small current with secondary open (magnetizing component) | WHY | [WHY] |
| A1-18 | why core laminated | WHY | [WHY] |
| A1-19 | why rated in kVA not kW | WHY | [WHY] |
| A1-20 | losses + methods to reduce each | THEORY | [WORKING] |

### DECK 1ph worked examples (slides 45-46) [NUM]
| id | problem | shape |
|----|---------|-------|
| D1-01 | 10 kVA 2000/400 V, R1/X1/R2/X2 given, find secondary voltage at full load 0.8 lag + regulation | NUM-REG |
| D1-02 | regulation from %drops (ohmic 1%, reactance 5%) at 0.8 lag, unity, 0.8 lead | NUM-REG-PCT |
| D1-03 | 50 kVA 11kV/400 V, Pi=500W Pcu=600W, efficiency at unity FL + load for max eff + losses there | NUM-EFF |
| D1-04 | 200/50 V 10 kVA, core loss 100 W, Pcu,FL 200 W, max efficiency at 0.8 lag + load | NUM-EFF |
| D1-05 | 5 kVA 250/500 V OC+SC data, find constants + efficiency + regulation at 0.9 lag | NUM-TEST |
| D1-06 | 100 kVA 11kV/220 V OC+SC data, parameters referred to LV | NUM-TEST |
| D1-07 | two transformers Z=(0.5+j3), (0.6+j10), share 100 kW at 0.8 lag | NUM-SHARE |

### NOTES worked problems (transformer) [NUM], all numbers recomputed in conversions
| id | problem | shape | errata? |
|----|---------|-------|---------|
| N-01 | 30 kVA 2000/200 V: R2', X2', Req, Xeq, Zeq referred to primary + copper loss | NUM-REFER | |
| N-02 | 50 kVA 4400/220 V: params both sides + FL copper loss (two ways) | NUM-REFER | rounding note |
| N-03 | 200 kVA 6600/400 V, N2=80: currents, N1, flux max | NUM-EMF | |
| N-04 | 10 kVA 2200/220 V, emf/turn 10: turns + core area at Bm=1.8 T | NUM-EMF | ERRATA (area) |
| N-05 | 380/1080 turns, A=550 cm2: Bm + E2 | NUM-EMF | ERRATA (E2) |
| N-06 | 50 kVA 2400/120 V OC+SC data: params referred to LV | NUM-TEST | ERRATA (side labels) |
| N-07 | 40 kVA 6600/250 V, R1/R2/Xeq: VR at 0.8 lag | NUM-REG | |
| N-08 | VR from 1% ohmic + 5% reactance drops at 0.8 lag/lead | NUM-REG-PCT | ERRATA (units) |
| N-09 | 500 kVA 6000/400 V: efficiency FL + half load at 0.8 | NUM-EFF | |
| N-10 | 25 kVA, Pi=350 W Pcu=400 W: FL efficiency + max eff + load | NUM-EFF | pf note |

## G. THREE PHASE (G block)
| id | question | demand |
|----|----------|--------|
| A1-11b | 3ph transformer construction + working | [WORKING] |
| A1-15 | connections Y-Y, D-D, Y-D, D-Y with diagrams | [DIAG] |
| A1-11c | 1ph vs 3ph comparison + advantages | [WORKING] |
| NP-205 | revision: types of 3ph connections | [WORKING] |
| NP-205b | revision: bank of 3 1ph units vs one 3ph unit | [WORKING] |
| DK3-01 | open delta: why 57.7% of original bank | [WHY][NUM] |

## D. DC MACHINES (D block)

### A2 Assignment 2, DC Motor section (30 questions)
| id | question (compressed) | shape | demand |
|----|----------------------|-------|--------|
| A2-M01 | working principle of DC motor + derive torque expression | DERIVE-TORQUE | [PROVE] |
| A2-M02 | construction: yoke, poles, field winding, armature, commutator, brushes | CONSTRUCTION | [WORKING][DIAG] |
| A2-M03 | types of DC motors, classification + diagrams | CLASSIFY | [WORKING][DIAG] |
| A2-M04 | compare shunt/series/compound: construction, characteristics, starting torque, speed regulation, applications | COMPARE | [WORKING] |
| A2-M05 | armature reaction phenomenon + effects | THEORY | [PARKED][WORKING] |
| A2-M06 | effects: flux distortion + flux weakening with diagrams | THEORY | [PARKED][DIAG] |
| A2-M07 | methods to reduce armature reaction | THEORY | [PARKED] |
| A2-M08 | commutation process + causes of poor commutation | THEORY | [PARKED] |
| A2-M09 | improving commutation: interpoles + compensating windings | THEORY | [PARKED] |
| A2-M10 | shunt motor characteristics: T-Ia and N-Ia curves | CHARACTERISTICS | [DIAG] |
| A2-M11 | series motor characteristics + why high starting torque | CHARACTERISTICS | [DIAG][WHY] |
| A2-M12 | why starter needed + 3-point starter working | THEORY | [PARKED][DIAG] |
| A2-M13 | speed control methods: armature voltage, field, armature resistance | THEORY | [PARKED] |
| A2-M14 | compare speed control shunt vs series | COMPARE | [PARKED] |
| A2-M15 | back EMF: derive expression + why important | DERIVE-EB | [PROVE] |
| A2-M16 | derive torque equation + relation to armature current | DERIVE-TORQUE | [PROVE] |
| A2-M17 | power flow diagram + power losses | DIAGRAM | [DIAG][WORKING] |
| A2-M18 | losses + methods to improve efficiency | THEORY | [WORKING] |
| A2-M19 | role of commutator and brushes | THEORY | [WORKING] |
| A2-M20 | armature winding construction + lap vs wave | WINDING | [WORKING][DIAG] |
| A2-M21 | compare lap vs wave: parallel paths, applications, ratings | COMPARE | [WORKING] |
| A2-M22 | interpoles + compensating windings in performance | THEORY | [PARKED] |
| A2-M23 | torque-speed characteristics of shunt motor, graph | CHARACTERISTICS | [DIAG] |
| A2-M24 | torque-speed characteristics of series motor + applications | CHARACTERISTICS | [DIAG] |
| A2-M25 | why series motor never run without load | WHY | [WHY] |
| A2-M26 | why back EMF increases with speed + role in current control | WHY | [WHY] |
| A2-M27 | why series motor has high starting torque (torque equation) | WHY | [WHY] |
| A2-M28 | why series motor never started without load (physical reason) | WHY | [WHY] |
| A2-M29 | why shunt motor speed nearly constant with load | WHY | [WHY] |
| A2-M30 | why field weakening raises shunt motor speed | WHY | [WHY] |

### A2 Assignment 2, DC Generator section (15 questions)
| id | question (compressed) | shape | demand |
|----|----------------------|-------|--------|
| A2-G01 | working principle, neat diagram | WORKING | [WORKING][DIAG] |
| A2-G02 | construction + function of major components | CONSTRUCTION | [WORKING] |
| A2-G03 | EMF equation derivation step by step | DERIVE-EMF | [PROVE] |
| A2-G04 | types of DC generators + compare characteristics | CLASSIFY | [WORKING] |
| A2-G05 | voltage build-up in self-excited shunt generator | THEORY | [WORKING] |
| A2-G06 | factors required for build-up | THEORY | [WORKING] |
| A2-G07 | OCC of DC generator, draw + explain | CHARACTERISTICS | [DIAG] |
| A2-G08 | why generated emf rises with speed | WHY | [WHY] |
| A2-G09 | why residual magnetism needed for build-up | WHY | [WHY] |
| A2-G10 | why shunt generator may fail to build up | WHY | [WHY] |
| A2-G11 | why armature reaction reduces generated emf | WHY | [WHY][PARKED-edge] |
| A2-G12 | shunt generator fails to build up at rated speed: causes, logical | REASONING | [WHY] |
| A2-G13 | why shunt field many turns thin wire vs series few turns thick | WHY | [WHY] |
| A2-G14 | why commutator needed for DC output | WHY | [WHY] |
| A2-G15 | why OCC nearly linear then nonlinear | WHY | [WHY][DIAG] |

### NOTES worked problems (DC) [NUM]
| id | problem | shape | errata? |
|----|---------|-------|---------|
| N-11 | 4-pole 1800 rpm lap, 90 slots x 6 cond, Phi=0.06: Eg + electrical power | NUM-EMF | ERRATA (810 vs 972 V) |
| N-12 | 8-pole wave shunt gen 800 rpm, 12.5 ohm load at 250 V: Ia, Eg, flux | NUM-GEN | ERRATA (flux value) |
| N-13 | 20 kW 200 V shunt gen: power developed at rated output | NUM-GEN | |
| N-14 | 250 V shunt motor 30 A, Ra=0.1, Rf=200: back EMF | NUM-MOTOR | |
| N-15 | 4-pole 500 V shunt motor, 720 wave, Ia=60, Phi=0.03, brush 1V/brush: FL speed | NUM-MOTOR | ERRATA (678 vs 675) |
| N-16 | 250 V shunt motor 1000 rpm no-load 8 A, load 50 A: speed | NUM-MOTOR | |
| N-17 | 440 V shunt motor Ia=60 at 750 rpm: armature torque | NUM-TORQUE | |
| N-18 | 25 hp 250 V series motor, speed at Ia=80 vs 100 A | NUM-MOTOR | |
| N-19 | 6-pole lap shunt motor 400 A 350 rpm: developed + shaft power | NUM-TORQUE | ambiguity note |
| N-20 | R_TH fragment (orphan page, no circuit) | FRAGMENT | unresolved |

### Deck DC slides (theory-heavy, 6 image-only slides)
DERIVE-EMF-D01: DC generator EMF equation slides (8-11, images carry the derivation) [PROVE][DIAG]
DERIVE-EB-T01: internal generated voltage + induced torque equations (slides 38-39) [PROVE]
POWERFLOW-D01: power flow + losses diagrams generator + motor (slides 40-42) [DIAG]

## PARKED items still in corpus (not in the locked cut)
A2-M05..M09, M12..M14, M22 (armature reaction, commutation, starters, speed control) plus N-21..N-23 induction-motor problems (notes 419-421). Hedge sheet only.

GAP-AUDIT addendum (09-22): all answer values live in 05-WORKED-EXAMPLES.md (28 worked problems verbatim-verified: 20 transformer-family incl. 7 deck examples, 9 DC, 3 induction parked, 1 orphan R_TH fragment). One dangling problem start found: WE-03 (30 kVA variant, X1=4.4) whose continuation page does not exist in the 36-page corpus.

## Demand tally (in-scope)
[PROVE] derivations expected: 11 (A1-02,06,07,08,09,10,11,14 + A2-M01,M15,M16 + A2-G03)
[NUM] numerical families: 6 shapes (refer, reg, reg-pct, eff, test, gen/motor/torque)
[WHY] reasoning items: 20 (A1-16..20, A2-M25..M30, A2-G08..G15 + DK3-01)
[DIAG] must-draw set: 31 distinct diagrams (see 02-TOPIC-TREE diagram inventory)
[WORKING] explain-type: 34
