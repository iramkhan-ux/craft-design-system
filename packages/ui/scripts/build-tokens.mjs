// Builds CSS variables and typed data from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');

const read = (f) => JSON.parse(fs.readFileSync(path.join(tokensDir, f), 'utf8'));
const isLeaf = (v) => v && typeof v === 'object' && '$value' in v;
const flat = (o, p = [], acc = []) => {
  for (const [k, v] of Object.entries(o)) {
    if (k.startsWith('$')) continue;
    if (isLeaf(v)) acc.push({ path: [...p, k], leaf: v });
    else flat(v, [...p, k], acc);
  }
  return acc;
};

const kebab = (s) => s.replace(/^_+/, '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const cssName = (prefix, p) => `--craft-${prefix}-${p.map(kebab).join('-')}`;

const primitives = flat(read('color.primitives.json').color, ['color']);
const semantic = flat(read('color.semantic.json'), []);

const primByKey = new Map(primitives.map((t) => [t.path.join('.'), t]));
const primVar = (key) => {
  if (!primByKey.has(key)) throw new Error(`Unknown primitive ${key}`);
  return cssName('primitive', key.split('.').slice(1));
};
const ref = (v) => (v.startsWith('{') ? v.slice(1, -1) : null);
const valueOf = (v) => {
  const r = ref(v);
  return r ? primByKey.get(r).leaf.$value : v;
};
const cssValue = (v) => {
  const r = ref(v);
  return r ? `var(${primVar(r)})` : v;
};

// 1. Names must stay unique after kebab-casing.
const seen = new Map();
for (const t of semantic) {
  const n = cssName('color', t.path);
  if (seen.has(n)) throw new Error(`CSS name clash: ${n} (${seen.get(n)} and ${t.path.join('.')})`);
  seen.set(n, t.path.join('.'));
}

// 2. CSS
const lines = [];
lines.push('/* Generated from /tokens by scripts/build-tokens.mjs. Do not edit. */');
lines.push(':root {');
lines.push('  /* Primitives are internal. Components use the semantic tokens below. */');
for (const t of primitives) lines.push(`  ${cssName('primitive', t.path.slice(1))}: ${t.leaf.$value};`);
lines.push('}');
const block = (selector, mode) => {
  lines.push(`${selector} {`);
  for (const t of semantic) {
    const v = mode === 'dark' ? t.leaf.$extensions.craft.modes.onDark : t.leaf.$value;
    lines.push(`  ${cssName('color', t.path)}: ${cssValue(v)};`);
  }
  lines.push('}');
};
block(':root,\n[data-theme="light"]', 'light');
block('[data-theme="dark"]', 'dark');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'color.css'), lines.join('\n') + '\n');

// 3. Typed data for stories and docs
const entry = (t) => {
  const dark = t.leaf.$extensions.craft.modes.onDark;
  return {
    name: t.path.join('.'),
    figmaName: t.path.join('/'),
    group: t.path.length <= 2 ? t.path[0] : `${t.path[0]}.${t.path[1]}`,
    cssVar: cssName('color', t.path),
    light: { ref: ref(t.leaf.$value)?.replace(/^color\./, '') ?? null, value: valueOf(t.leaf.$value) },
    dark: { ref: ref(dark)?.replace(/^color\./, '') ?? null, value: valueOf(dark) },
  };
};
const ts = `// Generated from /tokens by scripts/build-tokens.mjs. Do not edit.
export interface ColorModeValue { ref: string | null; value: string }
export interface SemanticColorToken {
  name: string;
  figmaName: string;
  group: string;
  cssVar: string;
  light: ColorModeValue;
  dark: ColorModeValue;
}
export interface PrimitiveColorToken { name: string; cssVar: string; value: string }

export const semanticColors: SemanticColorToken[] = ${JSON.stringify(semantic.map(entry), null, 2)};

export const primitiveColors: PrimitiveColorToken[] = ${JSON.stringify(
  primitives.map((t) => ({ name: t.path.slice(1).join('.'), cssVar: cssName('primitive', t.path.slice(1)), value: t.leaf.$value })),
  null,
  2,
)};
`;
fs.writeFileSync(path.join(outDir, 'color.ts'), ts);

// 4. Parity checksum (same method as the Figma check in process/checkpoints.md, light theme)
const hv = (s) => {
  if (s.startsWith('#')) return `${s}@100`;
  const m = /^rgb\((\d+) (\d+) (\d+) \/ (\d+)%\)$/.exec(s);
  const x = (n) => Number(n).toString(16).padStart(2, '0');
  return `#${x(m[1])}${x(m[2])}${x(m[3])}@${m[4]}`;
};
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const pl = primitives.map((t) => `${t.path.join('/')}=${hv(t.leaf.$value)}`).sort();
const sl = semantic.map((t) => `${t.path.join('/')}=${ref(t.leaf.$value) ? ref(t.leaf.$value).split('.').join('/') : hv(t.leaf.$value)}`).sort();
console.log(`tokens: ${primitives.length} primitives (${fnv(pl.join('\n'))}), ${semantic.length} semantic (${fnv(sl.join('\n'))})`);
