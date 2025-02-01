import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import LoginPage from '../../src/pages/login-page';
import ProductsPage from '../../src/pages/products-page';

test('successful login', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const productsPage: ProductsPage = new ProductsPage(page);
    await loginPage.loginWithCredentials('standard_user','secret_sauce');
    await expect(productsPage.getTitle()).toContainText('Products')
})

test('wrong username login', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await loginPage.loginWithCredentials('standard_error','secret_sauce');
    await expect(loginPage.getLoginErrorMessage()).toContainText('Epic sadface: Username and password do not match any user in this service');
})