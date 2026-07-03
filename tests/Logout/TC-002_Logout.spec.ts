import { test, expect } from '@playwright/test';

test('Logout', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-002' },
  tag: ['@QADENCE_TC_ID:TC-002']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.locator('[data-test="email"]').click();

  // Step 2: click
  await page.locator('[data-test="password"]').click();

  // Step 3: fill
  await page.locator('[data-test="password"]').fill('sd');

  // Step 4: click
  await page.locator('[data-test="login-submit"]').click();
});

