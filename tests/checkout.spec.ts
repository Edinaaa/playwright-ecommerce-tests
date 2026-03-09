import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillUserInfo('Test', 'User', '12345');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete.html/);
});

test('Checkout shows error when required information is missing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toBeVisible();
  await expect(checkoutPage.errorMessage).toContainText('Error');
});
