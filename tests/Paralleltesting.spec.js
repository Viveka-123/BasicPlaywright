import {test,expect} from '@playwright/test'
test.describe.configure({mode:'parallel'})
test.describe("Group1", async()=>{
test("Test1", async({page})=>{
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await expect(emailField).toBeVisible()
    })

    test("Test2", async({page})=>{
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const mobileButton = page.locator("button:has-text('Continue with Mobile')")
        await expect(mobileButton).toBeVisible()
        await expect(mobileButton).toBeEnabled()

    })

     test("Test3", async({page})=>{
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const microsoftButton = page.locator("button:has-text('Continue with Microsoft')")
        await expect(microsoftButton).toBeVisible()
    })
})