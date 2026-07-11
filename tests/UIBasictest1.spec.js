const { test, expect } = require('@playwright/test');

test('Browser Context test', async ({ browser }) => {
    // chrome-plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const login = page.locator("[type='submit']");
    const cardTitles=page.locator('.card-body  b');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login/');
    console.log(await page.title());
    await username.fill("rishi7196@gmail.com");
    await password.fill("rishi12345");
    await login.click();
    // console.log(await page.title());
    // console.log(await cardTitles.nth(1).textContent());
    // console.log(await cardTitles.first().textContent());
    // grab all the tiles on the web page
    //await page.waitForLoadState('networkidle');
    await page.locator('.card-body  b').first().waitFor();
    const allTitles=await cardTitles.allTextContents();
    console.log(allTitles);




});

