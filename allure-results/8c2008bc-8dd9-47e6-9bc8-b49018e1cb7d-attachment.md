# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Ecommerce.spec.js >> @smoke End to END Purchase Order
- Location: tests\Ecommerce.spec.js:4:1

# Error details

```
ReferenceError: email is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: rishi7196@gmail.com
            - textbox [ref=e81]: rishi7196@gmail.com
            - textbox "Select Country" [ref=e84]: India
            - generic [ref=e86] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | const { test, epect, expect } = require('@playwright/test');
  2  | const {LoginPage}=require('../PageObjects/LoginPage');
  3  | 
  4  | test('@smoke End to END Purchase Order', async ({ page }) => {
  5  |    const productName = 'ZARA COAT 3';
  6  |    const username = "rishi7196@gmail.com";
  7  |    const password="rishi12345";
  8  |    const products = page.locator(".card-body");
  9  |    const loginPage= new LoginPage(page);
  10 |    loginPage.GoTo();
  11 |    loginPage.validateLogin(username,password);  
  12 |    await page.waitForLoadState('networkidle');
  13 |    const titles = await page.locator(".card-body b").allTextContents();
  14 |    console.log(titles);
  15 |    const count = await products.count();
  16 |    for (let i = 0; i < count; i++) {
  17 |       if (await products.nth(i).locator("b").textContent() === productName) {
  18 |          //dd to the card
  19 |          await products.nth(i).locator("text= Add To Cart").click();
  20 |          break;
  21 |       }
  22 |    }
  23 |    // click on cart
  24 |    await page.locator("[routerlink*='cart']").click();
  25 |    await page.locator('div li').first().waitFor();
  26 |    const boolean = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  27 |    expect(boolean).toBeTruthy();
  28 | 
  29 |    // checkout
  30 |    await page.locator("text=Checkout").click();
  31 |    await page.locator('[placeholder*="Country"]').pressSequentially("ind", { delay: 100 });
  32 |    const dropDown = await page.locator('.ta-results');
  33 |    await dropDown.waitFor();
  34 |    const optionCount = await dropDown.locator("button").count();
  35 |    for (let i = 0; i < optionCount; i++) {
  36 |       const text = await dropDown.locator("button").nth(i).textContent();
  37 |       if (text === " India") {
  38 |          await dropDown.locator("button").nth(i).click();
  39 |          break;
  40 |       }
  41 |    }
  42 |    // verify email on shipping screen
> 43 |    await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
     |                                                                               ^ ReferenceError: email is not defined
  44 |    await page.locator(".action__submit").click();
  45 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  46 |    const OrderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  47 |    console.log(OrderId);
  48 | 
  49 |    // order history validate
  50 | 
  51 |    await page.locator("button[routerlink*='myorders']").click();
  52 |    await page.locator("tbody").waitFor();
  53 |    const rows = await page.locator("tbody tr");
  54 | 
  55 | 
  56 |    for (let i = 0; i < await rows.count(); i++){
  57 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  58 |       if (OrderId.includes(rowOrderId)) {
  59 |          await rows.nth(i).locator("button").first().click();
  60 |          break;
  61 |       }
  62 |    }
  63 |    const orderIdDetails = await page.locator('.col-text').textContent();
  64 |    await expect(OrderId.includes(orderIdDetails)).toBeTruthy();
  65 | });
  66 | 
```