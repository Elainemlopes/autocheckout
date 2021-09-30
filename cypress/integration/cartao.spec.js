///<reference types="Cypress" />

import 'cypress-plugin-stripe-elements';

describe('Cypress basics', () => {
  beforeEach(() => {
      cy.visit('https://checkoutdev.queimadiaria.com/checkout/1')
  })

  //context('Actions', () => {
    
   // it('should fill out creditcard', () => {
       // cy.getWithinIframe('#encryptedCardNumber').type('4242424242424242');
      //   cy.getWithinIframe('[name="exp-date"]').type('1232');
      //  cy.getWithinIframe('[name="cvc"]').type('987');
     //   cy.getWithinIframe('[name="postal"]').type('12345');

        // adjust this to use your own pay now button
      //  cy.get('[data-cy="pay-now"]').click();
  //  });
});
