import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { DelayPage, DurationPage, EasingPage } from './MotionTokens';

const meta = {
  title: 'Foundations/Motion',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// One layer only (no primitives), so there is no internal story.
export const Duration: Story = { render: () => <DurationPage /> };
export const Delay: Story = { render: () => <DelayPage /> };
export const Easing: Story = {
  render: () => <EasingPage />,
  // Hovering a row plays its sample, leaving resets it, and it plays again on the next hover.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByText('--craft-easing-linear').closest('tr')!;
    const dot = row.lastElementChild!.firstElementChild!.firstElementChild as HTMLElement;
    const left = () => dot.getBoundingClientRect().left - dot.parentElement!.getBoundingClientRect().left;
    for (let i = 0; i < 2; i += 1) {
      await userEvent.hover(row);
      await waitFor(() => expect(left()).toBeGreaterThan(100), { timeout: 3000 });
      await userEvent.unhover(row);
      await waitFor(() => expect(left()).toBe(0));
    }
  },
};
