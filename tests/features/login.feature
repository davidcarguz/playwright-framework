Feature: Login validations

  @successful-login
  Scenario: Successful login with standard user
    Given the user logs in with 'standard_user' username and 'secret_sauce' password
    Then the user should be directed to the products page

  @wrong-password  
  Scenario: Unsuccessful login with wrong password
    Given the user logs in with 'standard_user' username and 'wrong_pass' password
    Then the system should display the error message 'Epic sadface: Username and password do not match any user in this service'  
