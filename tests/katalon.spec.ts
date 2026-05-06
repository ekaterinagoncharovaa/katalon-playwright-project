import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test.describe('Katalon Website Tests', () => {

  test.beforeEach(async ({ page }) => {
    
    await allure.step("Open Katalon home page", async () => {
      await page.goto('https://katalon.com/');
    });
    
    await allure.step("Handle cookies", async () => {
      const acceptCookies = page.locator('#onetrust-accept-btn-handler');
      if (await acceptCookies.isVisible()) {
        await acceptCookies.click();
      }
    });
  });

  test('Flow 1: Navigate to TestOps product page', async ({ page }) => {
    await allure.owner("Ekaterina Goncharova"); // Твое имя как автора
    await allure.tags("UI", "Regression", "Product");
    await allure.suite("UI Navigation");
    await allure.subSuite("Product Pages");

    await allure.step("Hover over Platform menu", async () => {
      await page.hover('text=Platform');
    });

    await allure.step("Click on TestOps link", async () => {
      await page.click('a[href*="/testops"]');
    });
    
    await allure.step("Verify TestOps header is visible", async () => {
      await expect(page.locator('h1')).toContainText('Katalon TestOps');
    });
  });

  test('Flow 2: Check pricing toggle (Failed for Trace)', async ({ page }) => {
    await allure.owner("Ekaterina Goncharova");
    await allure.tags("UI", "Pricing", "FailedTest");
    await allure.suite("UI Navigation");
    await allure.subSuite("Pricing Checks");

    await allure.step("Navigate to Pricing page", async () => {
      await page.goto('https://katalon.com/pricing/');
    });

    await allure.step("Check billing toggle visibility", async () => {
      const toggle = page.locator('.billing-cycle-toggle');
      await expect(toggle).toBeVisible();
    });

    await allure.step("Verify specific text (Expected Failure for Trace)", async () => {
      await expect(page.locator('h2').first()).toHaveText('Non-Existent Text', { timeout: 5000 });
    });
  });
});