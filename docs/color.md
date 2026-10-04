# Color

Generated from `tokens/color.primitives.json` and `tokens/color.semantic.json` (checkpoint `color-foundation-v1`). Do not edit by hand. Change the tokens, then regenerate.

Source decision: [0001 Color foundation](../decisions/0001-color-foundation.md). Pilot scope: web, Blade reference values.

## How to use color

- **Primitives are internal.** They are raw values that semantic tokens point to, and stay out of designs and components.
- **Pick semantic tokens only.** They carry meaning (text, border, background) and switch between the light and dark theme.
- **Names.** Figma shows tokens with slashes, for example `surface/background/primary/subtle`. Code and these tables use dots.
- **Light and dark.** Each token lists its light value and its dark value. The pilot builds the light theme in Figma and code. Dark values are recorded for later.
- **Swatches.** Translucent colors are previewed flattened on white (light) or on the dark page color `blueGrayDark.1300` (dark). The percentage is the real opacity.
- **Deprecated tokens** are not recreated and must not be used.

## Guardrails

| # | Rule |
|---|---|
| 1 | Designers use semantic tokens only. Primitives are internal. |
| 2 | Deprecated tokens are never used. |
| 3 | Feedback-colored components use surface text colors. |
| 4 | Dismiss icons use surface tokens. |
| 5 | A new color token must point directly to one primitive. |
| 6 | Primitive variables have no scopes in Figma. |
| 7 | A semantic variable's scope must match its group (text, border, background, icon). |
| 8 | Figma variables are created in natural order (low to high, solid steps before alpha steps). |

Full reasons and confirmations: [color](../skills/guardrails/color.md), [Figma](../skills/guardrails/figma.md).

## Primitives (internal)

Raw colors that semantic tokens point to. Listed for reference only. Do not use them directly. Solid steps run from low to high. Alpha steps (`a50`, `a100` and so on) are the same color at a lower opacity, shown as a percentage.

