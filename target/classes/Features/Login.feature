
Feature: Free CRM Login Feature

@tag1
Scenario: Free CRM test scenario

Given User is already on Login page
When title of login page is Free CRM
Then user enters username and password
Then user clicks on login button
And user is on home page
Then close the browser

@tag2
Scenario: Free CRM test scenario- using data driven approach- without example keyword

Given User is already on Login page
When title of login page is Free CRM
Then user enters "naveenk" and "Test@123"
Then user clicks on login button
And user is on home page
Then close the browser

@tag3
Scenario Outline: Free CRM test scenario- using data driven approach- with example keyword

Given User is already on Login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
And user is on home page
Then close the browser

Examples: 
| username | password |
| naveenk | test@123 |
| sirajj | test@123 |