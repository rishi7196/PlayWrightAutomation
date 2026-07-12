const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');
const testData = require('../utils/Ecomm1TestData.json');
const { CartPage } = require('../PageObjects/CartPage');

for (const data of testData) {

test(`PageObject Purchase Order - ${data.productName}`, async ({ page }) => {

   const poManger = new POManager(page);
   // const productName = 'ZARA COAT 3';
   // const username = "rishi7196@gmail.com";
   // const password = "rishi12345";
   const products = page.locator(".card-body");
   const loginPage = poManger.getLoginPage();
   await loginPage.GoTo();
   await loginPage.validateLogin(data.username, data.password);
   //adding to the cart
   const dashboardpage = poManger.getDashboardPage();   
   await dashboardpage.searchProductAddCart(data.productName)
   await dashboardpage.navigateToCart();


  //Add to cart
   const cartPage=poManger.getCartPage();
   await cartPage.VerifyProductIsDisplayed(data.productName);
   await cartPage.Checkout();     

   const ordersReviewPage = poManger.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardpage.navigateToOrders();
   const ordersHistoryPage=poManger.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();


});

}