// Builds the React icon components and typed data from the SVG master record in ../../icons.
// Output goes to src/icons/generated (not committed). Run with `npm run tokens`.
// Every drawing is 24 by 24 and uses currentColor. Color and size come from the icon color and icon size tokens.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const iconsDir = path.resolve(root, '../../icons');
const outDir = path.join(root, 'src/icons/generated');
const genTokens = path.join(root, 'src/tokens/generated');

// Code names follow the source. These are the names the plain rule would spell differently.
const codeNameOverrides = { 'qr-code': 'QRCodeIcon' };
const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const pascal = (s) => camel(s).replace(/^[a-z]/, (c) => c.toUpperCase());
const tok = /<(\/?)([A-Za-z]+)((?:\s+[a-zA-Z-]+="[^"]*")*)\s*(\/?)>/g;
const attrRe = /([a-zA-Z-]+)="([^"]*)"/g;

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith('.svg')).sort();
const icons = [];
let shapes = 0;
for (const file of files) {
  const name = file.replace(/\.svg$/, '');
  const svg = fs.readFileSync(path.join(iconsDir, file), 'utf8');
  if (!svg.includes('viewBox="0 0 24 24"')) throw new Error(`${name}: needs a 24 by 24 drawing`);
  const inner = svg.slice(svg.indexOf('>') + 1, svg.lastIndexOf('</svg>'));
  let shapeCount = 0;
  const jsx = [];
  for (const m of inner.matchAll(tok)) {
    const [, close, tag, attrs, self] = m;
    if (close) { jsx.push(`</${tag}>`); continue; }
    if (['path', 'circle'].includes(tag)) shapeCount += 1;
    const props = [...attrs.matchAll(attrRe)].map(([, a, v]) => `${camel(a)}="${v}"`);
    jsx.push(`<${tag}${props.length ? ' ' + props.join(' ') : ''}${self ? ' />' : '>'}`);
  }
  shapes += shapeCount;
  icons.push({ name, codeName: codeNameOverrides[name] ?? `${pascal(name)}Icon`, filled: name.endsWith('-filled'), shapes: shapeCount, jsx: jsx.join('') });
}

const sizes = JSON.parse(fs.readFileSync(path.join(genTokens, 'icon-size.json'), 'utf8'));
const colorSrc = fs.readFileSync(path.join(genTokens, 'color.ts'), 'utf8');
const colors = [...colorSrc.matchAll(/"name": "([^"]*\.icon\.[^"]*)",\s*"figmaName": "[^"]*",\s*"group": "[^"]*",\s*"cssVar": "([^"]*)"/g)].map((m) => ({ name: m[1], cssVar: m[2] }));
if (!colors.length) throw new Error('no icon color tokens found');

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  path.join(outDir, 'meta.ts'),
  `// Generated from /tokens and /icons by scripts/build-icons.mjs. Do not edit.
export const iconSizeVars = ${JSON.stringify(Object.fromEntries(sizes.map((s) => [s.name, s.cssVar])), null, 2)} as const;
export type IconSize = keyof typeof iconSizeVars;
export const iconSizes = Object.keys(iconSizeVars) as IconSize[];

export const iconColorVars = ${JSON.stringify(Object.fromEntries(colors.map((c) => [c.name, c.cssVar])), null, 2)} as const;
export type IconColor = keyof typeof iconColorVars | 'currentColor';
export const iconColors = Object.keys(iconColorVars) as (keyof typeof iconColorVars)[];
`,
);

const lines = [
  '// Generated from /icons by scripts/build-icons.mjs. Do not edit.',
  "import { createIcon } from '../createIcon';",
  "import type { IconComponent } from '../createIcon';",
  '',
];
for (const i of icons) lines.push(`export const ${i.codeName}: IconComponent = createIcon('${i.codeName}', <>${i.jsx}</>);`);
lines.push('', 'export const iconList: { name: string; codeName: string; filled: boolean; Component: IconComponent }[] = [');
for (const i of icons) lines.push(`  { name: '${i.name}', codeName: '${i.codeName}', filled: ${i.filled}, Component: ${i.codeName} },`);
lines.push('];', '');
fs.writeFileSync(path.join(outDir, 'icons.tsx'), lines.join('\n'));
fs.writeFileSync(path.join(outDir, 'icons.json'), JSON.stringify(icons.map((i) => ({ name: i.name, codeName: i.codeName, filled: i.filled, shapes: i.shapes })), null, 2) + '\n');

// Parity checksum for Figma. Figma has one component per icon named icon/<name>, 24 by 24, with the same number of shapes.
const fnv = (str) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
};
const parity = icons.map((i) => `icon/${i.name}=${i.shapes}`);
const filled = icons.filter((i) => i.filled).length;
console.log(`icons: ${icons.length} (${icons.length - filled} outline, ${filled} filled), ${shapes} shapes (${fnv(parity.join('\n'))})`);
