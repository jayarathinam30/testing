import { test, expect } from '@playwright/test';

test(
  'Test Case 1.2 Description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-010' },
    tag: ['@QADENCE_TC_ID:TC-010'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="email"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="email"]').fill('f');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-submit"]').click();
    });

    await test.step('click', async () => {
      await page.getByRole("link", { name: "Home" }).click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="email"]').fill('fertretr');
    });

    await test.step('click', async () => {
      await page.getByLabel("Compare").click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="nav-categories"]').click();
    });

    await test.step('click', async () => {
      await page.getByRole("link", { name: "Other" }).click();
    });

  }
);

