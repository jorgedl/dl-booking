import { test, expect } from '@playwright/test';

test('Home range picker pass its value to property booking page', async ({
  page,
}) => {
  await page.addInitScript({ path: './e2e/mockDate.js' });

  await page.goto('/');
  await page.getByPlaceholder('Select dates').click();
  await page.getByLabel('Choose Wednesday, January 10th,').click();
  await page.getByLabel('Choose Wednesday, January 17th,').click();
  await expect(page.getByPlaceholder('Select dates')).toHaveValue(
    'January 10, 2024 - January 17, 2024',
  );
  await page
    .getByRole('link', { name: 'Sunny Beach House cover Sunny' })
    .click();
  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 10, 2024 - January 17, 2024');
});
