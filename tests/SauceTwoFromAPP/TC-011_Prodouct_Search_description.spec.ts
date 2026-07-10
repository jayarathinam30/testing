import { test, expect } from '@playwright/test';

test(
  'Prodouct Search description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-011' },
    tag: ['@QADENCE_TC_ID:TC-011'],
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
      await page.locator('[data-test="item-4-title-link"]').locator('[data-test="inventory-item-name"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="inventory-item"]').getByRole("button", { name: "Add to cart", exact: true }).click();
    });

    await test.step('assert hasText', async () => {
      await expect(page.getByText("Sauce Labs Backpack", { exact: true })).toContainText('Sauce Labs Backpack');
    });

  }
);
