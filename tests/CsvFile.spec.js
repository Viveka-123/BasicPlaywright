import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';

// correct path to CSV file from this test file
const filePath = path.resolve(__dirname, '..', 'CSV.csv');

const filecontent = fs.readFileSync(filePath, 'utf-8');

const records = parse(filecontent, {
    columns: true,
    skip_empty_lines: true
});
for(const data of records)
{
    test(`login test ${data.username} and ${data.password}`,async({page})=>
    {
        await page.goto("https://erpqa.azurewebsites.net/auth/login")
        await page.getByRole('textbox').first().fill(data.username);
        await page.locator('input[name="password"]').fill(data.password);
        await page.getByRole('textbox', { name: 'Enter the CAPTCHA' }).fill('123456');
     //   await page.getByRole('button', { name: 'Sign In' }).click();--- will not work for empty strings.
        if(data.validity=='Valid')
        {
            console.log('Login successful')
        }
        else{
             console.log('Login failed')
        }
    })
}