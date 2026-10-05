import type { Meta, StoryObj } from '@storybook/react-vite';
import { BackdropBlurPage, OpacityPage } from './OpacityBlurTokens';

const meta = {
  title: 'Foundations/Opacity and blur',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// One layer only (no primitives), so there is no internal story.
export const Opacity: Story = { render: () => <OpacityPage /> };
export const BackdropBlur: Story = { render: () => <BackdropBlurPage /> };
