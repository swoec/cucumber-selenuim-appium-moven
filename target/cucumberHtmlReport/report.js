$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Calculator functionalities",
  "description": "",
  "id": "verify-calculator-functionalities",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Click on OK button",
  "description": "",
  "id": "verify-calculator-functionalities;click-on-ok-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I click on element having id \"com.android2.calculator3:id/cling_dismiss\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "com.android2.calculator3:id/cling_dismiss",
      "offset": 30
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_id(String)"
});
formatter.result({
  "duration": 3135472982,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Addition",
  "description": "",
  "id": "verify-calculator-functionalities;addition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I click on element having id \"com.android2.calculator3:id/digit5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on element having id \"com.android2.calculator3:id/plus\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on element having id \"com.android2.calculator3:id/digit9\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on element having id \"com.android2.calculator3:id/equal\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "element having xpath \"//android.widget.EditText[@index\u003d0]\" should have text as \"14\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "com.android2.calculator3:id/digit5",
      "offset": 30
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_id(String)"
});
formatter.result({
  "duration": 204466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "com.android2.calculator3:id/plus",
      "offset": 30
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_id(String)"
});
formatter.result({
  "duration": 99227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "com.android2.calculator3:id/digit9",
      "offset": 30
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_id(String)"
});
formatter.result({
  "duration": 110979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "com.android2.calculator3:id/equal",
      "offset": 30
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_id(String)"
});
formatter.result({
  "duration": 102408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//android.widget.EditText[@index\u003d0]",
      "offset": 22
    },
    {
      "val": "14",
      "offset": 80
    }
  ],
  "location": "UserStepDefinitions.element_having_xpath_should_have_text_as(String,String)"
});
formatter.result({
  "duration": 155660,
  "status": "passed"
});
formatter.uri("features/my_first.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "      As a user I should able to login into my app",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "I login with valid credential",
  "description": "",
  "id": "login;i-login-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \"tomsmith\" into input field having id \"username\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"SuperSecretPassword!\" into input field having id \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on element having class \"radius\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should get logged-in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 15
    }
  ],
  "location": "UserStepDefinitions.i_navigate_to(String)"
});
formatter.result({
  "duration": 3452468606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 9
    },
    {
      "val": "username",
      "offset": 47
    }
  ],
  "location": "UserStepDefinitions.i_enter_into_input_field_having_id(String,String)"
});
formatter.result({
  "duration": 142752504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 59
    }
  ],
  "location": "UserStepDefinitions.i_enter_into_input_field_having_id(String,String)"
});
formatter.result({
  "duration": 188200544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "radius",
      "offset": 33
    }
  ],
  "location": "UserStepDefinitions.i_click_on_element_having_class(String)"
});
formatter.result({
  "duration": 766963316,
  "status": "passed"
});
formatter.match({
  "location": "UserStepDefinitions.should_logged_in()"
});
formatter.result({
  "duration": 161150321,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Close browser",
  "description": "",
  "id": "login;close-browser",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStepDefinitions.i_close_browser()"
});
formatter.result({
  "duration": 166558492,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I Loginout",
  "description": "",
  "id": "login;i-loginout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I Login out",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStepDefinitions.i_Login_out()"
});
formatter.result({
  "duration": 87102,
  "status": "passed"
});
});