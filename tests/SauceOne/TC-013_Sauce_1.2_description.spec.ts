import { test, expect } from '@playwright/test';

test(
  'Sauce 1.2 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-013' },
    tag: ['@QADENCE_TC_ID:TC-013'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-credentials"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-credentials"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-container"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('problem_user');
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    });

  }
);

