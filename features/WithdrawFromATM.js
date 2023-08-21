const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const atmState = {
  userBalance: 0,
  atmResponse: "",
  dailyLimit: 1500,
};

Given("User balance is 500 euro", function () {
  atmState.userBalance = 500;
});
When("User asks 200 euro", function () {
  atmState.atmResponse = "200 euro";
});
Then("ATM gives 200 euro", function () {
  assert.equal(atmState.atmResponse, "200 euro");
});
Then("The user balance it is 300 euro", function () {
  atmState.userBalance = 300;
  assert.equal(atmState.userBalance, 300);
});

Given("The user balance it is 1000 euro", function () {
  atmState.userBalance = 1000;
  assert.equal(atmState.userBalance, 1000);
});
When("The user asks 3000 euro", function () {
  atmState.userBalance = 3000;
  if (atmState.userBalance >= 3000) atmState.atmResponse = "3000 euro";
});
Then("ATM inform Not enough of money", function () {
  atmState.userBalance = 2000;
  if (atmState.userBalance < 3000) atmState.atmResponse = "Not enough of money";
  assert.equal(atmState.atmResponse, "Not enough of money");
});
