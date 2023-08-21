const { Given, When, Then } = require("@cucumber/cucumber");

Given("Name are provided", function () {
  name = "Amit";
  return console.log(`Name are provided\nName: ${name}`);
});
Given("Surname are provided", function () {
  surname = "Kumar";
  return console.log(`Surname are provided\nSurname: ${surname}`);
});
When("Addition is perform", function () {
  return console.log(`Addition is perform`);
});
Then("Result is display", function () {
  return console.log(`Result is displayed\nName: ${name} ${surname}`);
});
