import { test, expect } from '@playwright/test';

test(
  'validation',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-054' },
    tag: ['@QADENCE_TC_ID:TC-054'],
  },
  async ({ page }) => {


    await test.step('Open page', async () => {
      await page.goto('https://my-stage.reya.net/');
    });

    await test.step('assert hasText', async () => {
      await expect(page.locator('div.font-primary')).toContainText('Login');
    });

    await test.step('assert hasText', async () => {
      await expect(page.getByRole("button", { name: "Toggle Home Care locations" }).getByText("Home Care")).toContainText('Home Care');
    });

    await test.step('assert hasText', async () => {
      await expect(page.getByRole("button", { name: "Toggle Imaging locations" }).getByText("Imaging")).toContainText('Imaging');
    });

  }
);

