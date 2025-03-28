import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
    try {
        browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.saucedemo.com/');
    }catch(error) {
        throw new Error(`browser couldn't be initialized due to error: ${error}` );
    }
    return page;
});

After(async () => {
    await browser.close();
});

export {page, browser};