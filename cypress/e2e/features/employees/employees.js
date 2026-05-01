import {
  Given,
  When,
  Then,
  defineStep as And,
} from "@badeball/cypress-cucumber-preprocessor";

const apiBaseUrl = () => Cypress.env("apiBaseUrl") || "http://localhost:8887";

let employeePayload;
let employeeResponse;

const createEmployeePayload = (emailAddress) => ({
  email: emailAddress,
  firstName: "Automation",
  lastName: `Tester${Date.now()}`,
});

Given("The Customer prepares a valid employee payload", () => {
  employeePayload = createEmployeePayload(`automation.${Date.now()}@test.com`);
});

Given(
  "The Customer prepares an employee payload with invalid email address",
  () => {
    employeePayload = createEmployeePayload("invalid-email-address");
  },
);

When("The Customer sends POST request to {string}", (endpoint) => {
  cy.request({
    method: "POST",
    url: `${apiBaseUrl()}${endpoint}`,
    body: employeePayload,
    failOnStatusCode: false,
  }).then((response) => {
    employeeResponse = response;
  });
});

Then("The Customer should receive response code {int}", (statusCode) => {
  expect(employeeResponse.status).to.equal(statusCode);
});

And("The Customer should see Response Body {string}", (statusBody) => {
  expect(employeeResponse.body).to.equal(statusBody);
});

And("The Customer should see Response Error in body is {string}", (statusBody) => {
  expect(employeeResponse.body.error).to.equal(statusBody);
});

And(
  "The Customer should see Response validation error field {string} with defaultMessage {string}",
  (field, defaultMessage) => {
    cy.log(employeeResponse.body);

    expect(employeeResponse.body.errors).to.be.an("array").and.not.be.empty;
    expect(employeeResponse.body.errors[0].field).to.equal(field);
    expect(employeeResponse.body.errors[0].defaultMessage).to.equal(
      defaultMessage,
    );
  },
);

Given(
  "The Customer sends GET request to {string} by ID is {int}",
  (endpoint, id) => {
    cy.request({
      method: "GET",
      url: `${apiBaseUrl()}${endpoint}${id}`,
      failOnStatusCode: false,
    }).then((response) => {
      employeeResponse = response;
    });
  },
);
