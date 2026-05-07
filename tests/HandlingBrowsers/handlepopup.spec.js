import {test,expect, chromium} from '@playwright/test'

test("handle tabss", async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()  
    await page1.goto("https://demoqa.com/browser-windows")

    await Promise.all([page1.waitForEvent("popup"),page1.locator("#windowButton").click()])
    const pages=await context.pages()
    console.log("no of pages",pages.length)
    await page1.waitForTimeout(5000)
    console.log(await pages[1].url())
    console.log(await page1.title())
})