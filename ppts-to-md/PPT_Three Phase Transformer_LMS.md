# PPT_Three Phase Transformer_LMS

Deck conversion, ELC2104 Electrical Machines, 10 slides.
Method: slide XML text (verbatim) + slide-render vision reads (xiaomi/mimo-v2.6-flash, mid reasoning, commandcode) + per-image fragment reads (connection diagrams, phasors). Cross-check passes: 3-perspective number diff, re-read of all slides 1-10 with deck-qualified names after a filename-collision fix (earlier reads of slides 1-10 raced between the two decks; discarded and re-read). Anti-correction rule held: everything below is AS PRINTED.

Scope tags: [G-OK] in lock (3-phase connections, Lec 10), navigation only.

## Slide 1: Three Phase Transformer (title)

On-slide text: "Three Phase Transformer" / "Electrical machines- ELC2104". Header: Manipal University Jaipur logo left, NAAC A+ badge right ("NAAC A+ GRADE WITH 3.28 SCORE"), yellow bar.

Diagram description: none. Title slide.

## Slide 2: Reference books + video links

On-slide text: same book list as the other decks (Say, Langsdorf, Clayton / Bhimbra, Nagrath-Kothari, Fitzgerald-Kingsley-Umans) plus:

Video Links:
1. https://www.youtube.com/watch?v=xvL4rYUM4kA&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=6
2. https://www.youtube.com/watch?v=KAI4yJBASbc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=7
3. https://www.youtube.com/watch?v=VdiocL2RAMc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=8
4. https://www.youtube.com/watch?v=xT89C6CvqX8&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=9
5. https://www.youtube.com/watch?v=K_S1e06FAKc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=10

[Check] "Hill" (wrapping from the Fitzgerald line) overlaps "Video Links:" (rendering defect). These 5 links are the course's own lecture playlist (PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV), potentially high-value for the teaching loop.

## Slide 3: Three-Phase Transformer (why bank or unit) [G-OK]

On-slide text:
In the operation of power systems, transformers are required to change the voltage levels throughout the network
- three-phase circuits use three-phase transformers
  * can be achieved by using a bank of three single-phase transformers
  * may be a 3-phase unit having three primary windings and three secondary windings on a 3-legged core
  * using a bank of three single phase transformers, the windings may be connected in a variety of ways
  * the primary side may be connected in a wye or delta configuration independent of the secondary connection
  * the secondary side may be connected in a wye or delta configuration independent of the primary connection

