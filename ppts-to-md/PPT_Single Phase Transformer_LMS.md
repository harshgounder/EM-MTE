# Single Phase Transformer

Source: `PPT_Single Phase Transformer_LMS.pptx`  
Course: Electrical Machines, ELC2104  
Slides: 48

## Slide 1: Title slide

**On-slide text**

- Single Phase Transformer
- Electrical machines, ELC2104

**Visuals and layout**

- Plain title slide with no embedded picture, diagram, chart, or decorative asset.
- The title introduces the single-phase-transformer module; the subtitle identifies the Electrical Machines course.

## Slide 2: References, textbooks, and video links

### Reference books

1. M. G. Say, *Alternating Current Machines*, 5th edition, ELBS.
2. E. H. Langsdorf, *Theory of Alternating Current Machine*, 2nd edition, TMH.
3. A. E. Clayton, *Performance and Design of DC Machines*, 3rd edition, O and IBH.

### Textbooks

1. P. S. Bhimbra, *Electrical Machinery*, 7th edition, 1995, Khanna Publishers.
2. I. J. Nagrath and D. P. Kothari, *Electric Machines*, 3rd edition, Tata McGraw-Hill Publishing Company Ltd.
3. A. E. Fitzgerald, Charles Kingsley Jr., and Stephen D. Umans, *Electric Machinery*, 5th edition, Tata McGraw-Hill.

### Video links

- https://www.youtube.com/watch?v=xvL4rYUM4kA&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=6
- https://www.youtube.com/watch?v=KAI4yJBASbc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=7
- https://www.youtube.com/watch?v=VdiocL2RAMc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=8
- https://www.youtube.com/watch?v=xT89C6CvqX8&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=9
- https://www.youtube.com/watch?v=K_S1e06FAKc&list=PLp6ek2hDcoNCANsWM2mw3qi0387BhfLyV&index=10

**Visuals and layout**

- Text-only reference slide organised into reference books, textbooks, and video links.

## Slide 3: Transformer

**On-slide text**

A transformer is a static device that transfers electrical energy from one circuit to another circuit without changing the frequency.

Transformers are used to:

- Step up generator voltage to an appropriate voltage level for power transfer.
- Step down transmission voltage at various levels for distribution and power utilisation.

**Diagram description**

The slide shows the role of two transformers in a power system. A generator at 11 kV feeds a step-up transformer. The transformer raises the voltage to 400 kV for a long transmission line. At the receiving end, a step-down transformer lowers the voltage before supply reaches loads.

```text
Generator          Step-up                 Long transmission line            Step-down            Loads
  G, 11 kV  ──── [ transformer ] ─────────────── 400 kV ─────────────── [ transformer ] ────> loads
```

**Why the diagram matters**

For a given transmitted power, increasing voltage lowers current. Lower current reduces line copper loss, \(I^2R\), and permits more efficient long-distance transmission.

## Slide 4: Principle of operation

**On-slide text**

- A simple transformer has a rectangular laminated magnetic structure carrying two coils with different numbers of turns.
- The winding supplied with AC voltage is the **primary** winding.
- The winding connected across the load is the **secondary** winding.

**Diagram description**

The diagram shows a laminated iron core with a primary winding, \(N_1\), on the left limb and a secondary winding, \(N_2\), on the right limb. A sinusoidal primary voltage \(V_1\) is applied across terminals 1 and 2. The resulting time-varying core flux, \(\phi(t)\), links both windings. A secondary voltage \(E_2\) appears across terminals 3 and 4 and supplies a load connected to the secondary.

```text
            laminated iron core, carrying alternating flux φ(t)
       ┌────────────────────────────────────────────────────┐
V₁~ ──┤  primary winding N₁        secondary winding N₂     ├── E₂~ ── load
       │       )))))                         (((((            │
       └────────────────────────────────────────────────────┘
```

**Waveform note**

The source image shows sinusoidal primary and secondary voltages. It states that the voltage level changes, while the frequency and period \(T\) remain the same.

## Slide 5: Transformer action

When an alternating voltage \(V_1\) is applied to the primary, it creates an alternating core flux \(\Phi\). This flux links both windings and induces emfs \(E_1\) and \(E_2\), according to Faraday's law of electromagnetic induction.

- \(E_1\) is the primary induced emf.
- \(E_2\) is the secondary induced emf.
- \(E_2\) drives secondary current \(I_2\) when a load is connected, producing terminal voltage \(V_2\).
- If \(V_2>V_1\), the transformer is step-up.
- If \(V_2<V_1\), the transformer is step-down.

**Diagram description**

The primary circuit at left has an AC source \(V_1\), primary current \(I_1\), and induced emf \(E_1\). It magnetically couples through the closed core to the secondary winding. The secondary circuit at right has induced emf \(E_2\), current \(I_2\), terminal voltage \(V_2\), and a resistive load. Dashed loops around the windings represent shared magnetic flux.

```text
primary circuit                         magnetic core                         secondary circuit
 V₁~ ── I₁ ── [ N₁ ]  ║════ alternating flux Φ ════║  [ N₂ ] ── I₂ ── load
              ↑ E₁                                           ↑ E₂, V₂
```

