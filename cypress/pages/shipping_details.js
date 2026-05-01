class ShippingDetails {
  inputNumber() {
    cy.get("#phone").type("0621517360");
  }
  inputStreet() {
    const street = "43 เวนิว พรอตเทตดอนเมือง แจ้งวัฒนะ ถนน พ.ช.ร. 10210";
    cy.get('input[name="street"]').type(street);
    return street;
  }
  inputCity() {
    const cities = "ปทุมธานี";
    cy.get('input[name="city"]').type(cities);
    return cities;
  }
  selectCountry() {
    const country = "Thailand";
    cy.get("#countries_dropdown_menu").select(country);
    return country;
  }
  clickSubmitOrder() {
    cy.get("#submitOrderBtn").click();
  }
}
class ConfirmsDetails extends ShippingDetails {
  verifyOrderConfirmation(street, cities, country) {
    cy.get("#message b")
      .eq(1)
      .invoke("text")
      .then((text) => {
        const confirmationText = text.trim();
        expect(confirmationText).to.eq(`${street}, ${cities} - ${country}.`);
      });
  }
}
export default new ShippingDetails();
export const confirmsDetails = new ConfirmsDetails();
