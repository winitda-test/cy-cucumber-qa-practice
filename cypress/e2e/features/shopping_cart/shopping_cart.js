import {
  defineStep as Given,
  defineStep as When,
  defineStep as And,
  defineStep as Then,
} from "@badeball/cypress-cucumber-preprocessor";

import {
  calculateShoppingCart,
  selectItems,
} from "../../../pages/shopping_cart";

let diorUnits;
let gucciUnits;

And(`The Customer Click select product Dior J'adore {string} units.`, (units) => {
  diorUnits = units;
  selectItems.selectDiorJadore();
  selectItems.addDiorJadore(units);
});
And(`The Customer Click Gucci Bloom Eau de {string} units. to cart`, (units) => {
  gucciUnits = units;
  selectItems.selectGucciBloom();
  selectItems.addGucciBloom(units);
});
And("The Customer validate shopping cart", () => {
  calculateShoppingCart
    .calculateCartTotal(diorUnits, gucciUnits)
    .then((totalPrice) => {
      calculateShoppingCart.validateTotalPrice(totalPrice);
    });
});
And("The Customer validate shopping cart and click  proceed to checkout", () => {
  calculateShoppingCart
    .calculateCartTotal(diorUnits, gucciUnits)
    .then((totalPrice) => {
      calculateShoppingCart.validateTotalPrice(totalPrice);
    });
  calculateShoppingCart.clickProceedToCheckout();
});
Then("The Customer should see the item in the shopping cart", () => {
  cy.get(".cart-items .cart-row").should("have.length", 2);
});
Then("The Customer should see the Shipping Details Pages", () => {
  cy.get("h2").should("be.visible").and("contain", "Shipping Details");
});
