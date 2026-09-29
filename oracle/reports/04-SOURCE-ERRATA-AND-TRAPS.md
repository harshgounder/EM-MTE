# 04 SOURCE ERRATA + TRAPS (scan wave, 2026-09-22)

Errors found in the course's own materials during conversion (already flagged at claim site in the notes conversions). Do NOT memorize the wrong value. Also: the exam may expect the class value, so know both.

## ERRATA in the handwritten notes (conversion-time checks)
E1 NP-406/407: DC generator problem, 1800 rpm stated, source answer 810 V. Correct from the stated data: 972 V (0.06 x 540 x 4 x 1800/(60 x 4)). 810 V would need 1500 rpm. Follow-on 324 kW vs correct 388.8 kW.
E2 NP-391: core area problem, source says 0.03 m^2. Direct substitution gives 0.0250 m^2 (250 cm^2).
E3 NP-391/392: E2 = 400 x 1080/380. Source says 1200 V. Correct: 1136.84 V approx 1137 V. Source also has an inconsistent intermediate Bm (0.026 T vs 0.0860 T from the written data).
E4 NP-396: SC-test parameters labeled "low-voltage side" in the source. Test was on HV side, so 1.872 ohm and 4 ohm are HV-referred. LV values need division by a^2 = 400.
E5 NP-400: %VR answer written in "volts". The drops are percentages; correct unit is percent (3.8%, -2.2%).
E6 NP-407: shunt generator flux, source 9.8e-3 Wb. From the stated data: 6.15e-3 Wb.
E7 NP-413: motor speed with 1V per brush stated. Source 678 rpm omits the brush drop (Eb=488). With brush drop: Eb = 486, N = 675 rpm.
E8 NP-419: Ns example, source 1800 rpm for 50 Hz 4-pole. Correct 1500 rpm (1800 rpm is the 60 Hz value).
E9 NP-421: rotor field speed relative to rotor structure written as 1000 rpm. Relative to rotor it is slip speed 40 rpm; 1000 rpm is relative to the stator.
E10 NP-405: "delta-star is used to step up" stated flatly. Step direction depends on turns ratio as well as connection.
E11 NP-406: build-up conditions labeled "separately excited". They are for a self-excited shunt generator.
E12 NP-415: R_TH fragment with a negative factor and no circuit context. Unresolved orphan.
E13 DK1 s42: parallel-operation IB equation printed with a PLUS sign on the circulating term. KCL (IL = IA + IB) fails unless IB carries the MINUS sign. Correct: IB = ZA IL/(ZA+ZB) - V1(a2-a1)/(a1a2(ZA+ZB)).
E14 DK1 s46 problem 5: 5 kVA 250/500 V unit has rated HV current 10 A, but the SC-test row states 12 A. Either scale copper loss by (10/12)^2 or the 12 A entry is a typo. Flag the assumption in the answer.
E15 DK1 s10: core/shell comparison says core type preferred for LOW voltage and shell type for HIGH voltage. Standard design references state the opposite tendency (core type eases HV insulation; shell type suits LV high current). Exam likely expects the deck row: reproduce the deck, note the convention.
E16 DK1 s18: source calls the non-linking flux "mutual flux". Label reversed: non-linking = leakage flux; mutual flux links both windings.
E17 DK1 s40: "same phase sequence" listed among parallel conditions for a single-phase pair. Phase sequence is a three-phase condition only.

## CONVENTION TRAPS (two-sided, know both)
C1 VR denominator: (V20-V2)/V2 vs (E2-V2)/E2 vs deck (0V2-V2)/0V2. Deck divides by no-load voltage: follow the deck in the exam, state the convention.
C2 turns ratio direction: a = N1/N2 (notes) vs k = N2/N1 (other sources).
C3 brush drop: per brush vs total (1V/brush means 2V total with one + and one - brush).
C4 current convention flips between motor (IL = Ia + If) and generator (Ia = IL + If).
C5 max-efficiency efficiency value depends on power factor; the LOAD kVA at max eff does not.
C6 rounding: square BEFORE rounding current (NP-389 note: 910.38 W exact vs 909.80 W rounded).
C7 "same percentage impedance" in parallel conditions = equal per-unit impedance.
C8 Z definition: slots x conductors per slot; turns vs conductors (Z = 2 x turns).

## WHY-QUESTIONS: the answer skeleton (mark-safe pattern)
claim -> mechanism -> equation line -> consequence. Example (series motor no-load):
claim: never run unloaded. mechanism: Ia tiny -> Phi tiny (series field carries Ia). equation: N proportional Eb/Phi with Phi proportional Ia -> N proportional Eb/Ia -> hyperbola. consequence: speed runs away, mechanical failure.
