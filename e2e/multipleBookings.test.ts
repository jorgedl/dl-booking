import { test, expect } from '@playwright/test';

test('Create four bookings of two different properties and interact with their date pickers', async ({
  page,
}) => {
  await page.addInitScript({ path: './e2e/mockDate.js' });

  await page.goto('/');
  await page
    .getByRole('link', { name: 'Sunny Beach House cover Sunny' })
    .click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Sunday, January 7th,').click();
  await page.getByLabel('Choose Sunday, January 21st,').click();
  await page.getByRole('button', { name: 'Book Now' }).click();
  await page.getByRole('link', { name: 'DLBOOKING' }).click();
  await page.getByRole('link', { name: 'Countryside Farmhouse cover' }).click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Sunday, January 7th,').click();
  await page.getByLabel('Choose Saturday, January 27th,').click();
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.locator('#root')).toContainText(
    'Sunny Beach House - January 7, 2024 - January 21, 2024',
  );
  await expect(page.locator('#root')).toContainText(
    'Countryside Farmhouse - January 7, 2024 - January 27, 2024',
  );
  await page.getByRole('link', { name: 'Sunny Beach House cover' }).click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Wednesday, January 3rd,').click();
  await page.getByLabel('Choose Thursday, January 25th,').click();
  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 3, 2024 - January 6, 2024');
  await page.getByRole('button', { name: 'Book Now' }).click();
  await page.getByRole('link', { name: 'Countryside Farmhouse cover' }).click();
  await page.getByPlaceholder('Select the dates you wish to').click();
  await page.getByLabel('Choose Thursday, January 4th,').click();
  await page.getByLabel('Choose Friday, February 2nd,').click();
  await expect(
    page.getByPlaceholder('Select the dates you wish to'),
  ).toHaveValue('January 4, 2024 - January 6, 2024');
  await page.getByRole('button', { name: 'Book Now' }).click();
  await page
    .getByRole('heading', {
      name: 'Countryside Farmhouse - January 4, 2024 - January 6,',
    })
    .click();
  await page.getByRole('button', { name: 'Edit reservation' }).nth(1).click();
  await page.getByPlaceholder('Select new dates').click();

  await page.getByLabel('Choose Tuesday, January 2nd,').click();
  await page.getByLabel('Choose Thursday, January 25th,').click();

  // As dates after Jan 3rd are locked, it will select from 2nd to 3rd instead
  await expect(page.getByPlaceholder('Select new dates')).toHaveValue(
    'January 2, 2024 - January 3, 2024',
  );

  await page.getByRole('button', { name: 'Cancel reservation' }).nth(2).click();

  await page.getByPlaceholder('Select new dates').click();

  await page.getByLabel('Choose Tuesday, January 2nd,').click();
  await page.getByLabel('Choose Thursday, January 25th,').click();

  await expect(page.getByPlaceholder('Select new dates')).toHaveValue(
    'January 2, 2024 - January 25, 2024',
  );
});
