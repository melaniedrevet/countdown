// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:1234');
});

test.describe('basic tests', () => {
  test('initial view', async ({ page }) => {
    await expect(page.locator('#secondes')).toHaveText('00');
    await expect(page.locator('#minutes')).toHaveText('00');
  });
  test('use buttons', async ({ page }) => {
    await page.locator('#start').click();
    await page.locator('#stop').click();
    await page.locator('#reset').click();
    await expect(page.locator('#secondes')).toHaveText('00');
  });
});