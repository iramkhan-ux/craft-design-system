# Tokens

The master record of design values. Figma variables, code, and docs are generated from these files.

## Files

| File | Contents |
|---|---|
| `color.primitives.json` | 353 raw colors (internal only) |
| `color.semantic.json` | 435 semantic color tokens |
| `typography.primitives.json` | 39 raw type values: families, sizes, line heights, letter spacings, weights (internal only) |
| `spacing.json` | 33 layout tokens: spacing (12), radius (10), border width (5), breakpoints (6). One layer, pixels |
| `typography.styles.json` | 45 text styles (Display, Heading, Body, Caption, Code), each pointing to primitives |

## Format

- Design-token JSON. `$value` holds the value, and `$type` is color.
- Colors are written exactly as Blade source writes them: `hsla(218, 89%, 51%, 1)`, or the word `transparent`. Nothing is converted in the master record. Figma and the checksums use the 8-bit hex and whole-percent alpha derived from each value (`packages/ui/scripts/lib/color.mjs`).
- Tokens are listed in natural order: solid steps first, then alpha steps, each from low to high. Figma variables are created in the same order.
- A value in braces, like `{color.chromatic.azure.500}`, points to another token.
- In semantic tokens, `$value` is the light theme (onLight). The dark theme (onDark) is under `$extensions.craft.modes.onDark`. The pilot builds light only.
- Typography sizes and line heights hold the desktop value in `$value` and the mobile value under `$extensions.craft.modes.onMobile`. Letter spacing is a percent string. Font family tokens carry `$extensions.craft.figmaFontFamily`, the name Figma uses (the CSS fallback list stays in `$value`). `npm run tokens:typography` in `packages/ui` prints the parity checksum to compare with Figma. Text styles are `typography` tokens whose parts are pointers to primitives.
- Raw tokens (5 in color: three `transparent` steps, `surface.background.accent.intense`, and `transparent`) hold a color value instead of a pointer.

## Attribution

Reference values are recreated from Razorpay's Blade Design System (MIT licensed, github.com/razorpay/blade) to test the Craft process. This project is not affiliated with Razorpay.
