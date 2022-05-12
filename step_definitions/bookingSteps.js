/*const { booking } = require("../pages/flightPage")
const { login } = require("../pages/loginPage")
const { navbar } = require("../pages/navBar")*/

const { I, loginPage, navBar, flightPage } = inject();

Given ('Im already logged with my email and my password', () => {
    loginPage.visit()
    loginPage.login('agent@phptravels.com','demoagent')
    
})  

Given ('I clicked on flight link', ()=>{
    loginPage.validateLogin()
    navBar.validateNaveBarIsPresent()
    //pause()
    navBar.selectMenuItem('flights')

})  

Given('Im on the flight page', ()=>{
    flightPage.validatePage()
})

When(/^I fill the form with (.*) and (.*) and (.*) and (.*) and I click the search button$/, (from, to, departureDate, passengers) =>{
    flightPage.selectFlight(from, to, departureDate, passengers)
})


Then('I should see the flight options', ()=>{
    flightPage.validateFlight()
})