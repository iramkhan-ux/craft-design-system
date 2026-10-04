import { useState } from 'react';
import { layoutTokens } from '../tokens/generated/spacing';
import type { LayoutToken } from '../tokens/generated/spacing';

const v = (name: string) => `var(--craft-color-${name})`;

// This page is built with the text styles it documents, so a broken style shows up here first.
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

const byGroup = (group: LayoutToken['group']) => layoutTokens.filter((t) => t.group === group);

function CopyText({ text, className = small }: { text: string; className?: string }) {
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
      {copied ? 'Copied' : text}
    </button>
  );
}

function Page({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <div
      data-theme="light"
      className={body}
      style={{ background: v('surface-background-gray-subtle'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}
    >
      <h1 className="craft-text-heading-2xlarge-semibold" style={{ margin: 0 }}>
        {title}
      </h1>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>{intro}</p>
      {children}
    </div>
  );
}

const cell = { padding: '10px 12px', borderBottom: `1px solid ${v('surface-border-gray-subtle')}`, textAlign: 'left', verticalAlign: 'middle' } as const;
function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
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
}

const InFigma = ({ t }: { t: LayoutToken }) => <td style={cell} className={body}>{t.figma ? `${t.group === 'borderWidth' ? 'border-width' : t.group}/${t.name}` : 'Code only'}</td>;

export function SpacingPage() {
  return (
    <Page title="Spacing" intro="Use these for padding, gaps and margins. Every space between things comes from this scale, never a hand-typed number. Click a variable to copy it.">
      <Table head={['Token', 'Value', 'In Figma', 'CSS variable', 'Size']}>
        {byGroup('spacing').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <InFigma t={t} />
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div style={{ width: `var(${t.cssVar})`, height: 16, background: v('interactive-background-primary-default'), borderRadius: 2 }} />
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

export function RadiusPage() {
  return (
    <Page title="Radius" intro="Corner radius. Use max for pills and round for circles only. Round (50%) exists in code only because Figma has no percent radius.">
      <Table head={['Token', 'Value', 'In Figma', 'CSS variable', 'Sample']}>
        {byGroup('radius').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <InFigma t={t} />
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div
                style={{
                  width: t.name === 'max' ? 96 : 56,
                  height: 56,
                  background: v('surface-background-primary-subtle'),
                  border: `1px solid ${v('interactive-border-primary-default')}`,
                  borderRadius: `var(${t.cssVar})`,
                }}
              />
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

export function BorderWidthPage() {
  return (
    <Page title="Border width" intro="Line thickness for borders and dividers.">
      <Table head={['Token', 'Value', 'In Figma', 'CSS variable', 'Sample']}>
        {byGroup('borderWidth').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <InFigma t={t} />
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div style={{ width: 160, height: 0, borderTop: `var(${t.cssVar}) solid ${v('surface-text-gray-normal')}` }} />
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

export function BreakpointsPage() {
  return (
    <Page
      title="Breakpoints"
      intro="Screen widths where a layout changes. Mobile first: base has no media query, and the others apply from that width up. These are in code only. CSS cannot read a variable inside a media query, so use the pixel value there."
    >
      <Table head={['Token', 'From width', 'CSS variable']}>
        {byGroup('breakpoint').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
