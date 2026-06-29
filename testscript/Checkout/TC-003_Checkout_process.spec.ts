import { test, expect } from '@playwright/test';

test('Checkout process', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
  tag: ['@QADENCE_TC_ID:TC-003']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByLabel("Email address *").click();

  // Step 2: fill
  await page.getByLabel("Email address *").fill('dsafew');

  // Step 3: click
  await page.getByRole("textbox", { name: "Password *" }).click();

  // Step 4: fill
  await page.getByRole("textbox", { name: "Password *" }).fill('ewre');

  // Step 5: click
  await page.getByRole("button", { name: "Login" }).click();
});

