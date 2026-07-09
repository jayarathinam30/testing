import { test, expect } from '@playwright/test';

test(
  'login Sauce description',
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

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator("xpath=/html/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]").click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="item-0-title-link"]').locator('[data-test="inventory-item-name"]').click();
    });

  }
);

