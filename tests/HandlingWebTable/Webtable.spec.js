import{test, expect} from '@playwright/test'

test("Static Web Table", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables")
    const table=await page.locator(".tablesorter[id='table1']")
    expect(table).toBeVisible()

    const rows=await table.locator("tr")
    expect(rows).toHaveCount(5)
    const rcount=await rows.count()
    console.log("the number of rows", rcount)
    expect(rcount).toBe(5)


    const cols=await table.locator("th")
    const ccount=await cols.count()
    console.log("the number of Cols", ccount)
    expect(ccount).toBe(6)

    const headerow=await cols.locator("span")
    const HeaderrowText=await headerow.allInnerTexts()
    console.log("Header items ", HeaderrowText)
    
    await expect(headerow).toHaveText([ 'Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action' ])
    for(let text of HeaderrowText)
    {
        console.log(text)
    }


    let a=""
    for(let h=1;h<=ccount;h++)
    {
        const hdr=await page.locator("//*[@id='table1']/thead/tr[1]/th["+h+"]")
        a+=await hdr.textContent()+" "
        
    }
    console.log(a)
  /*  const Rrows=await rows.locator("td")
    const RrowsText=await Rrows.allInnerTexts()
    console.log("Header items ", RrowsText)
    
    for(let text of RrowsText)
    {
        console.log(text)
    }

*/
    const allrows=await rows.all()   
    for(let row of allrows)
    {
        const all=await row.locator("td").allInnerTexts()
        console.log(all.join('\t'))
        
    }

    const john=[]
    for(let row of allrows.slice(1))
    {
        const cells=await row.locator("td").allInnerTexts()
        const first=cells[1]
        const last=cells[0]
        if(first === 'John')
        {
            console.log(`${first} \t ${last}`)
            john.push(last)
        }
        
    }

 /*   let totalprice=0
    for(let row of allrows.slice(1))
    {
        const cells=await row.locator("td").allInnerTexts()
        const price=cells[3]
       totalprice=totalprice+parseInt()
        {
            console.log(`${first} \t ${last}`)
            john.push(last)
        }
        
    }
*/
})