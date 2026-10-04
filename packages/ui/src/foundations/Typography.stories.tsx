import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyPrimitivesPage, TypographyStylesPage } from './TypographyTokens';

const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

// Order: primitives first, then the text styles.
export const Primitives: Story = { name: 'Primitives (internal)', render: () => <TypographyPrimitivesPage /> };
export const TextStyles: Story = { name: 'Text styles', render: () => <TypographyStylesPage /> };
