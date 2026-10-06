import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconSizePage } from './IconSizeTokens';

const meta = {
  title: 'Foundations/Icon size',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// One layer only (no primitives), so there is no internal story.
export const Sizes: Story = { render: () => <IconSizePage /> };
