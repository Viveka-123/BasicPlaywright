import{test, expect} from '@playwright/test'

test("All Method", async({page})=>{
    await page.goto("https://www.amazon.in/")
    const option=await page.locator("#searchDropdownBox").click()

    const list=await page.locator("#searchDropdownBox option")

    const options=await list.all()
    console.log("the number of options", options)
    console.log(await options[1].innerText())
    
    for(let opt of options)
    {
        console.log(await opt.innerText())
    }
    
      for(let i in options)
    {
        console.log(await options[i].innerText())
    }
})