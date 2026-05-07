import {test, expect} from '@playwright/test'
test("radio button", async ({page})=>{
  /*  await page.goto("https://demoqa.com/automation-practice-form")
    const rad=await page.locator("#gender-radio-1")
    expect(rad).toBeVisible()
    await rad.check()
    expect(rad).toBeChecked()
    expect(await rad.isChecked()).toBe(true)
    await page.waitForTimeout(3000) */
   
   
   
    await page.goto("https://forsale.godaddy.com/forsale/demoguru99.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2&")
    const rad=await page.locator("#lease-to-own-radio")
    await rad.check()
})