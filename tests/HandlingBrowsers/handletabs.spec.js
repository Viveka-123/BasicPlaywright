import {test,expect, chromium} from '@playwright/test'

test("handle tabss", async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()  
    await page1.goto("https://the-internet.herokuapp.com/windows")

    const [page2]=await Promise.all([context.waitForEvent("page"),page1.locator("[href='/windows/new']").click()])
    const pages=await context.pages()
    console.log("no of pages",context.pages().length)
    await page1.waitForTimeout(5000)
    console.log(await pages[1].title())
    console.log(await page1.title())
    console.log(await page2.title())
    await page2.bringToFront()
    await page1.waitForTimeout(10000)



})