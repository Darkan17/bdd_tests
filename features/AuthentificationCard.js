const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const atmState = {
  cardInserted: false,
  authenticated: false,
  message: "",
};
const correctPinEntered = "1234";

Given("User put card into the ATM", function () {
  atmState.cardInserted = true;
  atmState.authenticated = false;
});
Given("ATM asks the user to enter the pin", function () {
  atmState.message = "Please enter your pin";
});

When("User enter the correct PIN", function () {
  const correctPinEntered = "1234";
  if (correctPinEntered === correctPinEntered) {
    atmState.authenticated = true;
    atmState.message = "Authenticated successfully";
  } else {
    atmState.authenticated = false;
    atmState.message = "Incorrect pin";
  }
});
Then("ATM shows menu", function () {
  assert.strictEqual(atmState.authenticated, true);
  assert.strictEqual(atmState.message, "Authenticated successfully");
});

Given("User put card into the machine", function () {
  atmState.cardInserted = true;
  atmState.authenticated = false;
});
Given("ATM asks the user to enter pin", function () {
  atmState.message = "Please enter your pin";
});
When("User enter wrong PIN", function () {
  const enteredPin = "5555";

  if (enteredPin != correctPinEntered) {
    atmState.authenticated = false;
    atmState.message = "Wrong pin";
  } else {
    atmState.authenticated = true;
    atmState.message = "Authenticated successfully";
  }
});
Then("ATM shows error message", function () {
  assert.strictEqual(atmState.authenticated, false);
  assert.strictEqual(atmState.message, "Wrong pin");
});
