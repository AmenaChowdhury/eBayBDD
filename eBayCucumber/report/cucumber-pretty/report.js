$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/animesh/Downloads/eBayBDD/eBayCucumber/src/test/java/feature/Register.feature");
formatter.feature({
  "line": 3,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Register Feature Test",
  "description": "",
  "id": "register-feature;register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user in the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "put last name",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "provide email address",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "give password",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click create account button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.user_in_the_register_page()"
});
formatter.result({
  "duration": 4380462992,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 559467286,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_name()"
});
formatter.result({
  "duration": 48465469,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.provide_email_address()"
});
formatter.result({
  "duration": 77342561,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.give_password()"
});
formatter.result({
  "duration": 73418625,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_create_account_button()"
});
formatter.result({
  "duration": 30085801372,
  "status": "passed"
});
});