import{test, expect} from '@playwright/test'

test("SIngle TExt", async({page})=>{
    await page.goto("https://www.amazon.in/")
    const option=await page.locator("#searchDropdownBox").click()

    const list=await page.locator("#searchDropdownBox option").count()
    console.log("the number of options", list)

    const options=await page.locator("#searchDropdownBox option").nth(2).innerText()
    console.log("the number of options", options)

    const optionss=await page.locator("#searchDropdownBox option").nth(3).textContent()
    console.log("the number of optionss", optionss)
    
    for(let i=0;i<=list;i++)
    {
        const items=await page.locator("#searchDropdownBox option").nth(i).innerText()
        console.log("the number of options", items)
    }

    
})