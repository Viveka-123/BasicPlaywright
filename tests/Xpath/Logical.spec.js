import {test, expect} from '@playwright/test'
test("Logical", async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator("//input[@name='email' and @type='text']").fill("viveka")
    await page.locator("//input[@name='pass' or @type='password']").fill("pasword@121")
    await page.locator("//span[text()='Log in']").click()
    await page.waitForTimeout(3000)
});