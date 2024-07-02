import { test, expect } from '@playwright/test';

test('Create a booking', async ({ page }) => {
  await page.addInitScript({ path: './e2e/mockDate.js' });

  await page.goto('/');
  await page
    .getByRole('link', { name: 'Sunny Beach House cover Sunny' })
    .click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Wednesday, January 10th,').click();
  await page.getByLabel('Choose Wednesday, January 24th,').click();
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.locator('h3')).toContainText(
    'Sunny Beach House - January 10, 2024 - January 24, 2024',
  );
});
