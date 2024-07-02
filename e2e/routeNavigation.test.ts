import { test, expect } from '@playwright/test';

test('Navigate through invalid URLs', async ({ page }) => {
  await page.goto('http://localhost:5173/book/');

  await expect(page).toHaveURL('http://localhost:5173/');

  await page.goto('http://localhost:5173/book/123fdsdfsd');

  await expect(page).toHaveURL('http://localhost:5173/');

  await page.goto(
    'http://localhost:5173/book/1d3a1e5e-6d3b-4d39-bf7b-34d776dc3b7e?startDate=fdsdfdsfd&endDate=dfdsfdsfsdf',
  );

  await expect(page).toHaveURL(
    'http://localhost:5173/book/1d3a1e5e-6d3b-4d39-bf7b-34d776dc3b7e?startDate=&endDate=',
  );
});
