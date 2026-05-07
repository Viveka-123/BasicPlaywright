import{test, expect} from '@playwright/test'

test("Static Web Table", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables")
    const table=await page.locator(".tablesorter[id='table1']")

    const rows=await page.locator(".tablesorter[id='table1'] tr")
    const rcount=await rows.count()
    console.log("the number of rows", rcount)

    const cols=await rows.locator("th")
    const ccount=await cols.count()
    console.log("the number of Cols", ccount)

    let a=""
    for(let h=1;h<=ccount;h++)
    {
        const hdr=await page.locator("//*[@id='table1']/thead/tr[1]/th["+h+"]")
        a+=await hdr.textContent()+" "
        
    }
    console.log(a)
/*
let b = "";

const rows = await page.locator('#table1 tbody tr').count();
const cols = await page.locator('#table1 thead th').count();

for (let r = 1; r <= rows; r++) {
  for (let c = 1; c <= cols; c++) {
    const cell = page.locator(`#table1 tbody tr:nth-child(${r}) td:nth-child(${c})`);
    b += await cell.textContent() + " | ";
  }
  b += "\n";
}

console.log(b); */
})
