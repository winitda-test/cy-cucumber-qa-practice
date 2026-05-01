
class LoginPage {
  visit() {
    cy.visit("https://qa-practice.razvanvancea.ro/auth_ecommerce.html");
  }

  login() {
    cy.get('input[name="emailAddress"]').type("admin@admin.com");
    cy.get('input[name="password"]').type("admin123");
    cy.get("[test-data='submitBtn']").click();
  }
  loginfail() {
    cy.get('input[name="emailAddress"]').type("jarrh_khon-suay@gmail.com");
    cy.get('input[name="password"]').type("jarrh@03");
    cy.get("[test-data='submitBtn']").click();
  }
  loginempty() {
    cy.get("[test-data='submitBtn']").click();
  }
}

export default new LoginPage();