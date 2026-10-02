import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';

// Raw design values are not allowed in components. Colors, sizes and fonts come from tokens.
const rawColor = '/#[0-9a-fA-F]{3,8}\\b|\\b(rgb|rgba|hsl|hsla|oklch)\\(/';

export default tseslint.config(
  { ignores: ['node_modules', 'storybook-static', 'src/tokens/generated'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,mjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: `Literal[value=${rawColor}]`,
          message: 'No raw color values. Use a semantic color token (var(--craft-color-...)).',
        },
        {
          selector: `TemplateElement[value.raw=${rawColor}]`,
          message: 'No raw color values. Use a semantic color token (var(--craft-color-...)).',
        },
      ],
    },
  },
);
