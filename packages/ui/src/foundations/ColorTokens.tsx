import { useState } from 'react';
import { primitiveColors, semanticColors } from '../tokens/generated/color';
import type { ColorModeValue, SemanticColorToken } from '../tokens/generated/color';

export type Theme = 'light' | 'dark';

const checker =
  'repeating-conic-gradient(#c9ced6 0% 25%, #ffffff 0% 50%) 50% / 12px 12px';

const v = (name: string) => `var(--craft-color-${name})`;

function opacityOf(value: string): string | null {
  const m = /\/ (\d+)%\)$/.exec(value);
  return m && m[1] !== '100' ? `${m[1]}%` : null;
}

function Swatch({ color }: { color: string }) {
  return (
    <div style={{ height: 56, borderRadius: 6, background: checker, overflow: 'hidden', border: `1px solid ${v('surface-border-gray-subtle')}` }}>
      <div style={{ width: '100%', height: '100%', background: color }} />
    </div>
  );
}

function CopyName({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${text}`}
      onClick={() => {
        void navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{
        all: 'unset',
        cursor: 'pointer',
        font: '600 13px/18px system-ui, sans-serif',
        color: v('surface-text-gray-normal'),
        wordBreak: 'break-all',
      }}
    >
      {copied ? 'Copied' : label}
    </button>
  );
}

function valueText(m: ColorModeValue) {
  const op = opacityOf(m.value);
  return `${m.ref ?? m.value}${op ? ` · ${op}` : ''}`;
}

function TokenCard({ token, theme, short }: { token: SemanticColorToken; theme: Theme; short: string }) {
  const mode = token[theme];
  return (
    <div
      style={{
        background: v('surface-background-gray-intense'),
        border: `1px solid ${v('surface-border-gray-subtle')}`,
        borderRadius: 8,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <Swatch color={`var(${token.cssVar})`} />
      <CopyName text={token.cssVar} label={short} />
      <div style={{ font: '12px/16px system-ui, sans-serif', color: v('surface-text-gray-subtle') }}>
        <div>{valueText(mode)}</div>
        <div style={{ color: v('surface-text-gray-muted') }}>{mode.ref ? mode.value : ''}</div>
      </div>
    </div>
  );
}

const TOP: Record<string, string> = {
  surface: 'Surface',
  interactive: 'Interactive',
  feedback: 'Feedback',
  overlay: 'Overlay',
  popup: 'Popup',
  elevation: 'Elevation',
  transparent: 'Transparent',
};
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const groupTitle = (g: string) => {
  const [top, second] = g.split('.');
  return second ? `${TOP[top]} / ${cap(second)}` : TOP[top];
};

function Page({ theme, children }: { theme: Theme; children: React.ReactNode }) {
  return (
    <div
      data-theme={theme}
      style={{
        background: v('surface-background-gray-subtle'),
        color: v('surface-text-gray-normal'),
        padding: 24,
        minHeight: '100vh',
        font: '14px/20px system-ui, sans-serif',
      }}
    >
      {children}
    </div>
  );
}

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: 12 } as const;
const h2 = { font: '600 18px/24px system-ui, sans-serif', margin: '32px 0 12px' } as const;

export function SemanticColors({ theme }: { theme: Theme }) {
  const groups = new Map<string, SemanticColorToken[]>();
  for (const t of semanticColors) groups.set(t.group, [...(groups.get(t.group) ?? []), t]);
  return (
    <Page theme={theme}>
      <h1 style={{ font: '700 28px/36px system-ui, sans-serif', margin: 0 }}>Color: {theme} theme</h1>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>
        {semanticColors.length} semantic tokens. Pick these in designs and code. Click a card to copy its CSS variable.
        A checkerboard behind a swatch means the color is translucent.
      </p>
      {[...groups].map(([group, tokens]) => (
        <section key={group}>
          <h2 style={h2}>{groupTitle(group)}</h2>
          <div style={grid}>
            {tokens.map((t) => (
              <TokenCard key={t.name} token={t} theme={theme} short={t.name.split('.').slice(group.split('.').length).join('.') || t.name} />
            ))}
          </div>
        </section>
      ))}
    </Page>
  );
}

export function PrimitiveColors() {
  const families = new Map<string, typeof primitiveColors>();
  for (const p of primitiveColors) {
    const f = p.name.split('.').slice(0, 2).join('.');
    families.set(f, [...(families.get(f) ?? []), p]);
  }
  return (
    <Page theme="light">
      <h1 style={{ font: '700 28px/36px system-ui, sans-serif', margin: 0 }}>Primitives (internal)</h1>
      <p
        style={{
          maxWidth: 640,
          padding: 12,
          borderRadius: 8,
          background: v('feedback-background-notice-subtle'),
          color: v('feedback-text-notice-intense'),
        }}
      >
        Raw colors for reference only. Do not use them in designs or components. Use the semantic tokens.
      </p>
      {[...families].map(([family, items]) => (
        <section key={family}>
          <h2 style={h2}>{family.replace('chromatic.', '').replace('neutral.', '')}</h2>
          <div style={{ ...grid, gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' }}>
            {items.map((p) => (
              <div key={p.name} style={{ font: '12px/16px system-ui, sans-serif' }}>
                <Swatch color={`var(${p.cssVar})`} />
                <div style={{ fontWeight: 600, marginTop: 4 }}>{p.name.split('.')[2]}</div>
                <div style={{ color: v('surface-text-gray-subtle') }}>{p.value}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </Page>
  );
}
