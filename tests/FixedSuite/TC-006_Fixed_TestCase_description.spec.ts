import { test, expect } from '@playwright/test';

test(
  'Fixed TestCase description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-006' },
    tag: ['@QADENCE_TC_ID:TC-006'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://practicesoftwaretesting.com/auth/login');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="email"]').click();
    });

    await test.step('click', async () => {
      await page.getByRole("link", { name: "Contact" }).click();
    });

    await test.step('GET https://api.practicesoftwaretesting.com/images', async () => {
      const apiResponse3 = await request.fetch('https://api.practicesoftwaretesting.com/images', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });
      const apiResponse3Body = await apiResponse3.json();
      expect(apiResponse3.status()).toBe(200);
      const imageid = apiResponse3Body[0].id;
    });

    await test.step('click', async () => {
      await page.locator('[data-test="first-name"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="first-name"]').fill('fdf');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="last-name"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="last-name"]').fill('df');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="email"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="email"]').fill('fdsf');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="message"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="message"]').fill('f');
    });

    await test.step('select', async () => {
      await page.locator('[data-test="subject"]').selectOption('webmaster');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="contact-submit"]').click();
    });

  }
);

