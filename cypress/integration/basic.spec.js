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
     it.only('TextFields', () => {

        // cy.get('#name').type('Elaine');
        // cy.get('#email').type('teste@queimadiaria.com.br');
       //  cy.get('#phone').type('11999887766');
        // cy.get('#document').type('17787842598');

       
         // Preenchendo o número cartão de crédito ///
         cy.get('[title="Iframe para número de cartão seguro"]').then (iframe =>{
          const body = iframe.contents().find('body')
          cy.wrap(body).find('#encryptedCardNumber')
         .type('4242424242424242')
        })
        //Preenchendo data de validade
        cy.get('[title^="Iframe para data de validade"]').then (iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#encryptedExpiryDate')
           .type('0330')
          })

        //Preenchendo CVV
        cy.get('[title^="Iframe para código de segurança"]').then (iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#encryptedSecurityCode')
           .type('737')
          })  

          ///Preenchendo nome impresso no cartão  
             cy.get('#card.holderName').type('Elaine')
        //   cy.get('[id="card.holdername"]').type('Elaine')
          

        
               
    })

   // it.only('clicando no botão Comprar Agora', () => {
    //   cy.get('.css-wvao32').click();     
     //   })
})