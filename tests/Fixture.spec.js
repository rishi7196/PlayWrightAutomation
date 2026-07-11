//const { test, expect } = require('@playwright/test');
const {customtest} = require('../utils/test-base');
const testData = require('../utils/Ecomm1TestData.json');
const {POManager}=require('../PageObjects/POManager');


customtest('PageObject Purchase Order ', async ({ page, testDataForOrder }) => {

   const poManger = new POManager(page);
   const loginPage = poManger.getLoginPage();
   await loginPage.GoTo();
   await loginPage.validateLogin(testDataForOrder.username, testDataForOrder.password);

   const dashboardpage = poManger.getDashboardPage();
   await dashboardpage.searchProductAddCart(testDataForOrder.productName)
   await dashboardpage.NavigateToCart();


  

});

