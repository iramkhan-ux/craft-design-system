# Spinner

Generated from `packages/ui/src/components/Spinner/Spinner.tsx`. Do not edit by hand. Change the component, then regenerate with `npm run docs:spinner` in `packages/ui`.

Source decision: [0010 Spinner](../decisions/0010-spinner.md). Pilot scope: web, Blade source drawing and motion.

## How to use the Spinner

- **A loading indicator.** Use it while something is loading or saving and nothing else on the screen shows progress.
- **Size and color.** Pick a size and a color from the tables below. The Spinner has no tokens of its own. It reuses the icon sizes and the interactive icon colors.
- **Label.** An optional text label sits to the right or underneath. Screen readers announce the label. With no label they announce "Loading". You can set what they announce with `aria-label`.
- **Motion.** One full turn every 960ms (`duration.2xgentle`, `easing.overshoot`), forever. With reduced motion on, it keeps turning at half the pace (1920ms).
- **In Figma.** The Spinner is static. It turns only in code and Storybook. One component set, `Spinner`, with the variants `Size`, `Color` and `Label position`, plus a `Show label` switch and a `Label` text. 24 variants (checksum `e45126b9`).

## Guardrails

| # | Rule |
|---|---|
| 1 | Use the Spinner for loading and saving only. Never build your own spinner or spin an icon by hand. |
| 2 | Pick the Spinner color for the surface it sits on: `white` on dark or colored surfaces, `onNeutral` on filled neutral surfaces, `neutral` or `primary` everywhere else. |
| 3 | Never turn off the Spinner's motion or change its speed. |

Full reasons and confirmations: [spinner](../skills/guardrails/spinner.md).

## Sizes

| Size | Value | Icon size variable |
|---|---|---|
| `medium` | 16px | `--craft-icon-size-medium` |
| `large` | 20px | `--craft-icon-size-large` |
| `xlarge` | 24px | `--craft-icon-size-xlarge` |

## Colors

| Color | Use on | Color variable |
|---|---|---|
| `neutral` | Any light or dark surface (default) | `--craft-color-interactive-icon-gray-muted` |
| `primary` | Any surface, for emphasis | `--craft-color-interactive-icon-primary-subtle` |
| `white` | Dark or colored surfaces (same in light and dark) | `--craft-color-interactive-icon-static-white-subtle` |
| `onNeutral` | Filled neutral surfaces (follows the theme) | `--craft-color-interactive-icon-on-neutral-normal` |

## Label position

`right`, `bottom`. Default `right`.
