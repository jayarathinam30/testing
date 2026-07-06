import { test, expect } from '@playwright/test';

test(
  'fixed Test Suite III',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-008' },
    tag: ['@QADENCE_TC_ID:TC-008'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('click', async () => {
      await page.getByRole("link", { name: "Sign in" }).click();
    });

    await test.step('GET https://api.practicesoftwaretesting.com/images', async () => {
      const apiResponse2 = await request.fetch('https://api.practicesoftwaretesting.com/images', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });
      expect(apiResponse2.status()).toBe(200);
    });

    await test.step('click', async () => {
      await page.locator('[data-test="nav-categories"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="category-01KWV72H9685PAKVD46AT9R7RC"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="category-01KWV72H9685PAKVD46AT9R7RD"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="brand-01KWV72GYR2TGGDQ25SBG5JF00"]').click();
    });

    await test.step('click', async () => {
      await page.getByText('Sort Name (A - Z)Name (Z - A)').click();
    });

  }
);

