
import IndiqueGanhePage from "../pageobjects/IndiqueGanhePage";
import UpcellPage from "../pageobjects/UpcellPage";

const indiqueGanhePage = new IndiqueGanhePage
const upcellPage = new UpcellPage


Given(/^que acesse o "([^"]*)" promocional Indique e Ganhe$/, () => {
	indiqueGanhePage.acessarIg();
});

When(/^preenche "([^"]*)"$/, () => {
	indiqueGanhePage.dadosPessoais();
	});


And(/^insere "([^"]*)"$/, () => {
	indiqueGanhePage.dadosDoCartao();
	});

Then(/^Direciona a upcell "([^"]*)"$/, () => {
		upcellPage.clicarBtnNutricional();
	});
	
	
		