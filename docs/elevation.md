# Elevation

Generated from `tokens/elevation.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:elevation` in `packages/ui`.

Source decision: [0005 Elevation foundation](../decisions/0005-elevation-foundation.md). Pilot scope: web, Blade source values.

## How to use elevation

- **One layer.** Elevation has no primitive layer of its own. Each shadow color points to a color primitive, and the shadow itself is used directly.
- **Figma.** Use the effect styles `elevation/lowRaised`, `elevation/midRaised` and `elevation/highRaised`. `none` needs no style. Their numbers are variables in the `layout` collection (`elevation/<level>/x`, `y`, `blur`, `spread`).
- **Code.** Use `box-shadow: var(--craft-elevation-low-raised)`. The value switches with `data-theme="light"` or `data-theme="dark"`.
- **Light and dark.** Figma builds the light values only. Dark values are recorded in the tokens and shown below.
- **Shadow values** are offset x, offset y, blur and spread, in pixels, then the color.

## Guardrails

| # | Rule |
|---|---|
| 1 | Designers use the elevation styles only. No hand-made shadows. |
| 2 | Shadow colors come from the tokens. Nobody picks a shadow color by hand. |

Full reasons and confirmations: [elevation](../skills/guardrails/elevation.md).

## Levels

| Level | CSS variable | Light | Dark |
|---|---|---|---|
| `none` | `--craft-elevation-none` | none | none |
| `lowRaised` | `--craft-elevation-low-raised` | 0px 2px 4px 0px, `neutral.blueGrayLight.a1106` | 0px 2px 4px 0px, `neutral.black.100` |
| `midRaised` | `--craft-elevation-mid-raised` | 0px 16px 12px 0px, `neutral.blueGrayLight.a1106` | 0px 2px 8px 0px, `neutral.black.100` |
| `highRaised` | `--craft-elevation-high-raised` | 0px 8px 24px -4px, `neutral.blueGrayLight.a1106` | 0px 8px 24px -4px, `neutral.black.100` |
