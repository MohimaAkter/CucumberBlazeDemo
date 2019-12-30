$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/mohim/Desktop/SeleniumScripe1/CucumberBlazeDemo/src/test/resources/BookingFlights.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Open BlazedzDemo Application",
  "description": "",
  "id": "open-blazedzdemo-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Booking Flights",
  "description": "",
  "id": "open-blazedzdemo-application;booking-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Choose your departureanddestinationcity:",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click On Find Flights",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Choose This Flights",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Enter \"\u003cinputName\u003e\" and \"\u003caddress\u003e\" and \"\u003ccity\u003e\" and \"\u003cstate\u003e\" and \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select DropDown Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter \"\u003ccreditCardNumber\u003e\",\"\u003ccreditCardMonth\u003e\",\"\u003ccreditCardYear\u003e\",\"\u003cnameOnCard\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click On Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "open-blazedzdemo-application;booking-flights;",
  "rows": [
    {
      "cells": [
        "inputName",
        "address",
        "city",
        "state",
        "zipCode",
        "creditCardNumber",
        "creditCardMonth",
        "creditCardYear",
        "nameOnCard"
      ],
      "line": 35,
      "id": "open-blazedzdemo-application;booking-flights;;1"
    },
    {
      "cells": [
        "Mohima Akter",
        "25-35,178street",
        "Jamaica",
        "New York",
        "12345",
        "123456789",
        "12",
        "2022",
        "Mohima"
      ],
      "line": 36,
      "id": "open-blazedzdemo-application;booking-flights;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10520452800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Booking Flights",
  "description": "",
  "id": "open-blazedzdemo-application;booking-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Launch The Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Choose your departureanddestinationcity:",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click On Find Flights",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Choose This Flights",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Enter \"Mohima Akter\" and \"25-35,178street\" and \"Jamaica\" and \"New York\" and \"12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select DropDown Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter \"123456789\",\"12\",\"2022\",\"Mohima\"",
  "matchedColumns": [
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click On Purchase Flight",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Close The Browser",
  "keyword": "And "
});
formatter.match({
  "location": "BookingFlights.Launch_The_Browser()"
});
formatter.result({
  "duration": 6400108700,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Choose_your_departure_city()"
});
formatter.result({
  "duration": 219515800,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Click_On_FindFlights()"
});
formatter.result({
  "duration": 261976300,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Choose_This_Flight()"
});
formatter.result({
  "duration": 310962600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mohima Akter",
      "offset": 7
    },
    {
      "val": "25-35,178street",
      "offset": 26
    },
    {
      "val": "Jamaica",
      "offset": 48
    },
    {
      "val": "New York",
      "offset": 62
    },
    {
      "val": "12345",
      "offset": 77
    }
  ],
  "location": "BookingFlights.Entervalues(String,String,String,String,String)"
});
formatter.result({
  "duration": 479605400,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Selest_DropDown_Button()"
});
formatter.result({
  "duration": 109426700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 7
    },
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "2022",
      "offset": 24
    },
    {
      "val": "Mohima",
      "offset": 31
    }
  ],
  "location": "BookingFlights.CardInformation(String,String,String,String)"
});
formatter.result({
  "duration": 314408900,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Card_On_Purchase_Flight()"
});
formatter.result({
  "duration": 274062800,
  "status": "passed"
});
formatter.match({
  "location": "BookingFlights.Close_The_Browser()"
});
formatter.result({
  "duration": 4325930100,
  "status": "passed"
});
formatter.after({
  "duration": 708920600,
  "status": "passed"
});
});