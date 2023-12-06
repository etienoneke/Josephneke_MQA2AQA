# Josephneke_MQA2AQA

Prerequisites:
Before running the Cypress automated tests locally, ensure that you have the following prerequisites installed on your machine:

1. Node.js: Cypress requires Node.js to be installed. Download and install it from https://nodejs.org/.

2. npm (Node Package Manager): npm is included with Node.js. Make sure you have the latest version by running the following command:

npm install -g npm@latest


Installation:
Follow these steps to set up the project and install the necessary dependencies:

1. Clone the repository to your local machine:
git clone https://github.com/etienoneke/Josephneke_MQA2AQA.git

2. Navigate to the project directory:
cd your-repo

3. Install project dependencies using npm:
npm install

Configuration:
Before running the tests, you might need to configure certain settings. Check the cypress.json file for configuration options such as the base URL, browser, or any other relevant settings.

Running Tests:
To execute the Cypress automated tests, follow these steps:

1. Open a terminal and navigate to the project directory.

2. Run Cypress in interactive mode:
npx cypress open
This will launch the Cypress Test Runner where you can choose WebUI_Test.cy.js tests files listed in the Spec. Click on the test to run it in the browser.

Headless Mode (Optional):
If you prefer running tests in headless mode (without the Test Runner interface), you can use the following command:

npx cypress run

Viewing Test Results:
Cypress will generate reports for all test runs in the cypress/reporters/mochawesome-report directory. You can view these reports to check the results of your tests in html and Json file formats.


Troubleshooting
If you encounter any issues while setting up or running the tests, please check the Cypress documentation for troubleshooting tips.

