import {test, expect} from '@playwright/test'
test("Xaxis", async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator("//div[@class='x6s0dn4 x78zum5 x1qughib xh8yej3']//following::input[@type='password']").fill("Nandana")
     await page.locator("//div[@class='x6s0dn4 x78zum5 x1qughib xh8yej3']//following::input[@type='password']").fill("Nandana")

})