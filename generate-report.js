const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonFile: "cypress/reports/cucumber-json/cucumber-report.json",
  output: "cypress/reports/cucumber-html/cucumber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "QA",
    "Browser": "Chrome",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);