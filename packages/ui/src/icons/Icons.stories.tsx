import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { iconColors, iconList, iconSizes } from '.';
import type { IconColor, IconSize } from '.';

const v = (name: string) => `var(--craft-color-${name})`;
const body = 'craft-text-body-medium-regular';
const bodyBold = 'craft-text-body-medium-semibold';
const small = 'craft-text-body-small-regular';

const meta = {
  title: 'Icons/Library',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

const field = {
  font: 'inherit',
  color: v('surface-text-gray-normal'),
  background: v('surface-background-gray-intense'),
  border: `1px solid ${v('surface-border-gray-normal')}`,
  borderRadius: 'var(--craft-radius-medium)',
  padding: '8px 12px',
} as const;

function Tile({ name, codeName, Component, size, color }: { name: string; codeName: string; Component: (typeof iconList)[number]['Component']; size: IconSize; color: IconColor }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Copy ${codeName}`}
      onClick={() => {
        void navigator.clipboard?.writeText(codeName);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      style={{
        all: 'unset',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        height: 104,
        padding: 8,
        background: v('surface-background-gray-intense'),
        border: `1px solid ${v('surface-border-gray-subtle')}`,
        borderRadius: 'var(--craft-radius-medium)',
        color: v('surface-text-gray-normal'),
      }}
    >
      <Component size={size} color={color} />
      <span className={small} style={{ textAlign: 'center', wordBreak: 'break-word' }}>
        {copied ? 'Copied' : name}
      </span>
    </button>
  );
}

function Page({ children, title, intro }: { children: React.ReactNode; title: string; intro: string }) {
  return (
    <div data-theme="light" className={body} style={{ background: v('surface-background-gray-subtle'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}>
      <h1 className="craft-text-heading-2xlarge-semibold" style={{ margin: 0 }}>
        {title}
      </h1>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>{intro}</p>
      {children}
    </div>
  );
}

function Gallery() {
  const [query, setQuery] = useState('');
  const [size, setSize] = useState<IconSize>('xlarge');
  const [color, setColor] = useState<IconColor>('surface.icon.gray.normal');
  const shown = useMemo(() => iconList.filter((i) => i.name.includes(query.trim().toLowerCase().replace(/\s+/g, '-'))), [query]);
  const section = (title: string, items: typeof shown) =>
    items.length === 0 ? null : (
    <section key={title}>
      <h2 className="craft-text-heading-xlarge-semibold" style={{ margin: '32px 0 12px' }}>
        {title} ({items.length})
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(112px, 1fr))', gap: 8 }}>
        {items.map((i) => (
          <Tile key={i.name} name={i.name} codeName={i.codeName} Component={i.Component} size={size} color={color} />
        ))}
      </div>
    </section>
    );
  return (
    <Page title="Icons" intro={`${iconList.length} icons, all drawn on a 24 by 24 grid. Search by name, choose a size and a color, and click an icon to copy its code name.`}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <label className={bodyBold} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          Search
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="arrow, user, upi" style={{ ...field, width: 220 }} />
        </label>
        <label className={bodyBold} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          Size
          <select value={size} onChange={(e) => setSize(e.target.value as IconSize)} style={field}>
            {iconSizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className={bodyBold} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          Color
          <select value={color} onChange={(e) => setColor(e.target.value as IconColor)} style={field}>
            <option value="currentColor">currentColor</option>
            {iconColors.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>
      {shown.length === 0 && <p className={body}>No icon matches "{query}".</p>}
      {section('Outline', shown.filter((i) => !i.filled))}
      {section('Filled', shown.filter((i) => i.filled))}
    </Page>
  );
}

export const All: Story = {
  render: () => <Gallery />,
  // Searching narrows the grid. The search is cleared at the end so the story rests on the full list.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getAllByRole('button').length).toBe(iconList.length);
    await userEvent.type(canvas.getByRole('searchbox'), 'arrow-left');
    expect(canvas.getAllByRole('button').some((b) => b.title === 'Copy ArrowLeftIcon')).toBe(true);
    expect(canvas.getAllByRole('button').length).toBeLessThan(10);
    await userEvent.clear(canvas.getByRole('searchbox'));
    expect(canvas.getAllByRole('button').length).toBe(iconList.length);
  },
};

export const Sizes: Story = {
  render: () => {
    const { Component } = iconList.find((i) => i.name === 'arrow-right')!;
    return (
      <Page title="Icon sizes" intro="The six icon sizes, from the icon size tokens.">
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
          {iconSizes.map((s) => (
            <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Component size={s} />
              <span className={small}>{s}</span>
            </div>
          ))}
        </div>
      </Page>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const { Component } = iconList.find((i) => i.name === 'check-circle')!;
    const groups = ['surface.icon', 'feedback.icon', 'interactive.icon'];
    return (
      <Page title="Icon colors" intro="Every icon color token. An icon takes one of these, or currentColor to follow the text around it.">
        {groups.map((g) => (
          <section key={g}>
            <h2 className="craft-text-heading-xlarge-semibold" style={{ margin: '32px 0 12px' }}>
              {g}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 8 }}>
              {iconColors.filter((c) => c.startsWith(g)).map((c) => (
                <div key={c} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, background: v('surface-background-gray-intense'), border: `1px solid ${v('surface-border-gray-subtle')}`, borderRadius: 'var(--craft-radius-medium)' }}>
                  <Component size="xlarge" color={c} />
                  <span className={small} style={{ wordBreak: 'break-all' }}>{c}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </Page>
    );
  },
};
