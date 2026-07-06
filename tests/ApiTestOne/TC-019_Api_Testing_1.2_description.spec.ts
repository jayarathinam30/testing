import { test, expect } from '@playwright/test';

test(
  'Api Testing 1.2 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-019' },
    tag: ['@QADENCE_TC_ID:TC-019'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('List projects (offset pagination)', async () => {
      const apiResponse1 = await request.fetch('http://43.254.108.197/api/project?page=1&limit=10&status=estimating%2Crevision_request%2Cpending_approval&estimator=uuid-1%2Cuuid-2&bidDateFrom=2026-01-01&bidDateTo=2026-12-31&sortBy=name&sortOrder=desc', {
        method: 'GET',
      });
      expect(apiResponse1.status()).toBe(401);
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('sadfd');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('eqwrerewr');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-button"]').click();
    });

  }
);

