# PPT_DC Machine_LMS

Deck conversion, ELC2104 Electrical Machines, 42 slides.
Method: slide XML text (verbatim) + slide-render vision reads (xiaomi/mimo-v2.6-flash, mid reasoning, commandcode) + per-image fragment reads (equations). Cross-check passes: 3-perspective number diff (text layer vs renders vs fragments), re-read of all collided slides with deck-qualified names, source-errata scan. Anti-correction rule held: everything below is AS PRINTED, including the source's own errors (flagged in [Check] lines).

Scope tags (per EM-mte-syllabus.md union handout Lec 1-15): [D-OK] in lock, [HEDGE] Lec 16-22 borderline, [PARKED] outside lock. Tags are navigation only, the conversion is faithful regardless.

## Slide 1: DC Machine (title)

On-slide text: "DC Machine" / "Electrical machines- ELC2104". Header: Manipal University Jaipur logo left, NAAC A+ badge right ("NAAC A+ GRADE WITH 3.28 SCORE"), yellow bar below header.

Diagram description: none. Pure title slide, white background, centered black text.

Visuals and layout: header logos + yellow divider, then centered title/subtitle.

## Slide 2: Reference books

On-slide text:
REFERENCE BOOK
1. M. G. Say, Alternating Current Machines (5e), ELBS.
2. 2. E. H. Langsdorf, Theory of Alternating Current Machine (2e), TMH.
3. A. E. Clayton, Performance and Design of DC Machines (3e), O& IBH,
TEXT BOOKS
1. P. S. Bhimbra, "Electrical Machinery", Seventh Edition, 1995,Khanna Publishers.
2. I. J. Nagrath, , D. P.Kothari, "Electric Machines", Third Edition, Tata McGraw-Hill Publishing Company Ltd.
3. A. E.Fitzgerald, Charles Kingsley, Jr. Stephen D. Umans, "Electric Machinery", Fifth Edition, Tata McGraw-Hill.

[Check] Formatting quirks as printed: doubled "2. 2.", double comma "Nagrath, , D. P.", "1995,Khanna" no space. Same book list as the 1ph deck.

Diagram description: none.

## Slide 3: Direct Current (DC) Machines Fundamentals [D-OK]

On-slide text:
- Generator action: An emf (voltage) is induced in a conductor if it moves through a magnetic field.
- Motor action: A force is induced in a conductor that has a current going through it and placed in a magnetic field.
- Any DC machine can act either as a generator or as a motor.

("Generator action" and "Motor action" in red, rest of each bullet in blue/black.)

Diagram description: none.

Visuals and layout: title + 3 bullets only. This is the principle slide behind A2's reversal reasoning: same machine, both actions.

## Slide 4: DC Machine Construction [D-OK] [DIAGRAM-CORE]

On-slide text:
- The stator of the dc machine has poles, which are excited by either dc current or permanent magnets to produce magnetic fields.
- In the neutral zone, in the middle between the poles, commutating poles are placed to reduce sparking of the commutator.
- Compensating windings are mounted on the main poles. These reduces flux weakening commutation problems.

Diagram description: cross-section of a DC machine, labeled clockwise: q-axis (top, vertical dashed), Commutating pole, Commutating field winding, Commutator, Series field winding, d-axis (horizontal dashed), Shunt field winding, Compensating winding, Air gap, Rotor shaft, Armature winding, Armature core, Stator yoke, Brush, Main pole core, Pole shoe. Internal poles: main poles N (left) and S (right) on the d-axis, commutating poles S (top) and N (bottom) on the q-axis. Compensating windings sit in slots in the pole shoes (parallel to armature conductors). Armature conductors drawn as small circles with dot/cross current markers. Curved arrow = clockwise rotor rotation.

```text
              q-axis
                 ^
        commutating pole (S) + winding
                 |
   main pole(N)  |      main pole(S)
     +--------+  |      +--------+
     | field  |  |      | field  |
     |windings|  |      |windings|
     +---||---+  |      +---||---+
      pole shoe  |       pole shoe
        \       air gap       /
         \   +----------+   /
          \  | armature |  /
           \ | core +   | /
            \| winding  |/
        d-axis---[rotor shaft]---d-axis
            /| commutator |\
           / | + brushes  | \
          /  +----------+  \
        compensating windings in pole shoes
                 |
        commutating pole (N) + winding
```

