// Writes docs/icons.md from the SVG master record. Run with `npm run docs:icons`.
// Do not edit docs/icons.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const icons = JSON.parse(fs.readFileSync(path.join(root, 'src/icons/generated/icons.json'), 'utf8'));
const guardrailFile = path.join(repo, 'skills/guardrails/icons.md');
const rules = fs.existsSync(guardrailFile)
  ? fs
      .readFileSync(guardrailFile, 'utf8')
      .split('\n')
      .filter((l) => /^\| \d+ \|/.test(l))
      .map((l) => `| ${l.split('|')[1].trim()} | ${l.split('|')[2].trim()} |`)
  : [];
const row = (...c) => `| ${c.join(' | ')} |`;
const outline = icons.filter((i) => !i.filled);
const filled = icons.filter((i) => i.filled);

const out = [];
const w = (...l) => out.push(...l);
w('# Icons', '');
w('Generated from the SVG files in `icons/`. Do not edit by hand. Change the SVG files, then regenerate with `npm run docs:icons` in `packages/ui`.', '');
w('Source decision: [0009 Icon library](../decisions/0009-icon-library.md). Pilot scope: web, Blade source drawings.', '');
w('## How to use icons', '');
w(`- **${icons.length} icons**, ${outline.length} outline and ${filled.length} filled. A filled icon is a separate icon whose name ends in \`-filled\`.`);
w('- **One drawing each**, on a 24 by 24 grid, in a single color. Size and color are not part of the drawing. They come from tokens.');
w('- **Size:** one of the six [icon sizes](icon-size.md) (`xsmall` 8px to `2xlarge` 32px). The default is `medium` (16px).');
w('- **Color:** one of the icon color tokens (`surface.icon.*`, `feedback.icon.*`, `interactive.icon.*`), or `currentColor` to follow the surrounding text color. The default is `surface.icon.gray.normal`.');
w('- **Accessibility:** an icon is treated as decoration and hidden from screen readers. Give it an `aria-label` when it carries meaning on its own.');
w('- **In code:** `<ArrowLeftIcon size="large" color="interactive.icon.primary.normal" />`.');
w('- **In Figma:** each icon is one 24px component named `icon/<name>` on the Icons page (checksum `95d47966` over name and shape count, same as the build output). Resize an instance with an icon size variable (`icon-size/*`) and set its color to an icon color variable.', '');
if (rules.length) w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [icons](../skills/guardrails/icons.md).', '');
w(`## Outline icons (${outline.length})`, '', '| Name | Code name |', '|---|---|');
for (const i of outline) w(row(`\`${i.name}\``, `\`${i.codeName}\``));
w('', `## Filled icons (${filled.length})`, '', '| Name | Code name |', '|---|---|');
for (const i of filled) w(row(`\`${i.name}\``, `\`${i.codeName}\``));
w('');
fs.writeFileSync(path.join(repo, 'docs/icons.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/icons.md: ${icons.length} icons`);
