const { test, expect } = require('@playwright/test');

test('Browser Context test', async ({ browser }) => {
    // chrome-plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await page.locator('#username').fill("rishi7196@gmail.com");
    await page.locator('#password').fill("rishi12345");
    await page.locator('#signInBtn').click();
    //wait untill this locator shown up page
    console.log(await page.locator("[style*=' block']").textContent());


});

test('First playwright testcase', async ({ page }) => {
    await page.goto('https://google.com/');
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');

})