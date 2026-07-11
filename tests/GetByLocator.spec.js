const { test } = require('@playwright/test');

test('@regression Playwright with special locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Gender').selectOption("Male");
    await page.getByLabel('Employed').check();
    await page.getByPlaceholder('Password').fill('rishi1234');
    // await page.getByRole("button",{name:'submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.locator("app-card").filter({ hasText: "Nokia Edge" }).getByRole('button').click();

   // await page.pause();




})