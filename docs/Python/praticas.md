---
sidebar_position: 1
---

# Boas Práticas

## Introdução

Este documento tem como objetivo apresentar boas práticas de programação em Python. A seguir, são apresentadas algumas dicas para escrever um código mais limpo e eficiente.

## Práticas

### 1. Nomeação de variáveis

- **Use nomes descritivos**: o nome de uma variável deve ser descritivo e indicar o seu propósito. Por exemplo, se uma variável armazena a idade de uma pessoa, o nome da variável poderia ser `idade`.

- **Evite nomes genéricos**: evite nomes genéricos como `x`, `y`, `z`, `a`, `b`, `c`, etc. Esses nomes não são descritivos e dificultam a compreensão do código.

- **Use nomes em minúsculas**: por convenção, os nomes de variáveis em Python devem ser escritos em minúsculas, com palavras separadas por sublinhados (snake_case).

- **Use nomes em inglês**: é uma boa prática usar nomes de variáveis em inglês, pois a maioria dos programadores está familiarizada com o inglês e isso facilita a leitura do código.

- **Nomeação de constantes**: por convenção, as constantes em Python são escritas em letras maiúsculas, com palavras separadas por 
sublinhados. Por exemplo, `PI`, `GRAVITY`, `SPEED_OF_LIGHT`, etc.

- **Nomeação de funções**: o nome de uma função deve ser descritivo e indicar o que a função faz. Por exemplo, se uma função calcula a média de uma lista de números, o nome da função poderia ser `calcular_media`.	

- **Nomeação de Classes**: o nome de uma classe deve ser escrito em CamelCase, ou seja, a primeira letra de cada palavra é maiúscula e não há espaços entre as palavras. Por exemplo, `MinhaClasse`, `MinhaClasseComMetodos`, etc.

- **Evite nomes ambíguos**: evite nomes ambíguos que possam causar confusão. Por exemplo, se uma variável armazena o preço de um produto, o nome da variável poderia ser `preco_produto`, em vez de apenas `preco`.

### 2. Usabilidade

#### 2.1 Sufixo Underscore:
Use o sufixo underscore (_) para indicar que uma variável é privada. Por exemplo, `self._nome` indica que a variável `_nome` é privada e não deve ser acessada diretamente fora da classe.

Em Python, valores ou métodos que começam com um underscore (_) são uma convenção para indicar que são privados ou destinados para uso interno dentro de uma classe ou módulo. Isso não impede o acesso a esses valores ou métodos, mas sinaliza aos desenvolvedores que eles não devem ser usados fora do contexto em que foram definidos.


#### Exemplo:

```python
class Pessoa:
    def __init__(self, nome, idade):
        self._nome = nome
        self._idade = idade
```

```python
class _ClassePrivada:
    def __init__(self):
        pass
```