/// <reference types="cypress" />
const baseUrl = Cypress.config().baseUrl;

import Login_Page from "../../pages/UI_loginPage";
import {Logout_page} from "../../pages/UI_logoutPage"
import {ShoppingCartActions} from "../../pages/UI_itemPurchase";


  //page objects initialisation
  const login = new Login_Page();
  const logout = new Logout_page();
  const shopping = new ShoppingCartActions();


    /* Data-driven testing - Access and initialize testData JSON file 
    in the fixture folder before each 'it' block */

    before(function () {
      cy.fixture('testData.json').then((data) => {
        globalThis.data = data;
      });
    });


describe('Login Test', () => {
  let inventoryHref;  // Declare the variable outside the test block
  
  describe('Login Validation -(Positive cases)', () => {

    /*Visits URL and fetch username and password from testData Json file in fixture folder 
    to their respective input fields. repeats this for all the 'it' blocks in this decribe block*/ 
    
      beforeEach('Verify Successful Login with standard User', () => {
        // To sucessfully lauch URL and login with valid standarduser credentials
        login.VerifySuccessfulLogin();

        // Initialize inventoryHref here
        inventoryHref = data.pages.find(page => page.name === 'Inventory').href;  
        
    })
    
    it('Verify succsessful login with Standard User', () => {

      // Check page URL is correct after login
      cy.url().should('eq', baseUrl + inventoryHref);

      // Check that logout element is available in the sidebar
      logout.clickHandBurger();
      logout.locateLogoutButton();
    });
    

    it('Verify that a valid user can logout and be redirected to login page', () => {
    
      // Check page URL is correct after login
      cy.url().should('eq', baseUrl + inventoryHref);

      // Check that logout element is available in the sidebar
      logout.clickHandBurger();
      logout.locateLogoutButton();

      // Perform logout
      logout.clickLogoutButton();
      
      // Check that page URL is changed to login page
      cy.url().should('eq', baseUrl);
      
      // Check that the logo is present on login page
      logout.locateLogoOnLoginPage();
    });
  });

  describe('Login Validation -(Edge cases)', () => {

    it('Verify that (standard_user) cannot log-in with the invalid credentials', () => {

      // Use the standardUser with invalid password for this test
      const standardUser = data.login.invalidDataset.invalidPasswordDataset;

      // Visit URL
      login.LaunchURL();

      // Login with the standard user credentials
      login.LoginCredentials(standardUser.username, standardUser.password);

      // Check label is visible with text
      cy.contains('Epic sadface: Username and password do not match any user in this service')
        .should('be.visible');
      });

    it('Verify that (locked-out user) cannot login with the valid credentials.', () => {

      // Use the locked-out user for this test
      const lockedOutUser = data.login.validDataset.lockedOutUserDataset;

      // Visit URL
      login.LaunchURL();

      login.LoginCredentials(lockedOutUser.username, lockedOutUser.password);

      // Check label is visible with text
      cy.contains('Epic sadface: Sorry, this user has been locked out.')
        .should('be.visible');
    });

    it('Verify that (performance_glitch_user) can login with the with long timeout..', () => {

      // Use the performance_glitch_user for this test
      const performanceGlitchUser = data.login.validDataset.performanceGlitchUserDataset;

      // Visit URL, set a longer timeout of (10 seconds) specifically for this user
      login.LaunchURL({ timeout: 10000 });

      // Login with the standard user credentials
      login.LoginCredentials(performanceGlitchUser.username, performanceGlitchUser.password);

      // Check page URL is correct after login
      cy.url().should('eq', baseUrl + inventoryHref);

      // Check that logout element is available in the sidebar
      logout.clickHandBurger();
      logout.locateLogoutButton();

    });

    it('Verify login with screen width less than 1060px', () => {

      // Use the standard_user for this test
      const standardUser = data.login.validDataset.standardUserDataset;
    
      // Set screen width less than 1060px
      cy.viewport(1024, 768); // This can be adjusted as needed
  
      // Visit URL
      login.LaunchURL();
    
      // Login with the standard user credentials
      login.LoginCredentials(standardUser.username, standardUser.password);
    
      // Check page URL is correct after login
      cy.url().should('eq', baseUrl + inventoryHref);
    
      // Check that logout element is available in the sidebar
      logout.clickHandBurger();
      logout.locateLogoutButton();
    });
  });
});




describe('Shopping Cart and Item Purchase Test', () => {

  beforeEach('Verify Successful Login with standard User', () => {

    login.VerifySuccessfulLogin();
  })

  it('Verify user can add any item from the items list to the cart', () => {
      // Choose a product and add it to the cart
      shopping.chooseItem();

      // Open the cart to review the added item exists in the cart
      shopping.openCartToCheck();

      // Verify the name of the added item
      shopping.verifyItemNameInCart();

      // Verify the  price of the added item
      shopping.verifyItemPriceInCart();

      // Verify that the checkout button is enabled
      shopping.VerifyCheckoutIsEnabled();
  });

  it('Verify user can buy an item from the items list', () => {
    // Choose a product and add it to the cart
    shopping.chooseItem();

    // Open the cart to review its contents
    shopping.openCartToCheck();

    // Proceed with checkout
    shopping.proceedToCheckout();

    // Input customer information
    shopping.inputCustomerFirstName();
    shopping.inputCustomerLastName();
    shopping.inputPostalCode();

    // Continue to the next step in the checkout process
    shopping.clickContinueButton();

    // Finish the checkout process
    shopping.clickFinishButton();

    // Verify the "Thank you for your order!" message is displayed
    shopping.verifyThankYouMessage();
  });
});



  