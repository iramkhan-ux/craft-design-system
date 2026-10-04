// Builds CSS variables and typed data for spacing, radius, border width and breakpoints
// from the master record in ../../tokens. Output goes to src/tokens/generated (not committed).
// Run with `npm run tokens`. Values are pixels, as in Blade.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');

const record = JSON.parse(fs.readFileSync(path.join(tokensDir, 'spacing.json'), 'utf8'));
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const tokens = [];
for (const [group, body] of Object.entries(record)) {
  for (const [key, leaf] of Object.entries(body)) {
    if (key.startsWith('$')) continue;
    tokens.push({
      group,
      name: key,
      cssVar: `--craft-${kebab(group)}-${key}`,
      value: leaf.$value,
      figma: leaf.$extensions?.craft?.figma !== false,
    });
  }
}

const css = ['/* Generated from /tokens by scripts/build-spacing.mjs. Do not edit. */', ':root {'];
for (const t of tokens) css.push(`  ${t.cssVar}: ${t.value};`);
css.push('}');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'spacing.css'), css.join('\n') + '\n');

const ts = `// Generated from /tokens by scripts/build-spacing.mjs. Do not edit.
export interface LayoutToken {
  group: 'spacing' | 'radius' | 'borderWidth' | 'breakpoint';
  name: string;
  cssVar: string;
  value: string;
  /** false when the token exists in code only (not a Figma variable) */
  figma: boolean;
}

export const layoutTokens: LayoutToken[] = ${JSON.stringify(tokens, null, 2)};
`;
fs.writeFileSync(path.join(outDir, 'spacing.ts'), ts);
fs.writeFileSync(path.join(outDir, 'spacing.json'), JSON.stringify(tokens, null, 2) + '\n');

// Parity checksum. Figma variables are named spacing/5, radius/small, border-width/thin (collection "layout").
// Only tokens that exist in Figma are counted. Order matters, so this also checks natural order.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const lines = tokens.filter((t) => t.figma).map((t) => `${kebab(t.group)}/${t.name}=${parseFloat(t.value)}`);
console.log(`spacing: ${tokens.length} tokens, ${lines.length} in Figma (${fnv(lines.join('\n'))})`);
