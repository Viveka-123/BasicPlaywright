import {test, expect} from '@playwright/test'
test("Duplicate dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const dupli= page.locator("#colors")
    const opt= page.locator("#colors>option")
    const dopt=(await opt.allTextContents()).map(text=>text.trim())
    const myset=new Set()
    const duplicates=[]
    for(const text of dopt)
    {
        if(myset.has(text))
        {
            duplicates.push(text)
        }
        else{
            myset.add(text)
        }
    }
    console.log("duplicates are", duplicates)
    if(duplicates.length>0)
    {
        console.log("duplicates found", duplicates)
    }
    else{
        console.log("No Duplicates")
    }
    expect(duplicates.length).toBe(2)
})