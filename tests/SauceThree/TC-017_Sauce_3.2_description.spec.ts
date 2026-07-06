import { test, expect } from '@playwright/test';

test(
  'Sauce 3.2 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-017' },
    tag: ['@QADENCE_TC_ID:TC-017'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('tandard-user');
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-container"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('standard-user');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-container"]').click();
    });

  }
);

