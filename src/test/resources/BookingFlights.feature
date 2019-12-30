#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Open BlazedzDemo Application 
  
    Scenario Outline:  Booking Flights
    Given Launch The Browser
    And Choose your departureanddestinationcity:
    When Click On Find Flights
    Then Choose This Flights
    And Enter "<inputName>" and "<address>" and "<city>" and "<state>" and "<zipCode>" 
    And Select DropDown Button 
    And Enter "<creditCardNumber>","<creditCardMonth>","<creditCardYear>","<nameOnCard>" 
    And Click On Purchase Flight
    And Close The Browser
        
    
    Examples:  
            | inputName | address | city | state | zipCode | creditCardNumber | creditCardMonth | creditCardYear | nameOnCard |
            | Mohima Akter | 25-35,178street | Jamaica | New York | 12345 | 123456789 | 12 | 2022 | Mohima |

