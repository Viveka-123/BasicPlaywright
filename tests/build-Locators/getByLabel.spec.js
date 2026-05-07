import { test , expect} from '@playwright/test'
test("to get Role", async({page})=>
{
    await page.goto("https://www.facebook.com/")

   // await page.getByPlaceholder("Search").fill("Krishna")
    await page.getByLabel("Email address or mobile number").fill("chitakulaviveka@gmail.com");
    await page.waitForTimeout(3000)
});