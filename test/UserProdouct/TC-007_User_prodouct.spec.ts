import { test, expect } from '@playwright/test';

test('User prodouct', {
  annotation: { type: 'QADENCE_TC_ID', description: 'TC-007' },
  tag: ['@QADENCE_TC_ID:TC-007']
}, async ({ page, request }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Step 1: click
  await page.getByLabel("Email address *").click();
});

