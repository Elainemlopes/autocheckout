///<reference types="Cypress" />
import 'cypress-plugin-stripe-elements';
//import { type } from 'cypress/types/jquery';

describe('Cypress basics', () => {
    beforeEach(() => {
        cy.visit('https://checkoutdev.queimadiaria.com/checkout/1')
    })
        // Cenário 1. 
    it('validar o titulo da pagina', () => {
               
        cy.title().should('be.equal', 'Checkout | Queima Pay')
     // ou  cy.title().should('contain', 'Queima Pay')
     })
        // Cenário 2.
     it('Validar se está na página do checkout', () => {
         cy.get('body').should('contain', 'Seguro')
     })
        //Cenário 3 preenchendo os campos iniciais.
     it('TextFields', () => {

         cy.get('#name').type('Elaine');
         cy.get('#email').type('teste@queimadiaria.com.br');
         cy.get('#phone').type('11999887766');
         cy.get('#document').type('17787842598');
         
         // Preenchendo o cartão de crédito
         cy.get('.Iframe para número de cartão seguro').then (iframe =>{
             const body = iframe.contents().find('body')
             cy.wrap(body).find('#encryptedCardNumber')
             .type('4242424242424242')
         })
     //   }) 
    })

    //it.only('allows for a successful payment', () => {
        
    
          //cy.get('Campo de número de cartão')
        // .within(() => {
        // cy.fillElementsInput('Campo de número de cartão', '4242424242424242');
         //cy.fillElementsInput('cardExpiry', '1025'); // MMYY
        // cy.fillElementsInput('cardCvc', '123');
        // cy.fillElementsInput('postalCode', '90210');
        // });
    
        
     // })
        
  
})