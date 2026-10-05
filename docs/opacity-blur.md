# Opacity and backdrop blur

Generated from `tokens/opacity-blur.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:opacity-blur` in `packages/ui`.

Source decision: [0007 Opacity and backdrop blur foundation](../decisions/0007-opacity-blur-foundation.md). Pilot scope: web, Blade source values.

## How to use opacity and blur

- **One layer.** There is no primitive layer. Use the tokens directly.
- **Opacity** is a number from 0 (invisible) to 1 (solid). The token names (0, 1, 50 ... 1300) are steps, not percentages.
- **Backdrop blur** blurs what is behind a see-through surface, for example a frosted panel. It is a number of pixels.
- **Code and Figma.** Both are CSS variables in code and number variables in the Figma `opacity-blur` collection (opacity as a whole percent, because Figma stores it that way).

## Opacity

| Token | Value | Figma value | CSS variable |
|---|---|---|---|
| `0` | 0 | 0% | `--craft-opacity-0` |
| `1` | 0.01 | 1% | `--craft-opacity-1` |
| `50` | 0.06 | 6% | `--craft-opacity-50` |
| `100` | 0.09 | 9% | `--craft-opacity-100` |
| `200` | 0.12 | 12% | `--craft-opacity-200` |
| `300` | 0.18 | 18% | `--craft-opacity-300` |
| `400` | 0.24 | 24% | `--craft-opacity-400` |
| `500` | 0.32 | 32% | `--craft-opacity-500` |
| `600` | 0.48 | 48% | `--craft-opacity-600` |
| `700` | 0.56 | 56% | `--craft-opacity-700` |
| `800` | 0.64 | 64% | `--craft-opacity-800` |
| `900` | 0.72 | 72% | `--craft-opacity-900` |
| `1000` | 0.8 | 80% | `--craft-opacity-1000` |
| `1100` | 0.88 | 88% | `--craft-opacity-1100` |
| `1200` | 0.94 | 94% | `--craft-opacity-1200` |
| `1300` | 1 | 100% | `--craft-opacity-1300` |

## Backdrop blur

| Token | Value | Used for | CSS variable |
|---|---|---|---|
| `low` | 4px | Subtle background blur | `--craft-backdrop-blur-low` |
| `medium` | 8px | Moderate background blur | `--craft-backdrop-blur-medium` |
| `high` | 12px | Strong background blur | `--craft-backdrop-blur-high` |
