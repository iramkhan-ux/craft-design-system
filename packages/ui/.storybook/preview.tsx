import type { Preview } from '@storybook/react-vite';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/tasa-orbiter/latin-400.css';
import '@fontsource/tasa-orbiter/latin-500.css';
import '@fontsource/tasa-orbiter/latin-600.css';
import '@fontsource/roboto-mono/latin-400.css';
import '@fontsource/roboto-mono/latin-700.css';
import '../src/tokens/generated/color.css';
import '../src/tokens/generated/typography.css';
import '../src/tokens/generated/spacing.css';
import '../src/tokens/generated/elevation.css';
import '../src/tokens/generated/motion.css';

const preview: Preview = {
  parameters: {
    a11y: { test: 'error' },
  },
};

export default preview;
