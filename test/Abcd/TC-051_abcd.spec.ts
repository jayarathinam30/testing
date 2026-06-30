import { test, expect } from '@playwright/test';

test('abcd', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-051' },
  tag: ['@QADENCE_TC_ID:TC-051']
}, async ({ page, request }) => {
  await page.goto('https://my-stage.reya.net/');

  // Step 1: click
  await page.getByRole("textbox", { name: "Enter Email Address", exact: true }).click();

  // Step 2: click
  await page.getByRole("textbox", { name: "Enter Email Address", exact: true }).click();

  // Step 3: fill
  await page.getByRole("textbox", { name: "Enter Email Address", exact: true }).fill('sadfesr');

  // Step 4: click
  await page.getByRole("textbox", { name: "Enter Password", exact: true }).click();

  // Step 5: fill
  await page.getByRole("textbox", { name: "Enter Password", exact: true }).fill('werer');
});

