Feature: Online AnswerConnect Signup

  Scenario Outline: On click of the given signup link and it should be landing on the signup page

    Given I am in the signup page 
    # When I load the SignUp url 
    Then I should see signup page

  Scenario Outline: on entering all the valid user data it should accept the data 
  
    # Given I am on the signup page 
    When we set data in all the required fields 
    Then on click of paynow button all the fiels should be verified

  Scenario Outline: On clicking on Edit Plan & Explore Add-Ons we should able to see plans popup

    When we click on Edit Plan & Explore Add-Ons 
    Then We should able to see plans popup
    




