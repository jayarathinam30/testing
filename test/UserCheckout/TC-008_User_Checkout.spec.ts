import { test, expect } from '@playwright/test';

test('User Checkout', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-008' },
  tag: ['@QADENCE_TC_ID:TC-008']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByLabel("Email address *").click();

  // Step 2: fill
  await page.getByLabel("Email address *").fill('sadfdfwerewr');

  // Step 3: click
  await page.getByRole("textbox", { name: "Password *" }).click();
});

