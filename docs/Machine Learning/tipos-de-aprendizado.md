---
sidebar_position: 2
---

# Tipos de Aprendizado

Sabemos que Machine Learning é a capacidade de fazer com que um determinado algoritmo **aprenda** a partir de um conjunto de dados. Mas como isso é feito? Como o algoritmo aprende? Quais são os tipos de aprendizado?

## Supervisionado

Aprendizado do tipo supervisionado é aquele que os dados de treinamento são **rotulados**, ou seja, já sabemos qual é a resposta correta para cada dado. 



### Aplicações

- **Classificação:** O algoritmo aprende a classificar os dados em classes pré-definidas. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a classificar as pessoas em homens e mulheres.


### Vantagens

- É possível avaliar o desempenho do algoritmo, pois já sabemos qual é a resposta correta para cada dado.
- Podemos usar métricas para avaliar o desempenho do algoritmo.

### Exemplo

Por exemplo, se queremos treinar um algoritmo para reconhecer imagens de cachorros, precisamos de um conjunto de dados de imagens de cachorros e outro conjunto de dados de imagens que não são de cachorros. Assim, o algoritmo vai aprender a reconhecer as imagens de cachorros e as que não são de cachorros.



## Não Supervisionado

Aprendizado do tipo não supervisionado é aquele que os dados de treinamento não são **rotulados**, ou seja, não sabemos qual é a resposta correta para cada dado.

### Aplicações

- **Clusterização** ou **Agrupamento:** O algoritmo aprende a agrupar os dados em grupos. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a agrupar as pessoas em grupos de acordo com suas características.

- **Visualização:** O algoritmo aprende a representar os dados em um espaço de menor dimensão. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a representar as pessoas em um espaço de duas dimensões, como um gráfico de dispersão.

- **Redução de Dimensionalidade:** O algoritmo aprende a reduzir a dimensionalidade dos dados. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a reduzir a dimensionalidade dos dados de forma que eles possam ser representados em um espaço de duas dimensões, como um gráfico de dispersão.

- **Detecção de Anomalias:** O algoritmo aprende a detectar anomalias nos dados. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a detectar pessoas que não pertencem a nenhum grupo.

- **Detecção de Novidades:** O algoritmo aprende a detectar novidades nos dados. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a detectar pessoas que não pertencem a nenhum grupo.

- **Regras de Associação:** O algoritmo aprende a encontrar regras de associação entre os dados. Por exemplo, se estamos trabalhando com dados de pessoas, o algoritmo pode aprender a encontrar regras de associação entre as características das pessoas.

    :::tip Mesclagem de aplicações

    É possível mesclar as aplicações. Por exemplo, podemos usar a clusterização para agrupar os dados e depois usar a visualização para representar os dados em um espaço de menor dimensão.

    :::

### Vantagens

- Não precisamos de dados rotulados, oque pode ser difícil de conseguir.
- É possível encontrar padrões nos dados que não seriam encontrados de outra forma.

### Exemplo

Por exemplo, se queremos treinar um algoritmo para agrupar imagens de cachorros, precisamos de um conjunto de dados de imagens de cachorros. Assim, o algoritmo vai aprender a agrupar e trabalhar com base nas aplicações desejadas as imagens de cachorros de acordo com suas características.


## Semi-Supervisionado

Aprendizado do tipo semi-supervisionado é aquele que os dados de treinamento são **parcialmente rotulados**, ou seja, apenas alguns dados possuem a resposta correta, devido ao alto custo de rotulação dos dados.

### Exemplo

Por exemplo, o Google Photos usa um algoritmo de aprendizado semi-supervisionado para reconhecer pessoas nas fotos. O algoritmo aprende a reconhecer as pessoas nas fotos que já foram rotuladas e depois usa esse conhecimento para reconhecer as pessoas nas fotos que ainda não foram rotuladas.

## Por Reforço

Aprendizado do tipo por reforço é aquele que o algoritmo aprende a partir de **tentativa e erro**, ou seja, o algoritmo recebe um feedback positivo quando acerta e um feedback negativo quando erra.

### Exemplo

Por exemplo, se queremos treinar um algoritmo para jogar xadrez, precisamos de um conjunto de dados de jogadas de xadrez. Assim, o algoritmo vai aprender a jogar xadrez e trabalhar com base nas aplicações desejadas a partir do feedback positivo quando acerta e um feedback negativo quando erra.

## Em Batch(Lote)

Aprendizado do tipo em batch(lote) é aquele que o algoritmo aprende a partir de **todos os dados de treinamento**, ou seja, o algoritmo recebe todos os dados de treinamento de uma vez, caso queira receber mais dados de treinamento, é necessário treinar o algoritmo novamente.

### Exemplo

Por exemplo, se queremos treinar um algoritmo para reconhecer imagens de cachorros, precisamos de um conjunto de dados de imagens de cachorros e outro conjunto de dados de imagens que não são de cachorros. Assim, o algoritmo vai aprender a reconhecer as imagens de cachorros e as que não são de cachorros a partir de todos os dados de treinamento de uma vez.

## Online

Aprendizado do tipo online é aquele que o algoritmo aprende a partir de **instâncias dos dados de forma sequencial ou em pequenos grupos**, ou seja, o algoritmo recebe parte do dado de treinamento por vez,cada etapa de treinamento é rápida e o algoritmo pode receber mais dados de treinamento a qualquer momento, mantendo um fluxo contínuo de aprendizado.



  
### Exemplo

Por exemplo, se queremos treinar um algoritmo para reconhecer predições de ações na bolsa de valores(Dados altamente variáveis), precisamos de um conjunto de dados de predições de ações na bolsa de valores. Assim, o algoritmo vai aprender a reconhecer as predições de ações na bolsa de valores a partir de instâncias dos dados de forma sequencial ou em pequenos grupos.

### Desafio

Caso o algoritmo receba dados que não são representativos do problema, ele pode aprender de forma errada e não conseguir se adaptar a novos dados.

:::tip Aprendizado Out-of-Core
    É aquele que treina sistemas em grandes conjuntos de dados que não cabem na memória principal de uma máquina, mas ele é feito de forma offline e sequencial.   
::: 

## Baseado em Instâncias


