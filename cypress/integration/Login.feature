
Feature: Login

    Como usuário, desejo realizar login na plataforma.

Scenario: realizar login na plataforma com sucesso através de e-mail e senha.    

    Given que o cliente acesse o "site" da Queima Diaria
    When insere credenciais válidas
    And clica no botao entrar
    Then home da plataforma exibida com sucesso