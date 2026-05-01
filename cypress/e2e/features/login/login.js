import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/login_page";

Given("The Customer open login page", () => {
  LoginPage.visit();
});

Given("The Customer opens login page", () => {
  LoginPage.visit();
});

When("The Customer input username and password", () => {
  LoginPage.login();
});

Then("The Customer should login successfully", () => {
  cy.get(".section-header")
    .should("be.visible")
    .and("contain", "SHOPPING CART");
});

When("The Customer input invalid username and password", () => {
  LoginPage.loginfail();
});
When("The Customer input empty username and password", () => {
  LoginPage.loginempty();
});

Then("The Customer should see error message", () => {
  cy.get("#loginSection > #message")
    .should("be.visible")
    .and(
      "contain",
      "Bad credentials! Please try again! Make sure that you've registered.",
    );
});
