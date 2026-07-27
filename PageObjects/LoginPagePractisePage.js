class LoginPagePractisePage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username:');
        this.passwordInput = page.getByLabel('Password:');
        this.checkbox = page.getByRole('checkbox', { name: /I Agree/i });
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.checkbox.check();
        await this.signInButton.click();
    }
}

module.exports = { LoginPagePractisePage };