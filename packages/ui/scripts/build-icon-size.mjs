// Builds CSS variables and typed data for icon sizes from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`. Values are pixels, as in Blade.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');
const record = JSON.parse(fs.readFileSync(path.join(tokensDir, 'icon-size.json'), 'utf8'));
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const tokens = [];
for (const [group, body] of Object.entries(record)) {
  for (const [name, leaf] of Object.entries(body)) {
    if (name.startsWith('$')) continue;
    if (!/^\d+px$/.test(leaf.$value)) throw new Error(`${group}.${name}: needs a pixel value`);
    tokens.push({ name, cssVar: `--craft-${kebab(group)}-${name}`, value: leaf.$value, px: parseFloat(leaf.$value) });
  }
}

const css = ['/* Generated from /tokens by scripts/build-icon-size.mjs. Do not edit. */', ':root {'];
for (const t of tokens) css.push(`  ${t.cssVar}: ${t.value};`);
css.push('}');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'icon-size.css'), css.join('\n') + '\n');
fs.writeFileSync(path.join(outDir, 'icon-size.json'), JSON.stringify(tokens, null, 2) + '\n');
fs.writeFileSync(
  path.join(outDir, 'icon-size.ts'),
  `// Generated from /tokens by scripts/build-icon-size.mjs. Do not edit.
export interface IconSizeToken {
  name: string;
  cssVar: string;
  value: string;
  px: number;
}

export const iconSizeTokens: IconSizeToken[] = ${JSON.stringify(tokens, null, 2)};
`,
);

// Parity checksum for Figma. Variables are in the `layout` collection, named icon-size/xsmall.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
console.log(`icon-size: ${tokens.length} tokens (${fnv(tokens.map((t) => `icon-size/${t.name}=${t.px}`).join('\n'))})`);
