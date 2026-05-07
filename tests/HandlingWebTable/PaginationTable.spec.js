import{test, expect} from '@playwright/test'

test("Static Web Table", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table#google_vignette")
    const table=await page.locator("#example tbody")

 /*    const rows=await table.locator("tr").all()
    for(let row of rows)
        {
            console.log(await row.innerText())       
        }
*/

let hasmorepages=true
    while(hasmorepages)
    {
        const rows=await table.locator("tr").all()
    for(let row of rows)
        {
            console.log(await row.innerText())       
        }
    
    
    const next =page.locator("#example_next")
    const isDisabled=await next.getAttribute("class")
    if(isDisabled?.includes('disabled'))
    {
        hasmorepages=false
    }
    else
        {
        await next.click()
        await page.waitForTimeout(3000)
      }
}
   
})

test("Filtering Web Table", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table#google_vignette")
    const pagination=await page.locator("#example tbody")
    const dropdown=await page.locator("[name='example_length']")
    await dropdown.selectOption("5")
    await page.waitForTimeout(3000)

    const rows=await page.locator("#example tbody tr").all()
    for(let row of rows)
        {
            console.log(await row.innerText())       
        }
    
})

test("Search Filter", async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-pagination-table#google_vignette")
    const Search=await page.locator("[type='search']")
    await Search.fill("Female")
    const rows=await page.locator("#example tbody tr").all()
    if(rows.length>=1)
        {
            let matchfound=false
            for(let row of rows)
                {
                    const text=await row.innerText()
                    if(text.includes("Female"))
                        {
                            console.log("match found")
                            console.log(await row.innerText()) 
                            matchfound=true
                            break
                        }                    
                }
                expect(matchfound).toBe(true)       
        }
        else
            {
            console.log("No rows found")
        }
        

})

test.only("Search Filter-Female", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dynamic-pagination-table#google_vignette");

  await page.locator('[type="search"]').fill('Female');

    const dropdown=await page.locator("[name='example_length']")
    await dropdown.selectOption("5")
    await page.waitForTimeout(3000)
  // wait until table updates
  const rows = page.locator('#example tbody tr');

  const count = await rows.count();

  console.log("Total filtered rows:", count);
 
  for (let i = 0; i < count; i++) {
    const rowText = await rows.nth(i).innerText();
    console.log(`Row ${i + 1}: ${rowText}`);
  }
});

test("Search Filter-Female with if/else", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/dynamic-pagination-table");

  await page.locator('input[type="search"]').fill('Female');
  await page.locator("[name='example_length']").selectOption("5");

  // ✅ Wait until DataTable finishes filtering/redraw
  await page.locator('#example_info')
    .filter({ hasText: 'filtered from' })
    .waitFor();

  const rows = page.locator('#example tbody tr');
  const count = await rows.count();

  console.log("Total filtered rows:", count);

  let matchFound = false;

  for (let i = 0; i < count; i++) {
    const text = await rows.nth(i).innerText();
    console.log(`Row ${i + 1}: ${text}`);

    if (text.includes('Female')) {
      matchFound = true;
    }
  }

  // ✅ Proper JS if–else
  if (matchFound) {
    console.log("✅ Match found: Female records are present");
  } else {
    console.log("❌ No Female records found");
  }
});