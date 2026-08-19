# UI-Venus-2.0 Project Page

Static project page for the **UI-Venus-2.0 Technical Report** (Venus Team, Ant Group), designed to be
deployed on GitHub Pages. Pure HTML/CSS/JS — no build step.

## Structure

```
index.html                    # page structure (sections, hero, abilities, results shell)
partials/tables/*.html        # full comparison tables, fetched lazily when a
                              #   "Full comparison table" toggle is first opened
static/css/base.css           # design tokens, reset, shared primitives, motion policy
static/css/layout.css         # sticky nav, hero, footer
static/css/components.css     # highlight cards, method stages, figures, safety, BibTeX
static/css/abilities.css      # "What it can do" strip, panels, mock UI, schematic animations
static/css/charts.css         # results tabs, bar-chart cards, tooltip, table styles
static/js/results-data.js     # ★ CHARTS benchmark data (the file to edit when numbers land)
static/js/charts.js           # chart renderer, domain tabs, bar tooltip, lazy table loading
static/js/abilities.js        # capability switcher, pager, auto-rotate
static/js/main.js             # scroll reveal, count-up, BibTeX copy, footer year
static/images/                # logo, favicon, method figures
.nojekyll                     # disable Jekyll processing on GitHub Pages
```

Script order matters: `results-data.js` must load before `charts.js` (it publishes
`window.VENUS_CHARTS`); `charts.js` exposes `window.VenusPage.growCharts` used by `main.js`.
Because the tables load via `fetch`, preview over HTTP (`python3 -m http.server`), not `file://`.

## How to fill in results

1. **Charts** — in `static/js/results-data.js`, each bar is `{ model, name, sub, org, value, kind }`:
   `model` is the full canonical name (shown in the hover tooltip), while `name` + `sub` are the
   two fixed label lines under the bar (kept short so they never wrap mid-word).
   UI-Venus-2.0 slots currently have `value: null`, which renders a hatched "TBD" ghost bar.
   Replace `null` with the number and the bar renders normally — nothing else to change.
2. **Tables** — replace the matching `TBD` cells in `partials/tables/*.html`
   (marked with `<!-- TODO -->` comments).
3. **Hero stat strip** — the five headline tiles at the top of `index.html`.

## Deploy

Push to GitHub, then in the repository settings enable
**Pages → Deploy from a branch → `master` (or `main`) / root**. The site will be served at
`https://<org>.github.io/<repo>/`.

To preview locally:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## TODO before release

- [ ] **Hero stat strip** — AndroidWorld / OSWorld-Verified / WebVoyager / ScreenSpot-Pro numbers.
- [ ] **Results charts + tables** — fill the `value: null` slots in `CHARTS` (`static/js/main.js`)
      and the `TBD` cells in the collapsed tables (`index.html`) for UI-Venus-2.0-9B / 27B.
- [ ] **Computer-use baselines** — Claude Opus 4.6 and Seed2.0 Pro OSWorld-Verified numbers are pending
      in the report draft.
- [ ] **Safety (OSBlind)** — confirm checkpoint naming: the draft table lists `UI-Venus-2.0-8B / 30B-A3B`
      (18.5 / 12.3 ASR) while the rest of the report uses 9B / 27B.
- [ ] **Pipeline figure** — `static/images/pipeline.png` (report `figures/pip.png`) still labels the last
      stage "Model Merge"; the 2.0 method uses Multi-teacher On-policy Distillation. Swap in the updated
      figure when available.
- [ ] **Paper button + BibTeX** — add the arXiv link and identifier once public.
- [ ] **Code / Model links** — the GitHub and Hugging Face buttons (nav, hero, footer) are `SOON`
      placeholders; fill in the URLs once the repo and checkpoints are published
      (marked with `<!-- TODO -->` comments in `index.html`).
- [ ] **Footer** — link the UI-Venus-1.5 report.
- [ ] **Demos section (planned)** — a dedicated section showcasing concrete end-to-end cases.
      The "What it can do" section (`#abilities`) deliberately stays schematic: looping CSS animations
      sketch each capability (auto-rotates every 8s until the user interacts; disabled under
      `prefers-reduced-motion`). When building the demos section, useful assets per capability:
      screen-recorded trajectories (portrait for mobile, 16:9 for web/desktop, mp4/webm ≤10 MB),
      an annotated grounding screenshot with the predicted point, CAPTCHA solving clips, and a real
      CallUser / refusal case. Also 1–2 real evaluation queries per capability — the example
      tasks/steps currently in `#abilities` are drawn from the report's system-overview figure and can
      be swapped freely.
- [ ] Optional: final performance-overview figure (report Figure 1) in the Overview section.

Charts and tables show a representative subset of baselines; full tables live in the report
(`tables/*.tex` in the report repo).
