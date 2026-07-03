import { test, expect } from '@playwright/test';

test('Checkout Process', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-004' },
  tag: ['@QADENCE_TC_ID:TC-004']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByRole("link", { name: "Contact" }).click();

  // Step 2: click
  await page.locator('[data-test="first-name"]').click();

  // Step 3: click
  await page.locator('[data-test="last-name"]').click();

  // Step 4: click
  await page.locator('[data-test="contact-submit"]').click();
});

