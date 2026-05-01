import {
  defineStep as Given,
  defineStep as When,
  defineStep as And,
  defineStep as Then,
} from "@badeball/cypress-cucumber-preprocessor";
import shippingDetails, {
  confirmsDetails,
} from "../../../pages/shipping_details";

let street;
let city;
let country;

And("The Customer input Shipping details and click submit order", () => {
  shippingDetails.inputNumber();
  street = shippingDetails.inputStreet();
  city = shippingDetails.inputCity();
  country = shippingDetails.selectCountry();
  shippingDetails.clickSubmitOrder();
});

Then("The Customer should see the order confirmation page", () => {
  confirmsDetails.verifyOrderConfirmation(street, city, country);
});

And("The Customer input Shipping details without details", () => {
  shippingDetails.clickSubmitOrder();
});
Then("The Customer should see the Error Message in Shipping Details Pages", () => {
  // Add assertions for the error message
  cy.get("#phone").then(($input) => {
    expect($input[0].checkValidity()).to.equal(false);
    expect($input[0].validationMessage).to.equal("Please fill out this field.");
  });
  cy.get("#countries_dropdown_menu").should(
    "have.css",
    "color",
    "rgb(255, 0, 0)",
  );
});

And("The Customer input Shipping details without Phone Number", () => {
  street = shippingDetails.inputStreet();
  city = shippingDetails.inputCity();
  country = shippingDetails.selectCountry();
  shippingDetails.clickSubmitOrder();
});
And("The Customer input Shipping details without Street", () => {
  shippingDetails.inputNumber();
  city = shippingDetails.inputCity();
  country = shippingDetails.selectCountry();
  shippingDetails.clickSubmitOrder();
});
Then("The Customer should see the Error Message in Street Field", () => {
  // Add assertions for the error message
  cy.get('input[name="street"]').then(($input) => {
    expect($input[0].checkValidity()).to.equal(false);
    expect($input[0].validationMessage).to.equal("Please fill out this field.");
  });
});
And("The Customer input Shipping details without City", () => {
  shippingDetails.inputNumber();
  street = shippingDetails.inputStreet();
  country = shippingDetails.selectCountry();
  shippingDetails.clickSubmitOrder();
});
Then("The Customer should see the Error Message in City Field", () => {
  // Add assertions for the error message
  cy.get('input[name="city"]').then(($input) => {
    expect($input[0].checkValidity()).to.equal(false);
    expect($input[0].validationMessage).to.equal("Please fill out this field.");
  });
});
And("The Customer input Shipping details without Country", () => {
  shippingDetails.inputNumber();
  street = shippingDetails.inputStreet();
  city = shippingDetails.inputCity();
  shippingDetails.clickSubmitOrder();
});
Then("The Customer should see the Error Message in Country Field", () => {
  // Add assertions for the error message
  cy.get("#countries_dropdown_menu").should(
    "have.css",
    "color",
    "rgb(255, 0, 0)",
  );
});
