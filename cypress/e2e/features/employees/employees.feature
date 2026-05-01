Feature: Employees API

  Scenario: POST /api/v1/employees creates a new employee successfully
    Given The Customer prepares a valid employee payload
    When The Customer sends POST request to "/api/v1/employees"
    Then The Customer should receive response code 201

  Scenario: POST /api/v1/employees fails when email address has invalid format
    Given The Customer prepares an employee payload with invalid email address
    When The Customer sends POST request to "/api/v1/employees"
    Then The Customer should receive response code 400
    And The Customer should see Response Error in body is "Bad Request"
    And The Customer should see Response validation error field "email" with defaultMessage "must be a well-formed email address"

  Scenario: GET /api/v1/employees/ when Find employee by ID is existing
    When The Customer sends GET request to "/api/v1/employees/" by ID is 20
    Then The Customer should receive response code 200

  Scenario: GET /api/v1/employees/ when Find employee by ID is not existing
    When The Customer sends GET request to "/api/v1/employees/" by ID is 999999
    Then The Customer should receive response code 404
    And The Customer should see Response Body "Employee not found with ID 999999"
