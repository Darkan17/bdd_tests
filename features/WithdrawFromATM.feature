@all
Feature: Withdraw from ATM
ATM should to check user balance
ATM should to inform if user doesn't have money
ATM should to pay if user have enough money  
ATM should to inform user if user passed the daily limit

Background:
Allow the user put card into the ATM
User successfuly authenticated

@enoughMoney
Scenario: User has enough money
Given User balance is 500 euro
When User asks 200 euro
Then ATM gives 200 euro
And The user balance it is 300 euro


@notEnoughOfMoney
Scenario: User doesnt have enough money
Given The user balance it is 1000 euro
When The user asks 3000 euro
Then ATM inform Not enough of money


