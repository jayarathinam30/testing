import { test, expect } from '@playwright/test';

test(
  'Fixed Suite II description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-007' },
    tag: ['@QADENCE_TC_ID:TC-007'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="nav-categories"]').click();
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
      await page.getByRole("link", { name: "Hand Tools" }).click();
    });

    await test.step('click', async () => {
      await page.getByLabel("Compare").click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="co2-rating-badge"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="increase-quantity"]').click();
    });

  }
);

