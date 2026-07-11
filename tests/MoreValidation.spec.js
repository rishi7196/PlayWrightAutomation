const { test, expect } = require('@playwright/test');

test('@smoke Pop up valdation', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({path :'screeShot.png'});
    await page.locator("#hide-textbox").click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    // alert pop handle
    page.on('dialog',dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    //mouse hover
    await page.locator('#mousehover').hover();

    //ifrmaes
    const framePage=page.frameLocator('#courses-iframe');
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck= await framePage.locator(".text h2").textContent();
     console.log(textCheck.split(" ")[1]);


})

test('@smoke File to file comparison',async({page})=>
{

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  expect(await page.screenshot()).toMatchSnapshot('OrangeHRM.png');


})
