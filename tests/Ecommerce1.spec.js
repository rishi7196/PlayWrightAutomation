const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');

const testData = require('../utils/Ecomm1TestData.json');

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

   const dashboardpage = poManger.getDashboardPage();
   await dashboardpage.searchProductAddCart(data.productName)
   await dashboardpage.NavigateToCart();


   await page.locator('div li').first().waitFor();
   const boolean = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(boolean).toBeTruthy();

   // checkout
   await page.locator("text=Checkout").click();
   await page.locator('[placeholder*="Country"]').pressSequentially("ind", { delay: 100 });
   const dropDown = await page.locator('.ta-results');
   await dropDown.waitFor();
   const optionCount = await dropDown.locator("button").count();
   for (let i = 0; i < optionCount; i++) {
      const text = await dropDown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropDown.locator("button").nth(i).click();
         break;
      }
   }
   // verify email on shipping screen
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const OrderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(OrderId);

   // order history validate

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");


   for (let i = 0; i < await rows.count(); i++) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (OrderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator('.col-text').textContent();
   await expect(OrderId.includes(orderIdDetails)).toBeTruthy();


});

}