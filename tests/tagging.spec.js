import {test, expect} from '@playwright/test'
test("Tagging", async({page})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
})