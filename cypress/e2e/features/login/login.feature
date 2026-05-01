Feature: Login

  Scenario: User login : success
    Given The Customer open login page
    When The Customer input username and password
    Then The Customer should login successfully

  Scenario: User login failure 1 : invalid username and password
    Given The Customer open login page
    When The Customer input invalid username and password
    Then The Customer should see error message

  Scenario: User login failure 2 : empty username and password
    Given The Customer open login page
    When The Customer input empty username and password
    Then The Customer should see error message
