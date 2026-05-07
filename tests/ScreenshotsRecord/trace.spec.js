import {test,expect} from '@playwright/test'

test.only("Tracing", async({page})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    await page.locator("#emal").fill("chitakula@cixecnt.com")
    await page.waitForTimeout(5000) 
    await page.locator(".btn").click()
    await page.waitForTimeout(5000) 
})

test("through context",async({page,context})=>{
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    await context.tracing.start({screenshots:true,snapshots:true})
    await context.tracing.stop({path:'trace.zip'})
    await page.locator("#email").fill("chitakula@cixecnt.com")
    await page.locator(".btn").click()


})