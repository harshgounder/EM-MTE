# 05 WORKED-EXAMPLES LEDGER (gap audit, 2026-09-22)

Every worked example in the corpus with givens, method skeleton, and answer values as computed. [SRC] = source's own printed answer, [FIX] = corrected value where the source is wrong (detail in 04-SOURCE-ERRATA-AND-TRAPS.md). Values are verbatim from the notes conversion and the deck mds.

## TRANSFORMER (notes, WE-01 to WE-11)

WE-01 [NP-387/388] 30 kVA, 2000/200 V, 1ph, 50 Hz. R1=3.5, X1=4.5, R2=0.015, X2=0.02 (ohm).
Method: a=10 -> refer secondary: R2'=1.5, X2'=2 -> Req=R1+R2'=5, Xeq=4.5+2=6.5, Z=5+j6.5, |Z|=8.20 ohm. Copper loss at FL: I1=30k/2000=15 A, Pcu=15^2*5=1125 W.
Tags: [NUM-refer] [DIAG: exact equivalent circuit referred to primary]

WE-02 [NP-388/389] 50 kVA, 4400/220 V. R1=3.45, X1=5.2, R2=0.009, X2=0.015 (ohm). Four parts: eq R/X both sides, Z both sides, total Pcu at FL.
Method: a=20. Primary side: R2'=3.6, X2'=6, Req1=7.05, Xeq1=11.2, Z1=7.05+j11.2, |Z1|=13.23. Secondary side: R1'=0.008625, X1'=0.013, Req2=0.017625, Xeq2=0.028, Z2=0.017625+j0.028, |Z2|=0.03308. Pcu,FL: I1,FL=11.364 A -> 910.38 W (primary side) == 910.38 W (I2,FL=227.27 A secondary side). [SRC: 909.80 W with rounded I1=11.36 A: rounding artifact, note it]
Tags: [NUM-refer both sides] [TRAP: Pcu identical both sides only with unrounded currents]

