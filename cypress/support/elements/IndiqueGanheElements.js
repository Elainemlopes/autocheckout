
class IndiqueGanheElements {

    
    campoNameIG = () => { return '#name' }
    campoEmailIG = () => { return '#email' }
    campoTelefoneIG = () => { return '#phone' }
    campoCPFIG = () => { return '#document' }
    
    iframeCartao = () => {return '[title="Iframe para número de cartão seguro"]'}
    numeroDoCartao = () => { return '#encryptedCardNumber' }

    iframeValidade = ()=> {return '[title="Iframe para data de validade do cartão seguro"]'}
    validadeDoCartao =()=> { return '#encryptedExpiryDate' }
  
    iframeCvv = ()=> {return '[title="Iframe para código de segurança do cartão seguro"]'}
    cvvDoCartao =()=> { return '#encryptedSecurityCode' }

    nomeNoCartao  = () => { return 'input[name="card.holderName"]' }
    
   // botaoComprarAgora  = () => { return ('.css-wvao32') }
    
    }
    

export default IndiqueGanheElements;