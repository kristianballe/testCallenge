Feature: Login functionality

@positive_pass
Scenario: User Login to Swag Labs
    Given the user go to Swag labs
    When the user enters credentials in Swag labs
    And the user click the login button
    Then the app proceeds to inventory page