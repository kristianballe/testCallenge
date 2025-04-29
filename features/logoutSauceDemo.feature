Feature: Logout functionality

@positive
Scenario: User Logout to Swag Labs
    Given the user logged in to Swag labs
    When the user click the burger menu
    And the user click the logout
    Then the app should successfully logout