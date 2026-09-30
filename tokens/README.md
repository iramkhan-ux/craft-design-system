# Tokens

The master record of design values. Figma variables, code, and docs are generated from these files.

## Files

| File | Contents |
|---|---|
| `color.primitives.json` | 222 raw colors (internal only) |
| `color.semantic.json` | 263 semantic color tokens |

## Format

- Design-token JSON. `$value` holds the value, and `$type` is color.
- Colors are 8-digit hex, RRGGBBAA. Translucent steps carry their alpha in the last two digits.
- A value in braces, like `{color.chromatic.azure.500}`, points to another token.
- In semantic tokens, `$value` is the light theme (onLight). The dark theme (onDark) is under `$extensions.craft.modes.onDark`. The pilot builds light only.
- Raw tokens (5 elevation colors and transparent) hold a hex value instead of a pointer.

## Attribution

Reference values are recreated from Razorpay's Blade Design System (MIT licensed, github.com/razorpay/blade) to test the Craft process. This project is not affiliated with Razorpay.
