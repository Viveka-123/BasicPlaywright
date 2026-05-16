import { test, expect } from '@playwright/test';
import path from 'path';
import * as XLSX from 'xlsx';

const filePath = path.resolve(__dirname, '..', 'Excel.xlsx');
const workbook = XLSX.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

for(const {username,password,validity} of data)
{
    test(`login test ${username} and ${password}`,async({page})=>
    {
        await page.goto("https://erpqa.azurewebsites.net/auth/login")
        await page.getByRole('textbox').first().fill(username);
        await page.locator('input[name="password"]').fill(password);
        await page.getByRole('textbox', { name: 'Enter the CAPTCHA' }).fill('123456');
        // await page.getByRole('button', { name: 'Sign In' }).click(); --- will not work for empty strings.

        if (validity === 'Valid') {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    });
}