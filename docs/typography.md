# Typography

Generated from `tokens/typography.primitives.json` and `tokens/typography.styles.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:typography` in `packages/ui`.

Source decision: [0002 Typography foundation](../decisions/0002-typography-foundation.md). Pilot scope: web, desktop values, Blade reference values.

## How to use typography

- **Primitives are internal.** They are the raw values the text styles point to.
- **Pick text styles only.** Each style bundles font, weight, size, line height and letter spacing, so they stay correctly paired.
- **Names.** Figma shows styles with slashes, for example `display/small/semibold`. Code uses the class `craft-text-display-small-semibold`. These tables show both.
- **Fonts.** Display and Heading use TASA Orbiter. Body and Caption use Inter. Code uses Menlo first in code and Roboto Mono in Figma. Inter, TASA Orbiter and Roboto Mono are open source (OFL-1.1).
- **Letter spacing** is a percent in the tokens and in Figma. Code converts it to pixels for each style (font size x percent / 100), as Blade does. Em is not used.
- **Text color** is not part of a text style. It comes from the semantic color tokens.
- **Desktop and mobile.** Figma and code use the desktop values. Mobile values are recorded in the tokens and shown below, but not built yet.

## Guardrails

| # | Rule |
|---|---|
| 1 | Designers use text styles only. Font size, line height, letter spacing and the other primitives are internal. |
| 2 | The heading font (TASA Orbiter) is for Display and Heading only. Body and Caption use Inter. Code uses the code font (Menlo first in code, Roboto Mono in Figma). |
| 3 | Caption is regular weight only. |
| 4 | Text color is never part of a text style. It comes from the semantic color tokens. |

Full reasons and confirmations: [typography](../skills/guardrails/typography.md).

## Primitives (internal)

Raw type values for reference only. Do not use them directly.

### Font families

| Name | In Figma | CSS variable | In code |
|---|---|---|---|
| `text` | Inter | `--craft-primitive-font-family-text` | `"Inter", "Inter Fallback Arial", Arial` |
| `heading` | TASA Orbiter | `--craft-primitive-font-family-heading` | `"TASA Orbiter", "TASA Orbiter Fallback Arial", Arial` |
| `code` | Roboto Mono | `--craft-primitive-font-family-code` | `"Menlo", San Francisco Mono, Courier New, Roboto Mono, monospace` |

### Font sizes

| Step | Desktop | Mobile | CSS variable |
|---|---|---|---|
| `25` | 10px | 10px | `--craft-primitive-font-size-25` |
| `50` | 11px | 11px | `--craft-primitive-font-size-50` |
| `75` | 12px | 12px | `--craft-primitive-font-size-75` |
| `100` | 14px | 14px | `--craft-primitive-font-size-100` |
| `200` | 16px | 16px | `--craft-primitive-font-size-200` |
| `300` | 18px | 16px | `--craft-primitive-font-size-300` |
| `400` | 20px | 18px | `--craft-primitive-font-size-400` |
| `500` | 24px | 20px | `--craft-primitive-font-size-500` |
| `600` | 32px | 24px | `--craft-primitive-font-size-600` |
| `700` | 40px | 32px | `--craft-primitive-font-size-700` |
| `800` | 48px | 34px | `--craft-primitive-font-size-800` |
| `900` | 56px | 36px | `--craft-primitive-font-size-900` |
| `1000` | 64px | 38px | `--craft-primitive-font-size-1000` |
| `1100` | 72px | 40px | `--craft-primitive-font-size-1100` |

### Line heights

| Step | Desktop | Mobile | CSS variable |
|---|---|---|---|
| `0` | 0px | 0px | `--craft-primitive-font-line-height-0` |
| `25` | 13px | 13px | `--craft-primitive-font-line-height-25` |
| `50` | 16px | 16px | `--craft-primitive-font-line-height-50` |
| `75` | 17px | 17px | `--craft-primitive-font-line-height-75` |
| `100` | 20px | 20px | `--craft-primitive-font-line-height-100` |
| `200` | 24px | 24px | `--craft-primitive-font-line-height-200` |
| `300` | 24px | 22px | `--craft-primitive-font-line-height-300` |
| `400` | 26px | 24px | `--craft-primitive-font-line-height-400` |
| `500` | 32px | 26px | `--craft-primitive-font-line-height-500` |
| `600` | 38px | 32px | `--craft-primitive-font-line-height-600` |
| `700` | 46px | 38px | `--craft-primitive-font-line-height-700` |
| `800` | 56px | 40px | `--craft-primitive-font-line-height-800` |
| `900` | 64px | 42px | `--craft-primitive-font-line-height-900` |
| `1000` | 70px | 46px | `--craft-primitive-font-line-height-1000` |
| `1100` | 78px | 48px | `--craft-primitive-font-line-height-1100` |

### Weights

| Name | Value | CSS variable |
|---|---|---|
| `regular` | 400 | `--craft-primitive-font-weight-regular` |
| `medium` | 500 | `--craft-primitive-font-weight-medium` |
| `semibold` | 600 | `--craft-primitive-font-weight-semibold` |
| `bold` | 700 | `--craft-primitive-font-weight-bold` |

### Letter spacings

| Step | Percent |
|---|---|
| `25` | -3.3% |
| `50` | -1.3% |
| `100` | 0% |

## Text styles

45 styles. Size is font size / line height.

### Display

| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `display/small/regular` | `craft-text-display-small-regular` | heading | 48/56px | 400 | -1.3% (-0.624px) |
| `display/small/medium` | `craft-text-display-small-medium` | heading | 48/56px | 500 | -1.3% (-0.624px) |
| `display/small/semibold` | `craft-text-display-small-semibold` | heading | 48/56px | 600 | 0% |
| `display/medium/regular` | `craft-text-display-medium-regular` | heading | 56/64px | 400 | -1.3% (-0.728px) |
| `display/medium/medium` | `craft-text-display-medium-medium` | heading | 56/64px | 500 | -1.3% (-0.728px) |
| `display/medium/semibold` | `craft-text-display-medium-semibold` | heading | 56/64px | 600 | 0% |
| `display/large/regular` | `craft-text-display-large-regular` | heading | 64/70px | 400 | -1.3% (-0.832px) |
| `display/large/medium` | `craft-text-display-large-medium` | heading | 64/70px | 500 | -1.3% (-0.832px) |
| `display/large/semibold` | `craft-text-display-large-semibold` | heading | 64/70px | 600 | 0% |
| `display/xlarge/regular` | `craft-text-display-xlarge-regular` | heading | 72/78px | 400 | -1.3% (-0.936px) |
| `display/xlarge/medium` | `craft-text-display-xlarge-medium` | heading | 72/78px | 500 | -1.3% (-0.936px) |
| `display/xlarge/semibold` | `craft-text-display-xlarge-semibold` | heading | 72/78px | 600 | 0% |

### Heading

| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `heading/small/regular` | `craft-text-heading-small-regular` | heading | 18/24px | 400 | 0% |
| `heading/small/medium` | `craft-text-heading-small-medium` | heading | 18/24px | 500 | 0% |
| `heading/small/semibold` | `craft-text-heading-small-semibold` | heading | 18/24px | 600 | 0% |
| `heading/medium/regular` | `craft-text-heading-medium-regular` | heading | 20/26px | 400 | 0% |
| `heading/medium/medium` | `craft-text-heading-medium-medium` | heading | 20/26px | 500 | 0% |
| `heading/medium/semibold` | `craft-text-heading-medium-semibold` | heading | 20/26px | 600 | 0% |
| `heading/large/regular` | `craft-text-heading-large-regular` | heading | 24/32px | 400 | 0% |
| `heading/large/medium` | `craft-text-heading-large-medium` | heading | 24/32px | 500 | 0% |
| `heading/large/semibold` | `craft-text-heading-large-semibold` | heading | 24/32px | 600 | 0% |
| `heading/xlarge/regular` | `craft-text-heading-xlarge-regular` | heading | 32/38px | 400 | 0% |
| `heading/xlarge/medium` | `craft-text-heading-xlarge-medium` | heading | 32/38px | 500 | 0% |
| `heading/xlarge/semibold` | `craft-text-heading-xlarge-semibold` | heading | 32/38px | 600 | 0% |
| `heading/2xlarge/regular` | `craft-text-heading-2xlarge-regular` | heading | 40/46px | 400 | 0% |
| `heading/2xlarge/medium` | `craft-text-heading-2xlarge-medium` | heading | 40/46px | 500 | 0% |
| `heading/2xlarge/semibold` | `craft-text-heading-2xlarge-semibold` | heading | 40/46px | 600 | 0% |

### Body

| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `body/xsmall/regular` | `craft-text-body-xsmall-regular` | text | 10/13px | 400 | -1.3% (-0.13px) |
| `body/xsmall/medium` | `craft-text-body-xsmall-medium` | text | 10/13px | 500 | -1.3% (-0.13px) |
| `body/xsmall/semibold` | `craft-text-body-xsmall-semibold` | text | 10/13px | 600 | -1.3% (-0.13px) |
| `body/small/regular` | `craft-text-body-small-regular` | text | 12/17px | 400 | -1.3% (-0.156px) |
| `body/small/medium` | `craft-text-body-small-medium` | text | 12/17px | 500 | -1.3% (-0.156px) |
| `body/small/semibold` | `craft-text-body-small-semibold` | text | 12/17px | 600 | -1.3% (-0.156px) |
| `body/medium/regular` | `craft-text-body-medium-regular` | text | 14/20px | 400 | -1.3% (-0.182px) |
| `body/medium/medium` | `craft-text-body-medium-medium` | text | 14/20px | 500 | -1.3% (-0.182px) |
| `body/medium/semibold` | `craft-text-body-medium-semibold` | text | 14/20px | 600 | -1.3% (-0.182px) |
| `body/large/regular` | `craft-text-body-large-regular` | text | 16/24px | 400 | -3.3% (-0.528px) |
| `body/large/medium` | `craft-text-body-large-medium` | text | 16/24px | 500 | -3.3% (-0.528px) |
| `body/large/semibold` | `craft-text-body-large-semibold` | text | 16/24px | 600 | -3.3% (-0.528px) |

### Caption

| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `caption/small/regular` | `craft-text-caption-small-regular` | text | 11/16px | 400 | -1.3% (-0.143px) |
| `caption/medium/regular` | `craft-text-caption-medium-regular` | text | 14/16px | 400 | -1.3% (-0.182px) |

### Code

| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `code/small/regular` | `craft-text-code-small-regular` | code | 10/13px | 400 | 0% |
| `code/small/bold` | `craft-text-code-small-bold` | code | 10/13px | 700 | 0% |
| `code/medium/regular` | `craft-text-code-medium-regular` | code | 12/17px | 400 | 0% |
| `code/medium/bold` | `craft-text-code-medium-bold` | code | 12/17px | 700 | 0% |
