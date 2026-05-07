import {test,expect} from '@playwright/test'

test("Auto waiting", async({page})=>{
    await page.goto("https://erpqa.azurewebsites.net/auth/login")
    await page.locator("[formcontrolname='email']").fill("Sara",{force:true})
    await page.locator("[formcontrolname='password']").fill("password@123",{force:true})
    await page.locator("[formcontrolname='captcha']").fill("123456")
    await page.locator("[type='submit']").click()
    await page.waitForTimeout(5000)
})

test.only("TimeOut", async({page})=>{
   // test.setTimeout(10000)
   test.slow()
    await page.goto("https://erpqa.azurewebsites.net/auth/login")
    await expect(page).toHaveTitle("ERP24K: Advanced ERP Jewellery Software for Retail Stores")
    const email=await page.locator("[formcontrolname='email']").fill("Sara",{force:true})
//  await expect(page.getByTitle("Sign In")).toBeVisible({ timeout: 10000 });
    await page.locator("[formcontrolname='password']").fill("pasword@123")
    await page.locator("[formcontrolname='captcha']").fill("123456")
    await page.locator("[type='submit']").click()
  //  await page.waitForTimeout(5000)
})