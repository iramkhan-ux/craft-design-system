# Color

Generated from `tokens/color.primitives.json` and `tokens/color.semantic.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:color` in `packages/ui`.

Source decision: [0004 Color from Blade source](../decisions/0004-color-from-blade-source.md), which replaces the palette and token set of [0001 Color foundation](../decisions/0001-color-foundation.md). Pilot scope: web, Blade source values.

## How to use color

- **Primitives are internal.** They are raw values that semantic tokens point to, and stay out of designs and components.
- **Pick semantic tokens only.** They carry meaning (text, border, background) and switch between the light and dark theme.
- **Names.** Figma shows tokens with slashes, for example `surface/background/primary/subtle`. Code and these tables use dots.
- **Values.** Tokens hold the exact value written in Blade source, for example `hsla(218, 89%, 51%, 1)`. Hex values in the primitives table are derived from them for reading.
- **Light and dark.** Each token lists its light value and its dark value. The pilot builds the light theme in Figma and code. Dark values are recorded for later.
- **Swatches.** Translucent colors are previewed flattened on white (light) or on the dark page color `blueGrayDark.1300` (dark). The percentage is the real opacity.
- **Transparent.** Some tokens are `transparent` in Blade, for example `surface.background.primary.faint`. They exist so every tone has the same set of names.
- **Deprecated tokens** are not recreated and must not be used.

## Guardrails

| # | Rule |
|---|---|
| 1 | Designers use semantic tokens only. Primitives are internal. |
| 2 | Deprecated tokens are never used. |
| 3 | Feedback-colored components use surface text colors. |
| 4 | Dismiss icons use surface tokens. |
| 5 | A new color token must point directly to one primitive. |
| 6 | Primitive variables have no scopes. |
| 7 | A semantic variable's scope must match its group (text, border, background, icon). |
| 8 | Create Figma variables in natural order (low to high, solid steps before alpha steps). |

Full reasons and confirmations: [color](../skills/guardrails/color.md), [Figma](../skills/guardrails/figma.md).

## Primitives (internal)

Raw colors that semantic tokens point to. Listed for reference only. Do not use them directly. Solid steps run from low to high. Alpha steps (`a50`, `a906` and so on) are the same color at a lower opacity, shown as a percentage.

