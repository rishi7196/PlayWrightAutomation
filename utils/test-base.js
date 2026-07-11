const { test: base } = require('@playwright/test');
exports.customtest = base.test.extend({
    testDataForOrder: async ({}, use) => {
        await use({
            username: "rishi7196@gmail.com",
            password: "rishi12345",
            productName: "ZARA COAT 3"
        });
    }
});