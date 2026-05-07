import { test, expect } from '@playwright/test';

test("Booking Datepicker", async ({ page }) => {

  await page.goto("https://mdbootstrap.com/docs/standard/forms/datepicker/")

  // Open calendar
  await page.locator('.datepicker-toggle-button').nth(8).click();
  await page.waitForTimeout(5000)

  // -------- CHECK-IN --------
  const Inyear = '2026';
  const Inmonth = 'April';
  const Indate = '1';

  while (true) {
    const monthYear = await page.locator('.datepicker-view-change-button').innerText();

    const [curMonth, curYear] = monthYear.split(" ");

    if (curMonth === Inmonth && curYear === Inyear) 
        {
            break;
        }
        else{
    await page.locator('.datepicker-next-button').click();
        }
  }

  // Select check-in date
   const alldate=await page.locator(".datepicker-view table tbody td").all()
    for(let dat of alldate)
    {
        const datee=await dat.innerText()
        if(datee===Indate)
        {
            await dat.click()
            break
        }
    }
    await page.waitForTimeout(5000)


  // -------- CHECK-OUT --------
  const Outyear = '2026';
  const Outmonth = 'May';
  const Outdate = '10';

  while (true) {
    const monthYear = await page.locator('.datepicker-view-change-button').innerText();

    const [curMonth, curYear] = monthYear.split(" ");

    if (curMonth === Outmonth && curYear === Outyear) break;

    await page.locator('.datepicker-next-button').click();
  }

  // Select check-out date
   const alldat=await page.locator(".datepicker-view table tbody td").all()
    for(let dat of alldat)
    {
        const datee=await dat.innerText()
        if(datee===Outdate)
        {
            await dat.click()
            break
        }
    }
    await page.waitForTimeout(8000)

})