| Family | Solid steps | Alpha steps |
|---|---|---|
| `azure.50` | undefined `#f5f9ff` |  |
| `azure.100` | undefined `#d6e5ff` |  |
| `azure.200` | undefined `#a8c8ff` |  |
| `azure.300` | undefined `#75aaff` |  |
| `azure.400` | undefined `#4287ff` |  |
| `azure.500` | undefined `#1364f1` |  |
| `azure.600` | undefined `#0e54cd` |  |
| `azure.700` | undefined `#0a44a9` |  |
| `azure.800` | undefined `#073688` |  |
| `azure.900` | undefined `#052761` |  |
| `azure.1000` | undefined `#021331` |  |
| `azure.a50` |  | undefined 9% |
| `azure.a100` |  | undefined 18% |
| `azure.a150` |  | undefined 24% |
| `azure.a200` |  | undefined 32% |
| `azure.a400` |  | undefined 64% |
| `emerald.50` | undefined `#e6f4ed` |  |
| `emerald.100` | undefined `#cee9db` |  |
| `emerald.200` | undefined `#9cd3b8` |  |
| `emerald.300` | undefined `#6bbd94` |  |
| `emerald.400` | undefined `#3aa670` |  |
| `emerald.500` | undefined `#009954` |  |
| `emerald.600` | undefined `#008f47` |  |
| `emerald.700` | undefined `#00753b` |  |
| `emerald.800` | undefined `#005c2e` |  |
| `emerald.900` | undefined `#004724` |  |
| `emerald.1000` | undefined `#00381c` |  |
| `emerald.a50` |  | undefined 9% |
| `emerald.a100` |  | undefined 18% |
| `emerald.a150` |  | undefined 24% |
| `emerald.a200` |  | undefined 32% |
| `emerald.a400` |  | undefined 64% |
| `emerald.a500` |  | undefined 72% |
| `emerald.a600` |  | undefined 80% |
| `emerald.a700` |  | undefined 88% |
| `crimson.50` | undefined `#fdf3f2` |  |
| `crimson.100` | undefined `#fbe6e4` |  |
| `crimson.200` | undefined `#f6c1bc` |  |
| `crimson.300` | undefined `#f0968e` |  |
| `crimson.400` | undefined `#e86559` |  |
| `crimson.500` | undefined `#df3e30` |  |
| `crimson.600` | undefined `#d01e11` |  |
| `crimson.700` | undefined `#aa180e` |  |
| `crimson.800` | undefined `#8d150c` |  |
| `crimson.900` | undefined `#7a100b` |  |
| `crimson.1000` | undefined `#620f09` |  |
| `crimson.a50` |  | undefined 9% |
| `crimson.a100` |  | undefined 18% |
| `crimson.a150` |  | undefined 24% |
| `crimson.a200` |  | undefined 32% |
| `crimson.a400` |  | undefined 64% |
| `crimson.a500` |  | undefined 72% |
| `crimson.a600` |  | undefined 80% |
| `crimson.a700` |  | undefined 88% |
| `cider.50` | undefined `#fff6f0` |  |
| `cider.100` | undefined `#ffe7d6` |  |
| `cider.200` | undefined `#ffc9a3` |  |
| `cider.300` | undefined `#ffa66b` |  |
| `cider.400` | undefined `#ff8742` |  |
| `cider.500` | undefined `#f56d19` |  |
| `cider.600` | undefined `#e05e00` |  |
| `cider.700` | undefined `#c75300` |  |
| `cider.800` | undefined `#ad4800` |  |
| `cider.900` | undefined `#8f3c00` |  |
| `cider.1000` | undefined `#6b2d00` |  |
| `cider.a50` |  | undefined 9% |
| `cider.a100` |  | undefined 18% |
| `cider.a150` |  | undefined 24% |
| `cider.a200` |  | undefined 32% |
| `cider.a400` |  | undefined 64% |
| `cider.a500` |  | undefined 72% |
| `cider.a600` |  | undefined 80% |
| `cider.a700` |  | undefined 88% |
| `sapphire.50` | undefined `#e7f7fd` |  |
| `sapphire.100` | undefined `#ccebfa` |  |
| `sapphire.200` | undefined `#9dd8f6` |  |
| `sapphire.300` | undefined `#6ac6f1` |  |
| `sapphire.400` | undefined `#3bb4ed` |  |
| `sapphire.500` | undefined `#00a1e6` |  |
| `sapphire.600` | undefined `#008bd1` |  |
| `sapphire.700` | undefined `#0070a8` |  |
| `sapphire.800` | undefined `#005b85` |  |
| `sapphire.900` | undefined `#004161` |  |
| `sapphire.1000` | undefined `#002d42` |  |
| `sapphire.a50` |  | undefined 9% |
| `sapphire.a100` |  | undefined 18% |
| `sapphire.a150` |  | undefined 24% |
| `sapphire.a200` |  | undefined 32% |
| `sapphire.a400` |  | undefined 64% |
| `sapphire.a500` |  | undefined 72% |
| `sapphire.a600` |  | undefined 80% |
| `sapphire.a700` |  | undefined 88% |
| `sea.50` | undefined `#edf7f7` |  |
| `sea.100` | undefined `#e2f3f3` |  |
| `sea.200` | undefined `#c2e0e0` |  |
| `sea.300` | undefined `#98cdcd` |  |
| `sea.400` | undefined `#60a9a9` |  |
| `sea.500` | undefined `#389494` |  |
| `sea.600` | undefined `#1f7a7a` |  |
| `sea.700` | undefined `#1d6363` |  |
| `sea.800` | undefined `#145252` |  |
| `sea.900` | undefined `#033f3f` |  |
| `sea.1000` | undefined `#022727` |  |
| `sea.a50` |  | undefined 9% |
| `sea.a100` |  | undefined 18% |
| `sea.a150` |  | undefined 24% |
| `sea.a200` |  | undefined 32% |
| `sea.a400` |  | undefined 64% |
| `cloud.50` | undefined `#edf4f7` |  |
| `cloud.100` | undefined `#e6eff4` |  |
| `cloud.200` | undefined `#cbdde6` |  |
| `cloud.300` | undefined `#98bbcd` |  |
| `cloud.400` | undefined `#6091a9` |  |
| `cloud.500` | undefined `#387594` |  |
| `cloud.600` | undefined `#1f5c7a` |  |
| `cloud.700` | undefined `#1d4a63` |  |
| `cloud.800` | undefined `#143d52` |  |
| `cloud.900` | undefined `#032b3f` |  |
| `cloud.1000` | undefined `#021b27` |  |
| `cloud.a50` |  | undefined 9% |
| `cloud.a100` |  | undefined 18% |
| `cloud.a150` |  | undefined 24% |
| `cloud.a200` |  | undefined 32% |
| `cloud.a400` |  | undefined 64% |
| `forest.50` | undefined `#ebfaf3` |  |
| `forest.100` | undefined `#dbf5e8` |  |
| `forest.200` | undefined `#b6ecd1` |  |
| `forest.300` | undefined `#92e3ba` |  |
| `forest.400` | undefined `#49d08c` |  |
| `forest.500` | undefined `#00bd6e` |  |
| `forest.600` | undefined `#009e5c` |  |
| `forest.700` | undefined `#008a50` |  |
| `forest.800` | undefined `#006b3e` |  |
| `forest.900` | undefined `#005230` |  |
| `forest.1000` | undefined `#003821` |  |
| `forest.a50` |  | undefined 9% |
| `forest.a100` |  | undefined 18% |
| `forest.a150` |  | undefined 24% |
| `forest.a200` |  | undefined 32% |
| `forest.a400` |  | undefined 64% |
| `orchid.50` | undefined `#f1e5ff` |  |
| `orchid.100` | undefined `#ddc7ff` |  |
| `orchid.200` | undefined `#cdadff` |  |
| `orchid.300` | undefined `#b994ff` |  |
| `orchid.400` | undefined `#a47aff` |  |
| `orchid.500` | undefined `#8f62f9` |  |
| `orchid.600` | undefined `#744ade` |  |
| `orchid.700` | undefined `#6038bc` |  |
| `orchid.800` | undefined `#472895` |  |
| `orchid.900` | undefined `#30196b` |  |
| `orchid.1000` | undefined `#1a0c3b` |  |
| `orchid.a50` |  | undefined 9% |
| `orchid.a100` |  | undefined 18% |
| `orchid.a150` |  | undefined 24% |
| `orchid.a200` |  | undefined 32% |
| `orchid.a400` |  | undefined 64% |
| `magenta.50` | undefined `#ffe0fa` |  |
| `magenta.100` | undefined `#ffbdf2` |  |
| `magenta.200` | undefined `#ff9ee5` |  |
| `magenta.300` | undefined `#f87cd7` |  |
| `magenta.400` | undefined `#e75fc3` |  |
| `magenta.500` | undefined `#d147aa` |  |
| `magenta.600` | undefined `#b73492` |  |
| `magenta.700` | undefined `#962277` |  |
| `magenta.800` | undefined `#75155b` |  |
| `magenta.900` | undefined `#510b3e` |  |
| `magenta.1000` | undefined `#2e0522` |  |
| `magenta.a50` |  | undefined 9% |
| `magenta.a100` |  | undefined 18% |
| `magenta.a150` |  | undefined 24% |
| `magenta.a200` |  | undefined 32% |
| `magenta.a400` |  | undefined 64% |
| `topaz.50` | undefined `#f9e8ae` |  |
| `topaz.100` | undefined `#efd06c` |  |
| `topaz.200` | undefined `#e2ba36` |  |
| `topaz.300` | undefined `#d4a408` |  |
| `topaz.400` | undefined `#bd8a00` |  |
| `topaz.500` | undefined `#a87300` |  |
| `topaz.600` | undefined `#8f5d00` |  |
| `topaz.700` | undefined `#7a4e00` |  |
| `topaz.800` | undefined `#5c3900` |  |
| `topaz.900` | undefined `#422700` |  |
| `topaz.1000` | undefined `#241400` |  |
| `topaz.a50` |  | undefined 9% |
| `topaz.a100` |  | undefined 18% |
| `topaz.a150` |  | undefined 24% |
| `topaz.a200` |  | undefined 32% |
| `topaz.a400` |  | undefined 64% |
| `blueGrayLight.0` | undefined `#ffffff` |  |
| `blueGrayLight.50` | undefined `#f7f7f7` |  |
| `blueGrayLight.100` | undefined `#f7f7f7` |  |
| `blueGrayLight.200` | undefined `#dee1e3` |  |
| `blueGrayLight.300` | undefined `#c8cdd0` |  |
| `blueGrayLight.400` | undefined `#afb6bb` |  |
| `blueGrayLight.500` | undefined `#96a0a6` |  |
| `blueGrayLight.600` | undefined `#7b878e` |  |
| `blueGrayLight.700` | undefined `#616d75` |  |
| `blueGrayLight.800` | undefined `#4f585f` |  |
| `blueGrayLight.900` | undefined `#434b51` |  |
| `blueGrayLight.1000` | undefined `#373e43` |  |
| `blueGrayLight.1100` | undefined `#292f32` |  |
| `blueGrayLight.1200` | undefined `#191d1f` |  |
| `blueGrayLight.1300` | undefined `#050505` |  |
| `blueGrayLight.a0` |  | undefined 0% |
| `blueGrayLight.a1` |  | undefined 1% |
| `blueGrayLight.a25` |  | undefined 48% |
| `blueGrayLight.a48` |  | undefined 94% |
| `blueGrayLight.a50` |  | undefined 0% |
| `blueGrayLight.a75` |  | undefined 48% |
| `blueGrayLight.a100` |  | undefined 0% |
| `blueGrayLight.a200` |  | undefined 0% |
| `blueGrayLight.a400` |  | undefined 0% |
| `blueGrayLight.a406` |  | undefined 6% |
| `blueGrayLight.a500` |  | undefined 0% |
| `blueGrayLight.a600` |  | undefined 0% |
| `blueGrayLight.a700` |  | undefined 0% |
| `blueGrayLight.a900` |  | undefined 0% |
| `blueGrayLight.a906` |  | undefined 6% |
| `blueGrayLight.a909` |  | undefined 9% |
| `blueGrayLight.a912` |  | undefined 12% |
| `blueGrayLight.a918` |  | undefined 18% |
| `blueGrayLight.a924` |  | undefined 24% |
| `blueGrayLight.a932` |  | undefined 32% |
| `blueGrayLight.a964` |  | undefined 64% |
| `blueGrayLight.a1072` |  | undefined 72% |
| `blueGrayLight.a1106` |  | undefined 6% |
| `blueGrayLight.a1264` |  | undefined 64% |
| `blueGrayLight.a1288` |  | undefined 88% |
| `blueGrayDark.0` | undefined `#ffffff` |  |
| `blueGrayDark.50` | undefined `#eaebeb` |  |
| `blueGrayDark.100` | undefined `#d5d6d7` |  |
| `blueGrayDark.200` | undefined `#c0c2c4` |  |
| `blueGrayDark.300` | undefined `#aeb0b2` |  |
| `blueGrayDark.400` | undefined `#96999c` |  |
| `blueGrayDark.500` | undefined `#808589` |  |
| `blueGrayDark.600` | undefined `#73787d` |  |
| `blueGrayDark.700` | undefined `#585c5f` |  |
| `blueGrayDark.800` | undefined `#3b3d40` |  |
| `blueGrayDark.900` | undefined `#313335` |  |
| `blueGrayDark.1000` | undefined `#27292b` |  |
| `blueGrayDark.1100` | undefined `#1f2123` |  |
| `blueGrayDark.1200` | undefined `#131415` |  |
| `blueGrayDark.1300` | undefined `#1b1c1d` |  |
| `blueGrayDark.a0` |  | undefined 0% |
| `blueGrayDark.a1` |  | undefined 1% |
| `blueGrayDark.a25` |  | undefined 48% |
| `blueGrayDark.a48` |  | undefined 94% |
| `blueGrayDark.a50` |  | undefined 0% |
| `blueGrayDark.a75` |  | undefined 48% |
| `blueGrayDark.a100` |  | undefined 0% |
| `blueGrayDark.a200` |  | undefined 0% |
| `blueGrayDark.a300` |  | undefined 0% |
| `blueGrayDark.a400` |  | undefined 0% |
| `blueGrayDark.a500` |  | undefined 0% |
| `blueGrayDark.a506` |  | undefined 6% |
| `blueGrayDark.a509` |  | undefined 9% |
| `blueGrayDark.a512` |  | undefined 12% |
| `blueGrayDark.a518` |  | undefined 18% |
| `blueGrayDark.a524` |  | undefined 24% |
| `blueGrayDark.a532` |  | undefined 32% |
| `blueGrayDark.a564` |  | undefined 64% |
| `blueGrayDark.a572` |  | undefined 72% |
| `blueGrayDark.a888` |  | undefined 88% |
| `blueGrayDark.a1188` |  | undefined 88% |
| `blueGrayDark.a1194` |  | undefined 94% |
| `blueGrayDark.a1312` |  | undefined 12% |
| `blueGrayDark.a1388` |  | undefined 88% |
| `ashGrayLight.0` | undefined `#ffffff` |  |
| `ashGrayLight.50` | undefined `#f9f9fa` |  |
| `ashGrayLight.100` | undefined `#f4f5f6` |  |
| `ashGrayLight.200` | undefined `#eff0f1` |  |
| `ashGrayLight.300` | undefined `#e2e3e4` |  |
| `ashGrayLight.400` | undefined `#cbced2` |  |
| `ashGrayLight.500` | undefined `#abafb5` |  |
| `ashGrayLight.600` | undefined `#93989f` |  |
| `ashGrayLight.700` | undefined `#858b93` |  |
| `ashGrayLight.800` | undefined `#6b717b` |  |
| `ashGrayLight.900` | undefined `#545a64` |  |
| `ashGrayLight.1000` | undefined `#3f4550` |  |
| `ashGrayLight.1100` | undefined `#272d35` |  |
| `ashGrayLight.1200` | undefined `#1c2026` |  |
| `ashGrayLight.1300` | undefined `#0c0f13` |  |
| `ashGrayLight.a25` |  | undefined 6% |
| `ashGrayLight.a50` |  | undefined 9% |
| `ashGrayLight.a75` |  | undefined 12% |
| `ashGrayLight.a100` |  | undefined 18% |
| `ashGrayLight.a200` |  | undefined 32% |
| `ashGrayLight.a400` |  | undefined 32% |
| `ashGrayDark.0` | undefined `#fcfcfc` |  |
| `ashGrayDark.50` | undefined `#eaeaeb` |  |
| `ashGrayDark.100` | undefined `#d6d6d7` |  |
| `ashGrayDark.200` | undefined `#bfc0c4` |  |
| `ashGrayDark.300` | undefined `#95979d` |  |
| `ashGrayDark.400` | undefined `#7a7c85` |  |
| `ashGrayDark.500` | undefined `#62636a` |  |
| `ashGrayDark.600` | undefined `#4e4e56` |  |
| `ashGrayDark.700` | undefined `#35363b` |  |
| `ashGrayDark.800` | undefined `#2e2f33` |  |
| `ashGrayDark.900` | undefined `#28292e` |  |
| `ashGrayDark.1000` | undefined `#232429` |  |
| `ashGrayDark.1100` | undefined `#1b1c22` |  |
| `ashGrayDark.1200` | undefined `#111218` |  |
| `ashGrayDark.1300` | undefined `#0a0a0b` |  |
| `ashGrayDark.a25` |  | undefined 6% |
| `ashGrayDark.a50` |  | undefined 9% |
| `ashGrayDark.a75` |  | undefined 12% |
| `ashGrayDark.a100` |  | undefined 18% |
| `ashGrayDark.a200` |  | undefined 32% |
| `ashGrayDark.a400` |  | undefined 32% |
| `white.1` |  | undefined 1% |
| `white.5` |  | undefined 6% |
| `white.10` |  | undefined 9% |
| `white.25` |  | undefined 12% |
| `white.50` |  | undefined 18% |
| `white.100` |  | undefined 32% |
| `white.200` |  | undefined 48% |
| `white.300` |  | undefined 64% |
| `white.400` |  | undefined 80% |
| `white.450` |  | undefined 88% |
| `white.500` | undefined `#ffffff` |  |
| `black.1` |  | undefined 1% |
| `black.5` |  | undefined 6% |
| `black.10` |  | undefined 9% |
| `black.25` |  | undefined 12% |
| `black.50` |  | undefined 18% |
| `black.100` |  | undefined 32% |
| `black.200` |  | undefined 56% |
| `black.300` |  | undefined 72% |
| `black.400` |  | undefined 80% |
| `black.450` |  | undefined 88% |
| `black.500` | undefined `#000000` |  |
| `whiteSolid.1` | undefined `#1e1f20` |  |
| `whiteSolid.5` | undefined `#28292a` |  |
| `whiteSolid.10` | undefined `#2f3031` |  |
| `whiteSolid.25` | undefined `#343637` |  |
| `whiteSolid.50` | undefined `#444546` |  |
| `whiteSolid.100` | undefined `#626364` |  |
| `whiteSolid.200` | undefined `#8a8a8a` |  |
| `whiteSolid.300` | undefined `#adadad` |  |
| `whiteSolid.400` | undefined `#d1d1d1` |  |
| `whiteSolid.450` | undefined `#e3e3e3` |  |
| `whiteSolid.500` | undefined `#ffffff` |  |
| `blackSolid.1` | undefined `#f5f5f5` |  |
| `blackSolid.5` | undefined `#e8e8e8` |  |
| `blackSolid.10` | undefined `#e0e0e0` |  |
| `blackSolid.25` | undefined `#d9d9d9` |  |
| `blackSolid.50` | undefined `#c9c9c9` |  |
| `blackSolid.100` | undefined `#a8a8a8` |  |
| `blackSolid.200` | undefined `#6b6b6b` |  |
| `blackSolid.300` | undefined `#454545` |  |
| `blackSolid.400` | undefined `#303030` |  |
| `blackSolid.450` | undefined `#1f1f1f` |  |
| `blackSolid.500` | undefined `#000000` |  |

