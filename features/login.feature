Feature: Logging in

Scenario Outline: Scenario Outline for Login

Given Im on the main page
When I fill the form with my <Email> and my <Password>
Then I should see the dashboard page

Examples:
    | Email | Password |
    | agent@phptravels.com  |demoagent|

