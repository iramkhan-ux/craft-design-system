// Writes docs/color.md from the master record. Run with `npm run docs:color`.
// Primitives come first, then the semantic tokens. Do not edit docs/color.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseColor, toHexAlpha } from './lib/color.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const read = (f) => JSON.parse(fs.readFileSync(path.join(repo, 'tokens', f), 'utf8'));
const isLeaf = (v) => v && typeof v === 'object' && '$value' in v;
const flat = (o, p = [], acc = []) => {
  for (const [k, v] of Object.entries(o)) {
    if (k.startsWith('$')) continue;
    if (isLeaf(v)) acc.push({ path: [...p, k], leaf: v });
    else flat(v, [...p, k], acc);
  }
  return acc;
};

const primitives = flat(read('color.primitives.json').color);
const semantic = flat(read('color.semantic.json'));
const prim = new Map(primitives.map((t) => [t.path.join('.'), t.leaf.$value]));

const guardrailRules = (file) =>
  fs
    .readFileSync(path.join(repo, 'skills/guardrails', file), 'utf8')
    .split('\n')
    .filter((l) => /^\| \d+ \|/.test(l))
    .map((l) => l.split('|')[2].trim());
const rules = [...guardrailRules('color.md'), ...guardrailRules('figma.md')];

// Swatches: a translucent color is flattened onto white (light) or the dark page color (dark).
const WHITE = { r: 255, g: 255, b: 255 };
const DARK_BASE = parseColor(prim.get('neutral.blueGrayDark.1300'));
const h2 = (n) => Math.round(n).toString(16).padStart(2, '0');
const flatten = (c, base) => {
  const k = c.alphaPct / 100;
  return h2(c.r * k + base.r * (1 - k)) + h2(c.g * k + base.g * (1 - k)) + h2(c.b * k + base.b * (1 - k));
};
const swatch = (hex) => `![](https://placehold.co/14/${hex})`;
function cell(v, base) {
  const m = /^\{(.+)\}$/.exec(v);
  const raw = m ? prim.get(m[1].replace(/^color\./, '')) : v;
  const c = parseColor(raw);
  const label = m ? m[1].replace(/^color\./, '').replace(/^(chromatic|neutral)\./, '') : v === 'transparent' ? 'transparent' : raw;
  const alpha = c.alphaPct < 100 && v !== 'transparent' ? ` ${c.alphaPct}%` : '';
  return `${swatch(flatten(c, base))} \`${label}\`${alpha}`;
}

const out = [];
const w = (...l) => out.push(...l);
w('# Color', '');
w('Generated from `tokens/color.primitives.json` and `tokens/color.semantic.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:color` in `packages/ui`.', '');
w('Source decision: [0004 Color from Blade source](../decisions/0004-color-from-blade-source.md), which replaces the palette and token set of [0001 Color foundation](../decisions/0001-color-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use color', '');
w('- **Primitives are internal.** They are raw values that semantic tokens point to, and stay out of designs and components.');
w('- **Pick semantic tokens only.** They carry meaning (text, border, background) and switch between the light and dark theme.');
w('- **Names.** Figma shows tokens with slashes, for example `surface/background/primary/subtle`. Code and these tables use dots.');
w('- **Values.** Tokens hold the exact value written in Blade source, for example `hsla(218, 89%, 51%, 1)`. Hex values in the primitives table are derived from them for reading.');
w('- **Light and dark.** Each token lists its light value and its dark value. The pilot builds the light theme in Figma and code. Dark values are recorded for later.');
w('- **Swatches.** Translucent colors are previewed flattened on white (light) or on the dark page color `blueGrayDark.1300` (dark). The percentage is the real opacity.');
w('- **Transparent.** Some tokens are `transparent` in Blade, for example `surface.background.primary.faint`. They exist so every tone has the same set of names.');
w('- **Deprecated tokens** are not recreated and must not be used.', '');
w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules.map((r, i) => `| ${i + 1} | ${r} |`), '');
w('Full reasons and confirmations: [color](../skills/guardrails/color.md), [Figma](../skills/guardrails/figma.md).', '');

// Primitives first
w('## Primitives (internal)', '');
w('Raw colors that semantic tokens point to. Listed for reference only. Do not use them directly. Solid steps run from low to high. Alpha steps (`a50`, `a906` and so on) are the same color at a lower opacity, shown as a percentage.', '');
const fams = new Map();
for (const t of primitives) {
  const f = t.path.slice(1, 3).join('.');
  fams.set(f, [...(fams.get(f) ?? []), t]);
}
w('| Family | Solid steps | Alpha steps |', '|---|---|---|');
for (const [f, items] of fams) {
  const solid = [];
  const alpha = [];
  for (const t of items) {
    const { hex, alphaPct } = toHexAlpha(t.leaf.$value);
    const step = t.path[3];
    if (alphaPct === 100) solid.push(`${step} \`${hex}\``);
    else alpha.push(`${step} ${alphaPct}%`);
  }
  w(`| \`${f.replace(/^(chromatic|neutral)\./, '')}\` | ${solid.join(', ')} | ${alpha.join(', ')} |`);
}
w('');

// Semantic tokens
const TOP = { surface: 'Surface', interactive: 'Interactive', feedback: 'Feedback', overlay: 'Overlay', popup: 'Popup', data: 'Data', transparent: 'Transparent' };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const groups = new Map();
for (const t of semantic) {
  const key = t.path.length <= 2 ? t.path[0] : `${t.path[0]}.${t.path[1]}`;
  groups.set(key, [...(groups.get(key) ?? []), t]);
}
w('## Semantic tokens', '', `${semantic.length} tokens.`, '');
for (const [key, items] of groups) {
  const depth = key.split('.').length;
  const [top, second] = key.split('.');
  w(`### ${second ? `${TOP[top]} / ${cap(second)}` : TOP[top]}`, '', '| Token | Light | Dark |', '|---|---|---|');
  for (const t of items) {
    const name = t.path.length <= 2 ? t.path.join('.') : t.path.slice(depth).join('.');
    w(`| \`${name}\` | ${cell(t.leaf.$value, WHITE)} | ${cell(t.leaf.$extensions.craft.modes.onDark, DARK_BASE)} |`);
  }
  w('');
}
fs.writeFileSync(path.join(repo, 'docs/color.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/color.md: ${primitives.length} primitives, ${semantic.length} semantic tokens`);
