import {test, expect} from '@playwright/test'
test("Multi Dropdown handling", async({page})=>{
    await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html")
    const  dd= page.locator("//*[@name='Month']")
    await dd.click()
    await page.waitForTimeout(3000)

    //Count of dropdown
    const elements=await page.locator("//*[@name='Month']/option")
    const count = await elements.count();           // number
    console.log(count)

await page.waitForTimeout(3000);
    const opt=await elements.nth(6).textContent()
    console.log(opt)
    // .count()
   /* console.log("count is", count)
    await expect(count).toBe(13)
    await page.waitForTimeout(3000) 

    //Select Single option
    await page.locator("//*[@name='Month']").selectOption(['February','March','April'])
    await page.locator("//*[@name='Month']").selectOption([{label:'May'},{label:'June'},{label:'July'}])
    await page.locator("//*[@name='Month']").selectOption([{value: 'Jan'},{value:'Feb'},{value:'June'}])
    await page.locator("//*[@name='Month']").selectOption([{index:0},{index:1},{index:2}])

    await page.waitForTimeout(3000) */
   //check opt present in Dropdown
    const option=(await (elements.allTextContents())).map(text=>text.trim())
   // console.log(option)
   // expect(option).toContain("Amazon Fashion")

   /* //print all dropdwon list
    for(const opt of option)
    {
        console.log(opt)
    }
    

    for(let a=0;a<count;a++)
    {
     const text = await elements.nth(a).textContent();
    console.log((a + 1) + " Element is: " + text);
    }
    await page.waitForTimeout(3000) 

   //Sorting of Dropdown list
    const original=option
    const sortedlist=option.sort()
    console.log(original)
    console.log(sortedlist)//Sorting happening for both orginal/sortedlist
    */

    //Correct way of Sorting Dropdown list
    const original = [...option]
    const sortedlist=[...option.sort()]
    console.log(original)
    console.log(sortedlist)

})