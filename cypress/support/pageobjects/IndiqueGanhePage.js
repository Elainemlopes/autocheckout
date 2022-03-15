///<reference types="cypress" /> 
import IndiqueGanheElements from "../elements/IndiqueGanheElements";
import UpcellElements from "../elements/UpcellElements";


const  indiqueGanheElements = new IndiqueGanheElements
const upcellElements = new UpcellElements

class IndiqueGanhePage {

    acessarIg(){
         
        cy.visit('https://checkoutdev.queimadiaria.com/checkout/199?src=g8f8ah72hbgde')
       }

    dadosPessoais(){

        cy.get(indiqueGanheElements.campoNameIG()).type("Cliente novo")
        cy.get(indiqueGanheElements.campoEmailIG()).type("pbnxybbv@hotmail.com")
        cy.get(indiqueGanheElements.campoTelefoneIG()).type("31999009988")
        cy.get(indiqueGanheElements.campoCPFIG()).type("03127886063")

    }

    dadosDoCartao(){

        cy.get(indiqueGanheElements.iframeCartao()).then(iframe => {    
            const body = iframe.contents().find('body')
            cy.wrap(body).find(indiqueGanheElements.numeroDoCartao()).type("2222400070000005")
        })  

        cy.get(indiqueGanheElements.iframeValidade()).then(iframe => {    
            const body = iframe.contents().find('body')
            cy.wrap(body).find(indiqueGanheElements.validadeDoCartao()).type("0330")
        })     

        cy.get(indiqueGanheElements.iframeCvv()).then(iframe => {    
            const body = iframe.contents().find('body')
            cy.wrap(body).find(indiqueGanheElements.cvvDoCartao()).type("737")
        })

     
        cy.get(indiqueGanheElements.nomeNoCartao()).type("Cliente novo")
          
        cy.contains("Comprar agora").click() 

        cy.get(upcellElements.btnNutricional())
    }   

}

export default IndiqueGanhePage;