// Builds CSS variables and typed data for opacity and backdrop blur from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`.
// Opacity is a number from 0 to 1. Backdrop blur is in pixels.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');
const record = JSON.parse(fs.readFileSync(path.join(tokensDir, 'opacity-blur.json'), 'utf8'));
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const tokens = [];
for (const [group, body] of Object.entries(record)) {
  for (const [name, leaf] of Object.entries(body)) {
    if (name.startsWith('$')) continue;
    const isOpacity = group === 'opacity';
    if (isOpacity && !(leaf.$value >= 0 && leaf.$value <= 1)) throw new Error(`opacity.${name}: needs a number from 0 to 1`);
    if (!isOpacity && !/^\d+px$/.test(leaf.$value)) throw new Error(`${group}.${name}: needs a pixel value`);
    tokens.push({
      group,
      name,
      cssVar: `--craft-${kebab(group)}-${name}`,
      value: String(leaf.$value),
      // Figma stores opacity as a whole percent and blur as a number of pixels.
      figma: isOpacity ? Math.round(leaf.$value * 100) : parseFloat(leaf.$value),
      use: leaf.$description ?? null,
    });
  }
}

const css = ['/* Generated from /tokens by scripts/build-opacity-blur.mjs. Do not edit. */', ':root {'];
for (const t of tokens) css.push(`  ${t.cssVar}: ${t.value};`);
css.push('}');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'opacity-blur.css'), css.join('\n') + '\n');
fs.writeFileSync(path.join(outDir, 'opacity-blur.json'), JSON.stringify(tokens, null, 2) + '\n');
fs.writeFileSync(
  path.join(outDir, 'opacity-blur.ts'),
  `// Generated from /tokens by scripts/build-opacity-blur.mjs. Do not edit.
export interface OpacityBlurToken {
  group: 'opacity' | 'backdropBlur';
  name: string;
  cssVar: string;
  /** the CSS value: 0 to 1 for opacity, pixels for blur */
  value: string;
  /** the Figma value: whole percent for opacity, pixels for blur */
  figma: number;
  use: string | null;
}

export const opacityBlurTokens: OpacityBlurToken[] = ${JSON.stringify(tokens, null, 2)};
`,
);

// Parity checksum for Figma. Variables are in the `opacity-blur` collection, named opacity/100 and backdrop-blur/low.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const parity = tokens.map((t) => `${kebab(t.group)}/${t.name}=${t.figma}`);
const count = (g) => tokens.filter((t) => t.group === g).length;
console.log(`opacity-blur: ${count('opacity')} opacity, ${count('backdropBlur')} blur (${fnv(parity.join('\n'))})`);
