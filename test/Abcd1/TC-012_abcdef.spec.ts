import { test, expect } from '@playwright/test';

test('abcdef', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-012' },
  tag: ['@QADENCE_TC_ID:TC-012']
}, async ({ page, request }) => {
  await page.goto('https://www.saucedemo.com/');

  // Step 1: click
  await page.locator('[data-test="username"]').click();

  // Step 2: fill
  await page.locator('[data-test="username"]').fill('dfsdf');

  // Step 3: click
  await page.locator('[data-test="password"]').click();
});