## Slide 6: Step-up and step-down action

The induced emfs depend on the turns numbers:

\[
E_1=-N_1\frac{d\Phi}{dt},\qquad E_2=-N_2\frac{d\Phi}{dt}
\]

\[
\frac{E_2}{E_1}=\frac{N_2}{N_1}
\]

If \(N_2>N_1\), then \(E_2>E_1\) and \(V_2>V_1\), giving a step-up transformer. If \(N_2<N_1\), the transformer is step-down. Connecting a load causes \(E_2\) to drive \(I_2\). A transformer transfers AC power between circuits while changing voltage level.

**Visual description:** continuation of the coupled-winding transformer diagram, showing that the turns ratio controls the voltage ratio.

## Slide 7: Transformer notes

- Transformer action follows electromagnetic-induction laws.
- Primary and secondary have no electrical connection.
- Input and output frequency are the same.
- DC supply cannot operate a transformer properly because mutual induction needs changing current and changing flux.
- DC may saturate the core and draw a very large primary current.

**Visuals:** text-only concept slide.

## Slide 8: Construction features

Power-transformer design uses:

1. A silicon-steel, laminated core. Silicon steel gives low hysteresis loss and high permeability. Laminations reduce eddy-current loss.
2. Half of each winding on each limb, improving coupling and reducing leakage flux.
3. Low-resistance windings, reducing copper loss, temperature rise, and efficiency loss.

**Picture description:** an exploded sketch of a laminated core. It labels one thin steel sheet as “single lamination” and the assembled stack as “laminated core”.

## Slide 9: Transformer classification

Transformers have two construction types:

- **Core type:** half of the primary and half of the secondary windings are placed on each limb, reducing leakage flux.
- **Shell type:** both windings occupy the central limb of a three-limb, double-magnetic-circuit core, giving a low-reluctance flux path.

```text
core type:  [ winding ] ║ core ║ [ winding ]
shell type: ║ core ║ [ both windings ] ║ core ║
```

**Picture description:** the core-type figure labels yoke, core, limb, flux, primary \(P\), and secondary \(S\), with the windings split across two limbs. A cutaway shows L.V. insulation and winding nearer the core, then H.V. insulation and winding outside it. The shell-type figure labels a centre limb, side limbs, flux paths, H.V. winding, L.V. winding, and the surrounding core.

## Slide 10: Core type and shell type comparison

| Core type | Shell type |
|---|---|
| Winding encircles the core | Core encircles most of the winding |
| Single magnetic circuit | Double magnetic circuit |
| Two limbs | Three limbs |
| Cylindrical coils | Multilayer disc or sandwich coils |
| Windings on two limbs, giving effective natural cooling | Windings surrounded by core, giving less natural cooling |
| Preferred for low-voltage transformers | Preferred for high-voltage transformers |

**Visuals:** text comparison slide with two labelled columns.

**Accuracy note:** the final row is reproduced from the slide. Standard machine-design references commonly use the opposite broad tendency: core-type construction is common at high voltage because it eases insulation, while shell-type construction is common at low voltage and high current. Design choices also depend on rating and manufacturer practice, so use the source row only when following this course deck’s convention.

## Slide 11: EMF equation of a transformer

An alternating primary voltage \(V_1\) of frequency \(f\) produces sinusoidal core flux \(\Phi\). The slide introduces the sinusoidal-flux waveform used to derive the induced-emf equation.

\[
\Phi=\Phi_m\sin\omega t
\]

The instantaneous primary induced emf is derived as:

\[
e_1=-N_1\frac{d\Phi}{dt}
=-N_1\frac{d}{dt}(\Phi_m\sin\omega t)
=-\omega N_1\Phi_m\cos\omega t
\]

\[
e_1=2\pi fN_1\Phi_m\sin(\omega t-90^\circ)
\]

Hence the maximum primary induced emf is:

\[
E_{m1}=2\pi fN_1\Phi_m
\]

**Visual description:** a derivation panel beginning with sinusoidal flux, ending at the maximum induced-emf expression. The primary induced emf is shown as lagging the flux by \(90^\circ\).

## Slide 12: EMF equation and voltage ratio

For sinusoidal flux:

\[
E_1=\frac{E_{m1}}{\sqrt2}=\frac{2\pi fN_1\Phi_m}{\sqrt2}=4.44fN_1\Phi_m
\]

Similarly:

\[
E_2=4.44fN_2\Phi_m
\]

Both \(E_1\) and \(E_2\) lag the flux by \(90^\circ\). For an ideal transformer, \(E_1=V_1\) and \(E_2=V_2\). The slide then introduces voltage transformation ratio:

\[
\frac{E_2}{E_1}=\frac{N_2}{N_1}
\]

**Visuals:** emf and flux waveforms or phasors, plus the voltage-ratio relation.

## Slide 13: Ideal transformer assumptions

An ideal transformer has no losses, zero winding resistance, zero leakage flux, and a core with sufficiently high permeability that negligible current establishes flux. Therefore \(V_1=E_1\), because the primary has no voltage drop.

