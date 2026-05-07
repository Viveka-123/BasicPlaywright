import {test, expect} from '@playwright/test'
test("Functional", async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator("//input[starts-with(@name,'ema')]").fill("viveka")
    await page.locator("//input[contains(@name,'pa')]").fill("pasword@121")
    await page.locator("//span[text()='Log in']").click()
    await page.waitForTimeout(3000)
});