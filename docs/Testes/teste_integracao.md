---
sidebar_position: 1
---

# Teste de Integração

Testes de integração são projetados para validar a interação entre diferentes partes de um sistema, como nossa aplicação e serviços externos. Esses serviços podem incluir, por exemplo, um banco de dados, um serviço de e-mail ou um serviço de pagamento. O objetivo é garantir que esses componentes distintos funcionem corretamente quando combinados, identificando e corrigindo problemas que podem surgir de suas interações.

Testes de Ingração são aqueles que:

- Possuem uma camada externa de dependência(banco de dados, serviços de terceiros, etc.)
- Se comunicam com a rede
- Tocam o sistema de arquivos

## Perguntas que devemos fazer antes de criar testes de integração

1. Como garantir que a API do serviço que consumo estará disponível na hora que meus testes rodarem?

2. É preciso efetuar hits na API de produção do meu serviço terceiro para executar meus testes ou essa API disponibiliza algum tipo de sandbox?

3. Preciso tomar cuidado para não atingir o limite de requisições que tenho sob contrato com essa API?

## Tipos de Testes de Integração

Os testes de integrações podem ser executados utilizando:

- Requisição comum ao serviço terceiro
- Mocks da resposta do serviço terceiro
- Um serviço virtual (sandbox)

### Requisição comum 

Neste caso, o teste é feito diretamente na API do serviço terceiro. Isso pode ser feito em um ambiente de teste ou em um ambiente de produção. O problema é que, se o serviço terceiro estiver fora do ar, os testes falharão e fazer requisições com método POST, PUT ou DELETE pode alterar o estado do serviço terceiro.

:::warning Atenção

    Pode ser uma forma simples de teste, mas não é recomendado para testes de integração.

:::

### Mocks

Mocks são objetos que simulam o comportamento de objetos reais. Eles são usados para testar o comportamento de outros objetos. No caso de testes de integração, os mocks são usados para simular o comportamento do serviço terceiro e podem ser construídos de forma mais dinâmica e controlada.

Mas utilizar objetos simulados na integração com terceiros não identifica problemas de comunicação com o serviço terceiro.

Como saber por exemplo, o quanto nossa aplicação é afetada pelo tempo de espera das respostas de requisições que fazemos a serviços de terceiros, antes dessa aplicação entrar em produção?

:::warning Atenção

    É útil para determinar se a aplicação está se comunicando corretamente com o serviço terceiro, mas não é suficiente para testar a integração real.

:::



### Serviço Virtual (Sandbox)

Algumas APIs disponibilizam um ambiente de testes, chamado de sandbox, que simula o comportamento do serviço terceiro. Isso permite que você faça testes de integração sem afetar o ambiente de produção do serviço terceiro.

:::warning Atenção

    É a forma mais segura e eficaz de testar a integração com serviços terceiros.

:::
