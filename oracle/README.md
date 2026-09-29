# em-mte-oracle

Exam-targeted notes and build pipeline for ELC 2104, generated from the source material in the repo root. Original copy of this project lives at `~/em-mte-oracle`.

## Layout

| Path | What it is |
|---|---|
| `NOTES-PLAN.md` | The build plan: one note file per subtopic, questions embedded as worked examples, diagram checklist per file |
| `reports/` | Analysis pass that drove the notes |
| `reports/01-QUESTION-CENSUS.md` | Which questions exist plus demand tags |
| `reports/02-TOPIC-TREE.md` | Cases and methods per leaf topic, diagram inventory |
| `reports/03-FORMULA-LAEDER.md` | Formulas, derivation chains, corollaries |
| `reports/04-SOURCE-ERRATA-AND-TRAPS.md` | 18 source errors and convention traps found in the slides |
| `reports/05-WORKED-EXAMPLES.md` | 28 worked problems with verified answers |
| `notes/` | 38 finished outputs: 25 topic notes, LaTeX sources, PDFs, PPTX, QA logs |
| `work/` | Build scratch: the JS/TS deck builders, extracted slide images, OCR text, QA JSON |
| `work/decks/` | Deck builder sources |
| `work/n01-build/` | `build-n01.js`, its QA JSONs, rendered slide JPGs |
| `work/ppt-img/` | Images pulled out of the PPTX decks, per deck, with OCR text |

## Rebuilding N01

```
cd work/n01-build
npm install
node build-n01.js
```

`node_modules/` is not in this repo. `package.json` and `package-lock.json` are, so the install is pinned and reproducible. The dependency is `pptxgenjs`.

## Note on `work/ppt-img`

The `emf` and `png` files under `work/ppt-img` are images extracted from the source decks, named by the slide they came from. Several are byte-identical across slides because the same diagram is reused on more than one slide. Those repeats are left in place because the naming ties each file back to its slide.
