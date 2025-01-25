import { test as base } from '@playwright/test';

export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [async ({ page }, use) => {
    // This code runs before every test.
    await page.goto('https://www.saucedemo.com/');
    await use();
    // This code runs after every test.
  }, { auto: true }],
});