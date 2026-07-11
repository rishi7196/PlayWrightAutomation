// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker, workers } from 'node:cluster';
import { trace } from 'node:console';

const config=({
  testDir: './tests',
  retries: 1,
  timeout : 40*1000,
  expect :{
  timeout : 50*1000,// over ride the existing wait time
  },

  reporter :'html',
  workers: 1,

  projects: [
  {
    name: 'Safari',
    use: {
      browserName: 'webkit',
      headless: true,
      screenshot: 'only-on-failure',
      trace : 'retain-on-failure'
    },
  },
  {
    name: 'chrome',
    use: {
      browserName: 'chromium',
      headless: true,
      screenshot: 'only-on-failure',
      trace : 'retain-on-failure'
    },
  },
],
     
});
module.exports=config

