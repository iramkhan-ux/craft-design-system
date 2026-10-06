# Icon size

Generated from `tokens/icon-size.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:icon-size` in `packages/ui`.

Source decision: [0008 Icon size foundation](../decisions/0008-icon-size-foundation.md). Pilot scope: web, Blade source values.

## How to use icon sizes

- **One layer.** There is no primitive layer. Use the tokens directly.
- **For icons only.** Figma cannot limit a variable to one component, so the Figma variables (`icon-size/*` in the `layout` collection) appear in any width or height field. Use them on icons, and nowhere else.
- **Pixels.** Each size is a square, so the same value is the width and the height.

## Sizes

| Token | Value | CSS variable |
|---|---|---|
| `xsmall` | 8px | `--craft-icon-size-xsmall` |
| `small` | 12px | `--craft-icon-size-small` |
| `medium` | 16px | `--craft-icon-size-medium` |
| `large` | 20px | `--craft-icon-size-large` |
| `xlarge` | 24px | `--craft-icon-size-xlarge` |
| `2xlarge` | 32px | `--craft-icon-size-2xlarge` |
