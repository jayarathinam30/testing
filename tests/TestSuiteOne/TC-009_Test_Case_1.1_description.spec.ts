import { test, expect } from '@playwright/test';

test(
  'Test Case 1.1 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-009' },
    tag: ['@QADENCE_TC_ID:TC-009'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="email"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="email"]').fill('dfewr');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('erwre');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-submit"]').click();
    });

    await test.step('click', async () => {
      await page.getByRole("link", { name: "Contact" }).click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="first-name"]').click();
    });

    await test.step('click', async () => {
      await page.locator('[data-test="last-name"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="last-name"]').fill('sdf');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="email"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="email"]').fill('fsd');
    });

    await test.step('select', async () => {
      await page.locator('[data-test="subject"]').selectOption('payments');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="message"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="message"]').fill('fdsf');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="contact-submit"]').click();
    });

  }
);

