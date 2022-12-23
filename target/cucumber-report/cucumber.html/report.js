$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "As a user I want to search for jobs",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search;user-should-be-able-to-go-on-web;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-go-on-web;;2"
    },
    {
      "cells": [
        "Teacher",
        "London",
        "up to 35 miles",
        "15000",
        "25000",
        "Per annum",
        "Permanent",
        "Teacher jobs in London"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-go-on-web;;3"
    },
    {
      "cells": [
        "Doctor",
        "London",
        "up to 25 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Doctor jobs in London"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-go-on-web;;4"
    },
    {
      "cells": [
        "Accountant",
        "Harrow",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Accountant jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-go-on-web;;5"
    },
    {
      "cells": [
        "Tester",
        "London",
        "up to 10 miles",
        "35000",
        "55000",
        "Per annum",
        "Permanent",
        "Tester jobs in London"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-go-on-web;;6"
    },
    {
      "cells": [
        "Cashier",
        "London",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Cashier jobs in London"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-go-on-web;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16572088400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 455270700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22461717300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 614525800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 840056400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 385395500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 194246300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 341325700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 159919100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 197420600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 250632600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 218546100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 7387179200,
  "status": "passed"
});
formatter.after({
  "duration": 268300,
  "status": "passed"
});
formatter.before({
  "duration": 6729751300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Teacher\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"15000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Teacher jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22258375700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1223619400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 508327900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 388417200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 187409500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 427149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 175101500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 201417700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 243656600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 233591500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 9118228300,
  "status": "passed"
});
formatter.after({
  "duration": 49800,
  "status": "passed"
});
formatter.before({
  "duration": 6936055000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Doctor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Doctor jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 65000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22241421800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1394001300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 328589600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 487577500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 228905700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 420868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 154576600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 202009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 261540900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 230258600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 49763540300,
  "status": "passed"
});
formatter.after({
  "duration": 76800,
  "status": "passed"
});
formatter.before({
  "duration": 9260986600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Accountant jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22309558600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1013936100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 682578300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 228132300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 213089800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 323540600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 162335900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 190277500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 280582200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 196442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 44254550300,
  "status": "passed"
});
formatter.after({
  "duration": 51900,
  "status": "passed"
});
formatter.before({
  "duration": 10242532300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"55000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22805136800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1247532800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 303569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 352069800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 209078300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 295070400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 216350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 255980500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 266779800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 240740700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 72247840700,
  "status": "passed"
});
formatter.after({
  "duration": 57600,
  "status": "passed"
});
formatter.before({
  "duration": 13595727000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Cashier\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Cashier jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 22377359300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2379058500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 320297300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 273020800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 206153200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 519073800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 171782800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 197569500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 306116900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 42843883600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 1070100700,
  "status": "passed"
});
formatter.after({
  "duration": 61700,
  "status": "passed"
});
});