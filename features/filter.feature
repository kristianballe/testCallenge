Feature: Filter

  @positive
  Scenario: filter the product from Z to A
    Given the user logged in to Swag labs
    When the user click the filter to select Z to A
    Then the product should be in descending order by name
