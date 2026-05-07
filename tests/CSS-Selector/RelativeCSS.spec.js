import{test, expect} from '@playwright/test'
//Absolute Xpath
test(" CSS-relative Functions", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

    //CSS-id Locator
    const id=page.locator("input#small-searchterms").fill("Laptop")
    await page.waitForTimeout(3000)

    //CSS-Class name
    const classs=page.locator("a.ico-register")
    classs.click()
    await page.waitForTimeout(2000)

    //CSS-tagname[Attribute='val']
    const Att=page.locator("a[href='/login']")
    Att.click()
    await page.waitForTimeout(2000)
    
    //CSS-tagname.class[Attribute='val']
    const CA=page.locator("a.ico-register[href='/register']")
    CA.click()
    await page.waitForTimeout(2000)
    
});