# 02 TOPIC TREE (scan wave, 2026-09-22)

Dotted address, leaf-level. Each leaf: cases (variants), methods (what you do), demand, diagram refs (see inventory below), evidence.
Legend: [S] screenshot syllabus, [L#] handout lec row, [A1/A2] assignment, [DK] deck, [NP] notes pics.

## T. SINGLE PHASE TRANSFORMER

T.1 construction and working [S,L3,A1-01,DK1 s3-7,NP-385]
  T.1.1 construction: core (silicon steel, laminated), windings (half of each per limb), insulation [DK1 s8]
  T.1.2 core type vs shell type [DK1 s9-10]
    case a: core type (single circuit, 2 limbs, cylindrical coils, LV)
    case b: shell type (double circuit, 3 limbs, sandwich coils, HV)
    method: comparison table (6 rows in deck)
  T.1.3 principle: mutual induction, alternating flux links both windings [DK1 s5-6]
  T.1.4 step-up vs step-down (turns ratio direction) [NP-385]
  T.1.5 non-working on DC + saturation reason [DK1 s7] -> feeds A1-16 [WHY]
  demand: [WORKING][DIAG] D-01, D-02

T.2 EMF equation [S?,L4-5,A1-02,DK1 s11-12,NP-386]
  T.2.1 sinusoidal flux assumption, Phi = Phi_m sin wt
  T.2.2 derivation e = -N dPhi/dt -> peak 2 pi f N Phi_m -> rms 4.44 f N Phi_m [PROVE]
  T.2.3 form E = 4.44 f N B_m A (Phi_m = B_m A) [NP-386]
  T.2.4 emf per turn = 4.44 f Phi_m (corollary) [NP-391]
  T.2.5 90 degree lag of E1, E2 behind flux [DK1 s12]
  cases: find Phi_m | find N1 | find A at given Bm | find Bm
  demand: [PROVE][NUM] D-03

T.3 transformation ratio and ideal transformer [L4-5,DK1 s13-17,NP-385/386]
  T.3.1 k = E2/E1 = N2/N1
  T.3.2 ideal conditions (4 assumptions) [A1-03,DK1 s13]
  T.3.3 current ratio I1/I2 = N2/N1, power balance V1 I1 = V2 I2
  T.3.4 no-load phasor (Im lags V1 by 90, E1/E2 antiphase with V1) [DK1 s15]
  T.3.5 on-load phasor (I2 lags V2 by phi) [DK1 s16-17]
  T.3.6 impedance transfer Z1/Z2 = (N1/N2)^2 [NP-386,DK1 s23]
  demand: [WORKING][PROVE-adjacent] D-04, D-05

T.4 practical transformer and equivalent circuit [A1-04,DK1 s18-28,NP-387]
  T.4.1 three departures from ideal: iron loss, winding resistance, leakage reactance [DK1 s18]
  T.4.2 no-load current components: Iw (core loss), Im (magnetizing), I0, phi0 [DK1 s19-20,NP-395]
  T.4.3 exact equivalent circuit + referred forms (secondary to primary, primary to secondary) [DK1 s24,26,27]
  T.4.4 simplified equivalent circuit (shunt branch moved to input) [DK1 s25]
  T.4.5 approximate equivalent circuit (I0 neglected, 1-3%) [DK1 s28,NP-387]
  T.4.6 referring rules R2' = a^2 R2 etc. both directions [NP-387/388]
  cases: refer to primary | refer to secondary | both sides compare
  method: multiply/divide by a^2, recombine Req, Xeq
  demand: [WORKING][NUM] D-07, D-08, D-11

T.5 open circuit and short circuit tests [S,A1-05,09,10,DK1 s37-39,NP-393/395/396]
  T.5.1 OC test: rated voltage on LV, secondary open -> Pi, R0, X0 [PROVE: show W0 approx = Pi]
  T.5.2 formulas cos theta0 = W0/(V0 I0), Iw, Im, R0 = V0/Iw, X0 = V0/Im [NP-393]
  T.5.3 SC test: short secondary, raise V till rated current -> Pcu,FL, Req, Xeq [PROVE: Wsc approx = Pcu]
  T.5.4 formulas Z = Vsc/Isc, R = Wsc/Isc^2, X = sqrt(Z^2-R^2) [NP-394]
  T.5.5 which side to conduct each test and why (LV for OC, HV for SC) [NP-393]
  T.5.6 refer params to requested side afterwards [NP-396] (TRAP: side labels)
  cases: find params on test side | refer to LV | refer to HV | then find eff + VR
  demand: [PROVE][NUM][DIAG] D-09, D-10

T.6 voltage regulation [S,L6-7,A1-06,08,DK1 s29-31,NP-394/397/398/400]
  T.6.1 definition: arithmetic difference V20 - V2 as % of V20 or V2 [TRAP: two conventions]
  T.6.2 approximate drop E2 - V2 = I2 Req cos phi2 +/- I2 Xeq sin phi2 [PROVE]
  T.6.3 sign rule: + lagging, - leading [NP-397]
  T.6.4 %VR = (%R drop) cos phi +/- (%X drop) sin phi (per-unit corollary) [NP-400]
  T.6.5 zero regulation at leading pf: tan phi = Req/Xeq (derived) [NP-397]
  cases: given circuit params -> VR | given % drops -> VR | lagging | leading | unity | zero-regulation condition
  demand: [PROVE][NUM] D-12

T.7 efficiency and maximum efficiency [S,L6-7,A1-07,11,DK1 s32-36,NP-397/401/402/403]
  T.7.1 loss taxonomy: core (hysteresis + eddy, function of Bm and f), copper (I^2 R) [DK1 s32-33]
  T.7.2 efficiency formula eta = V2 I2 cos phi2 / (V2 I2 cos phi2 + Pi + Pcu) [PROVE]
  T.7.3 copper loss scaling at load fraction x: x^2 Pcu,FL [NP-402]
  T.7.4 max-efficiency condition Pcu = Pi [PROVE via d eta / dI = 0]
  T.7.5 I2 at max eff = sqrt(Pi/Req2); x = sqrt(Pi/Pcu,FL) [NP-401]
  T.7.6 S at max eff = S_rated x; eta_max = S x cos phi / (S x cos phi + 2 Pi) [NP-401]
  cases: efficiency at FL | half load | arbitrary load | find load for max eff | max eff at given pf | unity vs 0.8
  demand: [PROVE][NUM]

T.8 parallel operation [S,L8-9,A1-12,13,14,DK1 s40-44,NP-404]
  T.8.1 why parallel (economy, continuity, flexible capacity) [DK1 s40,NP-404]
  T.8.2 conditions: same polarity, same voltage ratio, same % impedance, same X/R ratio (3ph adds phase sequence + displacement) [NP-404]
  T.8.3 KVL/KCL derivation of IA, IB (deck s41-42) [PROVE]
  T.8.4 circulating current: cause (unequal ratios), effects (copper loss, overload, reduced kVA), remedies [A1-13,DK1 s42]
  T.8.5 load sharing: currents inverse to impedance; proportional sharing needs Z inverse to rating (deck s43-44) [PROVE: A1-14]
  cases: equal ratios | unequal ratios (circulating current) | load share given Z | find Z for proportional share
  demand: [PROVE][NUM][WHY][DIAG] D-14, D-15

T.9 reasoning pack (transformer) [A1-16..20,DK1 s7/32,NP-394/397]
  T.9.1 why not on DC (mutual induction needs changing current; saturation, huge current) [WHY]
  T.9.2 why small current at no load (magnetizing + core loss component) [WHY]
  T.9.3 why laminated core (eddy currents reduced) [WHY]
  T.9.4 why kVA rating (losses depend on V and I, not pf) [WHY]
  T.9.5 losses and their reduction (silicon steel for hysteresis, lamination for eddy, thicker conductor for copper) [WORKING]
  demand: [WHY][WORKING]

## G. THREE PHASE TRANSFORMER

G.1 construction and principle [A1-11b,DK3 s3-4,L10]
  G.1.1 bank of three 1ph units vs one 3ph unit on 3-legged core
  G.1.2 windings wye or delta on each side independently
G.2 connections [A1-15,DK3 s5-8,NP-405]
  G.2.1 D-D: ratio = a, no phase shift, large currents/low voltage, fault continuity
  G.2.2 D-Y: step up at generation points, line ratio = sqrt(3) a, 30 degree shift
  G.2.3 Y-D: step down, line ratio = a/sqrt(3), 30 degree shift
  G.2.4 Y-Y: small current high voltage, most economical insulation, neutral grounding needed
  cases: identify connection from diagram | compute line ratio | state phase shift | choose connection for an application
  demand: [WORKING][DIAG] D-16
G.3 open delta [DK3 s9]
  G.3.1 one unit removed: bank continues at 57.7% (derived = 1/sqrt(3)) [NUM][WHY]
G.4 comparison 1ph vs 3ph + advantages [A1-11c,NP-405]
  demand: [WORKING]
  diagram refs D-17

## D. DC MACHINES

D.0 fundamentals and classification [L2,DK2 s3,NP-385]
  D.0.1 generator action (emf in moving conductor), motor action (force on current-carrying conductor)
  D.0.2 Fleming right-hand (generator) / left-hand (motor) [NP-419]
  D.0.3 electromechanical energy conversion frame [L2]
  D.0.4 dynamically induced emf vs transformer emf [NP-385]
  demand: [WORKING]

D.1 construction [L13,A2-M02,DK2 s4-7]
  D.1.1 stator: yoke, poles, field windings, commutating poles (interpoles), compensating windings in pole faces [DK2 s4]
  D.1.2 rotor: laminated slotted core, coils pitch ~180 electrical degrees [DK2 s5]
  D.1.3 commutator: insulated copper segments, brushes in neutral zone [DK2 s6-7]
  D.1.4 armature winding: lap vs wave (A = P vs A = 2) [A2-M20/21,NP-406]
  cases: name part and function | lap vs wave table (parallel paths, applications, voltage/current ratings)
  demand: [WORKING][DIAG] D-18, D-31

D.2 types and equivalent circuits [L13,A2-M03/04,04,G04,DK2 s12-13]
  D.2.1 generators: separately excited, shunt, series, compound (cumulative, differential)
  D.2.2 motors: shunt, series, compound
  D.2.3 equivalent circuit parts: armature circuit (Ea, Ra, brush drop), field circuit (Rf, Lf, Radj) [DK2 s13]
  cases: draw circuit per type | comparison table across types
  demand: [WORKING][DIAG] D-19

D.3 EMF equation [S,L14-15,A2-G03,DK2 s8-11,NP-406/407]
  D.3.1 derivation Eg = Phi Z P N / (60 A) [PROVE] (average emf per conductor x conductors / paths)
  D.3.2 machine constant form Eg = K Phi w [DK2 s14/38]
  D.3.3 numerical cases: find Eg | find Phi | find N | find Z (slots x conductors) | lap vs wave A
  demand: [PROVE][NUM]

D.4 voltage equation and torque [S,A2-M01,M15,M16,DK2 s38-39,NP-409/416]
  D.4.1 back emf Eb = V - Ia Ra (- brush drop) motor; Eg = V + Ia Ra generator [NP-409]
  D.4.2 why back emf important (limits armature current) [A2-M26] [WHY]
  D.4.3 torque derivation P = Eb Ia = T w -> T = (Phi Z P / (2 pi A)) Ia [PROVE]
  D.4.4 T proportional to Phi Ia; power and torque constants
  cases: find Eb | find T | find shaft power | include brush drop | ignore brush drop
  demand: [PROVE][NUM]

D.5 generator characteristics and build-up [S,A2-G05..G15,DK2 s14-27,NP-406]
  D.5.1 magnetization curve / OCC: Ea vs If, saturation knee [DK2 s14/17]
  D.5.2 speed effect: Ea proportional to speed; curve rescaling [DK2 s17] [A2-G08]
  D.5.3 separately excited terminal characteristic (straight line droop) [DK2 s15-16]
  D.5.4 shunt generator voltage build-up: residual flux chain, 4 conditions [NP-406] [PROVE-adjacent]
  D.5.5 critical field resistance and critical speed [NP-406,DK2 s19]
  D.5.6 failure causes: no residual flux, reversed rotation/field, Rf above critical [DK2 s19,A2-G10/12]
  D.5.7 shunt terminal characteristic + graphical KVL analysis (Rf line vs OCC) [DK2 s20-21]
  D.5.8 series generator characteristic (rising then drooping) [DK2 s23-24]
  D.5.9 cumulative compound characteristic family (flat, over, under) [DK2 s25-27]
  D.5.10 differential compound [DK2 s12]
  D.5.11 OCC shape reasoning (linear then nonlinear = saturation) [A2-G15] [WHY]
  cases: draw OCC + field line + mark operating point | find critical resistance | diagnose build-up failure | compare characteristic curves of 4 types
  demand: [WORKING][WHY][DIAG][NUM] D-20, D-21, D-22

D.6 motor characteristics [S,A2-M10,M11,M23,M24,NP-409/410]
  D.6.1 shunt motor: T proportional Ia (linear), N nearly constant with slight droop [NP-409]
  D.6.2 series motor: T proportional Ia^2 before saturation then linear; N rectangular hyperbola (N proportional Eb/Ia) [NP-410]
  D.6.3 torque-speed curves both types [A2-M23/24]
  D.6.4 applications: shunt (constant speed, machine tools), series (traction, cranes, starters) [NP-410/411]
  cases: draw T-Ia, N-Ia, T-N per type | explain shape | select motor for application
  demand: [DIAG][WHY][WORKING] D-27

D.7 reasoning pack (DC) [S,A2-M25..M30,G08..G15]
  D.7.1 series motor no-load danger (weak flux, runaway speed) [WHY]
  D.7.2 high starting torque of series motor from T proportional Ia^2 [WHY]
  D.7.3 back emf rises with speed, limits current [WHY]
  D.7.4 shunt speed constancy from N proportional (V - Ia Ra)/Phi [WHY]
  D.7.5 field weakening raises speed [WHY]
  D.7.6 winding thickness reasoning (shunt: many turns thin; series: few turns thick) [WHY]
  D.7.7 commutator function (rectification) [WHY]
  demand: [WHY]

D.8 power flow and losses [A2-M17,M18,DK2 s40-42,NP-419]
  D.8.1 loss taxonomy: copper (armature, field, shunt), brush, core (hysteresis + eddy), mechanical (friction + windage), stray (1% convention) [DK2 s40-41]
  D.8.2 power flow diagram generator: Pmech,in -> minus mech/core -> Eg Ia -> minus Ia^2 Ra etc -> Vt IL [DK2 s42]
  D.8.3 power flow diagram motor: Vt IL -> minus copper -> Eb Ia -> minus mech/core -> shaft [DK2 s42]
  D.8.4 efficiency improvement methods [A2-M18]
     cases: fill missing arrow in power flow | compute each stage | find efficiency

  DIAGRAM INVENTORY ADDENDA (gap audit 09-22, from deck render reads):
  D-29 commutation voltage waveform: E=4e flat with dips toward e at 45/135/225/315 deg [DK2 s31]
  D-30 commutation brush sequence 3-panel: 400A brush, 200A coils, the reversing "?" coil [DK2 s33]
  D-31 armature reaction 5-panel: (a) pole field, (b) armature field, (c) resultant, (d) superposed, (e) old vs new MNA [DK2 s32, NP-408]
  D-32 open-delta bank wiring: transformers P,Q across A-B and B-C, removed R position, phasors E_AB/E_CA/E_BC and E_12/E_31/E_23 [DK3 s9]
  D-33 compensating winding pole-face close-up: compensating flux vs rotor flux, MNA "not shifted with load" [DK2 s36]
  demand: [DIAG][NUM][WORKING] D-28

## HIDDEN LAYER (in materials, off the named plan lines)
H.1 OC/SC test side choice + referring traps (NP-396 errata shows it bites)
H.2 brush contact drop convention (1V per brush vs 2V total) (NP-413 errata)
H.3 VR denominator convention V2 vs V20/E2 (NP-394/397)
H.4 percentage-drop VR shortcut (NP-400)
H.5 rounding discipline (NP-389 rounding note)
H.6 form factor 1.11 in DC EMF derivation if asked rigorously
H.7 open delta 57.7% derivation (DK3 s9)
H.8 R_TH fragment on NP-415 (orphan, unresolved: possible transformer Thevenin exercise)

## DIAGRAM INVENTORY (31 must-draw)
D-01 transformer construction | D-02 core vs shell | D-03 flux + emf phasors | D-04 ideal no-load phasor | D-05 ideal on-load | D-06 practical on-load phasor | D-07 exact equivalent circuit | D-08 simplified + approximate (both sides) | D-09 OC test circuit | D-10 SC test circuit | D-11 shunt branch (Iw, Im) | D-12 regulation phasor/drop diagram | D-13 transformer loss boxes | D-14 parallel circuit | D-15 circulating current diagram | D-16 3ph connections x4 | D-17 open delta | D-18 DC construction | D-19 gen equivalent circuits x4 | D-20 OCC + field resistance line + critical R | D-21 build-up curve | D-22 terminal characteristics x4 | D-23 commutation process [PARKED] | D-24 interpoles + compensating [PARKED] | D-25 armature reaction MNA shift [PARKED] | D-26 motor circuits (shunt, series) | D-27 motor characteristics (T-Ia, N-Ia, T-N) | D-28 power flow x2 | D-29 speed control circuits [PARKED] | D-30 3-point starter [PARKED] | D-31 lap vs wave winding
