class SelectItems {
  selectDiorJadore() {
    cy.get(":nth-child(8) > .shop-item-details > .btn").click();
  }
  addDiorJadore(units) {
    cy.get(".cart-quantity-input").first().clear().type(units);
    cy.get(".cart-total-title").click();
  }
  selectGucciBloom() {
    cy.get(":nth-child(10) > .shop-item-details > .btn").click();
  }
  addGucciBloom(units) {
    cy.get(".cart-quantity-input").last().clear().type(units);
    cy.get(".cart-total-title").click();
  }
}
class CalculateShoppingCart extends SelectItems {
  getPriceByIndex(index) {
    return cy
      .get(".cart-items > .cart-row .cart-price")
      .eq(index)
      .invoke("text")
      .then((priceText) => {
        const price = parseFloat(
          priceText.replace("$", "").trim()
        );

        return price;
      });
  }

  calculateItemTotal(index, units) {
    return this.getPriceByIndex(index).then((price) => {
      const itemTotal = price * Number(units);
      return itemTotal;
    });
  }

  calculateCartTotal(diorUnits, gucciUnits) {
    return this.calculateItemTotal(0, diorUnits).then((diorTotal) => {
      return this.calculateItemTotal(1, gucciUnits).then((gucciTotal) => {
        const expectedTotal = Number((diorTotal + gucciTotal).toFixed(2));
        return expectedTotal;
      });
    });
  }
  validateTotalPrice(expectedTotalPrice) {
    cy.get(".cart-total-price")
      .invoke("text")
      .then((totalPriceText) => {
        const actualTotalPrice = parseFloat(
          totalPriceText.replace(/[^0-9.]/g, "")
        );

        expect(actualTotalPrice).to.equal(expectedTotalPrice);
      });
  }
  clickProceedToCheckout() {
    cy.get(".btn-purchase").click();
  }
}

export const calculateShoppingCart = new CalculateShoppingCart();
export const selectItems = new SelectItems();
