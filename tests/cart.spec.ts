import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('User can add and remove a product from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  let itemCount = await cartPage.getCartItemCount();
  expect(itemCount).toBe(1);

  const badgeCount = await productsPage.getCartBadgeCount();
  expect(badgeCount).toBe(1);

  await page.goBack();

  await productsPage.removeFirstProductFromCart();
  await productsPage.goToCart();

  itemCount = await cartPage.getCartItemCount();
  expect(itemCount).toBe(0);
  
  const badgeCountAfterRemove = await productsPage.getCartBadgeCount();
  expect(badgeCountAfterRemove).toBe(0);
});
