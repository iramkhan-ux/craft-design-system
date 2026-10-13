# Checkpoints

Each approved checkpoint is saved in two places, so it can be rolled back:

1. **Repo:** a tag on the commit that holds the approved tokens and docs. The tag name matches the checkpoint (for example `color-foundation-v1`).
2. **Figma:** a named version in the file's version history, with the same name.

## Log

| Checkpoint | Approved | Approved by | Repo tag | Figma file | Figma version name | Figma version id |
|---|---|---|---|---|---|---|
| Color foundation v1 | 2026-10-02 | Iram Khan | `color-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Color foundation v1 - approved 2026-10-02 | `2405764423188314934` |
| Typography foundation v1 | 2026-10-05 | Iram Khan | `typography-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Typography foundation v1 - approved 2026-10-05 | `2406570588531573574` |
| Color foundation v2 | 2026-10-05 | Iram Khan | `color-foundation-v2` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Color foundation v2 - approved 2026-10-05 | `2406579393783744600` |
| Spacing foundation v1 | 2026-10-05 | Iram Khan | `spacing-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Spacing foundation v1 - approved 2026-10-05 | `2406602555996392802` |
| Elevation foundation v1 | 2026-10-05 | Iram Khan | `elevation-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Elevation foundation v1 - approved 2026-10-05 | `2406592049978404343` |
| Motion foundation v1 | 2026-10-05 | Iram Khan | `motion-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Motion foundation v1 - approved 2026-10-05 | `2406856294052510987` |
| Opacity and blur foundation v1 | 2026-10-07 | Iram Khan | `opacity-blur-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Opacity and blur foundation v1 - approved 2026-10-07 | `2406867722960785616` |
| Icon size foundation v1 | 2026-10-07 | Iram Khan | `icon-size-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Icon size foundation v1 - approved 2026-10-07 | `2407338786057611466` |
| Icons foundation v1 | 2026-10-07 | Iram Khan | `icons-foundation-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Icons foundation v1 - approved 2026-10-07 | `2407600736467180411` |
| Opacity and blur foundation v2 | 2026-10-08 | Iram Khan | `opacity-blur-foundation-v2` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Opacity and blur foundation v2 - approved 2026-10-08 | `2407909002905718318` |
| Spinner component v1 | 2026-10-08 | Iram Khan | `spinner-component-v1` | `Iv0DFdGHaGliEvyKfsYMCk` (Craft library) | Spinner component v1 - approved 2026-10-08 | `2407910660758625053` |

Color foundation v1 covers 222 primitives (checksum `01860622`) and 263 semantic color variables (checksum `e9f3663b`).

Typography foundation v1 covers 39 typography primitives (checksum `2d3e10fd`) and 45 text styles (checksum `89013431`), plus the Color and Typography specimens in the Figma file. The Figma version was saved after the color and typography Documentation panels were removed.

Color foundation v2 replaces v1. It covers 353 primitives (checksum `2f2b1113`) and 435 semantic color variables (light checksum `9fcbe785`; the dark values in the tokens have checksum `4b1fa8ad`), rebuilt from Blade source (decision 0004). To go back to the v1 palette, roll back to the `color-foundation-v1` tag and its Figma version.

Spacing foundation v1 covers the 26 variables in the `layout` collection (checksum `bd4cfeb5`) and the Spacing page. Its Figma version was saved right after Color foundation v2, so both versions hold the same file state. Both tags are created on the merge commit of the pull request that adds these rows.

Elevation foundation v1 covers the 3 effect styles `elevation/lowRaised`, `midRaised` and `highRaised`, the 12 `elevation/*` number variables in the `layout` collection, and the Elevation page (checksum `bd9d0c95`). Its tag is on the merge commit of pull request #21.

Motion foundation v1 covers the 23 code-only motion tokens (8 durations, 8 delays, 7 easings, from `tokens/motion.json`), the Storybook Motion pages with hover samples, and the Figma Motion page, which is a specimen only. Motion has no Figma variables, so rolling back means the repo tag. Its tag is on the merge commit of pull request #24, which is the approved state (the tokens are unchanged since pull request #23).

Opacity and blur foundation v1 covers the 19 variables in the `opacity-blur` collection (16 opacity, stored as whole percent, and 3 backdrop blur; checksum `f3d07ab1`) and the Opacity and blur page. Its tag is on the merge commit of pull request #26.

Icon size foundation v1 covers the 6 `icon-size/*` variables in the `layout` collection (checksum `048cd702`; the collection now has 44 variables) and the Icon size page. Its tag is on the merge commit of pull request #29.

Icons foundation v1 covers the 447 icon components on the Icons page (392 outline, 55 filled; checksum `95d47966` over name and shape count) and the 447 SVG files in `icons/`. Its tag is on the merge commit of pull request #31. The four icon guardrails were saved after that merge, in the pull request that adds this row.

Opacity and blur foundation v2 replaces v1. It adds the three effect styles `backdrop-blur/low`, `medium` and `high` (checksum `4523886d`; radius bound to the blur variables). The 19 variables are unchanged (checksum `f3d07ab1`). To go back, roll back to the `opacity-blur-foundation-v1` tag and its Figma version. Its tag is on the merge commit of the pull request that adds this row. This Figma version also contains the Spinner page, which was added before the Spinner checkpoint.

Spinner component v1 covers the Spinner component in code and Storybook (`packages/ui/src/components/Spinner`), the three guardrails, and the Figma Spinner page with the component set `Spinner` (24 variants, checksum `e45126b9`). Its tag is on the merge commit of pull request #33. The Figma version was saved after Opacity and blur foundation v2,, so it holds the same file state as that version. The tag `opacity-blur-foundation-v2` is on the merge commit of pull request #36.

A Figma version named just "Color foundation v1" (id `2405152493960264355`, 2026-09-30) also exists. It was saved before the variables were rebuilt in natural order. Do not roll back to it.

## Saving a checkpoint

1. Tag the repo commit.
2. Save the named Figma version. The Figma connection cannot do this, so the agent opens the file in the browser and uses File > Save to version history (Cmd+Option+S), then checks the new version in the file's version list.
3. Add a row to the log above through a pull request.

## Rolling back

- **Variables:** rebuild the Figma variables from the tokens at the repo tag. This is the main route.
- **Whole Figma file:** restore the named Figma version from the file's version history. This also covers anything that cannot be rebuilt from tokens, such as components.
