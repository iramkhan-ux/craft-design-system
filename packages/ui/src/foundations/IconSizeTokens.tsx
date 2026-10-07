import { useState } from 'react';
import { iconSizeTokens } from '../tokens/generated/icon-size';

const v = (name: string) => `var(--craft-color-${name})`;

// This page is built with the text styles it documents, so a broken style shows up here first.
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

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

export function IconSizePage() {
  return (
    <Page title="Icon size" intro="The six sizes an icon can be. Use these for icons only, not for other widths and heights. Each sample is a square at that size. Click a variable to copy it.">
      <Table head={['Token', 'Value', 'CSS variable', 'Sample']}>
        {iconSizeTokens.map((t) => (
          <tr key={t.name}>
            <td style={cell} className={bodyBold}>{t.name}</td>
            <td style={cell} className={body}>{t.value}</td>
            <td style={cell}><CopyText text={t.cssVar} /></td>
            <td style={cell}>
              <div style={{ width: `var(${t.cssVar})`, height: `var(${t.cssVar})`, background: v('interactive-background-primary-default') }} />
            </td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
