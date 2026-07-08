import { test, expect } from '@playwright/test';

test(
  'Api Testing 1.1 Description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-018' },
    tag: ['@QADENCE_TC_ID:TC-018'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('asdf');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('Log in with email and password', async () => {
      const apiResponse4 = await request.fetch('http://43.254.108.197/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        data: {
      email: 'james@sgcglass.com',
      password: 'YourSecurePassword123'
    },
      });
      expect(apiResponse4.status()).toBe(401);
      const email = 'james@sgcglass.com';
      const password = 'YourSecurePassword123';
    });

  }
);
