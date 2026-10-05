# @craft/ui

React components and Storybook for Craft. Pilot: Blade reference, web, light theme (dark values are built in).

## Run it

```bash
cd packages/ui
npm install
npm run storybook
```

Storybook opens at http://localhost:6006. Open **Foundations / Color**.

## How it is built

- The master record is `/tokens`. Nothing in this package holds color values by hand.
- `npm run tokens` turns `/tokens` into CSS variables (`--craft-color-...`) and typed data in `src/tokens/generated`. It runs before Storybook starts. Those files are not committed.
- It builds the typography CSS (`src/tokens/generated/typography.css`: variables plus one class per text style, such as `craft-text-display-small-semibold`) and typed data. Letter spacing is converted from percent to pixels for each style.
- It builds the spacing CSS (`--craft-spacing-*`, `--craft-radius-*`, `--craft-border-width-*`, `--craft-breakpoint-*`). It builds the elevation CSS (`--craft-elevation-*`, light and dark) the motion CSS (`--craft-duration-*`, `--craft-delay-*`, `--craft-easing-*`) and the opacity and blur CSS (`--craft-opacity-*`, `--craft-backdrop-blur-*`). It prints a checksum for the color primitives and semantic tokens, the typography primitives and text styles, the spacing tokens that exist in Figma, the elevation values in Figma, and the opacity and blur values in Figma. They must match the checkpoint log in `process/checkpoints.md`.
- Primitives are internal and are never used by components. Semantic tokens switch with `data-theme="light"` or `data-theme="dark"`.

## Scripts

| Command | What it does |
|---|---|
| `npm run storybook` | Build tokens, then start Storybook |
| `npm run build-storybook` | Build tokens, then build a static Storybook |
| `npm run typecheck` | Build tokens, then check types |
| `npm test` | Run every story as a test, with accessibility checks, in a real browser |
| `npm run visual` | Compare every story with the approved images (Linux CI makes the approved images) |
| `npm run docs:motion` | Regenerate `docs/motion.md` from the tokens |
| `npm run docs:opacity-blur` | Regenerate `docs/opacity-blur.md` from the tokens |
| `npm run docs:elevation` | Regenerate `docs/elevation.md` from the tokens |
| `npm run docs:spacing` | Regenerate `docs/spacing.md` from the tokens |
| `npm run docs:color` | Regenerate `docs/color.md` from the tokens |
| `npm run docs:typography` | Regenerate `docs/typography.md` from the tokens |
| `npm run lint` | Build tokens, then lint. Raw color values are an error. |

See `skills/code-conventions/storybook.md` for the full standard. Node 24 is required (`.nvmrc`).
