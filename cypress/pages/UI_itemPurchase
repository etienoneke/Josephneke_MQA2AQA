/**
 * Shopping Cart Action class (Page Object Model) 
 * To ensure that test is maintainable. 
 */

export class ShoppingCartActions {

    chooseItem() {
        // Add the selected item to the shopping cart
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    openCartToCheck() {
        // Access the shopping cart to review its contents
        cy.get('.shopping_cart_link').click();
    }

    verifyItemNameInCart() {
        // Confirm the presence of the item in the cart
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Bike Light');
    }

    verifyItemPriceInCart() {
        // Check and confirm the price of the item in the cart
        cy.get('.inventory_item_price').should('contain', '$9.99');
    }

    proceedToCheckout() {
        // Initiate the checkout process by clicking the checkout button
        cy.get('[data-test="checkout"]').click();
    }

    VerifyCheckoutIsEnabled() {
        // Confirm that the checkout button is enabled
        cy.get('[data-test="checkout"]').should('be.enabled');
    }

    inputCustomerFirstName() {
        // Input the customer's first name during checkout
        cy.get('[data-test="firstName"]').type('Etieno');
    }

    inputCustomerLastName() {
        // Input the customer's last name during checkout
        cy.get('[data-test="lastName"]').type('Josephneke');
    }

    inputPostalCode() {
        // Input the postal code during checkout
        cy.get('[data-test="postalCode"]').type('100000');
    }

    clickContinueButton() {
        // Proceed to the next step by clicking the Continue button
        cy.get('[data-test="continue"]').click();
    }

    clickFinishButton() {
        // Complete the checkout process by clicking the Finish button
        cy.get('[data-test="finish"]').click();
    }

    verifyThankYouMessage() {
        // Confirm the display of the thank you message on the completion page
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    }

    returnToHomePage() {
        // Navigate back to the homepage by clicking the designated button
        cy.get('[data-test="back-to-products"]').click();
    }
}
