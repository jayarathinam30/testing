import { test, expect } from '@playwright/test';

test('prodouct search', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-002' },
  tag: ['@QADENCE_TC_ID:TC-002']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByLabel("Email address *").click();

  // Step 2: fill
  await page.getByLabel("Email address *").fill('sadf');

  // Step 3: click
  await page.getByRole("textbox", { name: "Password *" }).click();

  // Step 4: fill
  await page.getByRole("textbox", { name: "Password *" }).fill('werewr');

  // Step 5: click
  await page.getByRole("button", { name: "Login" }).click();
});

