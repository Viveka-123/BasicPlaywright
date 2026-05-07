import { test, expect } from '@playwright/test';

test("React Datepicker - Corrected", async ({ page }) => {
  await page.goto("https://demoqa.com/date-picker");

  const year = "2025";
  const month = "January";
  const date = "15";

  // Open the date picker
  await page.locator("#datePickerMonthYearInput").click();

  // Select month from dropdown
  await page.locator("select.react-datepicker__month-select")
            .selectOption({ label: month });

  // Select year from dropdown
  await page.locator("select.react-datepicker__year-select")
            .selectOption({ label: year });

  // Click correct day (avoid outside-month days)
  await page.locator(
    `.react-datepicker__day:not(.react-datepicker__day--outside-month):has-text("${date}")`
  ).click();
});