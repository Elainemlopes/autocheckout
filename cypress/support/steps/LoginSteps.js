import LoginPage from "../pageobjects/LoginPage";
import HomePage from "../pageobjects/HomePage";


const loginPage = new LoginPage
const homePage = new HomePage


Given(/^que o cliente acesse o "([^"]*)" da Queima Diaria$/, () => {
	loginPage.acessarSite();
});


When(/^insere credenciais válidas$/, () => {
	loginPage.loginComSucesso();
});


When(/^clica no botao entrar$/, () => {
	loginPage.clicarBotao();
		
});


Then(/^home da plataforma exibida com sucesso$/, () => {
	homePage.textoHome();
});








