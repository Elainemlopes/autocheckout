/// <reference types="cypress" /> 
import HomeElements from "../elements/HomeElements";

const  homeElements = new HomeElements


class HomePage {

    textoHome(){
         
               cy.get(homeElements.textoHome()).should('be.visible')
       }
}     

export default HomePage;