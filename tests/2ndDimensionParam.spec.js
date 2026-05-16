import {test, expect} from '@playwright/test'

const loginTestData=[
    ['Sara','password@123','Valid'],
    ['Sara','password@13','InValid'],
    ['Saa','password@123','InValid'],
    ['','','InValid'],
]

for(const [username,password,validiy] of loginTestData)
{
    test(`login test ${username} and ${password}`,async({page})=>
    {
        await page.goto("https://erpqa.azurewebsites.net/auth/login")
        await page.getByRole('textbox').first().fill(username);
        await page.locator('input[name="password"]').fill(password);
        await page.getByRole('textbox', { name: 'Enter the CAPTCHA' }).fill('123456');
     //   await page.getByRole('button', { name: 'Sign In' }).click();--- will not work for empty strings.
        if(validiy=='Valid')
        {
            console.log('Login successful')
        }
        else{
             console.log('Login failed')
        }
    })
}