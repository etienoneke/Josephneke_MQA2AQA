/// <reference types = "cypress" />
import 'cypress-real-events/support';

import LoginPage from "../../pages/loginpage"
   

describe('TRANSACTION FEED TEST', () => {
  const loginPage = new LoginPage();

  describe('TC 1', () => {
  it('should intercept network requests', () => {

    //loginPage.visit, {timeout: 300000}

      cy.intercept('GET', 'http://localhost:3001/transactions/public', {
        statusCode: 200,
      }).as('Transactions');

      loginPage.login("Neke", "Neke123@123") 

      cy.wait('@Transactions').then((interception) => { 
        expect(interception.response.statusCode).to.eq(200);
      });
    });
  });

  describe('TC 2', () => {

    it('To interact with Elements', () => {
      loginPage.login("Neke", "Neke123@123")
      cy.wait(2000)


  // to begin new transaction
      cy.get('[data-test="nav-top-new-transaction"]')
      .should('be.visible')
      .click();
    
  // to select person for transaction
      cy.get('[data-test="user-list-item-t45AiwidW"]')
      .should('be.visible')
      .click();
    
  // to Request Transaction
      cy.get('#amount').type('500,000');
      cy.get('#transaction-create-description-input').type('Requesting for your services');

      cy.get('[data-test="transaction-create-submit-request"]')
      .should('be.visible')
      .click();

    //to  initaite another transaction

      cy.get('[data-test="new-transaction-create-another-transaction"]')
        .should('be.visible')
        .click();

      // Using the search filter to locate the person for transaction

      cy.get('[data-test="user-list-search-input"]').type('Devon');
      cy.get('[data-test="user-list-item-tsHF6_D5oQ"]')
        .should('be.visible')
        .click();

      // to make payment for  Transaction
      cy.get('#amount').type('1,000,000');
      cy.get('#transaction-create-description-input').type('Payment for your services');

      cy.get('[data-test="transaction-create-submit-payment"]')
        .should('be.visible')
        .click();

      // to return to transactions

      cy.get('[data-test="new-transaction-return-to-transactions"]')
        .should('be.visible')
        .click();

      });

  });

  describe('TC 3', () => {

    it('To render and paginate all transaction feeds', () => {
      loginPage.login("Neke", "Neke123@123")


      // Observe the rendered transactions.

        cy.get('[data-test="nav-public-tab"]').should('be.visible')
        cy.get('[data-test="nav-contacts-tab"]').should('be.visible')
        cy.get('[data-test="nav-personal-tab"]').should('be.visible')

      //There is no pagination in the application

    });
  })

  describe('TC 4', () => {

      it('To filter transaction by date range', () => {
        loginPage.login("Neke", "Neke123@123")

        //To navigate to the personal tab

        cy.get('[data-test="nav-personal-tab"]').click()

        // To click on the calendar

        cy.get('[data-test="transaction-list-filter-date-range-button"]')
        .should('be.visible')
        .click({ force: true });

        // To select the range of days

        cy.get('[data-date="2023-10-31"]')
        .should('be.visible')
        .click({ force: true });

        cy.get('[data-date="2023-11-01"]')
        .should('be.visible')
        .click({ force: true });

      // To confirm that the transaction for that date range is visible
       cy.get('[data-test="transaction-sender-FHn8RlZ9T"]').should('exist');

    })

  })

  describe('TC 5', () => {

    it('To filter transaction by Amount range', () => {
      loginPage.login("Neke", "Neke123@123")

      //to click the amount filter

      cy.get('[data-test="transaction-list-filter-amount-range-button"]')
        .should('be.visible')
        .click({ force: true });

      //To select the range 0 to 490
      cy.get('[data-test="transaction-list-filter-amount-range-slider"]').click()
      cy.get('[data-index="0"]')   //.click({ force: true });
      .invoke('val', 0);
      cy.get('[data-index="0"]').realType('{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}');


      cy.get('[data-test="transaction-list-filter-amount-range-slider"]').click()
      cy.get('[data-index="1"]').realType('{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}'); ;
      cy.get('[data-index="1"]').invoke('val', 490);

      // To confirm that the transaction for that date range is visible
      cy.get('[data-test="transaction-sender-mEYl_ZSc5Qqe"]').should('exist');

    })


  })

})