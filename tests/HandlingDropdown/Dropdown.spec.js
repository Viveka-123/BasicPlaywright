import {test, expect} from '@playwright/test'
test("Handling Dropdwon",async({page})=>{
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php")
    await page.locator("//input[@type='text']").fill("playwright")
    await page.locator("//input[@type='password']").fill("playwright")
    await page.locator("//input[@type='Submit']").click()
    await page.waitForTimeout(3000)
    const F=await page.frameLocator("//iframe[@id='rightMenu']")  
    
    await expect(F.locator("//select[@name='loc_code']")).toBeVisible();
    
    console.log("dropdwon found")
    
    await F.locator("//select[@name='loc_code']").click();
    
    await page.waitForTimeout(3000);
   
    const dd=await F.locator("//select[@name='loc_code']")
    
    const count=await dd.locator("option").count()
    
    console.log("the no  of dropdwon list"+count)
    
    await page.waitForTimeout(3000);

})