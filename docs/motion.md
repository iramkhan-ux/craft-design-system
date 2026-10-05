# Motion

Generated from `tokens/motion.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:motion` in `packages/ui`.

Source decision: [0006 Motion foundation](../decisions/0006-motion-foundation.md). Pilot scope: web, Blade source values.

## How to use motion

- **One layer.** Motion has no primitive layer. Use the tokens directly.
- **Code, plus a Figma page.** Motion tokens are CSS variables. Figma has a Motion page that shows them, but no variables, because Figma cannot use a duration or easing curve as a variable in a design.
- **Time** is in milliseconds. **Easing** is a cubic-bezier curve, written as `cubic-bezier(x1, y1, x2, y2)`.
- **Together.** A transition uses a duration, an easing and sometimes a delay, for example `transition: transform var(--craft-duration-moderate) var(--craft-easing-standard)`.
- **Reduced motion.** When a person has asked their device for reduced motion (`prefers-reduced-motion: reduce`), skip or shorten the animation. The tokens do not change; the component decides.

## Guardrails

| # | Rule |
|---|---|
| 1 | Use the motion tokens only. No hand-typed durations, delays or easing curves. |
| 2 | Use each easing for its stated purpose, for example `entrance` and `exit` for things appearing and leaving, and `shake` for errors only. |

Full reasons and confirmations: [motion](../skills/guardrails/motion.md).

## Duration

| Token | Value | CSS variable |
|---|---|---|
| `2xquick` | 80ms | `--craft-duration-2xquick` |
| `xquick` | 160ms | `--craft-duration-xquick` |
| `quick` | 200ms | `--craft-duration-quick` |
| `moderate` | 280ms | `--craft-duration-moderate` |
| `xmoderate` | 360ms | `--craft-duration-xmoderate` |
| `gentle` | 480ms | `--craft-duration-gentle` |
| `xgentle` | 640ms | `--craft-duration-xgentle` |
| `2xgentle` | 960ms | `--craft-duration-2xgentle` |

## Delay

| Token | Value | CSS variable |
|---|---|---|
| `2xquick` | 80ms | `--craft-delay-2xquick` |
| `xquick` | 160ms | `--craft-delay-xquick` |
| `moderate` | 280ms | `--craft-delay-moderate` |
| `gentle` | 480ms | `--craft-delay-gentle` |
| `xgentle` | 960ms | `--craft-delay-xgentle` |
| `long` | 2000ms | `--craft-delay-long` |
| `xlong` | 3000ms | `--craft-delay-xlong` |
| `2xlong` | 5000ms | `--craft-delay-2xlong` |

## Easing

| Token | Curve | Used for | CSS variable |
|---|---|---|---|
| `linear` | `cubic-bezier(0, 0, 0, 0)` | Marquee, progress bar | `--craft-easing-linear` |
| `entrance` | `cubic-bezier(0, 0, 0.2, 1)` | Entry of modals, drawers, dropdowns | `--craft-easing-entrance` |
| `exit` | `cubic-bezier(0.17, 0, 1, 1)` | Exit of modals, drawers, dropdowns | `--craft-easing-exit` |
| `standard` | `cubic-bezier(0.3, 0, 0.2, 1)` | Morph | `--craft-easing-standard` |
| `emphasized` | `cubic-bezier(0.5, 0, 0, 1)` | Hover states of interactive items | `--craft-easing-emphasized` |
| `overshoot` | `cubic-bezier(0.5, 0, 0.3, 1.5)` | Toast notifications | `--craft-easing-overshoot` |
| `shake` | `cubic-bezier(1, 0.5, 0, 0.5)` | Error states | `--craft-easing-shake` |
