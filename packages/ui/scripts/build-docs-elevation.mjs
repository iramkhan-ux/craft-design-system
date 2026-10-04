// Writes docs/elevation.md from the master record. Run with `npm run docs:elevation`.
// Do not edit docs/elevation.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const levels = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/elevation.json'), 'utf8'));
const rules = fs
  .readFileSync(path.join(repo, 'skills/guardrails/elevation.md'), 'utf8')
  .split('\n')
  .filter((l) => /^\| \d+ \|/.test(l))
  .map((l) => `| ${l.split('|')[1].trim()} | ${l.split('|')[2].trim()} |`);
const row = (...c) => `| ${c.join(' | ')} |`;
const shadow = (s) => (s ? `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread}, \`${s.colorRef}\`` : 'none');

const out = [];
const w = (...l) => out.push(...l);
w('# Elevation', '');
w('Generated from `tokens/elevation.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:elevation` in `packages/ui`.', '');
w('Source decision: [0005 Elevation foundation](../decisions/0005-elevation-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use elevation', '');
w('- **One layer.** Elevation has no primitive layer of its own. Each shadow color points to a color primitive, and the shadow itself is used directly.');
w('- **Figma.** Use the effect styles `elevation/lowRaised`, `elevation/midRaised` and `elevation/highRaised`. `none` needs no style. Their numbers are variables in the `layout` collection (`elevation/<level>/x`, `y`, `blur`, `spread`).');
w('- **Code.** Use `box-shadow: var(--craft-elevation-low-raised)`. The value switches with `data-theme="light"` or `data-theme="dark"`.');
w('- **Light and dark.** Figma builds the light values only. Dark values are recorded in the tokens and shown below.');
w('- **Shadow values** are offset x, offset y, blur and spread, in pixels, then the color.', '');
w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [elevation](../skills/guardrails/elevation.md).', '');
w('## Levels', '', '| Level | CSS variable | Light | Dark |', '|---|---|---|---|');
for (const l of levels) w(row(`\`${l.name}\``, `\`${l.cssVar}\``, shadow(l.light), shadow(l.dark)));
w('');
fs.writeFileSync(path.join(repo, 'docs/elevation.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/elevation.md: ${levels.length} levels`);
