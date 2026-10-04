// Builds CSS and typed data for typography from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`.
//
// Letter spacing is stored as a percent. CSS gets pixels for each style
// (font size x percent / 100), the same way Blade does it. Em is not used.
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
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const px = (n) => `${n}px`;
const num = (v) => (typeof v === 'number' ? v : parseFloat(v));
const round = (n, d = 3) => Math.round(n * 10 ** d) / 10 ** d;

const primitives = flat(read('typography.primitives.json').font, ['font']);
const byKey = new Map(primitives.map((t) => [t.path.join('.'), t]));
const lookup = (ref) => {
  const t = byKey.get(ref.slice(1, -1));
  if (!t) throw new Error(`Unknown primitive ${ref}`);
  return t;
};
const primVar = (t) => `--craft-primitive-${t.path.map(kebab).join('-')}`;
const mobileOf = (t) => t.leaf.$extensions?.craft?.modes?.onMobile;

// 1. CSS: primitives (letter spacing percent has no valid CSS form, so it is not a variable)
const css = ['/* Generated from /tokens by scripts/build-typography.mjs. Do not edit. */', ':root {', '  /* Primitives are internal. Components use the text style classes below. */'];
for (const t of primitives) if (t.path[1] !== 'letterSpacing') css.push(`  ${primVar(t)}: ${t.leaf.$value};`);
css.push('}', '');

// 2. Text styles
const styles = flat(read('typography.styles.json'), []).map(({ path: p, leaf }) => {
  const v = leaf.$value;
  const family = lookup(v.fontFamily), weight = lookup(v.fontWeight), size = lookup(v.fontSize), lh = lookup(v.lineHeight), ls = lookup(v.letterSpacing);
  const sizePx = num(size.leaf.$value);
  const lsPct = num(ls.leaf.$value);
  const lsPx = round((sizePx * lsPct) / 100);
  const [group, step, w] = p;
  return {
    name: p.join('.'),
    figmaName: p.join('/'),
    group,
    size: step,
    weight: w,
    className: `craft-text-${p.map(kebab).join('-')}`,
    fontFamilyKey: family.path[2],
    fontFamily: family.leaf.$value,
    fontWeight: num(weight.leaf.$value),
    fontSizePx: sizePx,
    lineHeightPx: num(lh.leaf.$value),
    letterSpacingPct: lsPct,
    letterSpacingPx: lsPx,
    cssVars: { family: primVar(family), size: primVar(size), weight: primVar(weight), lineHeight: primVar(lh) },
  };
});
for (const s of styles) {
  css.push(`.${s.className} {`);
  css.push(`  font-family: var(${s.cssVars.family});`);
  css.push(`  font-size: var(${s.cssVars.size});`);
  css.push(`  font-weight: var(${s.cssVars.weight});`);
  css.push(`  line-height: var(${s.cssVars.lineHeight});`);
  css.push(`  letter-spacing: ${s.letterSpacingPx === 0 ? '0' : px(s.letterSpacingPx)}; /* ${s.letterSpacingPct}% of ${s.fontSizePx}px */`);
  css.push('}');
}
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'typography.css'), css.join('\n') + '\n');

// 3. Typed data for stories and docs
const prim = (kind) =>
  primitives
    .filter((t) => t.path[1] === kind)
    .map((t) => ({
      name: t.path.slice(2).join('.'),
      figmaName: t.path.join('/'),
      cssVar: kind === 'letterSpacing' ? null : primVar(t),
      value: t.leaf.$value,
      mobile: mobileOf(t) ?? null,
      figmaFontFamily: t.leaf.$extensions?.craft?.figmaFontFamily ?? null,
    }));
const ts = `// Generated from /tokens by scripts/build-typography.mjs. Do not edit.
export interface TypographyPrimitive {
  name: string;
  figmaName: string;
  cssVar: string | null;
  value: string | number;
  mobile: string | null;
  figmaFontFamily: string | null;
}
export interface TextStyleToken {
  name: string;
  figmaName: string;
  group: string;
  size: string;
  weight: string;
  className: string;
  fontFamilyKey: string;
  fontFamily: string;
  fontWeight: number;
  fontSizePx: number;
  lineHeightPx: number;
  letterSpacingPct: number;
  letterSpacingPx: number;
}

export const typographyPrimitives = {
  family: ${JSON.stringify(prim('family'), null, 2)} as TypographyPrimitive[],
  size: ${JSON.stringify(prim('size'), null, 2)} as TypographyPrimitive[],
  weight: ${JSON.stringify(prim('weight'), null, 2)} as TypographyPrimitive[],
  lineHeight: ${JSON.stringify(prim('lineHeight'), null, 2)} as TypographyPrimitive[],
  letterSpacing: ${JSON.stringify(prim('letterSpacing'), null, 2)} as TypographyPrimitive[],
};

export const textStyles: TextStyleToken[] = ${JSON.stringify(
  styles.map((s) => Object.fromEntries(Object.entries(s).filter(([k]) => k !== 'cssVars'))),
  null,
  2,
)};
`;
fs.writeFileSync(path.join(outDir, 'typography.ts'), ts);
fs.writeFileSync(
  path.join(outDir, 'typography.json'),
  JSON.stringify({ primitives: { family: prim('family'), size: prim('size'), weight: prim('weight'), lineHeight: prim('lineHeight'), letterSpacing: prim('letterSpacing') }, textStyles: styles.map((s) => Object.fromEntries(Object.entries(s).filter(([k]) => k !== 'cssVars'))) }, null, 2) + '\n',
);
console.log(`typography build: ${primitives.length} primitives, ${styles.length} text styles`);
