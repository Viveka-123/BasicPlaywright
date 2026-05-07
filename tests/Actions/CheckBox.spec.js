import {test, expect} from "@playwright/test"
test("Check box", async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    //Single Checkbox checking
    const check=await page.locator("#hobbies-checkbox-1")
    expect(check).toBeVisible()
    await check.check()
    expect(check).toBeChecked()
    expect(await check.isChecked()).toBe(true)
    await page.waitForTimeout(3000) 

    //Multi Checkbox checking
    const hobbies=['Sports', 'Reading','Music']
    const boxs=hobbies.map(index=>page.getByLabel(index))
    expect(boxs.length).toBe(3)
     await page.waitForTimeout(3000) 
    for(const c of boxs)
    {
        await c.check()
        await expect(c).toBeChecked()
    }
     await page.waitForTimeout(3000) 

      //Unchecking last index values
    for(const c of boxs.slice(-2))
    {
        await c.uncheck()
        await expect(c).not.toBeChecked()
    }
    await page.waitForTimeout(3000) 

    //Random checking
    const ind=[1]
    for(const i of ind)
    {
        await boxs[i].check()
        await expect(boxs[i]).toBeChecked()
    } 
    await page.waitForTimeout(3000) 

    //Based on label checking
    const lab='Music'
    for (const hobby of hobbies) 
    {
        if (hobby === lab) 
        {
    const box = page.getByLabel(hobby);
    await box.check();
    await expect(box).toBeChecked();
  }
}
})