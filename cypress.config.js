const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/report/mochawesome-report"
    },
    //defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })

    }

  },
},
);
