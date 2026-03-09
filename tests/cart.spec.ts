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


test('products should sort by price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
 await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  const prices = await page.locator('.inventory_item_price').allTextContents();

  const numericPrices = prices.map(p => Number(p.replace('$', '')));

  const sortedPrices = [...numericPrices].sort((a, b) => a - b);

  expect(numericPrices).toEqual(sortedPrices);
});

test('cart should retain items after navigating to another page', async ({ page }) => {
  const loginPage = new LoginPage(page);
 await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');


  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page.locator('.cart_item')).toHaveCount(1);

  await page.goBack();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});