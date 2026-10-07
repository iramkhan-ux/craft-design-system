import type { CSSProperties, ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { Spinner, spinnerColors, spinnerLabelPositions, spinnerSizes } from '.';
import type { SpinnerColor } from '.';

const v = (name: string) => `var(--craft-color-${name})`;

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'inline-radio', options: [...spinnerSizes] },
    color: { control: 'inline-radio', options: [...spinnerColors] },
    labelPosition: { control: 'inline-radio', options: [...spinnerLabelPositions] },
  },
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof meta>;

function Page({ children, theme = 'light' }: { children: ReactNode; theme?: 'light' | 'dark' }) {
  return (
    <div
      data-theme={theme}
      className="craft-text-body-medium-regular"
      style={{ background: v('surface-background-gray-subtle'), color: v('surface-text-gray-normal'), padding: 24, minHeight: '100vh' }}
    >
      {children}
    </div>
  );
}

const heading = { margin: '24px 0 12px' } as const;
const row: CSSProperties = { display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' };

// The onNeutral and white spinners need a surface they were made for.
const surface = (color: SpinnerColor): CSSProperties => ({
  padding: 16,
  borderRadius: 'var(--craft-radius-medium)',
  background:
    color === 'white'
      ? v('interactive-background-primary-default')
      : color === 'onNeutral'
        ? v('interactive-background-neutral-default')
        : v('surface-background-gray-intense'),
});

export const Default: Story = {
  args: { size: 'medium', color: 'neutral', labelPosition: 'right' },
  render: (args) => (
    <Page>
      <Spinner {...args} />
    </Page>
  ),
  play: async ({ canvasElement }) => {
    const spinner = within(canvasElement).getByRole('progressbar', { name: 'Loading' });
    await expect(spinner).toBeVisible();
  },
};

export const Sizes: Story = {
  render: () => (
    <Page>
      <h2 className="craft-text-heading-xlarge-semibold" style={heading}>
        Sizes
      </h2>
      <div style={row}>
        {spinnerSizes.map((size) => (
          <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            <Spinner size={size} />
            <span className="craft-text-body-small-regular" style={{ color: v('surface-text-gray-subtle') }}>
              {size} ({{ medium: 16, large: 20, xlarge: 24 }[size]}px)
            </span>
          </div>
        ))}
      </div>
    </Page>
  ),
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getAllByRole('progressbar')).toHaveLength(3);
  },
};

function ColorPanel({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <Page theme={theme}>
      <h2 className="craft-text-heading-xlarge-semibold" style={heading}>
        Colors, {theme} theme
      </h2>
      <div style={row}>
        {spinnerColors.map((color) => (
          <div key={color} style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            <div style={surface(color)}>
              <Spinner color={color} size="xlarge" />
            </div>
            <span className="craft-text-body-small-regular" style={{ color: v('surface-text-gray-subtle') }}>
              {color}
            </span>
          </div>
        ))}
      </div>
    </Page>
  );
}

export const Colors: Story = {
  render: () => (
    <>
      <ColorPanel theme="light" />
      <ColorPanel theme="dark" />
    </>
  ),
  play: async ({ canvasElement }) => {
    await expect(within(canvasElement).getAllByRole('progressbar')).toHaveLength(8);
  },
};

export const Labels: Story = {
  render: () => (
    <Page>
      <h2 className="craft-text-heading-xlarge-semibold" style={heading}>
        Labels
      </h2>
      <p style={{ maxWidth: 640, color: v('surface-text-gray-subtle') }}>
        The label can sit to the right or underneath. Screen readers announce the label. With no label they announce "Loading".
      </p>
      <div style={row}>
        <Spinner label="Saving changes" />
        <Spinner label="Saving changes" labelPosition="bottom" />
        <Spinner aria-label="Fetching your payments" />
      </div>
    </Page>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole('progressbar', { name: 'Saving changes' })).toHaveLength(2);
    await expect(canvas.getByRole('progressbar', { name: 'Fetching your payments' })).toBeVisible();
  },
};
