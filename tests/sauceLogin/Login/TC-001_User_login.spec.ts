import { test, expect } from '@playwright/test';

test('User login', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
  tag: ['@QADENCE_TC_ID:TC-001']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.locator('[data-test="email"]').click();

  // Step 2: click
  await page.locator('[data-test="password"]').click();

  // Step 3: click
  await page.locator('[data-test="password"]').click();

  // Step 4: fill
  await page.locator('[data-test="password"]').fill('sadf');
});
