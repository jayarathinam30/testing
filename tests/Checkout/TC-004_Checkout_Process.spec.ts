import { test, expect } from '@playwright/test';

test(
  'Checkout Process',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-004' },
    tag: ['@QADENCE_TC_ID:TC-004'],
  },
  async ({ page }) => {

    await test.step('Open Login Page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('Click Contact Link', async () => {
      await page.getByRole('link', { name: 'Contact' }).click();
    });

    await test.step('Click First Name Field', async () => {
      await page.locator('[data-test="first-name"]').click();
    });

    await test.step('Click Last Name Field', async () => {
      await page.locator('[data-test="last-name"]').click();
    });

    await test.step('Click Submit Button', async () => {
      await page.locator('[data-test="contact-submit"]').click();
    });

  }
);
