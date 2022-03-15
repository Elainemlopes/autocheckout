///<reference types="cypress" /> 

import UpcellElements from "../elements/UpcellElements";
const upcellElements = new UpcellElements

class UpcellPage {

    clicarBtnNutricional(){         
      cy.get(upcellElements.btnNutricional()).click()
    }
      
} 

        
export default UpcellPage;
