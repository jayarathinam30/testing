import { test, expect } from '@playwright/test';

test('Product Search', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
  tag: ['@QADENCE_TC_ID:TC-003']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByRole("link", { name: "Contact" }).click();

  // Step 2: click
  await page.locator('[data-test="first-name"]').click();

  // Step 3: fill
  await page.locator('[data-test="first-name"]').fill('dsf');

  // Step 4: click
  await page.locator('[data-test="last-name"]').click();

  // Step 5: fill
  await page.locator('[data-test="email"]').fill('adsfd');

  // Step 6: click
  await page.locator('[data-test="contact-submit"]').click();
});

