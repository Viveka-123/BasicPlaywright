import {test, expect} from '@playwright/test'
test("Xpath axis", async({page})=>{
    await page.goto("https://www.amazon.in/")

    //Self Node
    const self=page.locator("//*[text()='About Amazon']")
    await expect(self).toBeVisible()

    //Parent
    const parent=page.locator("//*[text()='About Amazon']/parent::li")
    await expect(parent).toHaveAttribute('class','nav_first')

    //Child
    const child=page.locator("//*[@class='nav_first']/child::a")
    await expect(child).toHaveCount(5)
    const txt=await child.allTextContents()
    console.log(txt)

    //Ancestor
    const Ancestor=page.locator("//*[text()='About Amazon']//ancestor::div[1]")
    await expect(Ancestor).toBeVisible()

    //Descendent
    const Descendant=page.locator("//*[@id='nav-hamburger-menu']/descendant::span")
    await expect(Descendant).toHaveText("All")

    const Descendent=page.locator("//*[@class='navFooterLinkCol navAccessibility']/descendant::ul")
    const txtt=await Descendent.allTextContents()
    console.log(txtt)

    //Following
    const following=page.locator("//*[@class='navFooterLinkCol navAccessibility']/following::li[1]")
    expect(following).toHaveCount(4)

    //Following-Sibling
    const followings=page.locator("//*[@href='/fresh?ref_=nav_cs_grocery']//following-sibling::button")
    expect(followings).toBeVisible()

    //Preceding
    const Preceding=page.locator("//*[@class='nav-line-2 ']/preceding::span[1]")
    expect(Preceding).toHaveText("Hello, sign in")

    //Preceding-Sibling
    const Precedings=page.locator("//*[@class='nav_first']//preceding-sibling::*")
    expect(Precedings).toHaveCount(5)


});