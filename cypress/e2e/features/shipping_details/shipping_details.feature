Feature: Shipping details

  Scenario: Land on the Shipping Details Pages : Input Shipping details and click Submit Order
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details and click submit order
    Then The Customer should see the order confirmation page

  Scenario: Land on the Shipping Details Pages : Validate Error When Never Input Anything in page
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details without details
    Then The Customer should see the Error Message in Shipping Details Pages

  Scenario: Land on the Shipping Details Pages : Validate Error When Never Input Phone Number
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details without Phone Number
    Then The Customer should see the Error Message in Shipping Details Pages

  Scenario: Land on the Shipping Details Pages : Validate Error When Never Input Street
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details without Street
    Then The Customer should see the Error Message in Street Field

  Scenario: Land on the Shipping Details Pages : Validate Error When Never Input City
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details without City
    Then The Customer should see the Error Message in City Field

  Scenario: Land on the Shipping Details Pages : Validate Error When Never Input Country
    Given The Customer opens login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    And The Customer input Shipping details without Country
    Then The Customer should see the Error Message in Country Field
