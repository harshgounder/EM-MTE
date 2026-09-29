# EM MTE

Study material for the Electrical Machines (ELC 2104) course: syllabus, lecture slides, handwritten notes, assignments, course handout, plus the `oracle/` project that turns all of it into exam-targeted notes.

## Source material (repo root)

| Path | What it is |
|---|---|
| `EM-mte-syllabus.md` | Topic list for the MTE exam |
| `Course Handout_ELC2104_july2026.pdf` | Official course handout (5 pages, July 2026 generation) |
| `PPT_DC Machine_LMS.pptx` | Lecture slides, DC machines |
| `PPT_Single Phase Transformer_LMS.pptx` | Lecture slides, single phase transformer |
| `PPT_Three Phase Transformer_LMS.pptx` | Lecture slides, three phase transformer |
| `ppts-to-md/` | Markdown conversion of the three slide decks |
| `notes-pics/` | 36 handwritten note images |
| `notes-pics-md/` | Markdown transcription of each note image, same filenames |
| `ELC2104_Assignment1_Transformers.md` | Assignment I, transformers |
| `ELC2104_Assignment2_DCMachines.md` | Assignment II, DC machines |
| `DEDUPE-LOG.txt` | Record of duplicate file removal across the home directory |

The original slide decks are kept alongside their markdown conversions on purpose, so the `.pptx` files stay the source of truth.

## Generated notes (`oracle/`)

`oracle/` is the exam notes build: the analysis reports, the finished topic notes as PDF, PPTX and LaTeX, and the JS/TS builders that produce them from the decks above. See [`oracle/README.md`](oracle/README.md).

Nothing in `oracle/` duplicates anything at the repo root, verified by sha256. The reasoning is written up in [`OVERLAP-AUDIT.md`](OVERLAP-AUDIT.md).

## Notes on this repo

- `.directory` is a KDE folder icon setting that was already in the source folder. It is committed because nothing was left out.
- `node_modules` is excluded via `.gitignore`. `package.json` and `package-lock.json` are committed, so `npm install` restores it pinned.
