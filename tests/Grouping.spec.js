import {test,expect} from '@playwright/test'
 test.describe("Group1", async()=>{


test("Test1", async({page})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    await page.locator("#email").fill("chitakula@cixecnt.com")
    await page.waitForTimeout(5000)
})

test("Test2", async({page})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    await page.locator("#email").fill("chitakula@cixecnt.com")
     await page.locator("//*[text()='Continue with Mobile']").click()
})
 })
