import {test,expect} from '@playwright/test'

test("Recordings", async({page})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    await page.locator("#email").fill("chitakula@cixecnt.com")
    await page.locator(".btn").click()
     
})