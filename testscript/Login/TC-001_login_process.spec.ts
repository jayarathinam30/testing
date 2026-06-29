import { test, expect } from '@playwright/test';

test('login process', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
  tag: ['@QADENCE_TC_ID:TC-001']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByRole("link", { name: "Sign in" }).click();

  // Step 2: click
  await page.getByLabel("Email address *").click();

  // Step 3: fill
  await page.getByLabel("Email address *").fill('sdf');

  // Step 4: click
  await page.getByRole("textbox", { name: "Password *" }).click();

  // Step 5: fill
  await page.getByRole("textbox", { name: "Password *" }).fill('sdaf');

  // Step 6: click
  await page.getByRole("button", { name: "Login" }).click();
});

