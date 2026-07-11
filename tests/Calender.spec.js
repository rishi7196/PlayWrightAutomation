const{test}=require('@playwright/test');

test('Calender handling',async({page})=>
{
    const monthNumber="6";
    const date="15";
    const year="2027";

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label__labelText").click();
     await page.locator(".react-calendar__navigation__label__labelText").click();
     await page.getByText(year).click();
     await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
     await page.locator("//abbr[text()='"+date+"']").click();
    




})
