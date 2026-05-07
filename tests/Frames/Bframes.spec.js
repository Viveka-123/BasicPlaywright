import {test, expect} from '@playwright/test'
test("Handling Frames",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/iframe")
    const framee=page.frames()
    console.log(framee.length)

    //using frame()
    
    const frame = page.frameLocator('#mce_0_ifr');   // iframe id

    await frame.locator('body').fill('Viveka is good girl');
    await page.waitForTimeout(5000)
})