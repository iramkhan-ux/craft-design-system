import { useState } from 'react';
import { textStyles, typographyPrimitives } from '../tokens/generated/typography';
import type { TextStyleToken, TypographyPrimitive } from '../tokens/generated/typography';

const v = (name: string) => `var(--craft-color-${name})`;
const sample = 'The quick brown fox jumps over the lazy dog';

// This page is built with the text styles it documents, so a broken style shows up here first.
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

function CopyText({ text, label, className = bodyBold }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${text}`}
      className={className}
      onClick={() => {
        void navigator.clipboard?.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{ all: 'unset', cursor: 'pointer', font: 'inherit', color: v('surface-text-gray-normal'), wordBreak: 'break-all' }}
    >
      {copied ? 'Copied' : (label ?? text)}
    </button>
  );
}

function Page({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      data-theme="light"
      className={body}
      style={{ background: v('surface-background-gray-subtle'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}
    >
      <h1 className="craft-text-heading-2xlarge-semibold" style={{ margin: 0 }}>
        {title}
      </h1>
      {children}
    </div>
  );
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginTop: 40 }}>
    <h2 className="craft-text-heading-large-semibold" style={{ margin: '0 0 12px' }}>
      {title}
    </h2>
    {children}
  </section>
);

const cell = { padding: '10px 12px', borderBottom: `1px solid ${v('surface-border-gray-subtle')}`, textAlign: 'left', verticalAlign: 'top' } as const;
const Table = ({ head, children }: { head: string[]; children: React.ReactNode }) => (
  <table style={{ borderCollapse: 'collapse', width: '100%', background: v('surface-background-gray-intense'), border: `1px solid ${v('surface-border-gray-subtle')}` }}>
    <thead>
      <tr>
        {head.map((h) => (
          <th key={h} className={bodyBold} style={{ ...cell, color: v('surface-text-gray-subtle') }}>
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);
const Sub = ({ children }: { children: React.ReactNode }) => (
  <span className={small} style={{ color: v('surface-text-gray-subtle') }}>
    {children}
  </span>
);

function Primitive({ items, columns }: { items: TypographyPrimitive[]; columns: 'size' | 'plain' }) {
  return (
    <Table head={columns === 'size' ? ['Step', 'Desktop', 'Mobile', 'CSS variable', 'Sample'] : ['Step', 'Desktop', 'Mobile', 'CSS variable']}>
      {items.map((p) => (
        <tr key={p.name}>
          <td style={cell} className={bodyBold}>{p.name}</td>
          <td style={cell} className={body}>{p.value}</td>
          <td style={cell} className={body}>{p.mobile ?? 'same'}</td>
          <td style={cell}>{p.cssVar ? <CopyText text={p.cssVar} className={small} /> : null}</td>
          {columns === 'size' && (
            <td style={{ ...cell, fontFamily: 'var(--craft-primitive-font-family-text)', fontSize: String(p.value), lineHeight: 1.2 }}>Aa</td>
          )}
        </tr>
      ))}
    </Table>
  );
}

export function TypographyPrimitivesPage() {
  const t = typographyPrimitives;
  return (
    <Page title="Primitives (internal)">
      <p
        className={body}
        style={{ maxWidth: 640, padding: 12, borderRadius: 8, background: v('feedback-background-notice-subtle'), color: v('surface-text-gray-normal') }}
      >
        Raw type values for reference only. Do not use them in designs or components. Use the text styles.
      </p>
      <Section title="Font families">
        <Table head={['Name', 'In Figma', 'CSS variable', 'In code', 'Sample']}>
          {t.family.map((f) => (
            <tr key={f.name}>
              <td style={cell} className={bodyBold}>{f.name}</td>
              <td style={cell} className={body}>{f.figmaFontFamily}</td>
              <td style={cell}>{f.cssVar && <CopyText text={f.cssVar} className={small} />}</td>
              <td style={cell}><Sub>{String(f.value)}</Sub></td>
              <td style={{ ...cell, fontFamily: f.cssVar ? `var(${f.cssVar})` : undefined, fontSize: 20 }}>Aa Bb Cc 0123</td>
            </tr>
          ))}
        </Table>
      </Section>
      <Section title="Font sizes">
        <Primitive items={t.size} columns="size" />
      </Section>
      <Section title="Line heights">
        <Primitive items={t.lineHeight} columns="plain" />
      </Section>
      <Section title="Weights">
        <Table head={['Name', 'Value', 'CSS variable', 'Sample']}>
          {t.weight.map((w) => (
            <tr key={w.name}>
              <td style={cell} className={bodyBold}>{w.name}</td>
              <td style={cell} className={body}>{w.value}</td>
              <td style={cell}>{w.cssVar && <CopyText text={w.cssVar} className={small} />}</td>
              <td style={{ ...cell, fontFamily: 'var(--craft-primitive-font-family-text)', fontWeight: Number(w.value), fontSize: 18 }}>{sample}</td>
            </tr>
          ))}
        </Table>
      </Section>
      <Section title="Letter spacings">
        <Table head={['Step', 'Percent', 'In code']}>
          {t.letterSpacing.map((l) => (
            <tr key={l.name}>
              <td style={cell} className={bodyBold}>{l.name}</td>
              <td style={cell} className={body}>{l.value}</td>
              <td style={cell}><Sub>px per style: font size x percent / 100</Sub></td>
            </tr>
          ))}
        </Table>
      </Section>
    </Page>
  );
}

const GROUPS: [string, string][] = [
  ['display', 'Display'],
  ['heading', 'Heading'],
  ['body', 'Body'],
  ['caption', 'Caption'],
  ['code', 'Code'],
];

const spec = (s: TextStyleToken) =>
  `${s.fontSizePx}/${s.lineHeightPx}px · ${s.fontWeight} · ${s.letterSpacingPct}%${s.letterSpacingPx ? ` (${s.letterSpacingPx}px)` : ''}`;

export function TypographyStylesPage() {
  return (
    <Page title="Typography: text styles">
      <p className={body} style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>
        {textStyles.length} text styles. Pick these in designs and code. Click a name to copy its CSS class. Text color comes from the semantic color tokens and is not part of a style.
      </p>
      {GROUPS.map(([key, title]) => (
        <Section key={key} title={title}>
          <div style={{ background: v('surface-background-gray-intense'), border: `1px solid ${v('surface-border-gray-subtle')}`, borderRadius: 8 }}>
            {textStyles
              .filter((s) => s.group === key)
              .map((s) => (
                <div
                  key={s.name}
                  style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 24, padding: '16px 20px', borderBottom: `1px solid ${v('surface-border-gray-subtle')}` }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <CopyText text={s.className} label={s.figmaName} />
                    <Sub>{spec(s)}</Sub>
                  </div>
                  <div className={s.className} style={{ color: v('surface-text-gray-normal') }}>
                    {sample}
                  </div>
                </div>
              ))}
          </div>
        </Section>
      ))}
    </Page>
  );
}
