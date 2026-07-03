import { test, expect } from '@playwright/test';

test('Sample TestCase 1', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-005' },
  tag: ['@QADENCE_TC_ID:TC-005']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByRole("link", { name: "Home" }).click();

  // Step 2: click
  await page.getByLabel("Compare").click();

  // Step 3: click
  await page.getByRole('navigation').click();

  // Step 4: assert hasText
  await expect(page.locator('[data-test="nav-contact"]')).toContainText('Contact');
});

