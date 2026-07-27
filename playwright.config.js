// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { worker, workers } from 'node:cluster';
import { trace } from 'node:console';

const config = ({
  testDir: './tests',
   retries: 1,
   workers: 1,

  timeout: 60 * 1000,
  expect: {
    timeout: 50 * 1000,// over ride the existing wait time
  },

  reporter: 'html',



  use: {
    browserName: 'chromium',
    headless: true,
    //browserName:'webkit'
    trace: 'retain-on-failure',//off,on
    screenshot: 'only-on-failure'


  },


});
module.exports = config

