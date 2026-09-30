const base = require('@playwright/test');


exports.customTest = base.test.extend({
    authenticatedPage: async ({ browser }, use) => {

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/client');
        console.log(await page.title());
        await page.locator('#userEmail').fill("rishi7196@gmail.com");
        await page.locator('#userPassword').fill("rishi12345");
        await page.locator("[type='submit']").click();
        await page.waitForLoadState('networkidle');
        await use(page);

    },
    createOrder : async({},use)=>
    {
        
    }
});