// Builds CSS variables and typed data for motion (duration, delay, easing) from the master record in ../../tokens.
// Output goes to src/tokens/generated (not committed). Run with `npm run tokens`.
// Time is in milliseconds. Easing is a cubic-bezier curve.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokensDir = path.resolve(root, '../../tokens');
const outDir = path.join(root, 'src/tokens/generated');
const record = JSON.parse(fs.readFileSync(path.join(tokensDir, 'motion.json'), 'utf8'));
const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const tokens = [];
for (const [group, body] of Object.entries(record)) {
  for (const [name, leaf] of Object.entries(body)) {
    if (name.startsWith('$')) continue;
    const isCurve = Array.isArray(leaf.$value);
    if (isCurve && leaf.$value.length !== 4) throw new Error(`${group}.${name}: a curve needs 4 numbers`);
    tokens.push({
      group,
      name,
      cssVar: `--craft-${kebab(group)}-${name}`,
      value: isCurve ? `cubic-bezier(${leaf.$value.join(', ')})` : leaf.$value,
      ms: isCurve ? null : parseFloat(leaf.$value),
      curve: isCurve ? leaf.$value : null,
      use: leaf.$description ?? null,
    });
  }
}

const css = ['/* Generated from /tokens by scripts/build-motion.mjs. Do not edit. */', ':root {'];
for (const t of tokens) css.push(`  ${t.cssVar}: ${t.value};`);
css.push('}');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'motion.css'), css.join('\n') + '\n');
fs.writeFileSync(path.join(outDir, 'motion.json'), JSON.stringify(tokens, null, 2) + '\n');
fs.writeFileSync(
  path.join(outDir, 'motion.ts'),
  `// Generated from /tokens by scripts/build-motion.mjs. Do not edit.
export interface MotionToken {
  group: 'duration' | 'delay' | 'easing';
  name: string;
  cssVar: string;
  value: string;
  /** milliseconds, for duration and delay */
  ms: number | null;
  /** [x1, y1, x2, y2], for easing */
  curve: [number, number, number, number] | null;
  use: string | null;
}

export const motionTokens: MotionToken[] = ${JSON.stringify(tokens, null, 2)};
`,
);

// Motion is code only (no Figma variables), so there is no Figma parity checksum. The count is printed for the record.
const count = (g) => tokens.filter((t) => t.group === g).length;
console.log(`motion: ${tokens.length} tokens (duration ${count('duration')}, delay ${count('delay')}, easing ${count('easing')})`);
