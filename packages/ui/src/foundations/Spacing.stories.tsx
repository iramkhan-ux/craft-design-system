import type { Meta, StoryObj } from '@storybook/react-vite';
import { BorderWidthPage, BreakpointsPage, RadiusPage, SpacingPage } from './SpacingTokens';

const meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// One layer only (no primitives), so there is no internal story.
export const Spacing: Story = { render: () => <SpacingPage /> };
export const Radius: Story = { render: () => <RadiusPage /> };
export const BorderWidth: Story = { name: 'Border width', render: () => <BorderWidthPage /> };
export const Breakpoints: Story = { render: () => <BreakpointsPage /> };
