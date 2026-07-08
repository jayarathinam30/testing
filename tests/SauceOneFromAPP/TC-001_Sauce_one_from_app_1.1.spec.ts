import { test, expect } from '@playwright/test';

test(
  'Sauce one from app 1.1',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('navigate', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('standard_user');
    });

    await test.step('press', async () => {
      await page.locator('[data-test="password"]').press('Enter');
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_suce');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="item-4-title-link"]').locator('[data-test="inventory-item-name"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="inventory-item"]').getByRole("button", { name: "Add to cart", exact: true }).click();
    });

  }
);

