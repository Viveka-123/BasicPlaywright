import{test, expect} from '@playwright/test'
//Absolute Xpath
test(" Xpath Functions", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    const logo=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[4]/div[1]/div[3]/div[2]")
    expect(logo).toBeVisible()
    await page.waitForTimeout(3000)


    //Absolute Xpath
    await page.locator("//input[@type='text'][@id='small-searchterms']").fill("jghj")
    await page.waitForTimeout(3000)

    //contains
    const products = page.locator("//h2/a[contains(@href,'computer')]");

  const productsCount= await products.count();
  console.log("No of Computer related products:", productsCount);  //4
  expect(productsCount).toBeGreaterThan(0);

  //console.log(await products.textContent());   //Error: strict mode violation:

  console.log("First computer related product:", await products.first().textContent());
  console.log("Last computer related product:", await products.last().textContent());
  console.log("Nth computer related product:", await products.nth(2).textContent());  // Index is starting from 0

  let productTitles = await products.allTextContents();  // getting all the matched products in to an array

  for (let pt of productTitles)
  {
    console.log(pt)
  }

});

