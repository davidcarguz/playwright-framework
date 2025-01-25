import { expect, type Locator, type Page } from '@playwright/test';

export default class ProductsPage {
    private readonly page: Page;
    private readonly TITLE_LABEL: Locator;
    
    constructor (page: Page) {
        this.page = page;
        this.TITLE_LABEL = page.locator('[data-test="title"]');
    }

    public getTitle (): Locator {
        return this.TITLE_LABEL;

    }
}