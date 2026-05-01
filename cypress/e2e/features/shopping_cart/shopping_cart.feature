Feature: Shopping cart

  Scenario: User add item to shopping cart : validate item listed in shopping cart
    Given The Customer open login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart
    Then The Customer should see the item in the shopping cart

  Scenario: User add item to shopping cart : Land on the Shipping Details Pages
    Given The Customer open login page
    When The Customer input username and password
    And The Customer Click select product Dior J'adore "2" units.
    And The Customer Click Gucci Bloom Eau de "3" units. to cart
    And The Customer validate shopping cart and click  proceed to checkout
    Then The Customer should see the Shipping Details Pages
