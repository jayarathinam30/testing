import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './testscript',
  timeout: 60000,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
