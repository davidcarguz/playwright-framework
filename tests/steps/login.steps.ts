import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {page} from "./world";
import LoginPage from "pages/login-page";
import ProductsPage from "pages/products-page";

Given("the user logs in with {string} username and {string} password", async (username:string, password: string) => {
    const loginPage: LoginPage = new LoginPage(page);
    await loginPage.loginWithCredentials(username, password);
});

Then("the user should be directed to the products page", async () => {
    const productsPage: ProductsPage = new ProductsPage(page);
    await expect(productsPage.getTitle()).toHaveText("Products");
});

Then("the system should display the error message {string}", async (errorMessage: string) =>{
    const loginPage: LoginPage = new LoginPage(page)
    await expect(loginPage.getLoginErrorMessage()).toHaveText(errorMessage);
});