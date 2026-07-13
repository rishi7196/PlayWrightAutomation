const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { POManager } = require('../../PageObjects/POManager');
const { chromium } = require('@playwright/test');
const { expect } = require('@playwright/test');
const data = require('../../utils/Ecomm1TestData.json');

setDefaultTimeout(60 * 1000); // 60 seconds, prevents premature "function timed out" errors

Given('a login to Ecommerce Application with {string} and {string}', async function (username, password) {
    this.browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.poManager = new POManager(this.page);
       
    const loginPage = this.poManager.getLoginPage();
    await loginPage.GoTo();
    await loginPage.validateLogin(username, password);
    await this.page.waitForSelector('.card-body', { state: 'visible' });
});

When('Add {string} to Cart', async function (productName) {
     await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
   .getByRole("button",{name:"Add to Cart"}).click(); 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
});

Then('Verify {string} is displayed in the cart', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and place the Order', async function () {
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify order is present in the OrderHistory', async function () {
    await dashboardpage.navigateToOrders();
   const ordersHistoryPage=poManger.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});