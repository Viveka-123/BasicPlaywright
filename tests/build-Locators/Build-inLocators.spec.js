import {test, expect} from '@playwright/test'
test("Build-in Locators", async({page})=>{
    await page.goto("http://127.0.0.1:5500/tests/app.html")
    await page.getByRole("button",{name:'Login'}).first().click()
    await expect(page.getByRole("link",{name:'Forgot Password?'})).toBeVisible()
    await page.getByLabel("Username").fill("chitakulaviveka@gmail.com")
    await expect(page.getByAltText("Company Logo")).toBeVisible()
    console.log("visible")
    await expect(page.getByText("Welcome to Playwright Testing")).toBeVisible()
    console.log("Playwright")
    await page.getByPlaceholder("Enter your email").fill("nandana")
    await page.waitForTimeout(3000)
    await page.getByTitle("Refresh Page").click()
    await page.getByTestId("login-btn").click()
    await page.getByRole()

});