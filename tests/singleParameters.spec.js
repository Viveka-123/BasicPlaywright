import {test,expect} from '@playwright/test'
test(`Search for`, async ({ page }) => {

const searchItems=["Selenium","Playwright","Cypress"]

await page.goto('https://testautomationpractice.blogspot.com/');
for(const item of searchItems)
    {
        const searchInput = page.locator("#Wikipedia1_wikipedia-search-input");
        await page.waitForTimeout(3000);
        await searchInput.fill(item);
       const searchButton = page.locator(".wikipedia-search-button");
       await searchButton.click();
       await searchInput.clear();
        
    }
})