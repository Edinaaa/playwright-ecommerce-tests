import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;
  readonly cartIcon: Locator;
  readonly removeFromCartButtons: Locator;
  readonly cartBadge: Locator;


  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.locator('[data-test^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.removeFromCartButtons = page.locator('[data-test^="remove"]');
    this.cartBadge = page.locator('.shopping_cart_badge');


  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async removeFirstProductFromCart() {
  await this.removeFromCartButtons.first().click();
}
async getCartBadgeCount() {
  if (await this.cartBadge.isVisible()) {
    return Number(await this.cartBadge.textContent());
  }
  return 0;
}

}
