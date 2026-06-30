import { test, expect } from '@playwright/test';

test('abcd', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
  tag: ['@QADENCE_TC_ID:TC-001']
}, async ({ page, request }) => {
  await page.goto('https://www.saucedemo.com/');

  // Step 1: click
  await page.locator('[data-test="username"]').click();

  // Step 2: fill
  await page.locator('[data-test="username"]').fill('df');

  // Step 3: click
  await page.locator('[data-test="password"]').click();

  // Step 4: click
  await page.locator('[data-test="password"]').click();

  // Step 5: fill
  await page.locator('[data-test="password"]').fill('sdfff');

  // Step 6: click
  await page.locator('[data-test="login-button"]').click();
});

