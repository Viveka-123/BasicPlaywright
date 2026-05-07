import{test, expect} from '@playwright/test'

test("jQuery Datepicker", async({page})=>{
    await page.goto("https://jqueryui.com/datepicker/")
    const frame=await page.frameLocator(".demo-frame")
    const Datepicker=await frame.locator(".hasDatepicker")
    await expect(Datepicker).toBeVisible()
    await page.waitForTimeout(3000)

    //using fill() method
 //   await Datepicker.fill("01/01/2026")
  //  await page.waitForTimeout(2000)

    //
    await Datepicker.click()
    const year='2025'
    const month='January'
   // const date='15'
    while(true)
    {
        const curmonth=await frame.locator(".ui-datepicker-month").innerText()
        const curyear=await frame.locator(".ui-datepicker-year").innerText()
        if(curyear===year && curmonth===month)
        {
            const D=await frame.locator("//a[text()='21']")
            await D.click()
            break
        }
     //   await frame.locator(".ui-datepicker-next").click()
        await frame.locator(".ui-datepicker-prev").click()
    }
await page.waitForTimeout(5000)
  /*  const alldate=await frame.locator(".ui-datepicker-calendar tbody td").all()
    for(let dat of alldate)
    {
        const datee=await dat.innerText()
        if(datee===date)
        {
            await dat.click()
            break
        }
    } 
    await page.waitForTimeout(5000)  */
})