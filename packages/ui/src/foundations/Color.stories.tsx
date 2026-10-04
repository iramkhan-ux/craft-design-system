import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimitiveColors, SemanticColors } from './ColorTokens';

const meta = {
  title: 'Foundations/Color',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// Order: primitives first, then the semantic tokens (light, dark).
export const Primitives: Story = { name: 'Primitives (internal)', render: () => <PrimitiveColors /> };
export const Light: Story = { render: () => <SemanticColors theme="light" /> };
export const Dark: Story = { render: () => <SemanticColors theme="dark" /> };
