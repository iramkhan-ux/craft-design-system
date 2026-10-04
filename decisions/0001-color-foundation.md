---
id: 0001
title: Color foundation
type: foundation
status: approved
decided_by: Iram Khan (iramkhan-ux)
date: 2026-10-01
supersedes:
---

## Context

First foundation of the Craft pilot. The pilot recreates the Razorpay Blade Design System (web, light theme) to test the Craft process. Decisions below were inferred by agents from the Blade Figma file and confirmed by the designer. Reference: Blade Figma file key `DFWv8krfnXUUCMOIW1ME1O` (Community copy).

## Decisions

| # | Decision |
|---|---|
| 1 | Colors have two layers. Primitives are the raw palette and are internal only. Semantic tokens are the ones designers use. |
| 2 | Primitives: 222 colors in 8 chromatic families (azure, emerald, crimson, cider, sapphire, sea, cloud, forest) and the neutrals (blueGrayLight, blueGrayDark, ashGrayLight, ashGrayDark, white, black). Each family has a solid scale plus translucent (alpha) steps. |
| 3 | Semantic tokens: 263 current tokens in surface (48), feedback (40), interactive (163), overlay (2), popup (4), elevation (5), and transparent (1). Each points directly to one primitive, except the 6 raw tokens (5 elevation colors and transparent). |
| 4 | Tones: neutral, primary, positive, negative, notice, information. Interactive tokens cover background, border, text, and icon in several states. |
| 5 | Feedback tokens come in subtle and intense. On feedback-colored components such as alerts and toasts, text falls back to surface text colors, and dismiss icons use surface tokens. |
| 6 | The 351 deprecated tokens in Blade are not recreated. |
| 7 | The colors docs page shows the primitives only, as a palette labeled like azure-050 with its hex. Semantic meaning is documented separately. |

## Exceptions and oddities

- Blade's semantic tokens have onLight and onDark modes. The pilot builds light only. The token master record keeps both modes so dark does not need restructuring later.
- Elevation colors and transparent are raw values, not aliases. Elevation colors belong with the shadow foundation.
- The docs label a step azure-050 while the variable name is 50. The variable name is canonical.
- Blade's onSea tokens resolve to the forest family, not sea. Copied as-is for parity and logged here.
- Blade's 786 paint styles duplicate the variables under older names. They are not recreated. Variables only.
- All 222 primitives are recreated for fidelity. Unused ones can be pruned later.

## Rules confirmed

See `skills/guardrails/color.md`.

## Downstream artifacts

- Tokens: `tokens/color.primitives.json`, `tokens/color.semantic.json` (this pull request)
- Figma: built in the Craft file (`_color-primitives`, `color-semantic`, and a Color page specimen). Approved checkpoint `color-foundation-v1`.
- Code / Storybook: pending
- Docs: pending
- Changelog: entry added in this pull request
