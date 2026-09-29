# 03 FORMULA + DERIVATION LEDGER (scan wave, 2026-09-22)

Every formula in the corpus, its source, whether a derivation is examinable ([PROVE] in census), and the derived corollaries (the "more derived stuff"). Traps per row.

## TRANSFORMER

F1 Faraday's law: e = -N dPhi/dt [NP-385]
   derived: Lenz sign convention (negative = opposition to change)

F2 EMF equation: E_rms = 4.44 f N Phi_m [A1-02, DK1 s11-12, NP-386] [PROVE]
   derivation chain: Phi = Phi_m sin wt -> e = -N dPhi/dt = -w N Phi_m cos wt -> peak = 2 pi f N Phi_m -> rms = peak/sqrt(2) = sqrt(2) pi f N Phi_m = 4.44 f N Phi_m
   corollaries:
     F2a E1 = 4.44 f N1 Phi_m ; E2 = 4.44 f N2 Phi_m
     F2b E = 4.44 f N B_m A (Phi_m = B_m A) [NP-386]
     F2c emf per turn = E/N = 4.44 f Phi_m [NP-391]
     F2d Phi_m = E/(4.44 f N) ; B_m = Phi_m / A
   trap: 4.44 = sqrt(2) pi, form factor context; E1 and E2 both LAG flux by 90 degrees

F3 transformation ratio: k = E2/E1 = V2/V1 = N2/N1 = I1/I2 (ideal) [NP-386]
   note convention: a = N1/N2 primary-to-secondary (NP-387), k = N2/N1 (NP-386). SAME MACHINE, TWO CONVENTIONS. state which is used.

F4 ideal transformer power balance: V1 I1 = V2 I2 [NP-385]
   derived: I1/I2 = N2/N1

F4a mmf balance and terminal equations [DK1 s21-22/24]
   N1 I'2 = N2 I2 -> I'2 = K I2 (referred secondary-current component, antiphase with I2)
   I1 = I'2 + I0 (phasor sum)
   V1 = -E1 + I1(R1 + jX1) = -E1 + I1 Z1
   V2 = E2 - I2(R2 + jX2) = E2 - I2 Z2
   this pair is the answer skeleton for A1-04 (equivalent circuit + components)

F5 impedance transfer: Z1/Z2 = (N1/N2)^2 [NP-386, DK1 s23] [PROVE-adjacent]
   derivation: Z1/Z2 = (V1/I1)/(V2/I2) = (V1/V2)(I2/I1) = (N1/N2)^2
   corollaries: R2' = a^2 R2, X2' = a^2 X2 (to primary); R1' = R1/a^2 (to secondary) [NP-387/388]
   combined: Req1 = R1 + a^2 R2 ; Xeq1 = X1 + a^2 X2 ; Req2 = R2 + R1/a^2 ; Xeq2 = X2 + X1/a^2
   trap: which side the "prime" moves toward; a^2 multiplies when going low->high turns side

F6 no-load components (OC test) [DK1 s19-20, NP-393/395] [PROVE in A1-10]
   cos theta0 = W0/(V0 I0) ; sin theta0 = sqrt(1 - cos^2 theta0)
   Iw = I0 cos theta0 ; Im = I0 sin theta0
   R0 = V0/Iw ; X0 = V0/Im
   corollary: W0 approx = core loss Pi (copper loss at I0 is negligible)

F7 short-circuit test [DK1 s38-39, NP-394/396] [PROVE in A1-09]
   Zeq = Vsc/Isc ; Req = Wsc/Isc^2 ; Xeq = sqrt(Zeq^2 - Req^2)
   deck notation: Z01 = Vsc/I1 ; R01 = Pc/I1^2 ; X01 = sqrt(Z01^2 - R01^2)
   cos phi_sc = Psc/(Vsc I1) [DK1 s39]
   corollary: Wsc approx = full-load copper loss (core loss negligible at low flux)
   trap: values sit on the TEST side; refer by a^2 if asked the other side (NP-396 errata)
   trap: deck problem D1-05 SC current 12 A vs rated 10 A for a 5 kVA 250/500 unit (errata E14)

F8 approximate voltage drop [DK1 s29-30, NP-394/397] [PROVE in A1-06/08]
   E2 - V2 approx = I2 Req cos phi2 +/- I2 Xeq sin phi2
   sign: + lagging, - leading
   derivation: phasor projection of I2 Req (in phase with I2) and I2 Xeq (90 degrees) onto V2 axis

F9 voltage regulation [DK1 s31, NP-394/397]
   %VR = (V20 - V2)/V2 x 100   [NP-394 convention]
   %VR = (E2 - V2)/E2 x 100    [NP-397 convention]
   %VR = (0V2 - V2)/0V2 x 100  [DECK DK1 s31 convention: denominator = NO-LOAD voltage]
   trap: THREE conventions on the denominator. the exam follows the deck: divide by no-load voltage 0V2 = K V1. state the convention either way.

