import { test, expect } from '@playwright/test';

test('login checkout', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-004' },
  tag: ['@QADENCE_TC_ID:TC-004']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByLabel("Email address *").click();

  // Step 2: fill
  await page.getByLabel("Email address *").fill('fdsf');

  // Step 3: click
  await page.getByRole("textbox", { name: "Password *" }).click();

  // Step 4: fill
  await page.getByRole("textbox", { name: "Password *" }).fill('sds');

  // Step 5: click
  await page.getByRole("button", { name: "Login" }).click();

  // Step 6: click
  await page.getByRole("link", { name: "Home" }).click();

  // Step 7: assert hasText
  await expect(page.getByRole("img", { name: "Pliers" })).toContainText('Pliers');

  // Step 8: click
  await page.getByRole("button", { name: "Categories" }).click();

  // Step 9: click
  await page.getByRole("link", { name: "Hand Tools" }).click();

  // Step 10: click
  await page.getByRole("link", { name: "Home" }).click();

  // Step 11: click
  await page.getByRole("link", { name: "Contact" }).click();

  // Step 12: click
  await page.getByRole("textbox", { name: "First name" }).click();

  // Step 13: fill
  await page.getByRole("textbox", { name: "First name" }).fill('saew');

  // Step 14: click
  await page.getByRole("textbox", { name: "Last name" }).click();

  // Step 15: fill
  await page.getByRole("textbox", { name: "Last name" }).fill('sds');

  // Step 16: click
  await page.getByLabel("Email address").click();

  // Step 17: fill
  await page.getByLabel("Email address").fill('sewe');

  // Step 18: click
  await page.locator('div.row').locator('div.row').locator('div.col-md-12').click();

  // Step 19: click
  await page.getByRole("combobox", { name: "Subject" }).click();

  // Step 20: click
  await page.getByRole("combobox", { name: "Subject" }).click();

  // Step 21: select
  await page.getByRole("combobox", { name: "Subject" }).selectOption('customer-service');

  // Step 22: click
  await page.getByRole("textbox", { name: "Message *" }).click();

  // Step 23: fill
  await page.getByRole("textbox", { name: "Message *" }).fill('werwer');

  // Step 24: click
  await page.getByRole("button", { name: "Send" }).click();
});

