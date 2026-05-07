import {test,expect, chromium} from '@playwright/test'

test("Browser context", async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
    const page3=await context.newPage()
    console.log("no of pages",context.pages().length)
    await page1.goto("https://playwright.dev/")
    await page2.goto("https://www.selenium.dev/")
    await page3.goto("https://www.amazon.in/")
    await expect(page2).toHaveTitle("Selenium")
    




   // context.waitForEvent("page")

 //   const clik=page.locator("[href='/windows/new']").click()

 //   pro



})