WE-03 [NP-389 tail] 30 kVA, 2000/200 V, 50 Hz, R1=3.5 ohm, X1=4.4 ohm. DANGER: the question is STARTED ("the rest continues on the next image") but the next page is a different problem (WE-04). The continuation is MISSING from the 36-page corpus. Do not expect this one in a closed set; the givens variant (X1=4.4 vs WE-01's 4.5) is likely a transcription wobble in the same problem family.

WE-04 [NP-390] 200 kVA, 6600/400 V, 50 Hz, N2=80 turns. Three parts: currents, N1, Phi_m.
Method: V1I1=V2I2=200kVA -> I1=30.30 A, I2=500 A. V1/V2=N1/N2 -> N1=1320 turns. E1=4.44 f N1 Phi_m -> Phi_m=0.02252 Wb. [SRC 0.0225 Wb: correct after rounding]
Tags: [NUM-emf-eq] [PROVE-pair: F2]

WE-05 [NP-391] 10 kVA, 2200/220 V, 50 Hz, emf per turn = 10 V. Two parts: turns, core area at Bm=1.8 T.
Method: N1=2200/10=220, N2=220/10=22. E1=4.44 f N1 Bm Ac -> 2200=4.44*50*220*1.8*Ac -> Ac=0.0250 m^2 (=250 cm^2).
[SRC: 0.03 m^2. WRONG: direct substitution gives 0.0250. Errata E3]

WE-06 [NP-391/392] 380 primary turns, 1080 secondary turns, core area written 550 cm^2 (=0.055 m^2), primary on 400 V 50 Hz. Two parts: Bm, E2.
Method: Bm=400/(4.44*50*380*0.055)=0.0860 T. E2=E1*N2/N1=400*1080/380=1136.84 V approx 1137 V.
[SRC: E2=1200 V. WRONG by its own substitution. Errata E5. Also the source's intermediate 0.026 T does not follow from its written data: flagged E6]

WE-07 [NP-395/396] 50 kVA, 2400/120 V. Test table: OC on LV (396 W, 9.65 A, 120 V); SC on HV (810 W, 20.8 A, 92 V). Find equivalent-circuit parameters referred to LV.
Method: OC: cos0=396/(120*9.65)=0.342, Iw=3.30 A, Im=9.07 A, R0=120/3.30=36.36 ohm, X0=120/9.07=13.23 ohm (LV side). SC first lands on HV: Req,H=810/20.8^2=1.872, Z=92/20.8=4.423, Xeq,H=4.007 ohm. a=2400/120=20, divide by a^2=400: Req,L=0.00468, Xeq,L=0.01002, Z_L=0.00468+j0.01002 ohm.
[SRC: labels 1.872 and 4 ohm as LV values. WRONG side labels. Errata E4. THE canonical test-side trap]

WE-08 [NP-398] 40 kVA, 6600/250 V. R1=10 ohm, R2=0.02 ohm, total Xeq referred to primary = 35 ohm. Find FL voltage regulation at 0.8 lag.
Method: refer to secondary (ratio 250/6600 squared): R1'=0.01435, Req2=0.03435, Xeq2=0.05022. I2,FL=160 A. drop = 160*0.03435*0.8 + 160*0.05022*0.6 = 9.22 V. %VR = 9.22/250*100 = 3.69% (denominator = V2, notes convention).
Tags: [NUM-reg] [TRAP: VR denominator convention, see F9]

WE-09 [NP-400] %drop method. Ohmic drop 1% of rated voltage, reactance drop 5%. Find VR at (1) 0.8 lag, (2) 0.8 lead.
Method: %VR = (%R drop) cos phi +/- (%X drop) sin phi, sin phi = 0.6. (1) 1*0.8 + 5*0.6 = 3.8%. (2) 1*0.8 - 5*0.6 = -2.2% (negative = load voltage RISES).
[SRC: prints "volts" units. WRONG: quantities are percent. Errata E9]

WE-10 [NP-402/403] 500 kVA, 6000/400 V. R1=0.4, R2=0.0015 ohm, iron loss 3.2 kW, pf 0.8. Efficiency at FL and half load.
Method: I1,FL=83.333 A, I2,FL=1250 A. Pcu,FL=83.333^2*0.4+1250^2*0.0015=5121.53 W. FL: out=400 kW -> eta=400000/(400000+3200+5121.53)=97.96%. Half load: Pcu,HL=Pcu,FL/4=1280.38 W, out=200 kW -> eta=97.81%.
[CHECK: the source's second page rounds Pcu,FL to 5119.3 W (gives same 97.8%): internal rounding variance, not an error]

WE-11 [NP-403] 25 kVA, 2000/200 V. Iron loss 350 W, FL copper loss 400 W. (1) FL efficiency at 0.8 lag. (2) Maximum efficiency and the load for it.
Method: (1) out=20 kW, eta=20000/(20000+350+400)=96.39%. (2) Pcu=Pi=350 W -> x=sqrt(350/400)=0.9354 -> load=25*0.9354=23.385 kVA. eta_max at unity pf (source assumption): 23385/(23385+700)=97.09%. [TRAP: at another pf the kVA load is unchanged but the numeric eta changes]

## DECK EXAMPLES (1ph deck slides 45-46, D1-01 to D1-07) [all NUM]

D1-01 10 kVA, 2000/400 V, R1=5.5, X1=12, R2=0.2, X2=0.45 ohm. Approximate secondary voltage at FL 0.8 lag when V1=2000 V. (=approx-regulation family, WE-08 method)
D1-02 Ohmic loss 1% of output, reactance drop 5% of voltage. VR at (a) 0.8 lag, (b) unity, (c) 0.8 lead. (=WE-09 family, add the unity case: 1*1 + 5*0 = 1%)
D1-03 50 kVA, 11 kV/400 V, iron 500 W, copper 600 W at rated. FL efficiency at unity pf; load for max efficiency; iron and copper losses at that load. (=WE-11 family: eta=50000/(50000+1100)=97.85%; x=sqrt(500/600)=0.9129 -> 45.6 kVA; at that load Pcu=500 W=Pi)
D1-04 200/50 V, 10 kVA, core loss 100 W, FL copper loss 200 W. Max efficiency at 0.8 lag and the load. (x=sqrt(100/200)=0.7071 -> 7.07 kVA; eta_max=5657/(5657+200)=96.59%)
D1-05 5 kVA, 250/500 V. OC (LV): 250 V, 1 A, 80 W. SC (HV): 20 V, 12 A, 100 W. Find circuit constants, efficiency and VR at FL 0.9 lag.
[ERRATA E14: rated HV current is 5000/500=10 A but the SC row says 12 A. Two routes: scale Pcu by (10/12)^2 for FL copper loss, or treat 12 A as a typo for 10 A. Flag both in the answer.]
D1-06 100 kVA, 11 kV/220 V, 50 Hz. OC (LV): 220 V, 45 A, 2 kW. SC (HV): 500 V, 9.09 A, 3 kW. Equivalent-circuit parameters referred to LV. (=WE-07 family, a=50)
D1-07 Two 1ph transformers, equal turns, secondary-referred impedances (0.5+j3) and (0.6+j10) ohm, parallel on 100 kW at 0.8 lag. Load sharing. (=F14 family: inverse-impedance sharing, compute IA/IB phasor-wise)

## DC MACHINES (notes, WE-12 to WE-20)

WE-12 [NP-406/407] 4-pole DC machine, 1800 rpm, 90 slots x 6 cond = Z=540, Phi=0.06 Wb/pole, lap (A=P=4), 100 A per conductor. Find Eg and electrical output power.
Method: Eg=Phi*Z*P*N/(60A)=0.06*540*4*1800/(60*4)=972 V. Ia=A*100=400 A. P=Eg*Ia=388.8 kW.
[SRC: 810 V and 324 kW. WRONG. 1500 rpm would give 810; the page says 1800. Errata E1. THE highest-value trap in the DC set]

WE-13 [NP-407] 8-pole shunt generator, wave (A=2), Z=778, 800 rpm, load 12.5 ohm at 250 V, Ra=0.24, Rf=250 ohm. Find Ia, Eg, flux per pole.
Method: IL=250/12.5=20 A, If=250/250=1 A, Ia=21 A. Eg=250+21*0.24=255.04 V. Phi=Eg*60*A/(Z*P*N)=255.04*60*2/(778*8*800)=0.00615 Wb=6.15 mWb.
[SRC: 9.8e-3 Wb. WRONG: does not follow from the stated figures. Errata E11]

WE-14 [NP-408] 20 kW, 200 V shunt generator, Ra=0.05, Rf=200 ohm. Power developed in armature at rated output.
Method: IL=100 A, If=1 A, Ia=101 A, Eg=200+101*0.05=205.05 V, Pdev=Eg*Ia=20.71 kW. (=A2 "developed power" template)

WE-15 [NP-412] 250 V shunt motor, 30 A at FL, Ra=0.1, Rf=200 ohm. Back emf at FL.
Method: If=1.25 A, Ia=28.75 A, Eb=250-28.75*0.1=247.125 V.

WE-16 [NP-413] 4-pole, 500 V shunt motor, wave Z=720, Ia=60 A, Phi=0.03 Wb, Ra=0.2 ohm, brush contact drop 1 V per brush. FL speed.
Method: Eb=500-60*0.2-2=486 V (2 V total brush drop). N=Eb*60*A/(Phi*Z*P)=486*60*2/(0.03*720*4)=675 rpm.
[SRC: 678 rpm using Eb=488 (brush drop omitted despite being stated). Errata E7. If the question intends neglect of contact drop, 678 is fine: state the assumption]

WE-17 [NP-413/414] 250 V shunt motor, 1000 rpm no-load taking 8 A, Ra=0.2, Rf=250 ohm. Speed at load 50 A, constant flux.
Method: If=1 A. No load: Ia0=7 A, Eb0=248.6 V. Load: Ia2=49 A, Eb2=240.2 V. Eb ratio trick: N2=N1*Eb2/Eb0=1000*240.2/248.6=966.2 rpm.
Tags: [NUM-speed] the Eb1/Eb2=N1/N2 trick (F28 corollary) is the marks point

WE-18 [NP-416] 440 V shunt motor, Ra=0.25, 750 rpm, Ia=60 A. Armature torque developed.
Method: Eb=440-60*0.25=425 V, omega=2*pi*750/60=78.54 rad/s, T=Eb*Ia/omega=425*60/78.54=324.7 N m.

WE-19 [NP-417] 25 hp, 250 V series motor, Ra=0.1, Rse=0.05, brush drop 3 V. Speed at 100 A given 600 rpm at 80 A.
Method: Eb1=250-80*0.15-3=235 V, Eb2=250-100*0.15-3=232 V. Pre-saturation Phi proportional Ia: N2=(80/100)*(232/235)*600=473.9 approx 474 rpm.
Tags: [NUM-series] [TRAP: Phi/Ia proportionality is a pre-saturation assumption: state it]

WE-20 [NP-418] 6-pole lap shunt motor, 400 A at 350 rpm, Phi=80 mWb, armature 600 turns (=1200 conductors), 3% of torque lost to friction. Developed power (and shaft power).
Method: Z=2*600=1200, A=P=6. Eb=0.08*1200*6*350/(60*6)=560 V. Pdev=560*400=224 kW. Shaft: 0.97*224=217.28 kW.
[CHECK: "developed power" = 224 kW and needs no friction figure; the 3% line implies the question wants shaft output. Give both, labeled]

WE-21 [NP-415] ORPHAN: R_TH = 6 + (1-1/6)^2 * 4 * (-1/2) = 6 - 25/18 = 83/18 = 4.61 ohm. No circuit, no variables: meaning unverifiable. Parked.

## INDUCTION [PARKED: post-mid] (notes, WE-22 to WE-24)

WE-22 2-pole 3ph induction motor, 400 V 50 Hz, s=4%: Ns=3000 rpm, Nr=2880 rpm, f2=2 Hz.
WE-23 50 Hz motor at 960 rpm FL: Ns=1000 rpm, P=6 poles, s=4%, f2=2 Hz. Reference-frame speeds table: stator field vs stator = 1000, vs rotor = 40; rotor field vs rotor = 40 [SRC says 1000: WRONG, errata E8b], vs stator = 1000; rotor field vs stator field = 0.
WE-24 6-pole, 50 Hz, f2=2 Hz: Ns=1000, s=f2/f=4%, Nr=960 rpm.
Plus theory: Ns=120f/P [SRC: 1800 rpm for 50 Hz 4-pole: WRONG, 1500. Errata E8], slip formulas, standstill Z2 and I2, running f2=sf.

---

Coverage note: this ledger + the 7 deck examples = 28 worked problems total (20 transformer-family including the 7 deck ones, 9 DC, 3 induction parked, 1 orphan). The original scan-wave census counted the notes problems approximately and missed: (1) the dangling WE-03 problem start whose continuation page does not exist in the corpus, (2) the answer-value layer itself. Both fixed here.
