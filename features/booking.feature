Feature: Booking a flight 

Scenario Outline: Booking a flight with proper dates

Given Im already logged with my email and my password
Given I clicked on flight link
Given Im on the flight page
When I fill the form with <From> and <To> and <DepartureDate> and <Passengers> and I click the search button
Then I should see the flight options

Examples:
    | From | To | DepartureDate | Passengers |
    | Paris  | Bogota | 20-11-2022 | 5 |
