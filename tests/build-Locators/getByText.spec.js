import { test , expect} from '@playwright/test'
test("to get Role", async({page})=>
{
    await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&dsh=S1007318861%3A1775563546143229&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AT1y2_UfW4aEKH18OfMYwEwq8ggeh0icbfn2AvLK9fo5PxGWEScSS-wVwoqb0EPLYB5bhSTvjV6EFg")

   // await page.getByPlaceholder("Search").fill("Krishna")
    await page.getByText("Create account").click();
    await page.waitForTimeout(3000)
});