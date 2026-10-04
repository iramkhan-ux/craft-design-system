# Changelog

Generated record of approved changes. Each entry shows the version, date, who approved it, and what changed.

## Unreleased

- Typography foundation v1 checkpoint: repo tag `typography-foundation-v1` and Figma version "Typography foundation v1 - approved 2026-10-05" recorded in `process/checkpoints.md`. Approved by Iram Khan, 2026-10-05.
- Colors page and docs now show primitives first, then semantic tokens: Storybook story order, `docs/color.md` section order, and the `packages/ui` README. Approved by Iram Khan, 2026-10-05.
- Documentation stays in the repo: Figma Documentation panels removed from the Color and Typography pages, and Figma guardrail 9 withdrawn (Figma guardrails back to 3 rules). Decision 0002 updated (decision 10 now says documentation lives in the repo). Also corrects letter spacing in code to pixels per style, as Blade does, instead of em. Approved by Iram Khan, 2026-10-05.
- Typography in Figma: `_typography-primitives` (39 variables), 45 text styles, and a Typography page with a Documentation panel. The Color page also gets a Documentation panel. Decisions 7 to 10 added to 0002 (family names only in Figma, Roboto Mono for Code in Figma, letter spacing set per style as a percent, documentation kept in step). Figma guardrail 9 added. Parity checksum script added. Approved by Iram Khan, 2026-10-05.
- Story tests, accessibility checks that fail the build, and visual comparison of every story against approved images, all on every PR. Fixed two accessibility problems on the Colors page (faint reference value, notice banner text color). Approved by Iram Khan, 2026-10-03.
- Typography guardrails (4 rules): text styles only, heading font for Display and Heading only, Caption regular only, and text color kept out of text styles. Approved by Iram Khan, 2026-10-03.
- Storybook standard (`skills/code-conventions/storybook.md`), automated checks (types, lint with a no-raw-color rule, Storybook build) on every PR, and publishing of the latest Storybook to GitHub Pages from `main`. TypeScript pinned to 6.0.3. Approved by Iram Khan, 2026-10-03.
- Typography foundation (decision 0002): token master record with 39 primitives and 45 text styles, desktop values with mobile values recorded. Approved by Iram Khan, 2026-10-03.
- Storybook Colors page (`packages/ui`): Foundations / Color with light, dark and internal primitives views, built from the token files. React 19, TypeScript, Storybook 10.
- Color docs page (`docs/color.md`): semantic tokens with light and dark values, guardrails, and internal primitives, generated from the token files.
- Checkpoint log (`process/checkpoints.md`): Color foundation v1 recorded with its Figma version and repo tag. Approved by Iram Khan.
- Color tokens: translucent colors now use exact whole-percent alpha instead of 8-digit hex, and both token files are in natural order to match the Figma variables. Values are unchanged (checksums match Figma). Approved by Iram Khan.
- Figma guardrails (3 rules): primitives have no scopes, semantic scopes match their group, and variables are created in natural order. Figma color variables approved as the Color foundation checkpoint. Approved by Iram Khan, 2026-10-02.
- Color foundation (decision 0001): guardrails (5 rules) and the token master record, with 222 primitives and 263 semantic tokens, both light and dark values. Approved by Iram Khan.
- Initial repository setup.
