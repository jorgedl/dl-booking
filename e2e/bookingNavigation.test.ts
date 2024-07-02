import { test, expect } from '@playwright/test';

test('Will change elements and values according to booking navigation', async ({
  page,
}) => {
  await page.addInitScript({ path: './e2e/mockDate.js' });

  await page.goto('/');
  await page
    .getByRole('link', { name: 'Sunny Beach House cover Sunny' })
    .click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Thursday, January 18th,').click();
  await page.getByLabel('Choose Wednesday, January 10th,').click();
  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 10, 2024 - Check-out');
  const bookNowButton = await page.getByRole('button', { name: 'Book Now' });

  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 10, 2024 - Check-out');

  const isDisabled = await bookNowButton.getAttribute('disabled');
  expect(isDisabled).not.toBeNull();

  await page.getByPlaceholder('Select the dates you wish to').click();

  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 10, 2024 - January 11, 2024');

  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.locator('h3')).toContainText(
    'Sunny Beach House - January 10, 2024 - January 11, 2024',
  );

  await page.getByRole('button', { name: 'Edit reservation' }).click();
  await page.getByPlaceholder('Select new dates').click();
  await page.getByLabel('Choose Tuesday, January 2nd,').click();
  await page.getByLabel('Choose Saturday, January 20th,').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('h3')).toContainText(
    'Sunny Beach House - January 2, 2024 - January 20, 2024',
  );
});
