/// <reference types = "cypress" />

import LoginPage from "../../pages/loginpage"
import login from "../../support/commands"

describe('USER SETTINGS TEST', () => {
    const loginPage = new LoginPage();

    describe('TC 1', () => {
        
        it('Renders User settings form', () => {

            loginPage.login("Neke", "Neke123@123")

            /**cy.visit('http://localhost:3000', { timeout: 300000 });
            // Your login action here
            cy.get('#username').type('Neke');
            cy.get('#password').type('Neke123@123');
            cy.get('[data-test="signin-submit"]').click();
            cy.wait(2000) */

            //Navigate to the user settings form

            cy.get('[data-test="sidenav-user-settings"]')
                .should('be.visible')
                .click({ force: true });

            
            // check that the Firstname placeholder is visible and contains correct value

            cy.get('[data-test="user-settings-firstName-input"]')
                .should('be.visible')
               

            // check that the Lastname placeholder is visible and contains correct value

            cy.get('[data-test="user-settings-lastName-input"]')
                .should('be.visible')
                

            // check that the Email placeholder is visible
            cy.get('[data-test="user-settings-email-input"]').should('be.visible')

            // check that the Phone number placeholder is visible
            cy.get('[data-test="user-settings-phoneNumber-input"]').should('be.visible')

            // check that the Submit placeholder is visible
            cy.get('[data-test="user-settings-submit"]').should('be.visible')
                

        })
    })

    describe('TC 2', () => {
        it('Displays user settings form error', () => {
            loginPage.login("Neke", "Neke123@123")
            cy.wait(2000)

            cy.get('[data-test="sidenav-user-settings"]')
                .should('be.visible')
                .click({ force: true });

        //Email with a wrong format

            cy.get('[data-test="user-settings-email-input"]').clear().type('Nil')
                
            cy.get('#user-settings-email-input-helper-text').should('be.visible')
            .contains('Must contain a valid email address');


         //Incorrect Phone number

            cy.get('[data-test="user-settings-phoneNumber-input"]').clear().type('090')
            
            cy.get('#user-settings-phoneNumber-input-helper-text').should('be.visible')
            .contains('Phone number is not valid');

         })
    })

    describe('TC 3', () => {
        it('Update user information', () => {
            loginPage.login("Neke", "Neke123@123")
            cy.wait(2000)

            //Nagivate to user settings
            cy.get('[data-test="sidenav-user-settings"]')
                .should('be.visible')
                .click({ force: true });

            //Update form information
            cy.get('[data-test="user-settings-firstName-input"]').clear().type('Etieno');
            cy.get('[data-test="user-settings-lastName-input"]').clear().type('Josephneke');
            cy.get('[data-test="user-settings-email-input"]').clear().type('etienoneke@gmail.com');
            cy.get('[data-test="user-settings-phoneNumber-input"]').clear().type('09034572347');
            
            //To submit updated form
            cy.get('[data-test="user-settings-submit"]').click()

        })

    })



})