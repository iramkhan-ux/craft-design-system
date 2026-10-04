---
id: 0002
title: Typography foundation
type: foundation
status: approved
decided_by: Iram Khan (iramkhan-ux)
date: 2026-10-03
supersedes:
---

## Context

Second foundation of the Craft pilot. Values are read from Blade's source (`blade-core/src/tokens/global/typography.ts` and the Display, Heading, Text and Code components in `razorpay/blade`) and confirmed by the designer.

## Decisions

| # | Decision |
|---|---|
| 1 | Typography has two layers, like color. Primitives are raw values and are internal only. Text styles are what designers use. |
| 2 | Primitives (39): 3 font families, 14 font sizes (10 to 72px), 15 line heights (0 to 78px), 3 letter spacings and 4 weights (regular 400, medium 500, semibold 600, bold 700). |
| 3 | Text styles (45): Display (4 sizes), Heading (5 sizes) and Body (4 sizes), each in regular, medium and semibold. Caption (2 sizes, regular only). Code (2 sizes, regular and bold). Each weight is its own style, to match Figma text styles. |
| 4 | Fonts: Inter for Body and Caption, TASA Orbiter for Display and Heading, Menlo for Code. |
| 5 | Blade has different desktop and mobile values. The pilot is web only, so desktop is the main value. Mobile values are kept in the tokens under `$extensions.craft.modes.onMobile`, so mobile does not need restructuring later. |
| 6 | Real fonts are loaded in Storybook once their licenses are confirmed. |
| 7 | In Figma, font family variables hold the font name only (Inter, TASA Orbiter, Roboto Mono). The CSS fallback lists live in code. |
| 8 | Figma uses Roboto Mono for Code, because Menlo is an Apple system font that Figma cannot use. Roboto Mono is also in Blade's own fallback list. In code, Menlo stays first. |
| 9 | Letter spacing is set as a percent directly on each Figma text style and is not tied to a variable. Percent stays the stored value in the tokens. In code it is converted to pixels for each style (font size x percent / 100), the same way Blade does it. Em is not used anywhere. |
| 10 | Documentation lives in this repository (decisions, docs, guardrails). Figma pages hold variables, styles and a visual specimen only. No explanation-based documentation is added to Figma for now. |

## Exceptions and oddities

- Letter spacing is stored as a percent string (`-3.3%`) because that is how Blade and Figma express it. Em was considered and rejected by the designer. The token format (DTCG) allows only px and rem, and percent matches Blade and Figma. For CSS the percent is converted to pixels per style (font size x percent / 100), which is what Blade's `makeLetterSpacing` does.
- Figma applies a variable-tied letter spacing in pixels, not percent (measured: the same 43-character line at 48px was 961px wide with -1.3% set directly and 932px with -1.3 tied to a variable). So letter spacing is set directly on each style. The `font/letterSpacing` variables are reference values only.
- Blade's Figma docs show slightly different CSS font lists (for example "Tasa Orbiter Display", -apple-system, BlinkMacSystemFont, ... sans-serif) from Blade's source (`"TASA Orbiter", "TASA Orbiter Fallback Arial", Arial`). Craft follows the source values in the tokens.
- Font family tokens carry `$extensions.craft.figmaFontFamily`, the exact name Figma uses. This is how the Figma parity check reads them.
- Display letter spacing is -1.3% for regular and medium, and 0% for semibold. Copied as-is from Blade.
- Caption medium uses a 14px font size with a 16px line height (font size 100, line height 50). Copied as-is from Blade for parity.
- Code sizes: small is 10px, medium is 12px (Blade names are inverted relative to Body, where 10px is xsmall).
- Font sizes 200 and 300 differ on desktop (16, 18) but not on mobile (16, 16). Steps are aliases, so size order is not guaranteed across platforms.
- Text color is not part of a text style. It comes from the semantic color tokens.

## Rules confirmed

See `skills/guardrails/typography.md` (4 rules, confirmed 2026-10-03).

## Downstream artifacts

- Tokens: `tokens/typography.primitives.json`, `tokens/typography.styles.json` (this pull request)
- Figma: built in the Craft file (`_typography-primitives`, 45 text styles, Typography page with a specimen of the styles). Parity checksum matches: primitives 2d3e10fd (39), styles 89013431 (45). Checkpoint pending the designer's review.
- Code / Storybook: pending
- Docs: pending
- Changelog: entry added in this pull request
