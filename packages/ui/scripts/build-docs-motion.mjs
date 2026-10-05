// Writes docs/motion.md from the master record. Run with `npm run docs:motion`.
// Do not edit docs/motion.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/motion.json'), 'utf8'));
const of = (g) => tokens.filter((t) => t.group === g);
const rules = fs
  .readFileSync(path.join(repo, 'skills/guardrails/motion.md'), 'utf8')
  .split('\n')
  .filter((l) => /^\| \d+ \|/.test(l))
  .map((l) => `| ${l.split('|')[1].trim()} | ${l.split('|')[2].trim()} |`);
const row = (...c) => `| ${c.join(' | ')} |`;

const out = [];
const w = (...l) => out.push(...l);
w('# Motion', '');
w('Generated from `tokens/motion.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:motion` in `packages/ui`.', '');
w('Source decision: [0006 Motion foundation](../decisions/0006-motion-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use motion', '');
w('- **One layer.** Motion has no primitive layer. Use the tokens directly.');
w('- **Code, plus a Figma page.** Motion tokens are CSS variables. Figma has a Motion page that shows them, but no variables, because Figma cannot use a duration or easing curve as a variable in a design.');
w('- **Time** is in milliseconds. **Easing** is a cubic-bezier curve, written as `cubic-bezier(x1, y1, x2, y2)`.');
w('- **Together.** A transition uses a duration, an easing and sometimes a delay, for example `transition: transform var(--craft-duration-moderate) var(--craft-easing-standard)`.');
w('- **Reduced motion.** When a person has asked their device for reduced motion (`prefers-reduced-motion: reduce`), skip or shorten the animation. The tokens do not change; the component decides.', '');
w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [motion](../skills/guardrails/motion.md).', '');
w('## Duration', '', '| Token | Value | CSS variable |', '|---|---|---|');
for (const t of of('duration')) w(row(`\`${t.name}\``, t.value, `\`${t.cssVar}\``));
w('', '## Delay', '', '| Token | Value | CSS variable |', '|---|---|---|');
for (const t of of('delay')) w(row(`\`${t.name}\``, t.value, `\`${t.cssVar}\``));
w('', '## Easing', '', '| Token | Curve | Used for | CSS variable |', '|---|---|---|---|');
for (const t of of('easing')) w(row(`\`${t.name}\``, `\`${t.value}\``, t.use, `\`${t.cssVar}\``));
w('');
fs.writeFileSync(path.join(repo, 'docs/motion.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/motion.md: ${tokens.length} tokens`);