## Slide 14: Ideal-transformer relations

For the ideal transformer:

\[
\frac{V_2}{V_1}=\frac{E_2}{E_1}=\frac{N_2}{N_1}=K
\]

and, from power balance,

\[
\frac{I_2}{I_1}=\frac{N_1}{N_2}=\frac1K
\]

The source explains that current is in the inverse ratio of the voltage transformation ratio: raising voltage produces a corresponding reduction in current.

**Diagram description:** ideal coupled windings with turns \(N_1\), \(N_2\), primary quantities \(V_1,I_1\), and secondary quantities \(V_2,I_2\).

## Slide 15: Ideal transformer on no load

At no load, \(I_2=0\). The primary current is only the small magnetising current \(I_m\), which lags \(V_1\) by \(90^\circ\) for a purely inductive winding. By Lenz's law, \(E_1\) and \(E_2\) oppose \(V_1\), are equal in magnitude to it, and are in phase with each other.

**Visuals:** no-load transformer circuit and phasor diagram showing \(V_1\), \(I_m\), \(E_1\), and \(E_2\).

## Slide 16: Ideal transformer on load

A load impedance \(Z_L\) is connected across the secondary. The induced secondary emf produces load current:

\[
I_2=\frac{E_2}{Z_L}
\]

The angle by which \(I_2\) leads or lags \(V_2\), or \(E_2\), depends on load resistance and reactance. The source considers inductive load, in which \(I_2\) lags \(E_2\) by \(\phi_2\).

