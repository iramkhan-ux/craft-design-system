import type { Meta, StoryObj } from '@storybook/react-vite';
import { ElevationPage } from './ElevationTokens';

const meta = {
  title: 'Foundations/Elevation',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// One layer only (no primitives), so there is no internal story. Light first, then dark.
export const Light: Story = { render: () => <ElevationPage theme="light" /> };
export const Dark: Story = { render: () => <ElevationPage theme="dark" /> };
