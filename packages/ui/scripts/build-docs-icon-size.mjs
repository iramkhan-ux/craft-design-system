// Writes docs/icon-size.md from the master record. Run with `npm run docs:icon-size`.
// Do not edit docs/icon-size.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/icon-size.json'), 'utf8'));
const guardrailFile = path.join(repo, 'skills/guardrails/icon-size.md');
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
w('# Icon size', '');
w('Generated from `tokens/icon-size.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:icon-size` in `packages/ui`.', '');
w('Source decision: [0008 Icon size foundation](../decisions/0008-icon-size-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use icon sizes', '');
w('- **One layer.** There is no primitive layer. Use the tokens directly.');
w('- **For icons only.** Figma cannot limit a variable to one component, so the Figma variables (`icon-size/*` in the `layout` collection) appear in any width or height field. Use them on icons, and nowhere else.');
w('- **Pixels.** Each size is a square, so the same value is the width and the height.', '');
if (rules.length) w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [icon size](../skills/guardrails/icon-size.md).', '');
w('## Sizes', '', '| Token | Value | CSS variable |', '|---|---|---|');
for (const t of tokens) w(row(`\`${t.name}\``, t.value, `\`${t.cssVar}\``));
w('');
fs.writeFileSync(path.join(repo, 'docs/icon-size.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/icon-size.md: ${tokens.length} tokens`);
