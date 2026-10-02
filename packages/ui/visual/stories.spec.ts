import fs from 'node:fs';
import { expect, test } from '@playwright/test';

type Entry = { id: string; type: 'story' | 'docs' };
const index = JSON.parse(fs.readFileSync('storybook-static/index.json', 'utf8')) as {
  entries: Record<string, Entry>;
};
const stories = Object.values(index.entries).filter((e) => e.type === 'story');

for (const { id } of stories) {
  test(id, async ({ page }) => {
    await page.goto(`/iframe.html?id=${id}&viewMode=story`);
    await page.locator('#storybook-root > *').first().waitFor();
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${id}.png`, { fullPage: true });
  });
}
