import {test,expect} from '@playwright/test'

test("Screenshots", async({page})=>{
    const timestamp=Date.now()
    await page.goto("https://app.keka.com/Account/Login?ReturnUrl=%2F")
    //Screenshot
    await page.screenshot({path:'Screenshots/'+'Main page'+timestamp+'.png'})
    //Full-Screenshot
    await page.screenshot({path:'Screenshots/'+'Full page'+timestamp+'.png',fullPage:true})
    //element-Screenshot
    const logo=page.locator("[src='https://cdn.keka.com/login/v/2026/images/login-image.jpg']")
    logo.screenshot({path:'Screenshots/'+'logo'+timestamp+'.png'})

  
})