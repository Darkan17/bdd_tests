@all
Feature: Bank card authentication
ATM should to ask a user PIN
ATM should to show error if user enter wrong PIN
Authentication successful if user enter the correct PIN

Background:
Allow the user put card into the ATM
ATM asks the user to enter the pin

@correct
Scenario: Authentication successful
Given User put card into the ATM
And ATM asks the user to enter the pin
When User enter the correct PIN
Then ATM shows menu



@fail
Scenario: Authentication failed
Given User put card into the machine
And ATM asks the user to enter pin
When User enter wrong PIN
Then ATM shows error message
