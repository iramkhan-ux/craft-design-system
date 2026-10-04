# Spacing, radius, border width and breakpoints

Generated from `tokens/spacing.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:spacing` in `packages/ui`.

Source decision: [0003 Spacing foundation](../decisions/0003-spacing-foundation.md). Pilot scope: web, Blade source values.

## How to use these tokens

- **One layer.** These tokens have no primitive layer. Designers and components use them directly.
- **Pixels.** Values are pixels in the tokens and in code, as in Blade.
- **Names.** Figma shows `spacing/5`, `radius/small` and `border-width/thin`. Code uses `--craft-spacing-5`, `--craft-radius-small` and `--craft-border-width-thin`.
- **Code only.** `radius/round` (50%, for circles) and the breakpoints are not Figma variables. Figma has no percent radius and no screen-width variable.
- **Not here yet.** Sizes, icon sizes, opacity, elevation and motion come with their own foundations.

## Spacing

Padding, gaps and margins.

| Token | Value | In Figma | CSS variable |
|---|---|---|---|
| `0` | 0px | `spacing/0` | `--craft-spacing-0` |
| `1` | 2px | `spacing/1` | `--craft-spacing-1` |
| `2` | 4px | `spacing/2` | `--craft-spacing-2` |
| `3` | 8px | `spacing/3` | `--craft-spacing-3` |
| `4` | 12px | `spacing/4` | `--craft-spacing-4` |
| `5` | 16px | `spacing/5` | `--craft-spacing-5` |
| `6` | 20px | `spacing/6` | `--craft-spacing-6` |
| `7` | 24px | `spacing/7` | `--craft-spacing-7` |
| `8` | 32px | `spacing/8` | `--craft-spacing-8` |
| `9` | 40px | `spacing/9` | `--craft-spacing-9` |
| `10` | 48px | `spacing/10` | `--craft-spacing-10` |
| `11` | 56px | `spacing/11` | `--craft-spacing-11` |

## Radius

| Token | Value | In Figma | CSS variable |
|---|---|---|---|
| `none` | 0px | `radius/none` | `--craft-radius-none` |
| `2xsmall` | 2px | `radius/2xsmall` | `--craft-radius-2xsmall` |
| `xsmall` | 4px | `radius/xsmall` | `--craft-radius-xsmall` |
| `small` | 8px | `radius/small` | `--craft-radius-small` |
| `medium` | 12px | `radius/medium` | `--craft-radius-medium` |
| `large` | 16px | `radius/large` | `--craft-radius-large` |
| `xlarge` | 20px | `radius/xlarge` | `--craft-radius-xlarge` |
| `2xlarge` | 24px | `radius/2xlarge` | `--craft-radius-2xlarge` |
| `max` | 9999px | `radius/max` | `--craft-radius-max` |
| `round` | 50% | Code only | `--craft-radius-round` |

## Border width

| Token | Value | In Figma | CSS variable |
|---|---|---|---|
| `none` | 0px | `border-width/none` | `--craft-border-width-none` |
| `thinner` | 0.5px | `border-width/thinner` | `--craft-border-width-thinner` |
| `thin` | 1px | `border-width/thin` | `--craft-border-width-thin` |
| `thick` | 1.5px | `border-width/thick` | `--craft-border-width-thick` |
| `thicker` | 2px | `border-width/thicker` | `--craft-border-width-thicker` |

## Breakpoints

Mobile first. `base` has no media query. The others apply from that width up. CSS cannot read a variable inside a media query, so use the pixel value there.

| Token | From width | CSS variable |
|---|---|---|
| `base` | 0px | `--craft-breakpoint-base` |
| `xs` | 320px | `--craft-breakpoint-xs` |
| `s` | 480px | `--craft-breakpoint-s` |
| `m` | 768px | `--craft-breakpoint-m` |
| `l` | 1024px | `--craft-breakpoint-l` |
| `xl` | 1200px | `--craft-breakpoint-xl` |
