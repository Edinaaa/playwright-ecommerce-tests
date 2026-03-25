import { test, expect } from '@playwright/test';
import { login } from './helpers/login';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can complete checkout successfully @smoke', async ({ page }) => {

  await login(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillUserInfo('Test', 'User', '12345');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete.html/);
});

test('Checkout shows error when required information is missing @smoke', async ({ page }) => {
  await login(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);


  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toBeVisible();
  await expect(checkoutPage.errorMessage).toContainText('Error');
});
