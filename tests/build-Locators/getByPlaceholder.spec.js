import { test , expect} from '@playwright/test'
test("to find Placeholder", async({page})=>
{
    await page.goto("https://www.youtube.com/")

    await page.getByPlaceholder("Search").fill("Krishna")
    await page.waitForTimeout(3000)

});