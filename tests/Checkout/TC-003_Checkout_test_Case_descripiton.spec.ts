import { test, expect } from '@playwright/test';

test(
  'Checkout test Case descripiton',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
    tag: ['@QADENCE_TC_ID:TC-003'],
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

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="item-4-title-link"]').locator('[data-test="inventory-item-name"]').click();
    });

  }
);

