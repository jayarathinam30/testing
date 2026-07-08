import { test, expect } from '@playwright/test';

test(
  'sauce 2.1 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-014' },
    tag: ['@QADENCE_TC_ID:TC-014'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-credentials"]').click();
    });

    await test.step('List projects (offset pagination)', async () => {
      const apiResponse2 = await request.fetch('/api/project?page=1&limit=10&status=estimating%2Crevision_request%2Cpending_approval&estimator=uuid-1%2Cuuid-2&bidDateFrom=2026-01-01&bidDateTo=2026-12-31&sortBy=name&sortOrder=desc', {
        method: 'GET',
      });
      expect(apiResponse2.status()).toBe(200);
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('locked_out_user');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('locked_out_user');
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

  }
);
