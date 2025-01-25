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