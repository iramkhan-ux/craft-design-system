import { useState } from 'react';
import { opacityBlurTokens } from '../tokens/generated/opacity-blur';
import type { OpacityBlurToken } from '../tokens/generated/opacity-blur';

const v = (name: string) => `var(--craft-color-${name})`;

// This page is built with the text styles it documents, so a broken style shows up here first.
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

const byGroup = (group: OpacityBlurToken['group']) => opacityBlurTokens.filter((t) => t.group === group);

// Exception: a fixed neutral checkerboard that makes transparency visible. It is a documentation
// device, not a design value, and must look the same in light and dark.
const checker =
  // eslint-disable-next-line no-restricted-syntax
  'repeating-conic-gradient(#c9ced6 0% 25%, #ffffff 0% 50%) 50% / 12px 12px';

function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${text}`}
      className={small}
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

const pct = (value: string) => `${Math.round(Number(value) * 100)}%`;

export function OpacityPage() {
  return (
    <Page title="Opacity" intro="How see-through something is, from 0 (invisible) to 1300 (solid). Each sample is the primary color at that opacity over a checkerboard. Click a variable to copy it.">
      <Table head={['Token', 'Value', 'CSS variable', 'Sample']}>
        {byGroup('opacity').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value} ({pct(t.value)})</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div style={{ width: 200, height: 32, borderRadius: 'var(--craft-radius-medium)', background: checker, overflow: 'hidden', border: `1px solid ${v('surface-border-gray-subtle')}` }}>
                <div style={{ width: '100%', height: '100%', background: v('interactive-background-primary-default'), opacity: `var(${t.cssVar})` }} />
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}

export function BackdropBlurPage() {
  return (
    <Page title="Backdrop blur" intro="How much the background is blurred behind a see-through surface, like a frosted-glass panel. Each sample is a panel over colored stripes. Click a variable to copy it.">
      <Table head={['Token', 'Used for', 'Value', 'CSS variable', 'Sample']}>
        {byGroup('backdropBlur').map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.use}</td>
            <td style={cell} className={body}>{t.value}</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div
                style={{
                  position: 'relative',
                  width: 200,
                  height: 72,
                  borderRadius: 'var(--craft-radius-medium)',
                  overflow: 'hidden',
                  background: `repeating-linear-gradient(90deg, ${v('interactive-background-primary-default')} 0 8px, ${v('feedback-background-positive-intense')} 8px 16px, ${v('feedback-background-notice-intense')} 16px 24px)`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '16px 40px',
                    borderRadius: 'var(--craft-radius-medium)',
                    background: v('surface-background-gray-intense'),
                    opacity: 'var(--craft-opacity-700)',
                    backdropFilter: `blur(var(${t.cssVar}))`,
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
