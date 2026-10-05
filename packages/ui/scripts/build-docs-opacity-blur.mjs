// Writes docs/opacity-blur.md from the master record. Run with `npm run docs:opacity-blur`.
// Do not edit docs/opacity-blur.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/opacity-blur.json'), 'utf8'));
const of = (g) => tokens.filter((t) => t.group === g);
const guardrailFile = path.join(repo, 'skills/guardrails/opacity-blur.md');
const rules = fs.existsSync(guardrailFile)
  ? fs
      .readFileSync(guardrailFile, 'utf8')
      .split('\n')
      .filter((l) => /^\| \d+ \|/.test(l))
      .map((l) => `| ${l.split('|')[1].trim()} | ${l.split('|')[2].trim()} |`)
  : [];
const row = (...c) => `| ${c.join(' | ')} |`;

const out = [];
const w = (...l) => out.push(...l);
w('# Opacity and backdrop blur', '');
w('Generated from `tokens/opacity-blur.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:opacity-blur` in `packages/ui`.', '');
w('Source decision: [0007 Opacity and backdrop blur foundation](../decisions/0007-opacity-blur-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use opacity and blur', '');
w('- **One layer.** There is no primitive layer. Use the tokens directly.');
w('- **Opacity** is a number from 0 (invisible) to 1 (solid). The token names (0, 1, 50 ... 1300) are steps, not percentages.');
w('- **Backdrop blur** blurs what is behind a see-through surface, for example a frosted panel. It is a number of pixels.');
w('- **Code and Figma.** Both are CSS variables in code and number variables in the Figma `opacity-blur` collection (opacity as a whole percent, because Figma stores it that way).', '');
if (rules.length) w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [opacity and blur](../skills/guardrails/opacity-blur.md).', '');
w('## Opacity', '', '| Token | Value | Figma value | CSS variable |', '|---|---|---|---|');
for (const t of of('opacity')) w(row(`\`${t.name}\``, t.value, `${t.figma}%`, `\`${t.cssVar}\``));
w('', '## Backdrop blur', '', '| Token | Value | Used for | CSS variable |', '|---|---|---|---|');
for (const t of of('backdropBlur')) w(row(`\`${t.name}\``, t.value, t.use, `\`${t.cssVar}\``));
w('');
fs.writeFileSync(path.join(repo, 'docs/opacity-blur.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/opacity-blur.md: ${tokens.length} tokens`);
