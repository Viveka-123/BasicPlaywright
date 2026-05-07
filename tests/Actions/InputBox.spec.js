import {test, expect} from '@playwright/test'
test("Input field", async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#firstName").fill("Viveka")
    await page.getByPlaceholder("Last Name").fill("NAndana")
    expect(page.getByPlaceholder("Last Name")).toBeVisible()
    expect(page.locator("#firstName")).toBeEnabled()
    const val=await page.getByPlaceholder("Last Name").inputValue()
    expect(val).toBe("NAndana")
    console.log("input val", val)
    await page.waitForTimeout(3000)

})