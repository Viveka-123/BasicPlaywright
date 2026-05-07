import {test,expect} from '@playwright/test'
test(" CSS-relative Functions", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    //Absolute
    const Absolute=page.locator("html>body>div:nth-child(4)>div>div>div>a>img")
    expect(Absolute).toBeVisible()
    await page.waitForTimeout(2000)
})