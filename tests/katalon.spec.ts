import { test, expect } from '@playwright/test';
test.describe('Katalon Website Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://katalon.com/');
        const acceptCookies = page.locator('#onetrust-accept-btn-handler');
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }
  });
  test('Flow 1: Navigate to TestOps product page', async ({ page }) => {
    await page.hover('text=Platform');
    await page.click('a[href*="/testops"]');
    await expect(page.locator('h1')).toContainText('Katalon TestOps');
  });

  test('Flow 2: Check pricing toggle (Failed for Trace)', async ({ page }) => {
    await page.goto('https://katalon.com/pricing/');
    const toggle = page.locator('.billing-cycle-toggle');
    await expect(toggle).toBeVisible();
    await expect(page.locator('h2').first()).toHaveText('Non-Existent Text', { timeout: 5000 });
  });
});
