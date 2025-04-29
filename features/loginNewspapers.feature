Feature: Login functionality

Scenario: Successful login
    Given the user is on the Newspapers.com homepage
    When the user clicks the Sign In button
    And the user enters valid credentials
    And the user clicks the login button
    Then the user should be logged in successfully