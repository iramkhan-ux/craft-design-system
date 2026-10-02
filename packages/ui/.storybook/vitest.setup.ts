import { setProjectAnnotations } from '@storybook/react-vite';
import * as a11yAnnotations from '@storybook/addon-a11y/preview';
import * as projectAnnotations from './preview';

// Runs every story as a test. Accessibility violations fail the test (a11y.test = 'error').
setProjectAnnotations([a11yAnnotations, projectAnnotations]);