Visuals and layout: bullets left, large cross-section diagram right. [Check] The deck text says compensating windings are "mounted on the main poles" and the drawing places them in the pole shoes; standard wording is "in slots in the pole faces" (the deck's own slide 36 says it correctly). Same figure family as NP-383/384.

## Slide 5: DC Machine Construction (stator photo) [D-OK]

On-slide text:
- The poles are mounted on an iron core that provides a closed magnetic circuit.
- The rotor has a ring-shaped laminated iron core with slots.
- Coils with several turns are placed in the slots. The distance between the two legs of the coil is about 180 electric degrees.

Diagram description: photograph of a real DC machine stator. Labels with arrows: "Motor house" (grey outer casing), "Field winding" (copper coils wrapped on poles, black insulating tape), "Pole" x2 (left and right pole pieces), "Iron core" (inner laminated ring). Four salient poles visible; red/blue/black wires exit at the bottom.

```text
              (Motor house)
                  .----.
                / pole+coil \
    Pole -->   [ pole+coil ]   <-- Field winding
                \ pole+coil /
                  '----'
                    ||  <- wires exit bottom
              (Iron core label)
```

Visuals and layout: bullets left, photo right. The "180 electric degrees" coil-span line is the winding basics tag (A2 Q19-21 territory).

## Slide 6: DC Machine Construction (commutator photo + rotor cross-section) [D-OK]

On-slide text:
- The rotor coils are connected in series through the commutator segments.
- The ends of each coil are connected to a commutator segment.
- The commutator consists of insulated copper segments mounted on an insulated tube.
- Two brushes are pressed to the commutator to permit current flow and they are placed in neutral zone.

Diagram description: two figures. Top right: close-up photo of a commutator, labels "Mica insulation", "Copper conductors" (red enameled wires soldered to segment tabs), "Mica Insulation between segments", "Copper segment". Bottom right: machine cross-section, N pole left and S pole right with pole windings (red dots), rotor slots numbered 1-8 with rotor windings and insulation, commutator copper segments on the shaft, two brushes (top contacting segments 8/1, bottom contacting 4/5), current labels I_r_dc/2 into each brush and I_r_dc total, "Rotation" curved arrow (clockwise), labels Shaft, Insulation, Rotor Winding, Copper segment.

```text
        [photo: windings || commutator bars]
         ^mica    ^cu conductors  ^mica  ^cu segment

        pole winding        pole winding
           |    N     [brush]     S    |
           |  +---+   I/2 I/2   +---+  |
           |  | 8 7 6 5 4 3 2 1 |  |  |
           |  |  commutator segs |  |  |
           |  +------[shaft]-----+  |  |
           +---- rotor windings ----+
                    I_r_dc in at bottom brush
                 (Rotation: clockwise)
```

Visuals and layout: 4 bullets left, photo top-right, cross-section bottom-right.

## Slide 7: DC Machine Construction (rotor photo, repeat slide) [D-OK]

On-slide text: same 4 bullets as slide 6.

Diagram description: top photo of a full rotor on its shaft: "Iron core" (stacked slotted laminations), "Coil" (copper windings left of core), "Ball bearing" (far left on shaft), "Coil commutator interconnection" (red wires core-to-segments), "Insulation between segments" x2, "Coil insulation", "Commutator copper segment". Bottom: the same 8-segment cross-section schematic as slide 6 (N/S poles, brushes top, I_r_dc splitting into I_r_dc/2 per brush, numbered segments 1-8, Rotation arrow).

Visuals and layout: bullets left, two figures right stacked. [Check] slides 6 and 7 share text and the bottom schematic; the photos differ (commutator close-up vs whole rotor).

## Slide 8: EMF Equation of DC Generator [D-OK] [PROVE-1]

On-slide text:
Let:
- P = number of poles
- Phi = flux produced by each pole in weber (Wb)
- Z = total number of armature conductors
- N = armature speed in rpm
- A = number of parallel paths

Total flux produced by all poles: P*Phi

During one revolution, each armature conductor cuts the flux from all P poles. Therefore, flux cut by one conductor per revolution is: [P*Phi boxed]

If the armature rotates at N rpm, then the time required for one revolution is: t = 60/N seconds

Diagram description: none (derivation panel). Formulas as printed:
```text
Let:  P = poles   Phi = flux/pole (Wb)   Z = total armature conductors
      N = speed (rpm)   A = parallel paths

total flux = P*Phi
flux cut by ONE conductor per revolution = P*Phi      (boxed)
time for one revolution:  t = 60/N seconds
```

Visuals and layout: variable list left, then centered derivation lines. This is the first panel of the 4-slide derivation (8-11).

## Slide 9: EMF Equation of DC Generator (Faraday step) [D-OK] [PROVE-1]

On-slide text (image panel):
According to Faraday's law:
e = (Flux cut)/(Time)
Therefore,
e = P*Phi/(60/N)
e = P*Phi*N/60
Thus, the EMF induced in one conductor is: [e = P*Phi*N/60 boxed]

```text
        Flux cut            P*Phi          P*Phi*N
   e = ----------  ->  e = -------  ->  e = --------
          Time              60/N              60        (boxed)
```

Diagram description: none. Light grey derivation box, final formula in a thin black frame.

## Slide 10: EMF Equation of DC Generator (parallel paths step) [D-OK] [PROVE-1]

On-slide text (image panel):
The total number of conductors is Z, but they are divided into A parallel paths.
Therefore, the number of conductors connected in series in each parallel path is: Z/A
Hence, the generated EMF across one parallel path is: Eg = e * (Z/A)
Substituting the value of e: Eg = (P*Phi*N/60) * (Z/A)
Therefore, [Eg = P*Phi*Z*N/(60*A) boxed]

```text
   series conductors per path = Z/A
   Eg = e * Z/A = (P*Phi*N/60)*(Z/A)
   Eg = P*Phi*Z*N / (60 A)                    (boxed)
```

Diagram description: none.

## Slide 11: EMF Equation, lap and wave forms [D-OK] [PROVE-1]

On-slide text (image panel):
For Lap winding: for a simplex lap winding: A = P. Therefore, [Eg = Phi*Z*N/60 boxed]
For Wave winding: for a simplex wave winding: A = 2. Therefore, [Eg = P*Phi*Z*N/120 boxed]

```text
   lap  (simplex):  A = P  ->  Eg = Phi*Z*N/60        (boxed)
   wave (simplex):  A = 2  ->  Eg = P*Phi*Z*N/120     (boxed)
```

Diagram description: none. Two stacked sections, both finals boxed.

[Check] All four derivation panels (8-11) live as vector images; recovered here via render + fragment reads. The "60" and "120" denominators are the marks points.

## Slide 12: Type of DC GENERATORS [D-OK] [DIAGRAM-CORE]

On-slide text: There are four major types of DC generators, namely: Separately excited generator. / Shunt generator. / Series generator / Compounded generator (sub: Cumulative, Differential).

Diagram description: four equivalent circuits:
1. Separately excited (top right): field circuit with variable R_F, L_F and separate source V_F; armature circuit with E_A, R_A, I_A arrow, terminals A1 (+) and A2 (-), V_T.
2. Shunt (middle left): E_A, R_A, I_A, then shunt branch R_F + L_F with I_F down, load I_L out, V_T.
3. Series (middle): E_A, R_A, I_A, series field R_S + L_S with I_S in line, I_L, V_T.
4. Compounded (right): both branches, I_A = I_S + I_F printed below.

```text
 separate:  [V_F]-[R_F var]-[L_F]  |  (E_A)-[R_A]-I_A-> A1(+) ... A2(-): V_T
 shunt:     (E_A)-[R_A]-I_A--+--[I_L]-> V_T   | shunt [R_F][L_F] I_F down
 series:    (E_A)-[R_A]-[R_S]-[L_S]-I_L-> V_T  (I_A=I_S=I_L in line)
 compound:  both;  I_A = I_S + I_F
```

Visuals and layout: bullet list left, 2x2 grid of circuits right.

## Slide 13: The Equivalent Circuit of a DC Generator [D-OK]

On-slide text:
Two circuits are involved in DC generators: Armature Circuit / Field circuit
- Armature circuit represents Thevenin equivalent of the entire rotor. It cantain an ideal voltage source E_A and a resistor R_A. .
- Brush voltage drop is represented by a small battery
- The field coils, which produce the magnetic flux
- inductor L_F and resistor R_F
- R_adj for field current control

[Check] "cantain" and the stray ". ." are as printed. Title overlaps the blue subheading (rendering artifact).

Diagram description: three-part figure: (1) standalone variable resistor R_adj with arrow; (2) field circuit: terminal F1 on top, F2 on bottom, between them resistor R_F and inductor L_F; (3) armature circuit: generator circle E_A with + and - and two brushes, small battery V_brush in series with resistor R_A to terminal A1 with I_A arrow, bottom brush straight to terminal A2.

```text
  (F1)---[R_F]---[L_F]---(F2)     [R_adj: zigzag w/ arrow, floating]

  (E_A +/- with brushes)---[V_brush batt]---[R_A]---o A1  ->
  |                                                    (I_A)
  +--------------------------------------------------o A2
```

## Slide 14: Magnetizing curve of a DC Generator & performance [D-OK] [DIAGRAM-CORE]

On-slide text:
- The internal generated voltage E_A of a dc generator is given by [E_A = K*Phi*omega]
- E_A is directly proportional to the flux
- The field current is directly proportional to the magnetomotive force and hence E_A
- Brush voltage drop is represented by a small battery
- Performance of the DC generators are determined by terminal output parameter I_L and V_T
- Voltage regulation also determines its performance

Diagram description: magnetization (OCC) graph on the right. Y-axis: E_A [= K*phi*omega]. X-axis: I_F [= V_F/R_F]. Curve rises linearly (unsaturated) then bends into saturation. Annotations on the curve: omega = omega_0, n = n_0 (constant) (this curve is drawn at fixed speed).

```text
  E_A [ = K phi omega ]
    ^
    |        ________  <- saturation
    |       /
    |      /   (omega=omega_0, n=n_0)
    |     /
    |    /
    |   /
    |__/
    +-------------------> I_F [ = V_F/R_F ]
```

[Check] Bullet 4 (brush drop) is a copy-paste leftover from slide 13; not related to the magnetization curve.

## Slide 15: The Separately Excited Generator [D-OK] [DIAGRAM-CORE]

On-slide text:
- A separately excited dc generator is a generator whose field current is supplied by a separate external dc voltage source.
- By Kirchhoff's voltage law, the terminal voltage is V_T = E_A - I_A R_A
- Since the internal generated voltage is independent of I_A the terminal characteristic of the separately excited generator is a straight line
Equations under the circuits: I_L = I_A / V_T = E_A - I_A R_A / I_F = V_F/R_F
Caption: "The terminal characteristic (a) with and (b) without compensating windings"

Diagram description: field circuit (V_F source with +/-, variable R_F, L_F, I_F) and armature circuit (E_A with +-, R_A, I_A arrow out, I_L to load, V_T across output) side by side. Two terminal-characteristic graphs bottom right: (a) V_T (and E_A) vs I_L, straight line dropping with bracket "I_A R_A drop" between constant E_A and sloping V_T; (b) same axes but E_A_nf (no-load) and a steeper drop with two brackets: "I_A R_A drop" and "AR drop" (armature reaction), captioned (b).

```text
  V_T ^        V_T ^          (a) with comp. windings: line drops by I_A R_A
      | E_A ------  | E_A_nf -
      |    \ I_ARA  |    \ I_ARA drop
      |     \       |     \ AR drop
      |______\__>I_L|______\__> I_L    (b) without: extra AR drop
```

[Check] The caption "(a) with and (b) without compensating windings" matches graph (b)'s "AR drop" bracket: with compensating windings there is no AR drop. Reproduce the caption wording.

## Slide 16: The Separately Excited Generator, control of terminal voltage [HEDGE]

On-slide text:
Control of Terminal Voltage > two methods
- Change the speed of rotation: E_A = K*Phi*omega up > V_T = E_A up - I_A R_A > V_T up
- Change the field current: I_F = V_F/R_F down > I_F up > Phi up > E_A = K*Phi up*omega > V_T = E_A up - I_A R_A > V_T up
Footer: "The terminal characteristic (a) with and (b) without compensating windings"

[Check] The second chain is garbled as printed ("I_F = VF/R_F down" with a following "I_F up"): the intended chain is R_F down -> I_F up -> Phi up -> E_A up -> V_T up. The ">" marks are the deck's causal arrows. Footer repeats slide 15's caption but no figure is on this slide (leftover text).

Diagram description: none.

## Slide 17: The Separately Excited Generator, mmf and speed scaling [HEDGE]

On-slide text:
It is not possible to predict analytically the value of E_A to be expected from a given field current.
- Magnetization curve of the generator must be used to calculte E_A accurately.
- Net mmf is F_net = N_F I_F - F_AR and I_F equivalent is I_F - F_AR/N_F
- (empty bullet)
- The magnetization curves for a generator are drawn for a particular speed, usually the rated speed of the machine.
- If the machine is turning at other speeds than the rated speed, E_A in a machine is related to speed by E_A/E_A0 = n/n_0

Formulas (image fragments, exact): F_net = N_F I_F - F_AR ; I_F* = I_F - F_AR/N_F ; E_A/E_A0 = n/n_0

[Check] "calculte" as printed. Text and equations overlap in bullets 2 and 5 (rendering defect). One empty bullet.

Diagram description: none.

## Slide 18: The Shunt Generator [D-OK] [DIAGRAM-CORE]

On-slide text:
A shunt dc generator is a dc generator that supplies its own field current by having its field connected directly across the terminals of the machine.
- The armature current of the machine supplies both the field circuit and the load
Equations: I_A = I_F + I_L / V_T = E_A - I_A R_A / I_F = V_T/R_F
Caption: "The equivalent circuit of a shunt de generator"

[Check] "shunt de generator" (should read dc) as printed.

Diagram description: equivalent circuit: armature source E_A (+ top, - bottom) with R_A in series, I_A arrow right to a node; shunt branch down from the node: variable R_F then coil L_F with I_F arrow down; from the node I_L arrow right to the positive output terminal; V_T across output (+ top, - bottom).

```text
  (E_A +-) -- [R_A] -- I_A --> o --[I_L -->]-- (+ V_T)
                               |
                              [I_F v]
                               |
                          [R_F var]
                               |
                             [L_F]
                               |
  (E_A -) ---------------------+-------------- (- V_T)
```

## Slide 19: Shunt Generator, voltage build up [D-OK] [PROVE-adjacent] [DIAGRAM-CORE]

On-slide text:
Voltage Build up in a Shunt Generator depends on:
- Residual flux
- E_A = K*Phi_res*omega
- I_F = V_T up/R_F > E_A = K*Phi up*omega >
- V_T = E_A up - I_A R_A > V_T up
possible causes for the voltage to fail to build up during starting:
- There may be no residual magnetic flux
- The direction of rotation of the generator may have been reversed
- The field resistance may be adjusted to a value greater [than the critical resistance: text cut off at slide edge]
Caption: "Voltage buildup on starting in a shunt dc generator"

Diagram description: the classic build-up graph. Y-axis: E_A (and V_T), V; starts at E_A,res on the axis. X-axis: I_F, A with I_F_cr marked. Curves: magnetization curve (E_A vs I_F, rises then saturates) and straight field-resistance line V_T vs I_F with slope R_F = V_T/I_F through the origin-ish; they intersect at the operating point (I_F_cr, V_T0). A vertical staircase arrow between the curves shows the step-by-step build-up (E_A,res -> raises V_T -> raises I_F -> raises E_A ...).

```text
 E_A(and V_T),V ^
                |           ____ magnetization curve (E_A vs I_F)
       V_T0  ---+----------/  <- operating point (I_F_cr, V_T0)
                |        /
                |      /  <- V_T vs I_F straight line, slope R_F = V_T/I_F
                |    /     (staircase arrows between curves = build-up steps)
   E_A,res  ----+--/
                +-----------------------> I_F, A
                                   I_F_cr
```

## Slide 20: Shunt Generator, terminal characteristic + voltage control [D-OK] [DIAGRAM-CORE]

On-slide text:
The Terminal Characteristic of a Shunt DC Generator:
- I_A = I_L up + I_F > (I_A R_A) up > V_T down = E_A - I_A up R_A
- I_F down = V_T down / R_F > E_A = K*Phi down*omega
- V_T = E_A down - I_A R_A > V_T down
Voltage Control for a Shunt DC Generator: Change the shaft speed omega of the generator. / Change the field resistor of the generator.
Caption: "The terminal characteristic of a shunt dc generator"

[Check] Text at right is cut off / overlapped by the graph (rendering defect). The chains describe the cumulative droop: load up -> I_A R_A up -> V_T down -> I_F down -> Phi down (field weakening) -> E_A down -> V_T down more.

Diagram description: V_T vs I_L graph. Dashed top horizontal line = constant E_A. Solid curve from the same no-load point slopes down, then bends steeper. Brackets: "I_A R_A" gap between dashed line and first slope; "Field weakening effect" gap to the steeper tail.

```text
  V_T ^
      | =========== (dashed: E_A)
      |\  <- I_A R_A gap
      | \
      |  \____
      |       \____ <- Field weakening effect (steeper)
      +------------------> I_L
```

## Slide 21: Shunt Generator, non-linear (graphical) analysis [D-OK] [DIAGRAM-CORE]

On-slide text:
The Non linear Analysis of Shunt DC Generators
- The key to understanding the graphical analysis of shunt generators is to remember Kirchhoff's voltage law (KVL): [E_A = V_T + I_A R_A]
- (empty bullet)
- The field resistance R_F, which is just equal to V_T/I_F, a straight line
- At no load V_T = E_A
- The differnce between V_T and E_A is [I_A R_A drop: text cut into graph]
Caption: "graphical analysis of shunt generators"

[Check] "differnce" as printed. Text cut at slide edge ("is I_A R_A" runs into the figure).

Diagram description: graph: Y-axis V_T with dashed markers V_Tnl (no-load) and V_Tload; X-axis I_F with marker I_Fnl. Curves: E_A vs I_F (saturating) and V_T vs I_F (straight field-resistance line R_F = V_T/I_F). Brackets: "I_A R_A drop" between the E_A curve and the V_T line at load, "E_A reduction" arrow, operating point shifts left to I_Fnl.

```text
  V_T ^
  V_Tnl--+----.  E_A vs I_F (saturating)
          |     \___
  V_Tload-+---.     \___  <- I_A R_A drop gap
          |    \___      \___
          |   V_T vs I_F (straight R_F line)
          +--+-------------------> I_F
           I_Fnl
```

## Slide 22: Shunt Generator, graphical analysis with armature reaction [HEDGE] [DIAGRAM-CORE]

On-slide text:
If armature reaction is present in a shunt generator:
- There is demagnetizing magnetomotive force and I_A R_A drop  [I_F* = I_F - F_AR/N_F]
- (empty bullet)
Caption: "graphical analysis of shunt generators with armature reaction"

Diagram description: Y-axis E_A and V_T, X-axis I_F. Two curves: E_A vs I_F (upper) and V_T vs I_F (lower). Straight field line R_F = V_T/I_F. Annotations: "E_A = V_T at no load" (intersection), "E_A with load", "V_T with load", "I_A R_A drop" (gap), "Demagnetizing mmf (converted to an equivalent field current)" (the load curves shift left by F_AR/N_F).

```text
  E_A,V_T ^
          |   E_A(no load) ----/ E_A vs I_F
          |                  /  <- V_T vs I_F (below E_A)
          |  E_A(with load) /   gaps: I_A R_A drop
          | V_T(with load) /    shift: Demagnetizing mmf -> F_AR/N_F left
          |             /   R_F = V_T/I_F line
          +------------------------> I_F
```

## Slide 23: SERIES DC GENERATOR [D-OK] [DIAGRAM-CORE]

On-slide text:
A series dc generator is a generator whose field is connected in series with its armature. It has few turns of field coil with thick conductors.
(empty bullets)
Circuit equations: I_A = I_S = I_L / V_T = E_A - I_A(R_A + R_S)
Label on coil: (N_SE turns)
Caption: "The equivalent circuit of a series generator"

Diagram description: single loop: generator circle E_A (+-), then resistor R_A with I_A arrow, series field resistor R_S with I_S arrow, coil L_S with I_L arrow, to output terminals V_T (+ top, - bottom). Coil labeled (N_SE turns).

```text
     (N_SE turns)
      I_A   I_S   I_L
  (E_A +-) [R_A] [R_S] [L_S] ---> (+ V_T)
  (E_A -) -----------------------> (- V_T)

  I_A = I_S = I_L
  V_T = E_A - I_A (R_A + R_S)
```

## Slide 24: SERIES DC GENERATOR, terminal characteristic [D-OK] [DIAGRAM-CORE]

On-slide text:
The Terminal Characteristic of a Series Generator
- V_T = E_A - I_A(R_F + R_A)
- (empty bullet)
Body (per text layer): At no load ... As I_L up = I_A = I_F > E_A up - I_A up (R_F + R_A) ... At the beginning E_A increases more than the resistive drop
Caption: "Derivation of the terminal characteristic for a series dc generator"

[Check] E18-candidate: this slide writes the series field resistance as R_F in "E_A - I_A(R_F + R_A)", but slides 23/25 call it R_S and the standard symbol is R_SE. R_F elsewhere means the SHUNT field. Reproduce as (R_A + R_S) with a note, or keep the deck's (R_F + R_A) with the meaning "series field resistance". The physics: no load means I_L = 0 so E_A = V_T = K*Phi_res*omega (small residual voltage); as load rises, Phi rises with I_A so E_A climbs faster than the resistive drop at first (rising characteristic), then saturation bends it over.

Diagram description: fragment formulas: E_A = K*Phi_res(omega) (no-load point) and V_T = E_A - I_A(R_F + R_A).

## Slide 25: CUMULATIVELY COMPOUNDED DC GENERATOR [D-OK] [PROVE-adjacent] [DIAGRAM-CORE]

On-slide text:
A cumulatively compounded dc generator is a dc generator with both series and shunt fields, connected so that the magnetomotive forces from the two fields are additive.
- Voltage and current relationships for this generator are [boxed: I_A = I_F + I_L / V_T = E_A - I_A(R_A + R_S) / I_F = V_T/R_F]
- Since there are series and shunt field coils, the equivalent effective shunt field current for this machine is given by [F_net = F_SH + F_SE - F_AR / I_F* = I_F + (N_SE/N_SH) I_A - F_AR/N_SH]
Caption: "The equivalent circuit of a compound dc generator"

Diagram description: compound equivalent circuit: E_A (+-) with R_A in series and the series field R_S + L_S in the load line (I_A arrow), then a shunt branch down (variable R_F + L_F, I_F arrow), I_L out to V_T (+-). Circuit annotation: I_A = I_L + I_F. The mmf equations sit bottom right.

```text
        I_A       I_S
  (E_A +-) [R_A] [R_S][L_S] ---+---[I_L -->]-- (+ V_T)
  (E_A -) ---+                 |
             |     [R_F var]   |
             |     [L_F] I_F   |
             +-----------------+-------------- (- V_T)

  boxed:  I_A = I_F + I_L ;  V_T = E_A - I_A(R_A + R_S) ;  I_F = V_T/R_F
  mmf:    F_net = F_SH + F_SE - F_AR
          I_F* = I_F + (N_SE/N_SH) I_A - F_AR/N_SH
```

[Check] Fragment read rendered the second mmf equation's left side as "I_P*"; per the render read and context it is I_F*. Deck slide 27 uses I_F* too.

## Slide 26: The Compound Generator, terminal characteristic of cumulative compound [HEDGE] [DIAGRAM-CORE]

On-slide text:
The Terminal Characteristic of a Cumulatively Compounded DC Generator
- Since I_A = I_F + I_L up, the armature current I_A increases too. At this point two effects occur in the generator:
- As I_A increases, V_T = N*Phi - I_A (R_A + R_SE) + F_SE up + F_SH   [garbled equation, see Check]
- As I_A increases, , increasing   [text missing as printed]
- The field resistance R_F, which is just equal to V_T/I_F, a straight line
- V_T = E_A up - I_A (R_A + R_s) rise.
Caption: "Terminal characteristics of cumulatively compounded dc generators"
Fragments (exact): F_tot = F_SE up + F_SH ; F_SE = N_SE I_A

[Check] Bullet 2 mixes voltage and mmf quantities ("V_T = N*Phi - ... + F_SE + F_SH") and is not dimensionally coherent; the sane reading is the mmf statement F_tot = F_SE + F_SH (as the fragment formulas show) with V_T = E_A - I_A(R_A + R_S) and E_A rising because F_SE adds to F_SH (cumulative). Bullet 3 is empty after "increasing". Also this slide's NAAC badge reads "A++ GRADE WITH 3.30 SCORE" while every other slide says 3.28 (template mix, cosmetic only).

Diagram description: the four-curve terminal characteristic graph. Y-axis V_T, X-axis I_L with marker I_FLL (full-load). Four curves from one no-load point: "Overcompounded" (rises slightly then holds), "Flat compounded" (constant), "Undercompounded" (falls slightly), "Shunt" (falls steeply, reference curve).

```text
  V_T ^
      |  \_ overcompounded (rises to +VR)
      | ----- flat compounded (VR = 0)
      |   \__ undercompounded (falls slightly)
      |       \____ shunt (steep fall)
      +---------------------------> I_L
      0                          I_FLL
```

## Slide 27: The Compound Generator, graphical analysis [HEDGE] [PROVE-adjacent]

On-slide text:
Graphical Analysis of Cumulatively Compounded DC Generators
The following two equations are the key to graphically describing the terminal characteristics of a cumulatively compounded dc generator.
- The equivalent shunt field current I_eq, [I_eq = (N_SE/N_F) I_A - F_AR/N_F]
- the total effective shunt field current [I_F* = I_F - I_eq]
- This equivalent current I_eq represents a horizontal distance to the left or the right of the field resistance line (R_F = V_T/I_F) along the axes of the magnetization curve.

Diagram description: "FIGURE 5-26" graph: Y-axis E_A and V_T, X-axis I_F. Magnetization curve (E_A vs I_F, saturating), straight field line R_F = V_T/I_F from origin. Horizontal markers: "E_A and V_T, no load", "E_A loaded", "V_T, loaded". Vertical bracket "IR drop" between E_A loaded and V_T loaded. Horizontal dimension "I_eq" showing the equivalent-field-current shift left/right of the resistance line. The equations are pasted images (compression artifacts visible).

```text
  E_A,V_T ^
          |      ___________ magnetization (E_A vs I_F)
  E_A ld -+--x-/            <- intersection shifted by I_eq
          |   /|
  V_T ld -+--/-+--- <- IR drop bracket
          | /  |
          |/ R_F = V_T/I_F line
          +--|-------------> I_F
             I_eq (horizontal shift)
```

[Check] "FIGURE 5-26" is a Chapman figure number, confirming the deck's theory lineage (Fitzgerald/Chapman family). Sign convention: for cumulative compound with saturation+AR folded in, I_F* = I_F - I_eq and the machine reads its E_A at I_F* on the magnetization curve.

## Slide 28: Commutation Process [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text:
Commutation is the process of converting the ac voltages and currents in the rotor of a dc machine to dc voltages and currents at its terminals. The 4 loops of this machine are laid into the slots in a special manner. The "unprimed" end of each loop is the outermost wire in each slot, while the "primed" end of each loop is the innermost wire in the slot directly opposite.

Diagram description: two figures. (a) machine cross-section at omega*t = 0 deg: N pole left, S pole right, pole tips B; 4 slots each holding an outer wire (1,2,3,4) and the primed opposite-slot wire (1',2',3',4'); commutator center with segments/brushes x, y and labels a, b, c, d, E at top; omega rotation arrow. (b) winding schematic (diamond of 4 coils): vertices labeled 1'2 / 1 4' / 2'3 / 4 3', each coil a small inductor with +/- and e, "Back side of coil 1..4" annotations, commutator hub a x b / c y d with E, and the relation E = 4e at right.

```text
  (a) cross-section (omega t = 0):      (b) winding diamond:
        B            B                     1'  2
     [ N pole ][ S pole ]                /  e   e  \
     slots: 1,2,3,4 + 1',2',3',4'    1 4' --[E: a x b]-- 2' 3
     commutator: a x b / c y d, E       \  e   e  /
     omega -> rotation                   4  3'
                                      E = 4e
```

[Check] The title renders as "Commute Process" in one read and "Commutation Process" in another; the text layer says "Commutation Process". One vision read looped on the title transcription (model artifact) but the body reads are consistent across reads.

## Slide 29: Commutation Process, induced voltages in the loops [HEDGE] [PARKED-Lec16+]

On-slide text:
- The voltage in each of the 1, 2, 3' and 4' ends of the loops is given by: e_ind = vBl (+out of page)
- The voltage in each of the 1', 2', 3 and 4 ends of the loops is given by: e_ind = vBl (+into page)
- the total voltage at the brushes: E = 4e
Red overlay on (b): "The winding's connections"

Diagram description: same two figures as slide 28 (a: cross-section, labels omega t = 0 deg, brushes a (+) and c (-); b: winding diamond with per-coil e and +/-, back-side labels, E = 4e). The e_ind = vBl lines name which conductor groups generate out-of-page vs into-page emf.

## Slide 30: Commutation Process at omega t = 45 deg [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text: "The machine at time omega t = 45 deg." (red)

Diagram description: (a) machine at 45 deg: conductors under pole edges, nodes labeled 3, 1', 2, 4', 4, 2', 3', 1, commutator E (+ on x, - on y), a, b, c, d, omega arrow. (b) equivalent bridge: coils "+ e -" in the four arms, top nodes 2 / 2', side nodes 1' 3 and 3' 4... with "0 V" markers on the two middle-left/right nodes, center commutator E, x, y, a, b, c, d. Right side: E = 2e.

Key line: at 45 deg the brush short-circuits a coil pair (the 0 V nodes), so the terminal voltage drops: E = 2e.

```text
  (a) rotor at wt=45:              (b) bridge:
     2  +e-  +e-  2'                 top: 2 +e- +e- 2'
     1' 3 [0V nodes] 3' 4            mid: 1' 3   3' 4  (0 V marks)
     4' +e-  +e-  4                  bot: 4' +e- +e- 4
     center: E (+ x, - y) a b c d    center: E, x y
                                     right: E = 2e
```

## Slide 31: Commutation Process at omega t = 90 deg + waveform [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text:
- the 1', 2, 3, and 4' ends of the loops are under the north pole face
- the 1, 2', 3' and 4 ends of the loops are under the south pole face
- so the terminal voltage E = 4e
"The machine at time omega t = 90 deg."

Diagram description: three figures. Top: machine at 90 deg (N left, S right, all four active conductors squarely under pole faces, commutator E, x, y, a, b, d). Middle: bridge circuit (4 coils +/- e, E = 4e at right). Bottom: voltage waveform graph: Y-axis "E, volts" with ticks e, 2e, 3e, 4e, 5e; X-axis omega t in degrees 0, 45, 90, 135, 180, 225, 270, 315, 360. The waveform sits at 4e for most of the cycle with sharp dips toward 1e at 45, 135, 225, 315 deg (brush shorting moments).

```text
  E,v ^
   5e |
   4e |  ####    ####    ####    ####    ####     <- E = 4e
   3e |  #  #    #  #    #  #    #  #    #  #
   2e |  #  #    #  #    #  #    #  #    #  #
   1e |__#  #____#  #____#  #____#  #____#  #__
   0  +---------------------------------------------> wt
      0  45  90 135 180 225 270 315 360
           ^dips at 45/135/225/315 (brush shorting)
```

## Slide 32: Problems with Commutation in Real Machines, armature reaction [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text:
Armature reaction
The current though the armature conductors set up a magnetic field surrounding it which has the following effects
- Weakens the main flux
- Distorts the main flux
Neutral plan shift [line cut off at bottom]

Diagram description: five sub-figures (a)-(e): (a) main pole field only (N left, S right, vertical flux, vertical magnetic neutral plane, omega arrow, conductor dot/cross markers); (b) armature field alone (horizontal flux pattern from conductor currents); (c) resultant field (distorted flux, weakened under poles); (d) pole field and armature field superimposed (labeled "Pole field" and "Armature field"); (e) neutral plane shift: "Old neutral plane" (vertical) vs "New neutral plane" rotated in the direction of rotation.

```text
  (a) pole field      (b) armature field   (c) resultant     (e) MNA shift
   N | | | S           -- + --              distorted,         old |  new (rotated
   vertical MNA        horizontal           weakened           by rotation)
```

[Check] "though" (through) and "Neutral plan shift" (plane) as printed. This slide is the figure source for the notes' armature-reaction paragraphs.

## Slide 33: Problems with Commutation, L(di/dt) voltage [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text:
- L(di/dt) Voltage
Occurs in the commutator segments being shorted out by the brushes > inducti [text cut off]
These effects causes
- Arcing and sparking at the brushes
- Flashover
    - Reduce brush life
    - Pitting of the commutator segment

Diagram description: three stacked commutator/brush diagrams showing a coil's current reversal during commutation. Each: horizontal commutator bar with segments a, b, c, d; shaded brush with downward "400 A"; left arrow "Direction of commutator motion"; coils below segments with "200 A" arrows.
Top: brush on segment a, all four coils' current arrows right (200 A each).
Middle: brush spanning a toward b, two coils reversed (left), one coil marked "?" (the shorted, reversing coil), two still right.
Bottom: brush on b, three reversed, three right.

```text
  motion <-   [ a ][ b ][ c ][ d ]   brush: v 400 A
  top:    200-> 200-> 200-> 200->
  mid:    200<- 200<-  ?    200-> 200->
  bot:    200<- 200<- 200<- 200-> 200-> 200->
```

[Check] The "L(di/dt)" line is cut by the figure ("inducti"). The middle diagram's "?" is the short-circuited coil whose current must reverse in the commutation interval; the L(di/dt) of that reversal is the reactance voltage that causes the sparking listed.

## Slide 34: Solutions to Problems with Commutation [HEDGE] [PARKED-Lec16+]

On-slide text:
Solutions to Problems with Commutation in Real Machines
- Brush shifting
- Commutating poles or interpoles
- Compensating windings

Diagram description: none. Three-bullet slide.

## Slide 35: Solutions, commutating poles / interpoles [HEDGE] [PARKED-Lec16+]

On-slide text:
Commutating poles or interpoles
- It cancels the voltage in the coils undergoing commutation
- interpole windings are in series with the rotor windings
- as the rotor current inceases flux produced by interpole also inceases
- producing an oppssing effect to that of neutral plan shift

[Check] "inceases", "inceases", "oppssing", "neutral plan" as printed (four typos on one slide).

Diagram description: DC machine with interpoles: N and S main poles, rotor with windings, segmented commutator with brushes (+/-), small interpole windings between the main poles in series with the rotor circuit, V_T source and I_A arrows (left at top and bottom), omega rotation arrow.

```text
        V_T
         |   I_A <--
   [ N pole ] [interpole] [ S pole ]
        rotor: windings, commutator, brushes (+,-)
         |   I_A <--
```

## Slide 36: Solutions, compensating windings [HEDGE] [PARKED-Lec16+] [DIAGRAM-CORE]

On-slide text:
Compensating winding
- Solves the problem of flux weakening and neutral plane shift
- Compensating windings are in series with the rotor windings
- placing in slots carved in the faces of the poles parallel to the rotor conductors

Diagram description: two figures. Top: pole-face close-up with dashed "Flux from compensating windings" cancelling solid "Rotor (armature) flux", N left, S right, omega arrow, slots in the pole faces holding conductors (dot/cross circles). Bottom: machine cross-section with vertical line labeled "Neutral plane not shifted with load" (MNA stays put under load), commutator and brushes at center, N left, S right, omega arrow.

```text
  top:  --- Flux from comp. windings (dashed)
        ___ Rotor (armature) flux (solid)
        pole face slots: |O|X|O| conductors
  bottom:  Neutral plane not shifted with load |
           N          |          S
              rotor + commutator + brushes
```

## Slide 37: DC Motor (section title) [D-OK]

On-slide text: "DC Motor" (slide number 37 bottom right).

Diagram description: none. Section divider between the generator block and the machine-equations block.

## Slide 38: The Internal Generated Voltage Equations Of Real Machines [D-OK] [PROVE-1]

On-slide text:
The induced voltage in any given machine depends on three factors:
- The flux Phi in the machine
- The speed omega of the machine's rotor
- A constant depending on the construction of the machine
[overlap line]: The voltage out of a real machine = the number of conductors per current path x the voltage on each conductor
Red line: the voltage equation in terms of rpm

Formula boxes (exact, from fragments):
Box 1: E_A = (ZP/(2*pi*a)) * (2*pi*r*l*B/P) * omega = (ZP/(2*pi*a)) * Phi * omega
Box 2: E_A = K * Phi * omega   with   K = ZP/(2*pi*a)
Box 3: E_A = K' * Phi * n      with   K' = ZP/(60*a)

```text
   E_A = (ZP/2pi a)(2 pi r l B/P) omega = (ZP/2 pi a) Phi omega
   E_A = K Phi omega        K = ZP/(2 pi a)
   E_A = K' Phi n           K' = ZP/(60 a)      <- rpm form
```

[Check] Box 1's flux term renders as "2*pi*rlB/P" in one read and "2*pi*rlb/P" in another (B/b case variance; Phi = 2 r l B is flux per pole for pole-arc 2r... as printed). Symbol variance across slides: A (slides 8-11) vs a (slides 38-39) for parallel paths. Both forms are the deck's own.

Visuals and layout: left column bullets, right column three light-blue formula boxes with red caption between boxes 2 and 3. Text blocks overlap slightly (rendering defect).

## Slide 39: The Induce Torque Equations Of Real Machines [D-OK] [PROVE-1]

On-slide text:
The torque in any dc machine depends on three factors:
- The flux Phi in the machine
- The armature (or rotor) current I_A in the machine
- A constant depending on the construction of the machine
Bottom (red after "="): The torque on the armature of a real machine = the number of conductors Z x the torque on each conductor

Formula boxes (exact):
Box 1: tau_ind = (ZP/(2*pi*a)) * Phi * I_A = K * Phi * I_A  with K = ZP/(2*pi*a)
Box 2: Z = 2 C N_c
Box 3: a = 2m for wave winding / a = mP for lap winding

```text
   tau_ind = (ZP/2 pi a) Phi I_A = K Phi I_A     K = ZP/(2 pi a)
   Z = 2 C N_c        (C coils, N_c turns each, 2 conductors/turn)
   a = 2m  wave winding     a = mP  lap winding   (m = plex)
```

[Check] One fragment read of the torque box answered "NO" / empty (vector unreadable in that pass) but the render read plus the other fragments give the full box; content above is 3-perspective consistent. Note "tau_ind" is the induced (developed) torque, the same quantity the notes call T_dev and A2's "developed torque".

## Slide 40: Power Flow and Losses in DC Machines (part 1) [D-OK]

On-slide text:
- Electrical or copper losses (I^2 R losses)
- Brush losses
- Core losses
- Mechanical losses
- Stray load losses
Copper losses: Armature loss: [P_A = I_A^2 R_A] / Field loss: [P_F = I_F^2 R_F]
Brush losses: [P_ED = V_ED I_A]
Core losses: the hysteresis losses and eddy current losses occurring in the metal of the motor. These losses vary as B^2 and, for the rotor, as the (n^1.5)

[Check] Subscript variance: brush-loss formula renders as P_ED = V_ED I_A in one read and P_BD = V_BD I_A in another (E vs B: brush-contact drop V_BD is the standard symbol). Loss list order here is the A2-Q20 taxonomy.

Diagram description: none (formula boxes).

## Slide 41: Power Flow and Losses in DC Machines (part 2) [D-OK]

On-slide text:
Mechanical losses
- Friction losses are losses caused by the friction of the bearings in the machine
- Windage losses are caused by the friction between the moving parts of the machine and the air inside the motor's casing
Stray losses
- Unknown losses
- By convention to be 1 percent of full load

[Check] "Stray losses" heading overlaps "casing" (rendering defect). The 1%-of-full-load stray convention is examinable (it makes efficiency problems closable).

Diagram description: none.

## Slide 42: The Power-Flow Diagram [D-OK] [DIAGRAM-CORE]

On-slide text:
The Power-Flow Diagram
Left: Power-flow diagrams for Generator / Right: Power-flow diagrams for Motor.

Diagram description: two power-flow bars (a) generator, (b) motor.
(a) Generator: input left P_in = tau_app*omega_m, horizontal flow, downward loss arrows in order: Stray losses, Mechanical losses, Core losses, I^2R losses; vertical marker P_conv with the conversion identity tau_ind*omega_m = E_A*I_A; output right P_out = V_T*I_L.
(b) Motor: input left P_in = V_T*I_L (with the same identity E_A*I_A = tau_ind*omega_m at the conversion line), downward arrows in order: I^2R losses, Core losses, Mechanical losses, Stray losses; output right P_out = tau_load*omega_m.

```text
  (a) GENERATOR
  P_in = tau_app*w_m ===> P_conv [tau_ind*w_m = E_A*I_A] ===> P_out = V_T*I_L
          |            |                |                |
        Stray       Mechanical        Core             I^2R    (down = losses)

  (b) MOTOR
  P_in = V_T*I_L ===> P_conv [E_A*I_A = tau_ind*w_m] ===> P_out = tau_load*w_m
          |            |                |                |
        I^2R         Core          Mechanical          Stray   (down = losses)
```

Note the loss ORDER mirrors between the two: generator subtracts mechanical-side losses before conversion and electrical-side after (reading left to right it is stray/mech/core/I2R), motor subtracts electrical-side first. The middle identity tau_ind*omega_m = E_A*I_A is P_conv in both.

---

End of deck. Check passes run: (1) slide-count headings 42/42 vs source; (2) 3-perspective number diff (XML text vs render reads vs fragment reads) on every slide with images; (3) re-read of slides 1-10 after the filename-collision fix (deck-qualified names); (4) math recompute spot checks at the study-notes layer (see reports/04-SOURCE-ERRATA-AND-TRAPS.md, which now includes E18 from slide 24 and the P_ED/P_BD + A/a + b/B symbol variances above). Formula recovery from vector panels (8-11, 38-39, 42 boxes) is the main delta versus a text-only extraction of this deck.
