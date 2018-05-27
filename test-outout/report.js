$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Automation/FreeCRMBDDFrameWork/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Free CRM test scenario- using data driven approach- with example keyword",
  "description": "",
  "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 36,
      "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;;2"
    },
    {
      "cells": [
        "sirajj",
        "test@123"
      ],
      "line": 37,
      "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Free CRM test scenario- using data driven approach- with example keyword",
  "description": "",
  "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 9247243204,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_login_page()"
});
formatter.result({
  "duration": 14705901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2251911358,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4851517630,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8842228,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 82762561,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Free CRM test scenario- using data driven approach- with example keyword",
  "description": "",
  "id": "free-crm-login-feature;free-crm-test-scenario--using-data-driven-approach--with-example-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user enters \"sirajj\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_login_page()"
});
formatter.result({
  "duration": 8634171349,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_login_page()"
});
formatter.result({
  "duration": 9423775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sirajj",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2226047284,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8935944616,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11864305,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 121264912,
  "status": "passed"
});
});