## Semantic tokens

435 tokens.

### Surface / Background

| Token | Light | Dark |
|---|---|---|
| `gray.subtle` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.100` | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.1300` |
| `gray.moderate` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.50` | ![](https://placehold.co/14/131415) `blueGrayDark.1200` |
| `gray.intense` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/1f2123) `blueGrayDark.1100` |
| `primary.faint` | ![](https://placehold.co/14/ffffff) `transparent` | ![](https://placehold.co/14/1b1c1d) `transparent` |
| `primary.subtle` | ![](https://placehold.co/14/eaf1fe) `azure.a50` 9% | ![](https://placehold.co/14/183361) `azure.a200` 32% |
| `primary.moderate` | ![](https://placehold.co/14/ffffff) `transparent` | ![](https://placehold.co/14/1b1c1d) `transparent` |
| `primary.intense` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/1364f1) `azure.500` |
| `primary.strong` | ![](https://placehold.co/14/ffffff) `transparent` | ![](https://placehold.co/14/1b1c1d) `transparent` |
| `sea.subtle` | ![](https://placehold.co/14/edf7f7) `sea.50` | ![](https://placehold.co/14/033f3f) `sea.900` |
| `sea.intense` | ![](https://placehold.co/14/145252) `sea.800` | ![](https://placehold.co/14/e2f3f3) `sea.100` |
| `cloud.subtle` | ![](https://placehold.co/14/edf4f7) `cloud.50` | ![](https://placehold.co/14/032b3f) `cloud.900` |
| `cloud.intense` | ![](https://placehold.co/14/143d52) `cloud.800` | ![](https://placehold.co/14/e6eff4) `cloud.100` |
| `accent.intense` | ![](https://placehold.co/14/ffffff) `transparent` | ![](https://placehold.co/14/1b1c1d) `transparent` |

### Surface / Border

| Token | Light | Dark |
|---|---|---|
| `gray.normal` | ![](https://placehold.co/14/c8cdd0) `blueGrayLight.300` | ![](https://placehold.co/14/73787d) `blueGrayDark.600` |
| `gray.subtle` | ![](https://placehold.co/14/dee1e3) `blueGrayLight.200` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `gray.muted` | ![](https://placehold.co/14/e8e9ea) `blueGrayLight.a912` 12% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `primary.normal` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/1364f1) `azure.500` |
| `primary.muted` | ![](https://placehold.co/14/d5e3fc) `azure.a100` 18% | ![](https://placehold.co/14/183361) `azure.a200` 32% |

### Surface / Text

| Token | Light | Dark |
|---|---|---|
| `gray.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `gray.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `gray.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/5c5f62) `blueGrayDark.a564` 64% |
| `primary.normal` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `onSea.onSubtle` | ![](https://placehold.co/14/006b3e) `forest.800` | ![](https://placehold.co/14/b6ecd1) `forest.200` |
| `onSea.onIntense` | ![](https://placehold.co/14/b6ecd1) `forest.200` | ![](https://placehold.co/14/006b3e) `forest.800` |
| `onCloud.onSubtle` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/a8c8ff) `azure.200` |
| `onCloud.onIntense` | ![](https://placehold.co/14/a8c8ff) `azure.200` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.450` 88% | ![](https://placehold.co/14/e4e4e4) `white.450` 88% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.200` 48% | ![](https://placehold.co/14/888989) `white.200` 48% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `staticBlack.muted` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/0c0c0d) `black.200` 56% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |

### Surface / Icon

| Token | Light | Dark |
|---|---|---|
| `gray.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `gray.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `gray.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `primary.normal` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `onSea.onSubtle` | ![](https://placehold.co/14/009e5c) `forest.600` | ![](https://placehold.co/14/49d08c) `forest.400` |
| `onSea.onIntense` | ![](https://placehold.co/14/49d08c) `forest.400` | ![](https://placehold.co/14/009e5c) `forest.600` |
| `onCloud.onSubtle` | ![](https://placehold.co/14/4287ff) `azure.400` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `onCloud.onIntense` | ![](https://placehold.co/14/75aaff) `azure.300` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.450` 88% | ![](https://placehold.co/14/e4e4e4) `white.450` 88% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.200` 48% | ![](https://placehold.co/14/888989) `white.200` 48% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `staticBlack.muted` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/0c0c0d) `black.200` 56% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |

### Feedback / Background

| Token | Light | Dark |
|---|---|---|
| `positive.subtle` | ![](https://placehold.co/14/e8f5ee) `emerald.a50` 9% | ![](https://placehold.co/14/163125) `emerald.a100` 18% |
| `positive.intense` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `negative.subtle` | ![](https://placehold.co/14/fbebea) `crimson.a50` 9% | ![](https://placehold.co/14/3c1c1b) `crimson.a100` 18% |
| `negative.intense` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `notice.subtle` | ![](https://placehold.co/14/fcf1e8) `cider.a50` 9% | ![](https://placehold.co/14/3e2818) `cider.a100` 18% |
| `notice.intense` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/c75300) `cider.700` |
| `information.subtle` | ![](https://placehold.co/14/e8f5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/16303d) `sapphire.a100` 18% |
| `information.intense` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `neutral.subtle` | ![](https://placehold.co/14/eeefef) `blueGrayLight.a909` 9% | ![](https://placehold.co/14/242527) `blueGrayDark.a509` 9% |
| `neutral.intense` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |

### Feedback / Border

| Token | Light | Dark |
|---|---|---|
| `positive.subtle` | ![](https://placehold.co/14/d1ebde) `emerald.a100` 18% | ![](https://placehold.co/14/12412a) `emerald.a200` 32% |
| `positive.intense` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/005c2e) `emerald.800` |
| `negative.subtle` | ![](https://placehold.co/14/f7d7d4) `crimson.a100` 18% | ![](https://placehold.co/14/551d19) `crimson.a200` 32% |
| `negative.intense` | ![](https://placehold.co/14/aa180e) `crimson.700` | ![](https://placehold.co/14/8d150c) `crimson.800` |
| `notice.subtle` | ![](https://placehold.co/14/f9e2d1) `cider.a100` 18% | ![](https://placehold.co/14/5a3114) `cider.a200` 32% |
| `notice.intense` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ad4800) `cider.800` |
| `information.subtle` | ![](https://placehold.co/14/d1eaf7) `sapphire.a100` 18% | ![](https://placehold.co/14/124057) `sapphire.a200` 32% |
| `information.intense` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/005b85) `sapphire.800` |
| `neutral.subtle` | ![](https://placehold.co/14/dddfe0) `blueGrayLight.a918` 18% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `neutral.intense` | ![](https://placehold.co/14/434b51) `blueGrayLight.900` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |

### Feedback / Text

| Token | Light | Dark |
|---|---|---|
| `positive.subtle` | ![](https://placehold.co/14/cee9db) `emerald.100` | ![](https://placehold.co/14/e6f4ed) `emerald.50` |
| `positive.intense` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `negative.subtle` | ![](https://placehold.co/14/fbe6e4) `crimson.100` | ![](https://placehold.co/14/fdf3f2) `crimson.50` |
| `negative.intense` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `notice.subtle` | ![](https://placehold.co/14/ffe7d6) `cider.100` | ![](https://placehold.co/14/fff6f0) `cider.50` |
| `notice.intense` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `information.subtle` | ![](https://placehold.co/14/ccebfa) `sapphire.100` | ![](https://placehold.co/14/e7f7fd) `sapphire.50` |
| `information.intense` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `neutral.subtle` | ![](https://placehold.co/14/96a0a6) `blueGrayLight.500` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `neutral.intense` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |

### Feedback / Icon

| Token | Light | Dark |
|---|---|---|
| `positive.subtle` | ![](https://placehold.co/14/cee9db) `emerald.100` | ![](https://placehold.co/14/e6f4ed) `emerald.50` |
| `positive.intense` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `negative.subtle` | ![](https://placehold.co/14/fbe6e4) `crimson.100` | ![](https://placehold.co/14/fdf3f2) `crimson.50` |
| `negative.intense` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `notice.subtle` | ![](https://placehold.co/14/ffe7d6) `cider.100` | ![](https://placehold.co/14/fff6f0) `cider.50` |
| `notice.intense` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `information.subtle` | ![](https://placehold.co/14/ccebfa) `sapphire.100` | ![](https://placehold.co/14/e7f7fd) `sapphire.50` |
| `information.intense` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `neutral.subtle` | ![](https://placehold.co/14/96a0a6) `blueGrayLight.500` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `neutral.intense` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |

### Interactive / Background

| Token | Light | Dark |
|---|---|---|
| `positive.default` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/008f47) `emerald.600` |
| `positive.highlighted` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/e8f5ee) `emerald.a50` 9% | ![](https://placehold.co/14/163125) `emerald.a100` 18% |
| `positive.faded` | ![](https://placehold.co/14/e8f5ee) `emerald.a50` 9% | ![](https://placehold.co/14/153827) `emerald.a150` 24% |
| `positive.fadedHighlighted` | ![](https://placehold.co/14/d1ebde) `emerald.a100` 18% | ![](https://placehold.co/14/12412a) `emerald.a200` 32% |
| `negative.default` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/d01e11) `crimson.600` |
| `negative.highlighted` | ![](https://placehold.co/14/aa180e) `crimson.700` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/fbebea) `crimson.a50` 9% | ![](https://placehold.co/14/3c1c1b) `crimson.a100` 18% |
| `negative.faded` | ![](https://placehold.co/14/fbebea) `crimson.a50` 9% | ![](https://placehold.co/14/461c1a) `crimson.a150` 24% |
| `negative.fadedHighlighted` | ![](https://placehold.co/14/f7d7d4) `crimson.a100` 18% | ![](https://placehold.co/14/551d19) `crimson.a200` 32% |
| `notice.default` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/e05e00) `cider.600` |
| `notice.highlighted` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/c75300) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/fcf1e8) `cider.a50` 9% | ![](https://placehold.co/14/3e2818) `cider.a100` 18% |
| `notice.faded` | ![](https://placehold.co/14/fcf1e8) `cider.a50` 9% | ![](https://placehold.co/14/4a2c16) `cider.a150` 24% |
| `notice.fadedHighlighted` | ![](https://placehold.co/14/f9e2d1) `cider.a100` 18% | ![](https://placehold.co/14/5a3114) `cider.a200` 32% |
| `information.default` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/008bd1) `sapphire.600` |
| `information.highlighted` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/e8f5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/16303d) `sapphire.a100` 18% |
| `information.faded` | ![](https://placehold.co/14/e8f5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/153748) `sapphire.a150` 24% |
| `information.fadedHighlighted` | ![](https://placehold.co/14/d1eaf7) `sapphire.a100` 18% | ![](https://placehold.co/14/124057) `sapphire.a200` 32% |
| `neutral.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `neutral.highlighted` | ![](https://placehold.co/14/1f1f1f) `blackSolid.450` | ![](https://placehold.co/14/e3e3e3) `whiteSolid.450` |
| `neutral.disabledSolid` | ![](https://placehold.co/14/a8a8a8) `blackSolid.100` | ![](https://placehold.co/14/626364) `whiteSolid.100` |
| `neutral.disabled` | ![](https://placehold.co/14/d1d1d1) `black.50` 18% | ![](https://placehold.co/14/444546) `white.50` 18% |
| `neutral.faded` | ![](https://placehold.co/14/e8e9ea) `blueGrayLight.a912` 12% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `neutral.fadedHighlighted` | ![](https://placehold.co/14/dddfe0) `blueGrayLight.a918` 18% | ![](https://placehold.co/14/333537) `blueGrayDark.a524` 24% |
| `gray.default` | ![](https://placehold.co/14/f4f4f5) `blueGrayLight.a906` 6% | ![](https://placehold.co/14/27292a) `blueGrayDark.a512` 12% |
| `gray.highlighted` | ![](https://placehold.co/14/e8e9ea) `blueGrayLight.a912` 12% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `gray.disabled` | ![](https://placehold.co/14/f4f4f5) `blueGrayLight.a906` 6% | ![](https://placehold.co/14/242527) `blueGrayDark.a509` 9% |
| `gray.faded` | ![](https://placehold.co/14/f4f4f5) `blueGrayLight.a906` 6% | ![](https://placehold.co/14/242527) `blueGrayDark.a509` 9% |
| `gray.fadedHighlighted` | ![](https://placehold.co/14/eeefef) `blueGrayLight.a909` 9% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `gray.ghost` | ![](https://placehold.co/14/ffffff) `blueGrayLight.a1` 1% | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.a1388` 88% |
| `primary.default` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `primary.highlighted` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/1364f1) `azure.500` |
| `primary.disabled` | ![](https://placehold.co/14/d5e3fc) `azure.a100` 18% | ![](https://placehold.co/14/192d50) `azure.a150` 24% |
| `primary.faded` | ![](https://placehold.co/14/eaf1fe) `azure.a50` 9% | ![](https://placehold.co/14/192d50) `azure.a150` 24% |
| `primary.fadedHighlighted` | ![](https://placehold.co/14/d5e3fc) `azure.a100` 18% | ![](https://placehold.co/14/183361) `azure.a200` 32% |
| `staticBlack.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.highlighted` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.disabled` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/0c0c0d) `black.200` 56% |
| `staticBlack.faded` | ![](https://placehold.co/14/d1d1d1) `black.50` 18% | ![](https://placehold.co/14/161718) `black.50` 18% |
| `staticBlack.fadedHighlighted` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |
| `staticBlack.ghost` | ![](https://placehold.co/14/fcfcfc) `black.1` 1% | ![](https://placehold.co/14/1b1c1d) `black.1` 1% |
| `staticWhite.default` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.highlighted` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/444546) `white.50` 18% |
| `staticWhite.faded` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/444546) `white.50` 18% |
| `staticWhite.fadedHighlighted` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticWhite.ghost` | ![](https://placehold.co/14/ffffff) `white.1` 1% | ![](https://placehold.co/14/1d1e1f) `white.1` 1% |

### Interactive / Border

| Token | Light | Dark |
|---|---|---|
| `positive.default` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/008f47) `emerald.600` |
| `positive.highlighted` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/d1ebde) `emerald.a100` 18% | ![](https://placehold.co/14/163125) `emerald.a100` 18% |
| `positive.faded` | ![](https://placehold.co/14/d1ebde) `emerald.a100` 18% | ![](https://placehold.co/14/163125) `emerald.a100` 18% |
| `negative.default` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/d01e11) `crimson.600` |
| `negative.highlighted` | ![](https://placehold.co/14/aa180e) `crimson.700` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/f7d7d4) `crimson.a100` 18% | ![](https://placehold.co/14/3c1c1b) `crimson.a100` 18% |
| `negative.faded` | ![](https://placehold.co/14/f7d7d4) `crimson.a100` 18% | ![](https://placehold.co/14/3c1c1b) `crimson.a100` 18% |
| `notice.default` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/e05e00) `cider.600` |
| `notice.highlighted` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/c75300) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/f9e2d1) `cider.a100` 18% | ![](https://placehold.co/14/3e2818) `cider.a100` 18% |
| `notice.faded` | ![](https://placehold.co/14/f9e2d1) `cider.a100` 18% | ![](https://placehold.co/14/3e2818) `cider.a100` 18% |
| `information.default` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/008bd1) `sapphire.600` |
| `information.highlighted` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/d1eaf7) `sapphire.a100` 18% | ![](https://placehold.co/14/16303d) `sapphire.a100` 18% |
| `information.faded` | ![](https://placehold.co/14/d1eaf7) `sapphire.a100` 18% | ![](https://placehold.co/14/16303d) `sapphire.a100` 18% |
| `neutral.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `neutral.highlighted` | ![](https://placehold.co/14/1f1f1f) `black.450` 88% | ![](https://placehold.co/14/e4e4e4) `white.450` 88% |
| `neutral.disabled` | ![](https://placehold.co/14/c8cdd0) `blueGrayLight.300` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `neutral.faded` | ![](https://placehold.co/14/e8e9ea) `blueGrayLight.a912` 12% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `gray.default` | ![](https://placehold.co/14/dee1e3) `blueGrayLight.200` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `gray.highlighted` | ![](https://placehold.co/14/afb6bb) `blueGrayLight.400` | ![](https://placehold.co/14/585c5f) `blueGrayDark.700` |
| `gray.disabled` | ![](https://placehold.co/14/dee1e3) `blueGrayLight.200` | ![](https://placehold.co/14/27292b) `blueGrayDark.1000` |
| `gray.faded` | ![](https://placehold.co/14/dddfe0) `blueGrayLight.a918` 18% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `primary.default` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `primary.highlighted` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `primary.disabled` | ![](https://placehold.co/14/d5e3fc) `azure.a100` 18% | ![](https://placehold.co/14/183361) `azure.a200` 32% |
| `primary.faded` | ![](https://placehold.co/14/d5e3fc) `azure.a100` 18% | ![](https://placehold.co/14/192d50) `azure.a150` 24% |
| `staticWhite.default` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.highlighted` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticWhite.faded` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/444546) `white.50` 18% |
| `staticWhite.fadedHighlighted` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticBlack.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.highlighted` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |
| `staticBlack.faded` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |
| `staticBlack.fadedHighlighted` | ![](https://placehold.co/14/d1d1d1) `black.50` 18% | ![](https://placehold.co/14/161718) `black.50` 18% |

### Interactive / Text

| Token | Light | Dark |
|---|---|---|
| `positive.normal` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `positive.subtle` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/009954) `emerald.500` |
| `positive.muted` | ![](https://placehold.co/14/3aa670) `emerald.400` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/addbc4) `emerald.a200` 32% | ![](https://placehold.co/14/12412a) `emerald.a200` 32% |
| `negative.normal` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `negative.subtle` | ![](https://placehold.co/14/df3e30) `crimson.500` | ![](https://placehold.co/14/df3e30) `crimson.500` |
| `negative.muted` | ![](https://placehold.co/14/e86559) `crimson.400` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/f0b7b3) `crimson.a200` 32% | ![](https://placehold.co/14/551d19) `crimson.a200` 32% |
| `notice.normal` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `notice.subtle` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/f56d19) `cider.500` |
| `notice.muted` | ![](https://placehold.co/14/ff8742) `cider.400` | ![](https://placehold.co/14/c75300) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/f5cbad) `cider.a200` 32% | ![](https://placehold.co/14/5a3114) `cider.a200` 32% |
| `information.normal` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `information.subtle` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/00a1e6) `sapphire.500` |
| `information.muted` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/addaf0) `sapphire.a200` 32% | ![](https://placehold.co/14/124057) `sapphire.a200` 32% |
| `neutral.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `neutral.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `neutral.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `neutral.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `gray.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `gray.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `gray.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `primary.normal` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `primary.subtle` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `primary.muted` | ![](https://placehold.co/14/4287ff) `azure.400` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `primary.disabled` | ![](https://placehold.co/14/b3cdfb) `azure.a200` 32% | ![](https://placehold.co/14/164aa5) `azure.a400` 64% |
| `onPrimary.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `onPrimary.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `onPrimary.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/adadae) `white.300` 64% |
| `onPrimary.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `onNeutral.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/000000) `black.500` |
| `onNeutral.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/050606) `black.400` 80% |
| `onNeutral.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `onNeutral.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/adadae) `white.300` 64% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/333333) `black.400` 80% | ![](https://placehold.co/14/050606) `black.400` 80% |
| `staticBlack.muted` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |

### Interactive / Icon

| Token | Light | Dark |
|---|---|---|
| `positive.normal` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `positive.subtle` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/009954) `emerald.500` |
| `positive.muted` | ![](https://placehold.co/14/3aa670) `emerald.400` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/addbc4) `emerald.a200` 32% | ![](https://placehold.co/14/12412a) `emerald.a200` 32% |
| `negative.normal` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `negative.subtle` | ![](https://placehold.co/14/df3e30) `crimson.500` | ![](https://placehold.co/14/df3e30) `crimson.500` |
| `negative.muted` | ![](https://placehold.co/14/e86559) `crimson.400` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/f0b7b3) `crimson.a200` 32% | ![](https://placehold.co/14/551d19) `crimson.a200` 32% |
| `notice.normal` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `notice.subtle` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/f56d19) `cider.500` |
| `notice.muted` | ![](https://placehold.co/14/ff8742) `cider.400` | ![](https://placehold.co/14/c75300) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/f5cbad) `cider.a200` 32% | ![](https://placehold.co/14/5a3114) `cider.a200` 32% |
| `information.normal` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `information.subtle` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/00a1e6) `sapphire.500` |
| `information.muted` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/addaf0) `sapphire.a200` 32% | ![](https://placehold.co/14/124057) `sapphire.a200` 32% |
| `neutral.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `neutral.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `neutral.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `neutral.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `gray.normal` | ![](https://placehold.co/14/050505) `blueGrayLight.1300` | ![](https://placehold.co/14/ffffff) `blueGrayDark.0` |
| `gray.subtle` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `gray.disabled` | ![](https://placehold.co/14/c3c5c7) `blueGrayLight.a932` 32% | ![](https://placehold.co/14/3b3e40) `blueGrayDark.a532` 32% |
| `primary.normal` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `primary.subtle` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `primary.muted` | ![](https://placehold.co/14/4287ff) `azure.400` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `primary.disabled` | ![](https://placehold.co/14/b3cdfb) `azure.a200` 32% | ![](https://placehold.co/14/164aa5) `azure.a400` 64% |
| `onPrimary.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `onPrimary.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `onPrimary.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/adadae) `white.300` 64% |
| `onPrimary.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `onNeutral.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/000000) `black.500` |
| `onNeutral.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/050606) `black.400` 80% |
| `onNeutral.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `onNeutral.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/d1d2d2) `white.400` 80% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/adadae) `white.300` 64% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/646565) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/333333) `black.400` 80% | ![](https://placehold.co/14/050606) `black.400` 80% |
| `staticBlack.muted` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/121314) `black.100` 32% |

### Overlay / Background

| Token | Light | Dark |
|---|---|---|
| `moderate` | ![](https://placehold.co/14/dddfe0) `blueGrayLight.a918` 18% | ![](https://placehold.co/14/2d2f30) `blueGrayDark.a518` 18% |
| `subtle` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/050606) `black.400` 80% |

### Popup / Background

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/27292b) `blueGrayDark.1000` |
| `intense` | ![](https://placehold.co/14/373e43) `blueGrayLight.1000` | ![](https://placehold.co/14/585c5f) `blueGrayDark.700` |
| `gray.subtle` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.1300` |
| `gray.moderate` | ![](https://placehold.co/14/ffffff) `blueGrayLight.a48` 94% | ![](https://placehold.co/14/1f2022) `blueGrayDark.a1188` 88% |
| `gray.intense` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/080808) `black.300` 72% |
| `positive.moderate` | ![](https://placehold.co/14/1f9c5d) `emerald.a700` 88% | ![](https://placehold.co/14/038142) `emerald.a700` 88% |
| `negative.moderate` | ![](https://placehold.co/14/d6392e) `crimson.a700` 88% | ![](https://placehold.co/14/ba1e12) `crimson.a700` 88% |
| `notice.moderate` | ![](https://placehold.co/14/e4711f) `cider.a700` 88% | ![](https://placehold.co/14/c85603) `cider.a700` 88% |
| `information.moderate` | ![](https://placehold.co/14/1f99d7) `sapphire.a700` 88% | ![](https://placehold.co/14/037ebb) `sapphire.a700` 88% |
| `neutral.moderate` | ![](https://placehold.co/14/35383a) `blueGrayLight.a1288` 88% | ![](https://placehold.co/14/37393c) `blueGrayDark.a888` 88% |

### Popup / Border

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/ffffff) `blueGrayLight.a100` 0% | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.a100` 0% |
| `intense` | ![](https://placehold.co/14/434b51) `blueGrayLight.900` | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.a100` 0% |
| `gray.subtle` | ![](https://placehold.co/14/eeefef) `blueGrayLight.a909` 9% | ![](https://placehold.co/14/27292a) `blueGrayDark.a512` 12% |
| `gray.moderate` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.100` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `gray.intense` | ![](https://placehold.co/14/373e43) `blueGrayLight.1000` | ![](https://placehold.co/14/27292b) `blueGrayDark.1000` |
| `positive.moderate` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/008f47) `emerald.600` |
| `negative.moderate` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/d01e11) `crimson.600` |
| `notice.moderate` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/e05e00) `cider.600` |
| `information.moderate` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/008bd1) `sapphire.600` |
| `neutral.moderate` | ![](https://placehold.co/14/292f32) `blueGrayLight.1100` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |

### Data / Background

| Token | Light | Dark |
|---|---|---|
| `categorical.blue.faint` | ![](https://placehold.co/14/d6e5ff) `azure.100` | ![](https://placehold.co/14/073688) `azure.800` |
| `categorical.blue.subtle` | ![](https://placehold.co/14/a8c8ff) `azure.200` | ![](https://placehold.co/14/0a44a9) `azure.700` |
| `categorical.blue.moderate` | ![](https://placehold.co/14/75aaff) `azure.300` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `categorical.blue.intense` | ![](https://placehold.co/14/4287ff) `azure.400` | ![](https://placehold.co/14/1364f1) `azure.500` |
| `categorical.blue.strong` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `categorical.green.faint` | ![](https://placehold.co/14/cee9db) `emerald.100` | ![](https://placehold.co/14/005c2e) `emerald.800` |
| `categorical.green.subtle` | ![](https://placehold.co/14/9cd3b8) `emerald.200` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `categorical.green.moderate` | ![](https://placehold.co/14/6bbd94) `emerald.300` | ![](https://placehold.co/14/008f47) `emerald.600` |
| `categorical.green.intense` | ![](https://placehold.co/14/3aa670) `emerald.400` | ![](https://placehold.co/14/009954) `emerald.500` |
| `categorical.green.strong` | ![](https://placehold.co/14/009954) `emerald.500` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `categorical.red.faint` | ![](https://placehold.co/14/fbe6e4) `crimson.100` | ![](https://placehold.co/14/8d150c) `crimson.800` |
| `categorical.red.subtle` | ![](https://placehold.co/14/f6c1bc) `crimson.200` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `categorical.red.moderate` | ![](https://placehold.co/14/f0968e) `crimson.300` | ![](https://placehold.co/14/d01e11) `crimson.600` |
| `categorical.red.intense` | ![](https://placehold.co/14/e86559) `crimson.400` | ![](https://placehold.co/14/df3e30) `crimson.500` |
| `categorical.red.strong` | ![](https://placehold.co/14/df3e30) `crimson.500` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `categorical.orange.faint` | ![](https://placehold.co/14/ffe7d6) `cider.100` | ![](https://placehold.co/14/ad4800) `cider.800` |
| `categorical.orange.subtle` | ![](https://placehold.co/14/ffc9a3) `cider.200` | ![](https://placehold.co/14/c75300) `cider.700` |
| `categorical.orange.moderate` | ![](https://placehold.co/14/ffa66b) `cider.300` | ![](https://placehold.co/14/e05e00) `cider.600` |
| `categorical.orange.intense` | ![](https://placehold.co/14/ff8742) `cider.400` | ![](https://placehold.co/14/f56d19) `cider.500` |
| `categorical.orange.strong` | ![](https://placehold.co/14/f56d19) `cider.500` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `categorical.skyBlue.faint` | ![](https://placehold.co/14/ccebfa) `sapphire.100` | ![](https://placehold.co/14/005b85) `sapphire.800` |
| `categorical.skyBlue.subtle` | ![](https://placehold.co/14/9dd8f6) `sapphire.200` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `categorical.skyBlue.moderate` | ![](https://placehold.co/14/6ac6f1) `sapphire.300` | ![](https://placehold.co/14/008bd1) `sapphire.600` |
| `categorical.skyBlue.intense` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` | ![](https://placehold.co/14/00a1e6) `sapphire.500` |
| `categorical.skyBlue.strong` | ![](https://placehold.co/14/00a1e6) `sapphire.500` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `categorical.purple.faint` | ![](https://placehold.co/14/ddc7ff) `orchid.100` | ![](https://placehold.co/14/472895) `orchid.800` |
| `categorical.purple.subtle` | ![](https://placehold.co/14/cdadff) `orchid.200` | ![](https://placehold.co/14/6038bc) `orchid.700` |
| `categorical.purple.moderate` | ![](https://placehold.co/14/b994ff) `orchid.300` | ![](https://placehold.co/14/744ade) `orchid.600` |
| `categorical.purple.intense` | ![](https://placehold.co/14/a47aff) `orchid.400` | ![](https://placehold.co/14/8f62f9) `orchid.500` |
| `categorical.purple.strong` | ![](https://placehold.co/14/8f62f9) `orchid.500` | ![](https://placehold.co/14/a47aff) `orchid.400` |
| `categorical.pink.faint` | ![](https://placehold.co/14/ffbdf2) `magenta.100` | ![](https://placehold.co/14/75155b) `magenta.800` |
| `categorical.pink.subtle` | ![](https://placehold.co/14/ff9ee5) `magenta.200` | ![](https://placehold.co/14/962277) `magenta.700` |
| `categorical.pink.moderate` | ![](https://placehold.co/14/f87cd7) `magenta.300` | ![](https://placehold.co/14/b73492) `magenta.600` |
| `categorical.pink.intense` | ![](https://placehold.co/14/e75fc3) `magenta.400` | ![](https://placehold.co/14/d147aa) `magenta.500` |
| `categorical.pink.strong` | ![](https://placehold.co/14/d147aa) `magenta.500` | ![](https://placehold.co/14/e75fc3) `magenta.400` |
| `categorical.gold.faint` | ![](https://placehold.co/14/f9e8ae) `topaz.50` | ![](https://placehold.co/14/7a4e00) `topaz.700` |
| `categorical.gold.subtle` | ![](https://placehold.co/14/efd06c) `topaz.100` | ![](https://placehold.co/14/8f5d00) `topaz.600` |
| `categorical.gold.moderate` | ![](https://placehold.co/14/e2ba36) `topaz.200` | ![](https://placehold.co/14/a87300) `topaz.500` |
| `categorical.gold.intense` | ![](https://placehold.co/14/d4a408) `topaz.300` | ![](https://placehold.co/14/bd8a00) `topaz.400` |
| `categorical.gold.strong` | ![](https://placehold.co/14/bd8a00) `topaz.400` | ![](https://placehold.co/14/d4a408) `topaz.300` |
| `categorical.gray.faint` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/131415) `blueGrayDark.1200` |
| `categorical.gray.subtle` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.50` | ![](https://placehold.co/14/27292b) `blueGrayDark.1000` |
| `categorical.gray.moderate` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.100` | ![](https://placehold.co/14/313335) `blueGrayDark.900` |
| `categorical.gray.intense` | ![](https://placehold.co/14/afb6bb) `blueGrayLight.400` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |
| `categorical.gray.strong` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/73787d) `blueGrayDark.600` |
| `sequential.blue.50` | ![](https://placehold.co/14/f5f9ff) `azure.50` | ![](https://placehold.co/14/021331) `azure.1000` |
| `sequential.blue.100` | ![](https://placehold.co/14/d6e5ff) `azure.100` | ![](https://placehold.co/14/052761) `azure.900` |
| `sequential.blue.200` | ![](https://placehold.co/14/a8c8ff) `azure.200` | ![](https://placehold.co/14/073688) `azure.800` |
| `sequential.blue.300` | ![](https://placehold.co/14/75aaff) `azure.300` | ![](https://placehold.co/14/0a44a9) `azure.700` |
| `sequential.blue.400` | ![](https://placehold.co/14/4287ff) `azure.400` | ![](https://placehold.co/14/0e54cd) `azure.600` |
| `sequential.blue.500` | ![](https://placehold.co/14/1364f1) `azure.500` | ![](https://placehold.co/14/1364f1) `azure.500` |
| `sequential.blue.600` | ![](https://placehold.co/14/0e54cd) `azure.600` | ![](https://placehold.co/14/4287ff) `azure.400` |
| `sequential.blue.700` | ![](https://placehold.co/14/0a44a9) `azure.700` | ![](https://placehold.co/14/75aaff) `azure.300` |
| `sequential.blue.800` | ![](https://placehold.co/14/073688) `azure.800` | ![](https://placehold.co/14/a8c8ff) `azure.200` |
| `sequential.blue.900` | ![](https://placehold.co/14/052761) `azure.900` | ![](https://placehold.co/14/d6e5ff) `azure.100` |
| `sequential.blue.1000` | ![](https://placehold.co/14/021331) `azure.1000` | ![](https://placehold.co/14/f5f9ff) `azure.50` |
| `sequential.green.50` | ![](https://placehold.co/14/e6f4ed) `emerald.50` | ![](https://placehold.co/14/00381c) `emerald.1000` |
| `sequential.green.100` | ![](https://placehold.co/14/cee9db) `emerald.100` | ![](https://placehold.co/14/004724) `emerald.900` |
| `sequential.green.200` | ![](https://placehold.co/14/9cd3b8) `emerald.200` | ![](https://placehold.co/14/005c2e) `emerald.800` |
| `sequential.green.300` | ![](https://placehold.co/14/6bbd94) `emerald.300` | ![](https://placehold.co/14/00753b) `emerald.700` |
| `sequential.green.400` | ![](https://placehold.co/14/3aa670) `emerald.400` | ![](https://placehold.co/14/008f47) `emerald.600` |
| `sequential.green.500` | ![](https://placehold.co/14/009954) `emerald.500` | ![](https://placehold.co/14/009954) `emerald.500` |
| `sequential.green.600` | ![](https://placehold.co/14/008f47) `emerald.600` | ![](https://placehold.co/14/3aa670) `emerald.400` |
| `sequential.green.700` | ![](https://placehold.co/14/00753b) `emerald.700` | ![](https://placehold.co/14/6bbd94) `emerald.300` |
| `sequential.green.800` | ![](https://placehold.co/14/005c2e) `emerald.800` | ![](https://placehold.co/14/9cd3b8) `emerald.200` |
| `sequential.green.900` | ![](https://placehold.co/14/004724) `emerald.900` | ![](https://placehold.co/14/cee9db) `emerald.100` |
| `sequential.green.1000` | ![](https://placehold.co/14/00381c) `emerald.1000` | ![](https://placehold.co/14/e6f4ed) `emerald.50` |
| `sequential.red.50` | ![](https://placehold.co/14/fdf3f2) `crimson.50` | ![](https://placehold.co/14/620f09) `crimson.1000` |
| `sequential.red.100` | ![](https://placehold.co/14/fbe6e4) `crimson.100` | ![](https://placehold.co/14/7a100b) `crimson.900` |
| `sequential.red.200` | ![](https://placehold.co/14/f6c1bc) `crimson.200` | ![](https://placehold.co/14/8d150c) `crimson.800` |
| `sequential.red.300` | ![](https://placehold.co/14/f0968e) `crimson.300` | ![](https://placehold.co/14/aa180e) `crimson.700` |
| `sequential.red.400` | ![](https://placehold.co/14/e86559) `crimson.400` | ![](https://placehold.co/14/d01e11) `crimson.600` |
| `sequential.red.500` | ![](https://placehold.co/14/df3e30) `crimson.500` | ![](https://placehold.co/14/df3e30) `crimson.500` |
| `sequential.red.600` | ![](https://placehold.co/14/d01e11) `crimson.600` | ![](https://placehold.co/14/e86559) `crimson.400` |
| `sequential.red.700` | ![](https://placehold.co/14/aa180e) `crimson.700` | ![](https://placehold.co/14/f0968e) `crimson.300` |
| `sequential.red.800` | ![](https://placehold.co/14/8d150c) `crimson.800` | ![](https://placehold.co/14/f6c1bc) `crimson.200` |
| `sequential.red.900` | ![](https://placehold.co/14/7a100b) `crimson.900` | ![](https://placehold.co/14/fbe6e4) `crimson.100` |
| `sequential.red.1000` | ![](https://placehold.co/14/620f09) `crimson.1000` | ![](https://placehold.co/14/fdf3f2) `crimson.50` |
| `sequential.orange.50` | ![](https://placehold.co/14/fff6f0) `cider.50` | ![](https://placehold.co/14/6b2d00) `cider.1000` |
| `sequential.orange.100` | ![](https://placehold.co/14/ffe7d6) `cider.100` | ![](https://placehold.co/14/8f3c00) `cider.900` |
| `sequential.orange.200` | ![](https://placehold.co/14/ffc9a3) `cider.200` | ![](https://placehold.co/14/ad4800) `cider.800` |
| `sequential.orange.300` | ![](https://placehold.co/14/ffa66b) `cider.300` | ![](https://placehold.co/14/c75300) `cider.700` |
| `sequential.orange.400` | ![](https://placehold.co/14/ff8742) `cider.400` | ![](https://placehold.co/14/e05e00) `cider.600` |
| `sequential.orange.500` | ![](https://placehold.co/14/f56d19) `cider.500` | ![](https://placehold.co/14/f56d19) `cider.500` |
| `sequential.orange.600` | ![](https://placehold.co/14/e05e00) `cider.600` | ![](https://placehold.co/14/ff8742) `cider.400` |
| `sequential.orange.700` | ![](https://placehold.co/14/c75300) `cider.700` | ![](https://placehold.co/14/ffa66b) `cider.300` |
| `sequential.orange.800` | ![](https://placehold.co/14/ad4800) `cider.800` | ![](https://placehold.co/14/ffc9a3) `cider.200` |
| `sequential.orange.900` | ![](https://placehold.co/14/8f3c00) `cider.900` | ![](https://placehold.co/14/ffe7d6) `cider.100` |
| `sequential.orange.1000` | ![](https://placehold.co/14/6b2d00) `cider.1000` | ![](https://placehold.co/14/fff6f0) `cider.50` |
| `sequential.skyBlue.50` | ![](https://placehold.co/14/e7f7fd) `sapphire.50` | ![](https://placehold.co/14/002d42) `sapphire.1000` |
| `sequential.skyBlue.100` | ![](https://placehold.co/14/ccebfa) `sapphire.100` | ![](https://placehold.co/14/004161) `sapphire.900` |
| `sequential.skyBlue.200` | ![](https://placehold.co/14/9dd8f6) `sapphire.200` | ![](https://placehold.co/14/005b85) `sapphire.800` |
| `sequential.skyBlue.300` | ![](https://placehold.co/14/6ac6f1) `sapphire.300` | ![](https://placehold.co/14/0070a8) `sapphire.700` |
| `sequential.skyBlue.400` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` | ![](https://placehold.co/14/008bd1) `sapphire.600` |
| `sequential.skyBlue.500` | ![](https://placehold.co/14/00a1e6) `sapphire.500` | ![](https://placehold.co/14/00a1e6) `sapphire.500` |
| `sequential.skyBlue.600` | ![](https://placehold.co/14/008bd1) `sapphire.600` | ![](https://placehold.co/14/3bb4ed) `sapphire.400` |
| `sequential.skyBlue.700` | ![](https://placehold.co/14/0070a8) `sapphire.700` | ![](https://placehold.co/14/6ac6f1) `sapphire.300` |
| `sequential.skyBlue.800` | ![](https://placehold.co/14/005b85) `sapphire.800` | ![](https://placehold.co/14/9dd8f6) `sapphire.200` |
| `sequential.skyBlue.900` | ![](https://placehold.co/14/004161) `sapphire.900` | ![](https://placehold.co/14/ccebfa) `sapphire.100` |
| `sequential.skyBlue.1000` | ![](https://placehold.co/14/002d42) `sapphire.1000` | ![](https://placehold.co/14/e7f7fd) `sapphire.50` |
| `sequential.purple.50` | ![](https://placehold.co/14/f1e5ff) `orchid.50` | ![](https://placehold.co/14/1a0c3b) `orchid.1000` |
| `sequential.purple.100` | ![](https://placehold.co/14/ddc7ff) `orchid.100` | ![](https://placehold.co/14/30196b) `orchid.900` |
| `sequential.purple.200` | ![](https://placehold.co/14/cdadff) `orchid.200` | ![](https://placehold.co/14/472895) `orchid.800` |
| `sequential.purple.300` | ![](https://placehold.co/14/b994ff) `orchid.300` | ![](https://placehold.co/14/6038bc) `orchid.700` |
| `sequential.purple.400` | ![](https://placehold.co/14/a47aff) `orchid.400` | ![](https://placehold.co/14/744ade) `orchid.600` |
| `sequential.purple.500` | ![](https://placehold.co/14/8f62f9) `orchid.500` | ![](https://placehold.co/14/8f62f9) `orchid.500` |
| `sequential.purple.600` | ![](https://placehold.co/14/744ade) `orchid.600` | ![](https://placehold.co/14/a47aff) `orchid.400` |
| `sequential.purple.700` | ![](https://placehold.co/14/6038bc) `orchid.700` | ![](https://placehold.co/14/b994ff) `orchid.300` |
| `sequential.purple.800` | ![](https://placehold.co/14/472895) `orchid.800` | ![](https://placehold.co/14/cdadff) `orchid.200` |
| `sequential.purple.900` | ![](https://placehold.co/14/30196b) `orchid.900` | ![](https://placehold.co/14/ddc7ff) `orchid.100` |
| `sequential.purple.1000` | ![](https://placehold.co/14/1a0c3b) `orchid.1000` | ![](https://placehold.co/14/f1e5ff) `orchid.50` |
| `sequential.pink.50` | ![](https://placehold.co/14/ffe0fa) `magenta.50` | ![](https://placehold.co/14/2e0522) `magenta.1000` |
| `sequential.pink.100` | ![](https://placehold.co/14/ffbdf2) `magenta.100` | ![](https://placehold.co/14/510b3e) `magenta.900` |
| `sequential.pink.200` | ![](https://placehold.co/14/ff9ee5) `magenta.200` | ![](https://placehold.co/14/75155b) `magenta.800` |
| `sequential.pink.300` | ![](https://placehold.co/14/f87cd7) `magenta.300` | ![](https://placehold.co/14/962277) `magenta.700` |
| `sequential.pink.400` | ![](https://placehold.co/14/e75fc3) `magenta.400` | ![](https://placehold.co/14/b73492) `magenta.600` |
| `sequential.pink.500` | ![](https://placehold.co/14/d147aa) `magenta.500` | ![](https://placehold.co/14/d147aa) `magenta.500` |
| `sequential.pink.600` | ![](https://placehold.co/14/b73492) `magenta.600` | ![](https://placehold.co/14/e75fc3) `magenta.400` |
| `sequential.pink.700` | ![](https://placehold.co/14/962277) `magenta.700` | ![](https://placehold.co/14/f87cd7) `magenta.300` |
| `sequential.pink.800` | ![](https://placehold.co/14/75155b) `magenta.800` | ![](https://placehold.co/14/ff9ee5) `magenta.200` |
| `sequential.pink.900` | ![](https://placehold.co/14/510b3e) `magenta.900` | ![](https://placehold.co/14/ffbdf2) `magenta.100` |
| `sequential.pink.1000` | ![](https://placehold.co/14/2e0522) `magenta.1000` | ![](https://placehold.co/14/ffe0fa) `magenta.50` |
| `sequential.gold.50` | ![](https://placehold.co/14/f9e8ae) `topaz.50` | ![](https://placehold.co/14/241400) `topaz.1000` |
| `sequential.gold.100` | ![](https://placehold.co/14/efd06c) `topaz.100` | ![](https://placehold.co/14/422700) `topaz.900` |
| `sequential.gold.200` | ![](https://placehold.co/14/e2ba36) `topaz.200` | ![](https://placehold.co/14/5c3900) `topaz.800` |
| `sequential.gold.300` | ![](https://placehold.co/14/d4a408) `topaz.300` | ![](https://placehold.co/14/7a4e00) `topaz.700` |
| `sequential.gold.400` | ![](https://placehold.co/14/bd8a00) `topaz.400` | ![](https://placehold.co/14/8f5d00) `topaz.600` |
| `sequential.gold.500` | ![](https://placehold.co/14/a87300) `topaz.500` | ![](https://placehold.co/14/a87300) `topaz.500` |
| `sequential.gold.600` | ![](https://placehold.co/14/8f5d00) `topaz.600` | ![](https://placehold.co/14/bd8a00) `topaz.400` |
| `sequential.gold.700` | ![](https://placehold.co/14/7a4e00) `topaz.700` | ![](https://placehold.co/14/d4a408) `topaz.300` |
| `sequential.gold.800` | ![](https://placehold.co/14/5c3900) `topaz.800` | ![](https://placehold.co/14/e2ba36) `topaz.200` |
| `sequential.gold.900` | ![](https://placehold.co/14/422700) `topaz.900` | ![](https://placehold.co/14/efd06c) `topaz.100` |
| `sequential.gold.1000` | ![](https://placehold.co/14/241400) `topaz.1000` | ![](https://placehold.co/14/f9e8ae) `topaz.50` |
| `sequential.gray.0` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/1b1c1d) `blueGrayDark.1300` |
| `sequential.gray.50` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.50` | ![](https://placehold.co/14/131415) `blueGrayDark.1200` |
| `sequential.gray.100` | ![](https://placehold.co/14/f7f7f7) `blueGrayLight.100` | ![](https://placehold.co/14/1f2123) `blueGrayDark.1100` |
| `sequential.gray.200` | ![](https://placehold.co/14/dee1e3) `blueGrayLight.200` | ![](https://placehold.co/14/27292b) `blueGrayDark.1000` |
| `sequential.gray.300` | ![](https://placehold.co/14/c8cdd0) `blueGrayLight.300` | ![](https://placehold.co/14/313335) `blueGrayDark.900` |
| `sequential.gray.400` | ![](https://placehold.co/14/afb6bb) `blueGrayLight.400` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `sequential.gray.500` | ![](https://placehold.co/14/96a0a6) `blueGrayLight.500` | ![](https://placehold.co/14/3b3d40) `blueGrayDark.800` |
| `sequential.gray.600` | ![](https://placehold.co/14/7b878e) `blueGrayLight.600` | ![](https://placehold.co/14/585c5f) `blueGrayDark.700` |
| `sequential.gray.700` | ![](https://placehold.co/14/616d75) `blueGrayLight.700` | ![](https://placehold.co/14/73787d) `blueGrayDark.600` |
| `sequential.gray.800` | ![](https://placehold.co/14/4f585f) `blueGrayLight.800` | ![](https://placehold.co/14/808589) `blueGrayDark.500` |
| `sequential.gray.900` | ![](https://placehold.co/14/434b51) `blueGrayLight.900` | ![](https://placehold.co/14/96999c) `blueGrayDark.400` |
| `sequential.gray.1000` | ![](https://placehold.co/14/373e43) `blueGrayLight.1000` | ![](https://placehold.co/14/aeb0b2) `blueGrayDark.300` |

### Transparent

| Token | Light | Dark |
|---|---|---|
| `transparent` | ![](https://placehold.co/14/ffffff) `hsla(0, 0%, 100%, 0)` 0% | ![](https://placehold.co/14/1b1c1d) `hsla(210, 6%, 13%, 0)` 0% |
