# Overlap audit

Recorded when `~/em-mte-oracle` was merged into this repo as `oracle/`, so the merge is auditable later.

## What was compared

Every file in both source folders was hashed with sha256. `~/EM-MTE` (85 tracked files, including the hidden `.directory`) against `~/em-mte-oracle` (740 files on disk).

## Result

**Zero cross-folder overlap.** Not one file in `oracle/` is byte-identical to any file in the repo root. The two projects share a topic, not a file.

## Duplicates that do exist, and why they were kept

All 18 duplicate hash groups live entirely inside `em-mte-oracle`, none cross the boundary.

| Group | Count | What it is | Kept because |
|---|---|---|---|
| `work/ppt-img/**` images | 15 | The same diagram extracted from two different slides, so `s12_image14_*.emf` and `s18_image14_*.emf` hash the same | Filenames encode which slide each came from. Dropping one breaks the slide-to-file mapping. |
| `work/ppt-img/ocr/*.txt` | 3 | OCR text for those same reused images, same reason | Same |
| `notes/N01-*.pdf` vs `work/n01-build/N01-*.pdf` | 1 | The finished N01 PDF and the build output it was copied from | `notes/` is the published set, `work/` is the build set. They are meant to match, and that is how you tell the build did not drift. |
| `notes/SP-05-*.aux` vs `notes/TP-01-*.aux` | 1 | Two LaTeX aux files that came out identical | LaTeX scratch. Left as produced rather than hand-edited. |
| empty OCR text files | 1 group | OCR produced no text, so the file is 0 bytes | Kept so the slide still has a file at its expected path. |

None of these are copies of repo-root material, and none were deleted.

## What was left out

`oracle/work/n01-build/node_modules/` only: 350 files, 7.6MB of vendored `pptxgenjs` and its transitive dependencies.

Reason: it is third-party code restored by `npm install`, not work product. `package.json` and `package-lock.json` are both committed, so the install is pinned and `node build-n01.js` reproduces the same PDF. Nothing under `~/em-mte-oracle` was deleted or modified. Only the copy inside the repo omits it.

The `.gitignore` at the repo root covers it.

## Counts

| | |
|---|---|
| Files in `~/em-mte-oracle` | 740 |
| Of those, in `node_modules` | 350 |
| Copied into `oracle/` | 390 |
| Copy verified byte-identical to source | 390 / 390 |
| Cross-folder byte-identical duplicates | 0 |
| Repo files after merge | 474 |
