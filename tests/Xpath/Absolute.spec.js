import {test , expect} from '@playwright/test'
test("Absolute xpath", async({page})=>{
    await page.goto("https://support.google.com/mail/answer/56256?hl=en")
    await page.locator("xpath=/html[1]/body[1]/div[2]/header[1]/div[1]/header[1]/div[2]/div[2]/div[2]/form[1]/div[1]/input[1]").fill("zsczs")
    await page.waitForTimeout(3000)
})