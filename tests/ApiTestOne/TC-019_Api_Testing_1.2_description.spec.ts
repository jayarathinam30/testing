import { test, expect } from '@playwright/test';

test(
  'Api Testing 1.2 description',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-019' },
    tag: ['@QADENCE_TC_ID:TC-019'],
  },
  async ({ page, request }) => {


    await test.step('Open page', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('List projects (offset pagination)', async () => {
      const apiResponse1 = await request.fetch('http://43.254.108.197/api/project?page=1&limit=10&status=estimating%2Crevision_request%2Cpending_approval&estimator=uuid-1%2Cuuid-2&bidDateFrom=2026-01-01&bidDateTo=2026-12-31&sortBy=name&sortOrder=desc', {
        method: 'GET',
      });
      expect(apiResponse1.status()).toBe(401);
    });

    await test.step('click', async () => {
      await page.locator('[data-test="username"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="username"]').fill('sadfd');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="password"]').click();
    });

    await test.step('fill', async () => {
      await page.locator('[data-test="password"]').fill('eqwrerewr');
    });

    await test.step('click', async () => {
      await page.locator('[data-test="login-credentials-container"]').locator('[data-test="login-credentials"]').click();
    });

    await test.step('click', async () => {
      await page.getByRole("textbox", { name: "Username" }).click();
    });

    await test.step('fill', async () => {
      await page.getByRole("textbox", { name: "Username" }).fill('standard_user');
    });

    await test.step('click', async () => {
      await page.getByRole("textbox", { name: "Password" }).click();
    });

    await test.step('click', async () => {
      await page.getByRole("button", { name: "Login" }).click();
    });

    await test.step('fill', async () => {
      await page.getByRole("textbox", { name: "Password" }).fill('secret_sauce');
    });

    await test.step('click', async () => {
      await page.locator('locator("xpath=/html/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[5]/div[2]/div[1]/div[1]")').click();
    });

    await test.step('click', async () => {
      await page.locator('locator("xpath=/html/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/div[1]")').click();
    });

    await test.step('click', async () => {
      await page.locator('locator("xpath=/html/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]")').click();
    });

    await test.step('click', async () => {
      await page.getByText("Test.allTheThings() T-Shirt (Red)").click();
    });

    await test.step('click', async () => {
      await page.getByRole("button", { name: "Add to cart", exact: true }).click();
    });

    await test.step('click', async () => {
      await page.getByRole("button").filter({ hasText: "Back to products" }).click();
    });

    await test.step('click', async () => {
      await page.getByText("Sauce Labs Bike Light").click();
    });

    await test.step('click', async () => {
      await page.getByRole("button", { name: "Add to cart", exact: true }).click();
    });

    await test.step('click', async () => {
      await page.getByRole("button").filter({ hasText: "Back to products" }).click();
    });

    await test.step('click', async () => {
      await page.getByText("Sauce Labs Backpack").click();
    });

    await test.step('click', async () => {
      await page.getByRole("button", { name: "Add to cart", exact: true }).click();
    });

    await test.step('click', async () => {
      await page.getByRole("button").filter({ hasText: "Back to products" }).click();
    });

  }
);
