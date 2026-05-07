import {test,expect} from '@playwright/test'

test("Auto-retryig/Non-retrying", async({page})=>{
   test.slow()
    await page.goto("https://erpqa.azurewebsites.net/auth/login")
    await expect(page).toHaveURL("https://erpqa.azurewebsites.net/auth/login")//Auto retrying
    const email=await page.locator("[formcontrolname='email']").fill("Sara",{force:true})
    await expect(page.getByLabel("User Name")).not.toBeVisible(); ////Non-retrying
    await expect.soft(
  page.getByRole('heading', { name: 'ign In' })
).toBeVisible();
    await page.locator("[formcontrolname='password']").fill("pasword@123")
    await page.locator("[formcontrolname='captcha']").fill("123456")
    await page.locator("[type='submit']").click()
  //  await page.waitForTimeout(5000)
})