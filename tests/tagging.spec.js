import {test, expect} from '@playwright/test'
test.describe("Group1", async()=>{
test("Only Sanity",{tag:'@Sanity'}, async({page})=>{
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const emailField = page.locator("input[placeholder='Enter Email or Username']")
        await expect(emailField).toBeVisible()
    })

    test("Only Regression",{tag:'@Regression'}, async({page})=>{
        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const mobileButton = page.locator("button:has-text('Continue with Mobile')")
        await expect(mobileButton).toBeVisible()
        await expect(mobileButton).toBeEnabled()

    })


     test("Both Regression and Sanity",{tag:['@Regression','@Sanity']}, async({page})=>{

        await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
        const microsoftButton = page.locator("button:has-text('Continue with Microsoft')")
        await expect(microsoftButton).toBeVisible()
    })
})