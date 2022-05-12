const { login } = require("../pages/loginPage");

const { I, loginPage } = inject();
// Add in your custom step files

Given('Im on the main page', () => {
    loginPage.visit()
  });

When(/^I fill the form with my email: "([^"]*)" and my password: "([^"]*)"$/, (email,password) => {
    loginPage.login(email,password)
  });  

Then('I should see the dashboard page', ()=>{
    loginPage.validateLogin()
})

When(/^I fill the form with my (.*) and my (.*)$/, (email, password) => {
    loginPage.login(email,password)
  });  