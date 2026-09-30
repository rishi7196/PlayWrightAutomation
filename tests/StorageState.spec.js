const { test, expect } = require('@playwright/test');

let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill("rishi7196@gmail.com");
    await page.locator('#userPassword').fill("rishi12345");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });
})


test('@Webst Client App login', async () => {
    //js file- Login js, DashboardPage
    const email = "rishi7196@gmail.com";
    const productName = 'ZARA COAT 3';
    const page = await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const products = page.locator(".card-body");
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add to Cart" }).click();

    await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();
    //await page.pause();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: "Checkout" }).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button", { name: "India" }).nth(1).click();
    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})

test('Thirde test cases ',async()=>
{

    const page= await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const products = page.locator(".card-body");
    await page.locator(".card-body b").first().waitFor();
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add to Cart" }).click();

})