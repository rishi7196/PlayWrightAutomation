const { test, request, expect } = require('@playwright/test');
const { url } = require('node:inspector');

const loginPalyod = { userEmail: "rishi7196@gmail.com", userPassword: "rishi12345" }
let token;
test.beforeAll(async () => {

   const apiContext = await request.newContext()
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
      {
         data: loginPalyod

      }
   )
   expect((await loginResponse).ok).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   //parse and extract token
   token = loginResponseJson.token;
   console.log(token)
});

test('Client App login', async ({ page }) => {

   page.addInitScript(value => {
      window.localStorage.setItem('token', value)
   }, token);

   // const productName = 'ZARA COAT 3';
   // const username = "rishi7196@gmail.com";
   // const password = "rishi12345";
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   // await page.getByPlaceholder("email@example.com").fill(username);
   // await page.getByPlaceholder("enter your passsword").fill(password);
   // await page.getByRole('button', { name: "Login" }).click();
   // await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" })
      .getByRole("button", { name: "Add to Cart" }).click();

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