| Family | Solid steps | Alpha steps |
|---|---|---|
| `azure` | 50 `#f5f8ff`, 100 `#d8e4fd`, 200 `#b4cdfd`, 300 `#75a3ff`, 400 `#4d7fff`, 500 `#305eff`, 600 `#2950da`, 700 `#2243b6`, 800 `#1b3591`, 900 `#14286d`, 1000 `#0d1a48` | a50 9%, a100 18%, a150 24%, a200 32% |
| `emerald` | 50 `#ebfaf3`, 100 `#daf5e8`, 200 `#b6ecd1`, 300 `#91e3ba`, 400 `#48d08c`, 500 `#00be5f`, 600 `#00a251`, 700 `#008743`, 800 `#006c36`, 900 `#005128`, 1000 `#00361b` | a50 9%, a100 18%, a150 24%, a200 32% |
| `crimson` | 50 `#fff5f5`, 100 `#fee4e2`, 200 `#fec6c3`, 300 `#fd9d96`, 400 `#f96c62`, 500 `#f04438`, 600 `#d92d20`, 700 `#b42318`, 800 `#9a0e0e`, 900 `#880c0c`, 1000 `#750a0a` | a50 9%, a100 18%, a150 24%, a200 32% |
| `cider` | 50 `#fff3eb`, 100 `#ffe1cc`, 200 `#ffc499`, 300 `#ffac70`, 400 `#ff9040`, 500 `#ff7a1a`, 600 `#e9690c`, 700 `#c65c10`, 800 `#a24d10`, 900 `#813e0e`, 1000 `#5d2c09` | a50 9%, a100 18%, a150 24%, a200 32% |
| `sapphire` | 50 `#e7f6fe`, 100 `#cfedfc`, 200 `#a8dffa`, 300 `#79cef8`, 400 `#57c1f6`, 500 `#15b0f3`, 600 `#1291d0`, 700 `#0f78ad`, 800 `#0c608a`, 900 `#094868`, 1000 `#063145` | a50 9%, a100 18%, a150 24%, a200 32% |
| `sea` | 50 `#edf7f7`, 100 `#e2f3f3`, 200 `#c2e0e0`, 300 `#97cdcd`, 400 `#60a9a9`, 500 `#389494`, 600 `#1f7a7a`, 700 `#1d6363`, 800 `#145252`, 900 `#033e3e`, 1000 `#022929` | a50 9%, a100 18%, a150 24%, a200 32% |
| `cloud` | 50 `#edf4f7`, 100 `#e6eff4`, 200 `#cbdde6`, 300 `#97bbcd`, 400 `#6091a9`, 500 `#387594`, 600 `#1f5c7a`, 700 `#1d4b63`, 800 `#143d52`, 900 `#032a3e`, 1000 `#021c29` | a50 9%, a100 18%, a150 24%, a200 32% |
| `forest` | 50 `#ebfaf3`, 100 `#daf5e8`, 200 `#b6ecd1`, 300 `#91e3ba`, 400 `#48d08c`, 500 `#00be6f`, 600 `#009e5c`, 700 `#00874f`, 800 `#006c3f`, 900 `#00512f`, 1000 `#003821` | a50 9%, a100 18%, a150 24%, a200 32% |
| `blueGrayLight` | 0 `#ffffff`, 50 `#f8fafc`, 100 `#f1f5fa`, 200 `#e3eaf3`, 300 `#cbd5e2`, 400 `#b1c1d2`, 500 `#90a5bb`, 600 `#768ea7`, 700 `#6c849d`, 800 `#58728d`, 900 `#40566d`, 1000 `#2f4256`, 1100 `#243547`, 1200 `#192839`, 1300 `#0c1927` | a25 6%, a50 9%, a75 12%, a100 18%, a200 32%, a400 64% |
| `blueGrayDark` | 0 `#fcfcfd`, 50 `#f8fafc`, 100 `#f1f5fa`, 200 `#e3eaf3`, 300 `#cbd5e2`, 400 `#b1c1d2`, 500 `#90a5bb`, 600 `#768ea7`, 700 `#6c849d`, 800 `#58728d`, 900 `#40566d`, 1000 `#2f4256`, 1100 `#243547`, 1200 `#192839`, 1300 `#0c1927` | a25 6%, a50 9%, a75 12%, a100 18%, a200 32%, a400 64% |
| `ashGrayLight` | 0 `#ffffff`, 50 `#f9f9fa`, 100 `#f3f4f5`, 200 `#eeeff0`, 300 `#e3e4e5`, 400 `#cacdd1`, 500 `#acb0b6`, 600 `#9499a0`, 700 `#858b93`, 800 `#6b717a`, 900 `#545a64`, 1000 `#3f4550`, 1100 `#282e36`, 1200 `#1c2026`, 1300 `#0b0e12` | a25 6%, a50 9%, a75 9%, a100 18%, a200 32%, a400 32% |
| `ashGrayDark` | 0 `#fcfcfc`, 50 `#e9e9ea`, 100 `#d5d5d6`, 200 `#bfc0c4`, 300 `#95979e`, 400 `#7a7c85`, 500 `#62636a`, 600 `#4e4f56`, 700 `#34353a`, 800 `#2e2f34`, 900 `#28292e`, 1000 `#232429`, 1100 `#1b1c22`, 1200 `#111218`, 1300 `#0a0a0b` | a25 6%, a50 9%, a75 9%, a100 18%, a200 32%, a400 32% |
| `white` | 500 `#ffffff` | 10 9%, 25 12%, 50 18%, 100 32%, 200 48%, 300 64%, 400 80%, 450 88% |
| `black` | 500 `#000000` | 10 9%, 25 12%, 50 18%, 100 32%, 200 56%, 300 72%, 400 80%, 450 88% |

## Semantic tokens

### Surface / Background

