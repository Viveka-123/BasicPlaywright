import {test, expect} from '@playwright/test'
test("Handling Dropdwon",async({page})=>{
    await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=6203412724429559197&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062135&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
    await page.waitForTimeout(3000)
   
    await page.locator("//select[@title='Search in']").click();
    
    await page.waitForTimeout(3000);
   
    const dd=await page.locator("//select[@title='Search in']")
    
    const count=await dd.locator("option").count()
    
    console.log("the no  of dropdwon list"+count)
    

    await page.waitForTimeout(3000);

})