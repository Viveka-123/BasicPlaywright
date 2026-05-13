import {test, expect} from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://erpqa.azurewebsites.net/auth/login');
});


test.skip("Only",async({page})=>{
    await page.waitForTimeout(5000)
    await page.getByRole('textbox').first().click();
    const user= await page.getByRole('textbox').first()
    await user.fill('sara');
    await user.clear()
   await page.waitForTimeout(5000)

})


test.skip("Skip",async({page})=>{
   
   const email= await page.locator('input[formcontrolname="email"]').fill("viveka")
  
   const password= await page.locator('input[formcontrolname="password"]').fill("password@123")
   

})

test.fail("Fail",async({page})=>{
  
   const email= await page.locator('input[formcontrolname="email"]').fill("viveka")
   const input=await email.inputValue()
   console.log(input)
   const password= await page.locator('input[formcontrolname="passwor"]').fill("password@123")
   await page.locator('button[type="submit"]').click()  

})

test.fixme("fixme",async({page})=>{
   const email= await page.locator('input[formcontrolname="email"]').fill("viveka")
   const input=await email.inputValue()
   console.log(input)
   const password= await page.locator('input[formcontrolname="passwordd"]').fill("password@123")
   await page.locator('button[type="submit"]').click()  

})

test("Slow",async({page})=>{
    test.slow()

  const email = page.locator('input[formcontrolname="email"]');
  await email.fill("viveka");
  await expect(email).toHaveValue("viveka");

  const password = page.locator('input[formcontrolname="password"]');
  await password.fill("password@123");

  await page.locator('button[type="submit"]').click();
});


