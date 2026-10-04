// Builds CSS variables and typed data for elevation (shadows) from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`.
// A shadow's color points to a color primitive, so the primitive's CSS variable is used here.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');
const read = (f) => JSON.parse(fs.readFileSync(path.join(tokensDir, f), 'utf8'));
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const primitives = new Set();
const walk = (o, p = []) => {
  for (const [k, v] of Object.entries(o)) {
    if (k.startsWith('$')) continue;
    if ('$value' in v) primitives.add([...p, k].join('.'));
    else walk(v, [...p, k]);
  }
};
walk(read('color.primitives.json').color, ['color']);
const colorVar = (ref) => {
  const key = ref.slice(1, -1);
  if (!primitives.has(key)) throw new Error(`Unknown color primitive ${ref}`);
  return `var(--craft-primitive-${key.split('.').slice(1).map(kebab).join('-')})`;
};
const css = (s) => (s === 'none' ? 'none' : `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${colorVar(s.color)}`);

const levels = Object.entries(read('elevation.json').elevation)
  .filter(([k]) => !k.startsWith('$'))
  .map(([name, leaf]) => ({
    name,
    cssVar: `--craft-elevation-${kebab(name)}`,
    light: leaf.$value,
    dark: leaf.$extensions?.craft?.modes?.onDark ?? leaf.$value,
  }));

const lines = ['/* Generated from /tokens by scripts/build-elevation.mjs. Do not edit. */'];
const block = (selector, mode) => {
  lines.push(`${selector} {`);
  for (const l of levels) lines.push(`  ${l.cssVar}: ${css(l[mode])};`);
  lines.push('}');
};
block(':root,\n[data-theme="light"]', 'light');
block('[data-theme="dark"]', 'dark');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'elevation.css'), lines.join('\n') + '\n');

const shape = (s) =>
  s === 'none'
    ? null
    : { offsetX: s.offsetX, offsetY: s.offsetY, blur: s.blur, spread: s.spread, colorRef: s.color.slice(1, -1).replace(/^color\./, '') };
const data = levels.map((l) => ({ name: l.name, cssVar: l.cssVar, light: shape(l.light), dark: shape(l.dark) }));
fs.writeFileSync(path.join(outDir, 'elevation.json'), JSON.stringify(data, null, 2) + '\n');
fs.writeFileSync(
  path.join(outDir, 'elevation.ts'),
  `// Generated from /tokens by scripts/build-elevation.mjs. Do not edit.
export interface ElevationShadow { offsetX: string; offsetY: string; blur: string; spread: string; colorRef: string }
export interface ElevationToken { name: string; cssVar: string; light: ElevationShadow | null; dark: ElevationShadow | null }

export const elevationLevels: ElevationToken[] = ${JSON.stringify(data, null, 2)};
`,
);

// Parity checksum for Figma (light). Figma has number variables elevation/<level>/x|y|blur|spread in
// the `layout` collection and effect styles elevation/<level> whose color is bound to the color primitive.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const parity = [];
for (const l of levels) {
  if (l.light === 'none') continue;
  const n = (v) => parseFloat(v);
  parity.push(`elevation/${l.name}/x=${n(l.light.offsetX)}`, `elevation/${l.name}/y=${n(l.light.offsetY)}`, `elevation/${l.name}/blur=${n(l.light.blur)}`, `elevation/${l.name}/spread=${n(l.light.spread)}`, `elevation/${l.name}/color=${l.light.color.slice(1, -1).split('.').join('/')}`);
}
console.log(`elevation: ${levels.length} levels, ${parity.length} Figma values (${fnv(parity.join('\n'))})`);
