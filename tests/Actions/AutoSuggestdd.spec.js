import{test, expect} from '@playwright/test'

test("AutoSuggest DD-ERP24K", async({page})=>{
    await page.goto("https://erpqa.azurewebsites.net/auth/login")
    await page.locator("//*[@formcontrolname='email']").fill("Viveka1")
    await page.locator("//*[@formcontrolname='password']").fill("password@123")
    await page.locator("//*[@formcontrolname='captcha']").fill("123456")
    await page.locator("#kt_sign_in_submit").click()
    await page.waitForTimeout(8000)
   // await page.locator("a.menu-link[href='/sales']").click()
    await page.getByRole('link', { name: 'Sales' }).click();
    await page.waitForTimeout(10000)
  /*  await page.locator("#mat-autocomplete-0")
    await page.waitForTimeout(3000)

 /*   //Count of the dropdown list
    const options= await page.locator("#mat-autocomplete-0 span")
    const count=await options.count()
    console.log("the count of list is ", count)

  /*  //print al drop down list
    for(let i=0;i<count;i++)
    {
        console.log((i+1) +"elements is",await options.nth(i).innerText())
    }   */
})
