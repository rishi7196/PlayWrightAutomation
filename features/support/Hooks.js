const { Before, After, BeforeStep, AfterStep, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { POManager } = require('../../PageObjects/POManager');
const fs = require('fs');
const path = require('path');

Before(async function () {
    this.browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(function () {
    // Runs before every step
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        // Ensure screenshots directory exists to avoid write errors
        const screenshotsDir = path.join(process.cwd(), 'screenshots');
        if (!fs.existsSync(screenshotsDir)) {
            fs.mkdirSync(screenshotsDir, { recursive: true });
        }
        const fileName = `screenshot-${Date.now()}.png`;
        const filePath = path.join(screenshotsDir, fileName);
        await this.page.screenshot({
            path: filePath
        });
        console.log(`Saved screenshot: ${filePath}`);
    }
});

After(async function () {
    console.log("I am executed");
    // Close Playwright resources if they exist
    try {
        if (this.page && !this.page.isClosed()) {
            await this.page.close();
        }
    } catch (e) {
        // ignore errors on close
    }
    try {
        if (this.context) {
            await this.context.close();
        }
    } catch (e) {}
    try {
        if (this.browser) {
            await this.browser.close();
        }
    } catch (e) {}
});