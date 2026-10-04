// Writes docs/spacing.md from the master record. Run with `npm run docs:spacing`.
// Do not edit docs/spacing.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const tokens = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/spacing.json'), 'utf8'));
const rules = fs
  .readFileSync(path.join(repo, 'skills/guardrails/spacing.md'), 'utf8')
  .split('\n')
  .filter((l) => /^\| \d+ \|/.test(l))
  .map((l) => `| ${l.split('|')[1].trim()} | ${l.split('|')[2].trim()} |`);
const of = (g) => tokens.filter((t) => t.group === g);
const figmaName = (t) => (t.figma ? `${t.group === 'borderWidth' ? 'border-width' : t.group}/${t.name}` : 'Code only');
const row = (...c) => `| ${c.join(' | ')} |`;

const out = [];
const w = (...l) => out.push(...l);
w('# Spacing, radius, border width and breakpoints', '');
w('Generated from `tokens/spacing.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:spacing` in `packages/ui`.', '');
w('Source decision: [0003 Spacing foundation](../decisions/0003-spacing-foundation.md). Pilot scope: web, Blade source values.', '');
w('## How to use these tokens', '');
w('- **One layer.** These tokens have no primitive layer. Designers and components use them directly.');
w('- **Pixels.** Values are pixels in the tokens and in code, as in Blade.');
w('- **Names.** Figma shows `spacing/5`, `radius/small` and `border-width/thin`. Code uses `--craft-spacing-5`, `--craft-radius-small` and `--craft-border-width-thin`.');
w('- **Code only.** `radius/round` (50%, for circles) and the breakpoints are not Figma variables. Figma has no percent radius and no screen-width variable.');
w('- **Not here yet.** Sizes, icon sizes, opacity, elevation and motion come with their own foundations.', '');
w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [spacing](../skills/guardrails/spacing.md).', '');
w('## Spacing', '', 'Padding, gaps and margins.', '', '| Token | Value | In Figma | CSS variable |', '|---|---|---|---|');
for (const t of of('spacing')) w(row(`\`${t.name}\``, t.value, `\`${figmaName(t)}\``, `\`${t.cssVar}\``));
w('', '## Radius', '', '| Token | Value | In Figma | CSS variable |', '|---|---|---|---|');
for (const t of of('radius')) w(row(`\`${t.name}\``, t.value, t.figma ? `\`${figmaName(t)}\`` : 'Code only', `\`${t.cssVar}\``));
w('', '## Border width', '', '| Token | Value | In Figma | CSS variable |', '|---|---|---|---|');
for (const t of of('borderWidth')) w(row(`\`${t.name}\``, t.value, `\`${figmaName(t)}\``, `\`${t.cssVar}\``));
w('', '## Breakpoints', '', 'Mobile first. `base` has no media query. The others apply from that width up. CSS cannot read a variable inside a media query, so use the pixel value there.', '', '| Token | From width | CSS variable |', '|---|---|---|');
for (const t of of('breakpoint')) w(row(`\`${t.name}\``, t.value, `\`${t.cssVar}\``));
w('');
fs.writeFileSync(path.join(repo, 'docs/spacing.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/spacing.md: ${tokens.length} tokens`);