F10 %VR in percentage drops [NP-400]
   %VR = (%R drop) cos phi +/- (%X drop) sin phi
   corollary: zero regulation at leading pf when tan phi = Req/Xeq -> phi = atan(Req/Xeq) [NP-397]

F11 copper loss and iron loss expressions [DK1 s32-33, NP-402]
   Pcu = I^2 R = I1^2 R1 + I2^2 R2 = I1^2 R01 = I2^2 R02
   hysteresis loss: P_h = k_h f B_m^1.6  [DK1 s32]
   eddy-current loss: P_e = k_e f^2 B_m^2 t^2  (t = lamination thickness) [DK1 s32]
   total: P_loss = Pi + Pcu ; Pi = P_h + P_e = constant at fixed V, f
   corollary: at load fraction x, Pcu = x^2 Pcu,FL

F12 efficiency [DK1 s34, NP-401] [PROVE in A1-07]
   eta = output/(output + Pi + Pcu) = V2 I2 cos phi2 / (V2 I2 cos phi2 + Pi + Pcu)
   note: iron loss Pi constant at fixed V and f; copper loss load-dependent [DK1 s33, NP-397]

F13 maximum efficiency [DK1 s35-36, NP-401] [PROVE in A1-07/11]
   condition: Pcu = Pi
   derivation: set d eta / d I2 = 0 -> I2^2 Req2 = Pi
   corollaries:
     I2 at max eff = sqrt(Pi/Req2)
     x = sqrt(Pi/Pcu,FL) (load fraction for max eff)
     S_max_eff = S_rated x [NP-401, deck s36]
     eta_max = (S x cos phi)/(S x cos phi + 2 Pi) x 100
   trap: at max eff the two loss terms are equal, so total loss = 2 Pi (that is where 2 Pi comes from)

F14 parallel operation derivation [DK1 s41-44] [PROVE in A1-13/14]
   KCL: IL = IA + IB ; KVL: VL = V1/a1 - IA ZA = V1/a2 - IB ZB
   solved (deck equations):
     IA = ZB IL/(ZA+ZB) + V1(a2-a1)/(a1 a2 (ZA+ZB))
     IB = ZA IL/(ZA+ZB) - V1(a2-a1)/(a1 a2 (ZA+ZB))   [minus sign = errata E13, deck prints +]
   kVA sharing: SA = ZB/(ZA+ZB) SL ; SB = ZA/(ZA+ZB) SL ; SA/SB = ZB/ZA
   corollaries:
     circulating current eliminated when a1 = a2 (second term dies)
     IA : IB inverse to ZA : ZB
     proportional load sharing needs impedance INVERSE to rating (Z per-unit equal)
   trap: "same percentage impedance" phrasing = per-unit impedance equal

F15 three-phase relations [NP-405, DK3]
   star: VL = sqrt(3) Vph, IL = Iph
   delta: VL = Vph, IL = sqrt(3) Iph
   connection table (line ratio and phase shift):
     D-D: V2L/V1L = a, shift 0
     D-Y: V2L/V1L = sqrt(3) a, shift 30 degrees (step up side is the wye... ratio = sqrt(3) x turns ratio) [DK3 s6]
     Y-D: V2L/V1L = a/sqrt(3), shift 30 degrees [DK3 s7]
     Y-Y: V2L/V1L = a, shift 0 [DK3 s8]
   corollary: open delta delivers 57.7% (= 1/sqrt(3)) of D-D bank rating [DK3 s9]
   trap: step-up/step-down depends on turns ratio too, not only the connection name (NP-405 errata note)

## DC MACHINES

F16 DC machine EMF equation [A2-G03, DK2 s8-11, NP-406/407] [PROVE]
   Eg = Phi Z P N/(60 A)  (volts, Phi per pole in Wb, N in rpm)
   derivation chain: flux cut per conductor per pole revolution = Phi; poles pass per second = P N/60; average emf per conductor = Phi P N/60; total = x Z; divide into A parallel paths... (full line-by-line derivation in DK2 s8-11 images)
   machine constant: Eg = K Phi w with K = ZP/(2 pi A) [DK2 s38]
   corollaries: N = Eg 60 A/(Phi Z P); Phi = Eg 60 A/(Z P N)
   winding rule: lap A = P; wave A = 2 [NP-406/407]
   m-plex forms [DK2 s39]: a = mP lap, a = 2m wave (m = plex); Z = 2 C N_c
   rpm form [DK2 s38]: E_A = K' Phi n, K' = ZP/(60 a)
   (deck s8-11 give the full flux-cut derivation chain; those panels are vector images, transcribed in ppts-to-md)
   trap: Z = slots x conductors per slot (NP-406); brush drop separate term

F17 voltage equations [NP-409]
   motor: Eb = V - Ia Ra - Vbrush ; generator: Eg = V + Ia Ra + Vbrush (brush convention varies)
   series versions add Rse: Eb = V - Ia (Ra + Rse) [NP-410/417]
   current rules: shunt motor IL = Ia + If; shunt generator Ia = IL + If; series IL = Ia = If [NP-407/409/410]