The secondary mmf \(N_2I_2\) opposes the original primary magnetising mmf. The primary therefore draws additional current \(I'_2=K I_2\) to neutralise the secondary demagnetising effect and keep the mutual flux constant.

**Diagram description:** ideal transformer with primary current \(I_1=K I_2\), turns ratio \(K=N_2/N_1\), secondary current \(I_2\), induced emfs \(E_1,E_2\), and load \(Z_L\).

## Slide 17: Ideal transformer on load, current phasors

The secondary current \(I_2\) lags the secondary voltage \(V_2\), or induced emf \(E_2\), by the load power-factor angle \(\phi_2\). It produces a primary load component:

\[
I_1=K I_2
\]

For \(K=1\), \(I_1=I_2\) in magnitude. The two current phasors are in antiphase, so their ampere-turn effects oppose each other.

The ideal-transformer phasors give equal primary and secondary power factors:

\[
\phi_1=\phi_2,\qquad \cos\phi_1=\cos\phi_2
\]

With no losses, input and output powers are equal:

\[
V_1I_1\cos\phi_1=V_2I_2\cos\phi_2
\]

**Phasor diagram description**

- \(V_1\) is vertical upward and \(E_2=V_2\) is vertical downward.
- \(I_2\) is drawn down-left, lagging \(V_2\) by \(\phi_2\).
- \(I_1\) is drawn up-right, exactly opposite \(I_2\).

```text
              V₁
              ↑       I₁
              │      ↗
              O ─────────→ reference
            ↙  │
          I₂   ↓ E₂ = V₂
```

## Slide 18: Practical transformer

A practical transformer differs from an ideal transformer because it has:

1. iron losses,
2. winding resistances, and
3. magnetic leakage, which produces leakage reactance.

**Iron losses.** Alternating core flux causes hysteresis loss and eddy-current loss.

**Winding resistances.** The copper primary and secondary windings have series resistances \(R_1\) and \(R_2\).

**Leakage reactance.** The useful mutual flux links both windings. Some primary and secondary leakage flux does not link the other winding. This leakage is represented by series reactances \(X_1\) and \(X_2\).

**Accuracy note:** the source wording says flux that fails to link the other winding is “mutual flux”. That label is reversed. It is leakage flux; mutual flux is the useful part that links both windings.

**Circuit diagram description**

```text
V₁ ─ R₁ ─ jX₁ ─ [ primary N₁ ║ magnetic core ║ secondary N₂ ] ─ jX₂ ─ R₂ ─ V₂
                    E₁                         E₂
```

The source diagram shows dashed closed paths for the useful mutual flux in the core and local leakage-flux loops around each winding.

It labels those local paths \(\phi_{L1}\) for primary leakage and \(\phi_{L2}\) for secondary leakage.

## Slide 19: Practical transformer on no load

With the secondary open, the primary draws a small no-load current \(I_0\). It supplies:

1. iron loss, and
2. a very small primary copper loss.

Therefore \(I_0\) does not lag the applied voltage \(V_1\) by exactly \(90^\circ\). It lags by \(\phi_0<90^\circ\), and may be resolved into:

- the working, or core-loss, component \(I_w\), in phase with \(V_1\);
- the magnetising component \(I_m\), approximately \(90^\circ\) behind \(V_1\).

\[
I_0=I_w-jI_m
\]

**Circuit diagram description**

The diagram has the primary connected to \(V_1\), carrying \(I_0\) and counter emf \(E_1\). The secondary is open, so no secondary current flows; nevertheless \(E_2\) and the open-circuit voltage \(V_2\) are present.

## Slide 20: Practical transformer on no load, voltage relations

At no load, no current flows in the secondary, therefore:

\[
V_2=E_2
\]

On the primary side, drops in \(R_1\) and \(X_1\) due to the small current \(I_0\) are very small. Hence, at no load:

\[
V_1\approx E_1
\]

The magnetising component lags \(V_1\) by \(90^\circ\):

\[
I_m=I_0\sin\phi_0
\]

Together with \(I_w=I_0\cos\phi_0\):

\[
I_0=\sqrt{I_m^2+I_w^2},\qquad \cos\phi_0=\frac{I_w}{I_0}
\]

Since no-load primary copper loss is very small, no-load input power is practically iron loss:

\[
W_0\approx P_i
\]

**Visual:** phasor construction for \(I_0\), a derivation for \(I_m\), \(I_0\), and \(\cos\phi_0\), plus the no-load voltage note.

## Slide 21: Practical transformer on load, ampere-turn balance

When the secondary carries load current \(I_2\), its ampere-turns oppose the primary flux. The additional primary load-current component \(I'_2\) balances them:

\[
N_1 I'_2=N_2 I_2
\]

\[
\lvert I'_2\rvert=\frac{N_2}{N_1}\lvert I_2\rvert=K\lvert I_2\rvert
\]

The referred current is opposite the secondary-current phasor:

\[
I'_2=-K I_2
\]

The total primary current is the phasor sum:

\[
I_1=I'_2+I_0
\]

The practical-transformer terminal relations shown are:

\[
V_1=-E_1+I_1(R_1+jX_1)=-E_1+I_1Z_1
\]

\[
V_2=E_2-I_2(R_2+jX_2)=E_2-I_2Z_2
\]

**Visual:** practical transformer circuit with \(I_1=I'_2+I_0\), plus the current and voltage equations. The prime on \(I'_2\) identifies the secondary-current component referred to the primary side.

## Slide 22: Practical transformer on load, phasor construction

The counter emf opposing the applied voltage is \(-E_1\). Starting from \(-E_1\), add the primary drops:

- \(I_1R_1\), in phase with \(I_1\);
- \(I_1X_1\), \(90^\circ\) ahead of \(I_1\).

Their vector sum gives the applied primary voltage \(V_1\). On the secondary, \(E_2\) is induced by mutual flux. Subtract \(I_2R_2\) and \(I_2X_2\) from \(E_2\) to obtain the terminal voltage \(V_2\).

\[
V_1=-E_1+I_1R_1+jI_1X_1
\]

\[
V_2=E_2-I_2R_2-jI_2X_2
\]

The load power factor is \(\cos\phi_2\). The primary power factor is \(\cos\phi_1\), and the input and output powers are:

\[
P_1=V_1I_1\cos\phi_1,\qquad P_2=V_2I_2\cos\phi_2
\]

**Phasor diagram description:** \(I_0\) and \(I'_2\) combine vectorially to form \(I_1\). The diagram separately builds \(V_1\) from \(-E_1\) and primary drops, and builds \(V_2\) by subtracting secondary drops from \(E_2\).

## Slide 23: Impedance ratio

Consider a transformer with secondary load impedance \(Z_2\). The source circuit shows primary voltage \(V_1\), current \(I_1\), turns \(N_1\), and a secondary with turns \(N_2\), current \(I_2\), voltage \(V_2\), and load \(Z_2\).

```text
 V₁, I₁                  ideal transformer                 V₂, I₂
 ┌───[ N₁ ]──────────────────║ ║──────────────────[ N₂ ]─────── Z₂ ─┐
 └───────────────────────────────────────────────────────────────────┘
```

For an ideal transformer with \(K=N_2/N_1\), the impedance seen from the primary is:

\[
Z'_2=\frac{Z_2}{K^2}
\]

Thus an impedance is transferred across the transformer by the square of the voltage or turns ratio.

Equivalently, with \(Z_1=V_1/I_1\) and \(Z_2=V_2/I_2\):

\[
\frac{Z_2}{Z_1}=\left(\frac{V_2}{V_1}\right)\left(\frac{I_1}{I_2}\right)=K^2
\]

## Slide 24: Equivalent-circuit voltage equation

The practical-transformer equivalent circuit labels:

- \(R_1\): primary winding resistance;
- \(R_2\): secondary winding resistance;
- \(X_1\): primary leakage reactance;
- \(X_2\): secondary leakage reactance;
- \(R_0\): core-loss resistance, representing hysteresis and eddy-current loss;
- \(X_0\): magnetising reactance;
- \(I_m\): magnetising current creating core flux;
- \(I_w\): active current supplying core loss;
- \(I_0\): no-load primary current.

The primary and secondary terminal-voltage relations are:

\[
V_1=-E_1+I_1(R_1+jX_1)=-E_1+I_1Z_1
\]

\[
V_2=E_2-I_2(R_2+jX_2)=E_2-I_2Z_2
\]

Here \(R_2\) is secondary winding resistance, \(X_2\) is secondary leakage reactance, and \(Z_2=R_2+jX_2\) is the secondary series impedance.

**Circuit diagram description:** the exact equivalent circuit has the excitation branch \(R_0\parallel jX_0\) across the induced primary emf, primary series impedance \(R_1+jX_1\), an ideal transformer, and secondary series impedance \(R_2+jX_2\). Boxed equations appear below the circuit.

## Slide 25: Simplified equivalent circuit of a loaded transformer

If \(I_0\) is small compared with rated primary current \(I_1\), voltage drops in \(R_1\) and \(X_1\) caused by \(I_0\) are negligible. The exact equivalent circuit can then place the shunt excitation branch directly across the input terminals.

```text
              ┌── R₀ ──┐
V₁ ───────────┤        ├── R₁ ─ jX₁ ─ [ ideal transformer ] ─ R₂ ─ jX₂ ─ ZL
              └── jX₀ ─┘
                   I₀
```

- \(R_0\) represents core-loss current.
- \(X_0\) represents magnetising reactance.
- \(R_1,X_1,R_2,X_2\) remain the winding resistance and leakage reactance terms.

## Slide 26: Simplified circuit referred to the primary

If all secondary quantities are referred to the primary, the source gives:

\[
R'_2=\frac{R_2}{K^2},\qquad X'_2=\frac{X_2}{K^2},\qquad Z'_L=\frac{Z_L}{K^2}
\]

\[
V'_2=\frac{V_2}{K},\qquad I'_2=K I_2
\]

The primary-referred series terms are:

\[
R_{01}=R_1+R'_2,\qquad X_{01}=X_1+X'_2,\qquad Z_{01}=R_{01}+jX_{01}
\]

**Circuit diagram description:** the source shows the exact simplified circuit and the primary-referred circuit, where the ideal transformer is removed after referring \(R_2,X_2,Z_L,V_2,I_2\) to the primary side.

## Slide 27: Simplified circuit referred to the secondary

If all primary quantities are referred to the secondary, the source gives:

\[
R'_1=K^2R_1,\qquad X'_1=K^2X_1
\]

\[
V'_1=K V_1,\qquad I'_1=\frac{I_1}{K}
\]

The secondary-referred series terms are:

\[
R_{02}=R_2+R'_1,\qquad X_{02}=X_2+X'_1,\qquad Z_{02}=R_{02}+jX_{02}
\]

**Circuit diagram description:** the source shows the exact simplified circuit and the secondary-referred circuit, where the ideal transformer is removed after referring primary quantities to the secondary side.

## Slide 28: Approximate equivalent circuit of a loaded transformer

The no-load current \(I_0\) is only 1 to 3 percent of rated primary current, so it may be neglected without serious error. With all primary quantities referred to the secondary, the source shows one series circuit:

```text
V′₁ = K V₁ ─ R′₁ = K²R₁ ─ jX′₁ = jK²X₁ ─ R₂ ─ jX₂ ─ ZL
              I′₁ = I₁/K = I₂                         V₂
```

This approximation removes the shunt excitation branch and retains the series winding impedances and load.

**Picture description:** three circuits appear: the approximate circuit retaining the ideal transformer, the all-secondary-referred series circuit, and the all-primary-referred series circuit.

## Slide 29: Approximate voltage drop in a transformer

At no load, secondary voltage is \(K V_1\). At lagging power factor \(\cos\phi_2\), load current \(I_2\) produces drops in the total resistance and reactance referred to the secondary:

\[
V_2=K V_1-I_2\left[(R_2+K^2R_1)+j(X_2+K^2X_1)\right]
\]

Define:

\[
R_{02}=R_2+K^2R_1,\qquad X_{02}=X_2+K^2X_1,\qquad Z_{02}=R_{02}+jX_{02}
\]

Then:

\[
K V_1-V_2=I_2Z_{02}
\]

**Visual:** a boxed derivation ending with the secondary voltage-drop relation.

## Slide 30: Practical transformer on load, approximate drop

From the phasor diagram, the approximate secondary voltage drop is:

\[
\text{approximate voltage drop}=I_2R_{02}\cos\phi_2+I_2X_{02}\sin\phi_2
\]

This form applies to a lagging-power-factor load. The resistance drop is projected along the voltage axis by \(\cos\phi_2\); the reactance drop is projected by \(\sin\phi_2\).

For a leading-power-factor load, the source gives:

\[
\text{approximate voltage drop}=I_2R_{02}\cos\phi_2-I_2X_{02}\sin\phi_2
\]

**Phasor diagram description:** the construction labels \(K V_1\), \(V_2\), \(I_2Z_{02}\), and the resistance and reactance components. It also identifies the projected segments used to form the approximate drop.

**Visual:** a boxed equation containing this approximation.

## Slide 31: Voltage regulation

Transformer voltage regulation is the arithmetic, not phasor, difference between no-load secondary voltage \({}^0V_2\) and loaded secondary voltage \(V_2\), expressed as a percentage of no-load voltage:

\[
\%\text{ voltage regulation}=\frac{{}^0V_2-V_2}{{}^0V_2}\times100
\]

where \({}^0V_2=K V_1\).

The phasor drop relation displayed is:

\[
{}^0V_2-V_2=I_2R_{02}\cos\phi_2\pm I_2X_{02}\sin\phi_2
\]

Use \(+\) for lagging power factor and \(-\) for leading power factor.

- Regulation is positive for lagging power factor.
- Regulation is negative for leading power factor.

**Convention note:** this deck divides by no-load voltage. Many textbooks instead define percentage regulation as \(({}^0V_2-V_2)/V_2\times100\), using full-load terminal voltage in the denominator. State the chosen convention in an exam answer, because the numerical percentages differ slightly.

**Visual:** a boxed regulation formula.

## Slide 32: Losses in a transformer

Transformer power losses are:

1. core, or iron, losses;
2. copper losses.

They appear as heat, increasing temperature and reducing efficiency.

Core loss \(P_i\) consists of hysteresis and eddy-current loss due to alternating flux. Both depend on maximum core flux density \(B_m\) and supply frequency \(f\):

\[
P_h=k_h f B_m^{1.6}\quad \text{W/m}^3
\]

\[
P_e=k_e f^2 B_m^2t^2\quad \text{W/m}^3
\]

where \(t\) is lamination thickness in the eddy-current-loss expression.

**Visual:** a boxed pair of hysteresis- and eddy-current-loss formulae.

## Slide 33: Copper loss and total loss

Copper loss \(P_C\) occurs in the primary and secondary windings because of their ohmic resistances. It can be determined by the short-circuit test.

\[
P_C=I_1^2R_1+I_2^2R_2
\]

When all quantities are referred to one side:

\[
P_C=I_1^2R_{01}=I_2^2R_{02}
\]

Total transformer loss is:

\[
P_{\text{loss}}=P_i+P_C
\]

Because a transformer normally operates at constant supply voltage and frequency, \(B_m\) and \(f\) are effectively constant. Therefore iron loss is practically the same at all loads.

**Visual:** a boxed summary: \(P_i=\) hysteresis loss + eddy-current loss = constant losses.

## Slide 34: Efficiency

Transformer efficiency is the ratio of output power to input power, using watts or kilowatts:

\[
\eta=\frac{\text{output power}}{\text{input power}}
\]

Equivalently:

\[
\eta=\frac{\text{output}}{\text{output}+\text{losses}}
\]

In practice, open-circuit and short-circuit tests are used to determine efficiency without directly loading the transformer.

**Visual:** a compact fraction labelled “Efficiency”.

## Slide 35: Condition for maximum efficiency

For a secondary-referred total resistance \(R_{02}\):

\[
P_{\text{out}}=V_2I_2\cos\phi_2
\]

\[
P_C=I_2^2R_{02}
\]

\[
\eta=\frac{V_2I_2\cos\phi_2}{V_2I_2\cos\phi_2+P_i+I_2^2R_{02}}
\]

For a given power factor, differentiating with respect to load current yields the condition:

\[
P_i=I_2^2R_{02}=P_C
\]

So maximum efficiency occurs when iron loss equals copper loss.

**Visual:** a derivation panel beginning with output power and efficiency, differentiating the denominator with respect to \(I_2\), and ending at \(P_i=I_2^2R_{02}\).

## Slide 36: Output kVA at maximum efficiency

Let:

- \(P_C\) be full-load copper loss,
- \(P_i\) be iron loss,
- \(x\) be the fraction of full-load kVA at which efficiency is maximum.

Then copper loss at this loading is \(x^2P_C\). At maximum efficiency:

\[
x^2P_C=P_i
\]

\[
x=\sqrt{\frac{P_i}{P_C}}=\sqrt{\frac{\text{iron loss}}{\text{full-load copper loss}}}
\]

The secondary current at maximum efficiency is:

\[
I_2=\sqrt{\frac{P_i}{R_{02}}}
\]

Therefore:

\[
\text{output kVA at maximum efficiency}=
\text{full-load kVA}\sqrt{\frac{\text{iron loss}}{\text{full-load copper loss}}}
\]

**Visual:** a calculation panel defining \(P_C\), \(P_i\), and \(x\), then deriving the full-load-kVA fraction for maximum efficiency.

## Slide 37: Transformer test, open-circuit test

The open-circuit test determines:

- iron, or core, loss;
- shunt-branch parameters \(R_0\) and \(X_0\).

Rated voltage is applied to the primary, usually the low-voltage winding, and the secondary is left open. Since normal rated voltage is applied, normal iron loss occurs. Primary copper loss at no load is negligible compared with iron loss.

Using the measured open-circuit values \(V_1,I_0,W_0\):

\[
\cos\phi_0=\frac{W_0}{V_1I_0},\qquad I_w=I_0\cos\phi_0,\qquad I_m=I_0\sin\phi_0
\]

\[
R_0=\frac{V_1}{I_w},\qquad X_0=\frac{V_1}{I_m}
\]

The test-circuit readings are: iron loss \(P_i\) equals wattmeter reading \(W_0\), no-load current equals ammeter reading \(I_0\), applied voltage equals voltmeter reading \(V_1\), and input power is \(W_0=V_1I_0\cos\phi_0\).

**Circuit diagram description:** rated voltage is applied to the L.V. winding through an ammeter and wattmeter, while the H.V. winding is open. The equivalent shunt branch \(R_0\parallel jX_0\) appears beside the test circuit.

## Slide 38: Transformer test, short-circuit test

The short-circuit test determines:

- full-load copper loss;
- equivalent resistance \(R_{01}\) or \(R_{02}\), and equivalent reactance \(X_{01}\) or \(X_{02}\).

The secondary, usually the low-voltage winding, is short-circuited with a thick conductor. A variable low voltage is applied to the primary and raised until \(V_{SC}\) produces full-load primary current \(I_1\). The secondary current then also has its full-load value. Copper loss is therefore the full-load copper loss.

\[
P_C=I_1^2R_1+I_2^2R_2=I_1^2R_{01}
\]

\[
R_{01}=\frac{P_C}{I_1^2}
\]

The readings are: full-load copper loss equals wattmeter reading \(W_S\), applied voltage equals voltmeter reading \(V_{SC}\), and full-load primary current equals ammeter reading \(I_1\).

**Visual:** a short-circuit test circuit with instruments, together with a boxed copper-loss expression.

## Slide 39: Transformer test, short-circuit circuit

The slide diagrams the short-circuit-test arrangement.

```text
variable low-voltage source VSC ─ wattmeter WS ─ ammeter A ─ HV winding
                                                        ║║ transformer ║║
                                                LV winding short-circuited
```

The associated secondary-referred series equivalent circuit is:

```text
VSC ─ R01 = R₁ + R′₂ ─ jX01 = j(X₁ + X′₂) ─ current I₁
```

The image labels the high-voltage winding “H.V.” and the low-voltage winding “L.V.”. It shows the low-voltage side directly shorted and the test instruments on the energised high-voltage side.

The source further gives:

\[
Z_{01}=\frac{V_{SC}}{I_1},\qquad X_{01}=\sqrt{Z_{01}^{2}-R_{01}^{2}},\qquad \cos\phi_{SC}=\frac{P_C}{V_{SC}I_1}
\]

## Slide 40: Parallel operation of single-phase transformers

Using several smaller transformers in parallel can be more economical than installing one larger power transformer. For satisfactory parallel operation, transformers must have:

1. the same polarity;
2. the same voltage ratio;
3. the same percentage impedance;
4. the same phase sequence for three-phase transformers.

**Visuals and layout:** text-only slide headed “Parallel operation of Single phase Transformer”, followed by the four conditions.

**Accuracy note:** phase sequence does not apply to a single-phase pair. For proportional load sharing, equal voltage ratio and compatible percentage impedance are necessary; matching impedance angle, or X/R ratio, is also normally required so the transformers carry compatible power factors.

## Slide 41: Parallel transformers, setup equations

For two transformers A and B in parallel:

- \(a_1,a_2\): turns ratios of A and B;
- \(Z_A,Z_B\): equivalent impedances, referred to the secondary;
- \(Z_L\): load impedance;
- \(I_A,I_B\): secondary currents supplied by A and B;
- \(V_L\): secondary load voltage;
- \(I_L\): load current.

Kirchhoff’s current law gives:

\[
I_L=I_A+I_B
\]

**Circuit diagram description:** transformers A and B share a common primary supply \(V_1\). Their secondary emfs \(V_1/a_1\) and \(V_1/a_2\) feed a common load \(Z_L\) through secondary-referred internal impedances \(Z_A\) and \(Z_B\). Their branch currents \(I_A\) and \(I_B\) join as load current \(I_L\), and the common secondary voltage is \(V_L\).

The secondary voltage from each transformer is:

\[
V_L=\frac{V_1}{a_1}-I_AZ_A
\]

\[
V_L=\frac{V_1}{a_2}-I_BZ_B
\]

Substituting \(I_B=I_L-I_A\) also gives:

\[
V_L=\frac{V_1}{a_2}-(I_L-I_A)Z_B
\]

**Visual:** two displayed voltage equations, labelled (2) and (3) in the source.

## Slide 42: Parallel transformers, load sharing and circulating current

Solving the circuit equations gives:

\[
I_A=\frac{Z_BI_L}{Z_A+Z_B}+\frac{V_1(a_2-a_1)}{a_1a_2(Z_A+Z_B)}
\]

\[
I_B=\frac{Z_AI_L}{Z_A+Z_B}+\frac{V_1(a_2-a_1)}{a_1a_2(Z_A+Z_B)}
\]

The source image prints a plus sign in both displayed equations. That cannot satisfy \(I_L=I_A+I_B\) when \(a_1\ne a_2\). The physically consistent result has the opposite circulating-current direction in B:

\[
I_B=\frac{Z_AI_L}{Z_A+Z_B}-\frac{V_1(a_2-a_1)}{a_1a_2(Z_A+Z_B)}
\]

Each current has a load-sharing component and a circulating-current component. The source identifies the second component as circulating current in the secondary windings.

Undesirable effects of circulating current:

- it increases copper loss;
- it may overload one transformer and reduce permissible load kVA.

**Visual:** a pair of equations labelled (5) and (6).

## Slide 43: Equal voltage ratio

To eliminate circulating current, voltage ratios must be identical:

\[
a_1=a_2
\]

The individual load-sharing currents then reduce to:

\[
I_A=\frac{Z_BI_L}{Z_A+Z_B},\qquad I_B=\frac{Z_AI_L}{Z_A+Z_B}
\]

Under this condition, transformer currents are inversely proportional to transformer impedances:

\[
\frac{I_A}{I_B}=\frac{Z_B}{Z_A}
\]

For efficient parallel operation, the full-load voltage drops across the transformers’ internal impedances must be equal.

**Visual:** the boxed current-ratio relation, labelled equation (9).

## Slide 44: kVA sharing in parallel operation

The slide gives total load \(S_L\) sharing as:

\[
S_L=V_LI_L,\qquad S_A=V_LI_A,\qquad S_B=V_LI_B
\]

\[
S_A=\frac{Z_B}{Z_A+Z_B}S_L
\]

\[
S_B=\frac{Z_A}{Z_A+Z_B}S_L
\]

Thus the volt-ampere load on each transformer is inversely proportional to its impedance. To share load in proportion to their ratings, the transformer impedances must be inversely proportional to their ratings.

\[
\frac{S_A}{S_B}=\frac{Z_B}{Z_A}
\]

**Accuracy note:** the slide writes \(S=VI\) as a scalar VA relation. For complex phasors, complex power is \(S=VI^*\), and apparent power is \(\lvert V\rvert\lvert I\rvert\). The stated kVA-sharing ratio applies directly when the transformer impedances have compatible angles, so their branch power factors match.

**Visual:** two boxed kVA-sharing equations, labelled (11) and (12).

## Slide 45: Examples

1. A 10 kVA, 2000/400 V single-phase transformer at no load has \(R_1=5.5\ \Omega\), \(X_1=12\ \Omega\), \(R_2=0.2\ \Omega\), and \(X_2=0.45\ \Omega\). Determine the approximate secondary voltage at full load, 0.8 power factor lagging, when primary applied voltage is 2000 V.

2. Calculate the regulation of a transformer in which ohmic loss is 1% of output and reactance drop is 5% of voltage when power factor is: (a) 0.8 lagging, (b) unity, (c) 0.8 leading.

3. In a 50 kVA, 11 kV/400 V transformer, iron and copper losses are 500 W and 600 W respectively under rated conditions. Calculate full-load efficiency at unity power factor. Find the load for maximum efficiency and the iron and copper losses at that load.

4. A transformer rated 200/50 V, 10 kVA has core loss of 100 W. What is its maximum efficiency at 0.8 lagging power factor? Assume full-load copper loss is 200 W. At what load is this maximum efficiency obtained?

**Visuals and layout:** text-only worked-problem prompt slide.

## Slide 46: Examples, test data and parallel operation

5. Open-circuit and short-circuit tests on a 5 kVA, 250/500 V transformer give:

| Test | Voltage | Current | Power |
|---|---:|---:|---:|
| Open-circuit test, LV | 250 V | 1 A | 80 W |
| Short-circuit test, HV | 20 V | 12 A | 100 W |

Determine the circuit constants. Calculate efficiency and voltage regulation at full load and 0.9 power factor lagging.

6. A single-phase transformer test result is: rating 100 kVA, 11 kV/220 V, 50 Hz.

| Test | Voltage | Current | Power |
|---|---:|---:|---:|
| Open-circuit test, LV | 220 V | 45 A | 2 kW |
| Short-circuit test, HV | 500 V | 9.09 A | 3 kW |

Determine the equivalent-circuit parameters referred to the LV side.

7. Two single-phase transformers with equal turns have secondary-referred impedances \((0.5+j3)\ \Omega\) and \((0.6+j10)\ \Omega\). If they operate in parallel, determine how they share a total load of 100 kW at 0.8 power factor lagging.

**Visuals and layout:** text-only problem slide with aligned test-data rows.

**Data check for problem 5:** a 5 kVA, 250/500 V transformer has rated HV current \(5000/500=10\ \text{A}\), but the slide’s short-circuit row gives 12 A. If the test current really is 12 A, scale the measured copper loss to full-load current by \((10/12)^2\). If the problem expects the common shortcut that short-circuit-test current equals rated current, the “12 A” entry is likely an error and should be confirmed with the instructor.

## Slide 47: Lecture-series outcome

> Explain the construction, operating principles, equivalent circuits, voltage regulation, and parallel operation of single-phase and three-phase transformers.

**Visuals and layout:** text-only outcome slide, with the statement shown as a quotation.

## Slide 48: Course outcomes mapping with CO1 and CO2

**On-slide text**

- COURSE OUTCOMES MAPPING WITH CO1 & CO2

**Picture description**

The slide uses a decorative stock photograph of white jigsaw-puzzle pieces, with one glossy red puzzle piece fitted prominently in the centre. No other readable mapping table, labels, or course-outcome detail is present in the embedded slide content.
