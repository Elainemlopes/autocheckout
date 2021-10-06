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
        // Preenchendo os campos iniciais.
     it.only('TextFields', () => {

        
        cy.get('#name').type('Elaine');
        cy.get('#email').type('teste@queimadiaria.com.br');
        cy.get('#phone').type('11999887766');
        cy.get('#document').type('17787842598'); //shift alt A*/

 
       // Preenchendo o número cartão de crédito ///
        cy.get('[title="Iframe para número de cartão seguro"]').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#encryptedCardNumber')
                .type('5066991111111118')
        })
        //Preenchendo data de validade
        cy.get('[title="Iframe para data de validade do cartão seguro"]').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('[placeholder="Mês/Ano"]')
                .type('0330', { force: true })
        })
 
        //Preenchendo CVV
         cy.get('[title^="Iframe para código de segurança"]').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#encryptedSecurityCode')
              .type('737')
        }) 

        //Preenchendo nome impresso no cartão  
        cy.get("[placeholder^='Nome impresso']")
          .type('Elaine')

        
        //Opções de pagamento

       // Obs: Só precisa trocar o select e o value para mudar a seleção das parcelas

        cy.get('select').select('11')
          .should('have.value', '11') 
              
        
        // Clicando no botão Comprar agora
        cy.get('.css-wvao32')
          .click();
         
      
        //Definição de Senha
        //Login
        cy.get('#field-1')
          .type('12345')

        //Senha    
        cy.get('#field-2')
        .type('12345')
        
        // Botão Criar senha e entrar 
        cy.get('.chakra-button')
        .click();
     

 })

})
