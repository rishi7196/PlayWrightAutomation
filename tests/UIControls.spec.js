const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('UI Controls', async ({ browser }) => {
    // chrome-plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const dropdown = await page.locator('select.form-control');
    await dropdown.selectOption('Consultant');
    //select checbox radio button
    await page.locator('.checkmark').last().click();
    await page.locator('#okayBtn').click();
    expect(await page.locator('.checkmark').last()).toBeChecked();

    //await page.pause();
    //accept this pop up
});

test('Blinking text ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class", "blinkingText");

});
// child window handle
test('@smoke Child window', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ])
    const text = await newPage.locator(".red").textContent();
    console.log(text);

})