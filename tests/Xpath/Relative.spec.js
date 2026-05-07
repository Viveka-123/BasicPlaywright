import {test, expect} from '@playwright/test'
test("Relative", async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator("//input[@name='email']").fill("viveka")
    await page.locator("//input[@name='pass']").fill("pasword@121")
    await page.locator("//span[text()='Log in']").click()
    await page.waitForTimeout(3000)
});