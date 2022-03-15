/// <reference types="cypress" /> 
import LoginElements from "../elements/LoginElements";

const loginElements = new LoginElements

class LoginPage {
   
     acessarSite(){
         
         cy.visit('https://dev.queimadiaria.com/home')
        }
     loginComSucesso(){
            cy.get(loginElements.campoEmail()).type("elaine.lopes@queimadiaria.com.br", {force: true})
            cy.get(loginElements.campoSenha()).type("123456", {force: true})
            }    

     clicarBotao(){
            cy.get(loginElements.botaoEntrar()).click({force: true})
                
                
            }         
            
}   
         
export default LoginPage;