class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.password = page.locator("#userPassword");
        this.userName = page.locator("#userEmail");   
        this.page.waitForLoadState('networkidle');    
    }

    async GoTo() {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
         
    }

    async validateLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }
}

module.exports = { LoginPage };