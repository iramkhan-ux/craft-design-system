// Parity checksum for typography. The same canonical lines are built from the Figma file and
// compared with this output. Order matters, so this also checks natural order.
// Run with `npm run tokens:typography`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const tokensDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../tokens');
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
const num = (v) => (typeof v === 'number' ? v : parseFloat(v));
const round1 = (n) => Math.round(n * 10) / 10;

const prims = flat(read('typography.primitives.json').font, ['font']);
const byKey = new Map(prims.map((t) => [t.path.join('.'), t]));
const figmaValue = (t) =>
  t.path[1] === 'family' ? t.leaf.$extensions.craft.figmaFontFamily : round1(num(t.leaf.$value));
const resolve = (ref) => byKey.get(ref.slice(1, -1));

const primLines = prims.map((t) => `${t.path.join('/')}=${figmaValue(t)}`);
const styleLines = flat(read('typography.styles.json'), []).map(({ path: p, leaf }) => {
  const v = leaf.$value;
  const r = (k) => figmaValue(resolve(v[k]));
  return [p.join('/'), r('fontFamily'), r('fontWeight'), r('fontSize'), r('lineHeight'), r('letterSpacing')].join('|');
});

export const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};

console.log(
  `typography: ${primLines.length} primitives (${fnv(primLines.join('\n'))}), ${styleLines.length} styles (${fnv(styleLines.join('\n'))})`,
);
if (process.argv.includes('--lines')) console.log(primLines.concat(styleLines).join('\n'));
