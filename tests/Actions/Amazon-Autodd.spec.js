import{test, expect} from '@playwright/test'

test("AutoSuggest DD-Amazon", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(5000)
    await page.locator("[role='searchbox']").fill("mobile")
    await page.waitForTimeout(5000)

    //Count of the dropdown list
    const options= await page.locator(".s-suggestion")
    const count=await options.count()
    console.log("the count of list is ", count)
    
    //Prints all Dropdwon list options-----Enhanced For loop---
    const texts = await options.allTextContents();
    for (const text of texts) 
    {
        console.log("Element is", text);
    }

   //print all drop down list--------Normal For Loop
    for(let i=0;i<count;i++)
    {
        console.log((i+1) +" Option is",await options.nth(i).innerText())
    } 
    await page.waitForTimeout(5000)

    //Select Option
    for(let i=0;i<count;i++)
    {
        const text=await options.nth(i).innerText()
        if(text=='mobile 5+g')
        {
            await options.nth(i).click()
            break
        }
    } 
     await page.waitForTimeout(5000) 
})