Diagram description: none. Text slide. The "bank vs 3-phase unit" distinction (A1 Q11's 1ph-vs-3ph comparison) starts here.

## Slide 4: Transformer Bank [G-OK]

On-slide text: identical bullet set to slide 3 (repeated under the title "Transformer Bank").

Diagram description: none. [Check] slides 3 and 4 share the body text; slide 4's title is "Transformer Bank" but carries no bank figure (figure appears on slides 5+).

## Slide 5: Delta-Delta Connection [G-OK] [DIAGRAM-CORE]

On-slide text:
Delta- Delta Connection
- Three single-phase transformers connected in delta-delta
  - This arrangement is generally used in systems which carry large currents on low voltage and especially when continually of service must be maintained even though one of the phase develops faults.
  - the primary-side line voltage is transformed to the secondary-side line voltage
  - There is no phase displacement between the primary and secondary voltages.

Diagram description: three figures.
1. Top right: three single-phase transformers P (top), Q (middle), R (bottom) stacked; primary terminals A, B, C on the left into H1/H2 windings; secondary X1/X2 windings to terminals 1, 2, 3; dashed box "balanced three-phase load" at right.
2. Middle: the actual delta-delta wiring. Left: generator G into a DELTA triangle of primaries ("primary of P", "primary of Q", "primary of R", each H1-H2) with line current annotations sqrt(3)*I_p on the lines and I_p inside the delta (per fragment: "sqrt(3) I_p" on line B with phase current "I_p" through primary of P; fragment also reads "sqrt(3) I_r" in one pass: [Check] symbol variance I_p vs I_r, the physics is I_line = sqrt(3) I_phase). Right: DELTA triangle of secondaries ("secondary of P/Q/R", X1-X2) to a "load" box with sqrt(3)*I_s on the lines and I_s in the delta.
3. Bottom: two closed phasor triangles. Left: E_AB (top, rightward), E_BC (right side, down-right), E_CA (left side, up-left) forming the primary line-voltage delta. Right: E_12, E_23, E_31 the identical-orientation secondary delta (no phase displacement).

```text
   G --- A/B/C -> [ DELTA of H1-H2 primaries P/Q/R ]        (I_line = sqrt3 I_p)
                     |
   load <- 1/2/3 <- [ DELTA of X1-X2 secondaries P/Q/R ]    (I_line = sqrt3 I_s)

   phasors:     E_AB ->              E_12 ->
              /      \              /      \
        E_CA /        \ E_BC   E_31 /        \ E_23
            (closed)                 (closed, same orientation)
```

## Slide 6: Delta-Star Connection [G-OK] [DIAGRAM-CORE]

On-slide text:
Delta-Star Connection
- Three single-phase transformers connected in delta-wye
  - This type of connection is generally used where it is necessary to step up the voltage (generating Points).
  - In this system the line voltage ratio is sqrt(3) times of transformer turn-ratio.
  - the primary-side line voltage is transformed to the secondary-side phase voltage
  - the delta-wye connection produces a 30 deg phase shift between the primary and secondary voltages and currents

Diagram description: three figures.
1. Top right: transformers P, Q, R with A/B/C in, 1/2/3 out, neutral N, "balanced three-phase load" dashed box, H1/H2 and X1/X2 labels.
2. Middle left (primary DELTA): generator G, terminals A, B, C; delta triangle of primaries: P(H1)->B, P(H2)->A, Q(H1)->C, Q(H2)->B, R(H1)->A, R(H2)->C (H1-H2 chain around the triangle). Current annotations "1.73 Ip" on the B-A line and "Ip" inside (1.73 = sqrt(3)).
3. Middle right (secondary STAR): secondaries with X1->1/2/3 and all X2 tied to node N, "load" box, current I_s to the load.
4. Bottom phasors: left triangle E_AB, E_BC, E_CA (delta primary); right triangle E_12, E_23, E_31 (secondary), with the 30 deg displacement between the two sets (per the bullet).

```text
   G -> [ DELTA primaries (H1-H2 triangle) ]   I_line = 1.73 I_p
              |
        [ STAR secondaries: X1->1,2,3 ; X2 common N ]  -> load (I_s)

   phasors: primary delta E_AB/E_BC/E_CA ; secondary E_12/E_23/E_31
            rotated 30 deg relative to primary (as stated in bullet)
```

[Check] A fragment read of this slide's top-right schematic loosely described "H2 all common" (wye-looking); the render read plus the middle figures confirm the PRIMARY is a wired DELTA (H1-H2 triangle) and the SECONDARY a STAR. The slide content (delta-wye) and figures agree. The 30 deg shift is stated in text only: the phasor triangles are drawn without an angle marker.

## Slide 7: Star-Delta Connection [G-OK]

On-slide text:
Star- Delta Connection
- The currents in a star (wye)-delta connection are identical to those in the delta-wye connection
  - This type of transformer connection is used where the voltage is to be stepped down.
  - In this system line voltage ratio is 1/sqrt(3) times the transformer turn ratio.
  - Again, the connection results in a 30 deg phase shift between the primary and secondary voltages and currents
  - the primary-side phase voltage is transformed to the secondary- side line voltage

Diagram description: none on this slide (text only). Mirror of slide 6: step-down use (distribution), ratio divided by sqrt(3), same 30 deg shift, primary phase voltage becomes secondary line voltage.

## Slide 8: Star-Star Connection [G-OK] [DIAGRAM-CORE]

On-slide text:
Star- Star Connection
- Three single-phase transformers connected wye-wye
  - This type of transformer is most economical for small current and high voltage transformer.
  - The number of turns per phase and the amount of insulation is minimum because phase voltage 1/sqrt(3) of line voltage.
  - There is no phase displacement between the primary and secondary voltages.
  - the primary-side phase voltage is transformed to the secondary-side phase voltage
  - the neutral terminal of the primary side of the transformer must be connected back to the source with a low impedance path to avoid secondary voltage magnitude distortion with unbalanced loads

Diagram description: one wide circuit. Left: dashed circle "ac source" with a Y-connected source and grounded neutral. Lines A, B, C to three primary coils in STAR, common neutral N1 with a ground symbol. Right: three secondary coils in STAR, common neutral N2 (not grounded in the drawing), output terminals labeled 1 (top), 3 (middle), 2 (bottom).

```text
   [ac source Y, gnd] --A--/ N1 (grounded)          N2 \--o 1
                          --B--  STAR prim  |  STAR sec --o 3
                          --C--\           |           /--o 2
                                (phase voltage -> phase voltage,
                                 no phase shift)
```

[Check] Output terminals are labeled 1, 3, 2 top-to-bottom (non-sequential) as printed, and one fragment read of the wiring describes this same figure; both reads agree. The neutral-return bullet is the classic Y-Y third-harmonic/unbalanced-load caveat.

## Slide 9: Open Delta Connection [G-OK] [DIAGRAM-CORE]

On-slide text:
Open Delta Connection
- If one transformer of a delta-delta system is damaged, the system will continue to supply 3-phase power. If this defective transformer is disconnected and removed, the remaining two transformer continue to function as a 3-phase bank with rating reduced to about 57.7 % of that of the original delta-delta bank. This is known as open delta system

Diagram description: three figures.
1. Top right: only TWO transformers now, P and Q (R removed). P between A-B (primary, H1-H2) and 1-2 (secondary, X1-X2); Q between B-C and 2-3 (per the read: P across A-B and 1-2, Q across B-C and 2-3).
2. Middle circuit (marked (b)): generator G, lines A, B, C, the V-connected (open-delta) bank, currents I_P and I_s marked, "load" box at right.
3. Bottom phasors: left triangle E_AB, E_CA, E_BC; right triangle E_12, E_31, E_23.

```text
   G --A-- [ P: H1-H2 ]--1--                remaining bank = 2 transformers
      --B--[ P ][ Q: H1-H2 ]--2--           rating = 57.7% = 1/sqrt(3) of D-D
      --C--     [ Q ]------3--  -> load
   phasors: E_AB/E_CA/E_BC and E_12/E_31/E_23 (figure marked (b))
```

[Check] A fragment read described the middle figure as a closed "delta-delta with phasors"; the render read and the slide's own text show the OPEN delta (V) bank of two units (P, Q only). Trust the two-perspective read. The 57.7% figure = 1/sqrt(3) = the sqrt(3)/2 power ratio of the two-unit bank vs the three-unit bank; this is the derivation behind the number (see reports/03-FORMULA-LAEDER.md F13 corollary).

## Slide 10: Lecture series outcome

On-slide text:
Lecture series outcome
"UNDERSTAND the principle, construction of Three phase Transformer"

Diagram description: none. Closing slide.

---

End of deck. Check passes run: (1) slide-count headings 10/10 vs source; (2) 3-perspective number diff on slides with figures (5, 6, 8, 9); (3) full re-read of slides 1-10 after the cross-deck filename-collision fix; (4) mismatch adjudication on slides 6 and 9 (fragment-vs-text conflicts resolved to the render+text majority, flagged in [Check] lines). Key exam content in this deck: the four connections' ratio and phase-shift rows (D-D: 1:1, 0 deg / D-Y: sqrt3:1, 30 deg, step-up / Y-D: 1:sqrt3, 30 deg, step-down / Y-Y: 1:1, 0 deg, neutral caveat) and open delta 57.7%.
