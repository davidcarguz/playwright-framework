import { expect, type Locator, type Page } from '@playwright/test';

export default class LoginPage {
    private readonly page: Page;
    private readonly USERNAME_INPUT: Locator;
    private readonly PASSWORD_INPUT: Locator;
    private readonly LOGIN_BUTTON: Locator;
    private readonly ERROR_LOGIN_MESSAGE: Locator;
    
    constructor (page: Page) {
        this.page = page;
        this.USERNAME_INPUT = page.locator('[data-test="username"]');
        this.PASSWORD_INPUT = page.locator('[data-test="password"]');
        this.LOGIN_BUTTON = page.locator('[data-test="login-button"]');
        this.ERROR_LOGIN_MESSAGE = page.locator('[data-test="error"]');
    }

    public async loginWithCredentials (username: string, password: string): Promise<void> {
        await this.USERNAME_INPUT.fill(username);
        await this.PASSWORD_INPUT.fill(password);
        await this.LOGIN_BUTTON.click();
    }

    public getLoginErrorMessage (): Locator {
        return this.ERROR_LOGIN_MESSAGE;
    }
}