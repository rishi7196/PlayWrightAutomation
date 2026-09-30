// @ts-check
const { defineConfig } = require('@playwright/test');

const config = ({
  testDir: './tests',
  retries: 1,
  workers: 1,
  timeout: 60 * 1000,
  expect: {
    timeout: 50 * 1000,
  },
  reporter: 'html',
  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 10 * 1000,
    browserName: 'chromium',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
});
module.exports = config

