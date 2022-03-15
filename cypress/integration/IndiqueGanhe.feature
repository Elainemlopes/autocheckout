
Feature: IndiqueGanhe

    Como usuário desejo concluir meu cadastro através do link de Indique e Ganhe

Scenario: Concluir meu cadastro através do link de Indique e Ganhe    

    Given que acesse o "link" promocional Indique e Ganhe
    And preenche "dados pessoais"
    And insere "dados do cartao de credito"
    Then Direciona a upcell "nutricional"