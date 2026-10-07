// Writes docs/spinner.md from the Spinner component source. Run with `npm run docs:spinner`.
// Do not edit docs/spinner.md by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repo = path.resolve(root, '../..');
const src = fs.readFileSync(path.join(root, 'src/components/Spinner/Spinner.tsx'), 'utf8');
const sizeTokens = JSON.parse(fs.readFileSync(path.join(root, 'src/tokens/generated/icon-size.json'), 'utf8'));

const list = (name) => [...src.match(new RegExp(`export const ${name} = \\[(.*?)\\] as const`))[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
const record = (name) => Object.fromEntries([...src.match(new RegExp(`const ${name}: Record<[^>]+> = \\{(.*?)\\};`, 's'))[1].matchAll(/(\w+): '([^']+)'/g)].map((m) => [m[1], m[2]]));
const sizes = list('spinnerSizes');
const colors = list('spinnerColors');
const positions = list('spinnerLabelPositions');
const sizeVars = record('sizeVars');
const colorVars = record('colorVars');
const px = (cssVar) => sizeTokens.find((t) => t.cssVar === cssVar).value;

// Parity checksum for Figma: the Spinner component set has one variant for each combination, named like the lines below.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const variants = [];
for (const color of colors) for (const pos of positions) for (const size of sizes) variants.push(`Size=${size}, Color=${color}, Label position=${pos}`);
const checksum = fnv([...variants].sort().join('\n'));

const guardrailFile = path.join(repo, 'skills/guardrails/spinner.md');
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
w('# Spinner', '');
w('Generated from `packages/ui/src/components/Spinner/Spinner.tsx`. Do not edit by hand. Change the component, then regenerate with `npm run docs:spinner` in `packages/ui`.', '');
w('Source decision: [0010 Spinner](../decisions/0010-spinner.md). Pilot scope: web, Blade source drawing and motion.', '');
w('## How to use the Spinner', '');
w('- **A loading indicator.** Use it while something is loading or saving and nothing else on the screen shows progress.');
w('- **Size and color.** Pick a size and a color from the tables below. The Spinner has no tokens of its own. It reuses the icon sizes and the interactive icon colors.');
w('- **Label.** An optional text label sits to the right or underneath. Screen readers announce the label. With no label they announce "Loading". You can set what they announce with `aria-label`.');
w('- **Motion.** One full turn every 960ms (`duration.2xgentle`, `easing.overshoot`), forever. With reduced motion on, it keeps turning at half the pace (1920ms).');
w('- **In Figma.** The Spinner is static. It turns only in code and Storybook. One component set, `Spinner`, with the variants `Size`, `Color` and `Label position`, plus a `Show label` switch and a `Label` text. ' + `${variants.length} variants (checksum \`${checksum}\`).`, '');
if (rules.length) w('## Guardrails', '', '| # | Rule |', '|---|---|', ...rules, '', 'Full reasons and confirmations: [spinner](../skills/guardrails/spinner.md).', '');
w('## Sizes', '', '| Size | Value | Icon size variable |', '|---|---|---|');
for (const s of sizes) w(row(`\`${s}\``, px(sizeVars[s]), `\`${sizeVars[s]}\``));
w('', '## Colors', '', '| Color | Use on | Color variable |', '|---|---|---|');
const useOn = { neutral: 'Any light or dark surface (default)', primary: 'Any surface, for emphasis', white: 'Dark or colored surfaces (same in light and dark)', onNeutral: 'Filled neutral surfaces (follows the theme)' };
for (const c of colors) w(row(`\`${c}\``, useOn[c], `\`${colorVars[c]}\``));
w('', '## Label position', '', '`' + positions.join('`, `') + '`. Default `right`.', '');
fs.writeFileSync(path.join(repo, 'docs/spinner.md'), out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
console.log(`docs/spinner.md: ${sizes.length} sizes, ${colors.length} colors, ${variants.length} variants (${checksum})`);
