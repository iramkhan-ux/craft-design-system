import { useState } from 'react';
import { elevationLevels } from '../tokens/generated/elevation';
import type { ElevationShadow } from '../tokens/generated/elevation';

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

const describe = (s: ElevationShadow | null) =>
  s ? `x ${s.offsetX}, y ${s.offsetY}, blur ${s.blur}, spread ${s.spread}, color ${s.colorRef}` : 'No shadow';

export function ElevationPage({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <div
      data-theme={theme}
      className={body}
      style={{ background: v('surface-background-gray-moderate'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}
    >
      <h1 className="craft-text-heading-2xlarge-semibold" style={{ margin: 0 }}>
        Elevation: {theme} theme
      </h1>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>
        Shadows that show how high a surface sits. Use the elevation tokens only, never a hand-made shadow. Click a variable to copy it.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 48, marginTop: 32 }}>
        {elevationLevels.map((l) => (
          <div key={l.name}>
            <div
              style={{
                height: 120,
                borderRadius: 'var(--craft-radius-large)',
                background: v('surface-background-gray-intense'),
                boxShadow: `var(${l.cssVar})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className={bodyBold}
            >
              {l.name}
            </div>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <CopyText text={l.cssVar} />
              <span className={small} style={{ color: v('surface-text-gray-subtle') }}>
                {describe(l[theme])}
              </span>
              <span className={small} style={{ color: v('surface-text-gray-subtle') }}>
                {l.name === 'none' ? 'Figma: no style needed' : `Figma: elevation/${l.name}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
