import { defineConfig } from '@playwright/test';

// Visual comparison: every story is screenshotted and compared with the approved image in
// visual/__screenshots__. Approved images are made in CI (Linux) so fonts and rendering match.
export default defineConfig({
  testDir: 'visual',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:6007',
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    colorScheme: 'light',
  },
  expect: { toHaveScreenshot: { maxDiffPixels: 0, animations: 'disabled' } },
  webServer: {
    command: 'npx http-server storybook-static -p 6007 -s',
    url: 'http://localhost:6007',
    reuseExistingServer: !process.env.CI,
  },
});
