import{test, expect} from '@playwright/test'

test("All Text", async({page})=>{
    await page.goto("https://www.amazon.in/")
    const option=await page.locator("#searchDropdownBox").click()

    const options=await page.locator("#searchDropdownBox option").allInnerTexts()
    console.log("the number of options", options)

    const optionss=await page.locator("#searchDropdownBox option").allTextContents()
    console.log("the number of optionss", optionss)

    const trimed=await options.map(text=>text.trim())
    console.log("the number of optionss", trimed)

    for(let opt of trimed)
    {
        console.log(opt)
    }

    
})