import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
});

test('User cannot log in with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(
    'Username and password do not match'
  );
});
