const {test}=require('@playwright/test');
const {customTest}=require("../utils/fixture.spec");

customTest('Fixture demo',async({authenticatedPage})=>{

   await authenticatedPage.goto('https://rahulshettyacademy.com/client');
   await page.locator(".card-body b").first().waitFor();   
   

});

