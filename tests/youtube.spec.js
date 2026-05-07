import { test, expect} from '@playwright/test'

test("has title", async({page}) => 
    {
        await page.goto("https://gmail.com/");
        await expect(page).toHaveTitle(/Gmail/)
});

test("boolean",async({page})=>{
    expect(true).toBe(true)
    console.log("Test cases is valid")
}) 

test.only("",async({page})=>{
  //  await page.goto("https://gmail.com/");
  //  await expect(page).toHaveTitle(/Gmail/)
    expect("Viveka").toContain("ve")
    console.log("Test cases-111 is valid")
})