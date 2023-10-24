const { defineConfig } = require("cypress", "cypress-log-filter");

module.exports = defineConfig({
  projectId: '',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
