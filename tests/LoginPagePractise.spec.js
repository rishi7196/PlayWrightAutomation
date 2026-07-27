const { test, expect } = require('@playwright/test');
const { LoginPagePractisePage } = require('../PageObjects/LoginPagePractisePage');

test('Login page practise navigates to shop and shows iPhone X', async ({ page }) => {
    const loginPagePractisePage = new LoginPagePractisePage(page);

    await loginPagePractisePage.goTo();
    await loginPagePractisePage.login('rahulshettyacademy', 'Learning@830$3mK2');

    await page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');

    await expect(page.getByText('iPhone X')).toBeVisible();
});
