const baseUrl = Cypress.config().baseUrl;


/**
 * Login page class (Page Object Model)
 * To ensure that test is maintainable. 
 */


 class Login_Page {
    
    // Visit the URL
    LaunchURL() {
      cy.visit(baseUrl)
        cy.url().should('include', 'saucedemo')
    }
  
    // Enter username and password into their respective fields and click on the login button
    LoginCredentials(username, password) {
      cy.get('#user-name').click().type(username);
      cy.get('#password').click().type(password);
      cy.get('#login-button').click();
      cy.title().should('eq', 'Swag Labs');
    }

    VerifySuccessfulLogin(){
        cy.fixture('testData.json').then((data) => {
          globalThis.data = data;
        });

    // Use the standardUser for this test
    const standardUser = data.login.validDataset.standardUserDataset;

    // Visit URL
    this.LaunchURL();

    // Login with the standard user credentials
    this.LoginCredentials(standardUser.username, standardUser.password);
    }

  
  }
  
  export default Login_Page;
  