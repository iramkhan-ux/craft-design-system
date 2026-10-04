// Writes docs/typography.md from the master record. Run with `npm run docs:typography`.
// Primitives come first, then the text styles. Do not edit docs/typography.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/typography.json'), 'utf8'));
const guardrails = fs.readFileSync(path.join(repo, 'skills/guardrails/typography.md'), 'utf8');

const rules = guardrails
  .split('\n')
  .filter((l) => /^\| \d+ \|/.test(l))
  .map((l) => {
    const [, n, rule] = l.split('|').map((c) => c.trim());
    return `| ${n} | ${rule} |`;
  });

const { primitives: p, textStyles: styles } = data;
const out = [];
const w = (...l) => out.push(...l);
const row = (...c) => `| ${c.join(' | ')} |`;

w('# Typography', '');
w('Generated from `tokens/typography.primitives.json` and `tokens/typography.styles.json`. Do not edit by hand. Change the tokens, then regenerate with `npm run docs:typography` in `packages/ui`.', '');
w('Source decision: [0002 Typography foundation](../decisions/0002-typography-foundation.md). Pilot scope: web, desktop values, Blade reference values.', '');
w('## How to use typography', '');
w('- **Primitives are internal.** They are the raw values the text styles point to.');
w('- **Pick text styles only.** Each style bundles font, weight, size, line height and letter spacing, so they stay correctly paired.');
w('- **Names.** Figma shows styles with slashes, for example `display/small/semibold`. Code uses the class `craft-text-display-small-semibold`. These tables show both.');
w('- **Fonts.** Display and Heading use TASA Orbiter. Body and Caption use Inter. Code uses Menlo first in code and Roboto Mono in Figma. Inter, TASA Orbiter and Roboto Mono are open source (OFL-1.1).');
w('- **Letter spacing** is a percent in the tokens and in Figma. Code converts it to pixels for each style (font size x percent / 100), as Blade does. Em is not used.');
w('- **Text color** is not part of a text style. It comes from the semantic color tokens.');
w('- **Desktop and mobile.** Figma and code use the desktop values. Mobile values are recorded in the tokens and shown below, but not built yet.', '');
w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '');
w('Full reasons and confirmations: [typography](../skills/guardrails/typography.md).', '');

w('## Primitives (internal)', '');
w('Raw type values for reference only. Do not use them directly.', '');
w('### Font families', '', '| Name | In Figma | CSS variable | In code |', '|---|---|---|---|');
for (const f of p.family) w(row(`\`${f.name}\``, f.figmaFontFamily, `\`${f.cssVar}\``, `\`${f.value}\``));
w('', '### Font sizes', '', '| Step | Desktop | Mobile | CSS variable |', '|---|---|---|---|');
for (const s of p.size) w(row(`\`${s.name}\``, s.value, s.mobile ?? 'same', `\`${s.cssVar}\``));
w('', '### Line heights', '', '| Step | Desktop | Mobile | CSS variable |', '|---|---|---|---|');
for (const s of p.lineHeight) w(row(`\`${s.name}\``, s.value, s.mobile ?? 'same', `\`${s.cssVar}\``));
w('', '### Weights', '', '| Name | Value | CSS variable |', '|---|---|---|');
for (const s of p.weight) w(row(`\`${s.name}\``, s.value, `\`${s.cssVar}\``));
w('', '### Letter spacings', '', '| Step | Percent |', '|---|---|');
for (const s of p.letterSpacing) w(row(`\`${s.name}\``, s.value));
w('');

w('## Text styles', '', `${styles.length} styles. Size is font size / line height.`, '');
const groups = [['display', 'Display'], ['heading', 'Heading'], ['body', 'Body'], ['caption', 'Caption'], ['code', 'Code']];
for (const [key, title] of groups) {
  w(`### ${title}`, '', '| Style (Figma) | CSS class | Font | Size / line height | Weight | Letter spacing |', '|---|---|---|---|---|---|');
  for (const s of styles.filter((x) => x.group === key)) {
    const ls = `${s.letterSpacingPct}%${s.letterSpacingPx ? ` (${s.letterSpacingPx}px)` : ''}`;
    w(row(`\`${s.figmaName}\``, `\`${s.className}\``, s.fontFamilyKey, `${s.fontSizePx}/${s.lineHeightPx}px`, s.fontWeight, ls));
  }
  w('');
}
fs.writeFileSync(path.join(repo, 'docs/typography.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/typography.md: ${styles.length} styles`);
