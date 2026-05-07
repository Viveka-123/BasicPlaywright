import {test, expect} from '@playwright/test'
test("Handling Alerts",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(d)=>{
        console.log(d.type())
        console.log(d.message())
        d.accept('Viveka')
    })
    const alert=await page.locator("[onclick='jsAlert()']")
    await alert.click()
    await page.waitForTimeout(5000)
})

test("Handling Confirmation",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(c)=>{
        console.log(c.type())
        console.log(c.message())
        //c.accept()
        c.dismiss()

    })
    const confirm=await page.locator("[onclick='jsConfirm()']")
    await confirm.click()
    await page.waitForTimeout(5000)
})

test.only("Handling Prompt",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(p)=>{
        console.log(p.type())
        console.log(p.message())
        p.accept("viveka")
        //p.dismiss()

    })
    const Prompt=await page.locator("[onclick='jsPrompt()']")
    await Prompt.click()
    await page.waitForTimeout(5000)
    const text=await page.locator("#result").innerText()
    console.log(text)

})
