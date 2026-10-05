import type { Meta, StoryObj } from '@storybook/react-vite';
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
export const Easing: Story = { render: () => <EasingPage /> };
