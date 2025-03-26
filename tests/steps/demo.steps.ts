import { Given, When, Then } from '@cucumber/cucumber';
import { page } from './world';
import { expect } from '@playwright/test';
import LoginPage from '../pages/login-page'
import ProductsPage from '../pages/products-page';

Given('Demo step', async () => {
    const loginPage: LoginPage = new LoginPage(page);
    const productsPage: ProductsPage = new ProductsPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.loginWithCredentials('standard_user','secret_sauce');
    await expect(productsPage.getTitle()).toHaveText('Products');
});