import { test, expect } from '@playwright/test';

test('Prodouct search User', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-011' },
  tag: ['@QADENCE_TC_ID:TC-011']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.locator('[data-test="email"]').click();

  // Step 2: fill
  await page.locator('[data-test="email"]').fill('sadaff');

  // Step 3: click
  await page.locator('[data-test="password"]').click();

  // Step 4: fill
  await page.locator('[data-test="password"]').fill('werqere');

  // Step 5: click
  await page.getByRole("link", { name: "Contact" }).click();

  // Step 6: click
  await page.locator('[data-test="first-name"]').click();

  // Step 7: fill
  await page.locator('[data-test="first-name"]').fill('sadfdf');

  // Step 8: click
  await page.locator('[data-test="last-name"]').click();

  // Step 9: click
  await page.locator('[data-test="email"]').click();
});

