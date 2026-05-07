import{test, expect} from '@playwright/test'

test("Bootstrap DD-Orange HRM", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator(".oxd-input[name='username']").fill("Admin")
    await page.locator(".oxd-input[name='password']").fill("admin123")
    await page.locator(".oxd-button[type='submit']").click()
    await page.waitForTimeout(5000)
    await page.locator("//*[text()='PIM']").click()
    await page.locator("form i").nth(3).click()
    await page.waitForTimeout(5000)

    //Count of the dropdown list
    const options= await page.locator("[role='option']")
    const count=await options.count()
    console.log("the count of list is ", count)

    //print single val
    console.log(await options.allTextContents())
   //print al drop down list
    for(let i=0;i<count;i++)
    {
        console.log((i+1) +"elements is",await options.nth(i).innerText())
    } 
    await page.waitForTimeout(5000)

    //Select Option
    for(let i=0;i<count;i++)
    {
        const text=await options.nth(i).innerText()
        if(text=='Development')
        {
            await options.nth(i).click()
            break
        }
    } 
     await page.waitForTimeout(5000)
})
