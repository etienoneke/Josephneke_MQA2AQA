const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //dissable chrome security
    chromeWebSecurity: false,

    "baseUrl": "https://www.saucedemo.com/"
  },

 

 

});


