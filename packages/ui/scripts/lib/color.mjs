// Color value helpers shared by the token build and the docs generator.
// Token values are written exactly as Blade's source writes them: `hsla(h, s%, l%, a)`, or the word `transparent`.

const hslToRgb = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const f = (n) => l - s * Math.min(l, 1 - l) * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((x) => Math.round(x * 255));
};

/** Returns { r, g, b, alphaPct } with 8-bit channels and a whole-percent alpha. */
export function parseColor(value) {
  if (value === 'transparent') return { r: 0, g: 0, b: 0, alphaPct: 0 };
  const m = /^hsla\((\d+(?:\.\d+)?), (\d+(?:\.\d+)?)%, (\d+(?:\.\d+)?)%, (\d+(?:\.\d+)?)\)$/.exec(value);
  if (!m) throw new Error(`Unsupported color value: ${value}`);
  const [r, g, b] = hslToRgb(Number(m[1]), Number(m[2]), Number(m[3]));
  const alphaPct = Number((Number(m[4]) * 100).toFixed(4));
  if (!Number.isInteger(alphaPct)) throw new Error(`Alpha is not a whole percent: ${value}`);
  return { r, g, b, alphaPct };
};

const hex2 = (n) => n.toString(16).padStart(2, '0');

/** `#rrggbb` for the channels, and the alpha as a whole percent. */
export function toHexAlpha(value) {
  const { r, g, b, alphaPct } = parseColor(value);
  return { hex: `#${hex2(r)}${hex2(g)}${hex2(b)}`, alphaPct };
}

/** Line used by the parity checksum: `#rrggbb@alpha`. */
export const parityValue = (value) => {
  const { hex, alphaPct } = toHexAlpha(value);
  return `${hex}@${alphaPct}`;
};
