import {test, expect} from '@playwright/test'
test("single Dropdown handling", async({page})=>{
    await page.goto("https://www.amazon.in/")
    const  dd= page.locator("#searchDropdownBox")
    await dd.click()
    await page.waitForTimeout(3000)

    //Count of dropdown
    const count=await page.locator("#searchDropdownBox>option")
 /*   .count()
    console.log("count is", count)
    await expect(count).toBe(46)
    await page.waitForTimeout(3000)
*/
    //Select Single option
   // await page.locator("#searchDropdownBox").selectOption('Amazon Fashion')
      await page.locator("#searchDropdownBox").selectOption({label:'Alexa Skills'})
  //  await page.locator("#searchDropdownBox").selectOption({value: 'search-alias=amazon-devices'})
   // await page.locator("#searchDropdownBox").selectOption({index:2})

   await page.waitForTimeout(3000)
   //check opt present in Dropdown
    const option=(await (count.allTextContents())).map(text=>text.trim())
    console.log(option)
    expect(option).toContain("Amazon Fashion")

    //print all dropdwon list
    for(const opt of option)
    {
        console.log(opt)
    }
    await page.waitForTimeout(3000)
})