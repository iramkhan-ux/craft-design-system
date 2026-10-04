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

Color foundation v1 covers 222 primitives (checksum `01860622`) and 263 semantic color variables (checksum `e9f3663b`).

Typography foundation v1 covers 39 typography primitives (checksum `2d3e10fd`) and 45 text styles (checksum `89013431`), plus the Color and Typography specimens in the Figma file. The Figma version was saved after the color and typography Documentation panels were removed.

Color foundation v2 replaces v1. It covers 353 primitives (checksum `2f2b1113`) and 435 semantic color variables (light checksum `9fcbe785`; the dark values in the tokens have checksum `4b1fa8ad`), rebuilt from Blade source (decision 0004). To go back to the v1 palette, roll back to the `color-foundation-v1` tag and its Figma version.

Spacing foundation v1 covers the 26 variables in the `layout` collection (checksum `bd4cfeb5`) and the Spacing page. Its Figma version was saved right after Color foundation v2, so both versions hold the same file state. Both tags are created on the merge commit of the pull request that adds these rows.

A Figma version named just "Color foundation v1" (id `2405152493960264355`, 2026-09-30) also exists. It was saved before the variables were rebuilt in natural order. Do not roll back to it.

## Saving a checkpoint

1. Tag the repo commit.
2. Save the named Figma version. The Figma connection cannot do this, so the agent opens the file in the browser and uses File > Save to version history (Cmd+Option+S), then checks the new version in the file's version list.
3. Add a row to the log above through a pull request.

## Rolling back

- **Variables:** rebuild the Figma variables from the tokens at the repo tag. This is the main route.
- **Whole Figma file:** restore the named Figma version from the file's version history. This also covers anything that cannot be rebuilt from tokens, such as components.
