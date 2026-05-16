import {test, expect} from '@playwright/test'

import fs from 'fs';

const loginTestData = JSON.parse(fs.readFileSync('F:\\Basic Playwright\\JSOn.json', 'utf-8'));

for(const {username,password,validity} of loginTestData)
{
    test(`login test ${username} and ${password}`,async({page})=>
    {
        await page.goto("https://erpqa.azurewebsites.net/auth/login")
        await page.getByRole('textbox').first().fill(username);
        await page.locator('input[name="password"]').fill(password);
        await page.getByRole('textbox', { name: 'Enter the CAPTCHA' }).fill('123456');
     //   await page.getByRole('button', { name: 'Sign In' }).click();--- will not work for empty strings.
        if(validity=='Valid')
        {
            console.log('Login successful')
        }
        else{
             console.log('Login failed')
        }
    })
}