| Token | Light | Dark |
|---|---|---|
| `primary.subtle` | ![](https://placehold.co/14/ecf1ff) `azure.a50` 9% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `primary.intense` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/305eff) `azure.500` |
| `gray.subtle` | ![](https://placehold.co/14/f1f5fa) `blueGrayLight.100` | ![](https://placehold.co/14/0c1927) `blueGrayDark.1300` |
| `gray.moderate` | ![](https://placehold.co/14/f8fafc) `blueGrayLight.50` | ![](https://placehold.co/14/192839) `blueGrayDark.1200` |
| `gray.intense` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/243547) `blueGrayDark.1100` |
| `cloud.subtle` | ![](https://placehold.co/14/edf4f7) `cloud.50` | ![](https://placehold.co/14/032a3e) `cloud.900` |
| `cloud.intense` | ![](https://placehold.co/14/143d52) `cloud.800` | ![](https://placehold.co/14/e6eff4) `cloud.100` |
| `sea.subtle` | ![](https://placehold.co/14/edf7f7) `sea.50` | ![](https://placehold.co/14/033e3e) `sea.900` |
| `sea.intense` | ![](https://placehold.co/14/145252) `sea.800` | ![](https://placehold.co/14/e2f3f3) `sea.100` |

### Surface / Border

| Token | Light | Dark |
|---|---|---|
| `primary.normal` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/305eff) `azure.500` |
| `primary.muted` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `gray.normal` | ![](https://placehold.co/14/90a5bb) `blueGrayLight.500` | ![](https://placehold.co/14/6c849d) `blueGrayDark.700` |
| `gray.subtle` | ![](https://placehold.co/14/cbd5e2) `blueGrayLight.300` | ![](https://placehold.co/14/40566d) `blueGrayDark.900` |
| `gray.muted` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |

### Surface / Text

| Token | Light | Dark |
|---|---|---|
| `primary.normal` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/75a3ff) `azure.300` |
| `gray.normal` | ![](https://placehold.co/14/192839) `blueGrayLight.1200` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `gray.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `gray.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `onCloud.onSubtle` | ![](https://placehold.co/14/2950da) `azure.600` | ![](https://placehold.co/14/b4cdfd) `azure.200` |
| `onCloud.onIntense` | ![](https://placehold.co/14/b4cdfd) `azure.200` | ![](https://placehold.co/14/2950da) `azure.600` |
| `onSea.onSubtle` | ![](https://placehold.co/14/006c3f) `forest.800` | ![](https://placehold.co/14/b6ecd1) `forest.200` |
| `onSea.onIntense` | ![](https://placehold.co/14/b6ecd1) `forest.200` | ![](https://placehold.co/14/006c3f) `forest.800` |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.450` 88% | ![](https://placehold.co/14/e2e3e5) `white.450` 88% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.200` 48% | ![](https://placehold.co/14/81878f) `white.200` 48% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/03070b) `black.300` 72% |
| `staticBlack.muted` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/050b11) `black.200` 56% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |

### Surface / Icon

| Token | Light | Dark |
|---|---|---|
| `primary.normal` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/75a3ff) `azure.300` |
| `gray.normal` | ![](https://placehold.co/14/192839) `blueGrayLight.1200` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `gray.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `gray.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `onCloud.onSubtle` | ![](https://placehold.co/14/4d7fff) `azure.400` | ![](https://placehold.co/14/75a3ff) `azure.300` |
| `onCloud.onIntense` | ![](https://placehold.co/14/75a3ff) `azure.300` | ![](https://placehold.co/14/4d7fff) `azure.400` |
| `onSea.onSubtle` | ![](https://placehold.co/14/009e5c) `forest.600` | ![](https://placehold.co/14/48d08c) `forest.400` |
| `onSea.onIntense` | ![](https://placehold.co/14/48d08c) `forest.400` | ![](https://placehold.co/14/009e5c) `forest.600` |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.450` 88% | ![](https://placehold.co/14/e2e3e5) `white.450` 88% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.200` 48% | ![](https://placehold.co/14/81878f) `white.200` 48% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/03070b) `black.300` 72% |
| `staticBlack.muted` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/050b11) `black.200` 56% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |

### Interactive / Background

| Token | Light | Dark |
|---|---|---|
| `primary.default` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/4d7fff) `azure.400` |
| `primary.highlighted` | ![](https://placehold.co/14/2950da) `azure.600` | ![](https://placehold.co/14/305eff) `azure.500` |
| `primary.faded` | ![](https://placehold.co/14/ecf1ff) `azure.a50` 9% | ![](https://placehold.co/14/152a5b) `azure.a150` 24% |
| `primary.fadedHighlighted` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `primary.disabled` | ![](https://placehold.co/14/ecf1ff) `azure.a50` 9% | ![](https://placehold.co/14/12254e) `azure.a100` 18% |
| `gray.default` | ![](https://placehold.co/14/edf0f3) `blueGrayLight.a75` 12% | ![](https://placehold.co/14/26323f) `blueGrayDark.a75` 12% |
| `gray.highlighted` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `gray.faded` | ![](https://placehold.co/14/f6f8f9) `blueGrayLight.a25` 6% | ![](https://placehold.co/14/192633) `blueGrayDark.a25` 6% |
| `gray.fadedHighlighted` | ![](https://placehold.co/14/edf0f3) `blueGrayLight.a75` 12% | ![](https://placehold.co/14/26323f) `blueGrayDark.a75` 12% |
| `gray.disabled` | ![](https://placehold.co/14/f2f4f6) `blueGrayLight.a50` 9% | ![](https://placehold.co/14/1f2c39) `blueGrayDark.a50` 9% |
| `neutral.default` | ![](https://placehold.co/14/2f4256) `blueGrayLight.1000` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `neutral.highlighted` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/e3eaf3) `blueGrayDark.200` |
| `neutral.faded` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/26323f) `blueGrayDark.a75` 12% |
| `neutral.fadedHighlighted` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `neutral.disabled` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `positive.default` | ![](https://placehold.co/14/00a251) `emerald.600` | ![](https://placehold.co/14/00a251) `emerald.600` |
| `positive.highlighted` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/008743) `emerald.700` |
| `positive.faded` | ![](https://placehold.co/14/e8f7ef) `emerald.a50` 9% | ![](https://placehold.co/14/093a31) `emerald.a150` 24% |
| `positive.fadedHighlighted` | ![](https://placehold.co/14/d1eee0) `emerald.a100` 18% | ![](https://placehold.co/14/084534) `emerald.a200` 32% |
| `positive.disabled` | ![](https://placehold.co/14/e8f7ef) `emerald.a50` 9% | ![](https://placehold.co/14/0a322f) `emerald.a100` 18% |
| `negative.default` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/d92d20) `crimson.600` |
| `negative.highlighted` | ![](https://placehold.co/14/b42318) `crimson.700` | ![](https://placehold.co/14/b42318) `crimson.700` |
| `negative.faded` | ![](https://placehold.co/14/fceceb) `crimson.a50` 9% | ![](https://placehold.co/14/3d1e25) `crimson.a150` 24% |
| `negative.fadedHighlighted` | ![](https://placehold.co/14/f8d9d7) `crimson.a100` 18% | ![](https://placehold.co/14/4e1f25) `crimson.a200` 32% |
| `negative.disabled` | ![](https://placehold.co/14/fceceb) `crimson.a50` 9% | ![](https://placehold.co/14/311d26) `crimson.a100` 18% |
| `notice.default` | ![](https://placehold.co/14/e9690c) `cider.600` | ![](https://placehold.co/14/e9690c) `cider.600` |
| `notice.highlighted` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/c65c10) `cider.700` |
| `notice.faded` | ![](https://placehold.co/14/fdf2e9) `cider.a50` 9% | ![](https://placehold.co/14/412c21) `cider.a150` 24% |
| `notice.fadedHighlighted` | ![](https://placehold.co/14/fbe4d3) `cider.a100` 18% | ![](https://placehold.co/14/53331e) `cider.a200` 32% |
| `notice.disabled` | ![](https://placehold.co/14/fdf2e9) `cider.a50` 9% | ![](https://placehold.co/14/342722) `cider.a100` 18% |
| `information.default` | ![](https://placehold.co/14/1291d0) `sapphire.600` | ![](https://placehold.co/14/1291d0) `sapphire.600` |
| `information.highlighted` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/0f78ad) `sapphire.700` |
| `information.faded` | ![](https://placehold.co/14/eaf5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/0d3650) `sapphire.a150` 24% |
| `information.fadedHighlighted` | ![](https://placehold.co/14/d4ebf7) `sapphire.a100` 18% | ![](https://placehold.co/14/0e3f5d) `sapphire.a200` 32% |
| `information.disabled` | ![](https://placehold.co/14/eaf5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/0d2f45) `sapphire.a100` 18% |
| `staticWhite.default` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.highlighted` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `staticWhite.faded` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/38424e) `white.50` 18% |
| `staticWhite.fadedHighlighted` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/38424e) `white.50` 18% |
| `staticBlack.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.highlighted` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.faded` | ![](https://placehold.co/14/d1d1d1) `black.50` 18% | ![](https://placehold.co/14/0a1520) `black.50` 18% |
| `staticBlack.fadedHighlighted` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |
| `staticBlack.disabled` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/050b11) `black.200` 56% |

### Interactive / Border

| Token | Light | Dark |
|---|---|---|
| `primary.default` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/4d7fff) `azure.400` |
| `primary.highlighted` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/305eff) `azure.500` |
| `primary.faded` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/152a5b) `azure.a150` 24% |
| `primary.disabled` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `gray.default` | ![](https://placehold.co/14/b1c1d2) `blueGrayLight.400` | ![](https://placehold.co/14/58728d) `blueGrayDark.800` |
| `gray.highlighted` | ![](https://placehold.co/14/b1c1d2) `blueGrayLight.400` | ![](https://placehold.co/14/58728d) `blueGrayDark.800` |
| `gray.faded` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `gray.disabled` | ![](https://placehold.co/14/e3eaf3) `blueGrayLight.200` | ![](https://placehold.co/14/2f4256) `blueGrayDark.1000` |
| `neutral.default` | ![](https://placehold.co/14/6c849d) `blueGrayLight.700` | ![](https://placehold.co/14/e3eaf3) `blueGrayDark.200` |
| `neutral.highlighted` | ![](https://placehold.co/14/6c849d) `blueGrayLight.700` | ![](https://placehold.co/14/e3eaf3) `blueGrayDark.200` |
| `neutral.faded` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `neutral.disabled` | ![](https://placehold.co/14/cbd5e2) `blueGrayLight.300` | ![](https://placehold.co/14/58728d) `blueGrayDark.800` |
| `positive.default` | ![](https://placehold.co/14/00a251) `emerald.600` | ![](https://placehold.co/14/00a251) `emerald.600` |
| `positive.highlighted` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/008743) `emerald.700` |
| `positive.faded` | ![](https://placehold.co/14/d1eee0) `emerald.a100` 18% | ![](https://placehold.co/14/0a322f) `emerald.a100` 18% |
| `positive.disabled` | ![](https://placehold.co/14/d1eee0) `emerald.a100` 18% | ![](https://placehold.co/14/0a322f) `emerald.a100` 18% |
| `negative.default` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/d92d20) `crimson.600` |
| `negative.highlighted` | ![](https://placehold.co/14/b42318) `crimson.700` | ![](https://placehold.co/14/b42318) `crimson.700` |
| `negative.faded` | ![](https://placehold.co/14/f8d9d7) `crimson.a100` 18% | ![](https://placehold.co/14/311d26) `crimson.a100` 18% |
| `negative.disabled` | ![](https://placehold.co/14/f8d9d7) `crimson.a100` 18% | ![](https://placehold.co/14/311d26) `crimson.a100` 18% |
| `notice.default` | ![](https://placehold.co/14/e9690c) `cider.600` | ![](https://placehold.co/14/e9690c) `cider.600` |
| `notice.highlighted` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/c65c10) `cider.700` |
| `notice.faded` | ![](https://placehold.co/14/fbe4d3) `cider.a100` 18% | ![](https://placehold.co/14/342722) `cider.a100` 18% |
| `notice.disabled` | ![](https://placehold.co/14/fbe4d3) `cider.a100` 18% | ![](https://placehold.co/14/342722) `cider.a100` 18% |
| `information.default` | ![](https://placehold.co/14/1291d0) `sapphire.600` | ![](https://placehold.co/14/1291d0) `sapphire.600` |
| `information.highlighted` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/0f78ad) `sapphire.700` |
| `information.faded` | ![](https://placehold.co/14/d4ebf7) `sapphire.a100` 18% | ![](https://placehold.co/14/0d2f45) `sapphire.a100` 18% |
| `information.disabled` | ![](https://placehold.co/14/d4ebf7) `sapphire.a100` 18% | ![](https://placehold.co/14/0d2f45) `sapphire.a100` 18% |
| `staticWhite.default` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.highlighted` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `staticWhite.faded` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/38424e) `white.50` 18% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticBlack.default` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.highlighted` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.faded` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |

### Interactive / Text

| Token | Light | Dark |
|---|---|---|
| `primary.normal` | ![](https://placehold.co/14/2950da) `azure.600` | ![](https://placehold.co/14/75a3ff) `azure.300` |
| `primary.subtle` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/4d7fff) `azure.400` |
| `primary.muted` | ![](https://placehold.co/14/4d7fff) `azure.400` | ![](https://placehold.co/14/2950da) `azure.600` |
| `primary.disabled` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `gray.normal` | ![](https://placehold.co/14/192839) `blueGrayLight.1200` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `gray.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `gray.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `neutral.normal` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `neutral.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `neutral.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `neutral.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `positive.normal` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/48d08c) `emerald.400` |
| `positive.subtle` | ![](https://placehold.co/14/00a251) `emerald.600` | ![](https://placehold.co/14/00be5f) `emerald.500` |
| `positive.muted` | ![](https://placehold.co/14/48d08c) `emerald.400` | ![](https://placehold.co/14/008743) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/ade1c7) `emerald.a200` 32% | ![](https://placehold.co/14/084534) `emerald.a200` 32% |
| `negative.normal` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/f96c62) `crimson.400` |
| `negative.subtle` | ![](https://placehold.co/14/f04438) `crimson.500` | ![](https://placehold.co/14/f04438) `crimson.500` |
| `negative.muted` | ![](https://placehold.co/14/f96c62) `crimson.400` | ![](https://placehold.co/14/b42318) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/f3bcb8) `crimson.a200` 32% | ![](https://placehold.co/14/4e1f25) `crimson.a200` 32% |
| `notice.normal` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/ff9040) `cider.400` |
| `notice.subtle` | ![](https://placehold.co/14/e9690c) `cider.600` | ![](https://placehold.co/14/ff7a1a) `cider.500` |
| `notice.muted` | ![](https://placehold.co/14/ff9040) `cider.400` | ![](https://placehold.co/14/c65c10) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/f8cfb1) `cider.a200` 32% | ![](https://placehold.co/14/53331e) `cider.a200` 32% |
| `information.normal` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/57c1f6) `sapphire.400` |
| `information.subtle` | ![](https://placehold.co/14/1291d0) `sapphire.600` | ![](https://placehold.co/14/15b0f3) `sapphire.500` |
| `information.muted` | ![](https://placehold.co/14/57c1f6) `sapphire.400` | ![](https://placehold.co/14/0f78ad) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/b3dcf0) `sapphire.a200` 32% | ![](https://placehold.co/14/0e3f5d) `sapphire.a200` 32% |
| `onPrimary.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `onPrimary.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `onPrimary.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/a8acb1) `white.300` 64% |
| `onPrimary.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/a8acb1) `white.300` 64% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/333333) `black.400` 80% | ![](https://placehold.co/14/020508) `black.400` 80% |
| `staticBlack.muted` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/03070b) `black.300` 72% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |

### Interactive / Icon

| Token | Light | Dark |
|---|---|---|
| `primary.normal` | ![](https://placehold.co/14/2950da) `azure.600` | ![](https://placehold.co/14/75a3ff) `azure.300` |
| `primary.subtle` | ![](https://placehold.co/14/305eff) `azure.500` | ![](https://placehold.co/14/4d7fff) `azure.400` |
| `primary.muted` | ![](https://placehold.co/14/4d7fff) `azure.400` | ![](https://placehold.co/14/2950da) `azure.600` |
| `primary.disabled` | ![](https://placehold.co/14/dae2ff) `azure.a100` 18% | ![](https://placehold.co/14/182f6c) `azure.a200` 32% |
| `gray.normal` | ![](https://placehold.co/14/192839) `blueGrayLight.1200` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `gray.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `gray.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `gray.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `neutral.normal` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `neutral.subtle` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/cbd5e2) `blueGrayDark.300` |
| `neutral.muted` | ![](https://placehold.co/14/768ea7) `blueGrayLight.600` | ![](https://placehold.co/14/768ea7) `blueGrayDark.600` |
| `neutral.disabled` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |
| `positive.normal` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/48d08c) `emerald.400` |
| `positive.subtle` | ![](https://placehold.co/14/00a251) `emerald.600` | ![](https://placehold.co/14/00be5f) `emerald.500` |
| `positive.muted` | ![](https://placehold.co/14/48d08c) `emerald.400` | ![](https://placehold.co/14/008743) `emerald.700` |
| `positive.disabled` | ![](https://placehold.co/14/ade1c7) `emerald.a200` 32% | ![](https://placehold.co/14/084534) `emerald.a200` 32% |
| `negative.normal` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/f96c62) `crimson.400` |
| `negative.subtle` | ![](https://placehold.co/14/f04438) `crimson.500` | ![](https://placehold.co/14/f04438) `crimson.500` |
| `negative.muted` | ![](https://placehold.co/14/f96c62) `crimson.400` | ![](https://placehold.co/14/b42318) `crimson.700` |
| `negative.disabled` | ![](https://placehold.co/14/f3bcb8) `crimson.a200` 32% | ![](https://placehold.co/14/4e1f25) `crimson.a200` 32% |
| `notice.normal` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/ff9040) `cider.400` |
| `notice.subtle` | ![](https://placehold.co/14/e9690c) `cider.600` | ![](https://placehold.co/14/ff7a1a) `cider.500` |
| `notice.muted` | ![](https://placehold.co/14/ff9040) `cider.400` | ![](https://placehold.co/14/c65c10) `cider.700` |
| `notice.disabled` | ![](https://placehold.co/14/f8cfb1) `cider.a200` 32% | ![](https://placehold.co/14/53331e) `cider.a200` 32% |
| `information.normal` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/57c1f6) `sapphire.400` |
| `information.subtle` | ![](https://placehold.co/14/1291d0) `sapphire.600` | ![](https://placehold.co/14/15b0f3) `sapphire.500` |
| `information.muted` | ![](https://placehold.co/14/57c1f6) `sapphire.400` | ![](https://placehold.co/14/0f78ad) `sapphire.700` |
| `information.disabled` | ![](https://placehold.co/14/b3dcf0) `sapphire.a200` 32% | ![](https://placehold.co/14/0e3f5d) `sapphire.a200` 32% |
| `onPrimary.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `onPrimary.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `onPrimary.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/a8acb1) `white.300` 64% |
| `onPrimary.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticWhite.normal` | ![](https://placehold.co/14/ffffff) `white.500` | ![](https://placehold.co/14/ffffff) `white.500` |
| `staticWhite.subtle` | ![](https://placehold.co/14/ffffff) `white.400` 80% | ![](https://placehold.co/14/ced1d4) `white.400` 80% |
| `staticWhite.muted` | ![](https://placehold.co/14/ffffff) `white.300` 64% | ![](https://placehold.co/14/a8acb1) `white.300` 64% |
| `staticWhite.disabled` | ![](https://placehold.co/14/ffffff) `white.100` 32% | ![](https://placehold.co/14/5a636c) `white.100` 32% |
| `staticBlack.normal` | ![](https://placehold.co/14/000000) `black.500` | ![](https://placehold.co/14/000000) `black.500` |
| `staticBlack.subtle` | ![](https://placehold.co/14/333333) `black.400` 80% | ![](https://placehold.co/14/020508) `black.400` 80% |
| `staticBlack.muted` | ![](https://placehold.co/14/474747) `black.300` 72% | ![](https://placehold.co/14/03070b) `black.300` 72% |
| `staticBlack.disabled` | ![](https://placehold.co/14/adadad) `black.100` 32% | ![](https://placehold.co/14/08111b) `black.100` 32% |

### Interactive / Hover

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/ffffff) `white.50` 18% | ![](https://placehold.co/14/0b1622) `black.25` 12% |
| `intense` | ![](https://placehold.co/14/e8e8e8) `black.10` 9% | ![](https://placehold.co/14/5a636c) `white.100` 32% |

### Feedback / Background

| Token | Light | Dark |
|---|---|---|
| `neutral.subtle` | ![](https://placehold.co/14/f2f4f6) `blueGrayLight.a50` 9% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `neutral.intense` | ![](https://placehold.co/14/2f4256) `blueGrayLight.1000` | ![](https://placehold.co/14/58728d) `blueGrayDark.800` |
| `positive.subtle` | ![](https://placehold.co/14/e8f7ef) `emerald.a50` 9% | ![](https://placehold.co/14/0a322f) `emerald.a100` 18% |
| `positive.intense` | ![](https://placehold.co/14/00a251) `emerald.600` | ![](https://placehold.co/14/008743) `emerald.700` |
| `negative.subtle` | ![](https://placehold.co/14/fceceb) `crimson.a50` 9% | ![](https://placehold.co/14/311d26) `crimson.a100` 18% |
| `negative.intense` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/b42318) `crimson.700` |
| `notice.subtle` | ![](https://placehold.co/14/fdf2e9) `cider.a50` 9% | ![](https://placehold.co/14/342722) `cider.a100` 18% |
| `notice.intense` | ![](https://placehold.co/14/e9690c) `cider.600` | ![](https://placehold.co/14/c65c10) `cider.700` |
| `information.subtle` | ![](https://placehold.co/14/eaf5fb) `sapphire.a50` 9% | ![](https://placehold.co/14/0d2f45) `sapphire.a100` 18% |
| `information.intense` | ![](https://placehold.co/14/1291d0) `sapphire.600` | ![](https://placehold.co/14/0f78ad) `sapphire.700` |

### Feedback / Border

| Token | Light | Dark |
|---|---|---|
| `neutral.subtle` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `neutral.intense` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/40566d) `blueGrayDark.900` |
| `positive.subtle` | ![](https://placehold.co/14/d1eee0) `emerald.a100` 18% | ![](https://placehold.co/14/084534) `emerald.a200` 32% |
| `positive.intense` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/006c36) `emerald.800` |
| `negative.subtle` | ![](https://placehold.co/14/f8d9d7) `crimson.a100` 18% | ![](https://placehold.co/14/4e1f25) `crimson.a200` 32% |
| `negative.intense` | ![](https://placehold.co/14/b42318) `crimson.700` | ![](https://placehold.co/14/9a0e0e) `crimson.800` |
| `notice.subtle` | ![](https://placehold.co/14/fbe4d3) `cider.a100` 18% | ![](https://placehold.co/14/53331e) `cider.a200` 32% |
| `notice.intense` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/a24d10) `cider.800` |
| `information.subtle` | ![](https://placehold.co/14/d4ebf7) `sapphire.a100` 18% | ![](https://placehold.co/14/0e3f5d) `sapphire.a200` 32% |
| `information.intense` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/0c608a) `sapphire.800` |

### Feedback / Text

| Token | Light | Dark |
|---|---|---|
| `neutral.subtle` | ![](https://placehold.co/14/90a5bb) `blueGrayLight.500` | ![](https://placehold.co/14/6c849d) `blueGrayDark.700` |
| `neutral.intense` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `positive.subtle` | ![](https://placehold.co/14/daf5e8) `emerald.100` | ![](https://placehold.co/14/ebfaf3) `emerald.50` |
| `positive.intense` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/48d08c) `emerald.400` |
| `negative.subtle` | ![](https://placehold.co/14/fee4e2) `crimson.100` | ![](https://placehold.co/14/fff5f5) `crimson.50` |
| `negative.intense` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/f96c62) `crimson.400` |
| `notice.subtle` | ![](https://placehold.co/14/ffe1cc) `cider.100` | ![](https://placehold.co/14/fff3eb) `cider.50` |
| `notice.intense` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/ff9040) `cider.400` |
| `information.subtle` | ![](https://placehold.co/14/cfedfc) `sapphire.100` | ![](https://placehold.co/14/e7f6fe) `sapphire.50` |
| `information.intense` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/57c1f6) `sapphire.400` |

### Feedback / Icon

| Token | Light | Dark |
|---|---|---|
| `neutral.subtle` | ![](https://placehold.co/14/90a5bb) `blueGrayLight.500` | ![](https://placehold.co/14/6c849d) `blueGrayDark.700` |
| `neutral.intense` | ![](https://placehold.co/14/243547) `blueGrayLight.1100` | ![](https://placehold.co/14/f8fafc) `blueGrayDark.50` |
| `positive.subtle` | ![](https://placehold.co/14/daf5e8) `emerald.100` | ![](https://placehold.co/14/ebfaf3) `emerald.50` |
| `positive.intense` | ![](https://placehold.co/14/008743) `emerald.700` | ![](https://placehold.co/14/48d08c) `emerald.400` |
| `negative.subtle` | ![](https://placehold.co/14/fee4e2) `crimson.100` | ![](https://placehold.co/14/fff5f5) `crimson.50` |
| `negative.intense` | ![](https://placehold.co/14/d92d20) `crimson.600` | ![](https://placehold.co/14/f96c62) `crimson.400` |
| `notice.subtle` | ![](https://placehold.co/14/ffe1cc) `cider.100` | ![](https://placehold.co/14/fff3eb) `cider.50` |
| `notice.intense` | ![](https://placehold.co/14/c65c10) `cider.700` | ![](https://placehold.co/14/ff9040) `cider.400` |
| `information.subtle` | ![](https://placehold.co/14/cfedfc) `sapphire.100` | ![](https://placehold.co/14/e7f6fe) `sapphire.50` |
| `information.intense` | ![](https://placehold.co/14/0f78ad) `sapphire.700` | ![](https://placehold.co/14/57c1f6) `sapphire.400` |

### Overlay / Background

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/707070) `black.200` 56% | ![](https://placehold.co/14/020508) `black.400` 80% |
| `moderate` | ![](https://placehold.co/14/d0d8e0) `blueGrayLight.a200` 32% | ![](https://placehold.co/14/515c68) `blueGrayDark.a200` 32% |

### Popup / Background

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/ffffff) `blueGrayLight.0` | ![](https://placehold.co/14/2f4256) `blueGrayDark.1000` |
| `intense` | ![](https://placehold.co/14/2f4256) `blueGrayLight.1000` | ![](https://placehold.co/14/2f4256) `blueGrayDark.1000` |

### Popup / Border

| Token | Light | Dark |
|---|---|---|
| `subtle` | ![](https://placehold.co/14/e5e9ed) `blueGrayLight.a100` 18% | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |
| `intense` | ![](https://placehold.co/14/40566d) `blueGrayLight.900` | ![](https://placehold.co/14/333f4c) `blueGrayDark.a100` 18% |

### Elevation

| Token | Light | Dark |
|---|---|---|
| `lowRaised` | ![](https://placehold.co/14/eaeced) `rgb(25 40 57)` 9% | ![](https://placehold.co/14/0c1927) `rgb(12 25 39)` 9% |
| `midRaised` | ![](https://placehold.co/14/e3e5e7) `rgb(25 40 57)` 12% | ![](https://placehold.co/14/0c1927) `rgb(12 25 39)` 12% |
| `highRaised` | ![](https://placehold.co/14/d6d8db) `rgb(25 40 57)` 18% | ![](https://placehold.co/14/0c1927) `rgb(12 25 39)` 18% |
| `_bottomSheet` | ![](https://placehold.co/14/d6d8db) `rgb(25 40 57)` 18% | ![](https://placehold.co/14/0c1927) `rgb(12 25 39)` 18% |
| `_toast` | ![](https://placehold.co/14/ffffff) `rgb(255 255 255)` 64% | ![](https://placehold.co/14/1b2b3b) `rgb(36 53 71)` 64% |

### Transparent

| Token | Light | Dark |
|---|---|---|
| `transparent` | ![](https://placehold.co/14/ffffff) `rgb(255 255 255)` 0% | ![](https://placehold.co/14/0c1927) `rgb(255 255 255)` 0% |
