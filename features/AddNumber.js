const { Given, When, Then } = require("@cucumber/cucumber");

Given("Numbers are provided", function () {
  firstNumber = 1;
  secondNumber = 2;
  return console.log(
    `Numbers are provided\nFirst number: ${firstNumber}\nSecond number: ${secondNumber}`
  );
});

When("Addition is performed", function () {
  sum = firstNumber + secondNumber;
  return console.log(`Addition is performed`);
});

Then("Result is displayed", function () {
  return console.log(`Result is displayed\nResult: ${sum}`);
});