F18 torque equation [A2-M01/M16, DK2 s39, NP-416] [PROVE]
   P_dev = Eb Ia = T w -> T = Eb Ia / w, w = 2 pi N/60
   T = (Phi Z P/(2 pi A)) Ia = K_t Phi Ia
   corollary: T proportional Phi Ia (universal DC machine law)
   trap: w in rad/s uses N/60 (n in rev/s in NP-416 notation)

F19 speed equation [NP-411/413]
   N = Eb 60 A/(Phi Z P) -> N proportional Eb/Phi
   corollary: at constant flux, Eb1/Eb2 = N1/N2 (the speed-ratio trick) [NP-414]
   cases with brush drop: Eb = V - Ia Ra - Vbrush (NP-413 errata)

F20 shunt motor characteristics [NP-409]
   T proportional Ia (linear, constant flux)
   N proportional (V - Ia Ra)/Phi (slight droop from Ia Ra)
F21 series motor characteristics [NP-410]
   before saturation Phi proportional Ia -> T proportional Ia^2; after saturation T approximately proportional Ia
   N proportional Eb/Ia (rectangular hyperbola)
   corollary: no-load -> tiny Ia -> tiny Phi -> runaway speed (why never run unloaded) [A2-M25]
F22 build-up conditions (self-excited shunt) [NP-406, DK2 s19]
   1 residual magnetism present; 2 field connection reinforces residual flux; 3 speed above critical speed for that Rf; 4 Rf below critical field resistance
   graph: operating point = intersection of OCC and field resistance line (Rf = VT/If straight line) [DK2 s21]
   critical resistance = slope of OCC linear portion [NP-406]
F23 magnetization scaling [DK2 s17]
   Ea = K Phi w -> for fixed flux map at speed n1: Ea at n2 = Ea(n1) x n2/n1
F24 loss taxonomy DC [DK2 s40-41]
   copper: Ia^2 Ra (armature, largest), field losses; brush drop; core: hysteresis (proportional B^2 approx) + eddy (varies as n^1.5 for rotor per deck); mechanical: friction + windage; stray: 1% of full load by convention
F25 power flow [DK2 s42]
   generator: Pmech,in - (mech + core) = Pdev = Eg Ia ; Pout = Vt IL = Pdev - Ia losses
   motor: Pin = Vt IL ; Pdev = Eb Ia = Pin - copper ; Pshaft = Pdev - (mech + core)
   corollary (NP-418): shaft = 0.97 Pdev when 3% torque lost to friction (same speed)
F26 compound generator equivalent field [DK2 s25-27]
   equivalent shunt field current Ieq = If + (Ns/Nf) Ise (turns ratio weighting)
   graphical: shift horizontally along field current axis by Ieq [DK2 s27]
   armature-reaction mmf forms [DK2 s17/22/25/27, HEDGE Lec 16-22]:
   F_net = N_F I_F - F_AR ; I_F* = I_F - F_AR/N_F ; F_SE = N_SE I_A ;
   compound: F_net = F_SH + F_SE - F_AR ; I_F* = I_F + (N_SE/N_SH) I_A - F_AR/N_SH ;
   I_eq = (N_SE/N_F) I_A - F_AR/N_F ; I_F* = I_F - I_eq
   DC loss forms [DK2 s40]: P_A = I_A^2 R_A ; P_F = I_F^2 R_F ; brush P_BD = V_BD I_A
   (deck reads P_ED = V_ED: symbol variance, use P_BD/V_BD)
   power identity [DK2 s42]: tau_ind * omega_m = E_A * I_A = P_conv
F27 winding data [A2-M20/21]
   lap: A = P, more parallel paths, high current, low voltage
   wave: A = 2, high voltage, low current
   Z = 2 x turns for simplex (NP-418)
F28 Fleming rules [NP-419]
   right hand: generator (induced emf); left hand: motor (force)

## PARKED TAIL (recorded, not studied) 
F29 induction motor [NP-419..421]: Ns = 120 f/P; slip s = (Ns-Nr)/Ns; f2 = s f; Nr = (1-s) Ns
F30 commutation [DK2 s28-36]: reactance voltage L di/dt; interpoles in series with armature; compensating windings in pole faces [PARKED]

## MASTER DERIVATION LIST (if the paper says "derive", these 11)
1 transformer EMF equation (F2)
2 voltage regulation expression at lag/lead/unity (F8, F9)
3 approximate VR expression (F8)
4 SC test equivalent impedance parameters (F7)
5 OC test core loss + no-load parameters (F6)
6 efficiency expression (F12)
7 max-efficiency condition + expression (F13)
8 proper load sharing condition (F14)
9 DC generator EMF equation (F16)
10 back EMF expression (F17, F19)
11 torque equation (F18)
